import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/assets/scripts/klorofil-common'
// 在 index.vue  里做  默认 上传营业执照  router 控制跳转
// Vue.config.productionTip = false
new Vue({
  el: '#wrapper',
  router,
  components: { App },
  template: '<App/>'
})
