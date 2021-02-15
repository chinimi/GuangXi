<template>
  <div  id="index_right">
    <div class="index_right_model">
      <div class="model_title">
        <span>实时水情</span>
      </div>

      <div class="model_content">
        <el-row  class="first_line">
        <el-col :span="4" >站名</el-col>
        <el-col :span="10" > 时间</el-col>
        <el-col :span="5" >水位（m）</el-col>
        <el-col :span="5" >流量(m3)</el-col>
        </el-row>

        <div  class="content_table">
          <el-row  class="first_line">
            <el-col :span="4" class="border-right">田东</el-col>
            <el-col :span="12" class="border-right">2021-01-03  </el-col>
            <el-col :span="4" class="border-right">30</el-col>
            <el-col :span="4" class="border-right">5000</el-col>
          </el-row>
          <el-row  class="first_line">
            <el-col :span="4"   class="border-right" >隆安</el-col>
            <el-col :span="12"  class="border-right">2021-01-03  </el-col>
            <el-col :span="4"   class="border-right">35</el-col>
            <el-col :span="4"   class="border-right">4563</el-col>
          </el-row>
          <el-row  class="first_line">
            <el-col :span="4"  class="border-right">太平</el-col>
            <el-col :span="12" class="border-right">2021-01-03</el-col>
            <el-col :span="4"  class="border-right">44</el-col>
            <el-col :span="4"  class="border-right">2564</el-col>
          </el-row>
          <el-row  class="first_line">
            <el-col :span="4"  class="border-right" >英竹</el-col>
            <el-col :span="12" class="border-right">2021-01-03 </el-col>
            <el-col :span="4"  class="border-right">35.3</el-col>
            <el-col :span="4"  class="border-right">2235</el-col>
          </el-row>

          <el-row  class="first_line">
            <el-col :span="4"  class="border-right" >东华</el-col>
            <el-col :span="12" class="border-right">2021-01-03  </el-col>
            <el-col :span="4"  class="border-right">44</el-col>
            <el-col :span="4"  class="border-right">8654</el-col>
          </el-row>

        </div>


      </div>



      <!--2-->

      <div class="model_title">
        <span>实时水质</span>
      </div>

      <div class="model_content">
        <el-row  class="first_line">
          <el-col :span="6" >河流</el-col>
          <el-col :span="12" > 站点名称</el-col>
          <el-col :span="6" >水质类别</el-col>

        </el-row>

        <div  class="content_table">
          <el-row  class="first_line">
            <el-col :span="6" class="border-right">郁江</el-col>
            <el-col :span="12" class="border-right">田东</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>

          <el-row  class="first_line">
            <el-col :span="6" class="border-right">郁江</el-col>
            <el-col :span="12" class="border-right">隆安</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>
          <el-row  class="first_line">
            <el-col :span="6" class="border-right">郁江</el-col>
            <el-col :span="12" class="border-right">太平</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>
          <el-row  class="first_line">
            <el-col :span="6" class="border-right">英竹河</el-col>
            <el-col :span="12" class="border-right">英竹</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>
          <el-row  class="first_line">
            <el-col :span="6" class="border-right">秦川河</el-col>
            <el-col :span="12" class="border-right">东华</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>


        </div>


      </div>

      <!--3:-->

      <div class="model_title">
        <span>水质报告</span>
      </div>

      <div class="model_content">
<!--        <el-row  class="first_line">-->
<!--          <el-col :span="5" >站名</el-col>-->
<!--          <el-col :span="9" > 时间</el-col>-->
<!--          <el-col :span="5" >水位</el-col>-->

<!--        </el-row>-->

        <div   >
          <el-row  class="first_line">
            <el-col :span="20">
              2020年桂江流域水质报告54期(20201205)
            </el-col>
            <el-col :span="4">
              <img src="../../../static/images/download.png" alt="">
            </el-col>
          </el-row>

          <el-row  class="first_line">
            <el-col :span="20">
              2020年桂江流域水质报告53期(20201201)
            </el-col>
            <el-col :span="4">
              <img src="../../../static/images/download.png" alt="">
            </el-col>
          </el-row>

          <el-row  class="first_line">
            <el-col :span="20">
              2020邕江流域水质报告54期(20201205)
            </el-col>
            <el-col :span="4">
              <img src="../../../static/images/download.png" alt="">
            </el-col>
          </el-row>

          <el-row  class="first_line">
            <el-col :span="20">
              2020年邕江流域水质报告53期(20201201)
            </el-col>
            <el-col :span="4">
              <img src="../../../static/images/download.png" alt="">
            </el-col>
          </el-row>


        </div>


      </div>

    </div>


  </div>
</template>
<script>


  export default {
    components:{

    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]

      }
    },
    methods: {

    },
    computed: {


    },
    mounted(){


    },
    watch: {

    }

  }
</script>
<style scoped="scoped">
#index_right{
  width: 339px;
  position: absolute;
  top: 74px;
  right: 10px;
  z-index: 9;
  height: calc(100vh - 184px);
  background-size: 100% 100%;

  background: #fff;
}

</style>
