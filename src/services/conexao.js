import dotenv from 'dotenv'
dotenv.config()
import {MongoClient} from 'mongodb'
const url_connection = process.env.URL_CONNECTION
const client = new MongoClient(url_connection)

export const connection = async(req,res,next)=>{
    try{
        client.connect()
        req.access = client.db('contos_e_historias')
        next()
    }catch(err){
        console.log('Ocorreu um erro de conexão com o banco de dados',err)
        return res.sendStatus(500).end()
    }
}

 

