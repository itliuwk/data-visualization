import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import index1 from '../views/index1.vue'
import map from '../views/map/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },  {
    path: '/index1',
    name: 'index1',
    component: index1
  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
