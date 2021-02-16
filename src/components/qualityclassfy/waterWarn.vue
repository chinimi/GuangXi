<template>
    <div  id="groundWater">

      <!--左侧递归标题目录树-->
      <el-aside  class="sub_menu" >

      <el-menu
          :router="true"
          class="el-menu-vertical-demo"
          @select="selectItems"
          >
          <div  v-for="(item,index) in menulist" :key="item.id">
            <!--一级菜单（没有任何子级菜单）-->
            <el-menu-item :index="item.path" v-if="!item.children">

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
              <div v-for="(i,index) in item.children" :key="index.id">

                <!-- 判断二级菜单（没有三级菜单）-->
                <el-menu-item :index="i.path" v-if="!i.children">
                  <i class="el-icon-menu"></i>
                  {{i.authName}}
                </el-menu-item>
                <!-- 判断二级菜单（有三级菜单）-->
                <el-submenu :index="i.path" v-if="i.children">
                  <template slot="title">{{i.authName}}</template>
                  <el-menu-item :index="j.path" v-for="(j,index) in i.children" :key="i.id">{{j.authName}}       </el-menu-item>
                </el-submenu>
              </div>

            </el-submenu>

          </div>
        </el-menu>

      </el-aside>
      <div class="timeModule">
        <el-row>
          <el-col :span="2">  <span>预报时间开始:</span></el-col>
          <el-col :span="5">
            <el-date-picker
              v-model="startTime"
              value-format="yyyy-MM-dd HH:mm"
              type="datetime"
              size="mini"
              >
            </el-date-picker>

          </el-col>
          <el-col :span="3">
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
          <!--时间轴-->
          <el-col :span="5">

            <el-row>
              <el-col :span="3">

                <!--播放按钮-->
                <div class="playbutton" @click="play">
                  <i class="iconfont icon-zanting"  v-if="isTimerPlaying" ></i>
                  <i class="iconfont icon-bofang1"  v-else ></i>
                </div>

              </el-col>
              <el-col :span="20">
                <!--进度条-->
               <!-- <div class="progress__bar" >
                  <div class="progress__current" :style="{ width : barWidth }" >

                  </div>

                </div>-->




                <div class="Progress">
                  <div class="jindu"
                       :style="{
	        width:jindu+'%',
	    }">
                  </div>
                  <div class="ball"
                       :style="{
	        left:jindu+'%',
	    }">
                  </div>
                </div>

              </el-col>


            </el-row>






          </el-col>
          <!--时间轴  over-->


          <el-col :span="2"><span>当前播放时间:</span></el-col>
          <el-col :span="5">
            <span></span><el-input    style="width:200px;display: inline-block"  v-model="currentPlayTime" placeholder=""></el-input>
          </el-col>
          <el-col :span="2"><i class=" iconfont icon-hj3" style="font-size:20px;cursor: pointer;display: block;"@click="showControllePan"></i></el-col>
        </el-row>
      </div>
      <!--设置模块-->
      <div class="setModule" v-if="setFlag">
         <el-row>
           <!--调用模板-->
           <el-col :span="5">
            <span>调用模板：</span>

           </el-col>
           <el-col :span="7">
             <el-select v-model="dymbval">
               <el-option
                 v-for="(item, index) in dymbOption"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value"
               >

               </el-option>
             </el-select>
           </el-col>
          <!--调用模型-->
           <el-col :span="5">
             <span>调用模型：</span>

           </el-col>
           <el-col :span="7">
             <el-select v-model="dymuxingval">
               <el-option
                 v-for="(item, index) in dymuxingOption"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value"
               >

               </el-option>
             </el-select>
           </el-col>

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

      <!--echart表  动态收缩弹窗-->
      <div   ref='transitionChart' class="chartPanel">
        <div class="trigger_btn"  @click="transitionChartPanel" ></div>
        <el-row>
          <el-col :span="8">
            <el-select v-model="value" placeholder="请选择">
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
          </el-col>
          <el-col :span="4">  <span>达标率</span></el-col>


          <el-col :span="8">

            <el-select v-model="value" placeholder="请选择">
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
          </el-col>

          <el-col :span="4"> <span>达标率</span></el-col>

          <!--创建echart表-->
<!--          <button @click="createChart">创建echart表</button>-->
          </el-row>
          <div ref="firstchart"  class='firstchart' >
          </div>
          <div ref="secondchart"  class='firstchart'>
          </div>
      </div>




	</div>
</template>

<script>
  var menulist =[

    {
      /*切换对应组件*/
      "authName": "水资源量预测",
      id:'szylyc',
      path:'',
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

  // import echarts from  'echarts'
  import moment from 'moment'
  export default {
      data(){
          return {
            jindu:0,
            percentage:0,
            clearInt:null,
            /*时间轴参数*/
            timer:null,
            barWidth: null,
            duration: null,
            totalDuration:30,//设置多久走完所有进度条时间
            currentTime: null,//当前播放时间
            eachDuration:null,//每一步长走的时间
            currentIndex:0,//当前播放第几个产品
            isTimerPlaying: false,//暂停
            tracks: [//时间轴切换图层
              {
                name: "layer1",
                artist: "Leonard Cohen",
                cover: "../t1.png",
                source: "../jq22.mp3",
                url: "#",
                favorited: true
              },
              {
                name: "layer2",
                artist: "Norm Ender",
                cover: "../t2.png",
                source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
                url: "#",
                favorited: false
              },
              {
                name: "layer3",
                artist: "Norm Ender",
                cover: "../t2.png",
                source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
                url: "#",
                favorited: false
              },
              {
                name: "layer4",
                artist: "Norm Ender",
                cover: "../t2.png",
                source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
                url: "#",
                favorited: false
              },
              {
                name: "layer5",
                artist: "Norm Ender",
                cover: "../t2.png",
                source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
                url: "#",
                favorited: false
              }

            ],


            /*时间轴参数over*/


            chartaPanelFlag:false,//判断echart展开折叠参数
            currentPlayTime:'',//当前播放时间
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
            /*调用模板*/
            dymbval:'',
            dymbOption:[{
              label:"COD",
              value:'avg',
            },{
              label:"NH3",
              value:'min',
            },{
              label:"NO2",
              value:'max',
            }],
            /*调用模型*/
            dymuxingval:'',
            dymuxingOption:[{
              label:"COD",
              value:'avg',
            },{
              label:"NH3",
              value:'min',
            },{
              label:"NO2",
              value:'max',
            }],
            setFlag:false,//调用模板界面
            value:'',
            options: [{
              label: '热门城市',
              options: [{
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }]
            }, {
              label: '城市名',
              options: [{
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }, {
                value: 'Dalian',
                label: '大连'
              }]
            }],


            /*echart option*/

           firstoption:{
              title: {
                text: '折线图堆叠'
              },
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  name: '邮件营销',
                  type: 'line',
                  stack: '总量',
                  data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: '联盟广告',
                  type: 'line',
                  stack: '总量',
                  data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name: '视频广告',
                  type: 'line',
                  stack: '总量',
                  data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                  name: '直接访问',
                  type: 'line',
                  stack: '总量',
                  data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                  name: '搜索引擎',
                  type: 'line',
                  stack: '总量',
                  data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
              ]
            },

            chart1:null,//echart表

          }
      },
      mounted() {


        this.startTime=moment().utc(8).format("YYYY-MM-DD hh:mm")//注意时间格式
        this.currentPlayTime=this.startTime//初始化当前播放时间

        this.createChart()

        // this.progress();


      },
      created() {

      },
      computed: {

      },
      methods: {
        /*时间轴功能*/
        play(){
          if (this.isTimerPlaying) {
            this.isTimerPlaying = false;
            this.stop()
          } else {
            this.isTimerPlaying = true;
            this.progress()
          }


        },
        clickProgress(){



        },
        generateTime(){
          debugger

          let vm=this
          let width = (100 / this.tracks.length)*this.currentIndex
          console.log(width)//步长
          this.barWidth = width + "%";
          this.circleLeft = width + "%";
          this.eachDuration=this.totalDuration/this.tracks.length
          this.timer=setInterval(function(){
            vm.currentIndex++
            console.log(vm.currentIndex)
            let percentage= width* vm.currentIndex
            if (percentage > 100) {
              percentage = 100;
            }
            if (percentage < 0) {
              percentage = 0;
            }
            vm.barWidth= percentage + "%";
            vm.circleLeft = percentage + "%";

            console.log(   vm.barWidth )

          },this.eachDuration)


        },
        /*进度条*/
        progress(){
          let _this=this;
          _this.clearInt=setInterval(function(){
            _this.jindu++;
            if(_this.jindu==100){
              clearInterval(_this.clearInt);
            }
          },3000/5);
        },
        stop(){
          clearInterval(this.clearInt);
        },


        /*时间轴功能*/



        transitionChartPanel(){
          if(this.chartaPanelFlag){

            this.$refs.transitionChart.style.top = 'calc(100vh - 400px)'
            this.chartaPanelFlag=false
          }else{

            this.$refs.transitionChart.style.top = 'calc(100vh - 80px)'
            this.chartaPanelFlag=true

          }


        },
        createChart(){

        /*  this.chart1 = this.$echarts.init(document.getElementById('firstchart'))
          this.chart1.setOption(this.firstoption)

          console.log(this.chart1)*/


        /*没拿到echart全局变量*/
          let  Chart1 = this.$refs.firstchart

        let myChart1=this.$echarts.init(Chart1);


          // 给树状图赋值
          let lineOption1={
            title: {
              text: 'title',
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                  type: 'dashed',
                  width: 1
                }
              }
            },
            color: ['#ff00fe', '#f87b03', '#cd0100', '#bfaf01'],

            grid: {
              top: 55,
              left: 10,// 调整这个属性
              right: 10,
              bottom: 10,
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisLine: {
                lineStyle: {
                  color: '#05a3f2'  //x轴legend放上时的颜色
                }
              },
              axisLabel: {
                color: '#fff', //x轴字体颜色
                textStyle: {
                  fontSize: 12
                },
                // formatter: function (value) {
                //   return value.split(' ').join('\n')
                // }
              }
            },

            yAxis: {
              type: 'value',
              splitLine: {
                lineStyle: {
                  // 使用深浅的间隔色刻度
                  color: ['#094172', '#094172'],
                  type: 'dashed'
                }
              },
              // splitArea : {show : false},
              // splitLine:{show: false},
              axisLine: {
                lineStyle: {
                  color: '#05a3f2' //x轴legend放上时的颜色
                },
              },
              axisLabel: {
                // formatter: '{value}('+unit+')',
                color: '#fff' //y轴字体颜色
              },
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }]
          }

          myChart1.setOption(lineOption1)



          let  Chart2 = this.$refs.secondchart

          let myChart2=this.$echarts.init(Chart2);


          // 给树状图赋值
          let lineOption2={
            title: {
              text: 'title',
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                  type: 'dashed',
                  width: 1
                }
              }
            },
            color: ['#ff00fe', '#f87b03', '#cd0100', '#bfaf01'],

            grid: {
              top: 55,
              left: 10,// 调整这个属性
              right: 10,
              bottom: 10,
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisLine: {
                lineStyle: {
                  color: '#05a3f2'  //x轴legend放上时的颜色
                }
              },
              axisLabel: {
                color: '#fff', //x轴字体颜色
                textStyle: {
                  fontSize: 12
                },
                // formatter: function (value) {
                //   return value.split(' ').join('\n')
                // }
              }
            },

            yAxis: {
              type: 'value',
              splitLine: {
                lineStyle: {
                  // 使用深浅的间隔色刻度
                  color: ['#094172', '#094172'],
                  type: 'dashed'
                }
              },
              // splitArea : {show : false},
              // splitLine:{show: false},
              axisLine: {
                lineStyle: {
                  color: '#05a3f2' //x轴legend放上时的颜色
                },
              },
              axisLabel: {
                // formatter: '{value}('+unit+')',
                color: '#fff' //y轴字体颜色
              },
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }]
          }

          myChart2.setOption(lineOption2)


        },

        selectItems(index){
          console.log(index)



        },
        showMidTab(ele){
          console.log("显示当前选中要素")
          console.log(ele)


        },

        showControllePan(){
          /*显示设置弹窗*/
          if( this.setFlag){
            this.setFlag=false

          }else{
            this.setFlag=true

          }


        }

      },
      watch:{
        startTime(newValue){
          console.log(newValue)

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
    width: 20%;
    height: calc( 100vh - 80px);
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    /*background: #031823;*/
    /*background: rgba(21, 37, 63,1);*/
    position: absolute;
    top: 0;
    left: 0;
    border-right: #fff dashed 2px;
    border-left: #fff solid 1px;
  }
  >>>.el-menu-item:focus, .el-menu-item:hover{
    /*background: rgba(25, 17, 28, 0.2) !important;*/
    /*color:#fff!important;*/

  }

  >>>.el-submenu__title:hover {
    /*background-color: #ecf5ff;*/
    /*background: rgba(25, 17, 28, 0.2) !important;*/

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
    margin-left: 19px;
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
    width: 60%;
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

  .timeModule span{
    font-size:13px;

  }

  /*调用模型*/
  .setModule{
    width: 18%;
    position: absolute;
    top: 98px;
    right: 401px;
    background: #233b8f;
    color: #fff;
    padding: 12px 25px;
    border-radius: 10px;
  }
  .setModule span{
    font-size:13px;

  }
  /*echart表*/
.trigger_btn{
  cursor:pointer;
  width: 100px;
  height: 30px;
  border: solid 1px purple;
  position: absolute;
  top: -32px;
  left: 232px;
  background: #fff;

}
  .chartPanel{
    width: 40%;
    position: absolute;
    top: calc(100vh - 400px);
    left: 316px;
    background: rgba(35, 59, 143,0.9);
    color: #fff;
    height: 281px;
    border-radius: 10px;
    padding:20px 20px;

  }

  .firstchart{
    margin-left:30px;
    width:300px;
    height:200px;
    float: left;
    /*border: solid 1px red;*/

  }

  .secondchart{
    padding-left:20px;
    width:40%;
    height:200px;
    float: left;
    /*border: solid 1px red;*/

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

  .sub_menu{
    border-right: #fff dashed 2px;
    border-left: #fff solid 1px;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    width: 15%;
    height: calc( 100vh - 80px);
    background: #fff;
    padding-top: 25px;
    position: absolute;
    top: 0;
    left: 0;
  }

  /*时间轴样式*/

  .progress__bar {
    height: 6px;
    width: 90%;
    cursor: pointer;
    background-color: #d0d8e6;
    display: inline-block;
    border-radius: 10px;
  }
  .progress__current {
    height: inherit;
    width: 0%;
    background-color: #a3b3ce;
    border-radius: 10px;
  }
  .playbutton{
    padding-left:7px;


  }
  /*时间轴样式over*/
  .Progress {
    position: relative;
    width: 100%;
    height: 20px;
    margin: 0 auto;
    /*margin-top: 50px;*/
    border: 1px solid gray;
    box-shadow: -1px -1px 1px #000;
    background: rgb(177, 174, 174);
  }
  .jindu{

    height: 100%;
    background: #3165c5;
    overflow: hidden;
  }
  .ball{
    position: absolute;
    top: 0;
  left:0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3165c5;
    overflow: hidden;
  }


  </style>
