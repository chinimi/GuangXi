<template>
  <div  id="groundWater">
    <div class="left_menu">
      <div >
        <span class="cur_title">地下水水位评价</span>
      </div>
      <!--水量组成-->
 <!--     <div style="width: 100%; padding:20px;">
        <el-checkbox-group v-model="cursysval">
          <el-col :span="8" v-for="product in curWaterSysOption" :key="product.value">
            <el-checkbox :label="product.value">{{product.label}}</el-checkbox>
          </el-col>
        </el-checkbox-group>
      </div>-->
      <!-- tab切换 -->
      <div class="nav">
        <ul class="clear-fix nav_ui">
          <li :class="[companyType=='1'?'csour':'']" @click="companySwitch(1)">河长制</li>
          <li :class="[companyType=='2'?'csour':'']" @click="companySwitch(2)">流域</li>
          <li :class="[companyType=='3'?'csour':'']" @click="companySwitch(3)">水资源</li>
          <li :class="[companyType=='4'?'csour':'']" @click="companySwitch(4)">行政</li>
        </ul>
        <div class="searchMain " v-if="companyType=='1'">
          <!--河长制-->
          <!--省-->
          <div class="singleli_title"   >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  省：
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
          <!--市-->
          <div class="singleli_title"  >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  市：
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
          <!--县-->
          <div class="singleli_title"   >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  县：
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
          <!--镇-->
          <div class="singleli_title"  >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  镇：
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
          <!--村-->
          <div class="singleli_title"  >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  村：
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

        </div>
        <div class="searchMain" v-if="companyType=='2'" >
          <!--流域水系-->
          <!--流域-->
          <div class="singleli_title"   >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  流域：
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
          <!--水系-->
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  水系：
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
          <!--一级河流-->
          <div class="singleli_title"  >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  一级河流：
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
          <!--二级河流-->
          <!-- <div class="singleli_title"   >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  二级河流：
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
          </div> -->
          <!--三级河流-->
          <!-- <div class="singleli_title"    >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  三级河流：
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
          </div> -->
          <!--四级河流-->
          <!-- <div class="singleli_title"    >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  四级河流：
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
          </div> -->

          <!--流域水系  over-->
        </div>
        <div class="searchMain " v-if="companyType=='3'">
          <!--水资源分区-->
          <!--1级-->
          <div class="singleli_title"   >
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
          <div class="singleli_title"   >
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
          <div class="singleli_title"  >
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
          <div class="singleli_title"  >
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

          <!--水资源分区 over-->
        </div>
        <div class="searchMain " v-if="companyType=='4'">

          <!--行政区-->
          <!--省-->
          <div class="singleli_title"    >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  省：
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
          <!--市-->
          <div class="singleli_title"   >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  市：
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
          <!--县-->
          <div class="singleli_title"  >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  县：
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
          <!--镇-->
          <div class="singleli_title"   >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  镇：
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
          <!--村-->
          <div class="singleli_title"  >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  村：
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
          <!--行政区 over-->

        </div>
      </div>
      <!--tab切换 over-->

      <div class="singleli_title">
        <el-row>
          <el-col :span="8">
            <div class="sysfxTit">
              湖库名称：
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
      <div class="singleli_title" >
        <el-row>
          <el-col :span="20" style="text-align: center">
            <el-button @click="queryTableData">确定</el-button>
          </el-col>

        </el-row>
      </div>
    </div>

    <!--table表格-->
    <div class="right_menu">
      <!--地下水-->
      <el-row style="padding-top:20px;padding-left:30px;"  >
        <el-col :span="20">
          <el-table   border :data="tableData" height="300px" style="background-color: transparent;">
            <el-table-column  align="center" label="地下水">
              <el-table-column
                prop="stcd"
                label="站点">
                <template slot-scope="scope">
              <el-input   v-model="scope.row.stcd" @blur="inputBlur"></el-input>
              </template>
              </el-table-column>
              <el-table-column
                prop="long"
                label="经度">
                  <template slot-scope="scope">
              <el-input   v-model="scope.row.long" @blur="inputBlur"></el-input>
              </template>
              </el-table-column>
              <el-table-column
                prop="lat"
                label="纬度">
                 <template slot-scope="scope">
              <el-input   v-model="scope.row.lat" @blur="inputBlur"></el-input>
              </template>
              </el-table-column>
              <el-table-column
                prop="value"
                label="值(m)">
                  <template slot-scope="scope">
              <el-input   v-model="scope.row.value" @blur="inputBlur"></el-input>
              </template>
              </el-table-column>

            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

    </div>
  </div>
</template>
<script>
  import  getWater from '../../api/index'
  import moment from "moment";
  export default {
    data() {
      return {
        /*上游来水*/
        sylsFlag:false,
        /*区间来水*/
        midlsFlag:false,
        /*区间耗水*/
        wasteFlag:false,
        companyType: '1', //河长制、流域、水资源、行政
        /*评价标准*/
        evaluatiStandarVal:'SL395-2007',
        evaluationOptopn:[{
          value:'SL395-2007',
          value:'SL395-2007',
        }],
        /*评价项目*/
        evalProVal:'SL395-2007',
        evalProOptopn:[{
          value:'SL395-2007',
          value:'SL395-2007',
        }],
        checkedCities: [],
        checkedCities2: [],
        pageSize:10,
        currentPage:0,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        primaryPartition: "全部",
        primaryPartitionList: [],
        secondaryPartition: "全部",
        secondaryPartitionList: [],
        tertiaryPartition: "全部",
        tertiaryPartitionList: [],
        fourstagePartition: "全部",
        fourstagePartitionList: [],
        fivestagePartition: "全部",
        fivestagePartitionList: [],
        tableData: [],



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
        }
        ],
        /*取值方式*/
        qzfsval:'avg',
        qzfsOption:[{
          label:"11",
          value:'avg',
        },{
          label:"22",
          value:'min',
        },{
          label:"33",
          value:'max',
        }],
        /*当前水系*/
        cursysval:[],
        /*水量组成*/
        curWaterSysOption:[{label:'上游来水',value:'upwater'},{label:'区间来水',value:'middlewater'},{label:'区间耗水',value:'wastewater'}],
        /*时间选择*/
        selectTimeType:"ordertime",
        /*时间段选择*/
        timequantumOption:[{
          value:'ordertime',
          label:'按单时间段评价',
        }/*,{
          value:'ordertime',
          label:'按单时序列评价',

        }*/],
        /*评价步长*/
        pjbcVal:'year',//评价步长
        pjbcOption:[{value:'xun',label:'旬'},{value:'month',label:'月'},{value:'ji',label:'季'},{value:'xq',label:'汛期'},{value:'fxq',label:'非汛期'},{value:'halfyear',label:'半年'},{value:'year',label:'年'}],

        /*初始时间*/
        startTime:'2015-07',
        /*截至时间*/
        endTime:'2015-08',
        iconsObj:{
          "generalwaterevaluate":"iconfont icon-shuidi3",
          "zxpjfxmodelpart":"iconfont icon-kongqi",
          "ssthjfx":"iconfont icon-meiyuequshi",
          "dbszytrs":"iconfont icon-dian",
          "yysydaq":"iconfont icon-dian",
          "szbhqs":"iconfont icon-dian",
          "riverHealthy":"iconfont icon-dian",
          "riverQuality":"iconfont icon-dian",

        },
      }
    },
    created() {

    },
    computed: {

    },
    methods: {
            //鼠标失去焦点事件
      inputBlur() {
        this.tabRowIndex = null;
        this.tabColumnIndex = "";
      },
      // 河长制切换切换
      companySwitch(id) {
        this.companyType = id;
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        console.log(val)
        this.pageSize=val
        this.queryTableData()

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        console.log(val)
        this.currentPage=val
        this.queryTableData()
      },
      queryTableData(){

        /* if(this.selectTimeType=="singletime"){
           if(this.startTime ){
             this.$message('请选择时间参数');
             return
           }
         }else{
           if(this.startTime||this.endTime){
             this.$message('请选择时间参数');
             return
           }
         }*/

        let checkstartTime = moment(this.startTime).format('YYYYMM');
        let startyear = moment(this.startTime).format('YYYY');
        let checkendTime = moment(this.endTime).format('YYYYMM');
        let endyear = moment(this.endTime).format('YYYY');
        // console.log(checkstartTime)
        // console.log(startyear)
        // console.log(checkstartTime.substring(checkstartTime.length-2))
        let startMonth=checkstartTime.substring(checkstartTime.length-2)
        // console.log(checkendTime)
        // console.log(endyear)
        // console.log(checkendTime.substring(checkendTime.length-2))
        let endMonth=checkendTime.substring(checkendTime.length-2)

        // console.log(parseInt(endMonth)-parseInt(startMonth))

        console.log(parseInt(startMonth))


        var str=""
        var count=parseInt(endMonth)-parseInt(startMonth)

        if (count-1>0){
          for(var i=parseInt(startMonth)-1;i<count;i++)
          {
            var tmp=i+1;
            tmp=tmp<10?String('0'+tmp):(tmp)
            str=str+startyear+tmp+"-"

          }
        }else{
          str=str+checkstartTime+'-'
        }

        str=str+checkendTime
        console.log(str)

        let tjsj=null;
        if(this.selectTimeType=="singletime"){
          tjsj=checkstartTime


        }else{
          tjsj=str
        }


        /*1:获取参数*/
        /*请求经纬度坐标点*/
        var param=
          {
            "pageNum":this.currentPage,
            "pageSize":this.pageSize,
            "qzfs":this.qzfsval,// min max avg
            "tjsj":tjsj
          }
        // var param={
        //   "pageNum":"0",      // --当前页
        //   "pageSize":"10",     //--一页显示数量
        //   "qzfs":"avg",        //--取值方式: min max avg  （分别为最小值、最大值、平均值）
        //   "tjsj":"201507-201508"
        // }
        this.tableData=[{
               stcd:'站点1',
              lat:'24.3',
              long:'109.4',
             value:-5,
        },
        {
              stcd:'站点2',
              lat:'23.2',
              long:'108.9',
              value:-5.3,
        },
        {
              stcd:'站点3',
              lat:'22.6',
              long:'110.4',
              value:-6.7,
        },]

        /*矿化度请求*/
        // if(this.pjxmval=="khd") {
        //   let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
        //   /*http请求*/
        //   this.$http.post(khdurl, JSON.stringify(param), {
        //     emulateJSON: true,
        //   }).then(function(res) {
        //     console.log(res)

        //     this.tableData=res.body.data.pageResultList
        //   }).catch(function(res){


        //   })


        // }

        // /*水化学类型*/
        // if(this.pjxmval=="shxlx") {
        //   let chemistryurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listshx"
        //   /*http请求*/
        //   this.$http.post(chemistryurl, JSON.stringify( param), {
        //     emulateJSON: true,
        //   }).then(function (res) {
        //     console.log(res)

        //     this.tableData = res.body.data.pageResultList
        //   }).catch(function (res) {

        //     // alert("请求失败")
        //   })

        // }

        // /*总硬度*/
        // if(this.pjxmval=="zyd") {
        //   let zydurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listthrd"
        //   /*http请求*/
        //   this.$http.post(zydurl, JSON.stringify(param), {
        //     emulateJSON: true,
        //   }).then(function (res) {

        //     console.log(res)

        //     this.tableData = res.body.data.pageResultList
        //   }).catch(function (res) {
        //     console.log(res)

        //   })

        // }


        // /*地表天然水*/
        // if(this.pjxmval=="dbtrs") {

        //   let dbtrsurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listTrlzs"
        //   /*http请求*/
        //   this.$http.post(dbtrsurl, JSON.stringify(param), {
        //     emulateJSON: true,
        //   }).then(function (res) {
        //     console.log(res)
        //     this.tableData = res.body.data.pageResultList
        //   }).catch(function (res) {


        //   })

        // }






      }
    },
    watch:{
      /*判断哪个表格显示隐藏*/
      cursysval(newValue){
        console.log(newValue)
        // 方法一：arr.indexOf(某元素)：未找到则返回 -1。

// 实际用法：if(arr.indexOf(某元素) > -1){//则包含该元素}
        /*上游来水*/
        if(newValue.indexOf('upwater') > -1){
          this.sylsFlag=true
        }else{
          this.sylsFlag=false

        }
        /*区间来水*/
        if(newValue.indexOf('middlewater') > -1){
          this.midlsFlag=true
        }else{
          this.midlsFlag=false

        }
        /*下游来水*/
        if(newValue.indexOf('wastewater') > -1){
          this.wasteFlag=true
        }else{
          this.wasteFlag=false
        }
      },

      pjxmval(newValue){

        this.tableData=[]



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
    background: #fff;
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

    background: #fff;
    /*background: #031823;*/
    /*background: rgba(21, 37, 63,1);*/
    position: absolute;
    top: 0;
    right: 0;
    overflow-y: auto;
  }

  #groundWater .singleli_title {
    font-size: 13px;
    height: 35px;
    line-height: 50px;
    border-radius: 5px;
    font-weight: lighter;
    margin-left: 3%;

  }

  #groundWater .singleli_title .sysfxTit {
    color: #333;
    letter-spacing: 1px;
    font-size: 16px;
    /* text-align: right; */
    margin-right: 10px;
  }

  #groundWater >>>.el-pagination__total{
    color:#ffffff !important;
  }
  #groundWater >>>.el-pagination__jump{
    color:#ffffff !important;
  }
  #groundWater >>>.el-pagination .el-select .el-input .el-input__inner{
    color: #ffff;
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
  >>>.el-menu-item:focus, .el-menu-item:hover{
    background: red!important;
    color:#fff!important;

  }
  >>>.el-menu-item.is-active {
    color: #409EFF;
    border-left: 6px solid #409EFF;
  }
  >>>.el-menu-item{
    border-left: 6px solid #fff;

  }
  /* tab切换 */

  .clear-fix:after,
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    font-size: 0;
    clear: both;
    visibility: hidden;
  }

  .clear{
    clear: both;
    font-size:0;
    line-height: 0;
    height: 0;
  }

  .cur_title{
    padding:10px;border-bottom: solid 2px  #1677FF;color: #1677FF;font-weight:900;width:250px;line-height: 40px;margin: 20px;
  }
  .nav {
    margin-top: 20px;

  }
  .nav_ui li {
    width: 21%;
    float: left;
    text-align: center;
    /*border-bottom: 1px solid #1677FF;*/
    margin: 0 2%;
    padding-bottom: 5px;
    box-sizing: border-box;
  }
  .searchMain{
    position: relative;
    width: 100%;
    text-align: center;
  }
  .searchMain ul{
    text-align: center;
    padding: 10px 0;
  }
  .searchMain ul li{
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    text-align: center;
  }
  .searchMain_div{
    line-height: 35px;
    height: 35px;
    display: inline-block;
  }
  .csour{
    color: #1677FF!important;
    border-bottom: 2px solid #1677FF;
  }
  >>>.el-menu-item{
    border-left: 6px solid #fff;
    font-size:16px;
  }
  >>>.el-submenu__title{
    font-size:16px;
  }
</style>
