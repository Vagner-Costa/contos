import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/index.vue'
import PageLogin from '../views/pageLogin.vue'
import CreateUser from '../views/createUser.vue'
import Users from '../views/users.vue'
import Publish from '../views/publish.vue'
import MyPublications from '../views/myPublications.vue'
import Administrator from '../views/administrator.vue'


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
            component:CreateUser
        },
        {
            path: "/users",
            name:"users",
            component:Users
        },
        {
            path:"/publish",
            name:"publish",
            component:Publish
        },
        {
            path:"/myPublications",
            name:"myPublications",
            component:MyPublications
        },
        {
            path:"/administrator",
            name:"administrator",
            component:Administrator
        }
    ]
})

export default router