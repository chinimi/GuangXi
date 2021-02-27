<template>
  <div  id="groundWater">
    <div class="left_menu">
      <div   class="informationLnquiry_title"><div>公示牌名称</div></div>
      <el-menu
        :router="false"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"

      >
        <div  v-for="(item,index) in menulist" :key="item.id">
          <!--一级菜单（没有任何子级菜单）-->
          <el-menu-item :index="item.signCode" v-if="!item.children">
                <i class="el-icon-menu"></i>
<!--            <i :class=iconsObj[item.id]></i>-->
            {{item.photoName}}</el-menu-item>
          <!-- 一级菜单（有子级菜单）-->
          <el-submenu :index="item.signCode" v-else>
            <template slot="title">
               <i class="el-icon-menu"></i>
<!--              <i :class=iconsObj[item.id]></i>-->
              {{item.photoName}}
            </template>
            <!-- 遍历二级菜单容器 -->
            <div v-for="(i,index) in item.children" :key="item.id">
              <!-- 判断二级菜单（没有三级菜单）-->
              <el-menu-item :index="i.signCode" v-if="!i.children">
<!--                <i :class=iconsObj[i.id]></i>-->
                <i class="el-icon-menu"></i>
                {{i.photoName}}
              </el-menu-item>
              <!-- 判断二级菜单（有三级菜单）-->
              <el-submenu :index="i.signCode" v-if="i.children">
                <template slot="title">{{i.photoName}}</template>
                <el-menu-item :index="j.path" v-for="(j,index) in i.children" :key="index">{{j.authName}}       </el-menu-item>
              </el-submenu>
            </div>

          </el-submenu>

        </div>
      </el-menu>




    </div>
    <!--table表格-->
    <div class="right_menu">
      <div  style="width: 80%;
        margin: 20px auto;
        border: solid 1px #c0c0c0;
        ">
        <el-row  style="text-align: center;border-bottom:solid 1px #c0c0c0;">
          <el-col :span="6" class="river_title">河段名称</el-col>
          <el-col :span="6" class="river_item">{{riverName}}</el-col>
          <el-col :span="6" class="river_title">公示牌位置</el-col>
          <el-col :span="6" class="river_item">{{boardLocation}}</el-col>
        </el-row>
        <el-row  style="text-align: center;border-bottom:solid 1px #c0c0c0;">
          <el-col :span="6" class="river_title">河段长度(km)</el-col>
          <el-col :span="6" class="river_item">{{riverLength}}</el-col>
          <el-col :span="6" class="river_title">监督电话</el-col>
          <el-col :span="6" class="river_item">{{listenTel}}</el-col>
        </el-row>
        <el-row style="text-align: center; ">
          <el-col :span="6" class="river_title">起止点位置</el-col>
          <el-col :span="9" class="river_item"  style="border-right:1px solid #c0c0c0;"> <i style='color:blue;' class="iconfont icon-dian"></i>{{startPosition}}</el-col>
          <el-col :span="9" class="river_item"> <i style='color:red;' class="iconfont icon-dian"></i>{{endPosition}}</el-col>

        </el-row>

      </div>

<!--img-->
      <div  style="width:80%;margin:20px auto;">
        <img :src=imgsrc  width="100%" height="600">

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props:[
      "valueRiver"//子父组件传值
    ],
    data() {
      return {

        menulist: [],
        imgsrc:'',//图片地址
        boardLocation:'', /*河段名称*/
        riverName:'', /*公示牌位置*/
        riverLength:'', /*河段长度*/
        listenTel:'',/*监督电话*/
        startPosition:'', /*起点位置*/
        endPosition:'', /*终点位置*/
        currentRiver:"",/*当前选中河道*/




      }
    },
    created() {
    },
    mounted() {
      console.log("获取当前跳转传过来的参数")
      // var checkParam=this.$route.params
      // var currentPath=this.$route.path
      // console.log(checkParam)
      // console.log(currentPath)
      // console.log(currentRiverId)

      /*请求左侧目录接口*/
      /*http请求*/
      var that=this

      let  param={
        "adCode":"450200000000",
        // "adCode":currentRiverId,
      }
      let url="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/gm/masterSign"
      this.$http.post(url,JSON.stringify(param),{
        emulateJSON: true,
      }).then(function(res) {
        console.log("显示当前查询结果")
        let data=res.body.data.mastersign
        console.log(data)
        that.menulist=data

        for(var i=0;i<data.length;i++){
          console.log(data[i])
          console.log(data[i].id)
          console.log(data[i].adCode)

        }


      }).catch(function(res){
      })







    },
    computed: {
    },
    methods: {


      handleSelectionChange(val){
        console.log("获取选中的行要素数组集合")
        console.log(val)
      },
      handleSelect(key, keyPath){
        console.log("选中当前要素请求接口数据渲染表格")
        console.log(key)//
        console.log(this.menulist)
        this.currentRiver=key
        this.imgsrc=""
        this.boardLocation=""
        this.riverName=""
        this.riverLength=""
        this.listenTel=""
        this.startPosition=""
        this.endPosition=""
        for(var i=0;i<this.menulist.length;i++){
          if(key==this.menulist[i].signCode){

            this.currentRiver=this.menulist[i]
            console.log( this.currentRiver)
            this.imgsrc= this.currentRiver.filePath
            this.boardLocation= this.currentRiver.rvName
            this.riverName= this.currentRiver.signAddress
            this.riverLength= this.currentRiver.signLng
            this.listenTel= this.currentRiver.adCode
            this.startPosition= this.currentRiver.signLat
            this.endPosition= this.currentRiver.signLng
          }

        }




        // console.log(keyPath)
      },
      handleOpen(key, keyPath){
        console.log(key, keyPath)
      },
      handleClose(key, keyPath){
        console.log(key, keyPath)
      },
      ajaxRiverPark(){

        this.imgsrc=""
        this.boardLocation=""
        this.riverName=""
        this.riverLength=""
        this.listenTel=""
        this.startPosition=""
        this.endPosition=""
        /*http请求*/
        var that=this

        let  param={
          // "adCode":"450200000000",
          "adCode":this.valueRiver,
        }
        let url="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/gm/masterSign"
        this.$http.post(url,JSON.stringify(param),{
          emulateJSON: true,
        }).then(function(res) {
          console.log("显示当前查询结果")
          let data=res.body.data.mastersign
          console.log(data)
          that.menulist=data

          for(var i=0;i<data.length;i++){
            console.log(data[i])
            console.log(data[i].id)
            console.log(data[i].adCode)

          }


        }).catch(function(res){
        })


      }

    },
    watch:{

      valueRiver(val){
        console.log("监听父组件传过来的值")
        console.log(val)
        this.ajaxRiverPark()

      }


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
    background: #fff;
    width: 20%;
    height: calc( 100vh - 80px);
    position: absolute;
    top: 0;
    left: 0;
    border-right: #fff dashed 2px;
    border-left: #fff solid 1px;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
  }
  #groundWater  .right_menu{
    width: 80%;
    height: calc( 100vh - 80px);
    padding-top: 50px;
    /*background: #031823;*/
    background: #fff;
    /*background: rgba(21, 37, 63,1);*/
    position: absolute;
    top: 0;
    right: 0;
  }
  #groundWater .singleli_title {
    font-size: 13px;
    height: 35px;
    /*line-height: 50px;*/
    border-radius: 5px;
    font-weight: lighter;
    margin-left: 3%;
    margin-top: 20px;
  }
  #groundWater .singleli_title .sysfxTit {
    color: #333;
    letter-spacing: 1px;
    font-size: 16px;
    /* text-align: right; */
    margin-right: 10px;
  }
  #groundWater >>>.el-pagination__total{
    /*color:#ffffff !important;*/
  }
  #groundWater >>>.el-pagination__jump{
    /*color:#ffffff !important;*/
  }
  #groundWater >>>.el-pagination .el-select .el-input .el-input__inner{
    /*color: #ffff;*/
  }
  >>>.el-main{
    padding:0;
  }
  >>>.el-input__inner {
    padding-left: 30px;
    color: #333;
    border: 1px solid #ccc;
    /*background: #031823;*/
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    font-size: 14px;
    height: 30px ;
  }
  >>>.el-pagination__total{
    color:#ffffff !important;
  }
  >>>.el-pagination__jump{
    color:#ffffff !important;
  }
  >>>.el-pagination .el-select .el-input .el-input__inner{
    color: #ffff;
  }
  >>>.el-button{
    padding: 5px 15px !important;
  }
  >>>.el-button:active {
    color: #fff;
    border-color: #3a8ee6;
    outline: 0;
    background: #1677ff;
  }
  >>>.el-button:focus, .el-button:hover {
    color: #fff;
    border-color: #c6e2ff;
    /*background-color: rgba(21,37,63,0.86);*/
    background: #1677ff;
  }
  >>>.el-radio-group{
    width:100%;
  }
  >>>.el-radio {
    color: #333;
  }
  >>>.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width:86%;
  }
  >>>.el-select-dropdown__item.selected{
    padding-left:20px!important;
  }
  >>>.el-radio__label {
    color: #333;
    font-size: 14px;
    padding-left: 4px;
  }
  /* 滚动样式修改*/
  >>> ::-webkit-scrollbar {
    /*background-color: transparent !important;*/
    /*height: 0 !important;*/
    /*width: 0 !important;*/
  }
  >>> ::-webkit-scrollbar-thumb {
    /*background-color: transparent !important;*/
  }
  /* 修改边框颜色*/
  >>> ::-webkit-scrollbar-thumb {
    /*background-color: transparent !important;*/
  }
  >>>.el-container{
    height: 100%;
  }

  .informationLnquiry_title{

    border-bottom: 3px solid #1677FF;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    width: 160px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5px;

  }
  .river_title{
    padding: 10px;
    /* background: #E1F4FF; */
    background: #f1f1f1;
    color: #909399;
    font-weight: 800;

  }
  .river_item{
    padding: 10px;
    color: #333;
  }
</style>
