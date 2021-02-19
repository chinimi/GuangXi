<template>
    <div  id="groundWater">
      <div class="left_menu">
        <!--流域选择-->
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                流域选择：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="lyxzVal">
                  <el-option
                    v-for="(item, index) in lyxzOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--划分河段依据-->
        <div style="width: 110%;padding-left:20px;">
         <el-radio-group  v-model="cursysval">
            <el-col :span="5" v-for="product in curWaterSysOption"   :key="product.value">
              <el-radio :label="product.value">{{product.label}}</el-radio>
            </el-col>
          </el-radio-group>
        </div>


        <!--分级选择-->
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                分级选择：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="fjxzVal">
                  <el-option
                    v-for="(item, index) in fjoption"
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
                参照系列：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <el-date-picker
                v-model="startTime"
                format="yyyy"
                type="year"
                align="right"
                size="mini"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-col>
          </el-row>
        </div>

        <div class="singleli_title" >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                评价时间：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <el-date-picker
                v-model="endTime"
                format="yyyy"
                type="year"
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
                format="yyyy"
                type="year"
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
               <el-button @click="queryTableData">查看评价结果</el-button>
            </el-col>

          </el-row>
        </div>
      </div>
      <!--table表格-->
      <div class="right_menu">
        <el-row style="padding-top:30px;">
          <el-col :span="22">
            <el-table
              ref="multipleTable"
              :data="originData"

              tooltip-effect="dark"
              style="width: 100%"
              :span-method="mergeStratege"
              @selection-change="handleSelectionChange">

              <el-table-column

                label="准则层">
                <template slot-scope="scope">
              <a  style='text-decoration:underline;color:#333;cursor: pointer;'  @click="handleEdit(scope.$index, scope.row)">
                 {{ scope.row.name }}

              </a>

                </template>
              </el-table-column>
              <el-table-column

                prop="amount1"
                label="指标层"
              >

              </el-table-column>
              <el-table-column

                prop="amount2"
                 label="代码"></el-table-column>
              <el-table-column
                :selectable="checkSelectable"
                type="selection"
                width="55">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>

      </div>

<!--      <moduleDialog v-if="resultdialogVisible"></moduleDialog>-->
      <!--弹窗-->
      <el-dialog
        title="评价结果"
        :modal-append-to-body="false"
        :visible.sync="resultdialogVisible"
        :close-on-click-modal="false"
        width="60%"
        :before-close="handleClose">
        <!--tabel主体内容-->
        <div style="height:650px;width:100%; ">

          <el-row  class="dialog_single_title">各河段得分</el-row>
          <!--tab切换-->

          <ul class="programModel_title">
            <li
              v-for="(item,index) in menu"
              :key="index"
              :class="['sliderMenuClass',{active : ( isActive == item.value ? true : false )}]"
              @click="isActive = item.value;currentComp = item.comp"
            >
<!--              <i  :class="['iconfont', item.icon]"></i>-->
              <span>{{item.name}}</span>
            </li>
            <div class="clear"> </div>
          </ul>


          <!--tab  content-->

          <div  class="table_content">
            <!--組件跳轉-->
            <div v-show="currentComp=='HD'"  >
              <el-row  style="padding-top: 10px;">
                <el-col :span="24">
                  <el-table  :cell-class-name="getRowColumn" border :data="HDTableData"   max-height="200" >
                      <el-table-column
                        fixed
                        type="index"
                        label="序号"
                        width="100">
                      </el-table-column>


                      <el-table-column
                        prop="zonecode"
                        label="水功能区(水资源区)区代码">
<!--                        <template slot-scope="scope">-->

<!--                        </template>-->
                      </el-table-column>


                      <el-table-column
                        prop="hdmc"
                        label="河段名称">
<!--                        <template slot-scope="scope">-->

<!--                        </template>-->
                      </el-table-column>


                      <el-table-column
                        prop="start"
                        label="起点">
<!--                        <template slot-scope="scope">-->

<!--                        </template>-->
                      </el-table-column>

                    <el-table-column
                      prop="end"
                      label="终点">
<!--                      <template slot-scope="scope">-->

<!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="szhl"
                      label="所在河流">
<!--                      <template slot-scope="scope">-->

<!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="length"
                      label="长度">
<!--                      <template slot-scope="scope">-->

<!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="bygc"
                      label="流量过程变异过程FD">
<!--                      <template slot-scope="scope">-->

<!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="llmz"
                      label="生态流量满足程度EF">
<!--                      <template slot-scope="scope">-->

<!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="jkllzb"
                      label="健康流量指标FD">
<!--                      <template slot-scope="scope">-->

<!--                      </template>-->
                    </el-table-column>


                  </el-table>
                </el-col>
              </el-row>
            </div>
            <div v-show="currentComp=='PF'"  >
              <el-row  style="padding-top: 10px;">
                <el-col :span="24">
                  <el-table  :cell-class-name="getRowColumn" border :data="PFTableData"   max-height="200" >
                    <el-table-column
                      fixed
                      type="index"
                      label="序号"
                      width="100">
                    </el-table-column>


                    <el-table-column
                      prop="zonecode"
                      label="水功能区(水资源区)区代码">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>


                    <el-table-column
                      prop="hdmc"
                      label="河段名称">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>


                    <el-table-column
                      prop="start"
                      label="起点">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="end"
                      label="终点">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="szhl"
                      label="所在河流">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="length"
                      label="长度">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="bygc"
                      label="河岸带状况(RS)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="llmz"
                      label="流连通阻隔状况(RC)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>



                  </el-table>
                </el-col>
              </el-row>
            </div>
            <div v-show="currentComp=='WQ'"  >
              <el-row  style="padding-top: 10px;">
                <el-col :span="24">
                  <el-table  :cell-class-name="getRowColumn" border :data="PFTableData"   max-height="200" >
                    <el-table-column
                      fixed
                      type="index"
                      label="序号"
                      width="100">
                    </el-table-column>


                    <el-table-column
                      prop="zonecode"
                      label="水功能区(水资源区)区代码">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>


                    <el-table-column
                      prop="hdmc"
                      label="河段名称">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>


                    <el-table-column
                      prop="start"
                      label="起点">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="end"
                      label="终点">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="szhl"
                      label="所在河流">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="length"
                      label="长度">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="bygc"
                      label="溶解氧状况(Do)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="llmz"
                      label="耗氧有机物(OCP)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="jkllzb"
                      label="重金属污染状况">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="jkllzb"
                      label="苯类有机物(BCР)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>


                  </el-table>
                </el-col>
              </el-row>
            </div>
            <div v-show="currentComp=='AL'"   >
              <el-row  style="padding-top: 10px;">
                <el-col :span="24">
                  <el-table  :cell-class-name="getRowColumn" border :data="PFTableData"   max-height="200" >
                    <el-table-column
                      fixed
                      type="index"
                      label="序号"
                      width="100">
                    </el-table-column>


                    <el-table-column
                      prop="zonecode"
                      label="水功能区(水资源区)区代码">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>


                    <el-table-column
                      prop="hdmc"
                      label="河段名称">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>


                    <el-table-column
                      prop="start"
                      label="起点">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="end"
                      label="终点">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="szhl"
                      label="所在河流">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="length"
                      label="长度">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="bygc"
                      label="大型无脊椎动物整性指数(PHP)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="llmz"
                      label="鱼类损失指数(FОЕ)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="jkllzb"
                      label="附生硅藻指数(ED)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>


                  </el-table>
                </el-col>
              </el-row>
            </div>
            <div v-show="currentComp=='SS'"   >
              <el-row  style="padding-top: 10px;">
                <el-col :span="24">
                  <el-table  :cell-class-name="getRowColumn" border :data="PFTableData"   max-height="200" >
                    <el-table-column
                      fixed
                      type="index"
                      label="序号"
                      width="100">
                    </el-table-column>


                    <el-table-column
                      prop="zonecode"
                      label="水功能区(水资源区)区代码">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>


                    <el-table-column
                      prop="hdmc"
                      label="河段名称">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>


                    <el-table-column
                      prop="start"
                      label="起点">
                      <!--                        <template slot-scope="scope">-->

                      <!--                        </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="end"
                      label="终点">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="szhl"
                      label="所在河流">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="length"
                      label="长度">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="bygc"
                      label="水功能区达标指标(WFZ)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="llmz"
                      label="水资源开发利用指标(WRU)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="jkllzb"
                      label="防洪指标(FLD)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>

                    <el-table-column
                      prop="jkllzb"
                      label="公众满意度指标(PP)">
                      <!--                      <template slot-scope="scope">-->

                      <!--                      </template>-->
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
            </div>
          </div>



          <!--////////////////////////////-->
          <el-row class="dialog_single_title">生态完整性评估</el-row>
          <el-table :data="stwzxData" :span-method="resolveSpanMethod" max-height="200"    border  >
             
                <el-table-column prop="name" label="河段名称"></el-table-column>
                <el-table-column prop="hdcd" label="河段长度"></el-table-column>
                <el-table-column  prop="szyff" label="水文水资源赋分HD"></el-table-column>
                <el-table-column prop="dnpjjl"  label="多年平均径流Q"></el-table-column>
                <el-table-column prop="wljg"  label="物理结构PHr"></el-table-column>
                <el-table-column prop="szyzk"  label="水资状况指标赋分war"></el-table-column>
                <el-table-column prop="sswpg"  label="水生生物评估赋分AL"></el-table-column>
                <el-table-column prop="pghdst"  label="评估河段生态完整性评估分值RElir"></el-table-column>
                <el-table-column prop="lystwz"  label="流域生态完整性评估分值REle"></el-table-column>

          </el-table>



          <el-row class="dialog_single_title">流域生态完整性评估分值REIr</el-row>
          <el-table :data="lystwazxData"  max-height="100"    border  >
             
                  <el-table-column prop="name" label="社会服务功能准则层分SSr"></el-table-column>
                  <el-table-column prop="hdcd" label="河段长度"></el-table-column>
                  <el-table-column  prop="szyff"  style="background: #0b93d5" label="综合健康评估分值RHIr">

<!--            <template slot="title">-->
<!--              <span style="background: red"></span>-->
<!--            </template>-->

          </el-table-column>


                </el-table>


        </div>



       <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="resultdialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="resultdialogVisible = false">确 定</el-button>
        </span>-->
      </el-dialog>


	</div>
</template>

<script>
  import moduleDialog from "../../components/qualityclassfy/moduleDialog"

  import moment from "moment";

  export default {
      data() {
          return {
            resultdialogVisible:false,//弹窗显示隐藏控制
            selectCheckbox:[],//选中的checkbox参数，路由传参
            /*分级选择*/
            fjxzVal:'',
            fjoption:[{value:'first',label:'一级'},{value:'second',label:'二级'},{value:'third',label:'三级'},{value:'fourth',label:'四级'}],
            // fjoption:[],//分级选择
            /*流域选择*/
            lyxzVal:'gjly',
            lyxzOption:[{value:'gjly',label:'桂江流域'},{value:'hhly',label:'黄河流域'}],
            /*评价标准*/
            evaluatiStandarVal:'SL395-2007',
            evaluationOptopn:[{
              value:'SL395-2007',
              label:'SL395-2007',
            }],
            /*评价项目*/
            evalProVal:'SL395-2007',
            evalProOptopn:[{
              value:'SL395-2007',
              label:'SL395-2007',
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

            /*评价标准*/
            pjbzval:'hbjlpg',
            pjbzOption:[{
              label:"湖泊健康评估指标",
              value:'hbjkpg',
            }],
            /*评价项目*/
            pjxmval:'stjk',
            pjxmOption:[{
              label:"水体健康",
              value:'stjk',
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
            cursysval:'watersource',
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
            // pjbcOption:[{value:'xun',label:'旬'},{value:'month',label:'月'},{value:'ji',label:'季'},{value:'xq',label:'汛期'},{value:'fxq',label:'非汛期'},{value:'halfyear',label:'半年'},{value:'year',label:'年'}],
            pjbcOption:[{value:'year',label:'年'}],
            /*初始时间*/
            startTime:'2015',
            /*截至时间*/
            endTime:'2015',
            multipleSelection: [],//多选参数集合
            originData: [{
              id: 'llgcbycd',
              name: '水文水资源(HD)',
              amount1: '流量过程变异程度',
              amount2: 'FD',
              amount3: 10,
              PID:'HDriver',
              state:false
            }, {
              id: 'stllmzcd',
              name: '水文水资源(HD)',
              amount1: '生态流量满足程度',
              amount2: 'EF',
              amount3: 12,
              PID:'HDriver',
              state:false

            }, {
              id: 'jkll',
              name: '水文水资源(HD)',
              amount1: '健康流量',
              amount2: 'HEF',
              amount3: 9,
              PID:'HDriver',
              state:true

            }, {
              id: 'hadzk',
              name: '物理结构(PF)',
              amount1: '河岸带状况',
              amount2: 'RS',
              amount3: 17,
              PID:'PFriver',
              state:false

            }, {
              id: 'hllttgzk',
              name: '物理结构(PF)',
              amount1: '河流连通陶隔状况',
              amount2: 'RC',
              amount3: 15,
              PID:'PFriver',
              state:false

            }, {
              id: 'rjyzk',
              name: '水质(WQ)',
              amount1: '溶解氧状况',
              amount2: 'DO',
              amount3: 9,
              PID:'WQriver',
              state:false

            }, {
              id: 'hyyjwrzk',
              name: '水质(WQ)',
              amount1: '耗氧有机污染状况',
              amount2: 'OCP',
              amount3: 17,
              PID:'WQriver',
              state:false

            }, {
              id: 'zjswrzk',
              name: '水质(WQ)',
              amount1: '重金属污染状况',
              amount2: 'HMP',
              amount3: 9,
              PID:'WQriver',
              state:true

            },{
              id: 'bxw',
              name: '水质(WQ)',
              amount1: '苯系物',
              amount2: ' ',
              amount3: 9,
              PID:'WQriver',
              state:true

            }, {
              id: 'dxwjzdwwzxzs',
              name: '生物(AL)',
              amount1: '大型无脊椎动物生物完整性指数',
              amount2: 'BMIBI',
              amount3: 9,
              PID:'ALriver',
              state:false

            },  {
              id: 'ylsszs',
              name: '生物(AL)',
              amount1: '鱼类损失指数',
              amount2: 'FOE',
              amount3: 9,
              PID:'ALriver',
              state:false

            }, {
              id: 'fsgz',
              name: '生物(AL)',
              amount1: '附生硅藻',
              amount2: '',
              amount3: 9,
              PID:'ALriver',
              state:true

            }, {
              id: 'sgnqdbzs',
              name: '社会服务功能(SS)',
              amount1: '水功能区达标指标',
              amount2: 'WFZ',
              amount3: 9,
              PID:'SSriver',
              state:false

            }, {
              id: 'szykflyzb',
              name: '社会服务功能(SS)',
              amount1: '水资源开发利用指标',
              amount2: 'WRU',
              amount3: 9,
              PID:'SSriver',
              state:false

            }, {
              id: 'fhzb',
              name: '社会服务功能(SS)',
              amount1: '防洪指标',
              amount2: 'FLD',
              amount3: 9,
              PID:'SSriver',
              state:false

            }, {
              id: 'gzmydzb',
              name: '社会服务功能(SS)',
              amount1: '公众满意度指标',
              amount2: 'PP',
              amount3: 9,
              PID:'SSriver',
              state:false

            },
            ],

            /*tab切换标签*/
            currentComp: 'HD',
            isActive: 'HD',
            menu: [
              {
                icon:"icon-home",
                name: '水文水资源指标HD',
                value: 'HD',
                comp: 'HD'
              },
              {
                icon:"icon-home",
                name: '物理结构指标PF',
                value: 'PF',
                comp: 'PF'
              },
              {
                icon:"icon-fuhao-tuceng",
                name: '水质状况指标WQ',
                value: 'WQ',
                comp: 'WQ'
              },
              {
                icon:"icon-home",
                name: '水生生物评价AL',
                value: 'AL',
                comp: 'AL'
              },
              {
                icon:"icon-home",
                name: '社会服务功能评估SS',
                value: 'SS',
                comp: 'SS'
              }
            ],
            /*HD table*/
            HDTableData:[
              {
                "zonecode":111,
                "hdmc":111,
                "start":111,
                "end":111,
                'szhl':111,
                'length':111,
                'bygc':111,
                'llmz':111,
                'jkllzb':111,

              },{},{},{},{},{}


            ],

            /*PF table*/
            PFTableData:[],
            /*WQ table*/
            WQTableData:[],
            /*AL table*/
            ALTableData:[],
            /*SS table*/
            SSTableData:[],

            stwzxData:[
              {
                "name":'name',
                "hdcd":111,
                "szyff":111,
                "dnpjjl":111,
                'wljg':111,
                'szyzk':111,
                'sswpg':111,
                'pghdst':111,
                'lystwz':111,
              },{
                "name":'name',
                "hdcd":111,
                "szyff":111,
                "dnpjjl":111,
                'wljg':111,
                'szyzk':111,
                'sswpg':111,
                'pghdst':111,
                'lystwz':111,
              },{
                "name":'name',
                "hdcd":111,
                "szyff":111,
                "dnpjjl":111,
                'wljg':111,
                'szyzk':111,
                'sswpg':111,
                'pghdst':111,
                'lystwz':111,
              },
            ],

            lystwazxData:[
              {
                "name":'name',
                "hdcd":111,
                "szyff":111,
                "dnpjjl":111,
                'wljg':111,
                'szyzk':111,
                'sswpg':111,
                'pghdst':111,
                'lystwz':111,
              }
            ],

          }
      },
    components: {
      moduleDialog
    },
      created() {

      },
      computed: {

      },
      methods: {
        resolveSpanMethod({ row, column, rowIndex, columnIndex }){
          // console.log(row)//要素属性
          // console.log(column)//没用
          // console.log(rowIndex)//第几行
          // console.log(columnIndex)//第几列




          if (columnIndex === 8 ) {
            // const _row = this.spanArr[rowIndex];
            const _row = 6;

            const _col = _row > 0 ? 1 : 0;
            // console.log(`rowspan:${_row} colspan:${_col}`)
            return { // [0,0] 表示这一行不显示， [2,1]表示行的合并数
              rowspan: _row,
              colspan: _col
            }
          }

        },
        backAgo(){
          this.$router.push({name:'riverHealthy',params:{}});
        },
        //选中单元格，跳转路由并且传参数
        handleEdit(index, row){
          console.log(index, row);
          console.log(row.name)
          if(row.PID=='HDriver'){
            this.$router.push({name:'HDriver',params:{selectCheck:this.selectCheckbox}});
          }
          if(row.PID=='PFriver'){
            this.$router.push({name:'PFriver',params:{selectCheck:this.selectCheckbox}});
          }
          if(row.PID=='WQriver'){
            this.$router.push({name:'WQriver',params:{selectCheck:this.selectCheckbox}});
          }
          if(row.PID=='ALriver'){
            this.$router.push({name:'ALriver',params:{selectCheck:this.selectCheckbox}});
          }
          if(row.PID=='SSriver'){
            this.$router.push({name:'SSriver',params:{selectCheck:this.selectCheckbox}});
          }
        },
        checkSelectable(row,index){
          let flag = true;
          for (let i = 0; i < this.originData.length; i++) {
            if(row.state  !==true ){
              // console.log("不可选")
              flag=false
            }
          }
          return flag
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
          this.selectCheckbox=val

        },
        handleClick(ele){//选中要素编辑
          console.log(ele)//选中要编辑的要素

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
        queryTableData(){//查看评价结果

          this.resultdialogVisible=true
        },
        handleClose(){//点击显示弹窗界面

          this.resultdialogVisible=false


        },
        getRowColumn({row, column, rowIndex, columnIndex}) {
          row.index = rowIndex;
          column.index = columnIndex;
        },
      },
      watch:{
        cursysval(newValue){
          console.log("切换分级类别")
          console.log(newValue)

          if(newValue=='longriver'){//河长制参数

           this.fjoption= [{value:'first',label:'省'},{value:'second',label:'市'},{value:'third',label:'县'},{value:'fourth',label:'镇'},{value:'fifth',label:'村'}]
          }
          if(newValue=='river'){//流域
            this.fjoption= [{value:'first',label:'一级'},{value:'second',label:'二级'},{value:'third',label:'三级'},{value:'fourth',label:'四级'},{value:'fifth',label:'五级'},{value:'sixth',label:'六级'}]
          }
          if(newValue=='watersource'){//水资源
            this.fjoption= [{value:'first',label:'一级'},{value:'second',label:'二级'},{value:'third',label:'三级'},{value:'fourth',label:'四级'}]
          }

          if(newValue=='distriction'){//行政区
            this.fjoption= [{value:'first',label:'省'},{value:'second',label:'市'},{value:'third',label:'县'},{value:'fourth',label:'镇'},{value:'fifth',label:'村'}]
          }
        },
        pjxmval(newValue){
          this.tableData=[]
        },
        originData: {
          // 数据处理函数，可以在此处设置从哪一行开始合并
          // 此函数只处理了行合并情况，可根据需求自行设置列处理
          handler (newData) {
            if (newData.length) {
              // 标记首行开始合并
              let mergeStartRow = newData[0]
              mergeStartRow.isStartMerge = true // 标记开始合并的行
              mergeStartRow.rowspan = 1 // 标记需要合并行数
              mergeStartRow.startIndex = 0 // 用于计算合并行数
              // 需要计算最后一次的合并行数，故需要循环到length次
              for (let i = 1; i <= newData.length; i++) {
                // row中name字段不相等，则开启下一个合并处理；及最后一次合并
                if ((newData[i] && mergeStartRow.name !== newData[i].name) || i === newData.length) {
                  mergeStartRow.endIndex = i // 用于计算合并行数
                  mergeStartRow.rowspan = mergeStartRow.endIndex - mergeStartRow.startIndex // 计算合并行数
                  mergeStartRow = newData[i] // 标记新的合并
                  if (mergeStartRow) {
                    mergeStartRow.isStartMerge = true
                    mergeStartRow.rowspan = 1
                    mergeStartRow.startIndex = i
                  }
                }
              }
            }
          },
          immediate: true
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
    border: 1px solid #058cd0;
    /*background: #031823;*/
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    font-size: 14px;
    height: 30px ;

  }
  >>>.el-pagination__total{
    /*color:#ffffff !important;*/
  }
  >>>.el-pagination__jump{
    /*color:#ffffff !important;*/
  }
  >>>.el-pagination .el-select .el-input .el-input__inner{
    /*color: #ffff;*/

  }

  >>>.el-button{
    padding: 5px 15px !important;
  }
  >>>.el-button:active {
    color: #fff;
    border-color: #3a8ee6;
    outline: 0;
    /*background: rgba(21,37,63,0.86);*/
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

  >>>.el-container{
    height: 100%;
  }



  /*table表格样式*/
  .el-table__body-wrapper::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #034866;
  }
  .el-table--border td {
    border-right: 1px solid transparent !important;
  }
  .el-table--border th {
    border-right: 1px solid #034866 !important;
  }
  .el-table th.gutter{
    /*
    * 解决element-ui 表格篡位的问题 👇
    */
    display: table-cell!important;
  }
  .el-table__fixed-right::before, .el-table__fixed::before {
    height: 0px;
  }
  .el-table thead {
    font-family: "MicrosoftYaHei";
    font-size:14px;
    /* line-height: 10; */
    color: #333
  }
  .el-table {
    font-size: 14px;
    color: #333;
    font-family: MicrosoftYaHei;
  }

  .el-table__body-wrapper::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #034866;
  }
  .el-table--border::after, .el-table--group::after, .el-table::before {
    background-color: transparent !important;
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #011a26;
  }
  .el-table th, .el-table tr {
    background-color: #003346;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color : #011a26
  }
  .el-table--border::after, .el-table--group::after, .el-table::before {
    background-color: #011a26;
  }
  .el-table, .el-table__expanded-cell {
    background-color: transparent;
    /*border: 1px solid #0c5276;*/
  }
  .el-table thead th{
    background-color: rgba(0,0,0,.01);
  }
  .el-date-table td.current:not(.disabled) span {
    background-color: #0089c0;
  }
  .el-date-table td.today span {
    color: #0085ba;
  }

  .divcss5-x5{ padding-bottom:5px; border-bottom:1px solid #0085ba}
  .divcss5-x10{ padding-bottom:10px; border-bottom:1px solid #0085ba}
  /*table表格样式*/


  /*tab弹窗样式*/
  .clear{
    clear: both;
    font-size:0;
    line-height:0;
    height: 0;
  }
  .sliderMenuClass{
    cursor: pointer;
    color: #333;
    list-style: none;
    font-size: 15px;
    text-align: center;
    width: 175px;
    margin-right: 10px;
    float: left;
    line-height: 32px;
    padding: 5px 0;
  }
  .active{
    color: #1677ff!important;
    border-bottom:1px solid #1677ff;

  }
.table_content{
  width: 100%;
  height: 30%;
  /*border-bottom:1px solid #1677ff;*/
}

>>>.el-table--scrollable-x .el-table__body-wrapper {
  overflow: scroll !important;
  height: 29rem !important;
}
  >>>.el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    border: solid 1px #2784ff;
    border-radius: 50%;
    padding: 2px;
    background: #2784ff;
  }

  >>>.el-dialog__header {
    padding: 21px 0 0 24px;
  }

  .dialog_single_title{
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    background: #1825651a;
    padding: 10px;
  }
</style>
