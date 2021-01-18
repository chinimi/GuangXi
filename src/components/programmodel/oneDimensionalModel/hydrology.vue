<template>
  <!--水文主组件-->
  <div id="hydrology">
    <ul style="width:1336px">
      <li class="table">
        <div style="margin:1% 0 1% 0;color:#fff">
          流域径流模型
        </div>
        <div>
          <el-table border :data="tableData" height="550" style="background-color: transparent;" :cell-class-name="getRowColumn"  @cell-click="handleCellClick">
            <el-table-column prop="CatchmentName" label="子流域名称" min-width="100">
            </el-table-column>
            <el-table-column prop="RRModelName" label="模型名称" min-width="80">
            </el-table-column>
            <el-table-column prop="Area" label="子流域面积（km）" min-width="100">
              <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.Area" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.Area }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="Umax" label="地表储水层最大含水量（mm）" min-width="100">
               <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.Umax" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.Umax }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="Lmax" label="根区储水层最大含水量（mm）" min-width="100" >
              <template slot-scope="scope">
                 <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.Lmax" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.Lmax }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="CQOF" label="坡面流系数" min-width="100">
              <template slot-scope="scope">
               <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.CQOF" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.CQOF }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="CKIF" label="壤中流汇流时间常数（h）" min-width="100">
              <template slot-scope="scope">
                 <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.CKIF" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.CKIF }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="CK12" label="坡面流汇流时间常数（h）" min-width="100">
              <template slot-scope="scope">
                 <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.CK12" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.CK12 }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="TOF" label="产生坡面流的根区土壤含水量阈值" min-width="100">
              <template slot-scope="scope">
               <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.TOF" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.TOF }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="TIF" label="产生壤中流的根区土壤含水量阈值" min-width="100">
              <template slot-scope="scope">
               <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.TIF" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.TIF }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="TG" label="产生地下水的根区土壤含水量阈值" min-width="100">
              <template slot-scope="scope">
                 <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.TG" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.TG }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="CKBF" label="地底基流汇流时间常数（h）" min-width="100">
              <template slot-scope="scope">
               <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.CKBF" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.CKBF }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="UUmax" label="地表储水量初始含水率" min-width="100">
              <template slot-scope="scope">
              <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.UUmax" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.UUmax }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="LLmax" label="地表储水量初始含水率" min-width="100">
              <template slot-scope="scope">
              <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.LLmax" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.LLmax }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="QOF" label="坡面流初始值（m³/s）" min-width="180">
              <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.QOF" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.QOF }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="QIF" label="壤中流初始值（m³/s）" min-width="180">
              <template slot-scope="scope">
              <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.QIF" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.QIF }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="BF" label="地下基流初始值（m³/s）" min-width="180">
              <template slot-scope="scope">
                <el-input v-if=" scope.row.index === tabRowIndex && scope.column.index === tabColumnIndex" v-model="scope.row.BF" @blur="inputBlur"></el-input>
                <span v-else>{{ scope.row.BF }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div>
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
          <el-button type="primary" size="small" plain @click="saveClick"
            >保存</el-button
          >
          <el-button type="primary" size="small" plain>计算</el-button>
          <el-button type="primary" size="small" plain>查看结果</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      tableData: [],
      tableValue:[],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tabRowIndex: null, //单元格横坐标
      tabColumnIndex: null //单元格纵坐标
    };
  },
  methods: {
    //获取表格数据
    getTableData() {
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetNamInfoList?scenarioCode=DHJKTXRCFA";
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          this.tableData = data;
        });
    },
    //每页显示条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
//       var list = [{
//             "ScenarioCode": "DHJKTXRCFA",
//             "ScenarioName": "大湟江口-藤县-日常方案",
//             "CatchmentName": arrList.CatchmentName,
//             "RRModelName": arrList.RRModelName,
//             "Area": arrList.Area,
//             "Umax": arrList.Umax,
//             "Lmax": arrList.Lmax,
//             "CQOF": arrList.CQOF,
//             "CKIF": arrList.CKIF,
//             "CK12": arrList.CK12,
//             "TOF": arrList.TOF,
//             "TIF": arrList.TIF,
//             "TG": arrList.TG,
//             "CKBF": arrList.CKBF,
//             "UUmax": arrList.UUmax,
//             "LLmax": arrList.LLmax,
//             "QOF": arrList.QOF,
//             "QIF": arrList.QIF,
//             "BF": arrList.BF,
//       }];
      var url = modelURL + "/api/GXRCWQ/ModelManager/UpdateNamInfoList";
      var _this = this
        $.ajax({
                type: "post",
                dataType: "json",
                headers: {'Content-Type':'application/json'},
                url:url,
                data:JSON.stringify(arrList),
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
  },
  computed: {},
  mounted() {
    this.getTableData();
  },
  watch: {}
};
</script>
<style>
#hydrology {
  position: absolute;
  left: 110px;
  width: 100%;
}
#hydrology .el-input__inner {
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
#hydrology .el-pagination__total {
  color: #ffffff !important;
}
#hydrology .el-pagination__jump {
  color: #ffffff !important;
}
#hydrology .el-pagination .el-select .el-input .el-input__inner {
  color: #ffff;
}
</style>
