<template>
    <div  id="groundWater">
      <div class="left_menu">
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                评价标准：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="pjbzval">
                  <el-option
                    v-for="(item, index) in pjbzOption"
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
            <el-col :span="8">
              <div class="sysfxTit">
                评价项目：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="pjxmval">
                  <el-option
                    v-for="(item, index) in pjxmOption"
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
            <el-col :span="8">
              <div class="sysfxTit">
                取值方式：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="qzfsval">
                  <el-option
                    v-for="(item, index) in qzfsOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--水系参数-->
        <div style="width: 100%;padding-left:20px;">
          <!-- <el-checkbox-group v-model="pjbzval" @change="">
             <el-checkbox v-for="item in curWaterSysOption" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
           </el-checkbox-group>-->

          <el-radio-group  v-model="cursysval">
            <el-col :span="5" v-for="product in curWaterSysOption"   :key="product.value">
              <el-radio :label="product.value"   >{{product.label}}</el-radio>
            </el-col>
          </el-radio-group>
        </div>

        <!--流域水系-->
        <!--流域-->
        <div class="singleli_title"  v-if="cursysval=='river'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                流域：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--河长制-->
        <!--省-->
        <div class="singleli_title"    v-if="cursysval=='longriver'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                省：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--市-->
        <div class="singleli_title"  v-if="cursysval=='longriver'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                市：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--县-->
        <div class="singleli_title"  v-if="cursysval=='longriver'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                县：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--镇-->
        <div class="singleli_title"  v-if="cursysval=='longriver'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                镇：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--村-->
        <div class="singleli_title"  v-if="cursysval=='longriver'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                村：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--水系-->
        <div class="singleli_title"  v-if="cursysval=='river'" >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                水系：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--一级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                一级河流：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--二级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'" >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                二级河流：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--三级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'" >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                三级河流：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--四级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'"  >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                四级河流：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--五级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'" >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                五级河流：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="customdefine">
                  <el-option
                    v-for="(item, index) in customdefineList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--六级河流-->
        <div class="singleli_title"  v-if="cursysval=='river'" >
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                六级河流：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="customdefine">
                  <el-option
                    v-for="(item, index) in customdefineList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--流域水系  over-->

        <!--水资源分区-->
        <!--1级-->
        <div class="singleli_title" v-if="cursysval=='watersource'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                一级分区：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--2级-->
        <div class="singleli_title"  v-if="cursysval=='watersource'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                二级分区：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--3级-->
        <div class="singleli_title" v-if="cursysval=='watersource'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                三级分区：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--4级-->
        <div class="singleli_title" v-if="cursysval=='watersource'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                四级分区：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--测站级别-->
        <div class="singleli_title" v-if="cursysval=='watersource'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                测站级别：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--测站名称-->
        <div class="singleli_title" v-if="cursysval=='watersource'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                测站名称：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--自定义-->
        <div class="singleli_title" v-if="cursysval=='watersource'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                自定义：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="customdefine">
                  <el-option
                    v-for="(item, index) in customdefineList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--水资源分区 over-->


        <!--行政区-->
        <!--省-->
        <div class="singleli_title"    v-if="cursysval=='distriction'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                省：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--市-->
        <div class="singleli_title"  v-if="cursysval=='distriction'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                市：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--县-->
        <div class="singleli_title"  v-if="cursysval=='distriction'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                县：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--镇-->
        <div class="singleli_title"  v-if="cursysval=='distriction'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                镇：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--村-->
        <div class="singleli_title"  v-if="cursysval=='distriction'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                村：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
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
        <!--行政区 over-->

        <div style="margin-left:20px;">
          <!--时间段选择-->
          <div >
            <el-radio-group  v-model="selectTimeType">
              <el-col :span="12" v-for="product in timequantumOption"   :key="product.value">
                <el-radio :label="product.value"   >{{product.label}}</el-radio>
              </el-col>
            </el-radio-group>
          </div>
        </div>
        <!--评价步长-->
        <div class="singleli_title">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                评价步长：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <div>
                <el-select v-model="pjbcVal">
                  <el-option
                    v-for="(item, index) in pjbcOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--年份-->
        <div class="singleli_title"  v-if="selectTimeType=='sametime'">
          <el-row>
            <!--起始-->
            <el-col :span="8">
              <div class="sysfxTit">
                时间选择:</div>
            </el-col>
            <!--起始年-->
            <el-col :span="7"  style="margin-left: -5%;" >
              <div>
                <el-select v-model="startyearVal">
                  <el-option
                    v-for="(item, index) in startyearOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="1" style="color:#fff;text-align: center;"> &nbsp;</el-col>

            <!--终止年-->

            <el-col :span="7"  >
              <div>
                <el-select v-model="endyearVal">
                  <el-option
                    v-for="(item, index) in endyearOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--单月-->
        <div class="singleli_title" v-if="selectTimeType=='sametime'&&pjbcVal=='month'">
        <el-row>
          <el-col :span="8">
            <div class="sysfxTit">
              月：
            </div>
          </el-col>
          <el-col :span="14" style="margin-left: -5%;"   >
            <div>
              <el-select v-model="singleMonth">
                <el-option
                  v-for="(item, index) in singleMonthOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </div>

        <!--双月-->
        <div class="singleli_title"  v-if="selectTimeType=='sametime'&&pjbcVal=='doublemonth'">
          <el-row>
            <!--第一个月-->
            <el-col :span="8">
              <div class="sysfxTit">
                双月:</div>
            </el-col>

            <el-col :span="7"  style="margin-left: -5%;" >
              <div>
                <el-select v-model="firmonthVal">
                  <el-option
                    v-for="(item, index) in firmonthOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="1" style="color:#fff;text-align: center;"> &nbsp;</el-col>

            <!--第二个月-->

            <el-col :span="7"  >
              <div>
                <el-select v-model="secmonthVal">
                  <el-option
                    v-for="(item, index) in secmonthOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>

        <!--旬-->
        <div class="singleli_title"   v-if="selectTimeType=='sametime' && pjbcVal=='xun'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                旬：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;"   >
              <div>
                <el-select v-model="xunVal">
                  <el-option
                    v-for="(item, index) in xunOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>

        <!--汛期-->
       <!-- <div class="singleli_title" v-if=" selectTimeType=='sametime' &&pjbcVal=='xq'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                汛期：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;"   >
              <div>
                <el-select v-model="xqVal">
                  <el-option
                    v-for="(item, index) in xqOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>-->

        <!--非汛期-->
        <div class="singleli_title" v-if="selectTimeType=='sametime' && pjbcVal=='fxq'">
          <el-row>
            <!--汛期-->
            <el-col :span="5">
              <div class="sysfxTit">
                汛期：
              </div>
            </el-col>
            <el-col :span="6" style="margin-left: -5%;"   >
              <div>
                <el-select v-model="xqVal">
                  <el-option
                    v-for="(item, index) in xqOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="1" style="color:#fff;text-align: center;"> &nbsp;</el-col>

            <!--非汛期-->
            <el-col :span="6">
              <div class="sysfxTit">
                非汛期：
              </div>
            </el-col>
            <el-col :span="6" style="margin-left: -5%;"   >
              <div>
                <el-select v-model="fxqVal">
                  <el-option
                    v-for="(item, index) in fxqOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--半年-->
        <div class="singleli_title" v-if=" selectTimeType=='sametime' && pjbcVal=='halfyear'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                半年：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;"   >
              <div>
                <el-select v-model="halfyVal">
                  <el-option
                    v-for="(item, index) in halfyOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--季-->
        <div class="singleli_title" v-if=" selectTimeType=='sametime' && pjbcVal=='season'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                季：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;"   >
              <div>
                <el-select v-model="seasonVal">
                  <el-option
                    v-for="(item, index) in seasonOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title"  v-if="selectTimeType !=='sametime'" >
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  时间选择：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;">
                <el-date-picker
                  v-model="startTime"
                  format="yyyy-MM"
                  type="month"
                  align="right"
                  size="mini"
                  @change="getstartTime"
                  placeholder="选择日期时间">
                </el-date-picker>
              </el-col>
            </el-row>
          </div>
       <!-- 时间序列-->
        <div class="singleli_title" v-if="selectTimeType=='ordertime'">
          <el-row>
            <el-col :span="8">
              <div class="sysfxTit">
                截至时间：
              </div>
            </el-col>
            <el-col :span="14" style="margin-left: -5%;">
              <el-date-picker
                v-model="endTime"
                @change="getendTime"
                format="yyyy-MM"
                type="month"
                align="right"
                size="mini"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-col>
          </el-row>
        </div>
        <div class="singleli_title" >
          <el-row>
            <el-col :span="20" style="text-align: center">
              <el-button @click="queryTableData">确定</el-button>
            </el-col>

          </el-row>
        </div>
      </div>
      <!--table表格-->
      <div class="right_menu">


<!--表单名称以及字段选择筛选条件-->
        <el-cascader
          v-model="selectedOptions"
          :change="handchangeSelOpt"

          :options="options"
          :props="props"
          :checkStrictly="false"
          collapse-tags
          clearable></el-cascader>

        <el-table v-if="pjxmval=='szjcpj'"  border :data="tableData" height="calc( 100vh - 300px )" style="background-color: transparent;">
        <!--循环创建这个标签-->
        <!--  <el-table-column
            v-for="info in renderTab" :key="info.key"     &lt;!&ndash; 设置表头数据源，并循环渲染出来，property对应列内容的字段名，详情见下面的数据源格式 &ndash;&gt;
          :property="info.key"
          :label="info.label"
           >

          </el-table-column>
-->

          <el-table-column
            v-for="info in renderTab" :key="info.key"
          :prop="info.key"
          :label="info.label"
          >
          <template slot-scope="scope">
            {{scope.row[scope.column.property]}}  <!-- 渲染对应表格里面的内容 -->
          </template>
          </el-table-column>
        </el-table>

          <!--总硬度-->
        <el-table v-if="pjxmval=='zyd'"  border :data="tableData" height="calc( 100vh - 300px )" style="background-color: transparent;">
          <el-table-column
            label="序号"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="stcd"
            label="河流编码">
          </el-table-column>
          <el-table-column
            prop="stnm"
            label="河段名称">
          </el-table-column>
          <el-table-column
            prop="stnm"
            label="测站名称">
          </el-table-column>
          <el-table-column
            prop="thrd"
            label="总硬度指标">
          </el-table-column>
          <el-table-column
            prop="thrdType"
            label="级别">
          </el-table-column>

        </el-table>

        <!--水化学类型-->
        <el-table v-if="pjxmval=='shxlx'"  border :data="tableData"  height="calc( 100vh - 300px )" style="background-color: transparent;">

        <el-table-column
            label="序号"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="stcd"
            label="河流编码">
          </el-table-column>
          <el-table-column
            prop="stnm"
            label="河段名称">
          </el-table-column>
          <el-table-column
            prop="ca"
            label="Ca2+">
          </el-table-column>
          <el-table-column
            prop="mg"
            label="Mg2+">
          </el-table-column>
          <el-table-column
            prop="na"
            label="Na+">
          </el-table-column>
          <el-table-column

            label="HCO3-">

            <template slot-scope="scope">
              {{scope.row.hco3}}

            </template>
          </el-table-column>

          <el-table-column
            label="SO42-">
            <template slot-scope="scope">
                {{scope.row.so4}}

            </template>
          </el-table-column>
          <el-table-column
            prop="cl"
            label="Cl-">
          </el-table-column>

          <el-table-column
            label="备注">
            <template slot-scope="scope">
              <!--  {{scope.row.time}}-->
              备注
            </template>
          </el-table-column>

        </el-table>

        <!--地表天然水-->
        <el-table v-if="pjxmval=='dbtrs'"  border :data="tableData"  height="calc( 100vh - 300px )" style="background-color: transparent;">
          <el-table-column
            label="序号"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="stcd"
            label="河流编码">
          </el-table-column>

          <el-table-column
            prop="stnm"
            label="测站名称">
          </el-table-column>
          <el-table-column
            prop="f"
            label="氟">
          </el-table-column>
          <el-table-column
            prop="ars"
            label="砷">
          </el-table-column>
          <el-table-column
            prop="mndg"
            label="矿化物">
          </el-table-column>

          <el-table-column

            label="氯化物">
            <template slot-scope="scope">
              {{scope.row.cl}}

            </template>
          </el-table-column>
          <el-table-column

            label="硫酸盐">
            <template slot-scope="scope">
                {{scope.row.so4}}

            </template>
          </el-table-column>

          <el-table-column
            label="备注">
            <template slot-scope="scope">
              <!--  {{scope.row.time}}-->
              备注
            </template>
          </el-table-column>

        </el-table>

        <!--分页-->
        <div style="padding-top:30px;">
          <!-- <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination> -->
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size=pageSize
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>

	</div>
</template>

<script>
  import moment from 'moment'
  import  getWater from '../../api/index'
  export default {
      data() {
          return {

            renderTab:[],//渲染表格数组元素

            checkedCities: [],
            checkedCities2: [],
            currentPage:1,
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
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
            tableData: [{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田222东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田333东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田444东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田555东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田666东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田11东"}],
            customdefine:'默认分组',
            customdefineList:[],
            cities:['河长制','流域', '水资源', '行政区'],
            cities2:['按单时间段评价', '按时间序列评价'],

            pageSize:10,
            /*评价标准*/
            pjbzval:'GB3838-2002',
            pjbzOption:[{
              label:"全部",
              value:'all',
            }],
            /*评价项目*/
            pjxmval:'szjcpj',
            pjxmOption:[{
              label:"水质基础评价",
              value:'szjcpj',
            },/*{
              label:"地表天然水",
              value:'dbtrs',
            }*/
          ],
            /*取值方式*/
            qzfsval:'avg',
            qzfsOption:[{
              label:"平均值",
              value:'avg',// min max avg
            },{
              label:"最大",
              value:'max',// min max avg
            },{
              label:"最小",
              value:'min',// min max avg
            }],
            /*当前水系*/
            cursysval:'river',
            /*水系参数*/
            curWaterSysOption:[{label:'河长制',value:'longriver'},{label:'流域',value:'river'},{label:'水资源',value:'watersource'},{label:'行政区',value:'distriction'}],
            /*时间选择*/
            selectTimeType:"ordertime",
            /*时间段选择*/
            timequantumOption:[{
              value:'singletime',
              label:'按单时间段评价',
            },{
              value:'ordertime',
              label:'按单时序列评价',

            },{
                value:'sametime',
                label:'按同时间段评价',
              }],
            /*评价步长*/
            pjbcVal:'year',//评价步长
            pjbcOption:[
             {value:'xun',label:'旬'},{value:'month',label:'月'},{value:'doublemonth',label:'双月'},{value:'season',label:'季'},{value:'fxq',label:'汛期/非汛期'},{value:'halfyear',label:'半年'},{value:'year',label:'年'}],

            /*起始年*/
            startyearVal:'2015',//评价步长
            startyearOption:[
              {value:'2010',label:'2010'},
              {value:'2011',label:'2011'},
              {value:'2012',label:'2012'},
              {value:'2013',label:'2013'},
              {value:'2014',label:'2014'},
              {value:'2015',label:'2015'},
              {value:'2016',label:'2016'},
              {value:'2017',label:'2017'},
              {value:'2018',label:'2018'},
              {value:'2019',label:'2019'},
              {value:'2020',label:'2020'},
              {value:'2021',label:'2021'},
              ],
            /*终止年*/
            endyearVal:'2020',//
            endyearOption:[
              {value:'2010',label:'2010'},
              {value:'2011',label:'2011'},
              {value:'2012',label:'2012'},
              {value:'2013',label:'2013'},
              {value:'2014',label:'2014'},
              {value:'2015',label:'2015'},
              {value:'2016',label:'2016'},
              {value:'2017',label:'2017'},
              {value:'2018',label:'2018'},
              {value:'2019',label:'2019'},
              {value:'2020',label:'2020'},
              {value:'2021',label:'2021'},
            ],
            /*12月*/
            singleMonth:'01',
            singleMonthOption:[
              {value:'01',label:'1'},
              {value:'02',label:'2'},
              {value:'03',label:'3'},
              {value:'04',label:'4'},
              {value:'05',label:'5'},
              {value:'06',label:'6'},
              {value:'07',label:'7'},
              {value:'08',label:'8'},
              {value:'09',label:'9'},
              {value:'10',label:'10'},
              {value:'11',label:'11'},
              {value:'12',label:'12'},
            ],
            /*旬*/
            xunVal:'upxun',
            xunOption:[
              {value:'upxun',label:'上旬'},
              {value:'middlexun',label:'中旬'},
              {value:'downxun',label:'下旬'},

            ],
            /*汛期*/
            xqVal:'04',
            xqOption:[
              // {value:'01',label:'1'},
              // {value:'02',label:'2'},
              // {value:'03',label:'3'},
              {value:'04',label:'4'},
              {value:'05',label:'5'},
              {value:'06',label:'6'},
              {value:'07',label:'7'},
              {value:'08',label:'8'},
              {value:'09',label:'9'},
              // {value:'10',label:'10'},
              // {value:'11',label:'11'},
              // {value:'12',label:'12'},
            ],
            /*非汛期*/
            fxqVal:'03',
            fxqOption:[
              {value:'01',label:'1'},
              {value:'02',label:'2'},
              {value:'03',label:'3'},
              // {value:'04',label:'4'},
              // {value:'05',label:'5'},
              // {value:'06',label:'6'},
              // {value:'07',label:'7'},
              // {value:'08',label:'8'},
              // {value:'09',label:'9'},
              {value:'10',label:'10'},
              {value:'11',label:'11'},
              {value:'12',label:'12'},
            ],

            /*半年*/
            halfyVal:'upyear',
            halfyOption:[
              {value:'upyear',label:'上半年'},
              {value:'downyear',label:'下半年'},



            ],
            /*季*/
            seasonVal:'firseason',
            seasonOption:[
              {value:'firseason',label:'第一季度'},
              {value:'secseason',label:'第二季度'},
              {value:'thirdseason',label:'第三季度'},
              {value:'fourseason',label:'第四季度'},
            ],
            /*双月*/
            /*第一个月*/
            firmonthVal:'01',//双月  1
            firmonthOption:[
              {value:'01',label:'1'},
              {value:'02',label:'2'},
              {value:'03',label:'3'},
              {value:'04',label:'4'},
              {value:'05',label:'5'},
              {value:'06',label:'6'},
              {value:'07',label:'7'},
              {value:'08',label:'8'},
              {value:'09',label:'9'},
              {value:'10',label:'10'},
              {value:'11',label:'11'},
              {value:'12',label:'12'},
            ],
            /*第二个月*/
            secmonthVal:'03',//双月  2
            secmonthOption:[
              {value:'01',label:'1'},
              {value:'02',label:'2'},
              {value:'03',label:'3'},
              {value:'04',label:'4'},
              {value:'05',label:'5'},
              {value:'06',label:'6'},
              {value:'07',label:'7'},
              {value:'08',label:'8'},
              {value:'09',label:'9'},
              {value:'10',label:'10'},
              {value:'11',label:'11'},
              {value:'12',label:'12'},
            ],

            /*初始时间*/
            startTime:'2020-10',
            /*截至时间*/
            endTime:'2020-11',

            /*表明以及字段筛选*/
            props: { multiple: true },
            /*字典表  自定义*/
            options: [
              /*表1：wQ_AAACP_DDTO*/
              {
              value: 'wQ_AAACP_DDTO',
              label: 'wQ_AAACP_DDTO',
              children: [
                {
                  value: 'bXQ',
                  label: '丙烯醛',
                },
                {
                value: 'bXQI',
                label: '丙烯腈',
                },
                {
                value: 'bXXAN',
                label: '丙烯酰胺',
                },
                {
                  value: 'eRLJW',
                  label: '二氯甲烷',
                },
                {
                  value: 'eRLYW12',
                  label: '1,2-二氯乙浣',
                },
                {
                  value: 'eRLYX11',
                  label: '1,1-二氯乙烯',
                },
                {
                  value: 'eRLYX12',
                  label: '1,2-二氯乙烯',
                },
                {
                  value: 'hYLBW',
                  label: '环氧氯丙烷',
                },
                {
                  value: 'hYQL',
                  label: '环氧七氯',
                },
                {
                  value: 'jQ',
                  label: '甲醛',
                },
                {
                  value: 'lDERX',
                  label: '氯丁二烯',
                },
                {
                  value: 'lLDERX',
                  label: '六氯丁二烯',
                },
                {
                  value: 'lYNM',
                  label: '层面编号',
                },
                {
                  value: 'lYX',
                  label: '氯乙燥',
                },
                {
                  value: 'nT',
                  label: '备注',
                },
                {
                  value: 'sILHT',
                  label: '四氯化碳',
                },
                {
                  value: 'sILYX',
                  label: '四氯乙烯',
                },
                {
                  value: 'sLJW',
                  label: '二氯甲烷',

                }, {
                  value: 'sLYQ',
                  label: '二氯乙醛',

                }, {
                  value: 'sLYX',
                  label: '二氯乙烯',

                }, {
                  value: 'sXJW',
                  label: '二溴甲烷',

                }, {
                  value: 'wBTP',
                  label: 'wBTP',

                }, {
                  value: 'yQ',
                  label: '乙醛',

                }

              ]
              },

              /*表2：wQ_ABTP_DDTO*/
              {
                value: 'wQ_ABTP_DDTO',
                label: 'wQ_ABTP_DDTO',
                children: [
                  {
                    value: 'aTTR',
                    label: 'ATTR',
                  },
                  {
                    value: 'cTTR',
                    label: 'CTTR',
                  },
                  {
                    value: 'fSAM',
                    label: 'FSAM',
                  },
                  {
                    value: 'fSSP',
                    label: '鱼类种类',
                  },
                  {
                    value: 'mCRAM',
                    label: 'MCRAM',
                  },
                  {
                    value: 'mCRSP',
                    label: '水生维管束植物种类',
                  },
                  {
                    value: 'nT',
                    label: '备注',
                  },
                  {
                    value: 'pHYAM',
                    label: 'PHYAM',
                  },
                  {
                    value: 'pHYBM',
                    label: 'PHYBM',
                  },
                  {
                    value: 'pHYSP',
                    label: '浮游植物种类',
                  },
                  {
                    value: 'pRPAM',
                    label: 'PRPAM',
                  },
                  {
                    value: 'pRPSP',
                    label: '着生生物种类',
                  },
                  {
                    value: 'wBPP',
                    label: '水体初级生产力',
                  },
                  {
                    value: 'wCMTR',
                    label: '污水致突变试验结果',
                  },
                  {
                    value: 'zBNAM',
                    label: 'ZBNAM',
                  },
                  {
                    value: 'zBNBM',
                    label: 'ZBNBM',
                  },
                  {
                    value: 'zBNSP',
                    label: 'ZBNSP',
                  },
                  {
                    value: 'zPLAM',
                    label: 'ZPLAM',

                  }, {
                    value: 'zPLBM',
                    label: 'ZPLBM',

                  }, {
                    value: 'zPLSP',
                    label: '浮游动物种类',

                  }
                ]
              },

              /*表3：wQ_AMR_DDTO*/
              {
                value: 'wQ_AMR_DDTO',
                label: 'wQ_AMR_DDTO',
                children: [
                  {
                    value: 'aDS',
                    label: 'ADS',
                  },
                  {
                    value: 'aLGTP',
                    label: 'ALGTP',
                  },
                  {
                    value: 'bCLCD',
                    label: '硅藻门细胞密度',
                  },
                  {
                    value: 'cHLCD',
                    label: '绿藻门细胞密度',
                  },
                  {
                    value: 'cHRCD',
                    label: '金藻门细胞密度',
                  },
                  {
                    value: 'cRYCD',
                    label: '隐藻门细胞密度',
                  },
                  {
                    value: 'cYNCD',
                    label: '蓝藻门细胞密度',
                  },
                  {
                    value: 'eUGCD',
                    label: '裸藻门细胞密度',
                  },
                  {
                    value: 'pYRCD',
                    label: '甲藻门细胞密度',
                  },
                  {
                    value: 'sUMCD',
                    label: '总密度',
                  },
                  {
                    value: 'xNTCD',
                    label: '黄藻门细胞密度',
                  },

                ]
              },
              /*表4：wQ_BCP_DDTO*/
              {
                value: 'wQ_BCP_DDTO',
                label: 'wQ_BCP_DDTO',
                children: [
                  {
                    value: 'bEN',
                    label: '苯',
                  },
                  {
                    value: 'bENAN',
                    label: '苯胺',
                  },
                  {
                    value: 'bENYX',
                    label: '苯乙烯',
                  },
                  {
                    value: 'eRJBEN',
                    label: '二甲苯',
                  },
                  {
                    value: 'eRLB12',
                    label: '1,2-二氯苯',
                  },
                  {
                    value: 'eRLB14',
                    label: '1,4-二氯苯',
                  },
                  {
                    value: 'eRXJB12',
                    label: '1,2-二硝基苯',
                  },
                  {
                    value: 'eRXJB13',
                    label: '1,3-二硝基苯',
                  },
                  {
                    value: 'eRXJB14',
                    label: '1,4-二硝基苯',
                  },
                  {
                    value: 'eRXJJB24',
                    label: '2,4-二硝基甲苯',
                  },
                  {
                    value: 'sLB135',
                    label: '1,3,5-三氯苯',
                  },
                  {
                    value: 'sXJJB246',
                    label: '2,4,6-三硝基甲苯',
                  },
                  {
                    value: 'wBTP',
                    label: 'WBTP',
                  },
                  {
                    value: 'xJBEN',
                    label: '硝基苯',
                  },
                  {
                    value: 'xJLB2',
                    label: '2-硝基氯苯',
                  },
                  {
                    value: 'xJLB3',
                    label: '3-硝基氯苯',
                  },
                  {
                    value: 'xJLB4',
                    label: '4-硝基氯苯',
                  },
                  {
                    value: 'yBBEN',
                    label: '异丙苯',
                  },
                  {
                    value: 'yBEN',
                    label: '乙苯',
                  },

                ]
              },
              /*表5：wQ_NMISP_DDTO*/
              {
                value: 'wQ_NMISP_DDTO',
                label: 'wQ_NMISP_DDTO',
                children: [
                  {
                    value: 'aCHL',
                    label: '活性氯',
                  },
                  {
                    value: 'b',
                    label: '硼',
                  },
                  {
                    value: 'bOD5',
                    label: '五日生化需氧量',
                  },
                  {
                    value: 'cL',
                    label: '氯化物',
                  },
                  {
                    value: 'cN',
                    label: '氰化物',
                  },
                  {
                    value: 'cODCR',
                    label: '化学需氧量',
                  },
                  {
                    value: 'cODMN',
                    label: '高锰酸盐指数',
                  },
                  {
                    value: 'dOX',
                    label: ' ',
                  },
                  {
                    value: 'dTP',
                    label: '溶解性总磷',
                  },
                  {
                    value: 'eP',
                    label: '元素磷',
                  },
                  {
                    value: 'f',
                    label: '氟化物',
                  },
                  {
                    value: 'fCHL',
                    label: '游离余氯',
                  },{
                    value: 'i',
                    label: '碘化物',
                  },{
                    value: 'kN',
                    label: '凯氏氮',
                  },{
                    value: 'lYNM',
                    label: '层面编号',
                  },{
                    value: 'nH3',
                    label: '非离子氨',
                  },{
                    value: 'nH3N',
                    label: '氨氮',
                  },{
                    value: 'nO2',
                    label: '亚硝酸盐氮',
                  },{
                    value: 'nO3',
                    label: '硝酸盐氮',
                  }, {
                    value: 'nT',
                    label: '备注',
                  },
                  {
                    value: 'pO4',
                    label: '溶解性磷酸盐',
                  },{
                    value: 'pRPNM',
                    label: '垂线编号',
                  },
                  {
                    value: 's2',
                    label: '硫化物',
                  },{
                    value: 'sI',
                    label: '硅',
                  },{
                    value: 'sO4',
                    label: '硫酸盐',
                  },{
                    value: 'tCHL',
                    label: '总氯',
                  },{
                    value: 'tCN',
                    label: '总氰化物',
                  },{
                    value: 'tIC',
                    label: '离子总量',
                  },{
                    value: 'tN',
                    label: '总氮',
                  },{
                    value: 'tP',
                    label: '总磷',
                  },{
                    value: 'wBTP',
                    label: 'WBTP',
                  }, {
                    value: 'yP',
                    label: '黄磷',
                  },

                ]
              },
              /*表6：wQ_OPCP_DDTO*/
              {
                value: 'wQ_OPCP_DDTO',
                label: 'wQ_OPCP_DDTO',
                children: [
                  {
                    value: 'aTLJ',
                    label: '阿特拉津',
                  },
                  {
                    value: 'bHC',
                    label: '八八八',
                  },
                  {
                    value: 'bJQ',
                    label: '百菌清',
                  },
                  {
                    value: 'dBCH',
                    label: '敌百虫',
                  },
                  {
                    value: 'dDT',
                    label: '滴滴涕',
                  },
                  {
                    value: 'dDV',
                    label: '敌敌畏',
                  },
                  {
                    value: 'dLL',
                    label: '对硫磷',
                  },
                  {
                    value: 'jJDLL',
                    label: '甲基对硫磷',
                  },
                  {
                    value: 'jNW',
                    label: '甲萘威',
                  },
                  {
                    value: 'lYNM',
                    label: '层面编号',
                  },
                  {
                    value: 'mLLL',
                    label: '马拉硫磷',
                  },
                   {
                    value: 'nT',
                    label: '备注',
                  },{
                    value: 'nXL',
                    label: '内吸磷',
                  },{
                    value: 'rOGOR',
                    label: '乐果',
                  },{
                    value: 'wBTP',
                    label: 'WBTP',
                  },{
                    value: 'xQJZH',
                    label: '溴氰菊酯',
                  },

                ]
              },

              /*表7：wQ_PHNCP_DDTO*/
              {
                value: 'wQ_PHNCP_DDTO',
                label: 'wQ_PHNCP_DDTO',
                children: [
                  {
                    value: 'bENF',
                    label: '苯酚',
                  },
                  {
                    value: 'eRLBF24',
                    label: '2,4-二氯苯酚',
                  },
                  {
                    value: 'lYNM',
                    label: '层面编号',
                  },
                  {
                    value: 'nT',
                    label: '备注',
                  },
                  {
                    value: 'pRPNM',
                    label: '垂线编号',
                  },
                  {
                    value: 'sLBF246',
                    label: '2,4,6三氯酚',
                  },
                  {
                    value: 'sXJF246',
                    label: '2,4,6三硝基苯酚',
                  },
                  {
                    value: 'vLPH',
                    label: '挥发酚',
                  },
                  {
                    value: 'wBTP',
                    label: 'WBTP',
                  },
                  {
                    value: 'wLF',
                    label: '五氯酚',
                  },


                ]
              },

              /*表8：wQ_WBHP_DDTO*/
              {
                value: 'wQ_WBHP_DDTO',
                label: 'wQ_WBHP_DDTO',
                children: [
                  {
                    value: 'bCTC',
                    label: '细菌总数',
                  },
                  {
                    value: 'fCG',
                    label: '粪大肠菌群',
                  },
                  {
                    value: 'fS',
                    label: '粪链球菌',
                  },
                  {
                    value: 'lYNM',
                    label: '层面编号',
                  },
                  {
                    value: 'nT',
                    label: '备注',
                  },
                  {
                    value: 'pRPNM',
                    label: '垂线编号',
                  },
                  {
                    value: 'wBTP',
                    label: 'WBTP',
                  },


                ]
              },
              /*表9：wqMIspDDTO*/
              {
                value: 'wqMIspDDTO',
                label: 'wqMIspDDTO',
                children: [
                  {
                    value: 'AG',
                    label: '银',
                  },
                  {
                    value: 'AL',
                    label: '铝',
                  },
                  {
                    value: 'ARS',
                    label: '砷',
                  },
                  {
                    value: 'BA',
                    label: '钡',
                  },
                  {
                    value: 'BE',
                    label: '铍',
                  },
                  {
                    value: 'CA',
                    label: '钙',
                  },
                  {
                    value: 'CD',
                    label: '镉',
                  },
                  {
                    value: 'CO',
                    label: '钴',
                  },
                  {
                    value: 'CR6',
                    label: '六价铬',
                  },
                  {
                    value: 'CU',
                    label: '铜',
                  },
                  {
                    value: 'FE',
                    label: '铁',
                  },
                  {
                    value: 'HG',
                    label: '汞',
                  },
                  {
                    value: 'K',
                    label: '钾',
                  },
                  {
                    value: 'KNA',
                    label: '钾钠',
                  },
                  {
                    value: 'MG',
                    label: '镁',
                  },
                  {
                    value: 'MN',
                    label: '锰',
                  },
                  {
                    value: 'MO',
                    label: '钼',
                  },
                  {
                    value: 'NA',
                    label: '钠',
                  },
                  {
                    value: 'NI',
                    label: '镍',
                  },
                  {
                    value: 'PB',
                    label: '铅',
                  },
                  {
                    value: 'SB',
                    label: '锑',
                  },
                  {
                    value: 'SE',
                    label: '硒',
                  },
                  {
                    value: 'TCR',
                    label: '总铬',
                  },
                  {
                    value: 'THRD',
                    label: '总硬度',
                  },

                  {
                    value: 'TL',
                    label: '铊',
                  },
                  {
                    value: 'V',
                    label: '钒',
                  },
                  {
                    value: 'ZN',
                    label: '锌',
                  },


                  {
                    value: 'tI',
                    label: '钛',
                  },

                  {
                    value: 'lYNM',
                    label: '层面编号',
                  },




                  {
                    value: 'nT',
                    label: '备注',
                  },

                  {
                    value: 'pRPNM',
                    label: '垂线编号',
                  },

                  {
                    value: 'spt',
                    label: '采样时间',
                  },
                  {
                    value: 'stcd',
                    label: '测站代码',
                  },

                  {
                    value: 'wBTP',
                    label: 'wBTP',
                  },


                ]
              },
              /*表10：wqMIspDDTO*/
              {
                value: 'wqPcpDDTO',
                label: 'wqPcpDDTO',
                children: [
                  {
                    value: 'ACID',
                    label: '银',
                  },
                  {
                    value: 'AGCO2',
                    label: '铝',
                  },
                  {
                    value: 'CHROMA',
                    label: '砷',
                  },
                  {
                    value: 'CLARITY',
                    label: '钡',
                  },
                  {
                    value: 'CO3',
                    label: '铍',
                  },
                  {
                    value: 'COND',
                    label: '钙',
                  },
                  {
                    value: 'DSCO2',
                    label: '镉',
                  },
                  {
                    value: 'HCO3',
                    label: '钴',
                  },
                  {
                    value: 'ILMI',
                    label: '六价铬',
                  },
                  {
                    value: 'ILMT',
                    label: '铜',
                  },
                  {
                    value: 'MNDG',
                    label: '铁',
                  },
                  {
                    value: 'PH',
                    label: '汞',
                  },
                  {
                    value: 'REDOX',
                    label: '钾',
                  },
                  {
                    value: 'SS',
                    label: '钾钠',
                  },
                  {
                    value: 'TALATV',
                    label: '镁',
                  },
                  {
                    value: 'TALKY',
                    label: '锰',
                  },
                  {
                    value: 'TBTATV',
                    label: '钼',
                  },
                  {
                    value: 'TDS',
                    label: '钠',
                  },
                  {
                    value: 'TSOLID',
                    label: '镍',
                  },
                  {
                    value: 'TURB',
                    label: '铅',
                  },
                  {
                    value: 'WNDV',
                    label: '锑',
                  },
                  {
                    value: 'WT',
                    label: '硒',
                  },
                  {
                    value: 'lynm',
                    label: '总铬',
                  },
                  {
                    value: 'nEOBJ',
                    label: ' ',
                  },

                  {
                    value: 'nT',
                    label: ' ',
                  },
                  {
                    value: 'pH',
                    label: '钒',
                  },
                  {
                    value: 'prpnm',
                    label: '锌',
                  },


                  {
                    value: 'rEDOX',
                    label: '钛',
                  },

                  {
                    value: 'sMELL',
                    label: '层面编号',
                  },




                  {
                    value: 'sS',
                    label: '备注',
                  },

                  {
                    value: 'spt',
                    label: '垂线编号',
                  },

                  {
                    value: 'stcd',
                    label: '采样时间',
                  },
                  {
                    value: 'stnm',
                    label: '测站代码',
                  },

                  {
                    value: 'tALATV',
                    label: '总a放射性',
                  },
                  {
                    value: 'tALKY',
                    label: '总碱度',
                  },{
                    value: 'tBTATV',
                    label: '总P放射性',
                  },{
                    value: 'tDS',
                    label: '溶解性总固体',
                  },{
                    value: 'tSOLID',
                    label: '总固体',
                  },{
                    value: 'tURB',
                    label: '浊度',
                  },{
                    value: 'wINDIR',
                    label: '风向',
                  },{
                    value: 'wNDV',
                    label: '风速',
                  },{
                    value: 'wT',
                    label: '水温',
                  },{
                    value: 'wbtp',
                    label: 'WBTP',
                  }

                ]
              },

              /*表11：wqWqsinfBDTO*/
              {
                value: 'wqWqsinfBDTO',
                label: 'wqWqsinfBDTO',
                children: [
                  {
                    value: 'adag',
                    label: '管理单位',
                  },
                  {
                    value: 'addvcd',
                    label: '行政区划代码',
                  },
                  {
                    value: 'astnm',
                    label: 'ASTNM',
                  },
                  {
                    value: 'atmn',
                    label: 'ATMN',
                  },
                  {
                    value: 'esstym',
                    label: '建站年月',
                  },
                  {
                    value: 'mnag',
                    label: '监测单位',
                  },
                  {
                    value: 'mnfrq',
                    label: '监测频次',
                  },
                  {
                    value: 'nt',
                    label: '备注',
                  },
                  {
                    value: 'stcd',
                    label: '测站代码',
                  },
                  {
                    value: 'stgrd',
                    label: '测站等级',
                  },
                  {
                    value: 'stlc',
                    label: '站址',
                  },
                  {
                    value: 'stnm',
                    label: '测站名称',
                  },
                  {
                    value: 'stwqt',
                    label: 'STWQT',
                  },
                  {
                    value: 'wdstym',
                    label: '撤站年月',
                  },
                  {
                    value: 'wrrcd',
                    label: '水资源分区代码',
                  },

                ]
              },



            ],
            selectedOptions:null,//获取cascader参数

          }
      },
      created() {

      },
      computed: {

      },
      methods: {
        handchangeSelOpt(val){
          console.log("获取选中的参数")
          console.log(val)


        },
        getstartTime(date){

          let checkstartTime = moment(this.startTime).format('YYYYMM');
          let checkendTime = moment(this.endTime).format('YYYYMM');
        },
        getendTime(date){

          let checkstartTime = moment(this.startTime).format('YYYYMM');
          let checkendTime = moment(this.endTime).format('YYYYMM');
        },



        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.pageSize=val
          this.queryTableData()
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          console.log(val)
          this.currentPage=val

          this.queryTableData()


        },
        queryTableData(tabArr){
          var that=this
          this.tableData=[]//清空table
          /*时间选择*/
         /* selectTimeType:"singletime",
            /!*时间段选择*!/
            timequantumOption:[{
            value:'singletime',
            label:'按单时间段评价',
          },{
            value:'ordertime',
            label:'按单时序列评价',

          }],*/

          console.log("统计时间")
          /*YYYYMMDDHHmmss*/
          let checkstartTime = moment(this.startTime).format('YYYYMM');
          let checkendTime = moment(this.endTime).format('YYYYMM');
          console.log(checkstartTime)
          console.log(checkendTime)


      /*  let checkstartTime = moment(this.startTime).format('YYYYMM');
        let startyear = moment(this.startTime).format('YYYY');
        let checkendTime = moment(this.endTime).format('YYYYMM');
        let endyear = moment(this.endTime).format('YYYY');
        let startMonth=checkstartTime.substring(checkstartTime.length-2)
        let endMonth=checkendTime.substring(checkendTime.length-2)

          var str=""
          var count=parseInt(endMonth)-parseInt(startMonth)
          for(var i=parseInt(startMonth);i<count;i++)
          {
            var tmp=i+1;
            tmp=tmp<10?String('0'+tmp):(tmp)
            str=str+startyear+tmp+"-"

          }
          str=str+checkendTime
          console.log(str)

          let tjsj=null;
          if(this.selectTimeType=="singletime"){
            tjsj=checkstartTime


          }else{
            tjsj=str
          }
*/

          var param=
          {
            "pageNum":0,
            "pageSize":this.pageSize,
            "startTime":"20201031000000",
            "endTime":"20201102000000",
          }
          // "startTime":checkstartTime+'00000000',
          // "endTime":checkendTime+"00000000",

          this.tableData=[]
          let url="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/base/listswmsar"
          /*http请求*/
          this.$http.post(url, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function(res) {

             let data=res.body.data.pageResultList[0]
            /*过滤table表格数据*/

            /*创建table表格数据*/
            var eachObj={}
            for(var i=0;i<tabArr.length;i++){


              let curChartName=tabArr[i].chartName

              if(tabArr[i].chartName==curChartName){
                /*循环res查询结果，然后赋值*/

                let curChartResult=data[curChartName]

                let keyName=tabArr[i].key
                console.log(keyName)
                console.log(curChartResult[keyName])

                eachObj[keyName]=curChartResult[keyName]

                console.log(eachObj)

              }


            }
            that.tableData.push(eachObj)
            console.log(that.tableData)


          }).catch(function(res){


          })

        }
      },
      watch:{
        pjxmval(newValue){

          this.tableData=[]



        },
        selectedOptions(newValue){



          /*rightHeader: [
        {
          label: '编码',
          key: 'code'
        },
        {
          label: '姓名',
          key: 'name'
        },
        {
          label: '权限描述',
          key: 'description'
        }
      ],*/
          var arr=[]



          for(var i=0;i<newValue.length;i++){

            var obj={}
            /*循环中文字典表*/
            for(var a=0;a<this.options.length;a++){



              if(newValue[i][0]==this.options[a].value){//表名相同
                let children=this.options[a].children/*找对应中文*/
                /*找对应请求回来数据的对应值*/
                for( var b=0;b<children.length;b++){
                  if(newValue[i][1]==children[b].value){
                    obj.key=children[b].value
                    obj.label=children[b].label
                    obj.chartName=newValue[i][0]

                  }
                }
              }
            }
            arr.push(obj)

          }

          this.renderTab=arr
          /*每次切换数据table表格清空重新渲染*/
          /*处理tabledata对应表头属性的数据赋值*/

          this.queryTableData(arr)//调用请求查询数据接口


        }



      },


  }
</script>

<style scoped>
  #groundWater{
     margin:0;
     padding:0;
     background: #fff;
   }
  #groundWater .left_menu{
    overflow-y: auto;
    background: #fff;
    width: 20%;
    height: calc( 100vh - 80px);
    /*background: #031823;*/
    /*background: rgba(21, 37, 63,1);*/
    position: absolute;
    top: 0;
    left: 0;
    border-right: #fff dashed 2px;
    border-left: #fff solid 1px;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
  }
  #groundWater  .right_menu{
    width: 80%;
    height: calc( 100vh - 80px);
    padding-top: 50px;
    /*background: #031823;*/
    background: #fff;
    /*background: rgba(21, 37, 63,1);*/
    position: absolute;
    top: 0;
    right: 0;
  }

  #groundWater .singleli_title {
    font-size: 13px;
    height: 35px;
    /*line-height: 50px;*/
    border-radius: 5px;
    font-weight: lighter;
    margin-left: 3%;
    margin-top: 12px;
  }

  #groundWater .singleli_title .sysfxTit {
    color: #333;
    letter-spacing: 1px;
    font-size: 16px;
    /* text-align: right; */
    margin-right: 10px;
  }

  #groundWater >>>.el-pagination__total{
    /*color:#ffffff !important;*/
  }
  #groundWater >>>.el-pagination__jump{
    /*color:#ffffff !important;*/
  }
  #groundWater >>>.el-pagination .el-select .el-input .el-input__inner{
    /*color: #ffff;*/
  }


  >>>.el-main{
    padding:0;
  }
  >>>.el-input__inner {
    padding-left: 30px;
    color: #333;
    border: 1px solid #ccc;
    /*background: #031823;*/
    -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
    font-size: 14px;
    height: 30px ;

  }
  >>>.el-pagination__total{
    /*color:#ffffff !important;*/
  }
  >>>.el-pagination__jump{
    /*color:#ffffff !important;*/
  }
  >>>.el-pagination .el-select .el-input .el-input__inner{
    /*color: #ffff;*/
  }

  >>>.el-button{
    padding: 5px 15px !important;
  }
  >>>.el-button:active {
    color: #fff;
    border-color: #3a8ee6;
    outline: 0;
    background: #1677ff;
  }
  >>>.el-button:focus, .el-button:hover {
    color: #fff;
    border-color: #c6e2ff;
    /*background-color: rgba(21,37,63,0.86);*/
    background: #1677ff;
  }

  >>>.el-radio-group{
    width:100%;
  }
  >>>.el-radio {
    color: #333;
  }
  >>>.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width:86%;
  }
  >>>.el-select-dropdown__item.selected{
    padding-left:20px!important;
  }

  >>>.el-radio__label {
    color: #333;
    font-size: 14px;
    padding-left: 4px;
  }
  /* 滚动样式修改*/
  >>> ::-webkit-scrollbar {
    /*background-color: transparent !important;*/
    /*height: 0 !important;*/
    /*width: 0 !important;*/
  }

  >>> ::-webkit-scrollbar-thumb {
    /*background-color: transparent !important;*/
  }

  /* 修改边框颜色*/
  >>> ::-webkit-scrollbar-thumb {
    /*background-color: transparent !important;*/
  }
  >>>.el-container{
    height: 100%;
  }
  >>>.el-menu-item:focus, .el-menu-item:hover{
    background: red!important;
    color:#fff!important;

  }
  >>>.el-scrollbar__wrap{
    max-height: 400px!important;
    overflow-y: auto;

  }
  >>>.el-cascader-menu__list {
    position: relative;
    /* min-height: 100%; */
    margin: 0;
    padding: 6px 0;
    list-style: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-height: 400px !important;
    overflow-y: auto !important;
  }

</style>
