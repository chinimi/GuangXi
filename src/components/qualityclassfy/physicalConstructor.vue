<template>
    <div  id="groundWater">
      <div class="left_menu">

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




      </div>
      <!--table表格-->
      <div class="right_menu">
        <el-row>水文水资源</el-row>
<!--         &lt;!&ndash;矿化度&ndash;&gt;-->
<!--        <el-table v-if="pjxmval=='khd'"  border :data="tableData" height="calc( 100vh - 300px )" style="background-color: transparent;">-->
<!--            <el-table-column-->
<!--              label="序号"-->
<!--              type="index"-->
<!--              width="50">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="stcd"-->
<!--              label="测站编码">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="stnm"-->
<!--              label="测站名称">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="mndgMax"-->
<!--              label="矿化度指标">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="mndgType"-->
<!--              label="级别">-->
<!--            </el-table-column>-->

<!--            <el-table-column-->
<!--              prop="mndgName"-->
<!--              label="类型">-->
<!--            </el-table-column>-->

<!--            <el-table-column-->
<!--              label="备注">-->
<!--              <template slot-scope="scope">-->
<!--                &lt;!&ndash;  {{scope.row.time}}&ndash;&gt;-->
<!--                备注-->
<!--              </template>-->
<!--            </el-table-column>-->

<!--          </el-table>-->


<!--        &lt;!&ndash;分页&ndash;&gt;-->
<!--        <div style="padding-top:30px;">-->
<!--          &lt;!&ndash; <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination> &ndash;&gt;-->
<!--          <el-pagination-->
<!--            background-->
<!--            @size-change="handleSizeChange"-->
<!--            @current-change="handleCurrentChange"-->
<!--            :current-page="currentPage"-->
<!--            :page-sizes="[100, 200, 300, 400]"-->
<!--            :page-size=pageSize-->
<!--            layout="total, sizes, prev, pager, next, jumper"-->
<!--            :total="400"-->
<!--          >-->
<!--          </el-pagination>-->
<!--        </div>-->

        <router-view></router-view>
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
        { "authName": "桂江上游桂林城区段" ,com:'groundWater', id:'dbszytrs', path:'groundWater'},
        { "authName": "桂江中游桂林景观段",com:"groundWater" ,id:'szbhqs',path:'groundWater'},
        { "authName": "桂江中游阳朔开发利用段",com:"groundWater",id:'yysydaq',path:'groundWater' },
        { "authName": "桂江中游昭平保留段",com:"groundWater " ,id:'ssthjfx',path:'groundWater'  },
      ]
    }
  ]
  import  getWater from '../../api/index'
  import moment from "moment";
  export default {
      data() {
          return {
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
              "generalwaterevaluate":"iconfont icon-shuidi3",
              "zxpjfxmodelpart":"iconfont icon-kongqi",
              "ssthjfx":"iconfont icon-shuidi3",

            },
          }
      },
      created() {

      },
      computed: {

      },
      methods: {
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
  #groundWater  .right_menu{
    width: 80%;
    height: calc( 100vh - 80px);
    padding-top: 50px;
    background: #031823;
    /*background: rgba(21, 37, 63,1);*/
    position: absolute;
    top: 0;
    right: 0;
  }

  #groundWater .singleli_title {
    font-size: 13px;
    height: 35px;
    line-height: 50px;
    border-radius: 5px;
    font-weight: lighter;
    margin-left: 3%;
    margin-top: 12px;
  }

  #groundWater .singleli_title .sysfxTit {
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
    /* text-align: right; */
    margin-right: 10px;
  }
  #groundWater >>>.el-input__inner {
    padding-left: 23px !important;
    color: #058cd0;
    border: 1px solid #058cd0;
    background: #031823;
    /*background: rgba(21,37,63,0.86);*/
    -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    font-size: 16px !important;
    /* border-radius: 10px !important; */
    /* border: 0px !important; */
    height: 30px !important;
     /*width: 190px !important;*/
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
    width:86%;
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
   background: transparent!important;
   color:#fff!important;

  }

</style>
