<template>
<!--水动力主页面-->
  <div class="hydrodynamicForce">
    <div class="hydrodynamicForce_top">
      <div class="singleli_title">
        <el-row>
          <el-col :span="12" style="text-align: right;">
            <div class="sysfxTit">
              糙率全局值（n）
            </div>
          </el-col>
          <el-col :span="12" style="text-align: left;">
            <el-input
              style="width:196px"
              v-model="ResistanceNumber"
              placeholder="请输入内容"
            ></el-input>
          </el-col>
        </el-row>
      </div>
            <div class="container_table">
        <el-table
        border
          :data="roughnessTable"
          style="width: 100%;background-color: transparent;height:425px;"
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
    </div>
    <div class="hydrodynamicForce_bottom">

      <div class="pages" style="text-align: right;">
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
      roughnessTable: [],
    };
  },
  mounted(){
      this.roughnessTable = roughnessTableData.roughnessTableData;
      this.getTableData();
  },
  methods: {
    //获取表格数据
    getTableData() {
      if(this.$route.params.value != undefined){
      this.ScenarioCode = this.$route.params.value.ScenarioCode
      var url =
        modelURL + "/api/GXRCWQ/ModelManager/GetHDInfo?scenarioCode="+this.ScenarioCode;
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          this.ResistanceNumber = data.ResistanceNumber;
        });
        }
    },
        //保存
    saveClick() {
      var testdata = {
        ScenarioCode: "DHJKTXRCFA",
        ResistanceNumber: this.ResistanceNumber,
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
