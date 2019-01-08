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
<<<<<<< HEAD
=======

>>>>>>> dea8acc958a5042f0a6864731488d23bfe7f49f7

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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
      component: icons
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
      component: panels
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dea8acc958a5042f0a6864731488d23bfe7f49f7
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
=======
   
>>>>>>> 7a5589ec758a3347813da9cc4e9aa460fdb007f1
  ]
})
