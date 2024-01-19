import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/index.vue'
import PageLogin from '../views/pageLogin.vue'
import createUser from '../views/createUser.vue'
import users from '../views/users.vue'


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
        {
            path: "/users",
            name:"users",
            component:users
        },
    ]
})

export default router