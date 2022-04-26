import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Sheet from '../components/Home/Sheet.vue';

const routes=[
    {
        path:'/',
        name:'Login',
        component:Login,
    },
    {
        path:'/home',
        name:'Home',
        component:Home,
        children:[
            {
                path:'sheet',
                name:'Sheet',
                component:Sheet,
            },
        ]

    }
]

export default new VueRouter({
    routes
});