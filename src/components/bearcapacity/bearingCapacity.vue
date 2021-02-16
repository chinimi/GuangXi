<template>
  <div class="Bearing">
      <!-- 左侧导航栏 -->
      <div class="navigation">
        <!-- tab切换 -->
        <div class="nav">
          <ul class="clear-fix nav_ui">
            <li :class="[companyType=='1'?'csour':'']" @click="companySwitch(1)">河长制</li>
            <li :class="[companyType=='2'?'csour':'']" @click="companySwitch(2)">流域</li>
            <li :class="[companyType=='3'?'csour':'']" @click="companySwitch(3)">水资源</li>
            <li :class="[companyType=='4'?'csour':'']" @click="companySwitch(4)">行政</li>
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
              <li :class="[status=='1'?'csour':'']" @click="condition(1)">零维</li>
              <li :class="[status=='2'?'csour':'']" @click="condition(2)">一维</li>
              <li :class="[status=='3'?'csour':'']" @click="condition(3)">一维MIKE</li>
              <li :class="[status=='4'?'csour':'']" @click="condition(4)">二维</li>
              <li @click="close()">
                <div class="butt_close">
                  <img src="../../../static/images/close.png" alt="">
                </div>
              </li>
            </ul>
          </dt>
          <dd>
            <div class="tableData">
              <dimension v-if="status==1"></dimension>
              <onedimension v-if="status==2"></onedimension>
              <onedimensionMIKE v-if="status==3"></onedimensionMIKE>
              <twodimension v-if="status==4"></twodimension>
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
              <li :class="[status=='1'?'csour':'']" @click="condition(1)">一维</li>
              <li :class="[status=='2'?'csour':'']" @click="condition(2)">一维MIKE</li>
              <li @click="close()">
                <div class="butt_close">
                  <img src="../../../static/images/close.png" alt="">
                </div>
              </li>
            </ul>
          </dt>
          <dd>
            <div class="tableData">
              <estuaryOoneDimensional v-if="status==1"></estuaryOoneDimensional>
              <onedimensionMIKE v-if="status==2"></onedimensionMIKE>
            </div>
          </dd>
        </dl>
      </div>
      <!-- 湖库弹窗 -->
      <div class="Mouth" v-show="radio_static == 3">
        <!-- 切换 -->
        <dl>
          <dt>
            <ul class="clear-fix radio_static">
              <li :class="[status=='1'?'csour':'']" @click="condition(1)">零维</li>
              <li :class="[status=='2'?'csour':'']" @click="condition(2)">一维</li>
              <li :class="[status=='3'?'csour':'']" @click="condition(3)">一维MIKE</li>
              <li :class="[status=='4'?'csour':'']" @click="condition(4)">二维</li>
              <li :class="[status=='5'?'csour':'']" @click="condition(5)">富营养化</li>
              <li :class="[status=='6'?'csour':'']" @click="condition(6)">分层</li>
              <li @click="close()">
                <div class="butt_close">
                  <img src="../../../static/images/close.png" alt="">
                </div>
              </li>
            </ul>
          </dt>
          <dd>
            <div class="tableData">
              <dimension v-if="status==1"></dimension>
              <onedimension v-if="status==2"></onedimension>
              <onedimensionMIKE v-if="status==3"></onedimensionMIKE>
              <twodimension v-if="status==4"></twodimension>
              <hierarchy v-if="status==5"></hierarchy>
              <eutrophication v-if="status==6"></eutrophication>
            </div>
          </dd>
        </dl>
      </div>
  </div>
</template>
<script>
import dimension from '@/components/bearcapacity/water/dimension.vue'//零维
import onedimension from '@/components/bearcapacity/water/one_dimension.vue'//一维
import onedimensionMIKE from '@/components/bearcapacity/water/one_dimensionMIKE.vue'//一维mike
import twodimension from '@/components/bearcapacity/water/two_dimension.vue'//二维
import hierarchy from '@/components/bearcapacity/water/hierarchy.vue'//富营养化
import eutrophication from '@/components/bearcapacity/water/eutrophication.vue'//分层
import estuaryOoneDimensional from '@/components/bearcapacity/water/estuary_one_dimensional.vue'//河口一维
export default {
  components: {
    dimension,//零维
    onedimension,//一维
    onedimensionMIKE,//一维mike
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
      this.status = 1;
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
<style scoped>
@import '../../../static/css/public.css';
</style>
