<template>
    <div  id="groundWater">
     <!-- <div class="left_menu">
        <el-menu
          :router="false"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          background-color="rgba(21,37,63,0.86)"
          text-color="#fff"
          active-text-color="#018faf">
          <div  v-for="(item,index) in menulist" :key="index">
            &lt;!&ndash;一级菜单（没有任何子级菜单）&ndash;&gt;
            <el-menu-item :index="item.id" v-if="!item.children">
              &lt;!&ndash;                  <i class="el-icon-menu"></i>&ndash;&gt;
              <i :class=iconsObj[item.id]></i>
              {{item.authName}}</el-menu-item>
            &lt;!&ndash; 一级菜单（有子级菜单）&ndash;&gt;
            <el-submenu :index="item.path" v-else>
              <template slot="title">
                &lt;!&ndash;                    <i class="el-icon-menu"></i>&ndash;&gt;
                <i :class=iconsObj[item.id]></i>
                {{item.authName}}
              </template>
              &lt;!&ndash; 遍历二级菜单容器 &ndash;&gt;
              <div v-for="(i,index) in item.children" :key="index">
                &lt;!&ndash; 判断二级菜单（没有三级菜单）&ndash;&gt;
                <el-menu-item :index="i.path" v-if="!i.children">
                  &lt;!&ndash;<i :class=iconsObj[i.id]></i>&ndash;&gt;
                  <i class="el-icon-menu"></i>
                  {{i.authName}}
                </el-menu-item>
                &lt;!&ndash; 判断二级菜单（有三级菜单）&ndash;&gt;
                <el-submenu :index="i.path" v-if="i.children">
                  <template slot="title">{{i.authName}}</template>
                  <el-menu-item :index="j.path" v-for="(j,index) in i.children" :key="index">{{j.authName}}       </el-menu-item>
                </el-submenu>
              </div>
            </el-submenu>
          </div>
        </el-menu>
      </div>-->
      <!--table表格-->
      <div class="right_menu">
        <el-row style="color:#fff;padding-top:20px;">
          <el-col :span="20" ><p style="padding-left:30px;">水质状况指标(WQ)</p></el-col>
          <el-col :span="2"> <el-button @click="SaveTable">保存</el-button></el-col>
          <el-col :span="2"><el-button @click="backAgo">返回</el-button></el-col>
        </el-row>

        <el-table v-if="pjxmval=='khd'"  border :data="WQ_tableData"  height="calc( 100vh - 300px )" style="background-color: transparent;">
          <el-table-column
            prop="rivername"
            label="河段名称"
            width="150">
          </el-table-column>
          <!--第1列-->
          <el-table-column label="溶解氧状况(DO)">
            <el-table-column
              prop="DO1"
              label="汛期DO平均值"
              width="120">
                <template slot-scope="scope">
                <el-input   v-model="scope.row.DO1" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="DO2"
              label="非汛期DO平均值"
              width="120">
                <template slot-scope="scope">
                <el-input   v-model="scope.row.DO2" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
          <!--第2列-->
          <el-table-column label="耗氧有机物(OCP)">
            <el-table-column
              prop="CODMN"
              label="高锰酸盐指数CODMN"
              width="120">
              <template slot-scope="scope">
                <el-input   v-model="scope.row.CODMN" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="BOD"
              label="化学需拿量BOD"
              width="120">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.BOD" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="NH3_N"
              label="五日生化需氧量NH3-N"
              width="120">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.NH3_N" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>

          </el-table-column>
          <!--第3列-->

          <el-table-column v-if="zjswrwtable" label="重金属污染状况">
            <el-table-column
              prop="SHEN"
              label="砷"
              width="120">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.SHEN" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="GONG"
              label="汞"
              width="120">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.GONG" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="GE"
              label="镉"
              width="120">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.GE" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="GE6"
              label="铬(六价)"
              width="120">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.GE6" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="QIAN"
              label="铅"
              width="120">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.QIAN" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
          </el-table-column>

          <!--第4列-->
          <el-table-column v-if="blyjwtable" label="苯类有机物(BCP)">
            <el-table-column
              prop="BEN"
              label="苯"
              width="120">
              <template slot-scope="scope">
               <el-select v-model="scope.row.BEN">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="JBEN"
              label="甲苯"
              width="120">
               <template slot-scope="scope">
               <el-select v-model="scope.row.JBEN">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="EJBEN"
              label="二甲苯"
              width="120">
              <template slot-scope="scope">
               <el-select v-model="scope.row.EJBEN">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
	</div>
</template>
<script>
  var menulist =[
    /*一级菜单*/
    {
      /*切换对应组件*/
      "authName": "河段选择",
      id:'zxpjfxmodelpart',
      children: [
        { "authName": "桂江上游桂林城区段" , id:'dbszytrs',  path:'groundWater'},
        { "authName": "桂江中游桂林景观段",id:'szbhqs',path:'groundWater'},
        { "authName": "桂江中游阳朔开发利用段",id:'yysydaq',  path:'groundWater'},
        { "authName": "桂江中游昭平保留段",id:'ssthjfx', path:'groundWater' },
      ]
    }
  ]
  import  getWater from '../../api/index'
  import moment from "moment";
  import{DO_fufen,
        CODMNr_fufen,
        BODr_fufen,
        NH3_Nr_fufen,
        ARr_fufen,
        HGr_fufen,
        CDr_fufen,
        CRr_fufen,
        PBr_fufen,
        BEN_fufen,
        } from '../qualityclassfy/WQriverMath'
  export default {
      data() {
          return {
            zjswrwtable:false,//重金属污染物
            blyjwtable:false,//苯类有机物
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
            // curWaterSysOption:[{label:'流域水系',value:'river'},{label:'水资源分区',value:'watersource'},{label:'行政区划',value:'distriction'}],
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
            },{
              value:'sametime',
              label:'按同时间段评价',
            }
            ],
            /*评价步长*/
            pjbcVal:'year',//评价步长
            pjbcOption:[{value:'xun',label:'旬'},{value:'month',label:'月'},{value:'ji',label:'季'},{value:'xq',label:'汛期'},{value:'fxq',label:'非汛期'},{value:'halfyear',label:'半年'},{value:'year',label:'年'}],
            /*初始时间*/
            startTime:'2015-07',
            /*截至时间*/
            endTime:'2015-08',
         option:[
                 {value:'0',label:'达标'},
                 {value:'1',label:'不达标'},
               ],
            WQ_tableData:[{
                rivername:'桂江上游桂林城区段',  //丰水期
                DO1:'4.7',
                DO2:'6.7',
                CODMN:'7',
                BOD:'5.5',
                NH3_N:'0.8',
                SHEN:'0.08',
                GONG:'0.0008',
                GE:'0.002',
                GE6:'0.03',
                QIAN:'0.06',
                BEN:'0',
                JBEN:'0',
                EJBEN:'1',

              },
              {
                rivername:'桂江中游桂林景观段',  //
                DO1:'5.7',
                DO2:'6.2',
                CODMN:'7',
                BOD:'5.5',
                NH3_N:'0.8',
                SHEN:'0.08',
                GONG:'0.0008',
                GE:'0.002',
                GE6:'0.03',
                QIAN:'0.06',
                BEN:'0',
                JBEN:'0',
                EJBEN:'1',
              },
              {
                rivername:'丰水期桂江中游阳朔开发利用段',  //丰水期桂江中游阳朔开发利用段
                DO1:'5.8',
                DO2:'6.5',
                CODMN:'7',
                BOD:'5.5',
                NH3_N:'0.8',
                SHEN:'0.08',
                GONG:'0.0008',
                GE:'0.002',
                GE6:'0.03',
                QIAN:'0.06',
                BEN:'0',
                JBEN:'0',
                EJBEN:'1',
              },
              {
                rivername:'桂江中游昭平保留段',  //丰水期桂江中游阳朔开发利用段
                DO1:'6.8',
                DO2:'7.5',
                CODMN:'7',
                BOD:'5.5',
                NH3_N:'0.8',
                SHEN:'0.08',
                GONG:'0.0008',
                GE:'0.002',
                GE6:'0.03',
                QIAN:'0.06',
                BEN:'0',
                JBEN:'0',
                EJBEN:'1',
              },
            ],
            menulist: menulist,
            iconsObj:{
              // "generalwaterevaluate":"iconfont icon-shuidi3",
              // "zxpjfxmodelpart":"iconfont icon-kongqi",
              // "ssthjfx":"iconfont icon-shuidi3",
            },
          }
      },
      created() {
      },
    mounted() {
      console.log("获取当前跳转传过来的参数")
      var checkParam=this.$route.params
      var currentPath=this.$route.path
      var currentRouter=currentPath.substr(1,currentPath.length-1)
      console.log(checkParam)
      let selectCheck=checkParam.selectCheck
      for( var i=0;i<selectCheck.length;i++){
        console.log(selectCheck[i])
        if(selectCheck[i].amount2=='HMP'){
          this.zjswrwtable=true
        }
        if(selectCheck[i].amount2==' '){
          this.blyjwtable=true
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
          debugger
          for (var i = 0, j = this.WQ_tableData.length; i < j; i++)
          {
             DOr_ = DO_fufen(Math.min(this.WQ_tableData[i].DO1,this.WQ_tableData[i].DO2))

             OCPr_= ((CODMNr_fufen(this.WQ_tableData[i].CODMN) + BODr_fufen(this.WQ_tableData[i].BOD) + NH3_Nr_fufen(this.WQ_tableData[i].NH3_N) )/3).toFixed(2);

            var s1= ARr_fufen(this.WQ_tableData[i].SHEN);
             var s2= HGr_fufen(this.WQ_tableData[i].GONG);
              var s3= CDr_fufen(this.WQ_tableData[i].GE);
               var s4= CRr_fufen(this.WQ_tableData[i].GE6);
                var s5= PBr_fufen(this.WQ_tableData[i].QIAN);
             HMBr_= Math.min(s1,s2,s3,s4,s5),
                            

            BCPr_ = Math.min(BEN_fufen(this.WQ_tableData[i].BEN),
                                 BEN_fufen(this.WQ_tableData[i].JBEN),
                                 BEN_fufen(this.WQ_tableData[i].EJBEN))
            WQr_ = Math.min(DOr_,OCPr_,HMBr_,BCPr_)
          }
        },
        backAgo(){
          this.$router.push({name:'riverHealthy',params:{}});
        },
        handleSelect(key, keyPath){
          console.log("选中当前页面要素标签")
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
    /*background: #031823;*/
    /*background: rgba(21, 37, 63,1);*/
    position: absolute;
    top: 0;
    left: 0;
    border-right: #fff dashed 2px;
    border-left: #fff solid 1px;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
  }
  #groundWater  .right_menu{
    width: 100%;
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
  >>>.el-menu-item:focus, .el-menu-item:hover{
    background: red!important;
    color:#fff!important;
  }
</style>
