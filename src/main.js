import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant.js'
import './style/global/index.scss'

// mock接口
import '../mock/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
