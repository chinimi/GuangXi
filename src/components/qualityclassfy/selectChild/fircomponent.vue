<template>
    <div  id="groundWater">
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


        <!--流域水系-->
        <!--流域-->
        <div class="singleli_title"  v-if="cursysval=='river'">
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
        <div class="singleli_title"  v-if="cursysval=='river'" >
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
        <div class="singleli_title"  v-if="cursysval=='river'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                河流：
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
        <!-- <div class="singleli_title"  v-if="cursysval=='river'" >
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
        <!-- <div class="singleli_title"  v-if="cursysval=='river'" >
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
        <!-- <div class="singleli_title"  v-if="cursysval=='river'"  >
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
        <!--五级河流-->
        <!-- <div class="singleli_title"  v-if="cursysval=='river'" >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                五级河流：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="customdefine">
                  <el-option
                    v-for="(item, index) in customdefineList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div> -->
        <!--六级河流-->
        <!-- <div class="singleli_title"  v-if="cursysval=='river'" >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                六级河流：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="customdefine">
                  <el-option
                    v-for="(item, index) in customdefineList"
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
        <!--水资源分区-->
        <!--1级-->
        <div class="singleli_title" v-if="cursysval=='watersource'">
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
        <div class="singleli_title"  v-if="cursysval=='watersource'">
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
        <div class="singleli_title" v-if="cursysval=='watersource'">
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
        <div class="singleli_title" v-if="cursysval=='watersource'">
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
        <!-- <div class="singleli_title" v-if="cursysval=='watersource'">
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
        </div> -->
        <!--测站名称-->
        <!-- <div class="singleli_title" v-if="cursysval=='watersource'">
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
        </div> -->
        <!--自定义-->
        <!-- <div class="singleli_title" v-if="cursysval=='watersource'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                自定义：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="customdefine">
                  <el-option
                    v-for="(item, index) in customdefineList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div> -->
        <!--水资源分区 over-->


        <!--行政区-->
        <!--省-->
        <div class="singleli_title"    v-if="cursysval=='distriction'">
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
        <div class="singleli_title"  v-if="cursysval=='distriction'">
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
        <div class="singleli_title"  v-if="cursysval=='distriction'">
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
        <div class="singleli_title"  v-if="cursysval=='distriction'">
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
        <div class="singleli_title"  v-if="cursysval=='distriction'">
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
         <!--矿化度-->
        <el-table v-if="pjxmval=='khd'"  border :data="tableData" height="calc( 100vh - 300px )" style="background-color: transparent;">
            <el-table-column
              label="序号"
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              prop="stcd"
              label="测站编码">
            </el-table-column>
            <el-table-column
              prop="stnm"
              label="测站名称">
            </el-table-column>
            <el-table-column
              prop="mndgMax"
              label="矿化度指标">
            </el-table-column>
            <el-table-column
              prop="mndgType"
              label="级别">
            </el-table-column>

            <el-table-column
              prop="mndgName"
              label="类型">
            </el-table-column>

            <el-table-column
              label="备注">
              <template slot-scope="scope">
                <!--  {{scope.row.time}}-->
                备注
              </template>
            </el-table-column>

          </el-table>

        <!--总硬度-->
        <el-table v-if="pjxmval=='zyd'"  border :data="tableData" height="calc( 100vh - 300px )" style="background-color: transparent;">
          <el-table-column
            label="序号"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="stcd"
            label="河流编码">
          </el-table-column>
          <el-table-column
            prop="stnm"
            label="河段名称">
          </el-table-column>
          <el-table-column
            prop="stnm"
            label="测站名称">
          </el-table-column>
          <el-table-column
            prop="thrd"
            label="总硬度指标">
          </el-table-column>

          <el-table-column
            prop="thrdType"
            label="级别">
          </el-table-column>



          <el-table-column
            label="备注">
            <template slot-scope="scope">
              <!--  {{scope.row.time}}-->
              备注
            </template>
          </el-table-column>

        </el-table>

        <!--水化学类型-->
        <el-table v-if="pjxmval=='shxlx'"  border :data="tableData" height="calc( 100vh - 300px )" style="background-color: transparent;">

        <el-table-column
            label="序号"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="stcd"
            label="河流编码">
          </el-table-column>
          <el-table-column
            prop="stnm"
            label="河段名称">
          </el-table-column>
          <el-table-column
            prop="ca"
            label="Ca2+">
          </el-table-column>
          <el-table-column
            prop="mg"
            label="Mg2+">
          </el-table-column>
          <el-table-column
            prop="na"
            label="Na+">
          </el-table-column>
          <el-table-column
            label="HCO3-">
            <template slot-scope="scope">
              {{scope.row.hco3}}
            </template>
          </el-table-column>

          <el-table-column
            label="SO42-">
            <template slot-scope="scope">
                {{scope.row.so4}}

            </template>
          </el-table-column>
          <el-table-column
            prop="cl"
            label="Cl-">
          </el-table-column>

          <el-table-column
            label="备注">
            <template slot-scope="scope">
              <!--  {{scope.row.time}}-->
              备注
            </template>
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
          }
      },
      created() {

      },
      computed: {

      },
      methods: {
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
   background: red!important;
   color:#fff!important;

  }

</style>
