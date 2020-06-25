import Vue from 'vue'
import VueRouter from 'vue-router'
import CompareAmmo from '../views/CompareAmmo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'CompareAmmo',
    component: CompareAmmo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/maps',
    name: 'Maps',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Maps.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
