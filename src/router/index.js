import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import map from '../views/map/index.vue'
import detail from '../views/detail/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: index
    },
    {
        path: '/map',
        name: 'map',
        component: map
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
