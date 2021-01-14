<template>
  <div id="associativeOperate">
    <el-container>
      <!--右侧-->
      <el-main width="50%"  class="associateRight">
        <div class="topPan">
          <div class="analyze_title">
            <i class="iconfont icon-fuhao-tuceng"></i>
            <span>水质专题</span>
          </div>
          <!--内容部分-->
          <div class="analyze_content">
            <ul >
              <li
                v-for="item  in subjectProducts"
                :class="['sliderClass',{activeLi : ( curli == item.name ? true : false )}]"
                @click="curli = item.name"
              >

                <span>{{item.title}}</span>
              </li>
            </ul>

          </div>
        </div>
        <div class="middlePan">
          <div class="analyze_title">
            <span>统计分析</span>
          </div>
          <!--内容部分-->
          <div class="analyze_content">
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

            <div  class="mid_tab_content">
              <div v-show="curMidCom == 'first'">

                <el-radio-group  v-model="firstRadio">
                  <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>

              </div>
              <div v-show="curMidCom == 'second'">
                <el-radio-group  v-model="secondRadio">
                  <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>


              </div>
              <div v-show="curMidCom == 'third'">
                <el-radio-group  v-model="thirdRadio">
                  <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>


              </div>
              <div v-show="curMidCom == 'fourth'">
                <el-radio-group  v-model="fourthRadio">
                  <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>


              </div>
            </div>

          </div>

        </div>
        <div class="bottomPan">
          <div class="analyze_title">
            <span>三维展示</span>
          </div>

          <!--内容部分-->
          <div class="analyze_content">


          </div>


        </div>
      </el-main>
      <!--左侧-->
      <el-aside  style='display: block' width="50%" class="associateLeft">
        <div class="left_menu">
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  评价标准：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="pjbzval">
                    <el-option
                      v-for="(item, index) in pjbzOption"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  评价项目：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="pjxmval">
                    <el-option
                      v-for="(item, index) in pjxmOption"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  取值方式：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="qzfsval">
                    <el-option
                      v-for="(item, index) in qzfsOption"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--水系参数-->
          <div style="width: 100%;padding-left:20px;">

           <!-- <el-checkbox-group v-model="pjbzval" @change="">
              <el-checkbox v-for="item in curWaterSysOption" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
            </el-checkbox-group>-->

            <el-radio-group  v-model="cursysval">
              <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
                <el-radio :label="product.value"   >{{product.label}}</el-radio>
              </el-col>
            </el-radio-group>

          </div>
          <!--1级-->

          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  一级分区：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="primaryPartition">
                    <el-option
                      v-for="(item, index) in primaryPartitionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--2级-->
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  二级分区：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="secondaryPartition">
                    <el-option
                      v-for="(item, index) in secondaryPartitionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--3级-->
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  三级分区：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="tertiaryPartition">
                    <el-option
                      v-for="(item, index) in tertiaryPartitionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--4级-->
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  四级分区：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="fourstagePartition">
                    <el-option
                      v-for="(item, index) in fourstagePartitionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--测站级别-->
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  测站级别：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="fivestagePartition">
                    <el-option
                      v-for="(item, index) in fivestagePartitionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--测站名称-->
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  测站名称：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="fivestagePartition">
                    <el-option
                      v-for="(item, index) in fivestagePartitionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--自定义-->
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  自定义：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="fivestagePartition">
                    <el-option
                      v-for="(item, index) in fivestagePartitionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="margin-left:20px;">
            <!--时间段选择-->
            <div >

              <el-radio-group  v-model="selectTimeType">
                <el-col :span="12" v-for="product in timequantumOption"   :key="product.value">
                  <el-radio :label="product.value"   >{{product.label}}</el-radio>
                </el-col>
              </el-radio-group>

            </div>

          </div>

          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  评价步长：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <div>
                  <el-select v-model="pjbcVal">
                    <el-option
                      v-for="(item, index) in pjbcOption"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="singleli_title" >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  时间选择：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <el-date-picker
                  v-model="startTime"
                  format="yyyy-MM"
                  type="month"
                  align="right"
                  size="mini"
                  placeholder="选择日期时间">
                </el-date-picker>
              </el-col>
            </el-row>
          </div>

<!--时间序列-->

          <div class="singleli_title" v-if="selectTimeType=='ordertime'">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  截至时间：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <el-date-picker
                  v-model="endTime"
                  format="yyyy-MM"
                  type="month"
                  align="right"
                  size="mini"
                  placeholder="选择日期时间">
                </el-date-picker>
              </el-col>
            </el-row>
          </div>




          <div  style="padding-left: 80px;margin-top:15px;">
            <el-button @click="drawPoint">确定</el-button>
            <el-button>取消</el-button>
          </div>

        </div>

      </el-aside>

    </el-container>




  </div>
</template>
<script>


  export default {
    components:{

    },
    data() {
      return {
        primaryPartition: "",
        primaryPartitionList: [],
        secondaryPartition: "",
        secondaryPartitionList: [],
        tertiaryPartition: "",
        tertiaryPartitionList: [],
        fourstagePartition: "",
        fourstagePartitionList: [],
        fivestagePartition: "",
        fivestagePartitionList: [],
        firstRadio:'',//1
        secondRadio:'',//2
        thirdRadio:'',//3
        fourthRadio:'',//4
        curMidCom:'first',//跳转组件
        curMidTab:'first',//tab mid
        /*评价标准*/
        pjbzval:'all',
        pjbzOption:[{
          label:"全部",
          value:'all',
        }],
        /*评价项目*/
        pjxmval:'khd',
        pjxmOption:[{
          label:"矿化度",
          value:'khd',
        },{
          label:"总硬度",
          value:'zyd',
        },{
          label:"水化学类型",
          value:'shxlx',
        },{
          label:"地表天然水",
          value:'dbtrs',
        }],
        /*取值方式*/
        qzfsval:'average',
        qzfsOption:[{
          label:"平均值",
          value:'average',
        }],
        /*当前水系*/
        cursysval:'water1',
        /*水系参数*/
        curWaterSysOption:[{label:'流域水系',value:'water1'},{label:'水资源分区',value:'water2'},{label:'行政区划',value:'water3'}],
        /*时间选择*/
        selectTimeType:"singletime",
        /*时间段选择*/
        timequantumOption:[{
          value:'singletime',
          label:'按单时间段评价',
        },{
          value:'ordertime',
          label:'按单时序列评价',
        }],
        /*评价步长*/
        pjbcVal:'',//评价步长
        pjbcOption:[{value:'month',label:'月份'}],
        /*初始时间*/
        startTime:'',
        /*截至时间*/
        endTime:'',
        curli:'4',

        subjectProducts:[
          {name:'1',title:'污染物浓度分布专题图'},
          {name:'2',title:'污染物评价类别分布专题图'},
          {name:'3',title:'污染物评价类别时间变化趋势专题地图'},
          {name:'4',title:'测站现状评价专题图'},
          {name:'5',title:'水质类别色彩渲染专题图'},
          {name:'6',title:'污染物排放达标专题图'},
          {name:'7',title:'污染物排放量专题图'},
        ],
        calculateType:[
          {
            name: '监测成果',
            value: 'first',
            comp: 'first'
          },
          {
            name: '评价分析',
            value: 'second',
            comp: 'second'
          },
          {
            name: '统计类',
            value: 'third',
            comp: 'third'
          },
          {
            name: '富营养化',
            value: 'fourth',
            comp: 'fourth'
          },
        ],
        pointLayer:null,//绘制的点图层
        pointSource:null,//点图层上的点要素
        pointData:[],//当前点

      }
    },
    methods: {
      showMidTab(ele){

      },
      /*请求当前评价项目参数*/
      ajaxPointSource(param,pointLayer){//传请求参数

        var  that=this

        /*矿化度请求*/
        if(that.pjxmval=="khd") {
          let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
          /*http请求*/
          this.$http.post(khdurl, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function(res) {
            alert('矿化度')
            let data=res.body.data.pageResultList
            let points=[]
            console.log(data)
            for (let i=0;i<data.length;i++) {
              let coord = data[i]
              var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:3857");
              var point = new ol.Feature({
                geometry: new ol.geom.Point(labelCoords)
              });//构点
              points.push(point)
            }

          //实例化一个矢量图层Vector作为绘制层
          var source = new ol.source.Vector({
            features: points
          });

            // if(pointLayer){//如果有图层
            //   source = pointLayer.getSource()
            //   source.clear();
            //   pointLayer.setSource(source)
            //
            // }else{//没有图层创建新图层
                  //矢量图层
              that.pointLayer=new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source:source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#62ff3c'
                    })
                  })
                })
              });

              map.addLayer(that.pointLayer);//添加上站点的图层
            

            // }


          }).catch(function(res){
          })

        }

        /*水化学类型*/
        if(that.pjxmval=="shxlx") {
          let chemistryurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listshx"
          /*http请求*/
          this.$http.post(chemistryurl, JSON.stringify( param), {
            emulateJSON: true,
          }).then(function (res) {
            alert('水化学类型')

            let data=res.body.data.pageResultList
            console.log(data)

            let points=[]

            for (let i=0;i<data.length;i++) {
              let coord = data[i]

              var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:3857");
              var point = new ol.Feature({
                geometry: new ol.geom.Point(labelCoords)
              });//构点
              points.push(point)
            }

            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });

            // if(pointLayer){//如果有图层
            //   pointLayer.setSource(source)
            //
            // }else{//没有图层创建新图层
              //矢量图层
              that.pointLayer=new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source:source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#ffcf43'
                    })
                  })
                })
              });

              map.addLayer(that.pointLayer);//添加上站点的图层


            // }







          }).catch(function (res) {

            // alert("请求失败")
          })
        }
        /*总硬度*/
        if(that.pjxmval=="zyd") {
          let zydurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listthrd"
          /*http请求*/
          this.$http.post(zydurl, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function (res) {
            alert('总硬度')

            let data=res.body.data.pageResultList
            console.log(data)

            let points=[]

            for (let i=0;i<data.length;i++) {
              let coord = data[i]

              var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:3857");
              var point = new ol.Feature({
                geometry: new ol.geom.Point(labelCoords)
              });//构点
              points.push(point)
            }

            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });

            // if(pointLayer){//如果有图层
            //   pointLayer.setSource(source)
            //
            // }else{//没有图层创建新图层
              //矢量图层
              that.pointLayer=new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source:source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#ff0833'
                    })
                  })
                })
              });

              map.addLayer(that.pointLayer);//添加上站点的图层


            // }




          }).catch(function (res) {
            console.log(res)

          })
        }
        /*地表天然水*/
        if(that.pjxmval=="dbtrs") {

          let dbtrsurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listTrlzs"
          /*http请求*/
          this.$http.post(dbtrsurl, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function (res) {

            alert('地表天然水')
            let data=res.body.data.pageResultList
            console.log(data)

            let points=[]

            for (let i=0;i<data.length;i++) {
              let coord = data[i]
              console.log(coord.lgtd)
              console.log(coord.lttd)
              var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:3857");
              var point = new ol.Feature({
                geometry: new ol.geom.Point(labelCoords)
              });//构点
              points.push(point)
            }

            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });

            // if(pointLayer){//如果有图层
            //   pointLayer.setSource(source)
            //
            // }else{//没有图层创建新图层
              //矢量图层
              that.pointLayer=new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source:source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#4b97ff'
                    })
                  })
                })
              });

              map.addLayer(that.pointLayer);//添加上站点的图层


            // }











          }).catch(function (res) {
          })
        }
      },

      /*绘制点要素   创建source*/
      PlotPointSource(data){

        let points=[]
        for (let i=0;i<data.length;i++) {
          let coord = data[i]
          console.log(coord.lgtd)
          console.log(coord.lttd)
          var point = new ol.Feature({
            geometry: new ol.geom.Point([coord.lgtd, coord.lttd])
          });//构点
          points.push(point)

          //实例化一个矢量图层Vector作为绘制层
          var source = new ol.source.Vector({
            features: points
          });
          //矢量图层
          let positionLayer = new ol.layer.Vector({
            zIndex: 10,
            projection: 'EPSG:4326',
            source: source,
            style: new ol.style.Style({
              fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.1)'
              }),
              stroke: new ol.style.Stroke({
                color: 'red',
                width: 10
              }),
              image: new ol.style.Circle({
                radius: 10,
                fill: new ol.style.Fill({
                  color: '#ffcf43'
                })
              })
            })
          });

          return   source
          // positionLayer.setSource(source);
          // map.addLayer(positionLayer);//添加上站点的图层

        }


      },


      drawPoint(){//绘制点要素图层
        /*1:获取参数*/
        /*请求经纬度坐标点*/
        var param={
          "pageNum":"0",      // --当前页
          "pageSize":"10",     //--一页显示数量
          "qzfs":"avg",        //--取值方式: min max avg  （分别为最小值、最大值、平均值）
          "tjsj":"201412-201501-201502-201503-201504-201505-201506-201507-201508-201509-201510-201511-201512-201601-201602-201603-201604-201605-201606-201607-201608-201609-201610-201611-201612"
        }

        /*2：a:判断是否有图层，有图层，清空source  b:没有图层，创建一个新的图层*/

        if(this.pointLayer) {//有图层，清空所有几何要素
          let lastsource =  this.pointLayer.getSource()
          lastsource.clear();
          /*请求数据重新绘制*/
          this.ajaxPointSource(param,this.pointLayer)


        }else{
          console.log("获取请求数据  并创建一个图层")
          this.ajaxPointSource(param)
        }


        /*  if(this.pointLayer){//有图层，清空所有几何要素
             let lastsource =  this.pointLayer.getSource()
                 lastsource.clear();
             let source=this.PlotPointSource(pointData)//当前数据绘制的图层
             this.pointLayer.setSource(source)
          }else{//没有图层，创建一个新的图层，添加要素

            let source=this.PlotPointSource(pointData)//当前数据绘制的图层

            //矢量图层
              this.pointLayer=new ol.layer.Vector({
              zIndex: 10,
              projection: 'EPSG:4326',
              source:source,
              style: new ol.style.Style({
                fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 255, 0.1)'
                }),
                stroke: new ol.style.Stroke({
                  color: 'red',
                  width: 10
                }),
                image: new ol.style.Circle({
                  radius: 10,
                  fill: new ol.style.Fill({
                    color: '#ffcf43'
                  })
                })
              })
            });

            map.addLayer( this.pointLayer);//添加上站点的图层

          }*/
       /* /!*矿化度请求*!/
        let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
        /!*http请求*!/
        this.$http.post(khdurl, JSON.stringify(param), {
          emulateJSON: true,
        }).then(function(res) {
          let data=res.body.data.pageResultList
          let points=[]
          for (let i=0;i<data.length;i++) {
            let coord = data[i]
            console.log(coord.lgtd)
            console.log(coord.lttd)
            var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:3857");
            var point = new ol.Feature({
              geometry: new ol.geom.Point(labelCoords)
            });//构点
            points.push(point)
          }
            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });
            //矢量图层
            let positionLayer = new ol.layer.Vector({
              zIndex: 10,
              projection: 'EPSG:4326',
              source: source,
              style: new ol.style.Style({
                fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 255, 0.1)'
                }),
                stroke: new ol.style.Stroke({
                  color: 'red',
                  width: 10
                }),
                image: new ol.style.Circle({
                  radius: 10,
                  fill: new ol.style.Fill({
                    color: '#ffcf43'
                  })
                })
              })
            });

            console.log(map)
            // positionLayer.setSource(source);
            map.addLayer(positionLayer);//添加上站点的图层

          }
        }).catch(function(res){})*/

      },


     /* drawPoint(){//绘制点要素图层
        /!*请求经纬度坐标点*!/
        var param={
          "pageNum":"0",      // --当前页
          "pageSize":"10",     //--一页显示数量
          "qzfs":"avg",        //--取值方式: min max avg  （分别为最小值、最大值、平均值）
          "tjsj":"201507-201508"
        }
        let pointData=this.ajaxPointData(param)//请求回来的数据

        console.log(pointData)
      /!*  if(this.pointLayer){//有图层，清空所有几何要素
           let lastsource =  this.pointLayer.getSource()
               lastsource.clear();
           let source=this.PlotPointSource(pointData)//当前数据绘制的图层
           this.pointLayer.setSource(source)
        }else{//没有图层，创建一个新的图层，添加要素

          let source=this.PlotPointSource(pointData)//当前数据绘制的图层

          //矢量图层
            this.pointLayer=new ol.layer.Vector({
            zIndex: 10,
            projection: 'EPSG:4326',
            source:source,
            style: new ol.style.Style({
              fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.1)'
              }),
              stroke: new ol.style.Stroke({
                color: 'red',
                width: 10
              }),
              image: new ol.style.Circle({
                radius: 10,
                fill: new ol.style.Fill({
                  color: '#ffcf43'
                })
              })
            })
          });

          map.addLayer( this.pointLayer);//添加上站点的图层

        }*!/
        /!*矿化度请求*!/
        let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
        /!*http请求*!/
        this.$http.post(khdurl, JSON.stringify(param), {
          emulateJSON: true,
        }).then(function(res) {
          let data=res.body.data.pageResultList
          let points=[]
          for (let i=0;i<data.length;i++) {
            let coord = data[i]
            console.log(coord.lgtd)
            console.log(coord.lttd)
            var labelCoords=ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:3857");
            var point = new ol.Feature({
              geometry: new ol.geom.Point(labelCoords)
            });//构点
            points.push(point)

            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });
            //矢量图层
            let positionLayer = new ol.layer.Vector({
              zIndex: 10,
              projection: 'EPSG:4326',
              source: source,
              style: new ol.style.Style({
                fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 255, 0.1)'
                }),
                stroke: new ol.style.Stroke({
                  color: 'red',
                  width: 10
                }),
                image: new ol.style.Circle({
                  radius: 10,
                  fill: new ol.style.Fill({
                    color: '#ffcf43'
                  })
                })
              })
            });

            console.log(map)
            // positionLayer.setSource(source);
            map.addLayer(positionLayer);//添加上站点的图层

          }
        }).catch(function(res){})

      },*/


      drawPolygon(){


        /*请求经纬度坐标点*/
        var param={
          "pageNum":"0",      // --当前页
          "pageSize":"10",     //--一页显示数量
          "qzfs":"avg",        //--取值方式: min max avg  （分别为最小值、最大值、平均值）
          "tjsj":"201507-201508"
        }
        /*矿化度请求*/
          let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
          /*http请求*/
          this.$http.post(khdurl, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function(res) {

            let data=res.body.data.pageResultList
            let points=[]
            for (let i=0;i<data.length;i++) {
              let coord = data[i]
              console.log(coord.lgtd)
              console.log(coord.lttd)
              var point = new ol.Feature({
                geometry: new ol.geom.Point([coord.lgtd, coord.lttd])
              });//构点
              points.push(point)

              //实例化一个矢量图层Vector作为绘制层
              var source = new ol.source.Vector({
                features: points
              });
              //矢量图层
             let positionLayer = new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source: source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#ffcf43'
                    })
                  })
                })
              });

              console.log(map)
              positionLayer.setSource(source);
              map.addLayer(positionLayer);//添加上站点的图层

            }

          }).catch(function(res){


          })




        // console.log(map)
        // this.createVectorLayer()


      },

      click(){
        /*点击地图*/
        map.on('click', function (e) {
          alert('点击地图')
          console.log(e)


        })

      },
      createVectorLayer(){
        var coordinates = [[91.1865234375,40.80322265625],[91.494140625,36.05712890625],[98.0859375,40.58349609375],[91.1865234375,40.80322265625]]
        //声明一个新的数组
        var coordinatesPolygon = new Array();
        //循环遍历将经纬度转到"EPSG:4326"投影坐标系下
        for (var i = 0; i < coordinates.length; i++) {
          var pointTransform = ol.proj.fromLonLat([coordinates[i][0], coordinates[i][1]], "EPSG:4326");
          coordinatesPolygon.push(pointTransform);
        }
        //多边形此处注意一定要是[坐标数组]
        var plygon = new ol.geom.Polygon([coordinatesPolygon])
        var source = new ol.source.Vector();

        console.log(plygon)
        console.log(source)
        //多边形要素类
        var feature = new ol.Feature({
          geometry: plygon,
        });
        source.addFeature(feature);
        //矢量图层  vectorLayer
        var vectorLayer = new ol.layer.Vector({
          source: source,
          zIndex:9999,
          style: new ol.style.Style({
            fill: new ol.style.Fill({
              color: 'rgba(200, 255, 255, 0.7)'
            }),
            stroke: new ol.style.Stroke({
              color: 'red',
              width: 2
            }),
            image: new ol.style.Circle({
              radius: 10,
              fill: new ol.style.Fill({
                color: '#ffcc33'
              })
            })
          })
        });
        console.log(vectorLayer)
        map.addLayer(vectorLayer) 
      },
    },
    computed: {
    },
    mounted(){
      console.log("水质专题中")
      console.log('获取地图全局变量')
      console.log(this.$store.state.map)



    },
    watch: {
      pjxmval() {
        if (this.pointLayer) {
          this.source = this.pointLayer.getSource()
          this.source.clear();
        }

        },




    },

      created() {




      },

  }
</script>
<style scoped="scoped">

.clear{
  clear:both;
  height: 0;
  font-size: 0;
}
#associativeOperate{
  width: 30%;
  background: rgba(21,37,63,0.86);
  /*width:800px;*/
  height:calc( 100vh - 290px);
  -webkit-box-shadow: 0 0 2px #1e88ef, 0 0 12px #1e88ef;
  box-shadow: 0 0 2px #1e88ef, 0 0 12px #1e88ef;
  /*border-left-color: #0a74db;*/
  position: absolute;
  top: 30px;
  left:0;
}
.associateRight{
  border-right:dashed 1px rgba(255,249,229,0.5);
  padding:0;
 }
.associateLeft{
  padding:0;
}

#associativeOperate .singleli_title {
  font-size: 13px;
  height: 35px;
  /* line-height: 13px; */
  border-radius: 5px;
  font-weight: lighter;
  margin-left: 3%;
  margin-top: 10px;
}

#associativeOperate .singleli_title .sysfxTit {
  color: #fff;
  letter-spacing: 1px;
  font-size: 13px;
}
.topPan{
  width: 100%;
  height: 40%;
}
.middlePan{
  width: 100%;
  height: 30%;
}
.bottomPan{
  width: 100%;
  height: 30%;
}

  >>>.el-main{
    padding:0;
  }
  >>>.el-input__inner {
    padding-left: 30px;
    color: #058cd0;
    border: 1px solid #058cd0;
    background: #031823;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
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
    background: rgba(21,37,63,0.86);
  }
  >>>.el-button:focus, .el-button:hover {
    color: #fff;
    border-color: #c6e2ff;
    background-color: rgba(21,37,63,0.86);
  }

  >>>.el-radio-group{
    width:100%;
  }
  >>>.el-radio {
    color: #fff;
  }
  >>>.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width:100%;
  }
  >>>.el-select-dropdown__item.selected{
    padding-left:20px!important;
  }

  >>>.el-radio__label {
  font-size: 14px;
  padding-left: 4px;
}
/* 滚动样式修改*/
>>> ::-webkit-scrollbar {
  background-color: transparent !important;
  height: 0 !important;
  width: 0 !important;
}

>>> ::-webkit-scrollbar-thumb {
  background-color: transparent !important;
}

/* 修改边框颜色*/
>>> ::-webkit-scrollbar-thumb {
  background-color: transparent !important;
}
>>>.el-container{
  height: 100%;
}

.sliderClass{
  cursor: pointer;
  color: #fff;
  list-style: none;
  font-size: 15px;
  line-height: 30px;
  padding: 5px 10px ;

}
.activeLi{
  /*background-color: #ffdb61 !important;*/
  color: #ffdb61 !important;
  /*border: 1px solid #d49500!important;*/
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
  background: #6184b5;
  border-radius: 5px;
  margin-left: 6px;
  margin-top: 6px;

}
  .midactiveli{
    color:yellow;
  }

  .analyze_content{
    width:98%;
    height: calc(100% - 30px);
    overflow-y: auto;
    margin:0 auto;

  }
  .analyze_title{
    padding-left:20px;
    line-height: 30px;
    color:#fff;
    background: #042c64;
    text-align: left;
    font-weight: 700;
  }
  .analyze_title span {
    font-size:14px;
  }

  .mid_tab_title{
    width: 100%;
    line-height: 30px;

  }
  .mid_tab_content{
    width:100%;
    color: #fff;
  }


</style>
