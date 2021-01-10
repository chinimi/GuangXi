<template>
  <!--水质评价质量监测-->
  <div  id="waterQuality" >
    <!--水质评价质量监测-->
      <!--左侧递归标题目录树-->
    <el-aside   style="width:15%;height:100%;background:#001938;">
      <el-menu
          :router="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#001938"
          text-color="#fff"
          active-text-color="#018faf">
        <!--一级菜单-->
        <el-submenu :index=item.id  v-for="item in menulist" :key="item.id">
          <template slot="title">
            <i :class=iconsObj[item.id]></i>
            <span>{{item.authName}}</span>
          </template>

          <!--二级菜单-->

          <el-menu-item  v-for="subitem in item.children"   :index="'/'+subitem.path" :key="item.id">
            <template slot="title">
<!--              <i class="el-icon-menu"></i>-->
              <i class="el-icon-menu"></i>
              <span>{{subitem.authName}}</span>
            </template>
          </el-menu-item>
        </el-submenu>


      </el-menu>

    </el-aside>


      <!--右侧tab切换-->
      <div class="tree_tab_content">
        <!--路由占位符-->
        <router-view></router-view>
      </div>

  </div>
</template>
<script>
    var menulist =[
     /*一级菜单*/
     {
       path:"baseWaterAsses",
       "authName": "水质基础评价",
       id:'1_0',
      /* children: [
         { "authName": "二级菜单" ,  id:'1_0_0',},
         {
           "authName": "one chicken",
           id:'1_0_0_0',
           children: [
             { "authName": '三级目录', id:'1_1_0_1',
               children: [{ "authName": "三级目录" ,id:'1_1_0_1_0'}] }]
         }
       ]*/
     },
     {
       /*切换对应组件*/
       "authName": "专项评价",
       id:'1_2',
       children: [
         { "authName": "地表水资源天然水化学特征评价" ,com:'groundWater', id:'1_2_0', path:'groundWater'},
         { "authName": "水质变化趋势分析",com:"changeWater" ,id:'1_2_1',path:'changeWater'},
         { "authName": "饮用水源地安全评价",com:"drinkWater",id:'1_2_2',path:'drinkWater' },
         { "authName": "水生态环境分析评价",com:"environWater" ,id:'1_2_3',path:'environWater'},
       ]
     }
   ]
  export default {
     created() {
       // this.getMenuList()//初始化获取所有菜单menu
     },

    data() {
      return {

        menulist: menulist,
        iconsObj:{
         "1_0":"iconfont icon-shuidi3",
         "1_2":"iconfont icon-kongqi",




        },
      }
    },
    components:{

    },
    methods: {

      //获取所有的菜单
 /*     async getMenuList() {
        const { data: res } = await this.$http.get('menus")
          if(res.meta.status!==200) return this.$message.error("失败了")
        this.getMenuList=res.data//获取所有左侧菜单数据
        console.log(res)

      }*/

      handleOpen(key, keyPath){

        console.log(key, keyPath)
      },
      handleClose(key, keyPath){
        console.log(key, keyPath)
      }

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
  /*border: solid 1px red;*/

}


  .tree_tab_content{
    width: 85%;
    height:100%;
    /*border: solid 1px red;*/
    background: rgba(25, 17, 28, 0.57);
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
