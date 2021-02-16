<template>
<!--对流扩散主页面-->
  <div class="convectiveDiffusion">
    <div class="convectiveDiffusion_left">
      <div class="singleli_title">
        <el-row>
          <el-col :span="8">
            <div class="sysfxTit">
              缩放倍数
            </div>
          </el-col>
          <el-col :span="14">
            <div>
              <el-input
                style="width:196px"
                v-model="DispersionFactor"
                placeholder="请输入内容"
              ></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-table
        border
        :data="tableData"
        style="background-color: transparent; height: 480px;"
        :cell-class-name="getRowColumn"
        @cell-click="handleCellClick"
      >
        <el-table-column prop="ComponentName" label="组分" align="center">
          <template slot-scope="scope">
            <el-input
              v-if="
                scope.row.index === tabRowIndex &&
                  scope.column.index === tabColumnIndex
              "
              v-model="scope.row.ComponentName"
              @blur="inputBlur"
            ></el-input>
            <span v-else>{{ scope.row.ComponentName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="DecayValue"
          label="降解系数（I/day）"
          align="center"
        >
          <template slot-scope="scope">
            <el-input
              v-if="
                scope.row.index === tabRowIndex &&
                  scope.column.index === tabColumnIndex
              "
              v-model="scope.row.DecayValue"
              @blur="inputBlur"
            ></el-input>
            <span v-else>{{ scope.row.DecayValue }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="convectiveDiffusion_right">
      <el-table
        :data="convectionTable"
        border
        style="width: 100%;background-color: transparent;margin-top: 50px;height:445px"
      >
        <el-table-column prop="indicator" label="指标"></el-table-column>
        <el-table-column prop="minmum" label="最大值（I/d）"></el-table-column>
        <el-table-column prop="maxmum" label="最小值（I/d）"></el-table-column>
      </el-table>
      <div class="pages">
        <el-button type="primary" size="small" plain @click="saveClick"
          >保存</el-button
        >
        <el-button type="primary" size="small" plain>计算</el-button>
        <el-button type="primary" size="small" plain>查看结果</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import convectionTable from "./Table.js";
export default {
  data() {
    return {
      DispersionFactor: "",
      DecayByComponentList: "",
      tabRowIndex: null, //单元格横坐标
      tabColumnIndex: null, //单元格纵坐标
      tableData: [],
      roughnessTable: [],
      tableValue: [],
      convectionTable: []
    };
  },
 mounted() {
    this.getTableData();
    this.convectionTable = convectionTable.convectionTable;
  },
  methods: {
    //获取表格数据
    getTableData() {
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetDispersionAndDecayInfo?scenarioCode=DHJKTXRCFA";
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          this.tableData = data.DecayByComponentList;
          this.DispersionFactor = data.DispersionFactor;
        });
    },
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
    //鼠标失去焦点事件
    inputBlur() {
      this.tabRowIndex = null;
      this.tabColumnIndex = "";
    },
    //保存
    saveClick() {
      //使用some方法，用原来的值与现在的做对比，如果原来的与现在的相等，就满足条件
      var arrList = [];
      this.tableData.map(e => {
        var flag = this.tableValue.some(el => {
          if (e === el || JSON.stringify(e) === JSON.stringify(el)) {
            return arrList.push(e);
          }
        });
      });
      var testdata = {
        ScenarioCode: "DHJKTXRCFA",
        DispersionFactor: this.DispersionFactor,
        DecayByComponentList: arrList
      };
      var url =
        modelURL + "/api/GXRCWQ/ModelManager/UpdateDispersionAndDecayInfo";
      var _this = this;
      $.ajax({
        type: "post",
        dataType: "json",
        headers: { "Content-Type": "application/json" },
        url: url,
        data: JSON.stringify(testdata),
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
    }
  }
};
</script>
<style scoped>
@import "../../../../static/css/public.css";
</style>