<template>
  <div class="hydrology">
    <div class="title"></div>
    <div class="sheet">
      <div class="table">
        <el-table
          :data="outsideData"
          border
          style="background-color: transparent;"
          height="600"
        >
          <el-table-column label="序号" type="index" min-width="50">
            <template slot-scope="scope">{{scope.$index+(pageIndex - 1) * pageSize + 1}}</template>
          </el-table-column>
          <el-table-column prop="PersonName" label="河段名称"></el-table-column>
          <el-table-column prop="IDCard" label="公示牌编码"></el-table-column>
          <el-table-column prop="CorpName" label="公示牌位置"></el-table-column>
          <el-table-column prop="SpecialtyTypeName" label="河段长度（km）"></el-table-column>
          <el-table-column prop="Zhuanye" label="监督电话"></el-table-column>
          <el-table-column prop="EndDate" label="起止点位置"></el-table-column>
          <el-table-column prop="CertNum" label="河长姓名"></el-table-column>
          <el-table-column prop="PublishDateTime" label="管护目标"></el-table-column>
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
  name:'publicBoardInformation',
  data() {
    return {
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
</style>
