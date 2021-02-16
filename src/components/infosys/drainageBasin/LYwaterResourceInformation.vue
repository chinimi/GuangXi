<template>
  <div class="hydrology">
    <div class="title"></div>
    <div class="sheet">
      <!-- 取水口 -->
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
          <el-table-column prop="PersonName" label="取水口编码" min-width="100"></el-table-column>
          <el-table-column prop="IDCard" label="取水口名称" min-width="100"></el-table-column>
          <el-table-column prop="CorpName" label="取水方式" min-width="100"></el-table-column>
          <el-table-column prop="SpecialtyTypeName" label="开始取水日期" min-width="130"></el-table-column>
          <el-table-column prop="Zhuanye" label="许可最大流量(m³/s)" min-width="150"></el-table-column>
          <el-table-column prop="EndDate" label="设计流量(m³/s)" min-width="150"></el-table-column>
          <el-table-column prop="CertNum" label="许可总取水量" min-width="130"></el-table-column>
          <el-table-column prop="PublishDateTime" label="运行状况" min-width="140"></el-table-column>
          <el-table-column prop="Nat" label="备注" min-width="80"></el-table-column>
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
  name:'LYwaterResourceInformation',
  data() {
    return {
      TapType:1,
      Total: 0, //总数据条数
      pageIndex: 1, //当前页码
      pageSize: 10, //每页展现条数
      outsideData:[
        {
          PersonName:'',
          IDCard:'',
          CorpName:'',
          SpecialtyTypeName:'',
          Zhuanye:'',
          EndDate:'',
          CertNum:'',
          PublishDateTime:'',
          Nat:'',
        },
        {
          PersonName:'',
          IDCard:'',
          CorpName:'',
          SpecialtyTypeName:'',
          Zhuanye:'',
          EndDate:'',
          CertNum:'',
          PublishDateTime:'',
          Nat:'',
        },
        {
          PersonName:'',
          IDCard:'',
          CorpName:'',
          SpecialtyTypeName:'',
          Zhuanye:'',
          EndDate:'',
          CertNum:'',
          PublishDateTime:'',
          Nat:'',
        },
        {
          PersonName:'',
          IDCard:'',
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
</style>
