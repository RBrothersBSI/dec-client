import Vue from 'vue'
import VueRouter from 'vue-router'
import DiscoveryHome from '../views/discovery/DiscoveryHome.vue'
import DiscoverySetup from '../views/discovery/DiscoverySetup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DiscoveryHome',
    component: DiscoveryHome
  },
  {
    path: '/DiscoveryHome',
    name: 'DiscoveryHome',
    component: DiscoveryHome
  },
  {
    path: '/DiscoverySetup',
    name: 'DiscoverySetup',
    component: DiscoverySetup
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
