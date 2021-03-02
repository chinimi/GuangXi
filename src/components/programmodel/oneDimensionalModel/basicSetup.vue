<template>
<!--基本设置主组件-->
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
          <el-input v-model="GroupName" placeholder="请输入内容" disabled></el-input>
          <!-- <el-tooltip  effect="dark" :content="GroupName" placement="top">
            <el-input v-model="GroupName" placeholder="请输入内容" disabled :show-overflow-tooltip="true"></el-input>
          </el-tooltip> -->
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
                value-format="yyyy-MM-dd HH:mm:ss"
                format = "yyyy-MM-dd HH:mm:ss"
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
                value-format="yyyy-MM-dd HH:mm:ss"
                format = "yyyy-MM-dd HH:mm:ss"
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
            <el-button size="small" plain @click="saveModel">保存</el-button>
            <el-button size="small" plain>计算</el-button>
            <el-button size="small" plain>查看结果</el-button>
            <el-button size="small" plain>
              <el-upload
              style="width: 30px;height: 20px;margin-top: -12px;margin-left: -19px;"
              class="upload-demo"
              ref="upload"
              action=""
              :show-file-list="false"
              :file-list="fileList"
              :on-change="importFile"
              :before-upload="beforeUpload"
               accept=".docx"
              :auto-upload="false">
              <el-button size="small" type="primary">上传</el-button>
           </el-upload></el-button>

            <el-button size="small" plain @click="downloadFile">下载</el-button>
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
      GroupName:'',//模板名称
      ScenarioName:'',//方案名称
      StartTime:'',//开始时间
      EndTime:'',//结束时间
      SimIntervalMinute: '',//计算步长
      Description:'',//方案描述
      ScenarioCode:'',//方案编码
      fileList:[],
      isConfirm: true
    };
  },
  methods: {
    //获取基本信息
    getModelManagerData(){
      if(this.$route.params.value != undefined){
      this.ScenarioCode = this.$route.params.value.ScenarioCode
        var url = modelURL + "/api/GXRCWQ/ModelManager/GetScenarioInfo?scenarioCode="+this.ScenarioCode
         fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
            this.GroupName = data.GroupName
            this.ScenarioName = data.ScenarioName
            this.StartTime = data.StartTime
            this.EndTime = data.EndTime
            this.SimIntervalMinute = data.SimIntervalMinute
            this.Description = data.Description
        });
        }
    },
    //保存模板信息
    saveModel(){
      var _this = this
       var url = modelURL + "/api/GXRCWQ/ModelManager/UpdateScenarioInfo"
      $.ajax({
        type: "post",
        dataType: "json",
        // contentType: "application/json",
        url: url,
        data: {
            "ScenarioCode": _this.ScenarioCode,
            "ScenarioName": _this.templateName,
            "StartTime": _this.StartTime,
            "EndTime": _this.EndTime,
            "SimIntervalMinute":_this.SimIntervalMinute,
            "Description": _this.Description
        },
        success: function(data) {
           if(data != false){
            _this.$message({
              message: '保存成功',
              type: 'success'
            });
          }else{
            _this.$message.error('保存失败');
          }
        },
        error: function(data) {}
      });
    },
    //上传文件校验
    beforeUpload(file) {
      console.log(file)
      debugger
	 var FileExt = file.name.replace(/.+\./, "");
	  if (['docx'].indexOf(FileExt.toLowerCase()) === -1){
	  	this.$message({
	  		type: 'warning',
	  		message: '请上传后缀名为docx的附件！'
		 });
	 	return false;
	  }
},
    //上传文件
    async importFile(file) {
      console.log(file)
      console.log(this.ScenarioCode)
      let formData = new FormData()
      formData.append('scenarioCode', this.ScenarioCode)
      formData.append('docFile',file.raw )
      console.log(formData)
      if (!this.isConfirm) {
        this.isConfirm = true
        return
      }
    const isSubmit = await this.$confirm('是否继续上传文件?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      console.log(formData)
      var _this = this
       var url = modelURL + "/api/GXRCWQ/ModelManager/UploadScenairoDescriptionDocxFile"
       console.log(url)
      $.ajax({
        type: "post",
        dataType: "json",
        processData : false,	// 使数据不做处理
        contentType: false,   // 不要设置Content-Type请求头
        // contentType:"application/x-www-form-urlencoded",
        url: url,
        data: formData,
        success: function(data) {
           if(data != false){
            _this.$message({
              message: '上传成功',
              type: 'success'
            });
          }else{
            _this.$message.error('上传失败');
          }
        },
        error: function(data) {}
      });

      return false
    }).catch(() => {
      return true
    });
    if (isSubmit) {
      console.log(formData,9999999)
      this.$refs.upload.submit()
      this.isConfirm = false
    } else {
      this.fileList = []
    }
  },
  //文件下载
  downloadFile(){
    if(this.$route.params.value != undefined){
      this.ScenarioCode = this.$route.params.value.ScenarioCode
        var url = modelURL + "/api/GXRCWQ/ModelManager/DownloadScenairoDescriptionDocxFile?scenarioCode="+this.ScenarioCode
        window.location.href = url
        return
        fetch(url,{
           responseType:'blob'
         })
        .then(respose => {
          return respose.text();
        })
        .then(data => {
          // var blob = new Blob([data], {type: 'application/vnd.ms-excel'})
          var blob = new Blob([data], {type: 'application/msword'})
          console.log(blob)
          this.downFile(blob)
        });
        }
  },
  downFile(blob) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob);
    } else {
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        // link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
    }
}
  },
  computed: {},
  mounted() {
    this.getModelManagerData()
  },
  watch: {}
};
</script>
<style scoped>
@import '../../../../static/css/public.css';
</style>
