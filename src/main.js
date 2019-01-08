import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// import '../static/assets/css/main.css'
// import '../static/assets/css/demo.css'
=======
>>>>>>> 7a5589ec758a3347813da9cc4e9aa460fdb007f1
import '../static/assets/scripts/klorofil-common'
// 在 index.vue  里做  默认 上传营业执照  router 控制跳转
// Vue.config.productionTip = false
// honest honesthonesthonest 
new Vue({
  el: '#wrapper',
  router,
  components: { App },
  template: '<App/>'
})
