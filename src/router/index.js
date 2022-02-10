import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Nav from '../views/nav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/nav',
    name: 'nav',
    component: Nav
  }
]

const router = new VueRouter({
  routes
})

export default router
