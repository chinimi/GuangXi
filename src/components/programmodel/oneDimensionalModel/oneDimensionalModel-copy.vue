<template>
<!--一维模型主页面-->
  <div id="oneDimensionalModel">
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
      <div>
        <!--組件跳轉-->
        <!--方案库组件-->
        <div v-if="currentComp=='schemeLibrary'">
          <schemeLibrary></schemeLibrary>
        </div>
        <!--方案编制组件-->
        <div v-if="currentComp=='programmePreparation'">
          <programmePreparation></programmePreparation>
        </div>
      </div>


  </div>
</template>
<script>
import schemeLibrary from './schemeLibrary.vue';
import programmePreparation from './programmePreparation.vue';


  export default {
    components:{
      schemeLibrary,
      programmePreparation,

    },
    data() {
      return {
         currentComp: 'schemeLibrary',
         isActive: 'schemeLibrary',
         menu: [
            {
              name: '方案库',
              value: 'schemeLibrary',
              comp: 'schemeLibrary'
            },
            {
              name: '方案编制',
              // 当前li标签是否选中的标识
              value: 'programmePreparation',
              // 点击当前li标签，要显示的组件
              comp: 'programmePreparation'
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
#oneDimensionalModel{
    width: 1480px;
    height: 775px;
    position: absolute;
    top: 38px;
    left: 265px;
    /* background: rgba(21, 37, 63, 0.86); */
    background: #031823;
    border-radius: 5px;
    z-index: 9;
}
#programModel .programModel_title{
    background: rgba(5, 160, 236, 0.26);
    height: 46px;
    /* margin-top: 1px; */
}
#oneDimensionalModel .programModelClass {
    cursor: pointer;
    color: #fff;
    list-style: none;
    font-size: 14px;
    text-align: center;
    width: 205px;
    margin-right: 10px;
    line-height: 32px;
    float: left;
    padding: 7px 0;
}
#oneDimensionalModel .programModel_active {
    color: #fff!important;
    background: rgba(5, 160, 236, 0.58)!important;
    /* border-left: 4px solid #0718fa; */
}
</style>
