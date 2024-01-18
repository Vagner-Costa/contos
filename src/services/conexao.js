require('dotenv').config()
const mongodb = require('mongodb').MongoClient
const url_connection = process.env.URL_CONNECTION

const connection = async(req,res,next)=>{
    try{
        const res_url_connection = await mongodb.connect(url_connection)
        req.connection_bd = await res_url_connection.db('contos_e_historias')
        next()
    }catch(err){
        console.log('Ocorreu um erro de conexão com o banco de dados',err)
        return res.sendStatus(500).end()
    }
}

module.exports = connection 

