<template>
    <div  id="groundWater">
      <div class="left_menu">
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                评价标准：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="pjbzval">
                  <el-option
                    v-for="(item, index) in pjbzOption"
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
                <el-select v-model="pjxmval">
                  <el-option
                    v-for="(item, index) in pjxmOption"
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
                <el-select v-model="qzfsval">
                  <el-option
                    v-for="(item, index) in qzfsOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--水系参数-->
        <div style="width: 100%;padding-left:20px;">

          <!-- <el-checkbox-group v-model="pjbzval" @change="">
             <el-checkbox v-for="item in curWaterSysOption" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
           </el-checkbox-group>-->

          <el-radio-group  v-model="cursysval">
            <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
              <el-radio :label="product.value"   >{{product.label}}</el-radio>
            </el-col>
          </el-radio-group>

        </div>
        <!--1级-->

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
        <!--2级-->
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
        <!--3级-->
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
        <!--4级-->
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
        <!--测站级别-->
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
        <!--测站名称-->
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
        <!--自定义-->
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                自定义：
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
          <!--时间段选择-->
          <div >

            <el-radio-group  v-model="selectTimeType">
              <el-col :span="12" v-for="product in timequantumOption"   :key="product.value">
                <el-radio :label="product.value"   >{{product.label}}</el-radio>
              </el-col>
            </el-radio-group>

          </div>

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
                <el-select v-model="pjbcVal">
                  <el-option
                    v-for="(item, index) in pjbcOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="singleli_title" >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                时间选择：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <el-date-picker
                v-model="startTime"
                format="yyyy-MM"
                type="month"
                align="right"
                size="mini"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-col>
          </el-row>
        </div>

        <!--时间序列-->

        <div class="singleli_title" v-if="selectTimeType=='ordertime'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                截至时间：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <el-date-picker
                v-model="endTime"
                format="yyyy-MM"
                type="month"
                align="right"
                size="mini"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-col>
          </el-row>
        </div>


        <div class="singleli_title" >
          <el-row>
            <el-col :span="20" style="text-align: center">
              <el-button @click="queryTableData">确定</el-button>
            </el-col>

          </el-row>
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
  import  getWater from '../../api/index'
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
          tableData: [],
          cities:['流域水系', '水资源分区', '行政区划'],
          cities2:['按单时间段评价', '按时间序列评价'],


          /*评价标准*/
          pjbzval:'all',
          pjbzOption:[{
            label:"全部",
            value:'all',
          }],
          /*评价项目*/
          pjxmval:'all',
          pjxmOption:[{
            label:"总硬度",
            value:'all',
          }],
          /*取值方式*/
          qzfsval:'average',
          qzfsOption:[{
            label:"平均值",
            value:'average',
          }],
          /*当前水系*/
          cursysval:'water1',
          /*水系参数*/
          curWaterSysOption:[{label:'流域水系',value:'water1'},{label:'水资源分区',value:'water2'},{label:'行政区划',value:'water3'}],
          /*时间选择*/
          selectTimeType:"singletime",
          /*时间段选择*/
          timequantumOption:[{
            value:'singletime',
            label:'按单时间段评价',
          },{
            value:'ordertime',
            label:'按单时序列评价',

          }],
          /*评价步长*/
          pjbcVal:'',//评价步长
          pjbcOption:[{value:'month',label:'月份'}],
          /*初始时间*/
          startTime:'',
          /*截至时间*/
          endTime:'',
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
      },
      queryTableData(){
        alert(1)
        // this.$http.get('menus")
        // if(res.meta.status!==200) return this.$message.error("失败了")
        // this.getMenuList=res.data//获取所有左侧菜单数据
        // console.log(res)
        let url="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
      var param={
        "pageNum":"0",
        "pageSize":"10",
        "qzfs":"avg",
        "tjsj":"201507-201508"
      }

        this.getWater(url,param)


        let opts= JSON.stringify(param)
        console.log(opts)

        fetch(url,opts)
          .then((response) => {
            alert(1)
            console.log(response)
            console.log(response)

            return response.json()
          })
          .then((responseText) => {
            alert(responseText)
          })
          .catch((error) => {
            alert(error)
          })


      /*  this.$http.get(url,{params:param},{
          emulateJSON:true
        }).then(function(res){
          alert("成功")
          console.log(res)

        },function(res){
          alert("失败")

        });*/

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
    /*background: #031823;*/
    background: rgba(21,37,63,0.86);
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

  >>>.el-main{
    padding:0;
  }
  >>>.el-input__inner {
    padding-left: 30px;
    color: #058cd0;
    border: 1px solid #058cd0;
    background: #031823;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    font-size: 14px;
    height: 30px ;

  }
  >>>.el-pagination__total{
    color:#ffffff !important;
  }
  >>>.el-pagination__jump{
    color:#ffffff !important;
  }
  >>>.el-pagination .el-select .el-input .el-input__inner{
    color: #ffff;

  }

  >>>.el-button{
    padding: 5px 15px !important;
  }
  >>>.el-button:active {
    color: #fff;
    border-color: #3a8ee6;
    outline: 0;
    background: rgba(21,37,63,0.86);
  }
  >>>.el-button:focus, .el-button:hover {
    color: #fff;
    border-color: #c6e2ff;
    background-color: rgba(21,37,63,0.86);
  }

  >>>.el-radio-group{
    width:100%;
  }
  >>>.el-radio {
    color: #fff;
  }
  >>>.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width:86%;
  }
  >>>.el-select-dropdown__item.selected{
    padding-left:20px!important;
  }

  >>>.el-radio__label {
    font-size: 14px;
    padding-left: 4px;
  }
  /* 滚动样式修改*/
  >>> ::-webkit-scrollbar {
    background-color: transparent !important;
    height: 0 !important;
    width: 0 !important;
  }

  >>> ::-webkit-scrollbar-thumb {
    background-color: transparent !important;
  }

  /* 修改边框颜色*/
  >>> ::-webkit-scrollbar-thumb {
    background-color: transparent !important;
  }
  >>>.el-container{
    height: 100%;
  }

</style>
