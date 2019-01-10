import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css'
import $ from 'jquery'
import '../static/assets/scripts/klorofil-common'
import axios from 'axios';
Vue.use(ElementUI);
// axios.defaults.timeout = 5000;// 在超时前，所有请求都会等待 5 秒
// axios.defaults.headers.post['Content-Type']= 'application/x-www-form-urlencoded;';
// axios.defaults.baseURL = 'http://192.168.1.8:8080/FH-WEB/shops/';// 配置接口地址
// axios.defaults.withCredentials = false;
 
Vue.prototype.$axios = axios;

new Vue({
  el: '#wrapper',
  router,
  components: { App },
  template: '<App/>'
})

