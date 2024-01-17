import { defineStore } from 'pinia'

export const useCreateUser = defineStore('createUser',{
    state:()=>{return ''},
    getters:{},
    actions:{
        async actionsCreateUser(payload){
            const email = await payload.email
            const pass = await payload.pass
            const confirmPass = await payload.confirmPass
        }
    }
})