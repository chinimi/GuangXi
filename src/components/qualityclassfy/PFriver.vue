<template>
    <div  id="groundWater">
    <!--  <div class="left_menu">
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
        <el-row style="color:#fff;padding-top:5px;">
          <el-col :span="20" ><p style="padding-left:30px;">物理结构(PF)</p></el-col>

          <el-col :span="2"> <el-button @click="Savetable">保存</el-button></el-col>
          <el-col :span="2"><el-button @click="backAgo">返回</el-button></el-col>
        </el-row>
        <el-table v-if="pjxmval=='khd'"  border :data="PF_tableData"  height="calc( 100vh - 300px )" style="background-color: transparent;">
          <el-table-column
            prop="rivername"
            label="河段名称"
            width="150">
          </el-table-column>
          <!--第1列-->
          <el-table-column label="岸坡稳定性指数(BKS)">
            <el-table-column
              prop="SA"
              label="斜坡倾角(SA) (度)"
              width="100">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.SA" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="SC"
              label="植被覆盖度(SC) (%)"
              width="100">
              <template slot-scope="scope">
                <el-input   v-model="scope.row.SC" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="SH"
              label="岸坡高度(SH) (米)"
              width="100">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.SH" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="SM"
              label="河岸基质(SM)(类别)"
              width="150">
               <template slot-scope="scope">
              <el-select v-model="scope.row.SM">
                <el-option v-for="item in SM_option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="ST"
              label="坡脚冲刷强度(ST)"
              width="150">
                <template slot-scope="scope">
              <el-select v-model="scope.row.ST">
                <el-option v-for="item in ST_option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
          </el-table-column>
          <!--第2列-->
          <el-table-column label="河岸带植被覆盖度（RVS）">
            <el-table-column
              prop="QiaoM"
              label="植被覆盖度(乔木)"
              width="100">
               <template slot-scope="scope">
                <el-input   v-model="scope.row.QiaoM" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="GuanM"
              label="植被覆盖度(灌木)"
              width="100">
              <template slot-scope="scope">
                <el-input   v-model="scope.row.GuanM" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="CaoB"
              label="植被覆盖度(草本)"
              width="100">
              <template slot-scope="scope">
                <el-input   v-model="scope.row.CaoB" @blur="inputBlur"></el-input>
              </template>
            </el-table-column>

          </el-table-column>
          <!--第3列-->

          <el-table-column label="河岸带人工干扰程度(RD)">
            <el-table-column
              prop="HeA"
              label="河岸硬主砌护"
              width="100">
               <template slot-scope="scope">
              <el-select v-model="scope.row.HeA">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="CaiS"
              label="采砂"
              width="100">
               <template slot-scope="scope">
               <el-select v-model="scope.row.CaiS">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="JianZ"
              label="沿岸建筑物（房屋）"
              width="100">
              <template slot-scope="scope">
               <el-select v-model="scope.row.JianZ">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="GongL"
              label="公路(或铁路)"
              width="100">
                <template slot-scope="scope">
               <el-select v-model="scope.row.GongL">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="Laj"
              label="垃圾填埋场或垃圾堆放"
              width="100">
                <template slot-scope="scope">
               <el-select v-model="scope.row.Laj">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="GongY"
              label="河滨公园"
              width="100">
                  <template slot-scope="scope">
               <el-select v-model="scope.row.GongY">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="GuanD"
              label="管道"
              width="100">
              <template slot-scope="scope">
               <el-select v-model="scope.row.GuanD">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="NongY"
              label="农业耕种"
              width="100">
               <template slot-scope="scope">
               <el-select v-model="scope.row.NongY">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
            <el-table-column
              prop="XuM"
              label="畜牧养殖"
              width="100">
                <template slot-scope="scope">
               <el-select v-model="scope.row.XuM">
                <el-option v-for="item in option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
          </el-table-column>
          <!--第4列-->
          <el-table-column label="河流连通阻隔状况">
            <el-table-column
              prop="YuL"
              label="鱼类迁移阻隔特征"
              width="200">
                <template slot-scope="scope">
               <el-select v-model="scope.row.YuL">
                <el-option v-for="item in YuL_option" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
              </el-select>
                </template>
            </el-table-column>
          </el-table-column>


          </el-table>

        <!--分页-->
        <div style="padding-top:30px;">
          <!-- <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination> -->
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size=pageSize
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>



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
  import{SAr,
        SCr,
        SHr,
        SMr,
        STr,
        RVS,
        HeA_PF,
        CaiS_PF,
        JianZ_PF,
        GongL_PF,
        Laj_PF,
        GongY_PF,
        GuanD_PF,
        NongY_PF,
        XuM_PF,
        YuL_PF,

        } from '../qualityclassfy/PFriverMath'
  export default {
      data() {
          return {
               SM_option:[
                 {value:'1',label:'基岩'},
                 {value:'2',label:'岩土河岸'},
                 {value:'3',label:'粘土河岸'},
                 {value:'4',label:'非粘土河岸'},
               ],

               ST_option:[
                 {value:'1',label:'无冲刷迹象'},
                 {value:'2',label:'轻度冲刷'},
                 {value:'3',label:'中度冲刷'},
                 {value:'4',label:'重度冲刷'},
               ],
               option:[
                 {value:'0',label:'无'},
                 {value:'1',label:'有'},
               ],
              YuL_option:[
                 {value:'0',label:'无阻隔'},
                 {value:'1',label:'有渔道,且正常运行'},
                 {value:'2',label:'无渔道,对部分鱼类迁移有阻隔作用'},
                 {value:'3',label:'迁移通道完全阻隔'},
               ],
               PF_tableData:[{
                rivername:'桂江上游桂林城区段',  //丰水期
                SA:'15',
                SC:'60',
                SH:'2.2',
                SM:'2',
                ST:'2',
                QiaoM:'8',
                GuanM:'52',
                CaoB:'74',
                HeA:'1',
                CaiS:'1',
                JianZ:'1',
                GongL:'1',
                Laj:'1',
                GongY:'1',
                GuanD:'1',
                NongY:'1',
                XuM:'1',
                YuL:'1',
              },
              {
                rivername:'桂江中游桂林景观段',  //丰水期
                SA:'15',
                SC:'60',
                SH:'2.2',
                SM:'1',
                ST:'1',
                QiaoM:'8',
                GuanM:'52',
                CaoB:'74',
                HeA:'0',
                CaiS:'0',
                JianZ:'0',
                GongL:'0',
                Laj:'0',
                GongY:'0',
                GuanD:'0',
                NongY:'0',
                XuM:'0',
                YuL:'0',
              },
              {
                rivername:'桂江中游阳朔开发利用段',  //丰水期
                SA:'15',
                SC:'60',
                SH:'2.2',
                SM:'3',
                ST:'3',
                QiaoM:'8',
                GuanM:'52',
                CaoB:'74',
                HeA:'1',
                CaiS:'0',
                JianZ:'1',
                GongL:'0',
                Laj:'0',
                GongY:'1',
                GuanD:'0',
                NongY:'1',
                XuM:'0',
                YuL:'2',
              },
              {
                rivername:'桂江中游昭平保留段',  //丰水期
                SA:'15',
                SC:'60',
                SH:'2.2',
                SM:'1',
                ST:'2',
                QiaoM:'8',
                GuanM:'52',
                CaoB:'74',
                HeA:'0',
                CaiS:'1',
                JianZ:'1',
                GongL:'1',
                Laj:'0',
                GongY:'1',
                GuanD:'0',
                NongY:'1',
                XuM:'0',
                YuL:'3',
              },
              ],

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
              label:"天然劣质水",
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
            // curWaterSysOption:[{label:'流域水系',value:'river'},{label:'水资源分区',value:'watersource'},{label:'行政区划',value:'distriction'}],
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
            tableData: [],
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
      // var checkParam=this.$route.params
      // var currentPath=this.$route.path
      // var currentRouter=currentPath.substr(1,currentPath.length-1)
      // console.log(checkParam)
      // let selectCheck=checkParam.selectCheck
      // for( var i=0;i<selectCheck.length;i++){
      //   console.log(selectCheck[i])
      //   if(selectCheck[i].PID==currentRouter){
      //     this.showhealthyTable=true
      //   }
      // }
    },
      computed: {
      },
      methods: {
            // 计算
      inputBlur() {
        this.tabRowIndex = null;
        this.tabColumnIndex = "";
      },
      Savetable(){
        debugger
          for (var i = 0, j = this.PF_tableData.length; i < j; i++)
          {
            var SAr_ = SAr(this.PF_tableData[i].SA);
            var SCr_ = SCr(this.PF_tableData[i].SC);

            var SHr_=  SHr(this.PF_tableData[i].SH);

            var SMr_=  SMr(this.PF_tableData[i].SM);
            var STr_=  STr(this.PF_tableData[i].ST);
            // var BKSr = ((SAr_+SCr_+SHr_+SMr_+STr_)/5).toFixed(2);
             BKSr = ((SAr_+SCr_+SHr_+SMr_+STr_)/5).toFixed(2);
            var TCr=  RVS(this.PF_tableData[i].QiaoM);

            var SCCr=  RVS(this.PF_tableData[i].GuanM);

            var HCr=  RVS(this.PF_tableData[i].CaoB);
            // var RVSr = ((TCr+SCCr+HCr)/3).toFixed(2);
            RVSr = ((TCr+SCCr+HCr)/3).toFixed(2);
            var HeA_Fufen=  HeA_PF(this.PF_tableData[i].HeA);
            var CaiS_Fufen=  CaiS_PF(this.PF_tableData[i].CaiS);
            var JianZ_Fufen=  JianZ_PF(this.PF_tableData[i].JianZ);
            var GongL_Fufen=  GongL_PF(this.PF_tableData[i].GongL);
            var Laj_Fufen=  Laj_PF(this.PF_tableData[i].Laj);
            var GongY_Fufen=  GongY_PF(this.PF_tableData[i].GongY);
            var GuanD_Fufen=  GuanD_PF(this.PF_tableData[i].GuanD);
            var NongY_Fufen=  NongY_PF(this.PF_tableData[i].NongY);
            var XuM_Fufen=  XuM_PF(this.PF_tableData[i].XuM);
            RDr = 100+HeA_Fufen+CaiS_Fufen+JianZ_Fufen+GongL_Fufen+
                        Laj_Fufen+GongY_Fufen+GuanD_Fufen+NongY_Fufen+XuM_Fufen;
            if (RDr<0) RDr= 0;
            /*全局变量  RSr*/
            // var RSr = (0.25*BKSr+0.5*RVSr+0.25*RDr).toFixed(2);
             RSr = (0.25*BKSr+0.5*RVSr+0.25*RDr).toFixed(2);
             RCr=  YuL_PF(this.PF_tableData[i].YuL);
             // var PFr = (0.7*RSr + YuL_FuFen*0.3).toFixed(2);
           
             PFr = (0.7*RSr + RCr*0.3).toFixed(2);
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
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
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
