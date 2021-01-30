<template>
  <div class="dimension">
    <template>
      <el-table
        :data="tableData"
        style="width:100%;background-color: transparent;text-align:center;"
      >
        <el-table-column prop="date" label="评价指标"></el-table-column>
        <el-table-column prop="name" label="排放流量"></el-table-column>
        <el-table-column prop="address" label="排放浓度"></el-table-column>
        <el-table-column prop="max" label="进水流量"></el-table-column>
        <el-table-column prop="mix" label="进水浓度"></el-table-column>
        <el-table-column prop="xas" label="计算结果"></el-table-column>
      </el-table>
    </template>
    <div class="dimension_button">
        <el-button :class="[type==1?'cur':'']" @click.native="tabbar(1)">计算方法</el-button>
        <el-button :class="[type==2?'cur':'']" @click.native="tabbar(2)">计算结果</el-button>
        <el-button :class="[type==3?'cur':'']" @click.native="tabbar(3)">查看结果</el-button>
        <el-button :class="[type==4?'cur':'']" @click.native="tabbar(4)">保存入库</el-button>
    </div>
    <div v-if="echarts_show" class="echarts">
        <div class="close">
          <img src="../../../../static/images/close.png" alt="" @click="claos()">
        </div>
        <div class="echarts_data" >
          <div id="echarts_bar" class="echarts_bar"></div>
        </div>
    </div>
    <div class="table_data" v-if="table_show">
        <div class="calculate">
          <ul class="clear-fix">
            <li :class="[companyType=='1'?'cures':'']" @click="companySwitch(1)">实测法</li>
            <li :class="[companyType=='2'?'cures':'']" @click="companySwitch(2)">调查法</li>
            <li :class="[companyType=='3'?'cures':'']" @click="companySwitch(3)">估算法</li>
            <li @click="claos1()">
                <img src="../../../../static/images/close.png" alt="">
            </li>
          </ul>
        </div>
        <div class="calculate_content" v-if="companyType == 1">
           <template>
            <el-table
              :data="tableData1"
              style="width:100%;background-color: transparent;text-align:center;margin-bottom: 10px;"
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
                <el-button :class="[buttontype==1?'cur':'']" @click.native="buttontabbar(1)">计算方法</el-button>
                <el-button :class="[buttontype==2?'cur':'']" @click.native="buttontabbar(2)">计算结果</el-button>
                <el-button :class="[buttontype==3?'cur':'']" @click.native="buttontabbar(3)">查看结果</el-button>
                <el-button :class="[buttontype==4?'cur':'']" @click.native="buttontabbar(4)">保存入库</el-button>
            </div>
        </div>
        <div class="calculate_content" v-if="companyType == 2">
           <template>
            <el-table
              :data="tableData1"
              style="width:100%;background-color: transparent;text-align:center;margin-bottom: 10px;"
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
                <el-button :class="[buttontype==1?'cur':'']" @click.native="buttontabbar(1)">计算方法</el-button>
                <el-button :class="[buttontype==2?'cur':'']" @click.native="buttontabbar(2)">计算结果</el-button>
                <el-button :class="[buttontype==3?'cur':'']" @click.native="buttontabbar(3)">查看结果</el-button>
                <el-button :class="[buttontype==4?'cur':'']" @click.native="buttontabbar(4)">保存入库</el-button>
            </div>
        </div>
        <div class="calculate_content" v-if="companyType == 3">
           <template>
            <el-table
              :data="tableData1"
              style="width:100%;background-color: transparent;text-align:center;margin-bottom: 10px;"
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
                <el-button :class="[buttontype==1?'cur':'']" @click.native="buttontabbar(1)">计算方法</el-button>
                <el-button :class="[buttontype==2?'cur':'']" @click.native="buttontabbar(2)">计算结果</el-button>
                <el-button :class="[buttontype==3?'cur':'']" @click.native="buttontabbar(3)">查看结果</el-button>
                <el-button :class="[buttontype==4?'cur':'']" @click.native="buttontabbar(4)">保存入库</el-button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "two_dimension",
  props: {},
  components: {},
  data() {
    return {
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
      drawLine(){
            var myChart = this.$echarts.init(document.getElementById('echarts_bar'));
        // 基于准备好的dom，初始化echarts实例
        myChart.setOption({
            tooltip: {},
            xAxis: {
                axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ffffff'
                            }
                        }, axisLine: {            // 坐标轴线
        show: true,        // 默认显示，属性show控制显示与否
        lineStyle: {       // 属性lineStyle控制线条样式
            color: '#ffffff',
            type: 'solid'
        }
    },
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {
                axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ffffff'
                            }
                        },
                        axisLine: {            // 坐标轴线
        show: true,        // 默认显示，属性show控制显示与否
        lineStyle: {       // 属性lineStyle控制线条样式
            color: '#ffffff',
            type: 'solid'
        }}

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
.dimension  /deep/ .el-table .cell{
    font-size: 16px;
}
.dimension  /deep/ .el-table th.is-leaf{
    border:0px!important;
}
.el-table::before{
    height: 0px!important;
}
.dimension  /deep/ .el-table td{
    text-align: center;
    border: 1px solid #01bdf5;
    padding: 5px 0;
    color: #fff;
}
.dimension_button{
    text-align: right;
    position: relative;
    padding: 0;
    width: 100%;
    padding: 10px 0;
    border-bottom:1px solid #01ddff;
}
.dimension_button /deep/ .el-button{
    padding: 0;
}
.cur{
    color: #000!important;
}
.dimension_button button{
    width: 80px;
    height: 30px;
    background: #01ddff;
    color: #fff;
    border: 0;
}
.echarts{
  position: absolute;
  background: #031823;
  width: 400px;
  height: 300px;
  top: 350px;
  left: 75px;
}
.close{
  position: relative;
  text-align: right;
}
.close img{
  width: 25px;
}
.echarts_data{
  position: relative;
  width: 100%;
  height: calc(100% - 25px);
}
.echarts_bar{
  position: relative;
  width: 100%;
  height: 100%;
}
.table_data{
  position: fixed;
  width: 700px;
  height: 400px;
  left: 700px;
  top: 100px;
}
.calculate{
  position: relative;
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.calculate ul li{
  float: left;
  width: 90px;
  height: 30px;
  line-height: 30px;
  background: #031823;
  text-align: center;
  margin-left: 10px;
}
.calculate ul li:nth-child(1){
  margin: 0;
}
.calculate li:last-child{
  width: 30px;
  float:right;
  background: none;
}
.calculate li:last-child img{
  position: relative;
  width: 100%;
  height: 100%;
}
.cures{
  background: #058cd0!important;
  color: #031823 ;
}
.calculate_content{
  position: relative;
  width: 100%;
  height: calc(100% - 30px);
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #031823;
  border: 2px solid #058cd0;
}
.calculate_content /deep/ .el-table__body{
  margin-bottom: 10px;
}
.calculate_content /deep/ .el-table th.is-leaf {
    text-align: center;
}
.calculate_content /deep/ .el-table .cell {
    font-size: 14px;
}
</style>
