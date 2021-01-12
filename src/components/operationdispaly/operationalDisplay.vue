<template>
  <div id="associativeOperate">
    <el-container>
      <!--左侧-->
      <el-aside  style='display: block' width="50%" class="associateLeft">
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




          <div  style="padding-left: 80px;margin-top:15px;">
            <el-button>确定</el-button>
            <el-button>取消</el-button>
          </div>

        </div>

      </el-aside>
      <!--右侧-->
      <el-main width="50%"  class="associateRight">
        <div class="topPan">
          <div class="analyze_title">
            <i class="iconfont icon-fuhao-tuceng"></i>
            <span>水质专题</span>
          </div>
          <!--内容部分-->
          <div class="analyze_content">
            <ul >
              <li
                v-for="item  in subjectProducts"
                :class="['sliderClass',{activeLi : ( curli == item.name ? true : false )}]"
                @click="curli = item.name"
              >

                <span>{{item.title}}</span>
              </li>
            </ul>

          </div>
        </div>
        <div class="middlePan">
          <div class="analyze_title">
            <span>统计分析</span>
          </div>
          <!--内容部分-->
          <div class="analyze_content">
            <ul  class="mid_tab_title">
              <li
                v-for="item  in calculateType"
                :class="['middleSliderClass',{ activeLi : ( curMidTab == item.name ? true : false )}]"
                @click="curMidTab = item.name;curMidCom=item.comp ;showMidTab(item.comp)"
              >

                <span>{{item.name}}</span>
              </li>
              <div class="clear"></div>
            </ul>

            <div  class="mid_tab_content">
              <div v-show="curMidCom == 'first'">

                <el-radio-group  v-model="firstRadio">
                  <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>

              </div>
              <div v-show="curMidCom == 'second'">
                <el-radio-group  v-model="secondRadio">
                  <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>


              </div>
              <div v-show="curMidCom == 'third'">
                <el-radio-group  v-model="thirdRadio">
                  <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>


              </div>
              <div v-show="curMidCom == 'fourth'">
                <el-radio-group  v-model="fourthRadio">
                  <el-col :span="8" v-for="product in curWaterSysOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>


              </div>
            </div>

          </div>

        </div>
        <div class="bottomPan">
          <div class="analyze_title">
            <span>三维展示</span>
          </div>

          <!--内容部分-->
          <div class="analyze_content">


          </div>


        </div>
      </el-main>
    </el-container>




  </div>
</template>
<script>


  export default {
    components:{

    },
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

        firstRadio:'',//1
        secondRadio:'',//2
        thirdRadio:'',//3
        fourthRadio:'',//4
        curMidCom:'first',//跳转组件
        curMidTab:'first',//tab mid
        curli:'',
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
        subjectProducts:[
          {name:'1',title:'污染物浓度分布专题图'},
          {name:'2',title:'污染物评价类别分布专题图'},
          {name:'3',title:'污染物评价类别时间变化趋势专题地图'},
          {name:'4',title:'测站现状评价专题图'},
          {name:'5',title:'水质类别色彩渲染专题图'},
          {name:'6',title:'污染物排放达标专题图'},
          {name:'7',title:'污染物排放量专题图'},


        ],
        calculateType:[

          {
            name: '监测成果',
            value: 'first',
            comp: 'first'
          },
          {
            name: '评价分析',
            value: 'second',
            comp: 'second'
          },
          {
            name: '统计类',
            value: 'third',
            comp: 'third'
          },
          {
            name: '富营养化',
            value: 'fourth',
            comp: 'fourth'
          },

        ],

      }
    },
    methods: {
      showMidTab(ele){
        console.log("显示详情")
        console.log(ele)


      }

    },
    computed: {


    },
    mounted(){


    },
    watch: {



    }

  }
</script>
<style scoped="scoped">

.clear{
  clear:both;
  height: 0;
  font-size: 0;
}
#associativeOperate{
  width: 30%;
  background: rgba(21,37,63,0.86);
  /*width:800px;*/
  height:calc( 100vh - 290px);
  -webkit-box-shadow: 0 0 2px #1e88ef, 0 0 12px #1e88ef;
  box-shadow: 0 0 2px #1e88ef, 0 0 12px #1e88ef;
  /*border-left-color: #0a74db;*/
  position: absolute;
  top: 30px;
  left:0;
}
.associateRight{
  /*border:solid 1px blueviolet;*/
  padding:0;
 }
.associateLeft{
  padding:0;
  border-right:dashed 1px rgba(255,249,229,0.5);
}

#associativeOperate .singleli_title {
  font-size: 13px;
  height: 35px;
  /* line-height: 13px; */
  border-radius: 5px;
  font-weight: lighter;
  margin-left: 3%;
  margin-top: 10px;
}

#associativeOperate .singleli_title .sysfxTit {
  color: #fff;
  letter-spacing: 1px;
  font-size: 13px;
}
.topPan{
  width: 100%;
  height: 40%;
}
.middlePan{
  width: 100%;
  height: 30%;
}
.bottomPan{
  width: 100%;
  height: 30%;
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
    width:100%;
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

.sliderClass{
  cursor: pointer;
  color: #fff;
  list-style: none;
  font-size: 15px;
  line-height: 30px;
  padding: 5px 10px ;

}
.activeLi{
  /*background-color: #ffdb61 !important;*/
  color: #ffdb61 !important;
  /*border: 1px solid #d49500!important;*/
}
/*middle part*/
.middleSliderClass{
  cursor: pointer;
  color: #fff;
  float: left;
  list-style: none;
  font-size: 10px;
  line-height: 30px;
  padding: 0px 6px;
  background: #6184b5;
  border-radius: 5px;
  margin-left: 6px;
  margin-top: 6px;

}
  .midactiveli{
    color:yellow;
  }

  .analyze_content{
    width:98%;
    height: calc(100% - 30px);
    overflow-y: auto;
    margin:0 auto;

  }
  .analyze_title{
    padding-left:20px;
    line-height: 30px;
    color:#fff;
    background: #042c64;
    text-align: left;
    font-weight: 700;
  }
  .analyze_title span {
    font-size:14px;
  }

  .mid_tab_title{
    width: 100%;
    line-height: 30px;

  }
  .mid_tab_content{
    width:100%;
    color: #fff;
  }


</style>
