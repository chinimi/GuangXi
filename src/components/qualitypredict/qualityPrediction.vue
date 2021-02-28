<template>
  <!--水质评价质量监测-->
  <div  id="waterQuality" >

    <!--左侧递归标题目录树-->
    <el-aside width=null  class="sub_menu" >
      <el-menu
        :router="true"
        class="el-menu-vertical-demo"
        @select="selectItems"
        @open="handleOpen"
        @close="handleClose"
        >
        <div  v-for="(item,index) in menulist" :key="item.id">
          <!--一级菜单（没有任何子级菜单）-->
          <el-menu-item :index="item.path" v-if="!item.children">
<!--        <i class="el-icon-menu"></i>-->
            <i :class=iconsObj[item.id]></i>
            {{item.authName}}</el-menu-item>
          <!-- 一级菜单（有子级菜单）-->
          <el-submenu :index="item.path" v-else>
            <template slot="title">
<!--          <i class="el-icon-menu"></i>-->
              <i :class=iconsObj[item.id]></i>
              {{item.authName}}
            </template>
            <!-- 遍历二级菜单容器 -->
            <div v-for="(i,index) in item.children" :key="i.id">

              <!-- 判断二级菜单（没有三级菜单）-->
              <el-menu-item :index="i.path" v-if="!i.children">
                    <i :class=iconsObj[i.id]></i>
<!--                <i class="el-icon-menu"></i>-->
                {{i.authName}}
              </el-menu-item>
              <!-- 判断二级菜单（有三级菜单）-->
              <el-submenu :index="i.path" v-if="i.children">
                <template slot="title">{{i.authName}}</template>
                <el-menu-item :index="j.path" v-for="(j,index) in i.children" :key="index">{{j.authName}}       </el-menu-item>
              </el-submenu>
            </div>

          </el-submenu>

        </div>
      </el-menu>
    </el-aside>
    <!--右侧tab切换-->
    <div class="tree_tab_content" >
      <!--路由占位符-->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  var menulist =[
    {
      /*切换对应组件*/
      authName: "水资源量预测",
      path:'szylyc',
      id:'szylyc',
      children: [
        { "authName": "地表水资源量预测" ,com:'waterPrediction', id:'waterPrediction', path:'waterPrediction'},
        { "authName": "地下水水位评价",com:"underWater" ,id:'underWater',path:'underWater'},
      ]
    },
    /*一级菜单*/
    {
      "authName": "水资源量预测预警",
      id:'waterWarn',
      com:'waterWarn',
      path:'waterWarn'
    },
  ]

  export default {
    created() {
      // this.getMenuList()//初始化获取所有菜单menu
    },

    data() {
      return {
       flag:false,//水质预测预警参数

        menulist: menulist,
        iconsObj:{
        "szylyc":"iconfont icon-yubaomoshi",
          "waterPrediction":"iconfont icon-xinxi-",
          "underWater":"iconfont icon-xinxi-",
          "waterWarn":"iconfont icon-leida",

      },
    }
    },
    components:{

    },
    methods: {

      selectItems(index){
        console.log("获取选中的菜单元素")
        console.log(index)
        // if(index=='waterWarn'){
        //   this.flag=true
        // }
        // else{
        //   this.flag=true
        //
        // }

      },

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
    z-index: 1;
  }
  .sub_menu{
    border-right:rgb(22, 119, 255) solid 1px;
    /*border-left: rgb(22, 119, 255) solid 1px;*/
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    width: 14.97%;
    height: calc( 100vh - 80px);
    background: #fff;
    padding-top: 25px;
    position: absolute;
    top: 0;
    left: 0;
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
    /*background: rgba(25, 17, 28, 0.2) !important;*/
  }

  >>>.el-submenu__title:hover {
    /*background: rgba(25, 17, 28, 0.2) !important;*/
  }
  >>>.el-menu-item.is-active {
    color: #409EFF;
    border-left: 6px solid #409EFF;
  }
  >>>.el-menu-item{
    border-left: 6px solid #fff;
    font-size: 16px;

  }
  >>>.el-submenu__title{
    font-size:16px;
  }

</style>
