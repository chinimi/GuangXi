<template>
  <div id="convectiveDiffusion">
    <div class="singleli_title">
      <el-row>
        <el-col :span="8">
          <div class="sysfxTit">
            扩散系数（㎡/s）
          </div>
        </el-col>
        <el-col :span="14" style="margin-left: -9%;">
          <div>
            <el-input
              style="width:196px"
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </div>
     <div class="singleli_title">
      <el-row>
        <el-col :span="8">
          <div class="sysfxTit">
            降解系数（1/day）
          </div>
        </el-col>
        <el-col :span="14" style="margin-left: -9%;">
          <div>
            <el-input
              style="width:196px"
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <ul>
      <li class="container">
        <div>
          <el-table
            border
            :data="tableData"
            style="background-color: transparent; height: 350px;"
          >
            <el-table-column
              prop="name"
              label="组分"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="code"
              label="降解系数"
              align="center"
            ></el-table-column>
          </el-table>
        </div>
      </li>
      <li class="container">
        <div class="container_table">
          <el-table
            :data="tableData1"
            style="width: 100%;background-color: transparent;"
            height="400px;"
          >
            <el-table-column prop="date" label="河槽类型及情况">
            </el-table-column>
            <el-table-column prop="name" label="最小值" width="100">
            </el-table-column>
            <el-table-column
              prop="address"
              label="正常值"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="max"
              label="最大值"
              width="100"
            ></el-table-column>
          </el-table>
        </div>
        <div style="    position: absolute;top: 428px;right: 102px;">
          <el-button type="primary" size="small" plain>保存</el-button>
          <el-button type="primary" size="small" plain>计算</el-button>
          <el-button type="primary" size="small" plain>查看结果</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          name: "COD",
          code: "0",
        },
        {
          name: "NH3H",
          code: "0",
        },
        {
          name: "TH",
          code: "0",
        }
      ],
      tableData1: [
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

<style>
#convectiveDiffusion {
  position: absolute;
  color: #fff;
  left: 170px;
  top: 10px;
  width: 1300px;
}
#convectiveDiffusion .container {
  float: left;
  width: 45%;
  margin-right: 10px;
  /* background: lightcoral; */
}
#convectiveDiffusion .singleli_title {
  width: 45%;
  font-size: 13px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  font-weight: lighter;
  margin-left: 3%;
  margin-top: 20px;
}

#convectiveDiffusion .singleli_title .sysfxTit {
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  /* text-align: right; */
  margin-right: 10px;
}
#convectiveDiffusion .el-input__inner {
  /* padding-left: 10px !important; */
  color: #058cd0;
  border: 1px solid #058cd0;
  background: #031823;
  -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  font-size: 16px !important;
  /* border-radius: 10px !important; */
  /* border: 0px !important; */
  height: 30px !important;
  /* width: 196px !important; */
}
#convectiveDiffusion .container_table .el-table .cell {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: normal;
  word-break: break-all;
  line-height: 12px;
}
</style>
