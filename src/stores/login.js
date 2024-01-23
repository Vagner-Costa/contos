import { defineStore } from 'pinia'
import axios from 'axios'
import {url} from '../services/enderecos.js'
import router from '../routes/index.js'

export const useLogin = defineStore('login',{
    state: ()=>{
        return {
            status :0,
            msg : null
        }
    },
    getters:{
        gettersLogin : (state)=>{
            return state
        }
    },
    actions:{
        async actionsLogin(payload){
            const email = await payload.email
            const pass = await payload.pass

            axios({
                method:"POST",
                url:`${url}/login`,
                data:{
                    email:email,
                    pass:pass
                }
            })
            .then((response)=>{
                if(response.status === 200){
                    sessionStorage.setItem('token',response.data.token)
                    router.push('/users')
                }
            })
            .catch((error)=>{
                if(error.response.status === 404){
                    this.status=0;
                    this.msg = 'Usuário ou senha inválido'
                }
                if(error.response.status === 500){
                    this.status=0;
                    this.msg = "Erro ao se conectar com o banco de dados. Tente novamente mais tarde."
                }
            })
        }
    }
})