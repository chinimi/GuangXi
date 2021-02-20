<template>
  <!-- 水质报告 -->
  <div class="informationLnquiry">
    <div class="informationLnquiry_title">
      <div>水质报告</div>
    </div>
    <div class="informationLnquiry_content">
      <div class="left_menu">
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
                省级行政区：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
              <div>
                <el-select v-model="provincialDistrict">
                  <el-option
                    v-for="(item, index) in provincialDistrictList"
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
                市级行政区：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
              <div>
                <el-select v-model="cityDistrict">
                  <el-option
                    v-for="(item, index) in cityDistrictList"
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
                县级行政区：
              </div>
            </el-col>
            <el-col :span="13" style="margin-left: -5%;">
              <div>
                <el-select v-model="countyDistrict">
                  <el-option
                    v-for="(item, index) in countyDistrictList"
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
      <!--table表格-->
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
            prop="stcd"
            label="发布时间"
            width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="stcd"
            label="文件名"
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
  name: "waterQualityReport",
  data() {
    return {
      currentPage: 1, //当前页
      pageSize: 10, //当前页显示的条数
      tableData: [],
      provincialDistrict: "", //省级行政区
      provincialDistrictList: [],
      cityDistrict: "", //市级行政区
      cityDistrictList: [],
      countyDistrict: "", //县级行政区
      countyDistrictList: [],
      /*自定义*/
      customdefine: "默认分组",
      customdefineList: [],
      /*查询项目*/
      queryProject: "1",
      queryProjectList: [
        {
          label: "水质类别",
          value: "1"
        },
        {
          label: "水质目标",
          value: "2"
        },
        {
          label: "达修情况",
          value: "3"
        }
      ],
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
      pjbcVal: "year", //评价步长
      pjbcOption: [
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
      let checkstartTime = moment(this.startTime).format("YYYYMM");
      let startyear = moment(this.startTime).format("YYYY");
      let checkendTime = moment(this.endTime).format("YYYYMM");
      let endyear = moment(this.endTime).format("YYYY");
      console.log(checkstartTime);
      console.log(startyear);
      console.log(checkstartTime.substring(checkstartTime.length - 2));
      let startMonth = checkstartTime.substring(checkstartTime.length - 2);
      console.log(checkendTime);
      console.log(endyear);
      console.log(checkendTime.substring(checkendTime.length - 2));
      let endMonth = checkendTime.substring(checkendTime.length - 2);
      console.log(parseInt(endMonth) - parseInt(startMonth));
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
      /*矿化度请求*/
      let url =
        "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/base/listswmsar";
      /*http请求*/
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
    }
  },
  watch: {
    pjxmval(newValue) {
      this.tableData = [];
    }
  }
};
</script>

<style scoped>
@import "../../../static/css/public.css";
</style>
