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
        <publicBoardInformation v-if="value == 4"></publicBoardInformation>
        <HCZriverTourRecord v-if="value == 5"></HCZriverTourRecord>
        <IssueReceipt v-if="value == 6"></IssueReceipt>
        <HCZrainfallMonitoringStation v-if="value == 7"></HCZrainfallMonitoringStation>
        <HCZhydrologicalStation v-if="value == 8"></HCZhydrologicalStation>
        <HCZwaterQualityMonitoringStation v-if="value == 9"></HCZwaterQualityMonitoringStation>
      </div>
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
      value:4,
      name:'河长制公示牌信息',
    }
  },
  created() {

  },
  mounted(){

  },
  methods: {
    handleNodeClick(data) {
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
</style>
