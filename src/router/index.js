import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import charts from '@/views/charts'
import elements from '@/views/elements'
import icons from '@/views/icons'
import lockscreen from '@/views/lockscreen'
import login from '@/views/login'
import notifications from '@/views/notifications'
import panels from '@/views/panels'
import profile from '@/views/profile'
import tables from '@/views/tables'
import typography from '@/views/typography'
import specifications from '@/views/specifications'
import addSpec from '@/views/addSpec'
import modifySpec from '@/views/modifySpec'

 let getCookie = function (c_name) {
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

Vue.use(Router)
let Routers = new Router({
  linkActiveClass: 'active',
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title:'index',
       
      }
    },
    {
      path: '/manage/charts',
      name: 'charts',
      component: charts

    },
    {
      path: '/elements',
      name: 'elements',
      component: elements
    }
    ,
    {
      path: '/icons',
      name: 'icons',
      component: icons,
      meta:{
        title:'icons',
        requireAuth:true
      }
    }
    ,
    {
      path: '/notifications',
      name: 'notifications',
      component: notifications
    }
    ,
    {
      path: '/panels',
      name: 'panels',
      component: panels,
      meta:{
        title:'login'
      }
    }
    ,

    {
      path: '/tables',
      name: 'tables',
      component: tables
    }
    ,
    {
      path: '/typography',
      name: 'typography',
      component: typography
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/lockscreen',
      name: 'lockscreen',
      component: lockscreen
    },

    {
      path: '/specifications',
      name: 'specifications',
      component: specifications
    },
    {
      path: '/specifications/addSpec',
      name: 'addSpec',
      component: addSpec
    },
    {
      path: '/specifications/modifySpec',
      name: 'modifySpec',
      component: modifySpec
    }
  ]
})
Routers.beforeEach((to, from, next) => {


   const isLogin = getCookie('token');
  if (to.name !== "login") {
    if (!isLogin) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  } 
});




export default Routers
