/*配置路由，路由封装*/
import Vue from 'vue'
import Router from 'vue-router'
/*vue中@的路径的使用*/
import login from '../views/login/login'
import home from '../views/home/home'
import groundWater from '../components/qualityclassfy/groundWater.vue'
import changeWater from '../components/qualityclassfy/changeWater.vue'
import drinkWater from '../components/qualityclassfy/drinkWater.vue'
import environWater from '../components/qualityclassfy/environWater.vue'
/*水质基础评价*/
import generalwaterevaluate from '../components/qualityclassfy/generalwaterevaluate.vue'

/*江河湖库*/
import riverHealthy from '../components/qualityclassfy/riverHealthy.vue'
import riverQuality from '../components/qualityclassfy/riverQuality.vue'


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
        {
          path: '/groundWater',
          name: 'groundWater',
          component:groundWater,


        },

        {
          path: '/changeWater',
          name: 'changeWater',
          component:changeWater,


        },
        {
          path: '/drinkWater',
          name: 'drinkWater',
          component:drinkWater,


        },
        {
          path: '/environWater',
          name: 'environWater',
          component:environWater,


        },
        {//水质基础评价
          path: '/generalwaterevaluate',
          name: 'generalwaterevaluate',
          component:generalwaterevaluate,


        },
        {//江河湖库水生态质量评价
          path: '/riverQuality',
          name: 'riverQuality',
          component:riverQuality,


    },
        {//江河湖库水体健康评价
          path: '/riverHealthy',
          name: 'riverHealthy',
          component:riverHealthy,
        },

      ]
    },
    /*水质评价 路由配置*/


  ]
})
