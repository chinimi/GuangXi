<template>
<!--基本设置主页面-->
  <div class="basicSetup">
    <ul>
      <li class="left lefts">
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                模板名称：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                方案名称：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                开始时间：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                结束时间：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                计算步长：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-input-number
                  v-model="num"
                  controls-position="right"
                  @change="handleChange"
                  :min="1"
                  :max="10"
                ></el-input-number>
              </div>
            </el-col>
          </el-row>
        </div>
      </li>
      <li class="left right">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea"
        >
        </el-input>
          <div style="margin: 10px;">
          <el-button type="primary" size="small" plain>保存</el-button>
          <el-button type="primary" size="small" plain>计算</el-button>
          <el-button type="primary" size="small" plain>查看结果</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      num: "",
      textarea:'',
      input:'',
      value1:'',
    };
  },
  methods: {
    handleChange(){

    }
  },
  computed: {},
  mounted() {},
  watch: {}
};
</script>
<style>
.basicSetup{
    position: absolute;
    top: 95px;
}
.basicSetup .left {
  float: left;
  margin-right: 10px;
  height: 360px;
  margin-top: 20px;
}
.basicSetup .lefts {
  width: 311px;
  /* background: red; */
  border-right: 2px dashed royalblue;
}
.basicSetup .right {
  width: 1092px;
  /* background: rebeccapurple; */
}
.basicSetup .singleli_title {
  font-size: 13px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  font-weight: lighter;
  margin-left: 3%;
  margin-top: 20px;
}

.basicSetup .singleli_title .sysfxTit {
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  /* text-align: right; */
  margin-right: 10px;
}
.basicSetup .el-input__inner {
  /* padding-left: 10px !important; */
  color: #058cd0;
  border: 1px solid #058cd0;
  background: #031823;
  -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
  font-size: 16px !important;
  /* border-radius: 10px !important; */
  /* border: 0px !important; */
  height: 30px !important;
  width: 196px !important;
}
.basicSetup .el-pagination__total {
  color: #ffffff !important;
}
.basicSetup .el-pagination__jump {
  color: #ffffff !important;
}
.basicSetup .el-pagination .el-select .el-input .el-input__inner {
  color: #ffff;
}
.basicSetup .el-input-number {
  position: relative;
  display: inline-block;
  width: 196px;
  line-height: 38px;
}
.basicSetup .el-textarea__inner{
      height: 360px;
      background-color: transparent !important;
    border: 1px solid #01bdf5 !important;
}
.basicSetup .el-input-number__decrease, .el-input-number__increase {
    background: transparent !important;
    border-left: 1px solid #058cd0 !important;
    color:#058cd0 !important ;

}
.basicSetup .el-input-number.is-controls-right .el-input-number__increase {
    border-bottom: 1px solid #058cd0 !important;
}
</style>
