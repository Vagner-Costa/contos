import express from 'express'
import mongodb from 'mongodb'

const router = express.Router()

import {connection} from '../../src/services/conexao.js'
import {checkToken} from '../../src/services/checkToken.js'

router.get('/userData',checkToken,connection,async (req,res)=>{
    const connection = await req.access 
    const id = await req.id

    const response = await connection.collection('users').aggregate([
        {$match:{_id : new mongodb.ObjectId(id)}},
        { $project: { password:0 }}
    ]).toArray()

    if(response){
        return res.status(200).json({response}) // ok
    }else{
        return res.sendStatus(404).end() // Usuário não encontrado
    }
})

export default router