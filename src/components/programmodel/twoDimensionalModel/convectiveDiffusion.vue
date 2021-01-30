<template>
<!--对流扩散主页面-->
  <div class="convectiveDiffusion">
    <ul>
      <li class="container">
      <div class="singleli_title">
      <el-row>
        <el-col :span="8">
          <div class="sysfxTit">
            缩放倍数
          </div>
        </el-col>
        <el-col :span="14" >
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
    <!-- <div class="singleli_title">
      <el-row>
        <el-col :span="8">
          <div class="sysfxTit">
            横向扩散系数（㎡/s）
          </div>
        </el-col>
        <el-col :span="14" >
          <div>
            <el-input
              style="width:196px"
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </div> -->
     <!-- <div class="singleli_title">
      <el-row>
        <el-col :span="8">
          <div class="sysfxTit">
            降解系数（1/day）
          </div>
        </el-col>
        <el-col :span="14" >
          <div>
            <el-input
              style="width:196px"
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </div> -->
        <div>
          <el-table
            border
            :data="tableData"
            style="background-color: transparent; height: 500px;"
          >
            <el-table-column
              prop="name"
              label="组分"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="code"
              label="降解系数（I/day）"
              align="center"
            ></el-table-column>
          </el-table>
        </div>
      </li>
      <li class="container">
       <el-table :data="convectionTable" style="width: 100%;background-color: transparent;margin-top: -6px;">
            <el-table-column prop="indicator" label="指标"></el-table-column>
            <el-table-column prop="minmum" label="最大值（I/d）"></el-table-column>
            <el-table-column prop="maxmum" label="最小值（I/d）"></el-table-column>
          </el-table>
        <div style="position: absolute;top: 588px;right: 102px;">
          <el-button type="primary" size="small" plain>保存</el-button>
          <el-button type="primary" size="small" plain>计算</el-button>
          <el-button type="primary" size="small" plain>查看结果</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import convectionTable from '../oneDimensionalModel/Table.js'
export default {
  data() {
    return {
      input: "",
      convectionTable:[],
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
    };
  },
  mounted(){
    this.convectionTable = convectionTable.twoconvectionTable
  },
  methods: {
    display(value) {
      console.log(value);
    }
  }
};
</script>

<style>
.convectiveDiffusion {
  position: absolute;
  color: #fff;
  left: 170px;
  top: 10px;
  width: 1300px;
}
.convectiveDiffusion .container {
  float: left;
  width: 45%;
  margin-right: 10px;
  /* background: lightcoral; */
}
.convectiveDiffusion .singleli_title {
  font-size: 13px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  font-weight: lighter;
  margin-left: -30%;
  margin-bottom: 5px;
}

.convectiveDiffusion .singleli_title .sysfxTit {
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  text-align: right;
  margin-right: 10px;
}
.convectiveDiffusion .el-input__inner {
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
/* .convectiveDiffusion .image{
      width: 100%;
    height: 305px;
    border: 1px solid #058cd0;
    border-radius: 5px;
    margin-bottom: 5px;
} */
</style>
