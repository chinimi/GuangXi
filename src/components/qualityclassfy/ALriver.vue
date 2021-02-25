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
        <div  v-for="(item,index) in menulist" :key="item.id">
          <!--一级菜单（没有任何子级菜单）-->
          <el-menu-item :index="item.path" v-if="!item.children">
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
            <div v-for="(i,index) in item.children" :key="item.id">
              <!-- 判断二级菜单（没有三级菜单）-->
              <el-menu-item :index="i.path" v-if="!i.children">
                <!--<i :class=iconsObj[i.id]></i>-->
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




    </div>
    <!--table表格-->
    <div class="right_menu">
      <el-row style="color:#fff;padding-top:10px;">
        <el-col :span="20" ><p style="padding-left:30px;">水生生物评估(AL)</p></el-col>
        <el-col :span="2"> <el-button @click="SaveTable">保存</el-button></el-col>
        <el-col :span="2"><el-button @click="backAgo">返回</el-button></el-col>
      </el-row>
      <el-row  style="padding:0px 0 0 30px;" >
        <el-col span="20">
          <el-table    border :data="PHP_tableData" height="240px" style="background-color: transparent;">
            <el-table-column  align="center" label="大型无脊椎动物完整性指数(PHP)">
              <el-table-column
                prop="PHP_ZB"
                label="指标">
              </el-table-column>
              <el-table-column
                prop="DJ"
                label="等级">
                <template slot-scope="scope">
               <el-select v-model="scope.row.DJ">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
              </el-table-column>
              <el-table-column
                prop="DJ"
                label="生物状态">
                 <template slot-scope="scope">
               <el-select v-model="scope.row.DJ">
                <el-option v-for="item in option_zt" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column  align="center" label="鱼类损失指数(FOE)">
              <el-table-column
                prop="FOE_ZB"
                label="指标">
              </el-table-column>
              <el-table-column
                prop="SZ"
                label="数值">
                 <template slot-scope="scope">
                <el-input   v-model="scope.row.SZ" @blur="inputBlur"></el-input>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table>

        </el-col>
      </el-row>
      <el-row   v-if="fsgzTable"  style="padding:20px  0 30px  30px;">
        <el-col span="20">
          <el-table    border :data="ED_tableData" height="300px" style="background-color: transparent;">
            <el-table-column  align="center" label="附生硅藻指数(ED)使用IPS指数表示">

              <el-table-column
                prop="WZMC"
                label="物种名称">
              </el-table-column>
              <el-table-column
                prop="Aj"
                label="物种的相对丰富度Aj(0.1%)">
                  <template slot-scope="scope">
                <el-input   v-model="scope.row.Aj" @blur="inputBlur"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="Lj"
                label="敏感度系数lj">
                  <template slot-scope="scope">
                <el-input   v-model="scope.row.Lj" @blur="inputBlur"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="Vj"
                label="指示值Vj">
                  <template slot-scope="scope">
                <el-input   v-model="scope.row.Vj" @blur="inputBlur"></el-input>
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
   import{PHP_fufen,
        FOE_fufen,
        Alr_fufen,
        } from '../qualityclassfy/ALriverMath'
  export default {
    data() {
      return {
            option:[
                {value:'0',label:'很好'},
                 {value:'1',label:'好'},
                 {value:'2',label:'中等'},
                 {value:'3',label:'较差'},
                 {value:'4',label:'很差'},
               ],
            option_zt:[
                 {value:'0',label:'非常健康'},
                 {value:'1',label:'较为健康'},
                 {value:'2',label:'轻度受损'},
                 {value:'3',label:'中度受损'},
                 {value:'4',label:'重度受损'},
               ],
               ED_tableData:[
                 {
                   WZMC:'1',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
                 {
                   WZMC:'2',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
                  {
                   WZMC:'3',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
                  {
                   WZMC:'4',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
                  {
                   WZMC:'5',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
                  {
                   WZMC:'6',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
                  {
                   WZMC:'7',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
                  {
                   WZMC:'8',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
                  {
                   WZMC:'9',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
                  {
                   WZMC:'10',
                   Aj: '10',
                   Lj:'2',
                   Vj:'1'
                 },
               ],
            PHP_tableData:[{
                PHP_ZB:'B-IBI',  //丰水期
                DJ:'0',
                // SWZT:'0',
                FOE_ZB:'评估河段调查获得的鱼类种类数量(FO)',
                SZ:'1600'
              },
              {
                PHP_ZB:'',  //丰水期
                DJ:'',
                // SWZT:'',
                FOE_ZB:'1980s以前评估河段的鱼类种类数量(FE)',
                SZ:'1900'
              }
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
          amount1: '大型无脊椎动物指数',
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
        curWaterSysOption:[{label:'流域水系',value:'river'},{label:'水资源分区',value:'watersource'},{label:'行政区划',value:'distriction'}],
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
        fsgzTable:false,//浮生硅藻table
      }
    },
    created() {
    },
    mounted() {
      var checkParam=this.$route.params
      var currentPath=this.$route.path
      var currentRouter=currentPath.substr(1,currentPath.length-1)
      console.log(checkParam)
      let selectCheck=checkParam.selectCheck
      for( var i=0;i<selectCheck.length;i++){
        console.log(selectCheck[i])
        if(selectCheck[i].id=="fsgz"){
          this.fsgzTable=true
        }
      }
    },
    computed: {
    },
    methods: {
      inputBlur() {
            this.tabRowIndex = null;
            this.tabColumnIndex = "";
          },
      SaveTable(){

        PHP = PHP_fufen(this.PHP_tableData[0].DJ)
        FOE = FOE_fufen(this.PHP_tableData[0].SZ,this.PHP_tableData[1].SZ);

        var AjList = [];
        var LjList = [];
        var VjList = [];

        this.ED_tableData.forEach(function(item,index){
                AjList.push(item.Aj);
                LjList.push(item.Lj);
                VjList.push(item.Vj);
          })


      },
      backAgo(){
        this.$router.push({name:'riverHealthy',params:{}});
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
      mergeStratege ({ row, column, rowIndex, columnIndex }) {
        // 第一层判断控制从哪一列，或多少列合并，
        if (columnIndex === 0) { // 此处表示第一列合并
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
