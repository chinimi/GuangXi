<template>
<!--模板管理主页面-->
  <div id="moduleManager">
    <div class="moduleManager_title">
      模板管理
    </div>
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
      <div>
        <!--組件跳轉-->
        <div v-show="currentComp=='administrativeDivisions'">
          <administrativeDivisions></administrativeDivisions>
        </div>

        <div v-show="currentComp=='watershedPartition'">
          <watershedPartition></watershedPartition>
        </div>

          <div v-show="currentComp=='waterResourcesZoning'">
          <waterResourcesZoning></waterResourcesZoning>
        </div>
      </div>


  </div>
</template>
<script>
import administrativeDivisions from './administrativeDivisions.vue';
import watershedPartition from './watershedPartition.vue';
import waterResourcesZoning from './waterResourcesZoning.vue';


  export default {
    components:{
      administrativeDivisions,
      watershedPartition,
      waterResourcesZoning

    },
    data() {
      return {
         currentComp: 'administrativeDivisions',
         isActive: 'administrativeDivisions',
         menu: [
            {
              name: '行政分区',
              value: 'administrativeDivisions',
              comp: 'administrativeDivisions'
            },
            {
              name: '流域分区',
              // 当前li标签是否选中的标识
              value: 'watershedPartition',
              // 点击当前li标签，要显示的组件
              comp: 'watershedPartition'
            },
            {
              name: '水资源分区',
              value: 'waterResourcesZoning',
              comp: 'waterResourcesZoning'
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
<style scoped="scoped">
#moduleManager{
    width: 1480px;
    height: 640px;
    position: absolute;
    top: 150px;
    left: 265px;
    /* background: rgba(21, 37, 63, 0.86); */
    background: #031823;
    border-radius: 5px;
    z-index: 9;
}
#moduleManager .moduleManager_title{
    background: rgba(5, 160, 236, 0.26);
    height: 46px;
    margin-top: 1px;
    line-height: 46px;
    color: #fff;
    padding-left: 20px;

}
#moduleManager .programModel_title{
  position: relative;
}
#moduleManager .programModelClass {
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
#moduleManager .programModel_active {
    color: #fff!important;
    background: #01ddff!important;
    /* border-left: 4px solid #0718fa; */
}
</style>
