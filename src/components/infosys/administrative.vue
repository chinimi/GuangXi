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
      <hydrological v-if="value == 4"></hydrological>
      <waterResourceInformation v-if="value == 5"></waterResourceInformation>
      <waterPollutionInformation v-if="value == 6"></waterPollutionInformation>
      <waterEnvironmentInformation v-if="value == 7"></waterEnvironmentInformation>
      <waterEcologicalInformation v-if="value == 8"></waterEcologicalInformation>
      <nationalExaminationWaterQualitySection v-if="value == 9"></nationalExaminationWaterQualitySection>
      <provincialExaminationWaterQualitySection v-if="value == 10"></provincialExaminationWaterQualitySection>
      <rainfallMonitoringStation v-if="value == 11"></rainfallMonitoringStation>
      <hydrologicalStation v-if="value == 12"></hydrologicalStation>
      <waterQualityMonitoringStation></waterQualityMonitoringStation>
    </div>
  </div>
</template>

<script>
import hydrological from '../infosys/administrative/hydrology.vue'
import waterResourceInformation from '../infosys/administrative/waterResourceInformation.vue'
import waterPollutionInformation from '../infosys/administrative/waterPollutionInformation.vue'
import waterEnvironmentInformation from '../infosys/administrative/waterEnvironmentInformation.vue'
import waterEcologicalInformation from '../infosys/administrative/waterEcologicalInformation.vue'
import nationalExaminationWaterQualitySection from '../infosys/administrative/nationalExaminationWaterQualitySection.vue'
import provincialExaminationWaterQualitySection from '../infosys/administrative/provincialExaminationWaterQualitySection.vue'
import rainfallMonitoringStation from '../infosys/administrative/rainfallMonitoringStation.vue'
import hydrologicalStation from '../infosys/administrative/hydrologicalStation.vue'
import waterQualityMonitoringStation from '../infosys/administrative/waterQualityMonitoringStation.vue'
export default {
  name:'administrative',
   components: {
     hydrological,
     waterResourceInformation,
     waterPollutionInformation,
     waterEnvironmentInformation,
     waterEcologicalInformation,
     nationalExaminationWaterQualitySection,
     provincialExaminationWaterQualitySection,
     rainfallMonitoringStation,
     hydrologicalStation,
     waterQualityMonitoringStation
  },
  data() {
    return {
      data: [
        {
          id: 1,
          label: '水文资料',
          icon: 'el-icon-menu',
          children: [
            {
              id: 4,
              label: '水文基础信息',
            },
            {
              id: 5,
              label: '水资源信息',
            },
            {
              id: 6,
              label: '水污染信息',
            },
            {
              id: 7,
              label: '水环境信息',
            },
            {
              id: 8,
              label: '水生态信息',
            },
          ]
        },
        {
          id: 2,
          label: '断面',
          icon: 'el-icon-menu',
          children: [
            {
              id: 9,
              label: '国考水质断面',
            },
            {
              id: 10,
              label: '省考水质断面',
            },
          ]
        },
        {
          id: 3,
          label: '监测站',
          icon: 'el-icon-menu',
          children: [
            {
              id: 11,
              label: '雨量监测站',
            },
            {
              id: 12,
              label: '水文监测站',
            },
            {
              id: 13,
              label: '水质监测站',
            },
          ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      value:4
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
