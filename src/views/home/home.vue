<template>
    <div id='map'>
      <!--navHeader-->
      <div class="nav_header">
        <div class="nav_logo">
          <i  :class="['iconfont', 'icon-shuidi3','nav-icon']"></i>
          <span >
            河长制水质水量评价服务系统
          </span>
<!--          <img src="../../../static/images/logo.png"  width="400"   alt="logo">-->
        </div>
        <ul  class="nav_title">
          <li
            v-for="(item,index) in menu"
            :key="index"
            :class="['sliderMenuClass',{active : ( isActive == item.value ? true : false )}]"
            @click="isActive = item.value;currentComp = item.comp"
          >
            <i  :class="['iconfont', item.icon]"></i>
            <span>{{item.name}}</span>
          </li>
        </ul>
        <div class="nav_login"></div>
      </div>

      <!--toolbar-->

      <div id="toolbar">
        <ul  class="">
          <li
            v-for="(item,index) in toollist"
            :key="index"
            :class="['toolbtn', item.icon,{activeTool : ( currentTool == item.value ? true : false )}]"
            @click="currentTool= item.value;execute(item.value);"

          >
<!--            @mouseover="selectStyle (item.value),currentTool= item.value "-->
<!--            @mouseout="outStyle(item.value),currentTool=''"-->
<!--          <span>{{item.name}}</span>-->
          </li>
        </ul>
      </div>
      <!--toolbar tab-->

      <div  style="position: relative;z-index:9;" id="toolbar_tab">
        <div v-show="currentTool=='layer'">
        <layercontrol></layercontrol>
        </div>
      </div>

      <!--tab -->
      <!--切换组件-->
      <div style="position: relative;z-index:1; ">
        <!--組件跳轉-->
        <!--  <com :is="currentComp"></com>-->

        <div v-show="currentComp=='index'">
          <indexlefttop></indexlefttop>
          <indexleftbottom></indexleftbottom>
          <indexright></indexright>
        </div>

        <div v-show="currentComp=='infoSystem'">
          <infoSystem></infoSystem>
        </div>

        <div v-show="currentComp=='programModel'">
          <programModel></programModel>
        </div>

        <div v-show="currentComp=='qualityClassfy'">
<!--          <qualityClassfy></qualityClassfy>-->
          <!--路由配置-->
          <router-view></router-view>

        </div>

        <div v-show="currentComp=='qualityPrediction'">
          <!-- <qualityPrediction></qualityPrediction>-->
          <!--路由配置-->

          <router-view></router-view>
        </div>
        <div v-show="currentComp=='bearingCapacity'">
          <bearingCapacity></bearingCapacity>
        </div>

        <div v-show="currentComp=='operationalDisplay'">
          <operationalDisplay></operationalDisplay>
        </div>

      </div>
  <!--tab -->
    </div>
</template>

<script>
import 'ol/ol.css'
import olMap from 'ol/Map'
import olView from 'ol/View'
import ollayerTile from 'ol/layer/Tile'
import { transform, get } from "ol/proj";
import TileArcgisRest from 'ol/source/TileArcGISRest'
import OSM from "ol/source/OSM"
import XYZ from "ol/source/XYZ"
//Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA';

import indexlefttop from "../../components/indexpage/indexlefttop"
import indexleftbottom from "../../components/indexpage/indexleftbottom"
import indexright from "../../components/indexpage/indexright"
import infoSystem from "../../components/infosys/infoSystem"
import programModel from "../../components/programmodel/programModel"
import qualityClassfy from "../../components/qualityclassfy/qualityClassfy"
import qualityPrediction from "../../components/qualitypredict/qualityPrediction"
import bearingCapacity from "../../components/bearcapacity/bearingCapacity"
import operationalDisplay from "../../components/operationdispaly/operationalDisplay"
/*toolbar*/
import layercontrol from "../../components/toolbar/layercontrol"


export default {
    name: 'Map',
    components:{
        indexlefttop,
        indexleftbottom,
        indexright,
        infoSystem,
        programModel,
        qualityClassfy,
        qualityPrediction,
        bearingCapacity,
        layercontrol,//图层控制
        operationalDisplay,
    },
    data () {
        return {
          toolbarVisible:true,//toobar显引
          currentTool:'',//当前选中的功能方法
          map:null,
          view:null,
          labelActiveName:'UpperAirObservation',
          tabPosition: 'right',
          PanelVisual:'true',
          // 当前选中的组件
          currentComp: 'index',
          // currentComp: 'qualityClassfy',
          // currentComp: 'operationalDisplay',
          // 当前选中的li标签
          isActive: 'index',
          // isActive: 'qualityClassfy',
          // isActive: 'operationalDisplay',
          menu: [
            {
              icon:"icon-home",
              // li标签的内容
              name: '首页',
              // 当前li标签是否选中的标识
              value: 'index',
              // 点击当前li标签，要显示的组件
              comp: 'index'
            },
            {
              icon:"icon-baocun",
              // li标签的内容
              name: '信息综合管理',
              // 当前li标签是否选中的标识
              value: 'infoSystem',
              // 点击当前li标签，要显示的组件
              comp: 'infoSystem'
            },
            {
              icon:"icon-fuhao-tuceng",
              name: '方案模型管理',
              value: 'programModel',
              comp: 'programModel'
            },
            {
              icon:"icon-home",
              name: '水质分类评价',
              value: 'qualityClassfy',
              comp: 'qualityClassfy'
            },
            {
              icon:"icon-fuhao-tuceng",
              name: '水质预测预警',
              value: 'qualityPrediction',
              comp: 'qualityPrediction'
            },{
              icon:"icon-fuhao-tuceng",
              name: '承载能力分析',
              value: 'bearingCapacity',
              comp: 'bearingCapacity'
            },{
              icon:"icon-fuhao-tuceng",
              name: '综合运算与展示',
              value: 'operationalDisplay',
              comp: 'operationalDisplay'
            }
          ],
          toollist:[
            {
              icon:"magnifying",
              name: 'magnifying',
              value: 'magnifying',
              // comp: '2'
            },
            {
              icon:"layer",
              name: 'layer',
              value: 'layer',
              // comp: '3'
            },
            {
              icon:"measure",
              name: 'measure',
              value: 'measure',
              // comp: '3'
            },
            {
              icon:"screentool",
              name: 'screentool',
              value: 'screentool',
              // comp: '4'
            },
            {
              icon:"set",
              name: 'set',
              value: 'set',
              // comp: '4'
            }
          ]
        }
    },

    mounted(){
    // 初始化定位
    let pos = [107.8,23.729];
    pos= transform(pos, 'EPSG:4326', 'EPSG:4326')
    map = new ol.Map({
      target:'map',
      layers: [
        new ol.layer.Tile({
         // source: new OSM()
          source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
          source:new ol.source.TileArcGISRest({
            url:baseMap
          })
        })
      ],
      view: new ol.View({
        center: pos,
        minZoom:5,
        maxZoom: 20,
        zoom: 7.6,
        projection: 'EPSG:4326'
      })
    });
  },

    methods:{
      execute(currentTool){
        console.log("执行工具"+currentTool)
      },
      outStyle(currentTool){

      },
      selectStyle(currentTool){

      },

    },
  watch: {

    currentComp(newValue) {
      console.log(newValue)
      if(newValue=="qualityPrediction"){
        this.$router.push({name:'qualityPrediction',params:{}});
      }
      if(newValue=="qualityClassfy"){
        this.$router.push({name:'qualityClassfy',params:{}});
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*#home{height:800px;}*/
/*隐藏ol的一些自带元素*/
.ol-attribution,.ol-zoom { display: none;}
#map{

  z-index: 8;
  width: 100%;
  height: 100%;
  position: absolute;
  /*border: solid 1px mediumvioletred;*/
  left: 0px;
  top: 0px;
  margin: 0 auto;
}
.nav_logo{
  position: absolute;
  top: 20px;
  left: 12px;
  z-index: 1;
}
.nav_logo  span{
  font-size: 25px;
  color: #fff;
  font-weight: 800;
}
.nav_logo .nav-icon{
  font-size: 25px;
  color: #fff;
  font-weight: 800;


}
.nav_header{
  z-index:999;
  position: relative;
  width: 100%;
  height: 80px;
  background-size:contain;
  background: #1a51ff;
  /*background: url("../../../static/images/headerbg.png") no-repeat;*/
}
.nav_title{
  position: absolute;
  left: 500px;

  color: #fff;
  top: 23px;
}
.nav_login{
  position: absolute;
  cursor: pointer;
  top:17px;
  right:30px;
  width:50px;
  height: 50px;
  background: url("../../../static/images/loginpic.png");
}



.sliderMenuClass{
  cursor: pointer;
  color: #fff;
  list-style: none;
  font-size: 15px;
  text-align: center;
  width: 137px;
  margin-right: 10px;
  float: left;
  line-height: 32px;
  padding: 5px 0;
  /*background: url("../../../static/images/nav_title_bg.png") no-repeat;*/
}
.active{
  color: #fae808!important;
  /*background-color: #d49500!important;*/
  /*color: #fff!important;*/
  /*border: 1px solid #d49500!important;*/
}


>>>.el-tabs__item{
  color: #fff;
}
>>>.el-tabs__item.is-active{
  color: #409EFF;
}

.menuNavigation_Wrap{

  height: 70%;
  z-index: 99;
  overflow: hiddem;
  position: relative;
  color: #fff;
}
.menuNavigation_Wrap::-webkit-scrollbar {/*滚动条整体样式*/
  width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.menuNavigation_Wrap::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  /*background: #ACDECF;*/
}

.menuNavigation_Wrap::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  background: #022A2E;
}
/* @media screen and (min-width:768px) and (max-width:1200px)  {
.menuNavigation_Wrap{
   width:400px;
}
}  */
.menuNavigation_Wrap--show{
  position:absolute;
  left:0px;
  top: 6%;
}
.contractImg{
  color: #66c5fe!important;
  background-color: #042c64!important;
  border-color: #018fce!important;
  margin-right: 3px!important;
  margin-left: 0!important;
  border-radius: 50%!important;
  line-height: 30px;
  width: 30px;
  position: absolute;
  left: 323px;
  top: 5.3%;
  z-index: 999;
  /* border-top: 10px solid transparent; */
  /* border-bottom: 10px solid transparent; */
  /* border-right: 10px solid rgb(255, 199, 103); */
  cursor: pointer;
  text-align: center;
  border: solid 1px #c0c0c0;

}
.openImg{
  text-align: center;
  border: solid 1px #c0c0c0;
  line-height: 30px;
  width: 30px;
  color: #66c5fe!important;
  background-color: #042c64!important;
  border-color: #018fce!important;
  border-radius: 50%!important;
  cursor: pointer;
  position:absolute;
  left: 5px;
  top: 5.3%;
  z-index: 21;
  /*height: 0;*/
  /*width: 0;*/
  /*border-top: 10px solid transparent;*/
  /*border-bottom: 10px solid transparent;*/
  /*border-left: 10px solid  rgb(255, 199, 103);*/


}

.menuNavigation_Wrap .el-radio__input.is-checked .el-radio__inner{
  border-color: #27D998;
  background: #27D998;
}
.menuNavigation_Wrap--hide{
  position:absolute;
  right:-300px;
  bottom:0px;
}
.menuNavigation_Wrap .el-tabs__item{
  writing-mode: vertical-lr;
  letter-spacing: 3px;
  font-size: 16px;
  text-align: center;
  height: 90px;
  padding: 2px;
  color: #D0D0D0;
  border-bottom: 1px solid red;
  border-top: 1px solid red;
}

.menuNavigation_Wrap .li_title{
  border-radius: 10px;
  /* background-color:#14353d; */
  line-height: 32px;
  height: 32px;
  width: 90%;
  margin-top: 10px;
}
.menuNavigation_Wrap .li_title .sysfxTit{
  color:white;
  font-size:16px;
  text-align: left;
}
#satelliteSelect{
  margin-right: 14px;
}
#satelliteSelect input{
  font-size: 16px;
  width:190px;
  height:30px;
  background:rgba(13,32,39,1);
  box-shadow:0px 0px 4px 0px rgba(19,255,187,0.3);
  border-radius:4px;
  border:1px solid rgba(9,65,75,1);
  color: white;
}
.menuNavigation_Wrap  .el-input__icon {
  line-height: 30px !important;
}
.menuNavigation_Wrap  .levelPanel{
  font-size: 12px;
}
.menuNavigation_Wrap .levelPanel .el-tabs__item{
  writing-mode: horizontal-tb;
  letter-spacing: 3px;
  font-size: 16px;
  text-align: center;
  height: 30px;
  padding: 2px;
  width: 55%;
}
.menuNavigation_Wrap .el-divider{
  margin: 5px 0 !important;
}

.menuNavigation_Wrap .el-collapse-item__header{
  width:389px;
  height: 30px;
  line-height: 30px;
  background-color: #14353d;
  color: white;
  border: none;
  background:rgba(15,234,166,0.2);
  border-radius:8px;
  margin-bottom: 4px;
  font-size: 16px;
}
.menuNavigation_Wrap .li_title .observationSysfxTit{
  color: #fff;
  text-align: center;
}
.menuNavigation_Wrap .el-collapse-item__wrap{
  background-color: #14353d;
}

.menuNavigation_Wrap  .el-tabs__item:hover {
  color: #0FEAA6 ;
  cursor: pointer;
}
.menuNavigation_Wrap .el-tabs__item.is-active{
  color: #0FEAA6 ;
  background-color: #10473D;
  /* opacity:0.8; */

}
.menuNavigation_Wrap .el-tabs__active-bar{
  color: #0FEAA6 ;
  background-color:#0FEAA6 ;
}
.menuNavigation_Wrap .imgClass{
  padding-top: 5px;
  padding-right: 5px;
}
.menuNavigation_Wrap .hrClass{
  border: 1px dashed rgb(29, 106, 97);
  margin: 15px;
}
.menuNavigation_Wrap .levelPanel .el-tabs__active-bar{
  width:88px ;
  transform:translateX(0px) ;
}
#telescopicPanel .el-select-dropdown__item{
  font-size: 16px!important;
}
#telescopicPanel .el-collapse {
  border-top: none;
  border-bottom:none;
}
#telescopicPanel .el-collapse-item__wrap{
  border-bottom:none;
}

/*edit by dl*/
.rightBtn{
  margin-left: 15px;
  width: 110px;
  float: right;
  margin-top: 35px;
}
.leftCom{
  height: 660px;
  overflow: auto;
  width: 300px;
  /* float: left; */
  background: rgba(21,37,63,0.5);
  -webkit-box-shadow: 0 0 2px #1e88ef, 0 0 12px #1e88ef;
  box-shadow: 0 0 2px #1e88ef, 0 0 12px #1e88ef;
  position: absolute;
  top: 128px;
  left: 0;
  z-index: 1;
}
.clearfL{
  clear:both;
  font-size:0;
  height:0;
  line-height: 0;

}


  /*toolbar*/
  #toolbar{
    z-index: 1;
    position: absolute;
    top: 86px;
    right: 9px;

  }
  #toolbar .toolbtn{
    float: left;
    width: 70px;
    height: 62px;
    /*border: solid 1px red;*/
    cursor: pointer;

    }
   /*放大*/
    .magnifying{
      background: url("../../../static/images/magnify.png") no-repeat;
    }

    /*图层*/
    .layer{
      background: url("../../../static/images/layer.png") no-repeat;
    }
    /*图层控制*/
    .layercontrol{
      background: url("../../../static/images/layer.png") no-repeat;
    }
    /*测量*/
    .measure{
      background: url("../../../static/images/measure.png") no-repeat;
    }
    /*截图*/
    .screentool{
      background: url("../../../static/images/screenshot.png") no-repeat;
     }
    /*设置*/
    .set{
      background: url("../../../static/images/setting.png") no-repeat;
    }


  .activeTool{
    color: red;
  }
  #toolbar_tab{
    /*border:solid 1px pink;*/


  }


</style>
<style>
  @import url('../../../static/css/swap2.css');
</style>
