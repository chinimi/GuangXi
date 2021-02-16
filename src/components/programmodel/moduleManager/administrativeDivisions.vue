<template>
<!--行政分区主页面-->
  <div class="administrativeDivisions">
    <div class="administrativeDivisions_left">
              <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                省：
              </div>
            </el-col>
            <el-col :span="14" >
              <div>
                <el-select v-model="province">
                  <el-option
                    v-for="(item, index) in provinceList"
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
                市：
              </div>
            </el-col>
            <el-col :span="14" >
              <div>
                <el-select v-model="city">
                  <el-option
                    v-for="(item, index) in cityList"
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
                县：
              </div>
            </el-col>
            <el-col :span="14" >
              <div>
                <el-select v-model="county">
                  <el-option
                    v-for="(item, index) in countyList"
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
                镇：
              </div>
            </el-col>
            <el-col :span="14" >
              <div>
                <el-select v-model="town">
                  <el-option
                    v-for="(item, index) in townList"
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
                村：
              </div>
            </el-col>
            <el-col :span="14" >
              <div>
                <el-select v-model="rustic">
                  <el-option
                    v-for="(item, index) in rusticList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-button style="float:right;right: 20px;position: relative;" type="primary" size="small" plain>查找</el-button>
        </div>
    </div>
    <div class="administrativeDivisions_right">
        <div class="Divisions">
          <el-button type="primary" size="small" plain>上传模板</el-button>
          <div style="display: inline-block;margin-left:20px">
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
            height="460"
            style="background-color: transparent;margin: 10px 0px"
          >
            <el-table-column prop="tab1" label="序号" min-width="70">
            </el-table-column>
            <el-table-column prop="tab2" label="方案编码" min-width="100">
            </el-table-column>
            <el-table-column prop="tab3" label="方案名称" min-width="100">
            </el-table-column>
            <el-table-column prop="tab4" label="创建时间" min-width="100">
            </el-table-column>
            <el-table-column prop="tab5" label="修改时间" min-width="100">
            </el-table-column>
            <el-table-column prop="tab6" label="基准模板" min-width="100">
            </el-table-column>
            <el-table-column prop="tab7" label="一级流域分区" min-width="150">
            </el-table-column>
            <el-table-column prop="tab8" label="二级流域分区" min-width="150">
            </el-table-column>
            <el-table-column prop="tab9" label="行政分区（市）" min-width="150">
            </el-table-column>
            <el-table-column prop="tab10" label="水资源分区" min-width="130">
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
        <div class="pages">
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
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
       //行政分区
      province:'',
      provinceList:[],
      city:'',
      cityList:[],
      county:'',
      countyList:[],
      town:'',
      townList:[],
      rustic:'',
      rusticList:[],


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
<style scoped>
@import '../../../../static/css/public.css';
</style>