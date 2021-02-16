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
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "第一类 小河（汛期最大水面宽度30m）",
          name: "",
          address: "",
          max: ""
        },
        {
          date: "1、平原河流",
          name: "",
          address: "",
          max: ""
        },
        {
          date: "（1）清洁，顺直，无沙滩，无谭",
          name: "0.025",
          address: "0.030",
          max: "0.033"
        },
        {
          date: "（2）清洁，顺直，无沙滩，无谭",
          name: "0.025",
          address: "0.030",
          max: "0.033"
        },
        {
          date: "（3）清洁，顺直，无沙滩，无谭",
          name: "0.025",
          address: "0.030",
          max: "0.033"
        },
        {
          date: "（4）清洁，顺直，无沙滩，无谭",
          name: "0.025",
          address: "0.030",
          max: "0.033"
        },
        {
          date: "（5）清洁，顺直，无沙滩，无谭",
          name: "0.025",
          address: "0.030",
          max: "0.033"
        }
      ]
    };
  },
  methods: {
    display(value) {
      console.log(value);
    }
  }
};
</script>
<style scoped>
@import "../../../../static/css/public.css";
</style>