<template>
  <div id="programmePreparation">
        <ul class="clear-fix programModel_title">
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
      <div tyle="position:absolute ;z-index:1; ">
        <!--組件跳轉-->
        <div v-show="currentComp=='basicSetup'">
          <basicSetup></basicSetup>
        </div>

        <div v-show="currentComp=='modelParameter'">
          <modelParameter></modelParameter>
        </div>

        <div v-show="currentComp=='boundaryConditions'">
          <boundaryConditions></boundaryConditions>
        </div>

      </div>


  </div>
</template>
<script>
import basicSetup from './basicSetup.vue';
import modelParameter from './modelParameter.vue';
import boundaryConditions from './boundaryConditions.vue';



  export default {
    components:{
      basicSetup,
      modelParameter,
      boundaryConditions,

    },
    data() {
      return {
         currentComp: 'basicSetup',
         isActive: 'basicSetup',
         menu: [
            {
              name: '基本设置',
              value: 'basicSetup',
              comp: 'basicSetup'
            },
            {
              name: '模型参数',
              // 当前li标签是否选中的标识
              value: 'modelParameter',
              // 点击当前li标签，要显示的组件
              comp: 'modelParameter'
            },
            {
              // icon:"icon-fuhao-tuceng",
              name: '边界条件',
              value: 'boundaryConditions',
              comp: 'boundaryConditions'
            },
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
<style>
#programmePreparation{
    /* position: absolute; */
    top: -23px;
    left: 20px;
    z-index: 9;
}
#programmePreparation .programModel_title{
  position: absolute;
  /* left: -19%; */
  width: 620px;    /* height: 350px; */

}
#programmePreparation .programModelClass {
    cursor: pointer;
    color: #fff;
    list-style: none;
    font-size: 14px;
    text-align: center;
    width: 95px;
    margin-right: 10px;
    /* line-height: 32px; */
    padding: 7px 0;
    float: left;
    background: rgba(5, 160, 236, 0.58);

}
#programmePreparation .programModel_active {
    color: #fff!important;
    background: #01ddff!important;
    /* border-left: 4px solid #0718fa; */
}
</style>
