require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const secret = process.env.SECRET

const connection = require('../../src/services/conexao.js')

router.post('/createUser',connection,async(req,res)=>{
    const connection = await req.connection_bd
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
        const salt = await bcrypt.genSaltSync(12)
        const hash = await bcrypt.hashSync(pass,salt)

        connection.collection('users').insertOne({
            email:email,
            passaword:hash,
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

module.exports = router