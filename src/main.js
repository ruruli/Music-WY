import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'lib-flexible/flexible'
import './plugins/vant.js'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')
