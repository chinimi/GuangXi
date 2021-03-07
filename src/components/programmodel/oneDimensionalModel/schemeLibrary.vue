<template>
  <!--方案库主页面-->
  <div class="schemeLibrary clear-fix">
    <!-- 左侧 -->
    <div class="schemeLibrary_left ">
      <ul class="clear-fix schemeLibrary_ul">
        <li :class="[TapType == '1' ? 'csour' : '']" @click="TapSwitch(1)">
          河长制
        </li>
        <li :class="[TapType == '2' ? 'csour' : '']" @click="TapSwitch(2)">
          流域
        </li>
        <li :class="[TapType == '3' ? 'csour' : '']" @click="TapSwitch(3)">
          水资源
        </li>
        <li :class="[TapType == '4' ? 'csour' : '']" @click="TapSwitch(4)">
          行政
        </li>
      </ul>
      <div class="schemeLibrary_div" v-show="TapType == '1'">
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                省：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="province">
                  <el-option
                    v-for="(item, index) in provinceList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                市：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="city">
                  <el-option
                    v-for="(item, index) in cityList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                县：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="county">
                  <el-option
                    v-for="(item, index) in countyList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                镇：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="town">
                  <el-option
                    v-for="(item, index) in townList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                村：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="rustic">
                  <el-option
                    v-for="(item, index) in rusticList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="schemeLibrary_div" v-show="TapType == '2'">
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                省：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="province">
                  <el-option
                    v-for="(item, index) in provinceList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                市：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="city">
                  <el-option
                    v-for="(item, index) in cityList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                县：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="county">
                  <el-option
                    v-for="(item, index) in countyList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                镇：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="town">
                  <el-option
                    v-for="(item, index) in townList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                村：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="rustic">
                  <el-option
                    v-for="(item, index) in rusticList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="schemeLibrary_div" v-show="TapType == '3'">
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                流域：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="drainageBasin">
                  <el-option
                    v-for="(item, index) in drainageBasinList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                水系：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="basin">
                  <el-option
                    v-for="(item, index) in basinList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                一级河流：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="firstOrderStream">
                  <el-option
                    v-for="(item, index) in firstOrderStreamList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                二级河流：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="secondOrderStream">
                  <el-option
                    v-for="(item, index) in secondOrderStreamList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="schemeLibrary_div" v-show="TapType == '4'">
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                一级分区：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="primaryPartition">
                  <el-option
                    v-for="(item, index) in primaryPartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                二级分区：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="secondaryPartition">
                  <el-option
                    v-for="(item, index) in secondaryPartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                三级分区：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="tertiaryPartition">
                  <el-option
                    v-for="(item, index) in tertiaryPartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                四级分区：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="fourstagePartition">
                  <el-option
                    v-for="(item, index) in fourstagePartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title">
          <el-row>
            <el-col :span="9">
              <div class="sysfxTit">
                五级分区：
              </div>
            </el-col>
            <el-col :span="13">
              <div>
                <el-select v-model="fivestagePartition">
                  <el-option
                    v-for="(item, index) in fivestagePartitionList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="schemeLibrary_button">
        <el-button>查找</el-button>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="schemeLibrary_right">
      <el-button size="small" @click="addProject">新增方案</el-button>
      <div>
        <el-table
          border
          :data="tableData"
          height="480"
          style="background-color: transparent;margin:10px 0;"
        >
          <el-table-column prop="tab1" label="序号" width="70" type="index">
          </el-table-column>
          <el-table-column prop="ScenarioCode" label="方案编码" min-width="80">
          </el-table-column>
          <el-table-column prop="ScenarioName" label="方案名称" min-width="100">
          </el-table-column>
          <el-table-column prop="CreateTime" label="创建时间" min-width="100">
          </el-table-column>
          <!-- <el-table-column prop="ForecastTime" label="修改时间" min-width="100">
            </el-table-column> -->
          <el-table-column prop="GroupName" label="基准模板" min-width="80">
          </el-table-column>
          <el-table-column
            prop="RiverGrade1_ZoneName"
            label="一级流域分区"
            min-width="150"
          >
          </el-table-column>
          <el-table-column
            prop="RiverGrade2_ZoneName"
            label="二级流域分区"
            min-width="150"
          >
          </el-table-column>
          <el-table-column
            prop="District_ZoneName"
            label="行政分区（市）"
            min-width="150"
          >
          </el-table-column>
          <el-table-column
            prop="WaterResource_ZoneName"
            label="水资源分区"
            min-width="100"
          >
          </el-table-column>
          <el-table-column
            prop="RiverChief_ZoneName"
            label="所属河长"
            min-width="100"
          >
          </el-table-column>
          <el-table-column label="操作" min-width="300">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleLook(scope.$index, scope.row)"
                >查看结果</el-button
              >
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >修改方案</el-button
              >
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                >删除方案</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pages">
        <!-- <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination> -->
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
    <!-- 新增方案 -->
    <div>
      <el-dialog
        title="新增方案"
        :visible.sync="dialogFormVisible"
        append-to-body
        width="30%"
      >
        <el-form :model="form">
          <el-form-item label="方案名称" :label-width="formLabelWidth">
            <el-input
              v-model="form.projectName"
              autocomplete="off"
              style="width:290px"
              placeholder="方案名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="选择模板" :label-width="formLabelWidth">
            <el-select v-model="form.optionalModule" placeholder="选择模板" style="width:290px">
              <el-option
                v-for="(item, index) in optionalModuleList"
                :key="item.ScenarioCode"
                :label="item.Description"
                :value="item.ScenarioCode"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      TapType: 1,
      dialogFormVisible: false,
      form: {
        projectName: "",
        optionalModule: ""
      },
      optionalModuleList:[],
      formLabelWidth: "120px",

      //行政分区
      province: "",
      provinceList: [],
      city: "",
      cityList: [],
      county: "",
      countyList: [],
      town: "",
      townList: [],
      rustic: "",
      rusticList: [],

      //流域分区
      drainageBasin: "",
      drainageBasinList: [],
      basin: "",
      basinList: [],
      firstOrderStream: "",
      firstOrderStreamList: [],
      secondOrderStream: "",
      secondOrderStreamList: [],

      //水资源
      primaryPartition: "",
      primaryPartitionList: [],
      secondaryPartition: "",
      secondaryPartitionList: [],
      tertiaryPartition: "",
      tertiaryPartitionList: [],
      fourstagePartition: "",
      fourstagePartitionList: [],
      fivestagePartition: "",
      fivestagePartitionList: [],

      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      layer: null
    };
  },
  // created() {
  //   this.getTableData();
  // },
  mounted() {
    this.$nextTick(() => {
      this.getTableData();
    });
  },
  computed: {
    ...mapGetters({
      getter_OneDimensionalModelTabLayer: "getter_OneDimensionalModelTabLayer"
    })
  },
  methods: {
    ...mapActions({
      ChangeOneDimensionalModelTabID: "ChangeOneDimensionalModelTabID",
      ChangeOneDimensionalModelTabLayer: "ChangeOneDimensionalModelTabLayer"
    }),
    getTableData() {
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetScenarioInfoList?scenarioType=MIKE11Model";
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          this.tableData = data;
        });
    },
    //新增方案
    addProject() {
      this.dialogFormVisible = true;
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetTemplateInfoList?scenarioType=MIKE11Model";
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          this.optionalModuleList = data;
        });
    },
    //提交新增方案
    submit(){
      if(this.form.projectName == ''){
        this.$message.error('请填写方案名称！');
        return
      }
        var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/CreateScenairo?scenarioName="+this.form.projectName+"&templateCode="+this.form.optionalModule;
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
           if( data != 'null'){
             this.tableData.shift(data)
              this.dialogFormVisible = false;
           }else{
               this.$message.error('模板保存失败！');
           }
        });

    },
    TapSwitch(id) {
      this.TapType = id;
    },
    showTypeClick(index) {
      this.showType = index;
    },
    handleLook(index, row) {
      console.log(index, row);
    },
    handleEdit(index, row) {
      this.ChangeOneDimensionalModelTabID({ value: "2" });
      this.$router.push({
        name: "programmePreparation",
        params: { value: row }
      });
      var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/GetScenarioGIS?scenarioCode=" +
        row.ScenarioCode;
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          this.creatLayer(data);
        });
    },
    creatLayer(featureJson) {
      if (this.getter_OneDimensionalModelTabLayer) {
        map.removeLayer(this.getter_OneDimensionalModelTabLayer);
      }
      //console.log("11111")

      var source = new ol.source.Vector({
        features: new ol.format.GeoJSON({
          dataProjection: "EPSG:4326",
          featureProjection: "EPSG:4326"
        }).readFeatures(featureJson),
        projection: "EPSG:4326"
      });
     
     
      for(var j=0;j<featureJson.features.length;j++)
      {
       
        var fea = featureJson.features[j].geometry;
        var geo = fea.coordinates;
        mapcenter = geo[j]
        break;    
      } 

     
      var oneLayer = new ol.layer.Vector({
        source: source,
        style: function(feature) {
          var properties = feature.getProperties();
          var styles = [];
          var iconN = new ol.style.Style({
            stroke: new ol.style.Stroke({
              //边界样式
              // color: "#3a8ee6",
              color: "#0000BB",
              width: "6"
              // lineDash: [5]
            })
          });
          styles.push(iconN);
          return styles;
        },
        zIndex: 15
      });
      var view = new ol.View({
        // center: [110.35, 23.35],
        center:mapcenter,
        projection: "EPSG:4326",
        zoom: 10,
        minZoom: 0,
        maxZoom: 15
      });
      map.setView(view);
      map.addLayer(oneLayer);
      this.ChangeOneDimensionalModelTabLayer({ layer: oneLayer });
    },
    //删除方案
    handleDelete(index, row) {
       var url =
        modelURL +
        "/api/GXRCWQ/ModelManager/DeleteScenario?scenarioCode="+row.ScenarioCode;
      fetch(url)
        .then(respose => {
          return respose.json();
        })
        .then(data => {
          if(data ==true){
            this.getTableData()
             this.$message({
              message: '删除成功',
              type: 'success'
            });
          }else if(data ==false){
            this.$message.error('删除失败');
          }

        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  watch: {}
};
</script>
<style scoped>
@import "../../../../static/css/public.css";
</style>
