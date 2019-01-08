import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

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
