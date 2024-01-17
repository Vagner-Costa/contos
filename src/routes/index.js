import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/index.vue'
import PageLogin from '../views/pageLogin.vue'
import PageCreateUser from '../views/pageCreateUser.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            name: "/",
            component: Home
        },
        {
            path: "/pageLogin",
            name:"pageLogin",
            component:PageLogin
        },
        {
            path: "/pageCreateUser",
            name:"pageCreateUser",
            component:PageCreateUser
        },
    ]
})

export default router