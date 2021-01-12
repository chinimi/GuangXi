<template>
  <div  id="groundWater">
    <div class="left_menu">
      <div class="singleli_title">
        <el-row>
          <el-col :span="6">
            <div class="sysfxTit">
              评价标准：
            </div>
          </el-col>
          <el-col :span="18" style="margin-left: -5%;">
            <div>
              <el-select v-model="evaluatiStandarVal">
                <el-option
                  v-for="(item, index) in evaluationOptopn"
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
              评价项目：
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
              取值方式：
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
      <div style="margin-left:20px;">

        <el-checkbox-group v-model="checkedCities" @change="">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

      </div>
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

      <div class="singleli_title">
        <el-row>
          <el-col :span="8">
            <div class="sysfxTit">
              测站级别：
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

      <div class="singleli_title">
        <el-row>
          <el-col :span="8">
            <div class="sysfxTit">
              测站名称：
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
      <div style="margin-left:20px;">
        <el-checkbox-group v-model="checkedCities2" @change="">
          <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

      </div>

      <div class="singleli_title">
        <el-row>
          <el-col :span="8">
            <div class="sysfxTit">
              评价步长：
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
              时间选择：
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
      <div  style="padding-left: 80px;">
        <el-button>查询</el-button>


      </div>





    </div>
    <!--table表格-->
    <div class="right_menu">

      <el-table   border :data="tableData" height="480" style="background-color: transparent;">
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

      </el-table>

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
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        /*评价标准*/
        evaluatiStandarVal:'SL395-2007',
        evaluationOptopn:[{
          value:'SL395-2007',
          value:'SL395-2007',
        }],
        /*评价项目*/
        evalProVal:'SL395-2007',
        evalProOptopn:[{
          value:'SL395-2007',
          value:'SL395-2007',
        }],
        checkedCities: [],
        checkedCities2: [],
        tableData: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
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
        cities:['流域水系', '水资源分区', '行政区划'],
        cities2:['按单时间段评价', '按时间序列评价']
      }
    },
    created() {
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
        },  {
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

      ];

      this.tableData = list;

    },
    computed: {

    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }

    }
  }
</script>

<style scoped>
  #groundWater{
    margin:0;
    padding:0;
    background: #fff;
  }
  #groundWater .left_menu{
    width: 30%;
    height: calc( 100vh - 80px);

    background: #031823;
    position: absolute;
    top: 0;
    left: 0;
    border-right: #fff dashed 2px;
    border-left: #fff solid 1px;
  }
  #groundWater  .right_menu{
    width: 70%;
    height: calc( 100vh - 80px);
    padding-top: 50px;

    /*background: rgb(0, 25, 56);*/
    background: #031823;
    position: absolute;
    top: 0;
    right: 0;
  }

  #groundWater .singleli_title {
    font-size: 13px;
    height: 35px;
    line-height: 50px;
    border-radius: 5px;
    font-weight: lighter;
    margin-left: 3%;
    margin-top: 20px;
  }

  #groundWater .singleli_title .sysfxTit {
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
    /* text-align: right; */
    margin-right: 10px;
  }
  #groundWater >>>.el-input__inner {
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
    /*width: 190px !important;*/
  }
  #groundWater >>>.el-pagination__total{
    color:#ffffff !important;
  }
  #groundWater >>>.el-pagination__jump{
    color:#ffffff !important;
  }
  #groundWater >>>.el-pagination .el-select .el-input .el-input__inner{
    color: #ffff;
  }


</style>
