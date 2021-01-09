<template>
  <div  id="index_left_bottom"   >
    <div class="index_model">
      <div class="model_title">
        <span>项目面积(km2)</span>
      </div>

      <div class="model_content">
        <el-row  class="second_line">
          <el-col :span="12">3436.23 </el-col>
        </el-row>
      </div>

      <div class="model_title">
        <span>河网统计</span>
      </div>

      <div class="model_content">
          <el-row class="first_line">
            <el-col :span="12">河流（条）</el-col>
            <el-col  :span="12">河段（条）</el-col>
          </el-row>
          <el-row  class="second_line">

            <el-col :span="12">18936</el-col>
            <el-col :span="12">55967</el-col>
          </el-row>
       </div>

      <div class="model_title">
        <span>河网统计</span>
      </div>

      <div class="model_content">
        <el-row class="first_line">
          <el-col :span="12">河流（条）</el-col>
          <el-col  :span="12">河段（条）</el-col>
        </el-row>
        <el-row  class="second_line">

          <el-col :span="12">18936</el-col>
          <el-col :span="12">55967</el-col>
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

</style>
