import axios from 'axios';
axios.defaults.timeout = 5000;
axios.defaults.basseURL = 'http://192.168.1.8:8080/FH-WEB/shops/';
axios.interceptors.request.use(
    config => {
      config.data = JSON.stringify(config.data);
      config.headers = {
          'Content-Type' : 'application/x-www-form-urlencoded'
      }
    
      return config;
    },
    error => {
      return Promise.reject(error.response);
    });
  
  // 路由响应拦截
  // http response 拦截器
  axios.interceptors.response.use(
    response => {
      if (response.data.resultCode=="404") {
          console.log("response.data.resultCode是404")
         
          return
      }else{
          return response;
      }
    },
    error => {
      return Promise.reject(error.response)   // 返回接口返回的错误信息
    });
    
    export default axios