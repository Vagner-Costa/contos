import express from 'express'
import mongodb from 'mongodb'
import fs from 'fs'

const router = express.Router()

import { connection } from '../../src/services/conexao.js'
import { checkToken } from '../../src/services/checkToken.js'
import  upload  from '../../src/services/uploadPhotoProfile.js'

router.put('/uploadPhotoProfile',checkToken,upload.single('photo'),connection,async (req,res)=>{
    const con = req.access
    const file = req.file
    const id_user = req.id
    const bucket = new mongodb.GridFSBucket(con,{bucketName: 'profile'})
    let id_bucket = null

    //Obtendo o ID da foto
    const res_aggregate = await  con.collection('users').aggregate([
        {$match:{ _id :new mongodb.ObjectId(id_user)}},
        {$project:{password : 0, email : 0, name : 0}}
    ]).toArray()

    //Adicionando a nova foto no GridFS e obtendo o novo ID
    id_bucket = await fs.createReadStream(`${file.destination}${file.filename}`).
        pipe(bucket.openUploadStream(`${file.filename}`))

    if(id_bucket.id){
        //Alterando o id da foto no BD
        con.collection('users').updateOne(
            {_id : new mongodb.ObjectId(id_user)},{$set:{foto:id_bucket.id}}
        )
        .then(async(response)=>{
            if(response.acknowledged && response.modifiedCount > 0){
                //Excluindo foto antiga do bucket
                if(res_aggregate.length > 0){
                    bucket.delete(new mongodb.BSON.ObjectId(res_aggregate[0].foto))
                    deleteFile(200)//passar o status
                }
            }
        })
        .catch((error)=>{
            console.log(error)
            deleteFile(500)//passar o status
        })
    }else{
        deleteFile(409)//passar o status
    }

    function deleteFile(payload){
        fs.unlinkSync(`${file.destination}${file.filename}`)
        return res.status(payload).end()
    }

})

export default router