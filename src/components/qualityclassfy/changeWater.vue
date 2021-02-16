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
          <el-col :span="5" v-for="product in curWaterSysOption"   :key="product.value">
            <el-radio :label="product.value"   >{{product.label}}</el-radio>
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

      <!--评价标准-->
      <!--自定义-->
      <div class="singleli_title" >
        <el-row>
          <el-col :span="8">
            <div class="sysfxTit">
              评价标准：
            </div>
          </el-col>
          <el-col :span="14" style="margin-left: -5%;">
            <div>
              <el-select v-model="pjbzmodel">
                <el-option
                  v-for="(item, index) in pjbzmodelOpt"
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
      <el-row  style="padding-bottom: 30px;">
        <el-col :span="6">
          <el-select v-model="watVal">
            <el-option
              v-for="(item, index) in watOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="6">
          <el-select v-model="disVal">
            <el-option
              v-for="(item, index) in disOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="6">
          <el-select v-model="poolVal">
            <el-option
              v-for="(item, index) in poolOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="3" >
          <el-button>导入综合库</el-button>

        </el-col>
        <el-col :span="3" >

          <el-button>导出报表</el-button>

        </el-col>


      </el-row >


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
          label="检测指标">
        </el-table-column>
        <el-table-column
          prop="alpha"
          label="浓度中值/ (mg/L)">
        </el-table-column>

        <el-table-column
          prop="qs"
          label="浓度变化趋势/ (mg/ (L-al)">
        </el-table-column>

        <el-table-column
          label="显著水平">
          <template slot-scope="scope">
            <!--  {{scope.row.time}}-->
            0.3
          </template>
        </el-table-column>

        <el-table-column
          label="结论">
          <template slot-scope="scope">
            <!--  {{scope.row.time}}-->

          </template>
        </el-table-column>
        <el-table-column
          label="备注">
          <template slot-scope="scope">
            <!--  {{scope.row.time}}-->

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

      <!--地表天然水-->
      <el-table v-if="pjxmval=='dbtrs'"  border :data="tableData" height="calc( 100vh - 300px )" style="background-color: transparent;">
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
          label="测站名称">
        </el-table-column>
        <el-table-column
          prop="f"
          label="氟">
        </el-table-column>
        <el-table-column
          prop="ars"
          label="砷">
        </el-table-column>
        <el-table-column
          prop="mndg"
          label="矿化物">
        </el-table-column>

        <el-table-column

          label="氯化物">
          <template slot-scope="scope">
            {{scope.row.cl}}

          </template>
        </el-table-column>
        <el-table-column

          label="硫酸盐">
          <template slot-scope="scope">
            {{scope.row.so4}}

          </template>
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
          :page-size="100"
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
        pageSize:10,
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

        /*评价指标*/
        pjzblevel:'TP',
        pjzbleveloption:[{
          label:"COD",
          value:'COD',
        },{
          label:"TP",
          value:'TP',
        },{
          label:"NH3N",
          value:'NH3N',
        }],
        /*评价标准*/
        pjbzval:'SL395-2007',
        pjbzOption:[{
          label:"SL395-2007",
          value:'SL395-2007',
        }],
        /*评价项目*/
        pjxmval:'khd',
        pjxmOption:[{
          label:"水质变化趋势",
          value:'khd',
        }
        ],
        /*取值方式*/
        qzfsval:'avg',
        qzfsOption:[{
          label:"平均值",
          value:'avg',
        }],
        /*当前水系*/
        cursysval:'river',
        /*水系参数*/
        curWaterSysOption:[{label:'河长制',value:'longriver'},{label:'流域',value:'river'},{label:'水资源',value:'watersource'},{label:'行政区',value:'distriction'}],


        /*时间选择*/
        selectTimeType:"ordertime",
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

        /*水资源区统计*/
        watVal:'1',//评价步长
        watOption:[{value:'1',label:'一级水资源分区'},{value:'2',label:'2级水资源分区'},{value:'3',label:'3级水资源分区'},{value:'4',label:'4级水资源分区'},{value:'5',label:'水资源区统计'} ],

        /*行政区划统计*/
        disVal:'sheng',//评价步长
        disOption:[{value:'sheng',label:'省'},{value:'shi',label:'市'},{value:'xian',label:'县'},{value:'xiang',label:'乡'},{value:'cun',label:'村'}],

        /*流域水系统计*/
       poolVal:'fir',//评价步长
        poolOption:[{value:'fir',label:'一级河流'},{value:'sec',label:'二级河流'},{value:'thir',label:'三级河流'},{value:'four',label:'四级河流'},{value:'fif',label:'五级河流'}],

        pjbzmodel:'TP',/*评价标准*/
        pjbzmodelOpt:[{label:'CODCR ',value:'CODCR '},{label:'TP ',value:'TP '},{label:'NH3N ',value:'NH3N'}],



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
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      queryTableData(){


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
        var param1=
          {
            "pageNum":this.currentPage,
            "pageSize":this.pageSize,
            "qzfs":this.qzfsval,// min max avg
            "tjsj":tjsj,
            "tjys":this.pjzblevel
          }

          console.log(param1)


        var param={
          "pageNum":"0",
          "pageSize":"10",
          "qzfs":"avg",
          "tjsj":"201601-201602-201603-201604-201605",
          "tjys":"TP" //  ---这里是统计要素，支持三种--  CODCR NH3N TP
        }
        this.tableData=[]
        /*矿化度请求*/
        if(this.pjxmval=="khd") {
          let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listdbs"


          /*http请求*/
          this.$http.post(khdurl, JSON.stringify(param1), {
            emulateJSON: true,
          }).then(function(res) {
            console.log(111111111111111)
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
  >>>.el-menu-item:focus, .el-menu-item:hover{
    background: red!important;
    color:#fff!important;

  }

</style>
