import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '../views/index.vue'
import Nav from '../views/nav.vue'
import Set from '../views/$set.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Set',
    component: Set
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
