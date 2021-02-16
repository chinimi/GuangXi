<template>
  <div class="hydrology">
    <div class="title">
      <div class="tab">
        <ul class="clear-fix">
          <li :class="[TapType == '1' ? 'curs' : '']" @click="TapSwitch(1)">入河排污口</li>
          <li :class="[TapType == '2' ? 'curs' : '']" @click="TapSwitch(2)">采（冶）矿区</li>
          <li :class="[TapType == '3' ? 'curs' : '']" @click="TapSwitch(3)">工业园区</li>
          <li :class="[TapType == '4' ? 'curs' : '']" @click="TapSwitch(4)">规模化养殖区</li>
        </ul>
      </div>
    </div>
    <div class="sheet">
      <!-- 入河排污口 -->
      <div class="table" v-if="TapType == '1'">
        <el-table
          :data="outsideData"
          border
          style="background-color: transparent;"
          height="600"
        >
          <el-table-column label="序号" type="index" min-width="50">
            <template slot-scope="scope">{{scope.$index+(pageIndex - 1) * pageSize + 1}}</template>
          </el-table-column>
          <el-table-column prop="PersonName" label="入河排污口编码"></el-table-column>
          <el-table-column prop="IDCard" label="入河排污口名称"></el-table-column>
          <el-table-column prop="CorpName" label="排污许可证代码"></el-table-column>
          <el-table-column prop="SpecialtyTypeName" label="地址"></el-table-column>
          <el-table-column prop="Zhuanye" label="入河排污口性质"></el-table-column>
          <el-table-column prop="EndDate" label="建成日期"></el-table-column>
          <el-table-column prop="CertNum" label="排放方式"></el-table-column>
          <el-table-column prop="PublishDateTime" label="入河方式"></el-table-column>
          <el-table-column prop="Nat" label="设计日排污能力（t）"></el-table-column>
          <el-table-column prop="Nat" label="排入水体名称"></el-table-column>
          <el-table-column prop="Nat" label="排污口管径（m）"></el-table-column>
          <el-table-column prop="Nat" label="运行状况"></el-table-column>
          <el-table-column prop="Nat" label="备注"></el-table-column>
        </el-table>
      </div>
      <!-- 采（冶）矿区 -->
      <div class="table" v-if="TapType == '2'">
        <el-table
          :data="outsideData"
          border
          style="background-color: transparent;"
          height="600"
        >
          <el-table-column label="序号" type="index" min-width="50">
            <template slot-scope="scope">{{scope.$index+(pageIndex - 1) * pageSize + 1}}</template>
          </el-table-column>
          <el-table-column prop="PersonName" label="测站编码"></el-table-column>
          <el-table-column prop="IDCard" label="测站名称"></el-table-column>
          <el-table-column prop="CorpName" label="测站名备注"></el-table-column>
          <el-table-column prop="SpecialtyTypeName" label="测站级别"></el-table-column>
          <el-table-column prop="Zhuanye" label="测站种类"></el-table-column>
          <el-table-column prop="EndDate" label="测站位置(经纬度)"></el-table-column>
          <el-table-column prop="CertNum" label="所属市"></el-table-column>
          <el-table-column prop="CertNum" label="所属水系"></el-table-column>
          <el-table-column prop="Nat" label="备注"></el-table-column>
        </el-table>
      </div>
      <!-- 工业园区 -->
      <div class="table" v-if="TapType == '3'"><div class=""></div>
        <el-table
          :data="outsideData"
          border
          style="background-color: transparent;"
          height="600"
        >
          <el-table-column label="序号" type="index" min-width="50">
            <template slot-scope="scope">{{scope.$index+(pageIndex - 1) * pageSize + 1}}</template>
          </el-table-column>
          <el-table-column prop="PersonName" label="测站编码"></el-table-column>
          <el-table-column prop="IDCard" label="测站名称"></el-table-column>
          <el-table-column prop="CorpName" label="测站名备注"></el-table-column>
          <el-table-column prop="SpecialtyTypeName" label="测站级别"></el-table-column>
          <el-table-column prop="Zhuanye" label="测站种类"></el-table-column>
          <el-table-column prop="EndDate" label="测站位置(经纬度)"></el-table-column>
          <el-table-column prop="CertNum" label="所属市"></el-table-column>
          <el-table-column prop="CertNum" label="所属水系"></el-table-column>
          <el-table-column prop="Nat" label="备注"></el-table-column>
        </el-table>
      </div>
      <!-- 规模化养殖区 -->
      <div class="table" v-if="TapType == '4'">
        <el-table
          :data="outsideData"
          border
          style="background-color: transparent;"
          height="600"
        >
          <el-table-column label="序号" type="index" min-width="50">
            <template slot-scope="scope">{{scope.$index+(pageIndex - 1) * pageSize + 1}}</template>
          </el-table-column>
          <el-table-column prop="PersonName" label="测站编码"></el-table-column>
          <el-table-column prop="IDCard" label="测站名称"></el-table-column>
          <el-table-column prop="CorpName" label="测站名备注"></el-table-column>
          <el-table-column prop="SpecialtyTypeName" label="测站级别"></el-table-column>
          <el-table-column prop="Zhuanye" label="测站种类"></el-table-column>
          <el-table-column prop="EndDate" label="测站位置(经纬度)"></el-table-column>
          <el-table-column prop="CertNum" label="所属市"></el-table-column>
          <el-table-column prop="CertNum" label="所属水系"></el-table-column>
          <el-table-column prop="Nat" label="备注"></el-table-column>
        </el-table>
      </div>
      <div class="pages">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'waterPollutionInformation',
  data() {
    return {
      TapType:1,
      Total: 0, //总数据条数
      pageIndex: 1, //当前页码
      pageSize: 10, //每页展现条数
      outsideData:[
        {
          PersonName:'1',
          IDCard:'监测',
          CorpName:'',
          SpecialtyTypeName:'',
          Zhuanye:'',
          EndDate:'',
          CertNum:'',
          PublishDateTime:'',
          Nat:'',
        },
        {
          PersonName:'1',
          IDCard:'监测',
          CorpName:'',
          SpecialtyTypeName:'',
          Zhuanye:'',
          EndDate:'',
          CertNum:'',
          PublishDateTime:'',
          Nat:'',
        },
        {
          PersonName:'1',
          IDCard:'监测',
          CorpName:'',
          SpecialtyTypeName:'',
          Zhuanye:'',
          EndDate:'',
          CertNum:'',
          PublishDateTime:'',
          Nat:'',
        },
        {
          PersonName:'1',
          IDCard:'监测',
          CorpName:'',
          SpecialtyTypeName:'',
          Zhuanye:'',
          EndDate:'',
          CertNum:'',
          PublishDateTime:'',
          Nat:'',
        },
      ]
    }
  },
  created() {

  },
  mounted(){

  },
  methods: {
    TapSwitch(id){
      this.TapType = id
    },
    //每页显示条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  }
};
</script>

<style scoped>
@import '../../../../static/css/public.css';
.hydrology .title .tab ul li{
  width: 120px;
}
</style>
