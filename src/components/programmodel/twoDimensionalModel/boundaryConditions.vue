<template>
<!--边界条件主组件-->
  <div class="boundaryConditions">
    <div class="boundaryConditions_top">
      <div class="boundaryConditions_left">
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
      <div class="boundaryConditions_content" v-if="water">
        <div class="clear-fix">
          <el-table border :data="tableData" style="background-color: transparent;height:450px;">
            <el-table-column prop="DT" label="时间" align="center">
            </el-table-column>
            <el-table-column prop="Value" :label="unit" align="center" width="130">
            </el-table-column>
          </el-table>
          <div class="boundaryConditions_name">
            <el-button type="primary" size="small" plain>上传</el-button>
            <el-button type="primary" size="small" plain>下载</el-button>
          </div>
        </div>
      </div>
      <div class="boundaryConditions_right" v-if="water">
        <div class="echarts_map">曲线图</div>
      </div>
      <div class="boundaryConditions_content" v-if="sourcePollution" style="border: 1px solid #EBEEF5;padding-top:10px;">
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
              <el-input style="width:180px" v-model="input" placeholder="请输入内容"></el-input>
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
              <el-button type="primary" size="small" plain>上传</el-button>
              <el-button type="primary" size="small" plain>下载</el-button>
            </div>
      </div>
    </div>
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
    };
  },
  methods: {
    tap(item, index) {
      if(item.name == '流量边界'){
        this.data[index].data_name = this.DischargeItems;
        this.unit = '流量（m³/s）'
      }else if(item.name == '水位边界'){
        this.data[index].data_name = this.WaterLevelItems;
        this.unit = '水位（m）'
      }else if(item.name == '水质边界'){
        this.data[index].data_name = this.WaterQualityItems;
        this.unit = '氨氮（mg/L）'
      }else if(item.name == '降雨站'){
        this.data[index].data_name = this.RainfallItems;
        this.unit = '降雨量（mm）'
      }else if(item.name == '污染源'){
        this.data[index].data_name = this.PollutionSourceItems;
        this.water = false;
        this.sourcePollution = true;
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
      this.active = index

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
<style scoped>
@import "../../../../static/css/public.css";
</style>
