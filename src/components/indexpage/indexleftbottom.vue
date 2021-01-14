<template>
  <div  id="index_left_bottom"   >
    <div class="index_model">
      <div class="model_title">
        <span>水质监测断面（个）</span>
      </div>

       <el-row style="text-align: center;background:rgb(40 77 237 / 34%);color:#fff;line-height: 18px;">
         <span>水质情况</span>
       </el-row>

      <div style="padding:10px 0;">
          <el-row class="first_line">
            <el-col :span="8">
              <div  class="bluesquare">
                <p>Ⅲ类水以上断面（个）</p>
                <p>1982</p>
              </div>


            </el-col>
            <el-col  :span="8">
              <div  class="bluesquare">
                <p>Ⅲ类水以上断面（个）</p>
                <p>1982</p>
              </div>
            </el-col>
            <el-col  :span="8">
              <div  class="bluesquare">
                <p>Ⅲ类水以上断面（个）</p>
                <p>1982</p>
              </div>
            </el-col>
          </el-row>

       </div>
      <el-row style="text-align: center;background:rgb(236 12 12 / 67%);;color:#fff;line-height: 18px;">
        <span>国考断面水质情况</span>
      </el-row>

      <div style="padding:10px 0;">
        <el-row  >
          <el-col :span="12">
            <div  class="bluesquare">
              <p>国家控断面水质优良比例（%）</p>
              <p style="font-size: 20px;
    font-weight: 800;
    color: red;">96.2</p>
            </div>


          </el-col>
          <el-col  :span="12">
            <div  class="bluesquare">
              <p>国家控断面水质优良比例（%）</p>
              <p style="font-size: 20px;
    font-weight: 800;
    color: greenyellow;">98.9</p>
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
    width: 330px;
    height: 430px;
    position: absolute;
    top: 400px;
    left: 8px;
    background: url("../../../static/images/left_bot.png");
  }

  .bluesquare{
    padding: 0px;
    border: solid 1px #01b4d4;
    margin: 2px;
    font-size: 13px;
    text-align: center;
  }

</style>
