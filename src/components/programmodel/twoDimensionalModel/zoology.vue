<template>
<!--生态主页面-->
  <div id="zoology">
    <ul style="width:1336px">
      <li class="table">
        <div>
          <el-table border :data="tableData" height="400" style="background-color: transparent;">
            <el-table-column prop="tab1" label="子流域名称" min-width="100">
            </el-table-column>
            <el-table-column prop="tab2" label="模型名称" min-width="80">
            </el-table-column>
            <el-table-column prop="tab3" label="子流域面积（km）" min-width="100">
            </el-table-column>
            <el-table-column prop="tab4" label="地表储水层最大含水量（mm）" min-width="100">
            </el-table-column>
            <el-table-column prop="tab5" label="根区储水层最大含水量（mm）" min-width="100">
            </el-table-column>
            <el-table-column prop="tab6" label="坡面流系数" min-width="100">
            </el-table-column>
            <el-table-column prop="tab7" label="壤中流汇流时间常数（h）" min-width="100">
            </el-table-column>
            <el-table-column prop="tab8" label="坡面流汇流时间常数（h）" min-width="100">
            </el-table-column>
            <el-table-column prop="tab9" label="产生坡面流的根区土壤含水量阈值" min-width="100">
            </el-table-column>
            <el-table-column prop="tab10" label="产生壤中流的根区土壤含水量阈值" min-width="100">
            </el-table-column>
            <el-table-column prop="tab11" label="产生地下水的根区土壤含水量阈值" min-width="100">
            </el-table-column>
            <el-table-column prop="tab12" label="地底基流汇流时间常数（h）" min-width="100">
            </el-table-column>
            <el-table-column prop="tab13" label="地表储水量初始含水率" min-width="100">
            </el-table-column>
            <el-table-column prop="tab14" label="坡面流初始值（m³/s）" min-width="180">
            </el-table-column>
            <el-table-column prop="tab15" label="壤中流初始值（m³/s）" min-width="180">
            </el-table-column>
             <el-table-column prop="tab16" label="地下基流初始值（m³/s）" min-width="180">
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
  components: {},
  data() {
    return {
      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  created() {
    // 发请求去后台拿数据,如果有api，就正常请求，
    //我这里是demo，就简单给list赋值了，原理一样。
    // getlistApi().then(res => {
    // let list = res.data.list
    let list = [
      {
        tab1: "NAM-01",
        tab2: "NAM",
        tab3: "1.55",
        tab4: "1.55",
        tab5: "1.55",
        tab6: "1.55",
        tab7: "1.55",
        tab8: "1.55",
        tab9: "1.55",
        tab10: "1.55",
        tab11: "1.55",
        tab12: "1.55",
        tab13: "1.55",
        tab14: "1.55",
        tab15: "1.55",
        tab16: "1.55",
      },
           {
        tab1: "NAM-01",
        tab2: "NAM",
        tab3: "1.55",
        tab4: "1.55",
        tab5: "1.55",
        tab6: "1.55",
        tab7: "1.55",
        tab8: "1.55",
        tab9: "1.55",
        tab10: "1.55",
        tab11: "1.55",
        tab12: "1.55",
        tab13: "1.55",
        tab14: "1.55",
        tab15: "1.55",
        tab16: "1.55",
      },
           {
        tab1: "NAM-01",
        tab2: "NAM",
        tab3: "1.55",
        tab4: "1.55",
        tab5: "1.55",
        tab6: "1.55",
        tab7: "1.55",
        tab8: "1.55",
        tab9: "1.55",
        tab10: "1.55",
        tab11: "1.55",
        tab12: "1.55",
        tab13: "1.55",
        tab14: "1.55",
        tab15: "1.55",
        tab16: "1.55",
      },
           {
        tab1: "NAM-01",
        tab2: "NAM",
        tab3: "1.55",
        tab4: "1.55",
        tab5: "1.55",
        tab6: "1.55",
        tab7: "1.55",
        tab8: "1.55",
        tab9: "1.55",
        tab10: "1.55",
        tab11: "1.55",
        tab12: "1.55",
        tab13: "1.55",
        tab14: "1.55",
        tab15: "1.55",
        tab16: "1.55",
      },
           {
        tab1: "NAM-01",
        tab2: "NAM",
        tab3: "1.55",
        tab4: "1.55",
        tab5: "1.55",
        tab6: "1.55",
        tab7: "1.55",
        tab8: "1.55",
        tab9: "1.55",
        tab10: "1.55",
        tab11: "1.55",
        tab12: "1.55",
        tab13: "1.55",
        tab14: "1.55",
        tab15: "1.55",
        tab16: "1.55",
      },
           {
        tab1: "NAM-01",
        tab2: "NAM",
        tab3: "1.55",
        tab4: "1.55",
        tab5: "1.55",
        tab6: "1.55",
        tab7: "1.55",
        tab8: "1.55",
        tab9: "1.55",
        tab10: "1.55",
        tab11: "1.55",
        tab12: "1.55",
        tab13: "1.55",
        tab14: "1.55",
        tab15: "1.55",
        tab16: "1.55",
      },
    ];
    // list.forEach(element => {
    //   element["show"] = false;
    // });
    this.tableData = list;
    // })
  },
  methods: {
        handleLook(index, row) {
      console.log(index, row);
    },
    handleEdit(index, row) {
      row.show = true;
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  computed: {},
  mounted() {},
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
