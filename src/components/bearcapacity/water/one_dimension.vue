<template>
<!-- 一维 -->
  <div class="dimension">
    <template>
      <el-table
        :data="tableData_1"
        border
        style="background-color: transparent;"
        :header-cell-style="{background:' linear-gradient(0deg, #F3F3F3, #FEFEFE)'}"
        height="260"
        :cell-class-name="getRowColumn"
        @cell-click="handleCellClick">
        <el-table-column prop="pjzb" label="评价指标" min-width="180">
             <template slot-scope="scope" >
            <el-input   v-model="scope.row.pjzb"   @blur="inputBlur"></el-input>
             </template>
        </el-table-column>
        <el-table-column prop="jsll" label="进水流量(m³/s)" min-width="180">
         <template slot-scope="scope">
            <el-input   v-model="scope.row.jsll" maxlength="10" @blur="inputBlur"></el-input>
                 </template>
        </el-table-column>
        <el-table-column prop="jsnd" label="进水浓度(mg/l)" min-width="180">
          <template slot-scope="scope">
            <el-input   v-model="scope.row.jsnd" @blur="inputBlur"></el-input>
             </template>
        </el-table-column>
        <el-table-column prop="pfll" label="排放流量(m³/s)" min-width="180">
        <template slot-scope="scope">
            <el-input   v-model="scope.row.pfll" @blur="inputBlur"></el-input>
             </template>
        </el-table-column>
        <el-table-column prop="pfnd" label="排放浓度(mg/l)" min-width="180">
        <template slot-scope="scope">
            <el-input   v-model="scope.row.pfnd" @blur="inputBlur"></el-input>
             </template>
        </el-table-column>
        <el-table-column prop="dmwz" label="排放口距评价断面位置(m)" min-width="180">
           <template slot-scope="scope">
            <el-input   v-model="scope.row.dmwz" @blur="inputBlur"></el-input>
             </template>
        </el-table-column>
        <el-table-column prop="jjxs" label="降解系数" min-width="180">
            <template slot-scope="scope">
            <el-input   v-model="scope.row.jjxs" @blur="inputBlur"></el-input>
             </template>
        </el-table-column>
        <el-table-column prop="cz" label="操作"  min-width="40">
          <template slot-scope="scope">
            <img @click="handleEdit(scope.$index, scope.row)" src="/static/images/icon/bianji.png" alt="">
          </template>
        </el-table-column>
        <el-table-column prop="hc" label="河长(m)" min-width="180">
             <template slot-scope="scope">
            <el-input   v-model="scope.row.hc" @blur="inputBlur"></el-input>
             </template>
        </el-table-column>
        <el-table-column prop="ls" label="流速(m/s)" min-width="180">
         <template slot-scope="scope">
            <el-input   v-model="scope.row.ls" @blur="inputBlur"></el-input>
             </template>
        </el-table-column>
        <!-- <el-table-column prop="mix" label="承载能力" min-width="100"></el-table-column> -->
        <el-table-column prop="jsjg" label="计算结果" ></el-table-column>
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
    <div class="mask" v-if="compile_show">
      <div class="compile">
        <div style="position: relative;width:100%;height:100%">
          <div class="compile_title">
            <span>降解系数计算</span>
            <p>
              <img src="../../../../static/images/close.png" alt="" @click="claos2()">
            </p>
          </div>

          <el-radio-group v-model="redact" class="redact">
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
                <el-radio-group v-model="redact_data" class="redact">
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
  </div>
</template>
<script>
export default {
  name: "one_dimension",
  props: {},
  components: {},
  data() {
    return {
       tabRowIndex: null,
      tabColumnIndex: null,
        type:0,

        tableData_1:[
            {pjzb:'COD',jsll:'20',jsnd:'10',pfll:'10',pfnd:'50',dmwz:'10000',jjxs:'0.0000017',hc:'50000',ls:'0.5',jsjg:''},
            {pjzb:'BOD',jsll:'20',jsnd:'1',pfll:'10',pfnd:'5',dmwz:'10000',jjxs:'0.000001',hc:'50000',ls:'0.5',jsjg:''},
            {pjzb:'TP',jsll:'20',jsnd:'0.1',pfll:'10',pfnd:'0.5',dmwz:'10000',jjxs:'0.0000007',hc:'50000',ls:'0.5',jsjg:''},
       
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
      }
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
