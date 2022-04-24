import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }, {
        path: '/second',
        name: 'second',
        component: () => import('../views/SecondView.vue')
      }, {
        path: '/third',
        name: 'third',
        component: () => import('../views/ThirdView.vue')
      }, {
        path: '/forth',
        name: 'forth',
        component: () => import('../views/ForthView.vue')
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
