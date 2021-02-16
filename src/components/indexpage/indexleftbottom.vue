<template>
  <div  id="index_left_bottom"   >
    <div class="model_title">
      <i  style='color:#8cf1b3;' class="iconfont icon-shu"></i>

      <span>水质监测断面（个）</span>
    </div>
    <div class="index_model">
      <p class="szqk_titile"> <span>水质情况</span></p>

       <ul  class="szjcm_ul">
         <li>
          <div  class="szjc_li_title">Ⅲ类水以上断面（个）</div>
          <div  class="szjc_li_amount">1982</div>
           <div class="clear"></div>
         </li>
         <li>
           <div class="szjc_li_title">Ⅵ类水断面（个）</div>
           <div class="szjc_li_amount">544</div>
           <div class="clear"></div>

         </li>
         <li>
         <div class="szjc_li_title">Ⅴ类水断面（个）</div>
         <div class="szjc_li_amount">456</div>
           <div class="clear"></div>

         </li>
       </ul>

      <p class="szqk_titile"> <span>国考断面水质情况</span></p>
      <div>
        <el-row>
          <el-col :span="12">
            <div  class="orangesquare">
              <div class="orange_bg"></div>
              <p >国家控断面水质优良比例（%）</p>
              <p style="font-size: 20px;
    font-weight: 800;
    color:#ffa200;">96.2</p>
            </div>
          </el-col>
          <el-col  :span="12">
            <div  class="bluesquare">
              <div class="blue_bg"></div>

              <p>国控断面水质考核指标(%)</p>
              <p style="font-size: 20px;
    font-weight: 800;
    color: #00b8d9;">98.9</p>
            </div>
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
  #index_left_bottom{
    width: 315px;
    height: 430px;
    position: absolute;
    top: 400px;
    left: 8px;
    /*background: url("../../../static/images/left_bot.png");*/
    border: solid 1px rgb(22, 119, 255);
    border-radius: 20px;
    background: #fff;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);


  }
  .orangesquare{
    position: relative;
    padding:  10px;
    margin: 0 5px;
    font-size: 15px;
    text-align: center;
    background: #fff5d8;
    border-radius: 9px;
    color: #717171;
    font-weight: 800;
  }
  .bluesquare{
    font-size:15px;
    position: relative;
    padding:  10px;
    margin: 0 5px;
    text-align: center;
    background: #eefcff;
    border-radius: 9px;
    color: #717171;
    font-weight: 800;
  }
.orange_bg{
  height: 7px;
  width: 100%;
  background: #ffa200;
  position: absolute;
  top: 0;
  left:0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

}
.blue_bg{
  height: 7px;
  width: 100%;
  background: #00b8d9;
  position: absolute;
  top: 0;
  left:0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

}
  .szqk_titile{
    text-align: center;
    background:#caebff;
    color: #3970a7;
    line-height: 34px;
    font-weight: 800;

  }
  .szjcm_ul{
    padding:0 10px;
  }
  .szjcm_ul li{
    border-bottom: dashed 1px #caebff;
    /*padding: 5px 0;*/

  }
  .szjc_li_title{
    color:#909293;
    font-size:14px;
    float: left;

  }
  .szjc_li_amount{
    color:#2784ff;
    font-size:20px;
    font-weight: 900;
    float: right;
  }

</style>
