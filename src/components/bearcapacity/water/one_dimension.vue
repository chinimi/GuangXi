<template>
<!-- 一维 -->
  <div class="dimension">
    <template>
      <el-table
        :data="tableData"
        style="width:100%;background-color: transparent;text-align:center;"
      >
        <el-table-column prop="date" label="评价指标" min-width="100"></el-table-column>
        <el-table-column prop="date" label="排放流量" min-width="100"></el-table-column>
        <el-table-column prop="name" label="排放浓度" min-width="100"></el-table-column>
        <el-table-column prop="name" label="距下断面位置" min-width="120"></el-table-column>
        <el-table-column prop="address" label="进度流量" min-width="100"></el-table-column>
        <el-table-column prop="max" label="进度浓度" min-width="100"></el-table-column>
        <el-table-column prop="mix" label="降解系数" min-width="100">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="mix" label="流速" min-width="80"></el-table-column>
        <el-table-column prop="mix" label="河长" min-width="80"></el-table-column>
        <el-table-column prop="mix" label="承载能力" min-width="100"></el-table-column>
        <el-table-column prop="xas" label="计算结果" min-width="100"></el-table-column>
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
    <div class="compile" v-if="compile_show">
      <div style="position: relative;width:100%;height:100%">
        <p>
          <img src="../../../../static/images/close.png" alt="" @click="claos2()">
        </p>
        <h4>降解系数计算</h4>
        <el-radio-group v-model="redact">
          <el-radio :label="1">实测法</el-radio>
          <el-radio :label="2">经验公式法</el-radio>
        </el-radio-group>
        <div v-if="redact == '1'" class="form_data">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="流速">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="间隔">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="上断面浓度">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="下断面浓度">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="redact == '2'" class="form_data">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="湿周">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
               <el-radio-group v-model="redact_data">
                <el-radio :label="1">K=10.3Q-0.49</el-radio>
                <el-radio :label="2">K=39.6Q-0.34</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "one_dimension",
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
        buttontype:1,
        compile_show:false,
        redact:1,
        form:{
          name:""
        },
        redact_data:1
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
      // 编辑
      handleEdit(){
        this.compile_show = true
      },
      claos2(){
        this.compile_show = false
      },
      company(id){
        this.companys = id
      },
      onSubmit(){
        this.compile_show = false
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
.dimension /deep/ .el-button--mini, .el-button--mini.is-round{
  padding: 2px 15px!important;
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
  left: 0px;
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
  position: absolute;
  width: 700px;
  height: 400px;
  left: 700px;
  top: 0px;
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
/* 编辑弹窗 */
.compile{
  position:absolute;
  width: 400px;
  height: 300px;
  top: 420px;
  left: 420px;
  background: #031823;
  text-align: center;
  box-sizing: border-box;
}
.compile p{
  text-align: right;
  margin: 0;
}
.compile h4{
  margin: 0;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 5px  ;
}
.form_data {
  margin-top: 10px;
  padding: 0 40px;
  color: #FFF;
}
.compile /deep/ .el-form-item__content{
    line-height: 35px;
    position: relative;
    font-size: 14px;
    text-align: left;
}
.compile /deep/ .el-form-item__label{
  line-height: 35px;
  color: #FFF;
}
.compile /deep/ .el-form-item{
  margin-bottom: 2px;
}
.compile /deep/ .el-input__inner{
  width: 180px!important;
}
.compile /deep/ .el-button{
  margin-top: 10px;
  width: 120px!important;
}
</style>
