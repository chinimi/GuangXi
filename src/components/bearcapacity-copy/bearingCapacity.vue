<template>
  <div class="content clearfix">
    <!-- 左侧导航栏 -->
    <div class="navigation">
      <!-- tab切换 -->
      <div class="nav">
        <ul class="clear-fix nav_ui">
          <li :class="[companyType=='1'?'cur':'']" @click="companySwitch(1)">河长制</li>
          <li :class="[companyType=='2'?'cur':'']" @click="companySwitch(2)">流域</li>
          <li :class="[companyType=='3'?'cur':'']" @click="companySwitch(3)">水资源</li>
          <li :class="[companyType=='4'?'cur':'']" @click="companySwitch(4)">行政</li>
        </ul>
        <div class="searchMain " v-if="companyType=='1'">
             <ul class="clear-fix">
            <li>
              <div class="searchMain_div w80">省：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">市：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">县：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">镇：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">村：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
          </ul>
        </div>
        <div class="searchMain " v-if="companyType=='2'">
          <ul class="clear-fix">
            <li>
              <div class="searchMain_div w80">流域：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">水系：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">一级河流：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">二级河流：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
          </ul>
        </div>
        <div class="searchMain " v-if="companyType=='3'">
          <ul class="clear-fix">
            <li>
              <div class="searchMain_div w80">一级分区：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">二级分区：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">三级分区：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">四级分区：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">五级分区：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
          </ul>
        </div>
        <div class="searchMain " v-if="companyType=='4'">
          <ul class="clear-fix">
            <li>
              <div class="searchMain_div w80">省：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">市：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">县：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">镇：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="searchMain_div w80">村：</div>
              <div class="searchMain_div">
                <el-select v-model="one" placeholder="请选择">
                  <el-option
                    v-for="(item,i) in one_options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 水域 -->
      <div class="water">
        <p class="water_p">水域</p>
        <div class="water_div">
          <el-radio-group v-model="radio">
            <el-radio :label="1">河流</el-radio>
            <el-radio :label="2">河口</el-radio>
            <el-radio :label="3">湖库</el-radio>
          </el-radio-group>
        </div>
      </div>
      <!-- 评价项目 -->
      <div class="evaluation">
        <div class="searchMain_div w80">评价项目:</div>
        <div class="searchMain_div">
          <el-select v-model="one" placeholder="请选择">
            <el-option
              v-for="(item,i) in one_options"
              :key="i"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <!-- 水质类别 -->
      <div class="quality">
        <div>
          <div class="searchMain_div w80">水质类别:</div>
          <div class="searchMain_div">
            <el-select v-model="one" placeholder="请选择">
              <el-option
                v-for="(item,i) in one_options"
                :key="i"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="quality_div">
          <el-radio-group v-model="evaluate">
            <el-radio :label="1">按单时间段评价</el-radio>
            <el-radio :label="2">按时间序列评价</el-radio>
            <el-radio :label="3">按同时间段评价</el-radio>
          </el-radio-group>
        </div>
        <div class="step">
          <div class="searchMain_div w80">步长:</div>
          <div class="searchMain_div">
            <el-select v-model="time" placeholder="请选择">
              <el-option
                v-for="(item,i) in time_options"
                :key="i"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div v-show="evaluate == 1">
          <div class="begin step">
            <div class="searchMain_div w80">选择时间:</div>
            <div class="searchMain_div w110" >
              <el-date-picker
                v-model="value2"
                type="month"
                placeholder="选择年月">
              </el-date-picker>
            </div>
          </div>
        </div>
        <div v-show="evaluate == 2">
          <div class="begin step">
            <div class="searchMain_div w80">时间选择:</div>
            <div class="searchMain_div w110" >
              <el-date-picker
                v-model="value2"
                type="month"
                placeholder="选择年月">
              </el-date-picker>
            </div>
          </div>
          <div class="finish step">
            <div class="searchMain_div w80">截止时间:</div>
            <div class="searchMain_div w110">
              <el-date-picker
                v-model="value2"
                type="month"
                placeholder="选择年月">
              </el-date-picker>
            </div>
          </div>
        </div>
        <div v-show="evaluate == 3">
          <div class="begin">
            <div class="searchMain_div w80">选择时间:</div>
            <div class="searchMain_div w110" >
              <el-date-picker
                v-model="value2"
                type="month"
                placeholder="选择年月">
              </el-date-picker>
            </div>
           <div class="searchMain_div w110 pl">
              <el-select v-model="quarter" placeholder="请选择">
                <el-option
                  v-for="(item,i) in quarter_options"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="finish">
            <div class="searchMain_div w80">结束时间:</div>
            <div class="searchMain_div w110">
              <el-date-picker
                v-model="value2"
                type="month"
                placeholder="选择年月">
              </el-date-picker>
            </div>
            <div class="searchMain_div w110 pl">
              <el-select v-model="quarter" placeholder="请选择">
                <el-option
                  v-for="(item,i) in quarter_options"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
      </div>
      <!-- 确定 -->
      <div class="but">
        <el-button @click="confirm(radio)">确定</el-button>
      </div>
    </div>
    <!-- 河流弹窗 -->
    <div class="Mouth" v-show="radio_static == 1">
      <!-- 切换 -->
      <dl>
        <dt>
          <ul class="clear-fix radio_static">
            <li :class="[status=='1'?'cures':'']" @click="condition(1)">零维</li>
            <li :class="[status=='2'?'cures':'']" @click="condition(2)">一维</li>
            <li :class="[status=='3'?'cures':'']" @click="condition(3)">二维</li>
            <li @click="close()">
              <img src="../../../static/images/close.png" alt="">
            </li>
          </ul>
        </dt>
        <dd>
          <div class="tableData">
            <dimension v-if="status==1"></dimension>
            <onedimension v-if="status==2"></onedimension>
            <twodimension v-if="status==3"></twodimension>
          </div>
        </dd>
      </dl>
    </div>
    <!-- 河口弹窗 -->
    <div class="Mouth" v-show="radio_static == 2">
      <!-- 切换 -->
      <dl>
        <dt>
          <ul class="clear-fix radio_static">
            <li class="cures" @click="condition(1)">一维</li>
            <li @click="close()">
              <img src="../../../static/images/close.png" alt="">
            </li>
          </ul>
        </dt>
        <dd>
          <div class="tableData">
            <estuaryOoneDimensional v-show="status==1"></estuaryOoneDimensional>
          </div>
        </dd>
      </dl>
    </div>
    <div class="Mouth" v-show="radio_static == 3">
      <!-- 切换 -->
      <dl>
        <dt>
          <ul class="clear-fix radio_static">
            <li :class="[status=='1'?'cures':'']" @click="condition(1)">零维</li>
            <li :class="[status=='2'?'cures':'']" @click="condition(2)">一维</li>
            <li :class="[status=='3'?'cures':'']" @click="condition(3)">二维</li>
            <li :class="[status=='5'?'cures':'']" @click="condition(5)">富营养化</li>
            <li :class="[status=='4'?'cures':'']" @click="condition(4)">分层</li>
            <li @click="close()">
              <img src="../../../static/images/close.png" alt="">
            </li>
          </ul>
        </dt>
        <dd>
          <div class="tableData">
            <dimension v-if="status==1"></dimension>
            <onedimension v-if="status==2"></onedimension>
            <twodimension v-if="status==3"></twodimension>
            <hierarchy v-if="status==4"></hierarchy>
            <eutrophication v-if="status==5"></eutrophication>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import dimension from '@/components/bearcapacity/water/dimension.vue'
import onedimension from '@/components/bearcapacity/water/one_dimension.vue'
import twodimension from '@/components/bearcapacity/water/two_dimension.vue'
import hierarchy from '@/components/bearcapacity/water/hierarchy.vue'
import eutrophication from '@/components/bearcapacity/water/eutrophication.vue'
import estuaryOoneDimensional from '@/components/bearcapacity/water/estuary_one_dimensional.vue'//河口一维
export default {
  components: {
    dimension,//零维
    onedimension,//一维
    twodimension,//二维
    hierarchy,//分层
    eutrophication,//富营养化
    estuaryOoneDimensional,//河口一维
  },
  data() {
    return {
      companyType: '1', //河长制、流域、水资源、行政
      one:'',//一级分区
      one_options:[
        {label:'COD,BOD',value:'1'},
        {label:'TP,TN',value:'2'},
        {label:'组分3',value:'3'},
      ],

      // 步长
      time:'4',
      time_options:[
         {label:'旬',value:'1'},
         {label:'汛期',value:'2'},
         {label:'非汛期',value:'3'},
         {label:'双月',value:'4'},
         {label:'季度',value:'5'},
         {label:'半年',value:'6'},
         {label:'年',value:'7'},
      ],
      value2:'',
      quarter:'',
      quarter_options:[
        {label:'上旬',value:'1'},
        {label:'中旬',value:'2'},
        {label:'下旬',value:'3'},
      ],
      // 弹窗1
      river:false,
      radio: 1,//水域切换
      radio_static:0,//显示弹窗
      status:'1',
      evaluate:1,//评价切换
      show:false
    };
  },
  methods: {
    // 河长制切换切换
    companySwitch(id) {
      this.companyType = id;
    },

    // 确定
    confirm(id){
      console.log(id)
      this.radio_static = id;
    },
    // 水域内容切换
    condition(id){
      this.status = id;
    },
    close(){
      this.radio_static = false
    }
  },
  computed: {},
  mounted() {},
  watch: {}
};
</script>
<style scoped="scoped">
.content {
  position: absolute;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 1;
  color: #ffffff;
}
.w80{
  width: 80px;
}
.w100{
  width: 100px;
}
.w110{
  width: 110px;
}
.w215{
  width: 215!important;
}
.navigation {
  position: relative;
  float: left;
  width: 350px;
  height: 800px;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 10px;
  background: #031823;
  padding: 20px 10px;
}
/* tab切换 */
.nav {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #01ddff;
}
.nav_ui li {
  width: 21%;
  float: left;
  text-align: center;
  border-bottom: 1px solid #01ddff;
  margin: 0 2%;
  padding-bottom: 5px;
  box-sizing: border-box;
}
.cur {
  color: #01c3e4;
}
.searchMain{
  position: relative;
  width: 100%;
  text-align: center;
}
.searchMain ul{
  text-align: center;
  padding: 10px 0;
}
.searchMain ul li{
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
  text-align: center;
}
.searchMain_div{
  line-height: 35px;
  height: 35px;
  display: inline-block;
}
.content /deep/ .el-input__inner {
  padding-left: 24px !important;
  border: 1px solid #058cd0;
  background: rgba(21,37,63,0.86);
  -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  font-size: 14px !important;
  height: 30px !important;
  width: 130px !important;
}
/* s水域 */
.water{
    position: relative;
    width: 100%;
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #01ddff;
    box-sizing: border-box;
}
.water_p{
  color: #058cd0;
  text-align: left;
  margin: 0;
  height: 30px;
  line-height: 30px;
}
.water_div,.quality{
  padding: 5px 0;
}
.el-radio-group{
  width: 100%;
}
.water_div /deep/ .el-radio{
  margin-right: 0!important;
  width: 33.3%;
    height: 25px;
  line-height: 25px;
}
/* 评价 */
.evaluation{
  position: relative;
  width: 100%;
  padding: 20px;
  color: #058cd0;
  border-bottom: 1px solid #01ddff;
  box-sizing: border-box;
}
/* 水质类别 */
.quality{
  position: relative;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #01ddff;
  box-sizing: border-box;
}
.quality_div{
  padding: 10px 0;
}
.step .searchMain_div /deep/ .el-input__inner{
  width: 215px!important;
}
.quality /deep/ .el-radio{
   margin-right: 0!important;
  width: 50%;
  height: 25px;
  line-height: 25px;
}
.begin /deep/ .el-input__inner,.finish /deep/ .el-input__inner  {
  padding-left: 30px !important;
  border: 1px solid #058cd0;
  background: rgba(21,37,63,0.86);
  -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  font-size: 14px !important;
  height: 30px !important;
  width: 100px !important;
}
.begin /deep/ .el-input--suffix .el-input__inner,
.finish /deep/ .el-input--suffix .el-input__inner{
  padding-right: 0px;
}
.pl /deep/ .el-input--suffix .el-input__inner{
  padding-left: 15px!important;
}
.but{
  position: relative;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
.but button{
  background: url("../../../static/images/nav_title_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 150px;
  border: none;
  color: #ffffff;
  text-align: center;
}
/* 弹窗 */
.Mouth{
  position: absolute;
  /* float: left; */
  width: 550px;
  height: 350px;
  left: 25%;
  top: 25%;
  transform: translate(0,-50%);
}
.Mouth dl{
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
}
.Mouth dl dt ul li{
  float: left;
  width: 90px;
  height: 30px;
  line-height: 30px;
  background: #031823;
  text-align: center;
  margin-left: 10px;
}
.cures{
  background: #058cd0!important;
  color: #031823 ;
}
.Mouth dl dt ul li:nth-child(1){
  margin-left: 0;
}
.radio_static li:last-child{
  width: 30px;
  float:right;
  background: none;
}
.radio_static li:last-child img{
  position: relative;
  width: 100%;
  height: 100%;
}
.Mouth dl dd{
  margin: 0;
  position: relative;
  width: 100%;
  height: calc(100% - 30px);
  background: #031823;
  border:2px  solid #058cd0;
  box-sizing: border-box;
}
.tableData{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.cures{
  background: #058cd0!important;
  color: #031823 ;
}
</style>
