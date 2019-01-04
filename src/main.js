import Vue from 'vue'
import App from './App'
import router from './router'

// import '../static/assets/css/main.css'
// import '../static/assets/css/demo.css'
import '../static/assets/scripts/klorofil-common'
// import '../static/assets/vendor/toastr/toastr'
Vue.config.productionTip = false
new Vue({
  el: '#wrapper',
  router,
  components: { App },
  template: '<App/>'
})
