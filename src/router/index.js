import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../App'
import Red from '../views/Red.vue'
import Yellow from '../views/Yellow.vue'
import Green from '../views/Green.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/red',
    name: 'General',
    // component: App
  },
  {
    path: '/red',
    name: 'Red',
    component: Red
  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: Yellow
  },
  {
    path: '/green',
    name: 'Green',
    component: Green
  },
]

const router = new VueRouter({
  routes
})

export default router
