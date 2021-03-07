<template>
  <div  id="groundWater">
    <div class="left_menu">
<!--      <div class="singleli_title">
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
      <!--水质评价-->
      <el-row  style="color:#fff;    padding: 10px;">水质评价</el-row>
       <el-table   :data="tableData" height="300" style=" width:80%;margin-bottom:0px;background-color: transparent;">
          <!-- <el-table  v-if="pjxmval=='khd'"    :data="tableData" height="170" style=" width:80%;margin-bottom:0px;background-color: transparent;"> -->
        <el-table-column  align="center" label="水质评价">
        <el-table-column
          prop="SZ_WZ"
          label="评价位置">
          <template slot-scope="scope">
            <el-input   v-model="scope.row.SZ_WZ" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column
          prop="SZ_LX"
          label="水质类型">
              <template slot-scope="scope">
            <el-input   v-model="scope.row.SZ_LX" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column
          prop="SZ_FZ"
          label="分值">
            <template slot-scope="scope">
            <el-input   v-model="scope.row.SZ_FZ" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
         </el-table-column>
      </el-table>
      <el-row  style="color:#fff; padding: 12px;">
        <el-row style="float: right;padding-right:20px;">
        <el-button>上传表</el-button>
        <el-button>下载模板</el-button>

      </el-row>
      </el-row>
      <el-row  style="color:#fff; padding: 10px;">生境评价</el-row>
      <!-- <el-table v-if="pjxmval=='khd'"  border :data="tableData" height="170" style="width:80%;margin-bottom:0px;background-color: transparent;"> -->
      <el-table  border :data="SJ_tableData" height="300" style="width:80%;margin-bottom:0px;background-color: transparent;">
        <el-table-column  align="center" label="生境评价">
        <el-table-column
          prop="SJ_WZ"
          label="评价位置" >
            <template slot-scope="scope">
            <el-input   v-model="scope.row.SJ_WZ" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column
          prop="SJ_PF"
          label="湖库生境评分HS">
            <template slot-scope="scope">
            <el-input   v-model="scope.row.SJ_PF" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column
          prop="SJ_FZ"
          label="分值">
           <template slot-scope="scope">
            <el-input   v-model="scope.row.SJ_FZ" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column
          prop="SJ_HBD"
          label="湖滨点">
            <template slot-scope="scope">
            <el-input   v-model="scope.row.SJ_HBD" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          type="selection"
          width="55">
        </el-table-column>
       </el-table-column>
      </el-table>
      <el-row style="float: right;padding-right:30px;">
        <el-button>上传表</el-button>
        <el-button>下载模板</el-button>

      </el-row>
      <!--生物评价-->
      <el-row  style="color:#fff; padding: 12px;">生物评价</el-row>
      <!-- <el-table v-if="pjxmval=='khd'"  border :data="biologytabData" height="170" style="width:80%;margin-bottom:0px;background-color: transparent;"> -->
       <el-table  border :data="biologytabData" height="300" style="width:80%;margin-bottom:0px;background-color: transparent;">
        <el-table-column  align="center" label="生物评价">
        <el-table-column
          prop="swpj"
          label="评价点">
           <template slot-scope="scope">
            <el-input   v-model="scope.row.swpj" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column
          prop="swzs"
          label="指数">
          <template slot-scope="scope" >
            <el-select v-model="scope.row.swzs" @change="getDatalist(scope.row)">
              <el-option
                v-for="item in swpjOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          prop="swzt"
          label="生物状态">
           <template slot-scope="scope">
            <el-input   v-model="scope.row.swzt" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column
          prop="stnm"
          label="分值">
              <template slot-scope="scope">
            <el-input   v-model="scope.row.stnm" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        </el-table-column>
      </el-table>
      <el-row style="float: right;padding-right:30px;">
        <el-button>上传表</el-button>
        <el-button>下载模板</el-button>

      </el-row>
      <!--权重配比-->
      <el-row  style="color:#fff; padding: 12px;">权重配比</el-row>



      <el-table v-if="pjxmval=='khd'"  border :data="weightData" height="170" style="width:80%;margin-bottom:0px;background-color: transparent;"
      :cell-class-name="getRowColumn"  @cell-click="handleCellClick"

      >
        <el-table-column
          label="项目"
          prop="project"
        >
        </el-table-column>
        <el-table-column
          prop="poolweight"
          label="湖滨点权重">
          input<template slot-scope="scope">
            <el-input   v-model="scope.row.poolweight" @blur="inputBlur"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="centerweight"
          label="湖心点权重">
          <template slot-scope="scope">
            <el-input   v-model="scope.row.centerweight" @blur="inputBlur"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <el-row  style="float: right;padding-right:30px;">
        <el-button @click="showDialog">评价</el-button>

      </el-row>


      <!--总硬度-->
      <el-table v-if="pjxmval=='zyd'"  border :data="tableData" height="calc( 100vh - 300px )" style="background-color: transparent;">
        <el-table-column
          label="序号"
          type="index"
        >
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
        >
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
      >
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
          :page-size=pageSize
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>

    <el-dialog
      title="评价结果"
      :visible.sync="dialogVisible"
      width="50%"
      heigit="800px"
      :modal=false
       >
      <div style="width:100%;height: 450px;">
        <el-table   border :data="pjbtableData"   style="margin-bottom:20px;height:300px;border:solid 1px #ccc;background-color: transparent;">



          <el-table-column
            prop="pjd"
            label="评价点">
          </el-table-column>
          <el-table-column
            prop="sthjzl"
            label="水生志环量状况">
          </el-table-column>
          <el-table-column
            prop="zhzs"
            label="综合指数">
          </el-table-column>

        </el-table>
        <el-row>
          <el-col :span="17">&nbsp;</el-col>
          <el-col :span="3">
            <el-button>保存至数据库</el-button>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="3">
            <el-button>导出结果</el-button>

          </el-col>
        </el-row>
      </div>
    </el-dialog>

    <!--8个pdf表格弹窗-->
    <el-dialog
      :title=currentTableName
      :modal-append-to-body="false"
      :visible.sync="eightVisible"
      :close-on-click-modal="false"
      width="60%"
      :before-close="handleClose">
      <div style="width:90%;height:600px;margin:0 auto;">
        <!--表格1-->
        <div  v-show="indexPage==1">
          <el-row>
            <el-col :span="7">
              <el-table :stripe="true"  :header-cell-style="thStyle" :data="table1DataA" height="480" style="background-color: transparent;">
                <el-table-column
                  align="center"
                  :label="'采样点\nSampling sites'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.name}}</p>
                    <p>{{scope.row.country}}</p>

                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  :label="'全球定位系统\nGPS'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                    <p>{{scope.row.east}}</p>

                  </template>
                </el-table-column>


              </el-table>


            </el-col>

            <el-col :span="7">
              <el-table  :stripe="true"  :header-cell-style="thStyle"  :data="table1DataB" height="480" style="  background-color: transparent;">
                <el-table-column
                  align="center"
                  :label="'采样点\nSampling sites'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.name}}</p>
                    <p>{{scope.row.country}}</p>

                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  :label="'全球定位系统\nGPS'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                    <p>{{scope.row.east}}</p>

                  </template>
                </el-table-column>


              </el-table>


            </el-col>
            <el-col :span="7">
              <el-table   :stripe="true"  :header-cell-style="thStyle" :data="table1DataC" height="480" style="  background-color: transparent;">
                <el-table-column
                  align="center"
                  :label="'采样点\nSampling sites'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                    <p>{{scope.row.east}}</p>

                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  :label="'全球定位系统\nGPS'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                    <p>{{scope.row.east}}</p>

                  </template>
                </el-table-column>


              </el-table>


            </el-col>
          </el-row>





        </div>

        <!--表格1 over-->
        <!--表格2-->

        <div  v-show="indexPage==2">

          <el-row>
            <el-col :span="24">
              <el-table  :stripe="true"  border    :header-cell-style="thStyle" :data="table1DataA" height="480" style="background-color: transparent;">
                <el-table-column
                  align="center"
                  label="指标类型"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.name}}</p>


                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="平均值"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="标准差"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="最小值"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="最大值"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="25%分位数"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="中位数"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="75%分位数"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>


              </el-table>


            </el-col>


          </el-row>


        </div>
        <!--表格2 over-->
        <!--表格3-->

        <div  v-show="indexPage==3">

          <el-row>
            <el-col :span="24">
              <el-table  border  :stripe="true"  :header-cell-style="thStyle" :data="table1DataA" height="480" style="background-color: transparent;">
                <el-table-column
                  align="center"
                  label="M1"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.name}}</p>


                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M2"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M3"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M4"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M5"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M6"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="M7"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="M8"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="M9"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="M10"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

              </el-table>


            </el-col>


          </el-row>
            <el-row>
           <span>注: M1总分类单元数 </span>
          </el-row>


        </div>
        <!--表格3 over-->
        <!--表格4-->

        <div  v-show="indexPage==4">

          <el-row>
            <el-col :span="24">
              <el-table  border  :stripe="true"  :header-cell-style="thStyle":data="table4Data" height="480" style="background-color: transparent;">
                <!--第1列-->

                <el-table-column
                  align="center"
                  label="生物参数Metris"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.name}}</p>
                  </template>
                </el-table-column>
                <!--第2列-->

                <el-table-column
                    align="center"
                    label="统计分布Statistics"
                  >
                    <template slot-scope="scope">
                      <p>{{scope.row.north}}</p>
                    </template>
                        <el-table-column
                          align="center"
                          label="25%"
                        >
                          <template slot-scope="scope">
                            <p>{{scope.row.bfz25}}</p>
                          </template>

                        </el-table-column>

                        <el-table-column
                          align="center"
                          label="50%"
                        >
                          <template slot-scope="scope">
                            <p>{{scope.row.bfz50}}</p>
                          </template>

                        </el-table-column>


                        <el-table-column
                          align="center"
                          label="75%"
                        >
                          <template slot-scope="scope">
                            <p>{{scope.row.bfz75}}</p>
                          </template>

                        </el-table-column>

                  </el-table-column>
                <!--第三列-->

                  <el-table-column
                  align="center"
                  label="评分 Scores"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.f6}}</p>
                  </template>


                    <el-table-column
                      align="center"
                      label="6"
                    >
                      <template slot-scope="scope">
                        <p>{{scope.row.f3}}</p>
                      </template>

                    </el-table-column>

                    <el-table-column
                      align="center"
                      label="3"
                    >
                      <template slot-scope="scope">
                        <p>{{scope.row.f0}}</p>
                      </template>

                    </el-table-column>




                </el-table-column>

              </el-table>
            </el-col>
          </el-row>
        </div>
        <!--表格4 over-->
        <!--表格5-->
        <div  v-show="indexPage==5">
          <el-row>
            <el-col :span="24">
              <el-table  border  :stripe="true"  :header-cell-style="thStyle" :data="table5Data" height="480" style="background-color: transparent;">
                <el-table-column
                  align="center"
                  :label="'生物参数'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.name}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  :label="'最小值'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.min}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  :label="'5%分位数'"

                >
                  <template slot-scope="scope">
                    <p>{{scope.row.ffws}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  :label="'中位数'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.middle}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  :label="'95%分位数'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.nffws}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  :label="'最大值\nMax'"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.max}}</p>
                  </template>
                </el-table-column>


              </el-table>


            </el-col>


          </el-row>




        </div>
        <!--表格5 over-->
        <!--表格6-->

        <div  v-show="indexPage==6">

          <el-row>
            <el-col :span="24">
              <el-table  border  :stripe="true"  :header-cell-style="thStyle"  :data="table6Data" height="480" style="background-color: transparent;">
                <el-table-column
                  align="center"
                  label="健康"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.healthy}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="亚健康"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.unhealthy}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="一般"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.normal}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="差"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.bad}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="极差"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.verybad}}</p>
                  </template>
                </el-table-column>



              </el-table>


            </el-col>


          </el-row>

        </div>
        <div  v-show="indexPage==7">

          <el-row>
            <el-col :span="24">
              <el-table  border :stripe="true"  :header-cell-style="thStyle" :data="table6Data" height="480" style="background-color: transparent;">
                <el-table-column
                  align="center"
                  label="健康"
                  prop="healthy"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.healthy}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="亚健康"
                  prop="unhealthy"

                >
                  <template slot-scope="scope">
                    <p>{{scope.row.unhealthy}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="一般"
                  prop="normal"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.normal}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  prop="bad"
                  label="差"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.bad}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="极差"
                  prop="verybad"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.verybad}}</p>
                  </template>
                </el-table-column>



              </el-table>


            </el-col>


          </el-row>


        </div>
        <div  v-if="indexPage==8">

          <el-row>
            <el-col :span="24">
              <el-table  border   :stripe="true"  :header-cell-style="thStyle" :data="table1DataA" height="480" style="background-color: transparent;">
                <el-table-column
                  align="center"
                  label="M1"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.name}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M2"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M3"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M4"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M5"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="M6"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="M7"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="M8"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="M9"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="M10"
                >
                  <template slot-scope="scope">
                    <p>{{scope.row.north}}</p>
                  </template>
                </el-table-column>

              </el-table>


            </el-col>


          </el-row>

        </div>




        <!--下一步-->
        <div style="float:right;padding-right:20px;padding-top:20px;">
          <el-button @click="goNextTable">下一步</el-button>
        </div>
        <!--上一步-->
        <div style="float:right;padding-right:20px;padding-top:20px;">
          <el-button @click="goAgoTable">上一步</el-button>
        </div>

      </div>
    </el-dialog>


  </div>
</template>

<script>


  import  getWater from '../../api/index'
  import moment from "moment";
  export default {
    data() {
      return {
        currentTableName:'表1:呼兰河口湿地及周边水域各采样点地理位置',
        SJ_tableData:[],
        pjbtableData: [{
          pjd: '平价点1',
          sthjzl: '非常健康',
          zhzs: '5'
        }, {
          pjd: '平价点2',
          sthjzl: '非常健康',
          zhzs: '5'
        }, {
          pjd: '平价点3',
          sthjzl: '非常健康',
          zhzs: '5'
        }],//基础评价表data
        biologytabData:[],//生物评价
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
        /*评价步长*/
        pjbcVal:'year',//评价步长
        pjbcOption:[{value:'xun',label:'旬'},{value:'month',label:'月'},{value:'ji',label:'季'},{value:'xq',label:'汛期'},{value:'fxq',label:'非汛期'},{value:'halfyear',label:'半年'},{value:'year',label:'年'}],

        /*生物评价*/

        swpjOption:[{value:'varityswdyx',label:'生物多样性指数'},{value:'swzs',label:'生物指数'},{value:'swwzx',label:'生物完整性指数'}],
        /*初始时间*/
        startTime:'2015-07',
        /*截至时间*/
        endTime:'2015-08',
        /*权重配比*/
        weightData:[],

        tabRowIndex: null, //单元格横坐标
        tabColumnIndex: null, //单元格纵坐标
        dialogVisible:false,
        /*eightVisible  八个弹窗*/
        eightVisible:false,
        indexPage:1,//第一个表
        /*8个表对应数据*/
        table1DataA:[
          {
            name:'S1',
            country:"万家",
            north:'N454620',
            east:'E126 30578',
          },
          {
            name:'S1',
            country:"万家",
            north:'N454620',
            east:'E126 30578',
          },
          {
            name:'S1',
            country:"万家",
            north:'N454620',
            east:'E126 30578',
          }


        ],
        table1DataB:[

          {
            name:'S1',
            country:"万家",
            north:'N454620',
            east:'E126 30578',
          },
          {
            name:'S1',
            country:"万家",
            north:'N454620',
            east:'E126 30578',
          },
          {
            name:'S1',
            country:"万家",
            north:'N454620',
            east:'E126 30578',
          }

        ],
        table1DataC:[
          {
            name:'S1',
            country:"万家",
            north:'N454620',
            east:'E126 30578',
          },
          {
            name:'S1',
            country:"万家",
            north:'N454620',
            east:'E126 30578',
          },
          {
            name:'S1',
            country:"万家",
            north:'N454620',
            east:'E126 30578',
          }

        ],
        table2Data:[],
        table3Data:[],
        table4Data:[

          {'name':"直接集食者%Gatherers t",
            bfz25:'3',
            bfz50:'10',
            bfz75:'5',
            f6:'>17',
            f3:'10-17',
            f0:'<10',

          },
          {'name':"总分类单元数",
            bfz25:'3',
            bfz50:'10',
            bfz75:'5',
            f6:'>17',
            f3:'10-17',
            f0:'<10',

          },
          {'name':"EPT类单元数",
            bfz25:'3',
            bfz50:'10',
            bfz75:'5',
            f6:'>17',
            f3:'10-17',
            f0:'<10',

          },
          {'name':"浮游单元数",
            bfz25:'3',
            bfz50:'10',
            bfz75:'5',
            f6:'>17',
            f3:'10-17',
            f0:'<10',

          },
          {'name':"直接集食者",
            bfz25:'3',
            bfz50:'10',
            bfz75:'5',
            f6:'>17',
            f3:'10-17',
            f0:'<10',

          },
          {'name':"耐污类群",
            bfz25:'3',
            bfz50:'10',
            bfz75:'5',
            f6:'>17',
            f3:'10-17',
            f0:'<10',

          },

          {'name':"生物指数BI",
            bfz25:'3',
            bfz50:'10',
            bfz75:'5',
            f6:'>17',
            f3:'10-17',
            f0:'<10',

          },


        ],
        table5Data:[
          {'name':"总分类单元数No. of total txa",
            min:'3',
            max:'10',
            middle:'5',
            nffws:'35',
            ffws:'8',
          },
          {'name':"EPT类单元数EPT taxa",
            min:'3',
            max:'10',
            middle:'5',
            nffws:'35',
            ffws:'8',
          },
          {'name':" %Epheneroptera",
            min:'3',
            max:'10',
            middle:'5',
            nffws:'35',
            ffws:'8',
          },
          {'name':"直接集食者%Gatherers t",
            min:'3',
            max:'10',
            middle:'5',
            nffws:'35',
            ffws:'8',
          },
          {'name':"耐污类群s Tolerant taxa%",
            min:'13',
            max:'10',
            middle:'5',
            nffws:'315',
            ffws:'8',
          },
          {'name':"生物指数BI",
            min:'13',
            max:'101',
            middle:'5',
            nffws:'135',
            ffws:'8',
          },




        ],
        table6Data:[
          {
            name:'三分法',
            healthy:'>26',
            unhealthy:'20-26',
            normal:'13-19',
            bad:'7-12',
            verybad:'<6',

          },
          {
            name:'比值法',
            healthy:'>26',
            unhealthy:'20-26',
            normal:'13-19',
            bad:'7-12',
            verybad:'<6',

          }




        ],
        table7Data:[
          {
            yd:'S1',
            sff:'22',
            jkzl:'亚健康Sub-health',
            bzf:'13-19',
          },
          {
            yd:'S1',
            sff:'22',
            jkzl:'亚健康Sub-health',
            bzf:'13-19',
          },
          {
            yd:'S1',
            sff:'22',
            jkzl:'亚健康Sub-health',
            bzf:'13-19',
          },
        ],
        table8Data:[],


      }
    },
    mounted() {
      this.biologytabData=[
        {
          'swpj':'c001',
          'swzt':"清洁",
          "swzs":'varityswdyx',
          "stnm":5,

        },
        {
          'swpj':'c002',
          'swzt':"清洁",
          "swzs":'swwzx',
          "stnm":3,


        },
        {
          'swpj':'c003',
          'swzt':"非常健康",
          "swzs":'varityswdyx',
          "stnm":4,
        },




      ]
      this.weightData=[
        {
          'project':'水质评价',
          'poolweight':0.4,
          'centerweight':0.5,

        },
        {
          'project':'生境评价',
          'poolweight':0.2,
          'centerweight':0,

        },
        {
          'project':'生物评价',
          'poolweight':0.3,
          'centerweight':0.5,

        },




      ]
    },
    created() {

    },
    computed: {

    },
    methods: {
        inputBlur() {
        this.tabRowIndex = null;
        this.tabColumnIndex = "";
      },
      thStyle(){
        return  {backgroundColor:'#caebff', color: '#235d9a'}

      },
      /*上一步*/
      goAgoTable(){
        this.indexPage--
        if(this.indexPage==1){
          this.currentTableName='表1,呼兰河口湿地及周边水域各采样点地理位置'

        }
        if(this.indexPage==2){
          this.currentTableName='表2、20个生物参数在9个品t占中的分布'

        }
        if(this.indexPage==3){
          this.currentTableName='表3.10个候选生物参数间的Pearson相关分析(n=10)'

        }
        if(this.indexPage==4){
          this.currentTableName='表4 、6个参数值在参照点中的分布及分值计算标准'

        }
        if(this.indexPage==5){
          this.currentTableName='表5.6个生物参数值在所有样点中的统计分布'

        }
        if(this.indexPage==6){
          this.currentTableName='表6.B-IBI指标体系健康评价标准'

        }
        if(this.indexPage==7){
          this.currentTableName='表7,各样点健康状况'

        }

        if(this.indexPage<=1){
          this.indexPage=1
          this.currentTableName='表1,呼兰河口湿地及周边水域各采样点地理位置'
        }

      },
      /*下一步*/
      goNextTable(){//展示下一个表格
        this.indexPage++
        if(this.indexPage==1){
          this.currentTableName='表1,呼兰河口湿地及周边水域各采样点地理位置'

        }
        if(this.indexPage==2){
          this.currentTableName='表2、20个生物参数在9个品t占中的分布'

        }
        if(this.indexPage==3){
          this.currentTableName='表3.10个候选生物参数间的Pearson相关分析(n=10)'

        }
        if(this.indexPage==4){
          this.currentTableName='表4 、6个参数值在参照点中的分布及分值计算标准'

        }
        if(this.indexPage==5){
          this.currentTableName='表5.6个生物参数值在所有样点中的统计分布'

        }
        if(this.indexPage==6){
          this.currentTableName='表6.B-IBI指标体系健康评价标准'

        }
        if(this.indexPage==7){
          this.currentTableName='表7,各样点健康状况'

        }

        if(this.indexPage>=7){
          this.indexPage=7
          this.currentTableName='表7,各样点健康状况'
        }


      },
      handleClose(){//关闭弹窗
        this.eightVisible=false
        this.indexPage=1

      },
      getDatalist(scope){
        console.log(scope.swzs)//判断选中生物多样性指数弹窗
        if(scope.swzs=='swwzx'){
          this.eightVisible=true

        }else{
          this.eightVisible=false
          this.indexPage=1

        }
      },
      showDialog(){
        this.dialogVisible=true


      },

      //点击单元格得到横纵坐标
      handleCellClick(row, column, event, cell) {
        this.tabRowIndex = row.index;
        this.tabColumnIndex = column.index;
        this.tableValue.push(row);
      },
      //数据中没有横纵坐标需要加上进行下一步判断
      getRowColumn({row, column, rowIndex, columnIndex}) {
        row.index = rowIndex;
        column.index = columnIndex;
      },
      //鼠标失去焦点事件
      inputBlur() {
        this.tabRowIndex = null;
        this.tabColumnIndex = "";
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
            SZ_WZ:'c001',
            SZ_LX:'II',
            SZ_FZ:'4'
        },
        {
            SZ_WZ:'c002',
            SZ_LX:'III',
            SZ_FZ:'3'
        },
        {
            SZ_WZ:'c003',
            SZ_LX:'V',
            SZ_FZ:'1'
        },
        ]

        this.SJ_tableData=[{
          SJ_WZ:'c001',
          SJ_PF:'140',
          SJ_DJ:'II',
          SJ_FZ:'4',
        },
        {
          SJ_WZ:'c002',
          SJ_PF:'100',
          SJ_DJ:'II',
          SJ_FZ:'3',
        },
        {
          SJ_WZ:'c003',
          SJ_PF:'50',
          SJ_DJ:'II',
          SJ_FZ:'1',
          SJ_HBD:'√',
        }]

        //  prop="SJ_WZ"
        //   label="评价位置"
        // >
        // </el-table-column>
        // <el-table-column
        //   prop="SZ_PF"
        //   label="湖库生境评分HS">
        // </el-table-column>
        // <el-table-column
        //   prop="SJ_DJ"
        //   label="等级">
        // </el-table-column>
        // <el-table-column
        //   prop="SJ_FZ"
        //   label="分值">
        // </el-table-column>
        // <el-table-column
        //   prop="SJ_HBD"
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
      cursysval(newValue){
        console.log("切换分级类别")
        console.log(newValue)

      /*  if(newValue=='longriver'){//河长制参数

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
        }*/
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
    background: #fff;
    width: 20%;
    height: calc( 100vh - 80px);
    position: absolute;
    top: 0;
    left: 0;
    border-right: #fff dashed 2px;
    border-left: #fff solid 1px;
    padding-top:20px;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
  }
  #groundWater  .right_menu{
    width: 80%;
    height: calc( 100vh - 80px);
    /*padding-top: 25px;*/
    /*background: #031823;*/
    background: #fff;

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
    margin-top: 12px;
  }

  #groundWater .singleli_title .sysfxTit {
    color: #333;
    letter-spacing: 1px;
    font-size: 16px;
    /* text-align: right; */
    margin-right: 10px;
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


/*  >>>.el-table th:hover, .el-table tr:hover{*/

/*background:red ;*/
/*  }*/
 >>> .el-table  tr:hover>td {
    background :transparent;

  }

  >>>.hover_row{
    background :transparent;
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

  /*实现表格头数据换行*/
  >>>.el-table .cell {
    /*text-align: center;*/
    white-space: pre-line;/*保留换行符*/
  }
  >>>.el-table--striped .el-table__body tr.el-table__row--striped.el-table__row--striped.el-table__row--striped td {
    background-color: rgba(221, 245, 255, 0.3) !important; /*替换为你需要的颜色，觉得优先级不够就加!important*/
  }


</style>
