<template>
  <!-- 信息查询 -->
  <div class="informationLnquiry">
    <div class="informationLnquiry_title">
      <div>信息查询</div>
    </div>
    <div class="informationLnquiry_content">
      <!-- 左侧 -->
      <div class="left_menu">
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                查询目标：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
              <div>
                <el-select v-model="queryTarget">
                  <el-option
                    v-for="(item, index) in queryTargetList"
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
            <el-col :span="9">
              <div class="sysfxTit">
                查询项目：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
              <div>
                <el-select v-model="queryProject">
                  <el-option
                    v-for="(item, index) in queryProjectList"
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
            <el-col :span="9">
              <div class="sysfxTit">
                显示内容：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
              <div>
                <el-select v-model="displayContent">
                  <el-option
                    v-for="(item, index) in displayContentList"
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
        <div style="width: 100%;padding:0 0px;box-sizing: border-box;">
          <ul class="clear-fix informationLnquiry_ui">
            <li>
              <span :class="[cursys == '1' ? 'couser' : '']" @click="cursysvals(1)" >行政区</span>
            </li>
            <li>
              <span :class="[cursys == '2' ? 'couser' : '']" @click="cursysvals(2)" >流域</span>
            </li>
            <li>
              <span :class="[cursys == '3' ? 'couser' : '']" @click="cursysvals(3)" >水资源</span>
            </li>
            <li>
              <span :class="[cursys == '4' ? 'couser' : '']" @click="cursysvals(4)" >河长制</span>
            </li>
          </ul>
        </div>
        <!--行政-->
        <div v-if="cursys == '1'">
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  省：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="XZprovince">
                    <el-option
                      v-for="(item, index) in XZprovinceList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  市：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="XZcity">
                    <el-option
                      v-for="(item, index) in XZcityList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  县：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="XZcounty">
                    <el-option
                      v-for="(item, index) in XZcountyList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  镇：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="XZtown">
                    <el-option
                      v-for="(item, index) in XZtownList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  村：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="XZvillage">
                    <el-option
                      v-for="(item, index) in XZvillageList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--1级-->

        <div v-if="cursys == '2'">
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  流域：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="stairPartition">
                    <el-option
                      v-for="(item, index) in stairPartitionList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  水系：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="secondPartition">
                    <el-option
                      v-for="(item, index) in secondPartitionList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  河流：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="threePartition">
                    <el-option
                      v-for="(item, index) in threePartitionList"
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
        
        </div>

        <div v-if="cursys == '3'">
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  一级分区：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="stairPartition">
                    <el-option
                      v-for="(item, index) in stairPartitionList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  二级分区：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="secondPartition">
                    <el-option
                      v-for="(item, index) in secondPartitionList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  三级分区：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="threePartition">
                    <el-option
                      v-for="(item, index) in threePartitionList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  四级分区：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="fourPartition">
                    <el-option
                      v-for="(item, index) in fourPartitionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        
        <!--河长制-->
        <div v-if="cursys == '4'">
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  省：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="HCZprovince">
                    <el-option
                      v-for="(item, index) in HCZprovinceList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  市：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="HCZcity">
                    <el-option
                      v-for="(item, index) in HCZcityList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  县：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="HCZcounty">
                    <el-option
                      v-for="(item, index) in HCZcountyList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  镇：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="HCZtown">
                    <el-option
                      v-for="(item, index) in HCZtownList"
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
          <div class="singleli_title">
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  村：
                </div>
              </el-col>
              <el-col :span="13" style="margin-left: -5%;">
                <div>
                  <el-select v-model="HCZvillage">
                    <el-option
                      v-for="(item, index) in HCZvillageList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--自定义-->
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                自定义：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
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
        <div class="product">
          <!--时间段选择-->
          <el-radio-group v-model="selectTimeType">
            <el-col
              :span="12"
              v-for="product in timequantumOption"
              :key="product.value"
            >
              <el-radio :label="product.value">{{ product.label }}</el-radio>
            </el-col>
          </el-radio-group>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                评价步长：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
              <div>
                <el-select v-model="evaluationStep">
                  <el-option
                    v-for="(item, index) in evaluationStepList"
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
            <el-col :span="9">
              <div class="sysfxTit">
                时间选择：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
              <el-date-picker
                v-model="startTime"
                format="yyyy-MM"
                type="month"
                align="right"
                size="mini"
                @change="getstartTime"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-col>
          </el-row>
        </div>
        <!--时间序列-->
        <div class="singleli_title" v-if="selectTimeType == 'ordertime'">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                截至时间：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
              <el-date-picker
                v-model="endTime"
                @change="getendTime"
                format="yyyy-MM"
                type="month"
                align="right"
                size="mini"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="20" style="text-align: center">
              <el-button @click="queryTableData">查询</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--右侧table表格-->
      <div class="right_menu">
        <!--水质基础评价-->
        <el-table
          border
          :data="tableData"
          height="calc( 100vh - 300px )"
          style="background-color: transparent;"
        >
          <el-table-column
            label="序号"
            type="index"
            width="80"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="hlbm"
            label="河流编码"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="hlmc"
            label="河流名称"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="hmbz"
            label="河名备注"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="hljb"
            label="河流级别"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="sjhljb"
            label="上一级河流编码"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="syjhlmc"
            label="上一级河流名称"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="hllength"
            label="河流长度（km）"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="lymj"
            label="流域面积（k㎡）"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="liujing"
            label="流经"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="sscity"
            label="所属市"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="sslusx"
            label="所属流域水系"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="pjsj"
            label="评价时间"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="pjsz"
            label="评价水质"
            min-width="100"
            align="center"
          ></el-table-column>
        </el-table>
        <!--分页-->
        <div class="pages" style="margin-top:15px">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import getWater from "../../api/index";
export default {
  data() {
    return {
      /*目标查询*/
      queryTarget: "1",
      queryTargetList: [
        {
          label: "湖泊",
          value: "1"
        },
        {
          label: "河流",
          value: "2"
        },
        {
          label: "水库",
          value: "3"
        },
        {
          label: "水功能区",
          value: "4"
        },
        {
          label: "水文测站",
          value: "5"
        },
        {
          label: "断面",
          value: "6"
        }
      ],
      /*查询项目*/
      queryProject: "",
      queryProjectList: [
        {
          label: "达标情况",
          value: "1"
        },
        {
          label: "水质类别",
          value: "2"
        },
        {
          label: "水质目标",
          value: "3"
        }
      ],
      /*显示内容*/
      displayContent: "",
      displayContentList: [],
      information:[ {
          label: "达标",
          value: "1"
        },
        {
          label: "不达标",
          value: "2"
        },],
      waterQuality:[
        {label:'I类',value:'1'},
        {label:'II类',value:'2'},
        {label:'III类',value:'3'},
        {label:'IV类',value:'4'},
        {label:'V类',value:'5'},
        {label:'劣V类',value:'6'},],
      /*当前水系*/
      cursys: "1",
      /*行政区*/
      XZprovince: "全部", //省
      XZprovinceList: [],
      XZcity: "全部", //市
      XZcityList: [],
      XZcounty: "全部", //县
      XZcountyList: [],
      XZtown: "全部", //镇
      XZtownList: [],
      XZvillage: "全部", //村
      XZvillageList: [],
      /*流域*/
      stairPartition: "全部", //一级分区
      stairPartitionList: [],
      secondPartition: "全部", //二级分区
      secondPartitionList: [],
      threePartition: "全部", //三级分区
      threePartitionList: [],
      fourPartition: "全部", //四级分区
      fourPartitionList: [],
      /*河长制*/
      HCZprovince: "全部", //省
      HCZprovinceList: [],
      HCZcity: "全部", //市
      HCZcityList: [],
      HCZcounty: "全部", //县
      HCZcountyList: [],
      HCZtown: "全部", //镇
      HCZtownList: [],
      HCZvillage: "全部", //村
      HCZvillageList: [],
      currentPage: 1, //当前页
      pageSize: 10, //当前页显示条数
      tableData: [],
      /*自定义*/
      customdefine: "默认分组",
      customdefineList: [],
      /*时间选择*/
      selectTimeType: "singletime",
      /*时间段选择*/
      timequantumOption: [
        {
          value: "singletime",
          label: "按单时间段评价"
        },
        {
          value: "ordertime",
          label: "按单时序列评价"
        }
      ],
      /*评价步长*/
      evaluationStep: "year", //评价步长
      evaluationStepList: [
        { value: "xun", label: "旬" },
        { value: "month", label: "月" },
        { value: "ji", label: "季" },
        { value: "xq", label: "汛期" },
        { value: "fxq", label: "非汛期" },
        { value: "halfyear", label: "半年" },
        { value: "year", label: "年" }
      ],
      /*初始时间*/
      startTime: "2015-07",
      /*截至时间*/
      endTime: "2015-08"
    };
  },
  created() {},
  computed: {},
  methods: {
    cursysvals(id) {
      this.cursys = id;
    },
    getstartTime(date) {
      let checkstartTime = moment(this.startTime).format("YYYYMM");
      let checkendTime = moment(this.endTime).format("YYYYMM");
    },
    getendTime(date) {
      let checkstartTime = moment(this.startTime).format("YYYYMM");
      let checkendTime = moment(this.endTime).format("YYYYMM");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.queryTableData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      console.log(val);
      this.currentPage = val;
      this.queryTableData();
    },
    queryTableData() {

      this.tableData=[
        {
          hlbm:'10923',
          hlmc:'柳江',
          hmbz:'备注',
          hljb:'I',
          sjhljb:'102100',
          syjhlmc:'黄江',
          hllength:'10000km',
          lymj:'1000km2',
          liujing:'长江',
          sscity:'广西',
          sslusx:'淡水',
          pjsj:'20200123',
          pjsz:'评价水质',

        },
        {
          hlbm:'10923',
          hlmc:'柳春江',
          hmbz:'备注',
          hljb:'II',
          sjhljb:'102100',
          syjhlmc:'黄江',
          hllength:'10000km',
          lymj:'1000km2',
          liujing:'长江',
          sscity:'广西',
          sslusx:'淡水',
          pjsj:'20200123',
          pjsz:'评价水质',

        },
        {
          hlbm:'10923',
          hlmc:'黄江',
          hmbz:'备注',
          hljb:'III',
          sjhljb:'102100',
          syjhlmc:'丽江',
          hllength:'10000km',
          lymj:'1000km2',
          liujing:'长江',
          sscity:'广西',
          sslusx:'淡水',
          pjsj:'20200123',
          pjsz:'评价水质',

        },
        {
          hlbm:'10923',
          hlmc:'柳江',
          hmbz:'备注',
          hljb:'I',
          sjhljb:'102100',
          syjhlmc:'黄江',
          hllength:'10000km',
          lymj:'1000km2',
          liujing:'长江',
          sscity:'广西',
          sslusx:'淡水',
          pjsj:'20200123',
          pjsz:'评价水质',

        }

      ]
    }

    /*  let checkstartTime = moment(this.startTime).format("YYYYMM");
      let startyear = moment(this.startTime).format("YYYY");
      let checkendTime = moment(this.endTime).format("YYYYMM");
      let endyear = moment(this.endTime).format("YYYY");
      let startMonth = checkstartTime.substring(checkstartTime.length - 2);
      let endMonth = checkendTime.substring(checkendTime.length - 2);
      var str = "";
      var count = parseInt(endMonth) - parseInt(startMonth);
      for (var i = parseInt(startMonth); i < count; i++) {
        var tmp = i + 1;
        tmp = tmp < 10 ? String("0" + tmp) : tmp;
        str = str + startyear + tmp + "-";
      }
      str = str + checkendTime;
      console.log(str);
      let tjsj = null;
      if (this.selectTimeType == "singletime") {
        tjsj = checkstartTime;
      } else {
        tjsj = str;
      }
      var param = {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
        qzfs: this.qzfsval, // min max avg
        tjsj: tjsj
      };
      this.tableData = [];
      /!*矿化度请求*!/
      let url =
        "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/base/listswmsar";
      /!*http请求*!/
      this.$http
        .post(url, JSON.stringify(param), {
          emulateJSON: true
        })
        .then(function(res) {
          // alert("chenggong")
          console.log(res);
          this.tableData = res.body.data.pageResultList;
        })
        .catch(function(res) {});
    }*/
  },
  mounted() {
    this.queryTableData()
  },
  watch: {
   queryProject:{
     handler(newvalue,oldvalue){
       if(newvalue == '1'){
         this.displayContentList = this.information
       }else if(newvalue == '2' || newvalue == '3'){
         this.displayContentList = this.waterQuality
       }
     }
   }
  }
};
</script>

<style scoped>
@import "../../../static/css/public.css";
</style>
