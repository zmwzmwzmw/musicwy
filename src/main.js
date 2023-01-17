import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'

import 'vant/lib/index.css'
import Setting from '@/components/Setting/index'
import Api from '@/Api/index'
Vue.use(Vant)
Vue.use(Lazyload)
Vue.component('Setting', Setting)
Vue.prototype.$Api = Api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
