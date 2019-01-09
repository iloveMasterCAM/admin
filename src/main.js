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




router.beforeEach((to, from, next) => {


  if (to.meta.title) {
    document.title = to.meta.title
  }
  const type = to.meta.title
  console.log( to.meta)
  // 判断该路由是否需要登录权限
  if (type === 'login') {
    if (window.localStorage.getItem('login')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()  // 确保一定要有next()被调用
  }

 console.log(to.matched)
// if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
//     if (token) {  // 判断当前的token是否存在
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   } 
});
