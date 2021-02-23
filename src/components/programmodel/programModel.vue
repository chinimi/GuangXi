<template>
<!--方案模型管理主页面-->
  <div id="programModel">
        <ul class="programModel_title">
          <li
            v-for="(item,index) in menu"
            :key="index"
            :class="['programModelClass',{programModel_active : ( isActive == item.value ? true : false )}]"
            @click="isActive = item.value;currentComp = item.comp"
          >
            <!-- <i  :class="['iconfont', item.icon]"></i> -->
            <img :src=item.icon alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
          <!--切换组件-->
      <div  class="programModel_content">
        <!--組件跳轉-->
        <div v-show="currentComp=='oneDimensionalModel'" class="Model_content">
          <oneDimensionalModel :type="isActive"></oneDimensionalModel>
        </div>
        <div v-show="currentComp=='twoDimensionalModel'" class="Model_content">
          <twoDimensionalModel></twoDimensionalModel>
        </div>
        <div v-show="currentComp=='remoteSensingModel'"  class="Model_content">
          <remoteSensingModel></remoteSensingModel>
        </div>
        <div v-show="currentComp=='moduleManager'"  class="Model_content">
          <moduleManager></moduleManager>
        </div>
      </div>
  </div>
</template>
<script>
import oneDimensionalModel from './oneDimensionalModel/oneDimensionalModel.vue';
import twoDimensionalModel from './twoDimensionalModel/twoDimensionalModel.vue';
import remoteSensingModel from './remoteSensingModel/remoteSensingModel.vue';
import moduleManager from './moduleManager/moduleManager.vue';
  export default {
    components:{
      oneDimensionalModel,
      twoDimensionalModel,
      remoteSensingModel,
      moduleManager
    },
    data() {
      return {
         currentComp: 'oneDimensionalModel',
         isActive: 'oneDimensionalModel',
         menu: [
            {
              icon:"/static/images/icon/yiwei.png",
              name: '一维模型',
              value: 'oneDimensionalModel',
              comp: 'oneDimensionalModel'
            },
            {
              icon:"/static/images/icon/erwei.png",
              name: '二维模型',
              value: 'twoDimensionalModel',
              comp: 'twoDimensionalModel'
            },
            {
              icon:"/static/images/icon/yaogan.png",
              name: '遥感模型',
              value: 'remoteSensingModel',
              comp: 'remoteSensingModel'
            },
            {
              icon:"/static/images/icon/moban.png",
              name: '模板管理',
              value: 'moduleManager',
              comp: 'moduleManager'
            }
          ]
      }
    },
    methods: {

    },
    computed: {

    },
    mounted(){

    },
    watch: {

    }

  }
</script>
<style scoped="scoped">
@import '../../../static/css/public.css';
</style>
