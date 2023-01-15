import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index'

Vue.use(VueRouter)
// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

const routes = [
  {
    path: '/',

    component: Layout
  }

]

const router = new VueRouter({
  routes
})

export default router
