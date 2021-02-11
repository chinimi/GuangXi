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
          <div  v-for="(item,index) in menulist" :key="index+'_a'">
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
              <div v-for="(i,index) in item.children" :key="index+'_b'">

                <!-- 判断二级菜单（没有三级菜单）-->
                <el-menu-item :index="i.path" v-if="!i.children">
                  <!--                      <i :class=iconsObj[i.id]></i>-->
                  <i class="el-icon-menu"></i>
                  {{i.authName}}
                </el-menu-item>
                <!-- 判断二级菜单（有三级菜单）-->
                <el-submenu :index="i.path" v-if="i.children">
                  <template slot="title">{{i.authName}}</template>
                  <el-menu-item :index="j.path" v-for="(j,index) in i.children" :key="index+'_c'">{{j.authName}}       </el-menu-item>
                </el-submenu>
              </div>

            </el-submenu>

          </div>
        </el-menu>

      </el-aside>
      <div class="timeModule">
        <el-row>
          <el-col :span="3">预报时间开始</el-col>
          <el-col :span="5">
            <el-date-picker
              v-model="startTime"
              format="yyyy-MM-dd hh-mm-ss"
              type="datetime"
              align="right"
              size="mini"
              placeholder="选择日期时间">
            </el-date-picker>

          </el-col>
          <el-col :span="5">
            <el-select v-model="qzfsval">
            <el-option
              v-for="(item, index) in qzfsOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >

            </el-option>
          </el-select>
          </el-col>

          <el-col :span="6">时间控件</el-col>
          <el-col :span="3">当前播放时间</el-col>
          <el-col :span="2"><i class=" iconfont icon-home"></i></el-col>


        </el-row>







      </div>
      <div class="warnRight">
        <div class="warn-title">耦合性参数</div>
        <ul  class="mid_tab_title">
          <li
            v-for="item  in calculateType"
            :class="['middleSliderClass',{ activeLi : ( curMidTab == item.name ? true : false )}]"
            @click="curMidTab = item.name;curMidCom=item.comp ;showMidTab(item.comp)"
          >

            <span>{{item.name}}</span>
          </li>
          <div class="clear"></div>
        </ul>

        <!--边界条件 -->
        <div class="warn-title">边界条件</div>


        <ul class="limitCondition">
          <li>预报期内累积障雨<span >16.42 </span>mm</li>
          <li>预按期内降安下游流量<span  >25 </span>m3/s</li>

        </ul>

        <ul  class="mid_tab_title">
          <li
            v-for="item  in limitOption"
            :class="['limitSliderClass',{ limitactiveLi : ( curLimitTab == item.name ? true : false )}]"
            @click="curLimitTab = item.name;curLimitCom=item.comp ;showMidTab(item.comp)"
          >

            <span>{{item.name}}</span>
          </li>
          <div class="clear"></div>
        </ul>


        <!--预报期河网水质预报 -->
        <div class="warn-title">预报期河网水质预报</div>

        <el-row  class="tableTh">
          <el-col :span="6">
            河道名称
          </el-col>
          <el-col :span="6">
            <el-row>预测水质</el-row>
            <el-row>达标率</el-row>
            <el-row>超标事件</el-row>


          </el-col>
          <el-col :span="12">
            <el-row :span="12">
              <el-col>水质参数（最大值mg/L）</el-col>
            </el-row>
            <el-row :span="12">
              <el-col :span="8">COD  |</el-col>
              <el-col :span="8">氮氨  |</el-col>
              <el-col :span="8">总磷</el-col>
            </el-row>

          </el-col>
        </el-row>
        <!--表格显示内容-->
        <el-row  class="tableContent">
          <el-col :span="6">
            整体
          </el-col>
          <el-col :span="6">
            <el-row>
              <el-col :span="12">100%</el-col>
              <el-col :span="12">0h</el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
              <el-col :span="8">9.0</el-col>
              <el-col :span="8">1.3</el-col>
              <el-col :span="8" style="color:red">0.4</el-col>
          </el-col>
        </el-row>

        <!--成因分析-->

        <div class="warn-title">成因分析</div>

        <el-row  class="tableResult">
          <el-col :span="12">
            污染物
          </el-col>
          <el-col :span="12">
            成因
          </el-col>
        </el-row>

      </div>

      <!--echart表-->




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
            startTime:'',
            menulist: menulist,
            iconsObj:{
              "generalwaterevaluate":"iconfont icon-shuidi3",
              "zxpjfxmodelpart":"iconfont icon-kongqi",
              "ssthjfx":"iconfont icon-shuidi3",

            },
            calculateType:[
              {
                name: '预报时长24小时',
                value: 'first',
                comp: 'first'
              },
              {
                name: '前算期24小时',
                value: 'second',
                comp: 'second'
              },
              {
                name: '计算步长24小时',
                value: 'third',
                comp: 'third'
              },
              {
                name: '输出步24小时',
                value: 'fourth',
                comp: 'fourth'
              },
            ],

            firstRadio:'',//1
            firstRadioOption:[{label:'监测成果测站一览表',value:'jccgylb'},{label:'·监测成果',value:'jccg'},{label:'监测成果月均',value:'jccgyj'},{label:'监测成果均值',value:'jccgjz'}],
            curMidCom:'first',//跳转组件
            curMidTab:'first',//tab mid
            /*边界条件*/
            curLimitCom:'first',
            curLimitTab:'first',//tab mid
            limitOption:[
              {
                name: '英竹补水',
                value: 'first',
                comp: 'first'
              },
              {
                name: '平果补水',
                value: 'second',
                comp: 'second'
              },
              {
                name: '同仁补水',
                value: 'third',
                comp: 'third'
              },
              {
                name: '琴花补水',
                value: 'fourth',
                comp: 'fourth'
              },
            ],
            /*取值方式*/
            qzfsval:'avg',
            qzfsOption:[{
                label:"COD",
              value:'avg',
            },{
              label:"NH3",
              value:'min',
            },{
              label:"NO2",
              value:'max',
            }],
      }
      },
      created() {

      },
      computed: {

      },
      methods: {

        selectItems(index){
          console.log(index)



        },
        showMidTab(ele){
          console.log("显示当前选中要素")
          console.log(ele)


        },


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
  .warnLeft{
    position:absolute;
    top:100px;
    left:20%;
    width:100px;
    height:100px;
    border:solid 1px red;
  }
  .warnRight{
    background: rgba(69, 135, 214, 0.61);
    position:absolute;
    top:100px;
    right:10px;
    height: calc( 100vh - 300px );
    width:350px;
   border-radius: 5px;
  }
  /*title*/
  .warn-title{
    font-weight: 800;
    font-size: 15px;
    color: #fff;
    line-height: 50px;
    padding-left: 23px;
    /*border: solid 1px #fff;*/
  }
  /*middle part*/

  .middleSliderClass{
    cursor: pointer;
    color: #fff;
    float: left;
    list-style: none;
    font-size: 10px;
    line-height: 30px;
    padding: 0px 6px;
    background: #233b8f;
    border-radius: 5px;
    margin-left: 9px;
    margin-top: 6px;
    width: 50px;

  }

  .limitSliderClass{
    cursor: pointer;
    color: #333;
    float: left;
    list-style: none;
    font-size: 10px;
    line-height: 30px;
    padding: 0px 6px;
    background: #69e4ff;
    border-radius: 15px;
    margin-left: 9px;
    margin-top: 6px;
    width: 50px;

  }
  .midactiveli{
    color:yellow;
  }
  .activeLi{
    color: #ffdb61 !important;
  }

  .limitactiveLi{
    color: #233b8f !important;
    font-weight:900;
  }


  /*边界条件*/

  .limitCondition li{
    width: 90%;
    line-height: 30px;
    background: #233b8f;
    margin: 5px  auto;
    padding: 0 0 0 13px;
    color: #fff;
    border-radius: 5px;

  }
  .limitCondition li span{
    color:greenyellow

  }

  .tableTh{
    color: #fff;
    background: #233b8f;
    width: 98%;
    margin: 5px auto;
    border-radius: 10px;
    font-size: 13px;
    padding: 5px 12px;
  }
  .tableContent{
    color: #fff;
    font-size: 13px;
    padding: 5px 12px;
    width: 98%;
    margin: 5px auto;

  }

  .tableResult {
    line-height: 50px;
    color: #fff;
    background: #233b8f;
    width: 97%;
    margin: 5px auto;
    border-radius: 10px;
    font-size: 13px;
    padding: 5px 12px;
  }

  .timeModule{
    width: 58%;
    /* height: 55px; */
    /* border: solid 1px purple; */
    position: absolute;
    top: 27px;
    left: 317px;
    background: #233b8f;
    color: #fff;
    padding: 12px 25px;
    border-radius: 10px;

  }

  >>>.el-input__inner {
    padding-left: 10px !important;
    color: #333;
    border: 1px solid #fff;
    background: #fff!important;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    font-size: 16px !important;
    /*height: 30px !important;*/
  }
  >>>.el-input__icon{
    line-height: 27px;
  }

  </style>
