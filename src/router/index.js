import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/all',
        name: 'all',
        params: { visibility: 'all' }
    },
    {
        path: '/active',
        name:'active',
        params: { visibility: 'active' }
    },
    {
        path: '/completed',
        name:'completed',
        params: { visibility: 'completed' }
    },
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});



export default router

