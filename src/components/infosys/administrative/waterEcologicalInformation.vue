<template>
  <div class="hydrology">
    <div class="title">
      <div class="text">水生态信息</div>
      <div class="tab">
        <ul class="clear-fix">
          <li :class="[TapType == '1' ? 'cur' : '']" @click="TapSwitch(1)">河湖湿地</li>
          <li :class="[TapType == '2' ? 'cur' : '']" @click="TapSwitch(2)">生态工程</li>
        </ul>
      </div>
    </div>
    <div class="sheet">
      <!-- 河湖湿地 -->
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
          <el-table-column prop="PersonName" label="测站编码"></el-table-column>
          <el-table-column prop="IDCard" label="测站名称"></el-table-column>
          <el-table-column prop="CorpName" label="测站名备注"></el-table-column>
          <el-table-column prop="SpecialtyTypeName" label="测站级别"></el-table-column>
          <el-table-column prop="Zhuanye" label="测站种类"></el-table-column>
          <el-table-column prop="EndDate" label="测站位置（经纬度）"></el-table-column>
          <el-table-column prop="Nat" label="所属市"></el-table-column>
          <el-table-column prop="Nat" label="所属水系"></el-table-column>
          <el-table-column prop="Nat" label="备注"></el-table-column>
        </el-table>
      </div>
      <!-- 生态工程 -->
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
          <el-table-column prop="EndDate" label="测站位置（经纬度）"></el-table-column>
          <el-table-column prop="Nat" label="所属市"></el-table-column>
          <el-table-column prop="Nat" label="所属水系"></el-table-column>
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
  name:'hydrology',
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
.hydrology{
  position: relative;
  width: 100%;
  height: 100%;
  background: rgb(21, 37, 63);
  padding: 25px;
  box-sizing: border-box;
  color: #ffffff;
}
/* 头部切换 */
.title{
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.title .text{
  float: left;
  width: 20%;
  font-size: 16px;
}
.title .tab{
  float: left;
  width: 80%;
}
.title .tab ul{
  position: relative;
  width: 100%;
    height: 30px!important;
  line-height: 30px!important;
  top: 10px;
}
.title .tab ul li{
  float: left;
  -webkit-box-sizing: border-box;
  width: 120px;
  box-sizing: border-box;
  background: #01ddff;
  box-sizing: border-box;
  text-align: center;
  margin-left: 10px;
  height: 30px!important;
  line-height: 30px!important;
  border-radius: 5px;
  padding: 0!important;
}
.cur {
  color: rgb(1, 143, 175) !important;
}
.title .tab ul li:nth-child(1) {
    margin-left: 0px;
}
/* 内容 */
.sheet{
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
}
.table{
  width: 100%;
  height: 90%;
}
</style>
