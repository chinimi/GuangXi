<template>
<!-- 零维 -->
  <div class="dimension">
    <template>
      <el-table
        :data="tableData_0"
        border
        style="background-color: transparent;"
        :header-cell-style="{background:' linear-gradient(0deg, #F3F3F3, #FEFEFE)'}"
        :cell-class-name="getRowColumn"
        @cell-click="handleCellClick"
        height="260">
        <el-table-column prop="pjzb" label="评价指标">
             <template slot-scope="scope">
            <el-input   v-model="scope.row.pjzb" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>

        <el-table-column prop="pfll" label="排放流量(m³/s)">
         <template slot-scope="scope">
            <el-input   v-model="scope.row.pfll" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>

        <el-table-column prop="pfnd" label="排放浓度(mg/l)">
         <template slot-scope="scope">
            <el-input   v-model="scope.row.pfnd" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>

        <el-table-column prop="jsll" label="进水流量(m³/s)">
          <template slot-scope="scope">
            <el-input   v-model="scope.row.jsll" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>

        <el-table-column prop="jsnd" label="进水浓度(mg/l)">
         <template slot-scope="scope">
            <el-input   v-model="scope.row.jsnd" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="jsjg" label="计算结果"></el-table-column>
      </el-table>
    </template>
    <div class="dimension_button">
        <el-button :class="[type==1?'':'']" @click.native="tabbar(1)">计算方法</el-button>
        <el-button :class="[type==2?'':'']" @click.native="tabbar(2)">计算结果</el-button>
        <el-button :class="[type==3?'':'']" @click.native="tabbar(3)">查看结果</el-button>
        <el-button :class="[type==4?'':'']" @click.native="tabbar(4)">保存入库</el-button>
    </div>
    <!-- echarts查看结果 -->
    <div class="mask" v-if="echarts_show">
      <div  class="echarts">
        <div class="close">
          <img src="../../../../static/images/close.png" alt="" @click="claos()">
        </div>
        <div class="echarts_data" >
          <div id="echarts_bar" class="echarts_bar"></div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="table_show">
      <div class="table_data" >
          <div class="calculate">
            <ul class="clear-fix">
              <li :class="[companyType=='1'?'cures':'']" @click="companySwitch(1)">实测法</li>
              <li :class="[companyType=='2'?'cures':'']" @click="companySwitch(2)">调查法</li>
              <li :class="[companyType=='3'?'cures':'']" @click="companySwitch(3)">估算法</li>
              <li @click="claos1()">
                <div class="butt_close">
                  <img src="../../../../static/images/close.png" alt="">
                </div>
              </li>
            </ul>
          </div>
          <div class="calculate_content" v-if="companyType == 1">
            <template>
              <el-table
                :data="tableData1"
                border
                style="background-color: transparent;"
                :header-cell-style="{background:' linear-gradient(0deg, #F3F3F3, #FEFEFE)'}"
                height="300"
              >
                <el-table-column prop="PK" label="排口名称" width="100"></el-table-column>
                <el-table-column prop="RH" label="入河系数" width="100"></el-table-column>
                <el-table-column prop="CS" label="传输距离(m)" width="120"></el-table-column>
                <el-table-column prop="SY" label="输移速度(m/s)" width="120"></el-table-column>
                <el-table-column prop="JJ" label="降解系数" width="100"></el-table-column>
                <el-table-column prop="LL" label="流量(m³/s)" width="100"></el-table-column>
                <el-table-column prop="COD" label="COD" width="100"></el-table-column>
                <el-table-column prop="BOD" label="BOD" width="100"></el-table-column>
                <el-table-column prop="TP" label="TP" width="100"></el-table-column>
                <el-table-column prop="TN" label="TN" width="100"></el-table-column>
              </el-table>
            </template>
              <div class="dimension_button">
                  <el-button :class="[buttontype==1?'':'']" @click.native="buttontabbar(1)">计算方法</el-button>
                  <el-button :class="[buttontype==2?'':'']" @click.native="buttontabbar(2)">计算结果</el-button>
                  <el-button :class="[buttontype==3?'':'']" @click.native="buttontabbar(3)">查看结果</el-button>
                  <el-button :class="[buttontype==4?'':'']" @click.native="buttontabbar(4)">保存入库</el-button>
              </div>
          </div>
          <div class="calculate_content" v-if="companyType == 2">
            <template>
              <el-table
                :data="tableData1"
                border
                style="background-color: transparent;"
                :header-cell-style="{background:' linear-gradient(0deg, #F3F3F3, #FEFEFE)'}"
                height="300"
                >
                <el-table-column prop="PK" label="排口名称1" width="100"></el-table-column>
                <el-table-column prop="RH" label="入河系数" width="100"></el-table-column>
                <el-table-column prop="CS" label="传输距离(m)" width="120"></el-table-column>
                <el-table-column prop="SY" label="输移速度(m/s)" width="120"></el-table-column>
                <el-table-column prop="JJ" label="降解系数" width="100"></el-table-column>
                <el-table-column prop="LL" label="流量(m³/s)" width="100"></el-table-column>
                <el-table-column prop="COD" label="COD" width="100"></el-table-column>
                <el-table-column prop="BOD" label="BOD" width="100"></el-table-column>
                <el-table-column prop="TP" label="TP" width="100"></el-table-column>
                <el-table-column prop="TN" label="TN" width="100"></el-table-column>
              </el-table>
            </template>
              <div class="dimension_button">
                  <el-button :class="[buttontype==1?'':'']" @click.native="buttontabbar(1)">计算方法</el-button>
                  <el-button :class="[buttontype==2?'':'']" @click.native="buttontabbar(2)">计算结果</el-button>
                  <el-button :class="[buttontype==3?'':'']" @click.native="buttontabbar(3)">查看结果</el-button>
                  <el-button :class="[buttontype==4?'':'']" @click.native="buttontabbar(4)">保存入库</el-button>
              </div>
          </div>
          <div class="calculate_content" v-if="companyType == 3">
            <template>
              <el-table
                :data="tableData1"
                border
                style="background-color: transparent;"
                :header-cell-style="{background:' linear-gradient(0deg, #F3F3F3, #FEFEFE)'}"
                height="300"
              >
                <el-table-column prop="PK" label="排口名称2" width="100"></el-table-column>
                <el-table-column prop="RH" label="入河系数" width="100"></el-table-column>
                <el-table-column prop="CS" label="传输距离(m)" width="120"></el-table-column>
                <el-table-column prop="SY" label="输移速度(m/s)" width="120"></el-table-column>
                <el-table-column prop="JJ" label="降解系数" width="100"></el-table-column>
                <el-table-column prop="LL" label="流量(m³/s)" width="100"></el-table-column>
                <el-table-column prop="COD" label="COD" width="100"></el-table-column>
                <el-table-column prop="BOD" label="BOD" width="100"></el-table-column>
                <el-table-column prop="TP" label="TP" width="100"></el-table-column>
                <el-table-column prop="TN" label="TN" width="100"></el-table-column>
              </el-table>
            </template>
              <div class="dimension_button">
                  <el-button :class="[buttontype==1?'':'']" @click.native="buttontabbar(1)">计算方法</el-button>
                  <el-button :class="[buttontype==2?'':'']" @click.native="buttontabbar(2)">计算结果</el-button>
                  <el-button :class="[buttontype==3?'':'']" @click.native="buttontabbar(3)">查看结果</el-button>
                  <el-button :class="[buttontype==4?'':'']" @click.native="buttontabbar(4)">保存入库</el-button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dimension",
  props: {},
  components: {},
  data() {
    return {

      tabRowIndex: null,
      tabColumnIndex: null,
        tableData_0:[
            {pjzb:'COD',pfll:'10',pfnd:'50',jsll:'20',jsnd:'10',jsjg:''},
            {pjzb:'NH3',pfll:'10',pfnd:'5',jsll:'20',jsnd:'1',jsjg:''},
            {pjzb:'TP',pfll:'10',pfnd:'0.5',jsll:'20',jsnd:'0.1',jsjg:''},
          
        ],
        type:0,
        tableData:[
            {date:'COD',name:'',address:'',max:'',mix:'',xas:''},
            {date:'BOD',name:'',address:'',max:'',mix:'',xas:''},
            {date:'TP',name:'',address:'',max:'',mix:'',xas:''},
            {date:'TN',name:'',address:'',max:'',mix:'',xas:''},
            {date:'组分3',name:'',address:'',max:'',mix:'',xas:''},
        ],
        tableData1:[
          {PK:'排口',RH:'',CS:'',SY:'',JJ:'',LL:'',COD:'',BOD:'',TP:'',TN:''},
          {PK:'排口',RH:'',CS:'',SY:'',JJ:'',LL:'',COD:'',BOD:'',TP:'',TN:''},
          {PK:'排口',RH:'',CS:'',SY:'',JJ:'',LL:'',COD:'',BOD:'',TP:'',TN:''},
          {PK:'排口',RH:'',CS:'',SY:'',JJ:'',LL:'',COD:'',BOD:'',TP:'',TN:''},
          {PK:'排口',RH:'',CS:'',SY:'',JJ:'',LL:'',COD:'',BOD:'',TP:'',TN:''},
        ],
        echarts_show:false,
        table_show:false,
        companyType:1,
        buttontype:1
    };
  },
  methods: {
    //点击单元格得到横纵坐标
    handleCellClick(row, column, event, cell) {
      this.tabRowIndex = row.index;
      this.tabColumnIndex = column.index;
      this.tableValue.push(row);
    },
    //数据中没有横纵坐标需要加上进行下一步判断
    getRowColumn({ row, column, rowIndex, columnIndex }) {
      row.index = rowIndex;
      column.index = columnIndex;
    },
    inputBlur() {
      this.tabRowIndex = null;
      this.tabColumnIndex = "";
    },

      tabbar(id){
        this.type = id;
        if(id == 3){
          this.echarts_show = true;
          	this.$nextTick(() => {
            //  执行echarts方法
              this.drawLine();
            })
        }else if(id == 1){
           this.table_show = true;
        }
      },
      // 关闭
      claos(){
        this.echarts_show = false
      },
      claos1(){
        this.table_show = false
      },
      companySwitch(id){
        this.companyType = id
      },
      buttontabbar(id){
        this.buttontype = id
      },
      drawLine() {
        var myChart = this.$echarts.init(document.getElementById('echarts_bar'));
        // 基于准备好的dom，初始化echarts实例
        myChart.setOption({
          tooltip: {},
          xAxis: {
            axisLabel: {
              show: true,
              textStyle: {
                color: '#000'
              }
            },
            axisLine: { // 坐标轴线
              show: true, // 默认显示，属性show控制显示与否
              lineStyle: { // 属性lineStyle控制线条样式
                color: '#000',
                type: 'solid'
              }
            },
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {
            axisLabel: {
              show: true,
              textStyle: {
                color: '#000'
              }
            },
            axisLine: { // 坐标轴线
              show: true, // 默认显示，属性show控制显示与否
              lineStyle: { // 属性lineStyle控制线条样式
                color: '#000',
                type: 'solid'
              }
            }

          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
  },
  mounted() {
     this.drawLine();

    this.getTableData();

  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped>
@import '../../../../static/css/public.css';
</style>
