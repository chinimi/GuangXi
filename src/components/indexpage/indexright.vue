<template>
  <div  id="index_right">
    <div class="r_module_title">
      <span>实时水情</span>
    </div>



      <div class="r_model_content">
        <el-row  class="th_bg">
        <el-col :span="4" >站名</el-col>
        <el-col :span="7" > 时间</el-col>
        <el-col :span="7" >水位（m）</el-col>
        <el-col :span="6" >流量(m3)</el-col>
        </el-row>

        <!--table表格-->

        <div  class="content_table">
          <el-row     class="on">
            <el-col :span="4" class="border-right">田东</el-col>
            <el-col :span="12" class="border-right">2021-01-03  </el-col>
            <el-col :span="4" class="border-right">30</el-col>
            <el-col :span="4" class="border-right">5000</el-col>
          </el-row>
          <el-row  class="off">
            <el-col :span="4"   class="border-right" >隆安</el-col>
            <el-col :span="12"  class="border-right">2021-01-03  </el-col>
            <el-col :span="4"   class="border-right">35</el-col>
            <el-col :span="4"   class="border-right">4563</el-col>
          </el-row>
          <el-row    class="on">
            <el-col :span="4"  class="border-right">太平</el-col>
            <el-col :span="12" class="border-right">2021-01-03</el-col>
            <el-col :span="4"  class="border-right">44</el-col>
            <el-col :span="4"  class="border-right">2564</el-col>
          </el-row>
          <el-row    class="off">
            <el-col :span="4"  class="border-right" >英竹</el-col>
            <el-col :span="12" class="border-right">2021-01-03 </el-col>
            <el-col :span="4"  class="border-right">35.3</el-col>
            <el-col :span="4"  class="border-right">2235</el-col>
          </el-row>

          <!--循环 奇数偶数行样式不一致  -->
          <el-row   class="on">
            <el-col :span="4"  class="border-right" >东华</el-col>
            <el-col :span="12" class="border-right">2021-01-03  </el-col>
            <el-col :span="4"  class="border-right">44</el-col>
            <el-col :span="4"  class="border-right">8654</el-col>
          </el-row>

        </div>


      </div>



      <!--2-->

      <div class="r_module_title">
        <span>实时水质</span>
      </div>

      <div class="r_model_content">
        <el-row  class="th_bg">
          <el-col :span="6" >河流</el-col>
          <el-col :span="12" > 站点名称</el-col>
          <el-col :span="6" >水质类别</el-col>

        </el-row>

        <div  class="content_table">
          <el-row  class="on">
            <el-col :span="6" class="border-right">郁江</el-col>
            <el-col :span="12" class="border-right">田东</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>

          <el-row  class="off">
            <el-col :span="6" class="border-right">郁江</el-col>
            <el-col :span="12" class="border-right">隆安</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>
          <el-row  class="on">
            <el-col :span="6" class="border-right">郁江</el-col>
            <el-col :span="12" class="border-right">太平</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>
          <el-row  class="off">
            <el-col :span="6" class="border-right">英竹河</el-col>
            <el-col :span="12" class="border-right">英竹</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>
          <el-row  class="on">
            <el-col :span="6" class="border-right">秦川河</el-col>
            <el-col :span="12" class="border-right">东华</el-col>
            <el-col :span="6" class="border-right">Ⅲ</el-col>
          </el-row>


        </div>


      </div>

      <!--3:-->

      <div class="r_module_title">
        <span>水质报告</span>
      </div>

      <div class="r_model_content">
<!--        <el-row  class="first_line">-->
<!--          <el-col :span="5" >站名</el-col>-->
<!--          <el-col :span="9" > 时间</el-col>-->
<!--          <el-col :span="5" >水位</el-col>-->

<!--        </el-row>-->

        <div   >
          <el-row  class="lion">
            <el-col :span="20">
              2020年桂江流域水质报告54期(20201205)
            </el-col>
            <el-col :span="4">
              <img src="../../../static/images/download.png" alt="">
            </el-col>
          </el-row>

          <el-row  class="lioff">
            <el-col :span="20">
              2020年桂江流域水质报告53期(20201201)
            </el-col>
            <el-col :span="4">
              <img src="../../../static/images/download.png" alt="">
            </el-col>
          </el-row>

          <el-row  class="lion">
            <el-col :span="20">
              2020邕江流域水质报告54期(20201205)
            </el-col>
            <el-col :span="4">
              <img src="../../../static/images/download.png" alt="">
            </el-col>
          </el-row>

          <el-row  class="lioff">
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
  height: calc(100vh - 300px);
  background-size: 100% 100%;
  background: #fff;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 4px 0px rgb(22 119 255);
  box-shadow: 0px 0px 4px 0px rgb(22 119 255);
}

.th_bg{
  font-size:16px;
  background: #caebff;
  color: #235d9a;
  font-weight: 900;
}
.r_module_title{
  font-weight: 800;
  color: #fff;
 border-top-left-radius: 5px;
 border-top-right-radius: 5px;
  background: #457ff5;
  line-height: 39px;
  padding-left: 19px;
  font-size: 16px;
  border-bottom: solid 1px #01c3e4;

}

  .r_model_content{
    color: #7b7e7f;
    width:90%;
    margin:5px auto;

  }
  .on {
    background: #f5f5f5;
  }
  .off {
    background: #fefdff;
  }

  .lion{
    cursor: pointer;
    padding: 5px 0px;
    background: #fff;
  }

  .lioff{
    cursor: pointer;
    padding: 5px 0px;
    background: #eaf7ff;
  }
</style>
