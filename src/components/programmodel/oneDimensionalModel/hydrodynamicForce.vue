<template>
  <!--水动力主组件-->
  <div class="hydrodynamicForce">
    <div class="hydrodynamicForce_left">
      <div class="singleli_title">
        <el-row>
          <el-col :span="8">
            <div class="sysfxTit">
              糙率全局值（n）
            </div>
          </el-col>
          <el-col :span="12">
            <el-input
              style="width:196px"
              v-model="ResistanceNumber"
              placeholder="请输入内容"
            ></el-input>
          </el-col>
          <el-col :span="4">
             <el-button
              style="position: relative;"
              type="primary"
              size="mini"
              @click="handleAdd"
              >新增</el-button>
          </el-col>
        </el-row>
      </div>
      <el-table
          border
          :data="tableData"
          style="background-color: transparent;height:480px;"
          :cell-class-name="getRowColumn"
          @cell-click="handleCellClick"
        >
          <el-table-column
            prop="BranchNameCN"
            label="河道中文"
            align="center"
          >
            <template slot-scope="scope">
              <el-input
                v-if="
                  scope.row.index === tabRowIndex &&
                    scope.column.index === tabColumnIndex
                "
                v-model="scope.row.BranchNameCN"
                @blur="inputBlur"
              ></el-input>
              <span v-else>{{ scope.row.BranchNameCN }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="BranchName" label="河道ID" align="center">
            <template slot-scope="scope">
              <el-input
                v-if="
                  scope.row.index === tabRowIndex &&
                    scope.column.index === tabColumnIndex
                "
                v-model="scope.row.BranchName"
                @blur="inputBlur"
              ></el-input>
              <span v-else>{{ scope.row.BranchName }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="Chainage" label="里程" align="center">
            <template slot-scope="scope">
              <el-input
                v-if="
                  scope.row.index === tabRowIndex &&
                    scope.column.index === tabColumnIndex
                "
                v-model="scope.row.Chainage"
                @blur="inputBlur"
              ></el-input>
              <span v-else>{{ scope.row.Chainage }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="ResistanceNumber"
            label="糙率值"
            align="center"
          >
            <template slot-scope="scope">
              <el-input
                v-if="
                  scope.row.index === tabRowIndex &&
                    scope.column.index === tabColumnIndex
                "
                v-model="scope.row.ResistanceNumber"
                @blur="inputBlur"
              ></el-input>
              <span v-else>{{ scope.row.ResistanceNumber }}</span>
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
    </div>
    <div class="hydrodynamicForce_right">
      <div class="title">天然河道糙率表</div>
      <div class="container_table">
        <el-table
        border
          :data="roughnessTable"
          style="width: 100%;background-color: transparent;height:445px;"
        >
          <el-table-column
            prop="date"
            label="河槽类型及情况"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="最小值"
            width="80"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="正常值"
            width="80"
          ></el-table-column>
          <el-table-column
            prop="max"
            label="最大值"
            width="80"
          ></el-table-column>
        </el-table>
      </div>
      <div class="pages">
        <el-button type="primary" size="small" plain @click="saveClick">保存</el-button>
        <el-button type="primary" size="small" plain>计算</el-button>
        <el-button type="primary" size="small" plain>查看结果</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import roughnessTableData from "./Table.js";
export default {
  data() {
    return {
      ResistanceNumber: "",
      tabRowIndex: null, //单元格横坐标
      tabColumnIndex: null, //单元格纵坐标
      tableData: [],
      roughnessTable: [],
      tableValue: [],
      ScenarioCode:'',//方案编码
    };
  },
  mounted() {
    this.roughnessTable = roughnessTableData.roughnessTableData;
    this.getTableData();
  },
  methods: {
    //获取表格数据
    getTableData() {
      this.ScenarioCode = this.$route.params.value.ScenarioCode
      var url =
        modelURL + "/api/GXRCWQ/ModelManager/GetHDInfo?scenarioCode="+this.ScenarioCode;
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          console.log(data.ResistanceLocalList);
          this.tableData = data.ResistanceLocalList;
          this.ResistanceNumber = data.ResistanceNumber;
        });
    },
    //新增
    handleAdd() {
      let row = {
        BranchName: "",
        BranchNameCN: "",
        Chainage: "",
        ResistanceNumber: ""
        // index: "",
      };
      this.tableData.unshift(row);
    },
    //删除
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
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
        ResistanceNumber: this.ResistanceNumber,
        ResistanceLocalList: arrList
      };
      var url = modelURL + "/api/GXRCWQ/ModelManager/UpdateHDInfo";
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
