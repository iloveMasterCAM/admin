import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import sever from './assets/js/ajax'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css'
import $axios from 'axios';

import '../static/assets/scripts/klorofil-common'
Vue.use(ElementUI);
/**/
Vue.prototype.ajax = sever
Vue.prototype.axios = $axios
Vue.config.productionTip = false
// 设置cookie
Vue.prototype.setCookie = function (c_name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = c_name + "=" + escape(value) +
    ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
};


//获取cookie
Vue.prototype.getCookie = function (c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + "=")
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      var c_end = document.cookie.indexOf(";", c_start)
      if (c_end == -1) c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ""
};

Vue.prototype.delCookie = function (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = this.getCookie(name);
  if (cval != null){
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    return true;
  }else{
    return false
  }
    
}

new Vue({
  el: '#wrapper',
  router,
  components: { App },
  template: '<App/>'
})

