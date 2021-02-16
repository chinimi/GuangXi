<template>
  <!--生态主组件-->
  <div class="zoology">
    <el-table
      border
      :data="tableData"
      height="485"
      style="background-color: transparent;"
      :cell-class-name="getRowColumn"
      @cell-click="handleCellClick"
    >
      <el-table-column prop="num" label="序号" min-width="60">
      </el-table-column>
      <el-table-column prop="descriptor" label="描述信息" min-width="150">
      </el-table-column>
      <el-table-column prop="unit" label="单位" min-width="100">
      </el-table-column>
      <el-table-column prop="value" label="值" min-width="80">
        <template slot-scope="scope">
          <el-input
            v-if="
              scope.row.index === tabRowIndex &&
                scope.column.index === tabColumnIndex
            "
            v-model="scope.row.value"
            @blur="inputBlur"
          ></el-input>
          <span v-else>{{ scope.row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="序号" min-width="60">
      </el-table-column>
      <el-table-column prop="descriptor1" label="描述信息" min-width="150">
      </el-table-column>
      <el-table-column prop="unit1" label="单位" min-width="100">
      </el-table-column>
      <el-table-column prop="value1" label="值" min-width="80">
        <template slot-scope="scope">
          <el-input
            v-if="
              scope.row.index === tabRowIndex &&
                scope.column.index === tabColumnIndex
            "
            v-model="scope.row.value1"
            @blur="inputBlur"
          ></el-input>
          <span v-else>{{ scope.row.value1 }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div style="float: right;margin-top: 14px;">
      <el-button type="primary" size="small" plain @click="saveClick"
        >保存</el-button
      >
      <el-button type="primary" size="small" plain>计算</el-button>
      <el-button type="primary" size="small" plain>查看结果</el-button>
    </div>
  </div>
</template>
<script>
import zoologyTableData from "./Table.js";
export default {
  components: {},
  data() {
    return {
      tabRowIndex: null, //单元格横坐标
      tabColumnIndex: null, //单元格纵坐标
      tableData: [],
      roughnessTable: [],
      tableValue: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  computed: {},
  mounted() {
    this.tableData = zoologyTableData.zoologyTableData;
    this.getTableData();
  },
  methods: {
    //获取表格数据
    getTableData() {
      var that = this;
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetEcolabConstantInfo?scenarioCode=DHJKTXRCFA";
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          var data = data.ItemList;
          var arr = [];
          for (var i = 0; i < data.length; i++) {
            arr.push(data[i].ConstantItem);
          }
          var dataVal = arr.slice(0, 10);
          var dataValue = arr.slice(10, 20);
          for (var i = 0; i < that.tableData.length; i++) {
            that.tableData[i].value = dataVal[i];
            that.tableData[i].value1 = dataValue[i];
          }
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
      var arrvalue = [];
      var arrValue1 = [];
      var ItemList = [];
      this.tableData.map(e => {
        arrvalue.push(e.value);
        arrValue1.push(e.value1);
      });
      var arrList = arrvalue.concat(arrValue1);
      arrList.map(e => {
        var data = {
          ConstantItem: e
        };
        ItemList.push(data);
      });
      var testdata = {
        ItemList: ItemList,
        ScenarioCode: "DHJKTXRCFA"
      };
      var url = modelURL + "/api/GXRCWQ/ModelManager/UpdateEcolabConstantInfo";
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
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  watch: {}
};
</script>
<style scoped>
@import "../../../../static/css/public.css";
</style>
