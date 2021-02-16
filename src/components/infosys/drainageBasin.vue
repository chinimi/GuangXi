<template>
  <div class="administrative clear-fix">
    <!-- 标题 -->
    <div class="administrative_title">
      <div>{{this.name}}</div>
    </div>
   <!-- 内容页 -->
    <div class="administrative_content">
      <!-- 侧边栏 -->
      <div class="sidebar_data">
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
      <div class="content_name">
        <catchmentStatusInformation v-if="value == 5"></catchmentStatusInformation>
        <LYwaterResourceInformation v-if="value == 6"></LYwaterResourceInformation>
        <LYwaterPollutionInformation v-if="value == 7"></LYwaterPollutionInformation>
        <waterQualityInformation v-if="value == 8"></waterQualityInformation>
        <listRiverMastersAndLakeMasters v-if="value == 9"></listRiverMastersAndLakeMasters>
        <riverTourRecord v-if="value == 10"></riverTourRecord>
        <meetingSummary v-if="value == 11"></meetingSummary>
        <ARiverAPolicy v-if="value == 12"></ARiverAPolicy>
        <ARiverFirstGear v-if="value == 13"></ARiverFirstGear>
        <delimitationLakes v-if="value == 14"></delimitationLakes>
        <LYnationalExaminationWaterQualitySection v-if="value == 15"></LYnationalExaminationWaterQualitySection>
        <LYprovincialExaminationWaterQualitySection v-if="value == 16"></LYprovincialExaminationWaterQualitySection>
        <LYrainfallMonitoringStation v-if="value == 17"></LYrainfallMonitoringStation>
        <LYhydrologicalStation v-if="value == 18"></LYhydrologicalStation>
        <LYwaterQualityMonitoringStation></LYwaterQualityMonitoringStation>
      </div>
    </div>
  </div>
</template>

<script>
import catchmentStatusInformation from '../infosys/drainageBasin/catchmentStatusInformation.vue'
import LYwaterResourceInformation from '../infosys/drainageBasin/LYwaterResourceInformation.vue'
import LYwaterPollutionInformation from '../infosys/drainageBasin/LYwaterPollutionInformation.vue'
import waterQualityInformation from '../infosys/drainageBasin/waterQualityInformation.vue'
import listRiverMastersAndLakeMasters from '../infosys/drainageBasin/listRiverMastersAndLakeMasters.vue'
import riverTourRecord from '../infosys/drainageBasin/riverTourRecord.vue'
import meetingSummary from '../infosys/drainageBasin/meetingSummary.vue'
import ARiverAPolicy from '../infosys/drainageBasin/ARiverAPolicy.vue'
import ARiverFirstGear from '../infosys/drainageBasin/ARiverFirstGear.vue'
import delimitationLakes from '../infosys/drainageBasin/delimitationLakes.vue'
import LYnationalExaminationWaterQualitySection from '../infosys/drainageBasin/LYnationalExaminationWaterQualitySection.vue'
import LYprovincialExaminationWaterQualitySection from '../infosys/drainageBasin/LYprovincialExaminationWaterQualitySection.vue'
import LYrainfallMonitoringStation from '../infosys/drainageBasin/LYrainfallMonitoringStation.vue'
import LYhydrologicalStation from '../infosys/drainageBasin/LYhydrologicalStation.vue'
import LYwaterQualityMonitoringStation from '../infosys/drainageBasin/LYwaterQualityMonitoringStation.vue'
export default {
  name:'drainageBasin',
   components: {
     catchmentStatusInformation,
     LYwaterResourceInformation,
     LYwaterPollutionInformation,
     waterQualityInformation,
     listRiverMastersAndLakeMasters,
     riverTourRecord,
     meetingSummary,
     ARiverAPolicy,
     ARiverFirstGear,
     delimitationLakes,
     LYnationalExaminationWaterQualitySection,
     LYprovincialExaminationWaterQualitySection,
     LYrainfallMonitoringStation,
     LYhydrologicalStation,
     LYwaterQualityMonitoringStation
  },
  data() {
    return {
      data: [
        {
          id: 1,
          label: '基础水文信息',
          icon: 'el-icon-menu',
          children: [
            {
              id: 5,
              label: '基本特征现状信息',
            },
            {
              id: 6,
              label: '水资源信息',
            },
            {
              id: 7,
              label: '水污染信息',
            },
            {
              id: 8,
              label: '水质信息',
            },
          ]
        },
        {
          id: 2,
          label: '河长制信息',
          icon: 'el-icon-menu',
          children: [
            {
              id: 9,
              label: '河长湖长名录',
            },
            {
              id: 10,
              label: '巡河记录',
            },
             {
              id: 11,
              label: '会议纪要',
            },
             {
              id: 12,
              label: '一河一策',
            },
             {
              id: 13,
              label: '一河一档',
            },
             {
              id: 14,
              label: '河湖划界确权',
            },
          ]
        },
        {
          id: 3,
          label: '断面',
          icon: 'el-icon-menu',
          children: [
            {
              id: 15,
              label: '国考水质断面',
            },
            {
              id: 16,
              label: '省考水质断面',
            },
          ]
        },
        {
          id: 4,
          label: '监测站',
          icon: 'el-icon-menu',
          children: [
            {
              id: 17,
              label: '雨量监测站',
            },
            {
              id: 18,
              label: '水文监测站',
            },
            {
              id: 19,
              label: '水质监测站',
            },
          ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      value:5,
      name:'流域基本特征现状信息'
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
        this.name = data.label
      }
    }
  }
};
</script>

<style scoped>
@import '../../../static/css/public.css';
.administrative_title div{
  width: 200px;
}
</style>
