import { defineStore } from "pinia"
import { url } from '../services/enderecos'
import axios from 'axios'
import router from '../routes/index.js'

export const useDownloadPhotoProfile = defineStore('downloadPhotoProfile',{
    state:()=>{
        return {
            blob_photo : null
        }
    },
    getters : {
        gettersDownloadPhotoProfile:(state)=>{
            return  state.blob_photo
        }
    },
    actions : {
        actionsDownloadPhotoProfile(payload){
            const photo = payload.id_photo
            let token = null

            if(sessionStorage.getItem('token')){
                token = sessionStorage.getItem("token")
            }else{
                router.push('/pageLogin')
            }

            axios({
                url : `${url}/uploadPhotoProfile`,
                method : 'GET',
                responseType : 'blob',
                headers: {
                    'authorization': `Bearer ${token}` ,
                },
                params:{
                    photo : photo
                }
            })
            .then(async (response)=>{
                if(response.status === 200){
                    this.blob_photo = URL.createObjectURL(response.data)
                }
                
            })
            .catch((error)=>{
                console.log(error)
                if(error.response){
                    alert('Um erro inesperado aconteceu. Tente novamente mais tarde!')
                }
            })

        }
    }
})