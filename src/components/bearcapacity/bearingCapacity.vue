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
              <div class="searchMain_div">一级分区：</div>
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
              <div class="searchMain_div">二级分区：</div>
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
              <div class="searchMain_div">三级分区：</div>
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
              <div class="searchMain_div">四级分区：</div>
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
              <div class="searchMain_div">五级分区：</div>
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
              <div class="searchMain_div">一级分区：</div>
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
              <div class="searchMain_div">二级分区：</div>
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
              <div class="searchMain_div">三级分区：</div>
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
              <div class="searchMain_div">四级分区：</div>
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
              <div class="searchMain_div">五级分区：</div>
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
              <div class="searchMain_div">省：</div>
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
              <div class="searchMain_div">市：</div>
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
              <div class="searchMain_div">县：</div>
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
              <div class="searchMain_div">镇：</div>
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
              <div class="searchMain_div">村：</div>
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
          <el-radio-group v-model="radio1">
            <el-radio :label="1">按单时间段评价</el-radio>
            <el-radio :label="2">按时间序列评价</el-radio>
            <el-radio :label="3">按同时间段评价</el-radio>
          </el-radio-group>
        </div>
        <div>
          <div class="searchMain_div w80">步长:</div>
          <div class="searchMain_div ">
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
        <div class="begin">
          <div class="searchMain_div w80">开始时间:</div>
          <div class="searchMain_div w120">
            <el-date-picker
              v-model="value2"
              type="month"
              placeholder="选择年月">
            </el-date-picker>
          </div>
           <div class="searchMain_div w110">
            <el-select v-model="quarter" placeholder="请选择">
              <el-option
                v-for="(item,i) in quarter_options"
                :key="i"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="finish">
            <div class="searchMain_div w80">结束时间:</div>
            <div class="searchMain_div w120">
              <el-date-picker
                v-model="value2"
                type="month"
                placeholder="选择年月">
              </el-date-picker>
            </div>
            <div class="searchMain_div w110">
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
        <el-button @click="confirm()">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      companyType: '1', //河长制、流域、水资源、行政
      one:'',//一级分区
      one_options:[
        {label:'北京',value:'1'},
        {label:'上海',value:'2'},
      ],
      //水域
      radio: 1,
      radio1:1,
      // 步长
      time:'',
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
    };
  },
  methods: {
    // tab切换
    companySwitch(id) {
      this.companyType = id;
    },
    // 确定
    confirm(){
      console.log(this.radio)
    }
  },
  computed: {},
  mounted() {},
  watch: {}
};
</script>
<style scoped="scoped">
.content {
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 1;
  /* background: #ffffff; */
  color: #ffffff;
}
.w80{
  width: 80px;
}
.w110{
  width: 110px;
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
  text-align: right;
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
.quality /deep/ .el-radio{
   margin-right: 0!important;
  width: 50%;
  height: 25px;
  line-height: 25px;
}
.begin /deep/ .el-input__inner {
  padding-left: 30px !important;
  border: 1px solid #058cd0;
  background: rgba(21,37,63,0.86);
  -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  font-size: 14px !important;
  height: 30px !important;
  width: 100px !important;
}
.begin /deep/ .el-date-editor.el-input {
  width: 100px !important;
}
.begin /deep/ .el-input--suffix .el-input__inner{
  padding-right: 0px !important;
}
.w110 /deep/ .el-input__inner{
  padding-left: 10px !important;
}
/* 按钮 */
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
</style>
