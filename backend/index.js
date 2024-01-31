import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config()

const app = express()
const porta = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

import createUser from './createUser/createUser.js'
import login from './login/login.js'
import userData from './userData/userData.js'
import uploadPhotoProfile from './uploadPhotoProfile/uploadPhotoProfile.js'
import downloadPhotoProfile  from './downloadPhotoProfile/downloadPhotoProfile.js'

app.use('/',createUser)
app.use('/',login)
app.use('/',userData)
app.use('/',uploadPhotoProfile)
app.use('/',downloadPhotoProfile)

app.listen(porta,()=>{console.log(`Servidor rodando na porta ${porta}`)})

