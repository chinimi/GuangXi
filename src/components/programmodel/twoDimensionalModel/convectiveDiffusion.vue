<template>
<!--对流扩散主页面-->
  <div class="convectiveDiffusion">
    <div class="convectiveDiffusion_left">
      <div class="singleli_title">
        <el-row>
          <el-col :span="9">
            <div class="sysfxTit">
              扩散系数（m2/s）
            </div>
          </el-col>
          <el-col :span="13">
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
    </div>
    <div class="convectiveDiffusion_right">
      <el-table
        :data="convectionTable"
        border
        style="width: 100%;background-color: transparent;height:445px"
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
      tableData: [],
      roughnessTable: [],
      tableValue: [],
      convectionTable: [],
      scenarioCode:'',
    };
  },
 mounted() {
    this.getTableData();
    this.convectionTable = convectionTable.convectionTable;
  },
  methods: {
    //获取表格数据
    getTableData() {
      if(this.$route.params.value != undefined){
        this.scenarioCode = this.$route.params.value.ScenarioCode
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetDispersionAndDecayInfo?scenarioCode="+this.scenarioCode;
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          this.DispersionFactor = data.DispersionFactor;
        });
      }
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
        ScenarioCode:this.ScenarioCode ,
        DispersionFactor: this.DispersionFactor,
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
