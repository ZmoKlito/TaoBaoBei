import VueRouter from 'vue-router';

import Home from '../components/Home/Home.vue';
import Login from '../components/Login/Login.vue';
const routes=[
    {
        path:'/',
        name:'Login',
        component:Login
    },
    {
        path:'/home',
        name:'Home',
        component:Home
    }
]

export default new VueRouter({
    routes
});