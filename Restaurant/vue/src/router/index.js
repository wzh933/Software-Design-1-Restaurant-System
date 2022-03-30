import {createRouter, createWebHistory} from 'vue-router'
import Layout from '../layout/Layout.vue'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
import Register from '../views/Register.vue'
import Person from "../views/Person";
import Menu from "../views/Menu";
import HYMenu from "../views/HYMenu";
import DBMenu from "../views/DBMenu";
import CMenu from "../views/CMenu";
import Drink from "../views/Drink";
import Rice from "../views/Rice";
import Select from "../views/Select";
import VIP from "../views/VIP";

const routes = [

    {
        path: '/',
        // path:'/layout',
        name: 'Layout',
        component: Layout,
        redirect: "/login",
        children: [
            {
                path: 'user',
                name: 'User',
                component: User,
            },
            {
                path: 'menu',
                name: 'Menu',
                component: Menu
            },
            {
                path: 'hymenu',
                name: 'HYMenu',
                component: HYMenu
            },
            {
                path: 'dbmenu',
                name: 'DBMenu',
                component: DBMenu
            },
            {
                path: 'cmenu',
                name: 'CMenu',
                component: CMenu
            },
            {
                path: 'drink',
                name: 'Drink',
                component: Drink
            },
            {
                path: 'rice',
                name: 'Rice',
                component: Rice
            },
            {
                path: 'person',
                name: 'Person',
                component: Person
            },
            {
                path: 'select',
                name: 'Select',
                component: Select
            },
            {
                path: 'vip',
                name: 'VIP',
                component: VIP
            }

        ]
    },


    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/register',
        name: 'Register',
        component: Register
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
