<template>
  <div id="infoSystem">
    <div class="sidebar clear-fix">
      <div class="tree_form">
        <div class="stair">
          <ul class="clear-fix stair_ui">
            <li :class="[Type == '1' ? 'cur' : '']" @click=" Switch(1);contraction(statse);">
              <i class="iconfont icon-shuidi1"></i>
              信息汇总
            </li>
            <div class="list" v-if="statse">
              <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="filterText"
              >
              </el-input>
              <ul class="clear-fix tree_form_ui">
                <li :class="[TapType == '1' ? 'curer' : '']" @click="TapSwitch(1)">行政区</li>
                <li :class="[TapType == '2' ? 'curer' : '']" @click="TapSwitch(2)">流域</li>
                <li :class="[TapType == '3' ? 'curer' : '']" @click="TapSwitch(3)">河长制</li>
              </ul>
              <div class="filter" v-if="TapType == '1'">
                <el-tree
                  class="filter-tree"
                  :data="data1"
                  accordion
                  :props="defaultProps"
                  :filter-node-method="filterNode"
                  @node-click="handleNodeClick"
                  ref="tree">
                </el-tree>
              </div>
              <div class="filter" v-if="TapType == '2'">
                <el-tree
                  class="filter-tree"
                  :data="data2"
                  accordion
                  :props="defaultProps"
                  :filter-node-method="filterNode"
                  @node-click="handleNodeClick"
                  ref="tree">
                </el-tree>
              </div>
              <div class="filter" v-if="TapType == '3'">
                <el-tree
                  class="filter-tree"
                  :data="data3"
                  accordion
                  :props="defaultProps"
                  :filter-node-method="filterNode"
                  @node-click="handleNodeClick"
                  ref="tree">
                </el-tree>
              </div>
            </div>
            <li :class="[Type == '2' ? 'cur' : '']" @click="Switch(2)">
              <i class="iconfont icon-shuidi2"></i>
              信息查询
            </li>
            <li :class="[Type == '3' ? 'cur' : '']" @click="Switch(3)">
              <i class="iconfont icon-shuidi3"></i>
              水质报告
            </li>
            <li :class="[Type == '4' ? 'cur' : '']" @click="Switch(4)">
              <i class="iconfont icon-shuidi4"></i>
              权限管理
            </li>
          </ul>
        </div>
      </div>
      <!-- 信息汇总 -->
      <div class="DataPage" v-if="Type == 1">
          <!-- 行政区 -->
        <div v-if="TapType == '1' &&  nonelist" class="orientation">
          <administrative></administrative>
        </div>
        <!-- 流域 -->
        <div v-if="TapType == '2' && nonelist" class="orientation">
          <drainageBasin></drainageBasin>
        </div>
        <!-- 河长治 -->
        <div v-if="TapType == '3' && nonelist" class="orientation">
          <riverChiefSystem></riverChiefSystem>
        </div>
      </div>
      <!-- 信息查询 -->
      <div class="DataPage" v-if="Type == 2">
        <informationLnquiry></informationLnquiry>
      </div>
      <!-- 水质报告 -->
      <div class="DataPage" v-if="Type == 3">
        <waterQualityReport></waterQualityReport>
      </div>
    </div>
  </div>
</template>

<script>
import administrative from '../infosys/administrative.vue'//信息汇总行政区
import drainageBasin from '../infosys/drainageBasin.vue'//信息汇总流域
import riverChiefSystem from '../infosys/riverChiefSystem.vue'//信息汇总河长制
import informationLnquiry from '../infosys/informationLnquiry.vue'//信息报告
import waterQualityReport from '../infosys/waterQualityReport.vue'//水质报告
export default {
  name: "infoSystem",
  props: {},
  components: {
    administrative,//信息汇总行政区
    drainageBasin,//信息汇总流域
    riverChiefSystem,//信息汇总河长制
    informationLnquiry,//信息报告
    waterQualityReport,//水质报告
  },
  data() {
    return {
      filterText: "",
      Type: "1",
      statse: false,
      TapType:'1',
      nonelist:false,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data1: [{
          id: 1,
          label: '省级行政区',
          children: [{
            id: 4,
            label: '广西壮族自治区',
          }]
        }, {
          id: 2,
          label: '市级行政区',
          children: [{
            id: 5,
            label: '南宁市'
          }, {
            id: 6,
            label: '桂林市'
          }, {
            id: 7,
            label: '柳州市'
          }, {
            id: 8,
            label: '梧州市'
          }, {
            id: 9,
            label: '北海市'
          }, {
            id: 10,
            label: '防城港市'
          }]
        }, {
          id: 3,
          label: '重点关注地区',
          children: [{
            id: 11,
            label: '南宁市'
          }, {
            id: 12,
            label: '桂林市'
          }]
      }],
      data2: [{
          id: 1,
          label: '省级河道',
          children: [{
            id: 4,
            label: '红水河',
          },{
            id: 5,
            label: '柳江',
          },{
            id: 6,
            label: '桂江',
          }]
        }, {
          id: 2,
          label: '市级河道',
          children: [{
            id: 7,
            label: '琵江'
          }, {
            id: 8,
            label: '马巢河'
          }, {
            id: 9,
            label: '柳州市'
          }, {
            id: 10,
            label: '凤凰江'
          }, {
            id: 11,
            label: '良凤江'
          }, {
            id: 12,
            label: '良庆河'
          }]
        }, {
          id: 3,
          label: '重点关注地区',
          children: [{
            id: 13,
            label: '左江'
          }, {
            id: 14,
            label: '右江'
          }]
      }],
      data3: [{
          id: 1,
          label: '省级河长制公示牌',
          children: [{
            id: 4,
            label: '公示牌GX0001',
          },{
            id: 5,
            label: '公示牌GX0002',
          },{
            id: 6,
            label: '公示牌GX0003',
          }]
        }, {
          id: 2,
          label: '市级河长制公示牌',
          children: [{
            id: 7,
            label: '公示牌GX0004'
          }, {
            id: 8,
            label: '公示牌GX0005'
          }, {
            id: 9,
            label: '公示牌GX0006'
          }, {
            id: 10,
            label: '公示牌GX0007'
          }, {
            id: 11,
            label: '公示牌GX0008'
          }, {
            id: 12,
            label: '公示牌GX0009'
          }]
        }, {
          id: 3,
          label: '重点关注公示牌',
          children: [{
            id: 13,
            label: '公示牌GX00010'
          }, {
            id: 14,
            label: '公示牌GX00011'
          }]
      }],
      label:null,
    };
  },
  methods: {
    //  赋值状态
    Switch(id) {
      this.Type = id;
    },
    // 一级展开收缩
    contraction(id) {
      if (id == true) {
        this.statse = false;
      } else if (id == false) {
        this.statse = true;
      }
    },
    TapSwitch(id){
      this.TapType = id
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // 获取属性图
    handleNodeClick(data) {
      if(data.children == undefined){
        this.nonelist = true
      }else{
        this.nonelist = false
      }
    }
  },
  mounted() {},
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  computed: {},
  filters: {}
};
</script>
<style scoped>
@import '../../../static/css/public.css';
</style>>