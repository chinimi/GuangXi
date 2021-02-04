<template>
<!--边界条件主组件-->
  <div
    id="boundaryConditions"
    style="position: relative"
    class="boundaryConditions"
  >
    <div class="boundaryConditions_top clear-fix">
      <div class="data_left">
        <div v-for="(item, index) in data" :key="index">
          <div class="data_info" @click="tap(item, index)">
            <span>{{ item.name }}</span>
            <img
              :src="
                item.info == true
                  ? '../../../../static/images/top.png'
                  : '../../../../static/images/bottom.png'
              "
              alt=""
            />
          </div>
          <ul
            class="list"
            :style="item.info == true ? 'display: block;' : 'display: none;'"
          >
            <li
              class="info"
              v-for="(item, index) in item.data_name"
              :key="index"
              :class="active == index? 'isactive': ''"
              @click="tap_info(item,index,$event)"
            >
              {{item.BoundaryName}}
            </li>
          </ul>
        </div>
      </div>
      <div class="data_right clear-fix" v-if="water">
        <div class="table">
            <el-table border :data="tableData" style="background-color: transparent;height:550px;">
            <el-table-column prop="DT" label="时间" align="center">
            </el-table-column>
            <el-table-column prop="Value" :label="unit" align="center" width="130">
            </el-table-column>
          </el-table>
          <div class="table_name">
          <el-button type="primary" size="small" plain>上传</el-button>
          <el-button type="primary" size="small" plain>下载</el-button>
          </div>
        </div>
        <div class="echarts">曲线图</div>
      </div>
        <div class="data_right clear-fix" v-if="sourcePollution">
        <div class="echarts" style="width:45%;margin-left: 5px;">
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                污染源名称：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
               <el-input style="width:180px" v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                降解系数：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
               <el-input style="width:180px" v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                坐标：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
               <el-input style="width:180px"v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                河道里程：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
              <el-input style="width:180px" v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
        </div>
        <div class="table" style="width:53%">
            <el-table border :data="tableData" style="background-color:transparent;height:550px;">
            <el-table-column prop="DT" label="时间" align="center">
            </el-table-column>
            <el-table-column prop="Value" label="流量（m³/s）" align="center" width="130">
            </el-table-column>
            <el-table-column prop="Value" label="浓度（mg/L）" align="center" width="140">
            </el-table-column>
          </el-table>
          <div class="table_name" style="top: 5px;left: 237px;">
          <el-button type="primary" size="small" plain>上传</el-button>
          <el-button type="primary" size="small" plain>下载</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="boundaryConditions_bottom">
          <el-button type="primary" size="small" plain>保存</el-button>
          <el-button type="primary" size="small" plain>计算</el-button>
          <el-button type="primary" size="small" plain>查看结果</el-button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      input:'',
      water:true,
      sourcePollution:false,
      tableData:[],
      active: -1,
      unit:"流量（m³/s）",
      data: [
        {
          name: "流量边界",
          info: false,
          data_name: [],
        },
        {
          name: "水位边界",
          info: false,
          data_name: [],
        },
        {
          name: "水质边界",
          info: false,
          data_name: [],
        },
        {
          name: "降雨站",
          info: false,
          data_name: [],
        },
        {
          name: "污染源",
          info: false,
          data_name: [],
        },
      ],
      DischargeItems:[],//流量边界
      WaterLevelItems:[],//水位边界
      WaterQualityItems:[],//水质边界
      RainfallItems:[],//降雨站
      PollutionSourceItems:[],//污染源
      componentName:'',
    };
  },
  methods: {
    tap(item, index) {
      if(item.name == '流量边界'){
        this.data[index].data_name = this.DischargeItems;
        this.unit = '流量（m³/s）';
        this.componentName = '';
      }else if(item.name == '水位边界'){
        this.data[index].data_name = this.WaterLevelItems;
        this.unit = '水位（m）';
        this.componentName = '';
      }else if(item.name == '水质边界'){
        this.data[index].data_name = this.WaterQualityItems;
        this.unit = '氨氮（mg/L）';
        this.componentName = 'NH3N';
      }else if(item.name == '降雨站'){
        this.data[index].data_name = this.RainfallItems;
        this.unit = '降雨量（mm）';
        this.componentName = '';
      }else if(item.name == '污染源'){
        this.data[index].data_name = this.PollutionSourceItems;
        this.water = false;
        this.sourcePollution = true;
        this.componentName = '';
      }
      if(item.name != '污染源'){
        this.water = true;
        this.sourcePollution = false;
      }else{
        this.water = false;
        this.sourcePollution = true;
      }
      if (item.info == false) {
        this.data[index].info = true;
      } else if (item.info == true) {
        this.data[index].info = false;
      }
    },
    tap_info(item,index,e){
      console.log(item)
      var boundaryId = item.BoundaryId
      this.active = index
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetBoundaryTSData?scenarioCode=DHJKTXRCFA&boundaryId="+boundaryId+"&componentName="+this.componentName;
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          console.log(data)

        });

    },
  //获取数据
    getTableData() {
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetBoundaryInfoList?scenarioCode=DHJKTXRCFA";
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          console.log(data)
            this.DischargeItems = data.DischargeItems
            this.WaterLevelItems = data.WaterLevelItems
            this.WaterQualityItems = data.WaterQualityItems
            this.RainfallItems = data.RainfallItems
            this.PollutionSourceItems = data.PollutionSourceItems
        });
    },
  },
  computed: {},
  mounted() {
    this.getTableData();
  },
  watch: {},
};
</script>
<style scoped="scoped">
.boundaryConditions {
  position: relative;
  width: 100%;
  height: 100%;
  color: #01bdf5 ;
}
.boundaryConditions_top {
  position: relative;
  width: 100%;
  height: 605px;
  padding: 0 40px;
  box-sizing: border-box;
}
.boundaryConditions_bottom {
  position: relative;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  text-align: right;
  right: 10px;
  top: 10px;
}
.data_left {
  position: relative;
  width: calc(20% - 2px);
  float: left;
  border: 1px solid #ffffff;
  height: calc(100% - 2px);
  overflow: auto;
}
.data_right {
  position: relative;
  width: 80%;
  float: left;
  /* background: #6c7874; */
  height: 100%;
}
.data_info {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.data_info img {
  width: 15px;
  height: 10px;
  position: relative;
  top: 15px;
  float: right;
  right: 10px;
}
.list {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
}
.info {
  height: 40px;
  line-height: 40px;
  color: #01bdf5 ;
}
.info > ul {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0;
  display: block;
}
/* .info > ul > li:hover
{
background: green;
} */
.isactive {
    color: #fff!important;
    background: #01ddff!important;
    /* border-left: 4px solid #0718fa; */
}
.table {
  position: relative;
  width: 40%;
  height: 100%;
  float: left;
}
.echarts {
    position: relative;
    width: 59%;
    height: 100%;
    float: left;
    border: 1px solid #fff;
}

.table {
  /* height: calc(100% - 10px); */
  height: 100%;
  width: calc(40% - 10px);
  position: relative;
  margin: 5px;
  box-sizing: border-box;
  text-align: center;
  top:-5px
}
table,
th,
td {
  width: 100%;
  position: relative;
  border-collapse: collapse;
  border: 1px solid #fff;
  height: 90%;
}
th,
td {
  height: 30px;
}
.table_name {
  position: relative;
  width: 100%;
  height: 10%;
  float: right;
  /* bottom: 0; */
      top: 32px;
    left: 154px;
}
/* button{
  width: 120px!important;
  height: 40px!important;
} */
#boundaryConditions .singleli_title {
  font-size: 13px;
  height: 35px;
  /* line-height: 65px; */
  border-radius: 5px;
  font-weight: lighter;
  margin-left: -5%;
  margin-top: 20px;
}

#boundaryConditions .singleli_title .sysfxTit {
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  text-align: right;
  margin-right: 41px;
}
</style>
