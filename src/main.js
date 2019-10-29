import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'

import './css/common.css'

// 全局注册组件
import OrderPane from './components/OrderPane'
Vue.component("briup-order-pane",OrderPane)
// vue过滤器
Vue.filter("datefmt",function(input){
  return moment(input).format('YYYY-MM-DD HH:mm:ss')
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
