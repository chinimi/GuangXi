<template>
  <div id="infoSystem">
    <div class="sidebar clear-fix">
      <div class="treeform">
        <div class="stair">
          <ul class="clear-fix">
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
              <ul class="clear-fix treeform_ul">
                <li :class="[TapType == '1' ? 'cur' : '']" @click="TapSwitch(1)">行政区</li>
                <li :class="[TapType == '2' ? 'cur' : '']" @click="TapSwitch(2)">流域</li>
                <li :class="[TapType == '3' ? 'cur' : '']" @click="TapSwitch(3)">河长制</li>
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
      <div class="content" v-if="Type == 1">
        <div v-if="nonelist">
          <!-- 行政区 -->
          <div v-if="TapType == '1'">

          </div>
          <!-- 流域 -->
          <div v-if="TapType == '2'">
            222222222222222
          </div>
          <!-- 河长治 -->
          <div v-if="TapType == '3'">
            3333333333333333
          </div>
        </div>
      </div>
      <!-- 信息查询 -->
      <div class="content" v-if="Type == 2">
        <informationLnquiry></informationLnquiry>
      </div>
      <!-- 水质报告 -->
      <div class="content" v-if="Type == 3">
        <waterQualityReport></waterQualityReport>
      </div>
    </div>
  </div>
</template>

<script>
import informationLnquiry from '../infosys/informationLnquiry.vue'
import waterQualityReport from '../infosys/waterQualityReport.vue'
export default {
  name: "",
  props: {},
  components: {
    informationLnquiry,
    waterQualityReport,
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
      console.log(data.children);
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
#infoSystem {
  position: absolute;
  width: 100%;
  height: calc(100vh - 80px);
  background: rgba(25, 17, 28, 0.57);
  z-index: 1;
}
.sidebar {
  position: relative;
  width: 100%;
  height: 100%;
}
.treeform {
  float: left;
  width: 300px;
  height: 100%;
  background: rgb(21, 37, 63);
  padding-top: 30px;
}
/* 一级导航 */
.stair {
  position: relative;
  width: 100%;
  height: 100%;
}
.stair ul {
  position: relative;
  width: 100%;
  height: 100%;
}
.stair ul li {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  color: #fff;
}
.cur {
  color: rgb(1, 143, 175) !important;
}

.icon-shuidi1:before {
  content: "\E703";
}
.icon-shuidi2:before {
  content: "\E686";
}
.icon-shuidi3:before {
  content: "\E685";
}
.icon-shuidi4:before {
  content: "\E683";
}
/* 一级下拉内容 */
.list {
  position: relative;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
}
/* 搜索框 */
.list /deep/ .el-input {
  box-sizing: border-box;
}
.list /deep/ .el-input--prefix .el-input__inner {
  padding-left: 30px !important;
}
.list /deep/ .el-input__prefix {
  left: 5px;
  top: -5px;
}
.content {
  float: left;
  width: calc(100% - 300px);
  height: 100%;
}
/* tab切换 */
.treeform_ul{
  position: relative;
  width: 100%;
  padding-top: 20px;
  box-sizing: border-box;

}
.treeform_ul li{
  float: left;
  width: 30%;
  box-sizing: border-box;
  background: #01ddff;
  margin-left: 5%;
  box-sizing: border-box;
  text-align: center;
  height: 30px!important;
  line-height: 30px!important;
  border-radius: 5px;
  padding: 0!important;
}
.treeform_ul li:nth-child(1){
  margin-left: 0px;
}
/* 树形图 */
.filter{
  position: relative;
  padding-top: 20px;
}
.filter /deep/ .el-tree{
  background: rgb(21, 37, 63);
  color: #fff;
}
.filter /deep/ .el-tree-node:focus>.el-tree-node__content{
  background-color: rgba(25, 17, 28, 0.2) !important;
  color: rgb(1, 143, 175)!important;
}
.filter /deep/ .el-tree-node__content:hover {
  background-color: rgba(25, 17, 28, 0.2) !important;
}
.filter /deep/ .el-tree-node__content{
  height: 50px!important;
  line-height: 50px!important;
}
</style>
