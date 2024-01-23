import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const secret = process.env.SECRET


export const checkToken = async(req,res,next)=>{
    if(!req.headers.authorization || 
        !req.headers.authorization.split(" ")[1] || 
        req.headers.authorization === null
    ){
        return res.sendStatus(498).end() // token inválido ou expirado
    }

    const token = await req.headers.authorization.split(" ")[1]

    try{
        const decoded = jwt.verify(token,secret)
        req.id = decoded.id
        next()
    }catch(error){
        console.log(error)
        return res.sendStatus(498).end() // token inválido ou expirado
    }
}