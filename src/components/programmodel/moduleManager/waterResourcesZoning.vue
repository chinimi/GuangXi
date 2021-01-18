<template>
<!--水资源分区主页面-->
  <div id="administrativeDivisions">
    <ul>
      <li class="left lefts">
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                一级分区：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="primaryPartition">
                  <el-option
                    v-for="(item, index) in primaryPartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                二级分区：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="secondaryPartition">
                  <el-option
                    v-for="(item, index) in secondaryPartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                三级分区：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="tertiaryPartition">
                  <el-option
                    v-for="(item, index) in tertiaryPartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                四级分区：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="fourstagePartition">
                  <el-option
                    v-for="(item, index) in fourstagePartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                五级分区：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="fivestagePartition">
                  <el-option
                    v-for="(item, index) in fivestagePartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>

        <div style="margin: 50% 0 0 75%;">
          <el-button type="primary" size="small" plain>查找</el-button>
        </div>
      </li>
      <li class=" clear-fix left right">
        <div style="margin: 1% 0px;">
          <el-button type="primary" size="small" plain>上传模板</el-button>
          <div style="margin-left: 11%;margin-top: -2%;">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="一维"></el-checkbox>
            <el-checkbox label="二维"></el-checkbox>
          </el-checkbox-group>
        </div>
        </div>
        <div>
          <el-table
            border
            :data="tableData"
            height="600"
            style="background-color: transparent;"
          >
            <el-table-column prop="tab1" label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="tab2" label="方案编码" min-width="80">
            </el-table-column>
            <el-table-column prop="tab3" label="方案名称" min-width="100">
            </el-table-column>
            <el-table-column prop="tab4" label="创建时间" min-width="100">
            </el-table-column>
            <el-table-column prop="tab5" label="修改时间" min-width="100">
            </el-table-column>
            <el-table-column prop="tab6" label="基准模板" min-width="80">
            </el-table-column>
            <el-table-column prop="tab7" label="一级流域分区" min-width="150">
            </el-table-column>
            <el-table-column prop="tab8" label="二级流域分区" min-width="150">
            </el-table-column>
            <el-table-column prop="tab9" label="行政分区（市）" min-width="150">
            </el-table-column>
            <el-table-column prop="tab10" label="水资源分区" min-width="100">
            </el-table-column>
            <el-table-column prop="tab11" label="所属河长" min-width="100">
            </el-table-column>
            <el-table-column label="操作" min-width="300">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleLook(scope.$index, scope.row)"
                  >查看结果</el-button
                >
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >修改方案</el-button
                >
                <el-button
                  size="mini"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除方案</el-button
                >
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
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      primaryPartition: "",
      primaryPartitionList: [],
      secondaryPartition: "",
      secondaryPartitionList: [],
      tertiaryPartition: "",
      tertiaryPartitionList: [],
      fourstagePartition: "",
      fourstagePartitionList: [],
      fivestagePartition: "",
      fivestagePartitionList: [],
      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      checkList: []
    };
  },
  created() {
    // 发请求去后台拿数据,如果有api，就正常请求，
    //我这里是demo，就简单给list赋值了，原理一样。
    // getlistApi().then(res => {
    // let list = res.data.list
    let list = [
      {
        tab1: "1",
        tab2: "TLR",
        tab3: " 田东—隆安-日常",
        tab4: "2020-1-4",
        tab5: "2020-12-30",
        tab6: "模板1",
        tab7: "珠江流域",
        tab8: "左江",
        tab9: "南宁",
        tab10: "一级分区",
        tab11: "河长A"
      },
      {
        tab1: "1",
        tab2: "TLR",
        tab3: " 田东—隆安-日常",
        tab4: "2020-1-4",
        tab5: "2020-12-30",
        tab6: "模板1",
        tab7: "珠江流域",
        tab8: "左江",
        tab9: "南宁",
        tab10: "一级分区",
        tab11: "河长A"
      },
      {
        tab1: "1",
        tab2: "TLR",
        tab3: " 田东—隆安-日常",
        tab4: "2020-1-4",
        tab5: "2020-12-30",
        tab6: "模板1",
        tab7: "珠江流域",
        tab8: "左江",
        tab9: "南宁",
        tab10: "一级分区",
        tab11: "河长A"
      },
      {
        tab1: "1",
        tab2: "TLR",
        tab3: " 田东—隆安-日常",
        tab4: "2020-1-4",
        tab5: "2020-12-30",
        tab6: "模板1",
        tab7: "珠江流域",
        tab8: "左江",
        tab9: "南宁",
        tab10: "一级分区",
        tab11: "河长A"
      },
      {
        tab1: "1",
        tab2: "TLR",
        tab3: " 田东—隆安-日常",
        tab4: "2020-1-4",
        tab5: "2020-12-30",
        tab6: "模板1",
        tab7: "珠江流域",
        tab8: "左江",
        tab9: "南宁",
        tab10: "一级分区",
        tab11: "河长A"
      }
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
#administrativeDivisions .left {
  float: left;
  margin-right: 10px;
  height: 50%;
  /* margin-top: -6px; */
}
#administrativeDivisions .lefts {
  width: 311px;
  /* background: red; */
  border-right: 2px dashed royalblue;
}
#administrativeDivisions .right {
  width: 1092px;
  /* background: rebeccapurple; */
  margin-top: -2%;
}
#administrativeDivisions .singleli_title {
  font-size: 13px;
  height: 35px;
  line-height: 65px;
  border-radius: 5px;
  font-weight: lighter;
  margin-left: 3%;
  margin-top: 20px;
}

#administrativeDivisions .singleli_title .sysfxTit {
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  /* text-align: right; */
  margin-right: 10px;
}
#administrativeDivisions .el-input__inner {
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
#administrativeDivisions .el-pagination__total {
  color: #ffffff !important;
}
#administrativeDivisions .el-pagination__jump {
  color: #ffffff !important;
}
#administrativeDivisions .el-pagination .el-select .el-input .el-input__inner {
  color: #ffff;
}
</style>
