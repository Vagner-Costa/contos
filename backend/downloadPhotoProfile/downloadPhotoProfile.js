import express from 'express'
import mongodb from 'mongodb'

const router  = express.Router()

import { checkToken } from '../../src/services/checkToken.js'
import { connection } from '../../src/services/conexao.js'

router.get('/uploadPhotoProfile',checkToken,connection,async(req,res)=>{
    const con = req.access
    const {photo} = req.query
    const bucket =  new mongodb.GridFSBucket(con, { bucketName: 'profile' })

    bucket.openDownloadStream(new mongodb.ObjectId(photo)).
        pipe(res);
})

export default router