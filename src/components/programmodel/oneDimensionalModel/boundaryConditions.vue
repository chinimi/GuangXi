<template>
  <!--边界条件主组件-->
  <div class="boundaryConditions">
    <div class="boundaryConditions_top">
      <div class="boundaryConditions_left">
        <div v-for="(item, index) in data" :key="index">
          <div
            class="data_info"
            @click="tap(item, index)"
            :style="
              (ModelSubType == 'Scenario' && item.name != '污染源') ||
              (ModelSubType == 'EmerMnt' && item.name != '水质边界')
                ? 'display: block;'
                : 'display: none;'
            "
          >
            <span>{{ item.name }}</span>
            <span
              v-if="item.id == 5"
              style="padding-left:50px"
              @click="addSourcePollution"
              ><i class="el-icon-plus"></i
            ></span>
            <i
              style="position: relative;float: right;right: 20px;top: 10px;"
              :class="
                item.info == true ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
              "
            ></i>
          </div>
          <ul
            class="list"
            :style="item.info == true ? 'display: block;' : 'display: none;'"
          >
            <li
              class="info"
              v-for="(i, inx) in item.data_name"
              :key="inx"
              :class="item.active == inx ? 'isactive' : ''"
              @click="tap_info(index, i, inx)"
            >
              {{ i.BoundaryName }}
              <span v-if="item.id == 5"
                ><i
                  class="el-icon-delete"
                  @click="deleteSourceInformation(index, i, inx)"
                ></i
              ></span>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="water">
        <div class="boundaryConditions_content">
          <div
            v-if="name == '水质边界'"
            class="singleli_title singleli_titles"
            style="margin-top:-39px"
          >
            <el-row>
              <el-col :span="9">
                <div class="sysfxTit">
                  选择组分：
                </div>
              </el-col>
              <el-col :span="13">
                <div>
                  <el-select v-model="component">
                    <el-option
                      v-for="(item, index) in componentList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="clear-fix">
            <el-table
              border
              :data="tableData"
              style="background-color: transparent;"
              height="450"
              :cell-class-name="getRowColumn"
              @cell-click="handleCellClick"
            >
              <el-table-column prop="DT" label="时间" align="center">
                <template slot-scope="scope">
                  <el-input
                    v-if="
                      scope.row.index === tabRowIndex &&
                        scope.column.index === tabColumnIndex
                    "
                    v-model="scope.row.DT"
                    @blur="inputBlur"
                  ></el-input>
                  <span v-else>{{ scope.row.DT }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="Value"
                :label="unit"
                align="center"
                width="130"
              >
                <template slot-scope="scope">
                  <el-input
                    v-if="
                      scope.row.index === tabRowIndex &&
                        scope.column.index === tabColumnIndex
                    "
                    v-model="scope.row.Value"
                    @blur="inputBlur"
                  ></el-input>
                  <span v-else>{{ scope.row.Value }}</span>
                </template>
              </el-table-column>
            </el-table>
            <div class="boundaryConditions_name">
              <el-button size="small" plain>
                <el-upload
                  style="width: 30px;height: 20px;margin-top: -12px;margin-left: -19px;"
                  class="upload-demo"
                  ref="upload"
                  action=""
                  :show-file-list="false"
                  :file-list="fileList"
                  :on-change="importFile"
                  accept=".xlsx"
                  :auto-upload="false"
                >
                  <el-button size="small" type="primary">上传</el-button>
                </el-upload></el-button
              >

              <el-button size="small" plain @click="downloadFile"
                >下载</el-button
              >
            </div>
          </div>
        </div>
        <div class="boundaryConditions_right">
          <div class="echarts_map">
            <div ref="echart" id="echartsLine" style="height:500px"></div>
          </div>
          <div class="boundaryConditions_bottom">
            <el-button size="small" plain @click="preserve">保存</el-button>
            <el-button size="small" plain>计算</el-button>
            <el-button size="small" plain>查看结果</el-button>
          </div>
        </div>
      </div>

      <!-- 污染源 -->
      <div v-if="sourcePollution">
        <div
          class="boundaryConditions_content"
          style="border: 1px solid #EBEEF5;padding-top:10px;"
        >
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  污染源名称：
                </div>
              </el-col>
              <el-col :span="9">
                <div>
                  <el-input
                    style="width:100px"
                    v-model="sourcePollutionName"
                    placeholder="请输入内容"
                    :disabled="inputDisabled"
                  ></el-input>
                </div>
              </el-col>
              <el-col :span="7" style="margin-left: -5%;">
                <div>
                  <el-button size="min" plain @click="activeLayerEvent"
                    >选点</el-button
                  >
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  降解系数：
                </div>
              </el-col>
              <el-col :span="14">
                <div>
                  <el-input
                    style="width:180px"
                    v-model="degradationCoefficient"
                    placeholder="请输入内容"
                    :disabled="inputDisabled"
                  ></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  坐标：
                </div>
              </el-col>
              <el-col :span="14">
                <div>
                  <el-input
                    style="width:180px"
                    v-model="coordinate"
                    placeholder="请输入内容"
                    disabled
                  ></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="singleli_title">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  河道里程：
                </div>
              </el-col>
              <el-col :span="14">
                <div>
                  <el-input
                    style="width:180px"
                    v-model="riverMiles"
                    placeholder="请输入内容"
                    disabled
                  ></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="boundaryConditions_right" style="border: 0">
          <el-button
            style="position:relative;bottom:3px;"
            type="primary"
            size="mini"
            @click="handleAdd"
            >新增</el-button
          >
          <el-table
            border
            :data="tableData"
            style="background-color: transparent;"
            height="450"
            :cell-class-name="getRowColumn"
            @cell-click="handleCellClick"
          >
            <el-table-column prop="DT" label="时间" align="center">
              <template slot-scope="scope">
                <el-input
                  v-if="
                    scope.row.index === tabRowIndex &&
                      scope.column.index === tabColumnIndex
                  "
                  v-model="scope.row.DT"
                  @blur="inputBlur"
                ></el-input>
                <span v-else>{{ scope.row.DT }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="Discharge"
              label="流量（m³/s）"
              align="center"
              width="130"
            >
              <template slot-scope="scope">
                <el-input
                  v-if="
                    scope.row.index === tabRowIndex &&
                      scope.column.index === tabColumnIndex
                  "
                  v-model="scope.row.Discharge"
                  @blur="inputBlur"
                ></el-input>
                <span v-else>{{ scope.row.Discharge }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="Concentration"
              label="浓度（mg/L）"
              align="center"
              width="130"
            >
              <template slot-scope="scope">
                <el-input
                  v-if="
                    scope.row.index === tabRowIndex &&
                      scope.column.index === tabColumnIndex
                  "
                  v-model="scope.row.Concentration"
                  @blur="inputBlur"
                ></el-input>
                <span v-else>{{ scope.row.Concentration }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="100">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- <div class="boundaryConditions_name">
                <el-button size="small" plain>上传</el-button>
                <el-button size="small" plain>下载</el-button>
              </div> -->
          <div class="boundaryConditions_bottom">
            <el-button size="small" plain @click="preserveSourceInformation"
              >保存</el-button
            >
            <el-button size="small" plain>计算</el-button>
            <el-button size="small" plain>查看结果</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sourcePollutionName: "", //污染源名称
      degradationCoefficient: "", //降解系数
      coordinate: "", //坐标
      riverMiles: "", //河道里程
      component: "",
      componentList: [], //组分
      water: true,
      sourcePollution: false,
      inputDisabled: true,
      tableData: [],
      active: -1,
      unit: "流量（m³/s）",
      data: [
        {
          name: "流量边界",
          info: false,
          id: 1,
          data_name: [],
          active: -1
        },
        {
          name: "水位边界",
          info: false,
          id: 2,
          data_name: [],
          active: -1
        },
        {
          name: "水质边界",
          info: false,
          id: 3,
          data_name: [],
          active: -1
        },
        {
          name: "降雨站",
          info: false,
          id: 4,
          data_name: [],
          active: -1
        },
        {
          name: "污染源",
          info: false,
          id: 5,
          data_name: [],
          active: -1
        }
      ],
      DischargeItems: [], //流量边界
      WaterLevelItems: [], //水位边界
      WaterQualityItems: [], //水质边界
      RainfallItems: [], //降雨站
      PollutionSourceItems: [], //污染源
      componentName: "",
      name: "",
      ScenarioCode: "", //方案编码
      boundaryId: "",
      tabRowIndex: null, //单元格横坐标
      tabColumnIndex: null, //单元格纵坐标
      tableValue: [],
      lonValue: null,
      latValue: null,
      mapClick: null,
      BranchName: "",
      Chainage: "",
      Title: "",
      ModelSubType: "", //方案类型
      boundaryType: "",
      fileList: [],
      isConfirm: true
    };
  },
  methods: {
    //点击单元格得到横纵坐标
    handleCellClick(row, column, event, cell) {
      this.tabRowIndex = row.index;
      this.tabColumnIndex = column.index;
      this.tableValue.push(row);
    },
    //数据中没有横纵坐标需要加上进行下一步判断
    getRowColumn({ row, column, rowIndex, columnIndex }) {
      row.index = rowIndex;
      column.index = columnIndex;
    },
    inputBlur() {
      this.tabRowIndex = null;
      this.tabColumnIndex = "";
    },
    tap(item, index) {
      this.name = item.name;
      if (item.name == "流量边界") {
        this.data[index].data_name = this.DischargeItems;
        this.unit = "流量（m³/s）";
        this.componentName = "";
        this.tableData = [];
        this.boundaryType = "Discharge";
      } else if (item.name == "水位边界") {
        this.data[index].data_name = this.WaterLevelItems;
        this.unit = "水位（m）";
        this.componentName = "";
        this.tableData = [];
        this.boundaryType = "WaterLevel";
      } else if (item.name == "水质边界") {
        this.data[index].data_name = this.WaterQualityItems;
        this.unit = "氨氮（mg/L）";
        this.getComponentData();
        this.boundaryType = "WaterQuality";
      } else if (item.name == "降雨站") {
        this.data[index].data_name = this.RainfallItems;
        this.unit = "降雨量（mm）";
        this.componentName = "";
        this.tableData = [];
        this.boundaryType = "Rainfall";
      } else if (item.name == "污染源") {
        this.data[index].data_name = this.PollutionSourceItems;
        this.sourcePollution = true;
        this.componentName = "";
        this.tableData = [];
      }
      if (item.name != "污染源") {
        this.water = true;
        this.sourcePollution = false;
      } else {
        this.water = false;
        this.sourcePollution = true;
      }
      if (item.info == false) {
        this.data[index].info = true;
      } else if (item.info == true) {
        //当状态点击关闭时候清除数组与传参
        this.data[index].info = false;
        // 清除状态
        this.data[index].active = "-1";
      }
    },
    //获取数据
    getTableData() {
      if (this.$route.params.value != undefined) {
        this.ScenarioCode = this.$route.params.value.ScenarioCode;
        var url =
          modelURL +
          "/api/GXRCWQ/ModelManager/GetBoundaryInfoList?scenarioCode=" +
          this.ScenarioCode;
        fetch(url)
          .then(respose => {
            return respose.json();
          })
          .then(data => {
            this.DischargeItems = data.DischargeItems;
            this.WaterLevelItems = data.WaterLevelItems;
            this.WaterQualityItems = data.WaterQualityItems;
            this.RainfallItems = data.RainfallItems;
            this.PollutionSourceItems = data.PollutionSourceItems;
          });
      }
    },
    //新增
    handleAdd() {
      let row = {
        DT: "",
        Discharge: "",
        Concentration: ""
      };
      this.tableData.unshift(row);
    },
    //删除
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    tap_info(index, item, e) {
      // 赋值状态
      this.data[index].active = e;
      this.boundaryId = item.BoundaryId;
      this.Title = item.BoundaryName;
      if (this.$route.params.value != undefined) {
        this.ScenarioCode = this.$route.params.value.ScenarioCode;
        if (
          this.name == "流量边界" ||
          this.name == "水位边界" ||
          this.name == "降雨站"
        ) {
          var url =
            modelURL +
            "/api/GXRCWQ/ModelManager/GetBoundaryTSData?scenarioCode=" +
            this.ScenarioCode +
            "&boundaryId=" +
            this.boundaryId +
            "&componentName=" +
            this.componentName;
          fetch(url)
            .then(respose => {
              return respose.json();
            })
            .then(data => {
              this.tableData = data;
              if (this.name != "降雨站") {
                this.drawLine(data);
              } else {
                this.drawBar(data);
              }
            });
        }
        if (this.name == "污染源") {
          this.inputDisabled = false;
          var url =
            modelURL +
            "/api/GXRCWQ/ModelManager/GetPollutionBoundaryInfo?scenarioCode=" +
            this.ScenarioCode +
            "&sourceName=" +
            this.boundaryId;
          fetch(url)
            .then(respose => {
              return respose.json();
            })
            .then(data => {
              this.sourcePollutionName = data.SourceName;
              this.degradationCoefficient = data.DecayCoefficient;
              this.coordinate = data.X + "," + data.Y;
              this.riverMiles =
                data.BranchName + "," + data.Chainage.toFixed(1);
              this.tableData = data.TSData;
            });
        }
      }
    },
    //删除污染源
    deleteSourceInformation(index, item, e) {
      this.data[index].data_name.splice(e, 1);
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/DeletePollutionBoundaryInfo?scenarioCode=" +
        this.ScenarioCode +
        "&sourceName=" +
        item.BoundaryId;
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          if (data != false) {
            this.$message({
              message: "删除成功",
              type: "success"
            });
          } else {
            this.$message.error("删除失败");
          }
        });
    },
    //获取组分数据
    getComponentData() {
      this.componentList = [];
      if (this.$route.params.value != undefined) {
        this.ScenarioCode = this.$route.params.value.ScenarioCode;
        var url =
          modelURL +
          "/api/GXRCWQ/ModelManager/GetComponentInfoList?scenarioCode=" +
          this.ScenarioCode;
        fetch(url)
          .then(respose => {
            return respose.json();
          })
          .then(data => {
            data.forEach((item, index) => {
              var obj = {
                value: item,
                label: item
              };
              this.componentList.push(obj);
            });
          });
      }
    },
    //保存
    preserve() {
      //使用some方法，用原来的值与现在的做对比，如果原来的与现在的相等，就满足条件
      this.ScenarioCode = this.$route.params.value.ScenarioCode;
      var arrList = [];
      this.tableData.map(e => {
        var flag = this.tableValue.some(el => {
          if (e === el || JSON.stringify(e) === JSON.stringify(el)) {
            return arrList.push(e);
          }
        });
      });
      var obj = {
        ScenarioCode: this.ScenarioCode,
        BoundaryId: this.boundaryId,
        ComponentName: this.componentName,
        TSData: arrList
      };
      var url = modelURL + "/api/GXRCWQ/ModelManager/UpdateBoundaryInfo";
      var _this = this;
      $.ajax({
        type: "post",
        dataType: "json",
        headers: { "Content-Type": "application/json" },
        url: url,
        data: JSON.stringify(obj),
        success: function(data) {
          if (data != false) {
            _this.$message({
              message: "保存成功",
              type: "success"
            });
            _this.sourcePollutionName = "";
            _this.degradationCoefficient = "";
            _this.coordinate = "";
            _this.riverMiles = "";
          } else {
            _this.$message.error("保存失败");
          }
        },
        error: function(data) {
          console.log("error" + data);
        }
      });
    },
    //保存污染源信息
    preserveSourceInformation() {
      var val = {
        BoundaryId: this.sourcePollutionName,
        BoundaryName: this.sourcePollutionName
      };
      this.PollutionSourceItems.push(val);

      //使用some方法，用原来的值与现在的做对比，如果原来的与现在的相等，就满足条件
      this.ScenarioCode = this.$route.params.value.ScenarioCode;
      var arrList = [];
      this.tableData.map(e => {
        var flag = this.tableValue.some(el => {
          if (e === el || JSON.stringify(e) === JSON.stringify(el)) {
            return arrList.push(e);
          }
        });
      });
      var obj = {
        ScenarioCode: this.ScenarioCode,
        SourceName: this.sourcePollutionName,
        BranchName: this.BranchName,
        Chainage: this.Chainage,
        X: this.lonValue,
        Y: this.latValue,
        DecayCoefficient: this.degradationCoefficient,
        TSData: arrList
      };
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/UpdateAndCreatePollutionBouncaryInfo";
      var _this = this;
      $.ajax({
        type: "post",
        dataType: "json",
        headers: { "Content-Type": "application/json" },
        url: url,
        data: JSON.stringify(obj),
        success: function(data) {
          if (data != false) {
            _this.$message({
              message: "保存成功",
              type: "success"
            });
          } else {
            _this.$message.error("保存失败");
          }
        },
        error: function(data) {
          console.log("error" + data);
        }
      });
    },
    //选点
    activeLayerEvent() {
      this.inputDisabled = false;
      this.createMap();
    },
    createMap() {
      var _this = this;
      this.mapClick = map.on("singleclick", function(e) {
        console.log(e.coordinate);
        var feature = new ol.Feature({
          labelPoint: new ol.geom.Point(e.coordinate),
          name: "My Polygon"
        });
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            radius: 6,
            fill: new ol.style.Fill({ color: "blue" })
          })
        });
        feature.setStyle(style);
        var vectorSource = new ol.layer.Vector({
          source: new ol.source.Vector({
            feature: [feature]
          })
        });
        map.addLayer(vectorSource);
        _this.lonValue = e.coordinate[0].toFixed(2);
        _this.latValue = e.coordinate[1].toFixed(2);
        _this.coordinate = _this.lonValue + "," + _this.latValue;
        let url =
          modelURL +
          "/api/GXRCWQ/ModelManager/GetLocationByXY?scenarioCode=DHJKTXRCFA&x=" +
          _this.lonValue +
          "&y=" +
          _this.latValue;
        fetch(url)
          .then(function(res) {
            return res.json();
          })
          .then(function(data) {
            _this.BranchName = data.BranchName;
            _this.Chainage = data.Chainage;
            _this.riverMiles = data.BranchName + "," + data.Chainage.toFixed(1);
          });
      });
    },
    //上传文件
    async importFile(file) {
      let formData = new FormData();
      formData.append("scenarioCode", this.ScenarioCode);
      formData.append("boundaryType", this.boundaryType);
      formData.append("docFile", file.raw);
      console.log(formData);
      if (!this.isConfirm) {
        this.isConfirm = true;
        return;
      }
      const isSubmit = await this.$confirm("是否继续上传文件?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var _this = this;
          var url =
            modelURL +
            "/api/GXRCWQ/ModelManager/UploadScenairoBoundaryTSExcelFile";
          $.ajax({
            type: "post",
            dataType: "json",
            processData: false, // 使数据不做处理
            contentType: false, // 不要设置Content-Type请求头
            // contentType:"application/x-www-form-urlencoded",
            url: url,
            data: formData,
            success: function(data) {
              if (data != false) {
                _this.$message({
                  message: "上传成功",
                  type: "success"
                });
              } else {
                _this.$message.error("上传失败");
              }
            },
            error: function(data) {}
          });

          return false;
        })
        .catch(() => {
          return true;
        });
      if (isSubmit) {
        this.$refs.upload.submit();
        this.isConfirm = false;
      } else {
        this.fileList = [];
      }
    },
    //文件下载
    downloadFile() {
      if (this.$route.params.value != undefined) {
        this.ScenarioCode = this.$route.params.value.ScenarioCode;
        var url =
          modelURL +
          "/api/GXRCWQ/ModelManager/DownloadScenairoBoundaryTSExcelFile?scenarioCode=" +
          this.ScenarioCode +
          "&boundaryType=" +
          this.boundaryType;
        window.location.href = url;
      }
    },

    //折线图
    drawLine(data) {
      var xAxisData = [];
      var yAxisData = [];
      data.forEach((item, index) => {
        console.log(item);
        xAxisData.push(item.DT.substr(0, 10));
        yAxisData.push(item.Value);
      });
      // var myChart = this.$echarts.init(document.getElementById('echartsLine'));

      var myChart = this.$echarts.init(this.$refs.echart);

      // 基于准备好的dom，初始化echarts实例
      myChart.setOption({
        //设置canvas内部表格的内距
        tooltip: {},
        title: {
          left: "center",
          text: this.Title
        },
        xAxis: {
          type: "category",
          data: xAxisData,
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        },
        yAxis: {
          type: "value"
        },
        //     dataZoom: [{
        //     type: 'inside',
        //     start: 0,
        //     end: 5
        // }, {
        //     start: 0,
        //     end: 5
        // }],
        series: [
          {
            data: yAxisData,
            type: "line",
            smooth: true
          }
        ]
      });
    },
    //柱状图
    drawBar(data) {
      var xAxisData = [];
      var yAxisData = [];
      data.forEach((item, index) => {
        console.log(item);
        xAxisData.push(item.DT.substr(0, 10));
        yAxisData.push(item.Value);
      });
      var myChart = this.$echarts.init(this.$refs.echart);
      // 基于准备好的dom，初始化echarts实例
      myChart.setOption({
        title: {
          left: "center",
          text: this.Title
        },
        xAxis: {
          type: "category",
          data: xAxisData,
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: yAxisData,
            type: "bar"
          }
        ]
      });
    },
    //添加污染源
    addSourcePollution() {
      this.inputDisabled = false;
    }
  },
  computed: {},
  mounted() {
    this.getTableData();
    // 拿到的参数
    if (this.$route.params.value != undefined) {
      this.ModelSubType = this.$route.params.value.ModelSubType;
    }
  },
  watch: {
    //监听水质边界组分
    component: {
      handler(newvalue, oldvalue) {
        this.componentName = newvalue;
        var url =
          modelURL +
          "/api/GXRCWQ/ModelManager/GetBoundaryTSData?scenarioCode=" +
          this.ScenarioCode +
          "&boundaryId=" +
          this.boundaryId +
          "&componentName=" +
          newvalue;
        fetch(url)
          .then(respose => {
            return respose.json();
          })
          .then(data => {
            this.tableData = data;
            this.drawLine(data);
          });
      }
    }
  }
};
</script>
<style scoped>
@import "../../../../static/css/public.css";
</style>
