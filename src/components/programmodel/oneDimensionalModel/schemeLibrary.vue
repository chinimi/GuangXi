<template>
  <!--方案库主页面-->
  <div class="schemeLibrary clear-fix">
    <!-- 左侧 -->
    <div class="schemeLibrary_left ">
      <ul class="clear-fix schemeLibrary_ul">
        <li :class="[TapType == '1' ? 'csour' : '']" @click="TapSwitch(1)">河长制</li>
        <li :class="[TapType == '2' ? 'csour' : '']" @click="TapSwitch(2)">流域</li>
        <li :class="[TapType == '3' ? 'csour' : '']" @click="TapSwitch(3)">水资源</li>
        <li :class="[TapType == '4' ? 'csour' : '']" @click="TapSwitch(4)">行政</li>
      </ul>
      <div class="schemeLibrary_div" v-show="TapType == '1'">
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                省：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                市：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                县：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                镇：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                村：
              </div>
            </el-col>
            <el-col :span="13" >
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
      </div>
      <div class="schemeLibrary_div" v-show="TapType == '2'">
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                省：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                市：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                县：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                镇：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                村：
              </div>
            </el-col>
            <el-col :span="13" >
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
      </div>
      <div  class="schemeLibrary_div" v-show="TapType == '3'">
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                流域：
              </div>
            </el-col>
            <el-col :span="13" >
              <div>
                <el-select v-model="drainageBasin">
                  <el-option
                    v-for="(item, index) in drainageBasinList"
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
            <el-col :span="9">
              <div class="sysfxTit">
                水系：
              </div>
            </el-col>
            <el-col :span="13" >
              <div>
                <el-select v-model="basin">
                  <el-option
                    v-for="(item, index) in basinList"
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
            <el-col :span="9">
              <div class="sysfxTit">
                一级河流：
              </div>
            </el-col>
            <el-col :span="13" >
              <div>
                <el-select v-model="firstOrderStream">
                  <el-option
                    v-for="(item, index) in firstOrderStreamList"
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
            <el-col :span="9">
              <div class="sysfxTit">
                二级河流：
              </div>
            </el-col>
            <el-col :span="13" >
              <div>
                <el-select v-model="secondOrderStream">
                  <el-option
                    v-for="(item, index) in secondOrderStreamList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="schemeLibrary_div" v-show="TapType == '4'">
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                一级分区：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                二级分区：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                三级分区：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                四级分区：
              </div>
            </el-col>
            <el-col :span="13" >
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
            <el-col :span="9">
              <div class="sysfxTit">
                五级分区：
              </div>
            </el-col>
            <el-col :span="13" >
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
      </div>
      <div class="schemeLibrary_button">
          <el-button>查找</el-button>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="schemeLibrary_right">
      <el-button size="small">新增方案</el-button>
        <div>
          <el-table
            border
            :data="tableData"
            height="480"
            style="background-color: transparent;margin:10px 0;"
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
        <div class="pages">
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
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      TapType:1,

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

      //流域分区
      drainageBasin:'',
      drainageBasinList:[],
      basin:'',
      basinList:[],
      firstOrderStream:'',
      firstOrderStreamList:[],
      secondOrderStream:'',
      secondOrderStreamList:[],

      //水资源
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
    TapSwitch(id){
      this.TapType = id;
    },
    showTypeClick(index){
      this.showType = index;
    },
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
