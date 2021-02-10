<template>
  <div class="administrative clear-fix">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <!-- 树形图 -->
      <el-tree :data="data"
        node-key="id"
        :props="defaultProps"
        icon-class="1"
        accordion
        @node-click="handleNodeClick">
      >
      <!-- <span class="custom-tree-node" slot-scope="{ node , data }"> -->
        <span class="custom-tree-node" slot-scope="{ data }">
          <span>
            <i :class="data.icon"></i>{{ data.label }}
          </span>
        </span>
      </el-tree>
    </div>
    <!-- 内容 -->
    <div class="content">
      <publicBoardInformation v-if="value == 4"></publicBoardInformation>
      <HCZriverTourRecord v-if="value == 5"></HCZriverTourRecord>
      <IssueReceipt v-if="value == 6"></IssueReceipt>
      <HCZrainfallMonitoringStation v-if="value == 7"></HCZrainfallMonitoringStation>
      <HCZhydrologicalStation v-if="value == 8"></HCZhydrologicalStation>
      <HCZwaterQualityMonitoringStation v-if="value == 9"></HCZwaterQualityMonitoringStation>
    </div>
  </div>
</template>

<script>
import publicBoardInformation from '../infosys/riverChiefSystem/publicBoardInformation.vue'
import HCZriverTourRecord from '../infosys/riverChiefSystem/HCZriverTourRecord.vue'
import IssueReceipt from '../infosys/riverChiefSystem/IssueReceipt.vue'
import HCZrainfallMonitoringStation from '../infosys/riverChiefSystem/HCZrainfallMonitoringStation.vue'
import HCZhydrologicalStation from '../infosys/riverChiefSystem/HCZhydrologicalStation.vue'
import HCZwaterQualityMonitoringStation from '../infosys/riverChiefSystem/HCZwaterQualityMonitoringStation.vue'
export default {
  name:'administrative',
   components: {
     publicBoardInformation,
     HCZriverTourRecord,
     IssueReceipt,
     HCZrainfallMonitoringStation,
     HCZhydrologicalStation,
     HCZwaterQualityMonitoringStation
  },
  data() {
    return {
      data: [
        {
          id: 1,
          label: '公示牌信息',
          icon: 'el-icon-menu',
          children: [
            {
              id: 4,
              label: '河长制公示牌信息',
            },
          ]
        },
        {
          id: 2,
          label: '河段事件信息',
          icon: 'el-icon-menu',
          children: [
            {
              id: 5,
              label: '巡河记录',
            },
             {
              id: 6,
              label: '问题回执',
            },
          ]
        },
        {
          id: 3,
          label: '监测站',
          icon: 'el-icon-menu',
          children: [
            {
              id: 7,
              label: '雨量监测站',
            },
            {
              id: 8,
              label: '水文监测站',
            },
            {
              id: 9,
              label: '水质监测站',
            },
          ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      value:0
    }
  },
  created() {

  },
  mounted(){

  },
  methods: {
    handleNodeClick(data) {
      // console.log(data)
      if(data.children == undefined){
        this.value = data.id
      }
      console.log(this.value)
    }
  }
};
</script>

<style scoped>
.administrative{
  position: relative;
  width: 100%;
  height: 100%;
}
/* 侧边栏 */
.sidebar{
  width: 15%;
  float: left;
  height: 100%;
  border-left:1px solid #ffffff;
  background: rgb(21, 37, 63);
  padding-top: 25px;
  box-sizing: border-box;
}
.sidebar /deep/ .el-tree{
  position: relative;
  cursor: default;
  color: #ffffff;
  background: none;
  font-size: 14px;
}
.sidebar /deep/ .el-tree-node:focus>.el-tree-node__content{
  background-color: rgba(25, 17, 28, 0.2) !important;
  color: rgb(1, 143, 175)!important;
}
.sidebar /deep/ .el-tree-node__content:hover {
  background-color: rgba(25, 17, 28, 0.2) !important;
}
.sidebar /deep/ .el-tree-node__content{
  height: 50px!important;
  line-height: 50px!important;
}
/* 内容 */
.content{
  width: 85%;
  float: left;
  height: 100%;
  box-sizing: border-box;
}

</style>
