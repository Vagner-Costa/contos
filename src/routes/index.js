import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/index.vue'
import PageLogin from '../views/pageLogin.vue'
import createUser from '../views/createUser.vue'

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
            path: "/createUser",
            name:"createUser",
            component:createUser
        },
    ]
})

export default router