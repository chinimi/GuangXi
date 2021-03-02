<template>
  <!--模板管理主页面-->
  <div class="oneDimensionalModel">
    <div class="Model" v-if="slideDown">
      <ul class="clear-fix Model_ul">
        <li :class="[TapType == '1' ? 'csourer' : '']" @click="TapSwitch(1)">
          模板管理
        </li>
        <li>
          <div class="butt_close" @click="header(1)">
            <img src="../../../../static/images/close.png" alt="" />
          </div>
        </li>
      </ul>
      <div class="Model_text">
        <div class="programmePreparation_left">
          <ul class="clear-fix programmePreparation_ul">
            <li :class="[Type == '1' ? 'csour' : '']" @click="TapTypes(1)">
              行政分区
            </li>
            <li :class="[Type == '2' ? 'csour' : '']" @click="TapTypes(2)">
              流域分区
            </li>
            <li :class="[Type == '3' ? 'csour' : '']" @click="TapTypes(3)">
              水资源分区
            </li>
          </ul>
          <div class="administrativeDivisions_left">
            <div v-show="Type == '1'">
              <div class="singleli_title">
                <el-row>
                  <el-col :span="9">
                    <div class="sysfxTit">
                      省：
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div>
                      <el-select v-model="province">
                        <el-option
                          v-for="(item, index) in provinceList"
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
                      市：
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div>
                      <el-select v-model="city">
                        <el-option
                          v-for="(item, index) in cityList"
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
                      县：
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div>
                      <el-select v-model="county">
                        <el-option
                          v-for="(item, index) in countyList"
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
                      镇：
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div>
                      <el-select v-model="town">
                        <el-option
                          v-for="(item, index) in townList"
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
                      村：
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div>
                      <el-select v-model="rustic">
                        <el-option
                          v-for="(item, index) in rusticList"
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
            <div v-show="Type == '2'">
              <div class="singleli_title">
                <el-row>
                  <el-col :span="9">
                    <div class="sysfxTit">
                      流域：
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div>
                      <el-select v-model="drainageBasin">
                        <el-option
                          v-for="(item, index) in drainageBasinList"
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
                      水系：
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div>
                      <el-select v-model="basin">
                        <el-option
                          v-for="(item, index) in basinList"
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
                      一级河流：
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div>
                      <el-select v-model="firstOrderStream">
                        <el-option
                          v-for="(item, index) in firstOrderStreamList"
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
                      二级河流：
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div>
                      <el-select v-model="secondOrderStream">
                        <el-option
                          v-for="(item, index) in secondOrderStreamList"
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
            <div v-show="Type == '3'">
              <div class="singleli_title">
                <el-row>
                  <el-col :span="9">
                    <div class="sysfxTit">
                      一级分区：
                    </div>
                  </el-col>
                  <el-col :span="13">
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
              <div class="singleli_title">
                <el-row>
                  <el-col :span="9">
                    <div class="sysfxTit">
                      二级分区：
                    </div>
                  </el-col>
                  <el-col :span="13">
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
              <div class="singleli_title">
                <el-row>
                  <el-col :span="9">
                    <div class="sysfxTit">
                      三级分区：
                    </div>
                  </el-col>
                  <el-col :span="13">
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
              <div class="singleli_title">
                <el-row>
                  <el-col :span="9">
                    <div class="sysfxTit">
                      四级分区：
                    </div>
                  </el-col>
                  <el-col :span="13">
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
              <div class="singleli_title">
                <el-row>
                  <el-col :span="9">
                    <div class="sysfxTit">
                      五级分区：
                    </div>
                  </el-col>
                  <el-col :span="13">
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
            </div>
            <div>
              <el-button
                style="float:right;right: 20px;position: relative;"
                type="primary"
                size="small"
                plain
                >查找</el-button
              >
            </div>
          </div>
        </div>
        <div class="programmePreparation_right">
          <div class="Divisions">
            <el-button type="primary" size="small" plain>上传模板</el-button>
            <div style="display: inline-block;margin-left:20px">
              <el-checkbox-group v-model="dimension">
                <el-checkbox
                  v-for="(item, index) in dimensionList"
                  :key="item.value"
                  :label="item.value"
                  >{{ item.label }}</el-checkbox
                >
              </el-checkbox-group>
            </div>
          </div>
          <div>
            <el-table
              border
              :data="tableData"
              height="460"
              style="background-color: transparent;margin: 10px 0px"
            >
              <el-table-column prop="tab1" label="序号" width="70" type="index">
              </el-table-column>
              <el-table-column
                prop="ScenarioCode"
                label="模板编码"
                min-width="100"
              >
              </el-table-column>
              <el-table-column
                prop="ScenarioName"
                label="模板名称"
                min-width="100"
              >
              </el-table-column>
              <el-table-column
                prop="CreateTime"
                label="创建时间"
                min-width="100"
              >
              </el-table-column>
              <el-table-column
                prop="RiverGrade1_ZoneName"
                label="一级流域分区"
                min-width="150"
              >
              </el-table-column>
              <el-table-column
                prop="RiverGrade2_ZoneName"
                label="二级流域分区"
                min-width="150"
              >
              </el-table-column>
              <el-table-column
                prop="District_ZoneName"
                label="行政分区（市）"
                min-width="150"
              >
              </el-table-column>
              <el-table-column
                prop="WaterResource_ZoneName"
                label="水资源分区"
                min-width="130"
              >
              </el-table-column>
              <el-table-column
                prop="RiverChief_ZoneName"
                label="所属河长"
                min-width="100"
              >
              </el-table-column>
              <el-table-column label="操作" min-width="300">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleLook(scope.$index, scope.row)"
                    >下载</el-button
                  >
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >修改</el-button
                  >
                  <el-button
                    size="mini"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pages">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <div class="header_true" v-if="!slideDown">
      <div class="header_shangla_div" @click="header(2)">
        <img src="static/images/icon/chuangkou.png" alt="" />
        方案管理窗口
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      TapType: 1,
      Type: 1,
      slideDown: true,
      //行政分区
      province: "",
      provinceList: [],
      city: "",
      cityList: [],
      county: "",
      countyList: [],
      town: "",
      townList: [],
      rustic: "",
      rusticList: [],
      //流域分区
      drainageBasin: "",
      drainageBasinList: [],
      basin: "",
      basinList: [],
      firstOrderStream: "",
      firstOrderStreamList: [],
      secondOrderStream: "",
      secondOrderStreamList: [],
      //水资源分区
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
      dimension: ["1", "2"],
      dimensionList: [
        { label: "一维", value: "1" },
        { label: "二维", value: "2" }
      ],

      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      //
      cusParam:'',//空
    };
  },
  methods: {
    //获取表格数据
    getTableData( ) {
        if(this.cusParam!==''){
        var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetTemplateInfoList?scenarioType="+this.cusParam;
       }else{
        var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetTemplateInfoList?scenarioType=''";

       }

      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          this.tableData = data;
        });
    },
    // 增加显示隐藏
    header(id) {
      if (id == "1") {
        this.slideDown = false;
      } else {
        this.slideDown = true;
      }
    },
    TapSwitch(id) {
      this.TapType = id;
    },
    TapTypes(id) {
      this.Type = id;
    },
    handleLook(index, row) {
      console.log(index, row);
    },
    handleEdit(index, row) {},
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    filterArr(a, b) {
      var temArr;
      temArr = a.concat(b).filter(function(v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v);
      });
      return temArr[0];
    }
  },
  computed: {},
  mounted() {
    this.getTableData();
  },
  watch: {
    dimension: {
      handler(newvalue, oldvalue) {
         this.tableData = []
         if (newvalue.indexOf("1") != -1){
          this.cusParam= 'MIKE11Model'
         }
         if(newvalue.indexOf("2") != -1){
           this.cusParam= 'MIKE21FMModel'
         }
        if(newvalue.length == 2){
             this.cusParam= ''
        }
        if(newvalue.length == 0){
             this.cusParam= ''
        }
        this.getTableData()
      }
    }
  }
};
</script>
<style scoped>
@import "../../../../static/css/public.css";
</style>
