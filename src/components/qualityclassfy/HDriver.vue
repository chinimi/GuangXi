<template>
    <div  id="groundWater">
      <div class="left_menu">

        <p style="padding-left:10px;font-size:20px; ">河段选择</p>
        <el-menu
          :router="false"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          :default-openeds="openeds"
         >
          <div  v-for="(item,index) in menulist" :key="index">
            <!--一级菜单（没有任何子级菜单）-->
            <el-menu-item  :index="item.path"  v-if="!item.children">
              <!--                  <i class="el-icon-menu"></i>-->
              <i :class=iconsObj[item.id]></i>
              {{item.authName}}</el-menu-item>
            <!-- 一级菜单（有子级菜单）-->
            <el-submenu :index="item.path" v-else>
              <template slot="title">
                <!-- <i class="el-icon-menu"></i>-->
                <i :class=iconsObj[item.id]></i>
                {{item.authName}}
              </template>
              <!-- 遍历二级菜单容器 -->
              <div v-for="(i,index) in item.children" :key="index">
                <!-- 判断二级菜单（没有三级菜单）-->
                <el-menu-item  :index="item.path"   v-if="!i.children">
                  <!--<i :class=iconsObj[i.id]></i>-->
                  <i class="el-icon-menu"></i>
                  {{i.authName}}
                </el-menu-item>
                <!-- 判断二级菜单（有三级菜单）-->
<!--                <el-submenu   v-if="i.children">-->
<!--                  <template slot="title">{{i.authName}}</template>-->
<!--                  <el-menu-item :index="j.path" v-for="(j,index) in i.children" :key="index">{{j.authName}}       </el-menu-item>-->
<!--                </el-submenu>-->
              </div>

            </el-submenu>

          </div>
        </el-menu>
      </div>
      <!--table表格-->
      <div class="right_menu">
        <el-row style="color:#fff;padding-top:20px;">
          <el-col :span="20" ><p style="padding-left:30px;">水文水资源(HD)</p></el-col>
          <el-col :span="2"> <el-button @click="Savetable">保存</el-button></el-col>
          <el-col :span="2"><el-button @click="backAgo">返回</el-button></el-col>
        </el-row>
        <el-row style="padding-top:20px;">
          <el-col :span="12">
             <el-table  :span-method="objectSpanMethod" :cell-class-name="getRowColumn"  @cell-click="handleCellClick"  border :data="FD_table" height="calc( 100vh - 600px )" style="background-color: transparent;">
               <el-table-column  align="center" label="流量过程变异程度(FD)">
            <el-table-column
              prop="Month"
              label="月份"
              width="100">
            </el-table-column>
            <el-table-column
              prop="PG_Mon_SC_qm"
              label="评估年实测月径流量(qm)">
              <template slot-scope="scope">
                <el-input   v-model="scope.row.PG_Mon_SC_qm" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="PG_Mon_TR_Qm"
              label="评估年天然月径流量(Qm)">
              <template slot-scope="scope">
                <el-input   v-model="scope.row.PG_Mon_TR_Qm" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="PG_Mon_TR_Ou"
              label="评估天然月径流量年均值(Ou)">
              <template slot-scope="scope">  
                <el-input    v-model="PG_Ou_AVE" @blur="inputBlur"></el-input>
               </template>
            </el-table-column>
           </el-table-column>
          </el-table>
          </el-col>
          <el-col :span="12" style="padding-left:20px;">
            <el-table
              height="calc( 100vh - 600px )"
              ref="multipleTable"
              :data="originData"
              :selectable="checkSelectable"
              tooltip-effect="dark"
              style="background-color: transparent;"
              :span-method="mergeStratege"
              @selection-change="handleSelectionChange">
              <el-table-column
                prop="name"
                label="准则层">
              </el-table-column>
              <el-table-column prop="amount1"   label="指标层"></el-table-column>
              <el-table-column prop="amount2"   label="代码"></el-table-column>
            </el-table>
          </el-col>

        </el-row>


 <!-- WetseasonP25:'2',  //丰水期
                WetseasonP75:'4',
                DryseasonP25:'1',
                DryseasonP75:'2',
                MaxP25:'0.5',
                MaxP75: '1',
                MinP25:'0.25',
                MinP75: '0.5',
                Wetseason:'1.5',//评估年内丰水期水量	
                Dryseason:'0.3',//评估年内枯水期水量
                Max:'0.5',      //评估年内最大月水量	
                Min:'0.1',      //评估年内最小月水量	
                HFV:'0',        //丰水期水量指标（HFV） 	
                LFV:'0.6',      //枯水期水量指标（LFV）	
                HFM:'0',        //最大月水量指标（HFM）	
                LFM:'0.4',     	//最小月水量指标（LFM） -->

        <el-row   v-if="showhealthyTable">
          <el-table    border :data="healthyTable" height="200px" style="background-color: transparent;">
            <el-table-column  align="center" label="健康流量指标(IFD)">
              <el-table-column
                prop="WetseasonP25"
                label="参照系丰水期水量P25%">
              </el-table-column>
              <el-table-column
                prop="WetseasonP75"
                label="参照系丰水期2量P75%">
              </el-table-column>
              <el-table-column
                prop="DryseasonP25"
                label="参照系枯水期水量P25%">
              </el-table-column>
               <el-table-column
                prop="DryseasonP75"
                label="参照系枯水期水量P75%">
              </el-table-column>
              <el-table-column
                prop="MaxP25"
                label="参照系最大月水量指标P25%">
              </el-table-column>
              <el-table-column
                prop="MaxP75"
                label="参照系最大月水量指标P75%">
              </el-table-column>
              <el-table-column
                prop="MinP25"
                label="参照系量小月水量指标P25%">
              </el-table-column>
              <el-table-column
                prop="MinP75"
                label="参照系最小月水量指标P75%">
              </el-table-column>
              <el-table-column
                prop="Wetseason"
                label="评估年内丰水期水量">
              </el-table-column>
              <el-table-column
                prop="Dryseason"
                label="评估年内枯水期水量">
              </el-table-column>
              <el-table-column
                prop="Max"
                label="评估年内最大月水量">
              </el-table-column>
              <el-table-column
                prop="Min"
                label="评估年内最小月水量">
              </el-table-column>

            </el-table-column>
          </el-table>
        </el-row>

        <el-row v-if="showhealthyTable">
          <el-table    border :data="tableData" height="200px" style="background-color: transparent;">
            <el-table-column  align="center" label="四个表格">
              <el-table-column
                prop="stcd"
                label="参照系列月平均流量">
              </el-table-column>
              <el-table-column
                prop="stnm"
                label="参照系月流量P1%">
              </el-table-column>
              <el-table-column
                prop="mndgMax"
                label="参照系月流量P25%">
              </el-table-column>
              <el-table-column
                prop="mndgType"
                label="参照系月流量P75%">
              </el-table-column>
              <el-table-column
                prop="mndgType"
                label="评估年月.流量">
              </el-table-column>
            </el-table-column>
          </el-table>
        </el-row>

      </div>

	</div>
</template>

<script>


  /*var menulist =[
    /!*一级菜单*!/
    {
      /!*切换对应组件*!/
      "authName": "河段选择",
      id:'zxpjfxmodelpart',
      path:'zxpjfxmodelpart',
      children: [
        { "authName": "桂江上游兴安源头段" ,id:'syxaytd',path:'syxaytd'},
        { "authName": "桂江上游桂林城区段",id:'syglcqd',path:'syglcqd'},
        { "authName": "桂江中游桂林景观段",id:'zygljgd',path:'zygljgd'},
        { "authName": "桂江中游阳朔开发利用段",id:'zyyskflyd',path:'zyyskflyd' },
        { "authName": "桂江中游昭平保留段",id:'zyzpbld',path:'zyzpbld' },
        { "authName": "挂江下游昭平保留段",id:'xyzpbld',path:'xyzpbld' },
        { "authName": "桂江下游苍梧保留段",id:'xycwbld',path:'xycwbld' },
        { "authName": "恭城河开发利用段",id:'gchkflyd',path:'gchkflyd' },
        { "authName": "荔浦河开发利用段",id:'lphkflyd',path:'lphkflyd'},

      ]
    }
  ]*/

  var menulist =[
    /*一级菜单*/


        { "authName": "桂江上游兴安源头段" ,id:'syxaytd',path:'syxaytd'},
        { "authName": "桂江上游桂林城区段",id:'syglcqd',path:'syglcqd'},
        { "authName": "桂江中游桂林景观段",id:'zygljgd',path:'zygljgd'},
        { "authName": "桂江中游阳朔开发利用段",id:'zyyskflyd',path:'zyyskflyd' },
        { "authName": "桂江中游昭平保留段",id:'zyzpbld',path:'zyzpbld' },
        { "authName": "挂江下游昭平保留段",id:'xyzpbld',path:'xyzpbld' },
        { "authName": "桂江下游苍梧保留段",id:'xycwbld',path:'xycwbld' },
        { "authName": "恭城河开发利用段",id:'gchkflyd',path:'gchkflyd' },
        { "authName": "荔浦河开发利用段",id:'lphkflyd',path:'lphkflyd'},


  ]
  import  getWater from '../../api/index'
  import moment from "moment";
  import{FD_Qu_AVE,FD_Fufeng,FD_Value} from '../qualityclassfy/HDriverMath'

  export default {
      data() {
          return {
            // 来自后台传入也可以手动输入
            PG_Ou_AVE:'',
            PG_FD_AVE:'',
            PG_FD_Fufeng:'',
            FD_table:
              [{
            Month: '1月',
            PG_Mon_SC_qm: '15',
            PG_Mon_TR_Qm: '14',
           
          }, {
            Month: '2月',
            PG_Mon_SC_qm: '16',
            PG_Mon_TR_Qm: '15',
           
          }, {
            Month: '3月',
            PG_Mon_SC_qm: '17',
            PG_Mon_TR_Qm: '15',
           
          }, {
            Month: '4月',
            PG_Mon_SC_qm: '18',
            PG_Mon_TR_Qm: '19',
           
          },
          {
            Month: '5月',
            PG_Mon_SC_qm: '19',
            PG_Mon_TR_Qm: '20',
           
          },
          {
            Month: '6月',
            PG_Mon_SC_qm: '20',
            PG_Mon_TR_Qm: '19',
            
          },
          {
            Month: '7月',
            PG_Mon_SC_qm: '21',
            PG_Mon_TR_Qm: '15',
           
          },
          {
            Month: '8月',
            PG_Mon_SC_qm: '22',
            PG_Mon_TR_Qm: '28',
            
          },
          {
            Month: '9月',
            PG_Mon_SC_qm: '23',
            PG_Mon_TR_Qm: '22',
            
          },
          {
            Month: '10月',
            PG_Mon_SC_qm: '24',
            PG_Mon_TR_Qm: '30',
           
          },
          {
            Month: '11月',
            PG_Mon_SC_qm: '25',
            PG_Mon_TR_Qm: '24',
           
          },
          {
            Month: '12月',
            PG_Mon_SC_qm: '26',
            PG_Mon_TR_Qm: '25',
            
          }],
            showhealthyTable:false,//健康流量表是否显示

            healthyTable:[{
                WetseasonP25:'2',  //丰水期
                WetseasonP75:'4',
                DryseasonP25:'1',
                DryseasonP75:'2',
                MaxP25:'0.5',
                MaxP75: '1',
                MinP25:'0.25',
                MinP75: '0.5',
                Wetseason:'1.5',//评估年内丰水期水量	
                Dryseason:'0.3',//评估年内枯水期水量
                Max:'0.5',      //评估年内最大月水量	
                Min:'0.1',      //评估年内最小月水量	
                HFV:'0',        //丰水期水量指标（HFV） 	
                LFV:'0.6',      //枯水期水量指标（LFV）	
                HFM:'0',        //最大月水量指标（HFM）	
                LFM:'0.4',     	//最小月水量指标（LFM）
              },
            ],
            originData: [{
              id: 'llgcbycd',
              name: '水文水资源(HD)',
              amount1: '流量过程变异程度',
              amount2: 'FD',
              amount3: 10,
              PID:'HD',
            }, {
              id: 'stllmzcd',
              name: '水文水资源(HD)',
              amount1: '生态流量满足程度',
              amount2: 'EF',
              amount3: 12,
              PID:'HD',

            }, {
              id: 'jkll',
              name: '水文水资源(HD)',
              amount1: '健康流量',
              amount2: 'HEF',
              amount3: 9,
              PID:'HD',

            }, {
              id: 'hadzk',
              name: '物理结构(PF)',
              amount1: '河岸带状况',
              amount2: 'RS',
              amount3: 17,
              PID:'PF',
            }, {
              id: 'hllttgzk',
              name: '物理结构(PF)',
              amount1: '河流连通陶隔状况',
              amount2: 'RC',
              amount3: 15,
              PID:'PF',
            }, {
              id: 'rjyzk',
              name: '水质(WQ)',
              amount1: '溶解氧状况',
              amount2: 'DO',
              amount3: 9,
              PID:'WQ',
            }, {
              id: 'hyyjwrzk',
              name: '水质(WQ)',
              amount1: '耗氧有机污染状况',
              amount2: 'OCP',
              amount3: 17,
              PID:'WQ',
            }, {
              id: 'zjswrzk',
              name: '水质(WQ)',
              amount1: '重金属污染状况',
              amount2: 'HMP',
              amount3: 9,
              PID:'WQ',
            },{
              id: 'bxw',
              name: '水质(WQ)',
              amount1: '苯系物',
              amount2: '1.9',
              amount3: 9,
              PID:'WQ',
            }, {
              id: 'dxwjzdwwzxzs',
              name: '生物(AL)',
              amount1: '大型无脊椎动物生物完整性指数',
              amount2: 'BMIBI',
              amount3: 9,
              PID:'AL',
            },  {
              id: 'ylsszs',
              name: '生物(AL)',
              amount1: '鱼类损失指数',
              amount2: 'FOE',
              amount3: 9,
              PID:'AL',
            }, {
              id: 'fsgz',
              name: '生物(AL)',
              amount1: '附生硅藻',
              amount2: '',
              amount3: 9,
              PID:'AL',
            }, {
              id: 'sgnqdbzs',
              name: '社会服务功能(SS)',
              amount1: '水功能区达标指标',
              amount2: 'WFZ',
              amount3: 9,
              PID:'SS',
            }, {
              id: 'szykflyzb',
              name: '社会服务功能(SS)',
              amount1: '水资源开发利用指标',
              amount2: 'WRU',
              amount3: 9,
              PID:'SS',
            }, {
              id: 'fhzb',
              name: '社会服务功能(SS)',
              amount1: '防洪指标',
              amount2: 'FLD',
              amount3: 9,
              PID:'SS',
            }, {
              id: 'gzmydzb',
              name: '社会服务功能(SS)',
              amount1: '公众满意度指标',
              amount2: 'PP',
              amount3: 9,
              PID:'SS',
            },
            ],
            openeds:['0','1','2','3','4'],
            // openeds: ['syxaytd','syglcqd','zygljgd','zyyskflyd','zyzpbld','xyzpbld','xycwbld','gchkflyd','lphkflyd'],
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
            tableData: [],
            cities:['流域水系', '水资源分区', '行政区划'],
            cities2:['按单时间段评价', '按时间序列评价'],

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
              label:"平均值",
              value:'avg',
            },{
              label:"最小值",
              value:'min',
            },{
              label:"最大值",
              value:'max',
            }],
            /*当前水系*/
            cursysval:'river',

            /*水系参数*/
            curWaterSysOption:[{label:'河长制',value:'longriver'},{label:'流域',value:'river'},{label:'水资源',value:'watersource'},{label:'行政区',value:'distriction'}],

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
            pjbcVal:'year',//评价步长
            pjbcOption:[{value:'xun',label:'旬'},{value:'month',label:'月'},{value:'ji',label:'季'},{value:'xq',label:'汛期'},{value:'fxq',label:'非汛期'},{value:'halfyear',label:'半年'},{value:'year',label:'年'}],

            /*初始时间*/
            startTime:'2015-07',
            /*截至时间*/
            endTime:'2015-08',


            menulist: menulist,
            iconsObj:{
              // "generalwaterevaluate":"iconfont icon-shuidi3",
              // "zxpjfxmodelpart":"iconfont icon-kongqi",
              // "ssthjfx":"iconfont icon-shuidi3",

            },
            /*权重配比*/
            weightData:[

            ],
          }
      },
      created() {

      },
      mounted() {

        this.weightData=[
          {
            'project':'水质评价',
            'poolweight':"",
            'centerweight':"",

          },
          {
            'project':'生境评价',
            'poolweight':"",
            'centerweight':"",

          },
          {
            'project':'生物评价',
            'poolweight':"",
            'centerweight':"",

          },




        ]
        console.log("获取当前跳转传过来的参数")

        var checkParam=this.$route.params
        var currentPath=this.$route.path
        var currentRouter=currentPath.substr(1,currentPath.length-1)
        console.log(checkParam)
        let selectCheck=checkParam.selectCheck
        for( var i=0;i<selectCheck.length;i++){
          console.log(selectCheck[i])
          if(selectCheck[i].PID==currentRouter){
            this.showhealthyTable=true
          }
        }


      },
      computed: {

      },
      methods: {
        //鼠标失去焦点事件
        inputBlur() {
          this.tabRowIndex = null;
          this.tabColumnIndex = "";
        },

        //点击单元格得到横纵坐标
        handleCellClick(row, column, event, cell) {
          this.tabRowIndex = row.index;
          this.tabColumnIndex = column.index;
          //this.tableValue.push(row);
        },
        //数据中没有横纵坐标需要加上进行下一步判断
        getRowColumn({row, column, rowIndex, columnIndex}) {
         // debugger
          row.index = rowIndex;
          column.index = columnIndex;
        },
        backAgo(){
          this.$router.push({name:'riverHealthy',params:{}});
        },

        // 计算
        Savetable(){ 
          var arrList_SC_qm =[];
           var arrList_TR_Qm =[];

          this.FD_table.forEach(function(item,index){
            arrList_SC_qm.push(item.PG_Mon_SC_qm);
            arrList_TR_Qm.push(item.PG_Mon_TR_Qm);
          })
         
          /// 第一个表格   
          this.PG_Ou_AVE= FD_Qu_AVE(arrList_TR_Qm);
          var ss = FD_Value(arrList_SC_qm,arrList_TR_Qm,this.PG_Ou_AVE);  
          var FD_FUFENG = FD_Fufeng(ss)  // 第一个表格的最终结果
          ///////


        },
        checkSelectable(row,index){
          let flag = true;
          for (let i = 0; i < this.originData.length; i++) {
            if( row.name == '王小虎'){
              flag = false
            }
          }
          return flag
          // let isChecked = true;
          // if (row.dealerName === null) { // 判断里面是否存在某个参数
          //   isChecked = true
          // } else {
          //   isChecked = false
          // }
          // return isChecked

        },
        // 传入element-table的合并方法


        // 合并第四列所有相当数据的行  edit by smm
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 3) {
          if (rowIndex % 12 === 0) {
            return {
              rowspan: 1,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },

        mergeStratege ({ row, column, rowIndex, columnIndex }) {
          // 第一层判断控制从哪一列，或多少列合并，
          //debugger
          if (columnIndex === 3) { // 此处表示第三列合并
            // if (columnIndex < 2) { // 此处表示前两列合并
            if (row.isStartMerge) {
              return {
                rowspan: row.rowspan,// 合并多少行，由数据处理函数处理得出
                colspan: 1 // 可以控制合并多少列，可由数据处理函数处理
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          }
        },

        handleSelectionChange(val){
          console.log("获取选中的行要素数组集合")
          console.log(val)

        },
        handleSelect(key, keyPath){
          console.log("选中当前要素请求接口数据渲染表格")
          console.log(key)
          console.log(keyPath)


        },
        handleOpen(key, keyPath){

          console.log(key, keyPath)
        },
        handleClose(key, keyPath){
          console.log(key, keyPath)
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
          this.tableData=[]
          /*矿化度请求*/
        if(this.pjxmval=="khd") {
          let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
          /*http请求*/
          this.$http.post(khdurl, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function(res) {
            console.log(res)

            this.tableData=res.body.data.pageResultList
          }).catch(function(res){


          })


        }

        /*水化学类型*/
          if(this.pjxmval=="shxlx") {
            let chemistryurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listshx"
            /*http请求*/
            this.$http.post(chemistryurl, JSON.stringify( param), {
              emulateJSON: true,
            }).then(function (res) {
              console.log(res)

              this.tableData = res.body.data.pageResultList
            }).catch(function (res) {

              // alert("请求失败")
            })

          }

          /*总硬度*/
          if(this.pjxmval=="zyd") {
            let zydurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listthrd"
            /*http请求*/
            this.$http.post(zydurl, JSON.stringify(param), {
              emulateJSON: true,
            }).then(function (res) {

              console.log(res)

              this.tableData = res.body.data.pageResultList
            }).catch(function (res) {
              console.log(res)

            })

          }


          /*地表天然水*/
          if(this.pjxmval=="dbtrs") {

            let dbtrsurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listTrlzs"
            /*http请求*/
            this.$http.post(dbtrsurl, JSON.stringify(param), {
              emulateJSON: true,
            }).then(function (res) {
              console.log(res)
              this.tableData = res.body.data.pageResultList
            }).catch(function (res) {


            })

          }

        }
      },
      watch:{
        pjxmval(newValue){

         // this.tableData=[]



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



</style>
