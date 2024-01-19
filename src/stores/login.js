import { defineStore } from 'pinia'
import axios from 'axios'
import {url} from '../services/enderecos.js'
import router from '../routes/index.js'

export const useLogin = defineStore('login',{
    state: ()=>({}),
    getters:{},
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
                    sessionStorage.getItem('token',response.data.token)
                    router.push('/users')
                }else{

                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
})