<template>
<!--生态主组件-->
  <div id="zoology">
    <ul style="width:1336px">
      <li class="table">
        <div>
          <el-table border :data="tableData" height="600" style="background-color: transparent;" :cell-class-name="getRowColumn"  @cell-click="handleCellClick">
            <el-table-column prop="index" label="序号" min-width="60">
            </el-table-column>
            <el-table-column prop="descriptor" label="描述信息" min-width="150">
            </el-table-column>
            <el-table-column prop="unit" label="单位" min-width="100">
            </el-table-column>
            <el-table-column prop="value" label="值" min-width="80">
                <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.value" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="index1" label="序号" min-width="60">
            </el-table-column>
            <el-table-column prop="descriptor1" label="描述信息" min-width="150">
            </el-table-column>
            <el-table-column prop="unit1" label="单位" min-width="100">
            </el-table-column>
            <el-table-column prop="value1" label="值" min-width="80">
                <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.value1" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.value1 }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div>
          <!-- <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination> -->
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
        <div style="float: right;margin-top: -27px;">
          <el-button type="primary" size="small" plain @click="saveClick">保存</el-button>
          <el-button type="primary" size="small" plain>计算</el-button>
          <el-button type="primary" size="small" plain>查看结果</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import zoologyTableData from './zoologyTable.js'
export default {
  components: {},
  data() {
    return {
      tabRowIndex: null, //单元格横坐标
      tabColumnIndex: null, //单元格纵坐标
      tableData: [],
      roughnessTable: [],
      tableValue:[],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
 computed: {},
  mounted() {
    this.tableData = zoologyTableData;
  },
  methods: {
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
              var testdata=
              {
                  "ScenarioCode": "DHJKTXRCFA",
                    "Value7": 3.0,
                    "Value9": 3.5,
                    "Value10": 1.0,
                    "Value11": 0.5,
                    "Value13": 2.0,
                    "Value14": 1.0,
                    "Value18": 1.0,
                    "Value22": 1.0,
                    "Value26": 0.5,
                    "Value28": 0.5,
                    "Value29": 0.8,
              }
      var url = modelURL + "/api/GXRCWQ/ModelManager/UpdateEcolabConstantInfo";
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
<style>
#zoology  {
  position: absolute;
  left: 110px;
  width: 100%;

}
#zoology .el-input__inner {
  padding-left: 10px !important;
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
#zoology .el-pagination__total{
  color:#ffffff !important;
}
#zoology .el-pagination__jump{
  color:#ffffff !important;
}
#zoology .el-pagination .el-select .el-input .el-input__inner{
         color: #ffff;
}
</style>
