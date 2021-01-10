<template>
  <div id="hydrodynamicForce">
    <div class="singleli_title">
      <el-row>
        <el-col :span="8">
          <div class="sysfxTit">
            糙率全局值（n）
          </div>
        </el-col>
        <el-col :span="14" style="margin-left: -22%;">
          <div>
            <el-input style="width:196px" v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <ul>
      <li class="container">
        <div>
          <el-table border :data="tableData" style="background-color: transparent; height: 400px;">
            <el-table-column prop="floorRange" label="河道中文" align="center">
              <template slot-scope="scope">
                <el-select
                  size="mini"
                  v-model="scope.row.floorRange"
                  @change="display"
                >
                  <el-option
                  style="width:100px"
                    v-for="item in displayOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="河道ID"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="code"
              label="里程"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="codes"
              label="糙率值"
              align="center"
            ></el-table-column>
          </el-table>
        </div>
      </li>
      <li class="container">
        555555555
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
            name:'郁江',
            code:'0',
            code:'0.025',
            floorRange:[]   //是否显示
          },
           {
            name:'郁江',
            code:'0',
            code:'0.025',
            floorRange:[]   //是否显示
          },
           {
            name:'郁江',
            code:'0',
            code:'0.025',
            floorRange:[]   //是否显示
          },
        ],
        //是否显示(可以由后台返回)
        displayOptions:[
          {
            value:"1",
            label:"郁江"
          },
          {
            value:"0",
            label:"郁江"
          }
        ]
    };
  },
  methods:{
    display(value){
      	console.log(value)
      }
  }
};
</script>

<style>
#hydrodynamicForce {
  position: absolute;
  color: #fff;
  left: 170px;
  top: 10px;
  width: 1300px;
}
#hydrodynamicForce .container {
  float: left;
  width: 45%;
  margin-right: 10px;
  /* background: lightcoral; */
}
#hydrodynamicForce .singleli_title {
  font-size: 13px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  font-weight: lighter;
  margin-left: 3%;
  margin-top: 20px;
}

#hydrodynamicForce .singleli_title .sysfxTit {
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  /* text-align: right; */
  margin-right: 10px;
}
#hydrodynamicForce .el-input__inner {
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

</style>
