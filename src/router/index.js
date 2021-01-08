/*配置路由，路由封装*/
import Vue from 'vue'
import Router from 'vue-router'
/*vue中@的路径的使用*/
import login from '../views/login/login'
import home from '../views/home/home'
Vue.use(Router)

export default new Router({
  routes: [
    // 登录
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 首页
    {
      path:'/',
      name: 'home',
      component:home,
      children:[
        // {
        //   path:'/index',
        //   name:'index',
        //   component:Index,
        // },{
        //
        //
        // }



      ]
    }

  ]
})
