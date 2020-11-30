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
    path: '/task-tracker',
    name: 'TaskTracker',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskTracker.vue')
  }

]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
