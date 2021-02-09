<template>
  <!--水质评价质量监测-->
  <div  id="waterQuality" >
    <!--水质评价质量监测-->
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

      "authName": "水质基础评价",
      id:'generalwaterevaluate',
      com:'generalwaterevaluate',
      path:'generalwaterevaluate'
    },
    {
      /*切换对应组件*/
      "authName": "专项评价",
      id:'zxpjfxmodelpart',
      children: [
        { "authName": "地表水资源天然水化学特征评价" ,com:'groundWater', id:'dbszytrs', path:'groundWater'},
        { "authName": "水质变化趋势分析",com:"changeWater" ,id:'szbhqs',path:'changeWater'},
        { "authName": "饮用水源地安全评价",com:"drinkWater",id:'yysydaq',path:'drinkWater' },
        { "authName": "水生态环境分析评价",com:"environWater" ,id:'ssthjfx',path:'environWater', children: [
            { "authName": "江河湖库水生态质量评价" ,com:'riverQuality', id:'riverQuality', path:'riverQuality'},
            { "authName": "江河湖库水体健康评价" ,com:'riverHealthy', id:'riverHealthy', path:'riverHealthy'},

          ]},
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
         "generalwaterevaluate":"iconfont icon-shuidi3",
         "zxpjfxmodelpart":"iconfont icon-kongqi",
         "ssthjfx":"iconfont icon-shuidi3",

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

>>>.el-menu-item:focus, .el-menu-item:hover{
  background: rgba(25, 17, 28, 0.2) !important;
  /*color:#fff!important;*/

}

  >>>.el-submenu__title:hover {
    /*background-color: #ecf5ff;*/
    background: rgba(25, 17, 28, 0.2) !important;

  }
</style>
