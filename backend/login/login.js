
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()
const secret = process.env.SECRET

import {connection} from '../../src/services/conexao.js'

router.post('/login',connection,async(req,res)=>{
    const connection = await req.access
    const { email,pass } = await req.body
    let token = null

    // consultando se email é válido
    connection.collection('users').find({email:email}).toArray()
    .then(async(response)=>{
        if(response.length > 0){
            //Descriptografando e validando senha
            bcrypt.compareSync( pass , response[0].password) ? 
                //Senha válida , gerando token JWT
                token = jwt.sign({id : response[0]._id}, secret, { expiresIn: '1h' }) 
                    : 
                //senha inválida, erro ao validar senha
                token=null
                
            if(token){
                return res.status(200).json({token:token}) // OK
            }else{
                return res.status(404).send() // senha não encontrada
            }
            
        }else{
            return res.sendStatus(404).end() //Não encontrado
        }
    })
    .catch((err)=>{
        return res.status(500).end()  //Erro ao se conectar
    })
})

export default router