<template>
<!--水动力主组件-->
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
            <el-input
              style="width:196px"
              v-model="ResistanceNumber"
              placeholder="请输入内容"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <ul>
      <li class="container">
        <div>
          <el-table border :data="tableData" style="background-color: transparent;height:424px;" :cell-class-name="getRowColumn"  @cell-click="handleCellClick">
            <el-table-column prop="BranchNameCN" label="河道中文" align="center">
                <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.BranchNameCN" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.BranchNameCN }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="BranchName" label="河道ID" align="center">
                <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.BranchName" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.BranchName }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="Chainage" label="里程" align="center">
                <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.Chainage" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.Chainage }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="ResistanceNumber" label="糙率值" align="center">
                <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.ResistanceNumber" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.ResistanceNumber }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </li>
      <li class="container" style="margin-top: -20px;">
          <div style="border-bottom: 1px solid #fff;color:#058cd0;text-align:center;margin-bottom:10px">
              天然河道糙率表
          </div>
        <div class="container_table" style="margin-top: -8px;">
          <el-table :data="roughnessTable" style="width: 100%;background-color: transparent;" height="400px;">
            <el-table-column prop="date" label="河槽类型及情况"></el-table-column>
            <el-table-column prop="name" label="最小值" width="70"></el-table-column>
            <el-table-column prop="address" label="正常值" width="70"></el-table-column>
            <el-table-column prop="max" label="最大值" width="70"></el-table-column>
          </el-table>
        </div>
        <div style="position: absolute;top:492px;right: 102px;">
          <el-button type="primary" size="small" plain @click="saveClick">保存</el-button>
          <el-button type="primary" size="small" plain>计算</el-button>
          <el-button type="primary" size="small" plain>查看结果</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import roughnessTableData from './roughnessTable.js'
export default {
  data() {
    return {
      ResistanceNumber:'',
      tabRowIndex: null, //单元格横坐标
      tabColumnIndex: null, //单元格纵坐标
      tableData: [],
      roughnessTable: [],
      tableValue:[],
    };
  },
  mounted(){
     this.roughnessTable = roughnessTableData;
     this.getTableData();
  },
  methods: {
   //获取表格数据
    getTableData() {
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetHDInfo?scenarioCode=DHJKTXRCFA";
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          this.tableData = data.ResistanceLocalList;
          this.ResistanceNumber = data.ResistanceNumber;
        });
    },
   //点击单元格得到横纵坐标
    handleCellClick(row, column, event, cell) {
      this.tabRowIndex = row.index;
      this.tabColumnIndex = column.index;
      this.tableValue.push(row);
    },
    //数据中没有横纵坐标需要加上进行下一步判断
    getRowColumn({row, column, rowIndex, columnIndex}) {
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
      this.tableData.map(e =>{
       var flag = this.tableValue.some(el =>{
           if(e === el || JSON.stringify(e) === JSON.stringify(el)){
             return arrList.push(e)
           }
        })
      })
          var testdata={
                "ScenarioCode": "DHJKTXRCFA",
                "ResistanceNumber": this.ResistanceNumber,
                "ResistanceLocalList":arrList
            }
      var url = modelURL + "/api/GXRCWQ/ModelManager/UpdateHDInfo";
      var _this = this
        $.ajax({
                type: "post",
                dataType: "json",
                headers: {'Content-Type':'application/json'},
                url:url,
                data:JSON.stringify(testdata),
                success: function(data) {
                  if(data != false){
                      _this.$message({
                            message: '保存成功',
                            type: 'success'
                          });
                  }else{
                    _this.$message.error('保存失败');
                  }
                },
                error: function(data) {console.log("error"+data)}
           });
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
  width: 45%!important;
  margin-right: 10px;
  /* background: lightcoral; */
}
#hydrodynamicForce .singleli_title {
  font-size: 13px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  font-weight: lighter;
  margin-left: 0;
  margin-top: 1px;
  margin-bottom: 10px;
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
#hydrodynamicForce .container_table .el-table .cell {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: normal;
  word-break: break-all;
  line-height: 12px;
}
#hydrodynamicForce .container_table .el-table td{
  padding: 7px 0 !important;
}
</style>
