import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index'
import Find from '@/views/Find/index'
// import Boke from '@/views/Boke/index'

Vue.use(VueRouter)
// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

const routes = [
  { path: '/', redirect: '/find' },
  {
    path: '/',

    component: Layout,
    children: [{ path: 'find', component: Find },
      { path: 'boke', component: () => import('@/views/Boke/index') },
      { path: 'my', component: () => import('@/views/My/index') },
      { path: 'attention', component: () => import('@/views/Attention/index') },
      { path: 'community', component: () => import('@/views/Community/index') },
      { path: 'songdetail', component: () => import('@/views/SongDetail/index') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
