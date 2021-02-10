<template>
    <div  id="groundWater">

      <!--左侧递归标题目录树-->
      <el-aside   style="width:15%;height: calc( 100vh - 80px );
background:rgba(21,37,63,1);padding-top: 25px;position: absolute;top:0;left:0;">

      <el-menu
          :router="true"
          class="el-menu-vertical-demo"
          @select="selectItems"

          background-color="rgba(21,37,63,0.86)"
          text-color="#fff"
          active-text-color="#018faf">
          <div  v-for="(item,index) in menulist" :key="index">
            <!--一级菜单（没有任何子级菜单）-->
            <el-menu-item :index="item.id" v-if="!item.children">
              <!--                  <i class="el-icon-menu"></i>-->
              <i :class=iconsObj[item.id]></i>
              {{item.authName}}</el-menu-item>
            <!-- 一级菜单（有子级菜单）-->
            <el-submenu :index="item.path" v-else>
              <template slot="title">
                <!--                    <i class="el-icon-menu"></i>-->
                <i :class=iconsObj[item.id]></i>
                {{item.authName}}
              </template>
              <!-- 遍历二级菜单容器 -->
              <div v-for="(i,index) in item.children" :key="index">

                <!-- 判断二级菜单（没有三级菜单）-->
                <el-menu-item :index="i.path" v-if="!i.children">
                  <!--                      <i :class=iconsObj[i.id]></i>-->
                  <i class="el-icon-menu"></i>
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
      <div style="position:absolute;top:100px;left:20%;width:100px;height:100px;border:solid 1px red;">水质预测预警界面</div>
      <div style="position:absolute;top:100px;right:10px;width:100px;height:100px;border:solid 1px red;">水质预测预警界面</div>

	</div>
</template>

<script>
  var menulist =[

    {
      /*切换对应组件*/
      "authName": "水资源量预测",
      id:'szylyc',
      children: [
        { "authName": "地表水水资源量预测" ,com:'waterPrediction', id:'waterPrediction', path:'waterPrediction'},
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
      data(){
          return {
            menulist: menulist,
            iconsObj:{
              "generalwaterevaluate":"iconfont icon-shuidi3",
              "zxpjfxmodelpart":"iconfont icon-kongqi",
              "ssthjfx":"iconfont icon-shuidi3",

            },

          }
      },
      created() {

      },
      computed: {

      },
      methods: {

        selectItems(index){
          console.log(index)



        }


      },
      watch:{




      },


  }
</script>

<style scoped>
  #groundWater{
    margin:0;
    padding:0;
    background: #fff;
  }
  #groundWater .left_menu{
    width: 20%;
    height: calc( 100vh - 80px);
    background: #031823;
    /*background: rgba(21, 37, 63,1);*/
    position: absolute;
    top: 0;
    left: 0;
    border-right: #fff dashed 2px;
    border-left: #fff solid 1px;
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
