require('dotenv').config()
const express = require('express')
const app = express()
const porta = process.env.PORT
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

console.log('porta',porta)

const createUser = require('./createUser/createUser.js')

app.use('/',createUser)

app.listen(porta,()=>{console.log(`Servidor rodando na porta ${porta}`)})

