import {defineStore} from 'pinia'
import {url} from '../services/enderecos.js'
import axios from 'axios'
import router from '../routes/index.js'

export const useUploadPhotoProfile = defineStore('uploadPhotoProfile',{
    state: ()=>{},
    getters:{},
    actions:{
        async actionsUploadPhotoProfile(payload){
            console.log(payload.photo_profile)
            const photo_profile = payload.photo_profile
            let token = null
            
            if(sessionStorage.getItem('token')){
                token = sessionStorage.getItem('token')
            }else {
                router.push('/pageLogin')
            }

            const formData = new FormData()
            formData.append('photo',photo_profile)

            axios.put(`${url}/uploadPhotoProfile`,formData,{headers:{authorization : `Bearer ${token}`,'Content-type':'multipart/form-data'}})
            .then((response)=>{console.log(response)})
            .catch((error)=>{
                if(error.response.status === 500){
                    alert("Erro no servidor")
                }
                if(error.response.status === 409){
                    alert("Um erro inesperado aconteceu. Tente novamente mais tarde!")
                }
                if(error.response.status === 498){
                    router.push('/pageLogin')
                }

            })
        }
    }
})