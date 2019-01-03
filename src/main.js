import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/assets/vendor/bootstrap/css/bootstrap.css'
import '../static/assets/vendor/font-awesome/css/font-awesome.min.css'
import '../static/assets/vendor/linearicons/style.css'
import '../static/assets/vendor/chartist/css/chartist-custom.css'
import '../static/assets/css/main.css'
import '../static/assets/css/demo.css'
import '../static/assets/scripts/klorofil-common'
Vue.config.productionTip = false
new Vue({
  el: '#wrapper',
  router,
  components: { App },
  template: '<App/>'
})
