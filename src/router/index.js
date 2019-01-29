import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import charts from '@/views/charts'
import Authentication from '@/views/Authentication'
import mine from '@/views/mine'
import lockscreen from '@/views/lockscreen'
import login from '@/views/login'
import notifications from '@/views/notifications'
import panels from '@/views/panels'
import profile from '@/views/profile'
import shop from '@/views/shop'
import typography from '@/views/typography'
import specifications from '@/views/specifications'
import addSpec from '@/views/addSpec'
import modifySpec from '@/views/modifySpec'
import mailManage from '@/views/mailManage'
import addProduct from '@/views/addProduct'
import editProduct from '@/views/editProduct'
import groupBuy from '@/views/groupBuy'
import addGroupGoods from '@/views/addGroupGoods'
import editGroup from '@/views/editGroup'
import activity from '@/views/activity'


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
      path: '/Authentication',
      name: 'Authentication',
      component: Authentication
    }
    ,
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta:{
        title:'mine',
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
      path: '/shop',
      name: 'shop',
      component: shop
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
    },
    {
      path: '/mailManage',
      name: 'mailManage',
      component: mailManage
    },
    {
      path: '/mailManage/addProduct',
      name: 'addProduct',
      component: addProduct
    },
    {
      path: '/mailManage/editProduct',
      name: 'editProduct',
      component: editProduct
    },
    {
      path: '/groupBuy',
      name: 'groupBuy',
      component: groupBuy
    },
    {
      path: '/groupBuy/addGroupGoods',
      name: 'addGroupGoods',
      component: addGroupGoods
    },
    {
      path: '/groupBuy/editGroup',
      name: 'editGroup',
      component: editGroup
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
  ]
});
Routers.beforeEach((to, from, next) => {

  //console.log(to.name)
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
