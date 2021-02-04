<template>
  <!--信息综合管理-->
  <div  id="infoSystem" >
      <!--左侧递归标题目录树-->
    <el-aside   style="width:15%;height:100%;background:rgba(21,37,63,1);padding-top: 25px;">
            <el-menu
                :router="true"
                class="el-menu-vertical-demo"

                @open="handleOpen"
                @close="handleClose"
                background-color="rgba(21,37,63,0.86)"
                text-color="#fff"
                active-text-color="#018faf">
                 <div  v-for="(item,index) in menulist" :key="index">
                <!--一级菜单（没有任何子级菜单）-->
                <el-menu-item :index="item.id" >
                  {{item.authName}}</el-menu-item>


              </div>
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
      /*切换对应组件*/
      "authName": "信息汇总",
      id:'informationAggregation',
      com:'informationAggregation',
      path:'informationAggregation'
    },
    {
      "authName": "信息查询",
      id:'informationLnquiry',
      com:'informationLnquiry',
      path:'informationLnquiry'
    },
    {
      "authName": "水质报告",
      id:'waterQualityReport',
      com:'waterQualityReport',
      path:'waterQualityReport'
    },
      {
      "authName": "权限管理",
      id:'authorityManagement',
      com:'authorityManagement',
      path:'authorityManagement'
    },

  ]

  export default {
     created() {
       // this.getMenuList()//初始化获取所有菜单menu
     },

    data() {
      return {

        menulist: menulist,
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
#infoSystem{
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

>>>.el-menu-item:focus, .el-menu-item:hover{
  background: rgba(25, 17, 28, 0.2) !important;
  /*color:#fff!important;*/

}

  >>>.el-submenu__title:hover {
    /*background-color: #ecf5ff;*/
    background: rgba(25, 17, 28, 0.2) !important;

  }
</style>
