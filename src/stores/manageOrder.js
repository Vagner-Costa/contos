import { defineStore } from "pinia"
import {orderPublications} from "../services/orderPublications"

export const useManageOrder = defineStore('manageOrder',{
    state:  ()=>{
        return {
            pos:0,
            tam:350,
            mover:0,
            qtde_mover : orderPublications.length-1
        }
    },
    getters: {
        gettersManageOrder(state){
            return state.mover
        }
    },
    actions: {
        actionsManageOrder(dir){
            if(dir === "+"){
                if(this.pos > 0){
                    this.pos--
                    this.mover = -(this.pos * this.tam)
                }else{
                    this.pos = 0
                    this.mover = -(this.pos * this.tam)
                }
            }else if(dir === "-"){
                if(this.pos < this.qtde_mover){
                    this.pos++
                    this.mover = -(this.pos * this.tam)
                }else{
                    this.pos = this.qtde_mover
                    this.mover = -(this.pos * this.tam)
                }
            }
        }
    }
})