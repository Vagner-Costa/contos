import { defineStore } from 'pinia'
import axios from 'axios'
import {url} from '../services/enderecos.js'
import router from '../routes/index.js'


export const useCreateUser = defineStore('createUser',{
    state: () =>{
        return {
            status:0,
            msg:null
        }
    },
    getters:{
        gettersCreateUser: (state)=>{
            return state
        }
    },
    actions:{
        async actionsCreateUser(payload){
            const email = await payload.email
            const pass = await payload.pass
            const confirmPass = await payload.confirmPass

            await axios({
                method:'POST',
                url:`${url}/createUser`,
                data:{
                    email:email,
                    pass:pass,
                    confirmPass:confirmPass
                }
            })
            .then((response)=>{
                if(response.status === 201){
                    this.msg = "Usuário criado com sucesso!"
                    this.status = 1
                    setTimeout(()=>{
                        router.push('/pageLogin')
                    },2000)
                }
            })
            .catch((error)=>{
                if(error.response.status === 401){
                    this.msg = "Este email é inválido ou já existente, tente outro email."
                    this.status = 0
                }else if(error.response.status === 500){
                    this.msg = "Erro ao se conectar com o banco de dados. Tente novamente mais tarde."
                    this.status = 0
                }else if(error.response.status === 409){
                    this.msg = "Ocorreu um erro inesperado, tente novamente mais tarde."
                    this.status = 0
                }
            })   
        }
    }
})