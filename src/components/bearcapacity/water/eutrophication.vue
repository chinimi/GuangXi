<template>
<!-- 分层 -->
  <div class="dimension">
    <template>
      <el-table
        :data="tableData_FYY"
        border
        style="background-color: transparent;"
        :header-cell-style="{background:' linear-gradient(0deg, #F3F3F3, #FEFEFE)'}"
        height="260"
        :cell-class-name="getRowColumn"
        @cell-click="handleCellClick">

        <el-table-column prop="pjzb" label="评价指标" min-width="100">
          <template slot-scope="scope">
            <el-input   v-model="scope.row.pjzb" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="rkl" label="入库量(t/a)" min-width="90">
         <template slot-scope="scope">
            <el-input   v-model="scope.row.rkl" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="ckl" label="出库量(t/a)" min-width="90">
          <template slot-scope="scope">
            <el-input   v-model="scope.row.ckl" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="dwmj" label="单位面积负荷（g/m²·a）" min-width="160">
        <template slot-scope="scope">
            <el-input   v-model="scope.row.dwmj" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="smmj" label="水面面积（m²）" min-width="100">
             <template slot-scope="scope">
            <el-input   v-model="scope.row.smmj" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="ks" label="库深（m）" min-width="80">
           <template slot-scope="scope">
            <el-input   v-model="scope.row.ks" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="kr" label="库容（m³）" min-width="80">
            <template slot-scope="scope">
            <el-input   v-model="scope.row.kr" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="cksl" label="出库水量（m³/a）" min-width="100">
           <template slot-scope="scope">
            <el-input   v-model="scope.row.cksl" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="nd" label="控制浓度（g/m³）" min-width="100">
         <template slot-scope="scope">
            <el-input   v-model="scope.row.nd" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="hppjss" label="湖泊平均水深（m）" min-width="160">
             <template slot-scope="scope">
            <el-input   v-model="scope.row.hppjss" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="jsqpjss" label="计算区平均水深（m）" min-width="170">
              <template slot-scope="scope">
            <el-input   v-model="scope.row.jsqpjss" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="jsqsmmj" label="计算区水面面积（km²）" min-width="170">
            <template slot-scope="scope">
            <el-input   v-model="scope.row.jsqsmmj" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="szmbz" label="水质目标值（mg/L）" min-width="150"> 
           <template slot-scope="scope">
            <el-input   v-model="scope.row.szmbz" @blur="inputBlur"></el-input>
                 </template>
              </el-table-column>
        <el-table-column prop="cksl" label="出库水量（m³/a）" min-width="100">
           <template slot-scope="scope">
            <el-input   v-model="scope.row.cksl" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="hqkr" label="湖区库容（m³）" min-width="100">
            <template slot-scope="scope">
            <el-input   v-model="scope.row.hqkr" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="jsjg" label="计算结果" min-width="100"></el-table-column>
      </el-table>
    </template>
    <div class="dimension_button">
        <el-button :class="[type==1?'':'']" @click.native="tabbar(1)">计算方法</el-button>
        <el-button :class="[type==2?'':'']" @click.native="tabbar(2)">计算结果</el-button>
        <el-button :class="[type==3?'':'']" @click.native="tabbar(3)">查看结果</el-button>
        <el-button :class="[type==4?'':'']" @click.native="tabbar(4)">保存入库</el-button>
    </div>
    <div class="mask" v-if="echarts_show">
      <div class="echarts">
          <div class="close">
            <img src="../../../../static/images/close.png" alt="" @click="claos()">
          </div>
          <div class="echarts_data" >
            <div id="echarts_bar" class="echarts_bar"></div>
          </div>
      </div>
    </div>
    <div class="mask" v-if="table_show">
      <div class="table_data">
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
  name: "eutrophication",
  props: {},
  components: {},
  data() {
    return {
       tabRowIndex: null,
      tabColumnIndex: null,
        type:0,
        tableData_FYY:[
            {pjzb:'TP',rkl:'15',ckl:'8',dwmj:'100',
            smmj:'10000',ks:'3',kr:'30000',
            cksl:'500000',nd:'1.5',
            hppjss:'90',jsqpjss:'1.5',
            jsqsmmj:'0.1',szmbz:'1.5',
            cksl:'80000',hqkr:'10000',jsjg:''},
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
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped>
@import '../../../../static/css/public.css';
</style>
