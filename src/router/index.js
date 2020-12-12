import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DashboardTeacher from '../views/DashboardTeacher.vue'
import DashboardCoordination from '../views/DashboardCoordination'

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
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem('__user')) {
        next()
      } else {
        next({
          name: "Login" // back to safety route //
        });
      }
    },
    component: DashboardTeacher
  },
  {
    path: '/article-details',
    name: 'ArticleDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleDetails')
  },
  {
    path: '/dashboardcoordination',
    name: 'DashboardCoordination',
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem('__user')) {
        next()
      } else {
        next({
          name: "Login" // back to safety route //
        });
      }
    },
    component: DashboardCoordination
  },
  {
    path: '/professor-register',
    name: 'ProfessorRegister',
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem('__user')) {
        next()
      } else {
        next({
          name: "Login" // back to safety route //
        });
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfessorRegister')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
