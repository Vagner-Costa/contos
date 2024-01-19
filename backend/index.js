require('dotenv').config()
const express = require('express')
const app = express()
const porta = process.env.PORT
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const createUser = require('./createUser/createUser.js')
const login = require('./login/login.js')

app.use('/',createUser)
app.use('/',login)

app.listen(porta,()=>{console.log(`Servidor rodando na porta ${porta}`)})

