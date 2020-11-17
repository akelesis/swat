import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DashboardTeacher from '../views/DashboardTeacher.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchResult')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboardteacher',
    name: 'DashboardTeacher',
    component: DashboardTeacher
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
