<template>
  <div  id="waterQuality">
    <!--水质评价质量监测-->
      <!--左侧递归标题目录树-->
      <div class="tree-menu">
        <ul v-for="item in data">
          <MyTree :data="item"   @click=""></MyTree>
        </ul>
      </div>
      <!--右侧tab切换-->
      <div class="tree_tab_content">
        <router-view  name="waterQuality"></router-view>
      </div>

  </div>
</template>
<script>
  import MyTree from './tabtree'

 /* var treeData =[
    {
      "name": "一级目录",
      children: [
        { "name": "二级目录" },
        {
          "name": "one chicken",
          children: [{ "name": '三级目录', children: [{ "name": "三级目录" }] }]
        }
      ]
    },
    {
      "name": "第二级一级目录", children: [
        { "name": "第二个级二级目录" },
        { "name": "耳机目录" }
      ]
    }
  ]*/


   var treeData =[
     {
       "name": "水质基础评价",
       /*children: [
         { "name": "二级目录" },
         {
           "name": "one chicken",
           children: [{ "name": '三级目录', children: [{ "name": "三级目录" }] }]
         }
       ]*/
     },
     {
       /*切换对应组件*/
       "name": "专项评价", children: [
         { "name": "地表水资源天然水化学特征评价" ,com:'groundWater', },
         { "name": "水质变化趋势分析",com:"changeWater" },
         { "name": "饮用水源地安全评价",com:"drinkWater" },
         { "name": "水生态环境分析评价",com:"environWater" },
       ]
     }
   ]
  export default {

    data() {
      return {
        data: treeData
      }
    },
    components:{
      MyTree
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
#waterQuality{
  position: absolute;
  width:100%;
  height: calc( 100vh - 80px );
  /*background: #fff;*/
  z-index: 1;
  border: solid 1px red;

}

.tree-menu{
  width: 20%;
  /*height: calc( 100vh - 50px );*/
  height:100%;
  border: solid 1px #97aeff;
  background: #fff;
}
  .tree_tab_content{
    width: 80%;
    height:100%;
    border: solid 1px red;
    background: rgba(25, 17, 28, 0.57);
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
