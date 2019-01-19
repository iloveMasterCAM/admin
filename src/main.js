import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
 import sever from './assets/js/ajax' //jq ajax
import http from './assets/js/axios' // vue axios
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css'
 import t from './assets/js/token'
import '../static/assets/scripts/klorofil-common'
Vue.use(ElementUI);

  Vue.prototype.token =  new t()

Vue.prototype.ajax = sever
Vue.prototype.axios = new http()

Vue.config.productionTip = false
new Vue({
  el: '#wrapper',
  router,
  components: { App },
  template: '<App/>'
})

