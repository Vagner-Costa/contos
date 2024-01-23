import { defineStore } from "pinia"

export const useModalMenu = defineStore('modalMenu',{
    state: ()=>{
        return{
            toggleModal : false,
            setModal : false,
            setHeader : false
        }
    },
    getters:{
        gettersModalMenu:(state)=>{
            return state
        }
    },
    actions:{
        async actionsModalMenu(){
            this.toggleModal = !this.toggleModal

            if(this.toggleModal){
                this.setModal = true
                setTimeout(()=>{
                    this.setHeader = true
                },20)
            }else{
                this.setHeader = false
                setTimeout(()=>{
                    this.setModal = false
                },200)
            }
        }
    }

})