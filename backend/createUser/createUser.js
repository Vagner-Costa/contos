import express from 'express'
import bcrypt from 'bcrypt'

const router = express.Router()

import {connection} from '../../src/services/conexao.js'

router.post('/createUser',connection,async(req,res)=>{
    const connection = await req.access
    const email = await req.body.email
    const pass = await req.body.pass

    connection.collection('users').find({
        email:email
    }).toArray()
    .then((response)=>{
        if(response.length > 0){
            return res.sendStatus(401).end() //Não autorizado
        }else if(response.length <= 0){
            cadastrar()
        }
    })
    .catch((err)=>{
        console.log(err.message)
        return res.status(500).end()  //Erro ao se conectar
    })

    const cadastrar = async()=>{
        const salt = bcrypt.genSaltSync(12)
        const hash = bcrypt.hashSync(pass,salt)

        connection.collection('users').insertOne({
            name:'',
            foto:'',
            email:email,
            password:hash,
        })
        .then((response)=>{
            if(response.acknowledged){
                return res.sendStatus(201).end() //OK
            }else{
                return res.sendStatus(409).end() //Conflito
            }
        })
        .catch((err)=>{
            console.log(err.message)
            return res.status(500).end() //Erro ao se conectar
        })
    }

})

export default router