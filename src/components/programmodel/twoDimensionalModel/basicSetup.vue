<template>
<!--基本设置主页面-->
  <div class="basicSetup clear-fix">
    <div class="basicSetup_left">
      <div class="singleli_title">
        <el-row>
          <el-col :span="9">
            <div class="sysfxTit">
              模板名称：
            </div>
          </el-col>
          <el-col :span="13">
            <div>
              <el-input v-model="templateName" placeholder="模板1"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="singleli_title">
        <el-row>
          <el-col :span="9">
            <div class="sysfxTit">
              方案名称：
            </div>
          </el-col>
          <el-col :span="13" >
            <div>
              <el-input v-model="ScenarioName" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="singleli_title">
        <el-row>
          <el-col :span="9">
            <div class="sysfxTit">
              开始时间：
            </div>
          </el-col>
          <el-col :span="13" >
              <el-date-picker
                v-model="StartTime"
                type="date"
                placeholder="选择日期"
                class="StartTime"
              >
              </el-date-picker>
          </el-col>
        </el-row>
      </div>
      <div class="singleli_title">
        <el-row>
          <el-col :span="9">
            <div class="sysfxTit">
              结束时间：
            </div>
          </el-col>
          <el-col :span="13" >
              <el-date-picker
                v-model="EndTime"
                type="date"
                placeholder="选择日期"
                class="StartTime"
              >
              </el-date-picker>
          </el-col>
        </el-row>
      </div>
      <div class="singleli_title">
        <el-row>
          <el-col :span="9">
            <div class="sysfxTit">
              计算步长：
            </div>
          </el-col>
          <el-col :span="10" >
              <el-input-number
                v-model="SimIntervalMinute"
                controls-position="right"
                @change="handleChange"
                :min="1"
                :max="10"
                class="SimIntervalMinute"
              ></el-input-number>
          </el-col>
          <el-col :span="5">
            <div style="width: 60px;text-align: center;line-height: 30px;">
              分钟
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
      <div class="basicSetup_right">
        <div class="basicSetup_textarea">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="Description"
          >
          </el-input>
          <div style="margin: 10px;text-align: right;">
            <el-button type="primary" size="small" plain @click="saveModel">保存</el-button>
            <el-button type="primary" size="small" plain>计算</el-button>
            <el-button type="primary" size="small" plain>查看结果</el-button>
            <el-button type="primary" size="small" plain>上传</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      templateName:'',//模板名称
      ScenarioName:'',//方案名称
      StartTime:'',//开始时间
      EndTime:'',//结束时间
      SimIntervalMinute: '',//计算步长
      Description:'',//方案描述
    };
  },
  methods: {

  },
  computed: {},
  mounted() {},
  watch: {}
};
</script>
<style scoped>
@import '../../../../static/css/public.css';
</style>
