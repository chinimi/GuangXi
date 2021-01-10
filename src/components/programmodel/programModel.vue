<template>
  <div id="programModel">
        <ul class="programModel_title">
          <li
            v-for="(item,index) in menu"
            :key="index"
            :class="['programModelClass',{programModel_active : ( isActive == item.value ? true : false )}]"
            @click="isActive = item.value;currentComp = item.comp"
          >
            <i  :class="['iconfont', item.icon]"></i>
            <span>{{item.name}}</span>
          </li>
        </ul>
          <!--切换组件-->
      <div style="position:absolute ;z-index:1; ">
        <!--組件跳轉-->
        <div v-show="currentComp=='oneDimensionalModel'">
          <oneDimensionalModel></oneDimensionalModel>
        </div>

        <div v-show="currentComp=='twoDimensionalModel'">
          <twoDimensionalModel></twoDimensionalModel>
        </div>

        <div v-show="currentComp=='remoteSensingModel'">
          <remoteSensingModel></remoteSensingModel>
        </div>

        <div v-show="currentComp=='moduleManager'">
          <moduleManager></moduleManager>
        </div>

      </div>


  </div>
</template>
<script>
import oneDimensionalModel from './oneDimensionalModel.vue';
import twoDimensionalModel from './twoDimensionalModel.vue';
import remoteSensingModel from './remoteSensingModel.vue';
import moduleManager from './moduleManager.vue';


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
              name: '一维模型',
              value: 'oneDimensionalModel',
              comp: 'oneDimensionalModel'
            },
            {
              name: '二维模型',
              // 当前li标签是否选中的标识
              value: 'twoDimensionalModel',
              // 点击当前li标签，要显示的组件
              comp: 'twoDimensionalModel'
            },
            {
              // icon:"icon-fuhao-tuceng",
              name: '遥感模型',
              value: 'remoteSensingModel',
              comp: 'remoteSensingModel'
            },
            {
              // icon:"icon-home",
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
#programModel{
    width: 210px;
    height: 350px;
    position: absolute;
    top: 40px;
    left: 20px;
    /* background: rgba(21, 37, 63, 0.86); */
    background: #031823;
    border-radius: 5px;
    z-index: 9;
}
#programModel .programModel_title{
  position: absolute;
  left: -19%;
}
#programModel .programModelClass {
    cursor: pointer;
    color: #fff;
    list-style: none;
    font-size: 14px;
    text-align: center;
    width: 205px;
    margin-right: 10px;
    line-height: 32px;
    padding: 7px 0;
}
#programModel .programModel_active {
    color: #fff!important;
    background: rgba(5, 160, 236, 0.58)!important;
    border-left: 4px solid #0718fa;
}
</style>
