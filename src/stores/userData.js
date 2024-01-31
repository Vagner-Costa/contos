import {defineStore} from 'pinia'
import axios from 'axios'
import {url} from '../services/enderecos.js'
import router from '../routes/index.js'

export const useUserData = defineStore('userData',{
    state: ()=>({
        user : null
    }),
    getters:{
        gettersUserData:(state)=>{
            return state.user
        }
    },
    actions:{
        async actionsUserData(payload){
            const token = payload.token

            await axios({
                method:'GET',
                url:`${url}/userData`,
                headers:{
                    responseType:'json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(async(response)=>{
                if(response.status === 200){
                    this.user = await response.data.response[0]
                }
            })
            .catch((error)=>{
                console.log(error)
                if(error.response.status=== 498){
                    router.push('/pageLogin')
                }else{
                    router.push('/pageLogin')
                }
                
            })

            if(this.user){
                return this.user
            }
        }
    }
})