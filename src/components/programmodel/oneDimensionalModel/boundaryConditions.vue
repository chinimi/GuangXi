<template>
<!--边界条件主组件-->
  <div class="boundaryConditions">
    <div class="boundaryConditions_top">
      <div class="boundaryConditions_left">
        <div v-for="(item, index) in data" :key="index">
          <div class="data_info" @click="tap(item, index)">
            <span>{{ item.name }}</span>
            <i style="position: relative;float: right;right: 20px;top: 10px;" :class="
                item.info == true
                  ? 'el-icon-arrow-up'
                  : 'el-icon-arrow-down'
              "></i>
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
      <div class="boundaryConditions_content" v-show="water">
        <div class="clear-fix">
          <el-table border :data="tableData" style="background-color: transparent;" height=450>
            <el-table-column prop="DT" label="时间" align="center">
            </el-table-column>
            <el-table-column prop="Value" :label="unit" align="center" width="130">
            </el-table-column>
          </el-table>
          <div class="boundaryConditions_name">
            <el-button size="small" plain>上传</el-button>
            <el-button size="small" plain>下载</el-button>
          </div>
        </div>
      </div>
      <div class="boundaryConditions_right" v-show="water">
        <div class="echarts_map" style="margin-top: -9px;">
          <div id="echarts_line" style="height:500px"></div>
        </div>
      </div>
      <div class="boundaryConditions_content" v-if="sourcePollution" style="border: 1px solid #EBEEF5;padding-top:10px;">
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                污染源名称：
              </div>
            </el-col>
            <el-col :span="9" style="margin-left: -5%;">
              <div>
              <el-input style="width:100px" v-model="sourcePollutionName" placeholder="请输入内容"></el-input>
              </div>
            </el-col>
              <el-col :span="7" style="margin-left: -5%;">
              <div>
              <el-button size="min" plain>选点</el-button>
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
              <el-input style="width:180px" v-model="degradationCoefficient " placeholder="请输入内容"></el-input>
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
              <el-input style="width:180px" v-model="coordinate" placeholder="请输入内容"></el-input>
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
              <el-input style="width:180px" v-model="riverMiles" placeholder="请输入内容"></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="boundaryConditions_right" v-if="sourcePollution" style="border: 0">
          <el-table border :data="tableData" style="background-color:transparent;height:440px;">
              <el-table-column prop="DT" label="时间" align="center">
              </el-table-column>
              <el-table-column prop="Value" label="流量（m³/s）" align="center" width="130">
              </el-table-column>
              <el-table-column prop="Value" label="浓度（mg/L）" align="center" width="140">
              </el-table-column>
            </el-table>
            <div class="boundaryConditions_name">
              <el-button size="small" plain>上传</el-button>
              <el-button size="small" plain>下载</el-button>
            </div>
      </div>
    </div>
    <div class="boundaryConditions_bottom">
        <el-button size="small" plain>保存</el-button>
        <el-button size="small" plain>计算</el-button>
        <el-button size="small" plain>查看结果</el-button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sourcePollutionName:'',//污染源名称
      degradationCoefficient:'',//降解系数
      coordinate:'',//坐标
      riverMiles:'',//河道里程
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
      name:'',
    };
  },
  methods: {
    tap(item, index) {
      this.name = item.name
      if(item.name == '流量边界'){
        this.data[index].data_name = this.DischargeItems;
        this.unit = '流量（m³/s）';
        this.componentName = '';
        this.drawLine();
      }else if(item.name == '水位边界'){
        this.data[index].data_name = this.WaterLevelItems;
        this.unit = '水位（m）';
        this.componentName = '';
        this.drawLine();
      }else if(item.name == '水质边界'){
        this.data[index].data_name = this.WaterQualityItems;
        this.unit = '氨氮（mg/L）';
        this.componentName = 'NH3N';
        this.drawLine();
      }else if(item.name == '降雨站'){
        this.drawBar();
        this.data[index].data_name = this.RainfallItems;
        this.unit = '降雨量（mm）';
        this.componentName = '';
      }else if(item.name == '污染源'){
        this.data[index].data_name = this.PollutionSourceItems;
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
      console.log(this.name)
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
         this.tableData = data
        //  this.drawLine(data);

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
            this.DischargeItems = data.DischargeItems
            this.WaterLevelItems = data.WaterLevelItems
            this.WaterQualityItems = data.WaterQualityItems
            this.RainfallItems = data.RainfallItems
            this.PollutionSourceItems = data.PollutionSourceItems
        });
    },
      drawLine(data) {
        console.log(this.data)
        var xAxisData = [];
        var yAxisData = [];
    //     data.forEach((item,index)=>{
    //     console.log(item);
    //     xAxisData.push(item)
    // })
        var myChart = this.$echarts.init(document.getElementById('echarts_line'));
        // 基于准备好的dom，初始化echarts实例
        myChart.setOption({
            //设置canvas内部表格的内距
        tooltip: {},
        xAxis: {
        type: 'category',
        data: ['2008-08-01', '2008-08-01', '2008-08-01', '2008-08-01', '2008-08-01', '2008-08-01', '2008-08-01'],
         axisLabel: {
           interval:0,
           rotate:40
         }
          },
        yAxis: {
              type: 'value'
          },
        series: [{
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line',
              smooth: true,
          }]
        });
      },
      drawBar() {
        var myChart = this.$echarts.init(document.getElementById('echarts_line'));
        // 基于准备好的dom，初始化echarts实例
        myChart.setOption({
          xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'bar'
    }]
        });
      }
  },
  computed: {},
  mounted() {
    this.getTableData();
  },
  watch: {},
};
</script>
<style scoped>
@import "../../../../static/css/public.css";
</style>
