import Vue from 'vue'
import VueRouter from 'vue-router'
import test1 from '../components/test1/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'test1',
    component: test1
  },
 
]

const router = new VueRouter({
  routes
})

export default router
