<template>
  <div  id="groundWater">
    <div class="left_menu">
      <div class="singleli_title">
        <el-row>
          <el-col :span="8">
            <div class="sysfxTit">
              评价项目：
            </div>
          </el-col>
          <el-col :span="14" style="margin-left: -5%;">
            <div>
              <el-select @change="selectGet" v-model="pjbzval">
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
      <!--水系参数-->
      <div style="width: 100%;padding-left:20px;">
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
      <el-table
        border
        :data="tableData"
        :cell-class-name="getRowColumn"
        @cell-click="handleCellClick"
       height="calc( 100vh - 400px )" style="background-color: transparent;">
        <el-table-column
          label="序号"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="pgzb"
          label="评估指标">
        </el-table-column>
        <el-table-column
          prop="fz"
          label="分值">
          
        </el-table-column>
        <el-table-column
          prop="kfyy"
          label="扣分原因">
           <template slot-scope="scope">
            <el-input
              v-if="scope.row.index === tabRowIndex &&
                      scope.column.index === tabColumnIndex"
              v-model="scope.row.kfyy"
              @blur="inputBlur"
            ></el-input>
            <span v-else>{{ scope.row.kfyy }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="df"
          label="得分">
          <template slot-scope="scope">
            <el-input
              v-if="
                    scope.row.index === tabRowIndex &&
                      scope.column.index === tabColumnIndex
                  "
              v-model="scope.row.df"
              @blur="inputBlur"
            ></el-input>
            <span v-else>{{ scope.row.df }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="bz"
          label="备注">
          <template slot-scope="scope">
            <el-input
              v-if="scope.row.index === tabRowIndex &&
                      scope.column.index === tabColumnIndex"
              v-model="scope.row.bz"
              @blur="inputBlur"
            ></el-input>
            <span v-else>{{ scope.row.bz }}</span>
          </template>
        </el-table-column>
      </el-table>

      <el-row style="margin:20px;">
        <el-col :span="16">
          &nbsp;
        </el-col>
        <el-col :span="8" >
          <div  style="width: 100px;
            padding:20px 10px;
            border: solid 1px #ccc;
            text-align: center;">
            <span >得分:{{defen}}/{{zongfen}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          &nbsp;
        </el-col>
        <el-col :span="4"><el-button>上传表</el-button></el-col>
        <el-col :span="4"><el-button>下载模板</el-button></el-col>

      </el-row>


    </div>

  </div>
</template>

<script>
 
  import  getWater from '../../api/index'

  var selectid = 0;
 
  export default {
    data() {
      return {
        
        defen:30,
        zongfen:100,
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
        SL_tableData: [],
        SZ_tableData:[],
        JK_tableData:[],
        GL_tableData:[],
        tableData:[],
        /*评价标准*/
        pjbzval:'0',


        pjbzOption:[{
            label:"水量评价", 
            value:'0',
        },
        {
            label:"水质评价",
            value:'1',
        },
          {
            label:"监控评价",
            value:'2',
        },
         {
            label:"管理评价",  
            value:'3',
        },
        ],

        SL_tableData:[
              {
                'pgzb':"年度供水保证率",
                'fz':14,
                'kfyy':'保证率不达标',
                'df':10,
                'bz':'备注'
              },{
                'pgzb':"应急备用水源地建设",
                'fz':8,
                'kfyy':'建设不达标',
                'df':8,
                'bz':'备注'

              },{
                'pgzb':"水量调度管理",
                'fz':4,
                'kfyy':'管理不达标',
                'df':4,
                'bz':'备注'
              },{
                'pgzb':"供水设施运行",
                'fz':4,
                'kfyy':'运行不安全',
                'df':3,
                'bz':'备注'
              }
            ],

             SZ_tableData:[
              {
                'pgzb':"取水口水质达标率",
                'fz':20,
                'kfyy':'未知',
                'df':10,
                'bz':'备注'
              },{
                'pgzb':"封闭管理及界标设立",
                'fz':4,
                'kfyy':'未知',
                'df':10,
                'bz':'备注'

              },{
                'pgzb':"入河口排污设置",
                'fz':3,
                'kfyy':'未知',
                'df':3,
                'bz':'备注'
              },{
                'pgzb':"一级保护区综合治理",
                'fz':3,
                'kfyy':'未知',
                'df':3,
                'bz':'备注'
              },{
                'pgzb':"二级保护区综合治理",
                'fz':2,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'
              },
              {
                'pgzb':"准保护区综合治理",
                'fz':2,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'
              },
                {
                'pgzb':"含磷洗涤剂、农药化肥等使用",
                'fz':2,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'
              },
              {
                'pgzb':"保护区交通设施管理",
                'fz':3,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'
              },
               {
                'pgzb':"保护区植被覆盖率",
                'fz':1,
                'kfyy':'未知',
                'df':1,
                'bz':'备注'
              },

            ],

            JK_tableData:[
              {
                'pgzb':"视频监控",
                'fz':2,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'
              },{
                'pgzb':"巡查制度",
                'fz':2,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'

              },{
                'pgzb':"特定指标监测",
                'fz':3,
                'kfyy':'未知',
                'df':3,
                'bz':'备注'
              },{
                'pgzb':"在线监测",
                'fz':3,
                'kfyy':'未知',
                'df':3,
                'bz':'备注'
              },
              {
                'pgzb':"信息监控系统",
                'fz':2,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'
              },

              {
                'pgzb':"应急监测能力",
                'fz':3,
                'kfyy':'未知',
                'df':3,
                'bz':'备注'
              },



            ],
             GL_tableData:[
              {
                'pgzb':"保护区划分",
                'fz':3,
                'kfyy':'未知',
                'df':3,
                'bz':'备注'
              },{
                'pgzb':"部门联动机制",
                'fz':2,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'

              },{
                'pgzb':"法规体系",
                'fz':2,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'
              },{
                'pgzb':"应急预案与演练",
                'fz':3,
                'kfyy':'未知',
                'df':3,
                'bz':'备注'
              },
              {
                'pgzb':"管理队伍",
                'fz':3,
                'kfyy':'未知',
                'df':3,
                'bz':'备注'
              },
              {
                'pgzb':"资金保障",
                'fz':2,
                'kfyy':'未知',
                'df':2,
                'bz':'备注'
              },

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
        tabRowIndex: null, //单元格横坐标
        tabColumnIndex: null //单元格纵坐标
      }
    },
    created() {



    },
    computed: {

    },
    methods: {

      //点击单元格得到横纵坐标
      handleCellClick(row, column, event, cell) {
        debugger
        this.tabRowIndex = row.index;
        this.tabColumnIndex = column.index;
        //this.tableValue.push(row);
      },
      //数据中没有横纵坐标需要加上进行下一步判断
      getRowColumn({ row, column, rowIndex, columnIndex }) {
       // debugger
        row.index = rowIndex;
        column.index = columnIndex;
      },
      inputBlur() {
        
        this.tabRowIndex = null;
        this.tabColumnIndex = "";
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      selectGet(vId){
         
          var obj = this.pjbzOption.find((item)=>{//这里的selectList就是上面遍历的数据源
          return item.value === vId;//筛选出匹配数据
      });
      selectid = vId
      },
      queryTableData(){ 
        if(selectid==0)
        {
          this.tableData = this.SL_tableData;     
        }
        else if(selectid==1)
        {
          this.tableData = this.SZ_tableData;        
        }
        else if(selectid==2)
        {
           this.tableData = this.JK_tableData;         
        }
        else if(selectid==3)
        {
          this.tableData = this.GL_tableData;
        }    
        var sum = 0
        for (var i = 0, j = this.tableData.length; i < j; i++)
        {
          sum += parseInt(this.tableData[i].df);
        }
        this.defen = sum

        var sumzong = 0
        for (var i = 0, j = this.SL_tableData.length; i < j; i++)
        {
          sumzong += parseInt(this.SL_tableData[i].df);
        }
         for (var i = 0, j = this.SZ_tableData.length; i < j; i++)
        {
          sumzong += parseInt(this.SZ_tableData[i].df);
        }
          for (var i = 0, j = this.JK_tableData.length; i < j; i++)
        {
          sumzong += parseInt(this.JK_tableData[i].df);
        }
        for (var i = 0, j = this.GL_tableData.length; i < j; i++)
        {
          sumzong += parseInt(this.GL_tableData[i].df);
        }
         this.zongfen = sumzong

      }
       
      //   var param={
      //     "pageNum":"0",      // --当前页
      //     "pageSize":"10",     //--一页显示数量
      //     "qzfs":"avg",        //--取值方式: min max avg  （分别为最小值、最大值、平均值）
      //     "tjsj":"201507-201508"
      //   }
      //   this.tableData=[]
      //     let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
      //     /*http请求*/
      //     this.$http.post(khdurl, JSON.stringify(param), {
      //       emulateJSON: true,
      //     }).then(function(res) {
         
      //       console.log(res)
      //       // this.tableData=res.body.data.pageResultList
      //       console.log("获取查询的数据")
            
      //       console.log(this.tableData)
      //     }).catch(function(res){

      //     })

      // }
    },
    watch:{

      // df(newVal, oldVal){
      //     alert(newVal);
      //      alert(newVal);
      //   },
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
    overflow-y: auto;
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
    line-height: 50px;
    border-radius: 5px;
    font-weight: lighter;
    margin-left: 3%;
    margin-top: 12px;
  }

  #groundWater .singleli_title .sysfxTit {
    color: #333;
    letter-spacing: 1px;
    font-size: 14px;
    /* text-align: right; */
    margin-right: 0px;
  }
  #groundWater >>>.el-input__inner {
    padding-left: 23px !important;
    color: #058cd0;
    border: 1px solid #058cd0;
    /*background: #031823;*/
    background: #fff;
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
