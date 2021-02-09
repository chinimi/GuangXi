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
/*水文水资源(HD)*/
import HDriver from '../components/qualityclassfy/HDriver.vue'
/*物理结构(PF)*/
import PFriver from '../components/qualityclassfy/PFriver.vue'
/*水质(WQ)*/
import WQriver from '../components/qualityclassfy/WQriver.vue'
/*生物(AL)*/
import ALriver from '../components/qualityclassfy/ALriver.vue'
/*社会服务功能(SS)*/
import SSriver from '../components/qualityclassfy/SSriver.vue'

/*信息综合管理*/
// import informationAggregation from '../components/infosys/informationAggregation.vue'//信息汇总
// import informationLnquiry from '../components/infosys/informationLnquiry.vue'//信息查询
// import waterQualityReport from '../components/infosys/waterQualityReport.vue'//水质报告
// import authorityManagement from '../components/infosys/authorityManagement.vue'//权限管理

/*预测预警组件*/
import qualityPrediction from "../components/qualitypredict/qualityPrediction"
import qualityClassfy from "../components/qualityclassfy/qualityClassfy";
import waterPrediction from "../components/qualityclassfy/waterPrediction";
import underWater from "../components/qualityclassfy/underWater";
import waterWarn from "../components/qualityclassfy/waterWarn";



Vue.use(Router)

export default new Router({
  routes: [
    // 登录
    {
      path: '/login',
      name: 'login',
      component: login
    },

    // {
    //   path: '/qualityPrediction',
    //   name: 'qualityPrediction',
    //   component: qualityPrediction
    // },
    // 首页
    {
      path:'/',//一级路由
      name: 'home',
      component:home,
      children:[//二级路由配置
        { /*预警预测组件*/
          path: '/qualityPrediction',
          name: 'qualityPrediction',
          component: qualityPrediction,
          children:[{
            path: '/waterPrediction',
            name: 'waterPrediction',
            component:waterPrediction,//水质预测
          },
            {
              path: '/underWater',
              name: 'underWater',
              component:underWater,//地下水质量

            },
           /* {
              path: '/waterWarn',
              name: 'waterWarn',
              component:waterWarn,//水质预警

            },*/

          ]

        },
        /*水质预警监测*/
        {
          path: '/waterWarn',
          name: 'waterWarn',
          component:waterWarn,//水质预警

        },


        { /*水质分类评价*/
          path: '/qualityClassfy',
          name: 'qualityClassfy',
          component: qualityClassfy,
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
              path: '/riverHealthy',//二级路由
              name: 'riverHealthy',
              component:riverHealthy,
            },
            {/*水文水资源(HD)*/
              path: '/HDriver',
              name: 'HDriver',
              component:HDriver,
            },
            { /*物理结构(PF)*/
              path: '/PFriver',
              name: 'PFriver',
              component:PFriver,
            },
            { /*水质(WQ)*/
              path: '/WQriver',
              name: 'WQriver',
              component:WQriver,
            },
            { /*生物(AL)*/
              path: '/ALriver',
              name: 'ALriver',
              component:ALriver,
            },
            {/*社会服务功能(SS)*/
              path: '/SSriver',
              name: 'SSriver',
              component:SSriver,
            },

          ]
        },

          /*水质评价 路由配置*/
          /*信息综合管理 路由配置*/
        // {
        //   path: '/informationAggregation',
        //   name: 'informationAggregation',
        //   component:informationAggregation,
        // },
        // {
        //   path: '/informationLnquiry',
        //   name: 'informationLnquiry',
        //   component:informationLnquiry,
        // },
        // {
        //   path: '/waterQualityReport',
        //   name: 'waterQualityReport',
        //   component:waterQualityReport,
        // },
        // {
        //   path: '/authorityManagement',
        //   name: 'authorityManagement',
        //   component:authorityManagement,
        // },
      ]
    },



  ]
})
