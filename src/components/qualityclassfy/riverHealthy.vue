<template>
    <div  id="groundWater">
      <div class="left_menu">
       <!-- <div class="singleli_title">
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
        </div>-->


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
        <div style="width: 100%;padding-left:20px;">
         <el-radio-group  v-model="cursysval">
            <el-col :span="5" v-for="product in curWaterSysOption"   :key="product.value">
              <el-radio :label="product.value">{{product.label}}</el-radio>
            </el-col>
          </el-radio-group>
        </div>

               <!--河长制-->
        <!--省-->
        <div class="singleli_title"    v-if="cursysval=='longriver'">
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
        <div class="singleli_title"  v-if="cursysval=='longriver'">
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
        <div class="singleli_title"  v-if="cursysval=='longriver'">
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
        <div class="singleli_title"  v-if="cursysval=='longriver'">
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
        <div class="singleli_title"  v-if="cursysval=='longriver'">
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
        <!--河长制  over-->


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
        <div class="singleli_title"  v-if="cursysval=='river'" >
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
        </div>
        <!--三级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'" >
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
        </div>
        <!--四级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'"  >
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
        </div>
        <!--五级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'" >
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
        </div>
        <!--六级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'" >
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
        </div>
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
        <div class="singleli_title" v-if="cursysval=='watersource'">
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
        <div class="singleli_title" v-if="cursysval=='watersource'">
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
        <div class="singleli_title" v-if="cursysval=='watersource'">
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
        </div>
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



<!--        <div style="margin-left:20px;">-->
<!--          &lt;!&ndash;时间段选择&ndash;&gt;-->
<!--          <div >-->
<!--            <el-radio-group  v-model="selectTimeType">-->
<!--              <el-col :span="12" v-for="product in timequantumOption"   :key="product.value">-->
<!--                <el-radio :label="product.value"   >{{product.label}}</el-radio>-->
<!--              </el-col>-->
<!--            </el-radio-group>-->
<!--          </div>-->
<!--        </div>-->

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
              <span @click="handleEdit(scope.$index, scope.row)">
                 {{ scope.row.name }}

              </span>

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
              <!-- <el-table-column prop="rowspan"
                                      label="跨行"></el-table-column>-->

              <el-table-column
                :selectable="checkSelectable"
                type="selection"
                width="55">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>

      </div>
	</div>
</template>

<script>
  import moment from "moment";
  export default {
      data() {
          return {
            /*分级选择*/
            fjxzVal:'first',
            fjoption:[{value:'first',label:'一级'},{value:'second',label:'二级'},{value:'third',label:'三级'},{value:'fourth',label:'四级'}],

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
            cities:['流域水系', '水资源分区', '行政区划'],
            cities2:['按单时间段评价', '按时间序列评价'],


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
            multipleSelection: [],//多选参数集合
            originData: [{
              id: 'llgcbycd',
              name: '水文水资源(HD)',
              amount1: '流量过程变异程度',
              amount2: 'FD',
              amount3: 10,
              PID:'HD',
              state:false
            }, {
              id: 'stllmzcd',
              name: '水文水资源(HD)',
              amount1: '生态流量满足程度',
              amount2: 'EF',
              amount3: 12,
              PID:'HD',
              state:false

            }, {
              id: 'jkll',
              name: '水文水资源(HD)',
              amount1: '健康流量',
              amount2: 'HEF',
              amount3: 9,
              PID:'HD',
              state:true

            }, {
              id: 'hadzk',
              name: '物理结构(PF)',
              amount1: '河岸带状况',
              amount2: 'RS',
              amount3: 17,
              PID:'PF',
              state:false

            }, {
              id: 'hllttgzk',
              name: '物理结构(PF)',
              amount1: '河流连通陶隔状况',
              amount2: 'RC',
              amount3: 15,
              PID:'PF',
              state:false

            }, {
              id: 'rjyzk',
              name: '水质(WQ)',
              amount1: '溶解氧状况',
              amount2: 'DO',
              amount3: 9,
              PID:'WQ',
              state:false

            }, {
              id: 'hyyjwrzk',
              name: '水质(WQ)',
              amount1: '耗氧有机污染状况',
              amount2: 'OCP',
              amount3: 17,
              PID:'WQ',
              state:false

            }, {
              id: 'zjswrzk',
              name: '水质(WQ)',
              amount1: '重金属污染状况',
              amount2: 'HMP',
              amount3: 9,
              PID:'WQ',
              state:true

            },{
              id: 'bxw',
              name: '水质(WQ)',
              amount1: '苯系物',
              amount2: ' ',
              amount3: 9,
              PID:'WQ',
              state:true

            }, {
              id: 'dxwjzdwwzxzs',
              name: '生物(AL)',
              amount1: '大型无脊椎动物生物完整性指数',
              amount2: 'BMIBI',
              amount3: 9,
              PID:'AL',
              state:false

            },  {
              id: 'ylsszs',
              name: '生物(AL)',
              amount1: '鱼类损失指数',
              amount2: 'FOE',
              amount3: 9,
              PID:'AL',
              state:false

            }, {
              id: 'fsgz',
              name: '生物(AL)',
              amount1: '附生硅藻',
              amount2: '',
              amount3: 9,
              PID:'AL',
              state:true

            }, {
              id: 'sgnqdbzs',
              name: '社会服务功能(SS)',
              amount1: '水功能区达标指标',
              amount2: 'WFZ',
              amount3: 9,
              PID:'SS',
              state:false

            }, {
              id: 'szykflyzb',
              name: '社会服务功能(SS)',
              amount1: '水资源开发利用指标',
              amount2: 'WRU',
              amount3: 9,
              PID:'SS',
              state:false

            }, {
              id: 'fhzb',
              name: '社会服务功能(SS)',
              amount1: '防洪指标',
              amount2: 'FLD',
              amount3: 9,
              PID:'SS',
              state:false

            }, {
              id: 'gzmydzb',
              name: '社会服务功能(SS)',
              amount1: '公众满意度指标',
              amount2: 'PP',
              amount3: 9,
              PID:'SS',
              state:false

            },
            ]
          }
      },
      created() {

      },
      computed: {

      },
      methods: {
        backAgo(){
          this.$router.push({name:'riverHealthy',params:{}});
        },
        //选中单元格，跳转路由并且传参数
        handleEdit(index, row){
          console.log(index, row);
          console.log(row.name)
          if(row.PID=='HD'){
            this.$router.push({name:'HDriver',params:{}});
          }
          if(row.PID=='PF'){
            this.$router.push({name:'PFriver',params:{}});
          }
          if(row.PID=='WQ'){
            this.$router.push({name:'WQriver',params:{}});
          }
          if(row.PID=='AL'){
            this.$router.push({name:'ALriver',params:{}});
          }
          if(row.PID=='SS'){
            this.$router.push({name:'SSriver',params:{}});
          }
        },
        checkSelectable(row,index){

          let flag = true;
          for (let i = 0; i < this.originData.length; i++) {
             console.log(row.amount2)
             console.log(this.originData[i].amount2)
            if(row.state  !==true ){


              console.log("不可选")

              flag=false
            }
           //  else if(row.amount2  !==' '){
           //    flag=false
           //  }
           // else  if(row.amount2  !=='HMP'){
           //    flag=false
           //  }
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
          let startMonth=checkstartTime.substring(checkstartTime.length-2)
          let endMonth=checkendTime.substring(checkendTime.length-2)
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
    margin-top: 20px;
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


  >>>.el-container{
    height: 100%;
  }
 >>>.el-menu-item:focus, .el-menu-item:hover{
   background: red!important;
   color:#fff!important;

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
    color: #feffff
  }
  .el-table {
    font-size: 14px;
    color: #eef5fb;
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
    border: 1px solid #0c5276;
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
  /*table表格样式*/
</style>
