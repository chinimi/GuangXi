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
         <!--水质基础评价-->
<!--        <el-table v-if="pjxmval=='szjcpj'"  border :data="tableData" height="100px" style="background-color: transparent;">-->
<!--            <el-table-column-->
<!--              label="序号"-->
<!--              type="index"-->
<!--              width="50">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="stcd"-->
<!--              label="测站编码">-->
<!--            </el-table-column>-->
<!--&lt;!&ndash;            <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;              label="评价时间">&ndash;&gt;-->
<!--&lt;!&ndash;              <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                {{scope.row.wqWqsinfBDTO.mnag}}&ndash;&gt;-->

<!--&lt;!&ndash;              </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->

<!--          <el-table-column-->
<!--            label="监测频次">-->
<!--            <template slot-scope="scope">-->
<!--              {{scope.row.mNFRQ}}-->

<!--            </template>-->
<!--          </el-table-column>-->

<!--          <el-table-column-->
<!--            label="ASDR">-->
<!--            <template slot-scope="scope">-->
<!--              {{scope.row.aSDR}}-->

<!--            </template>-->
<!--          </el-table-column>-->

<!--          <el-table-column-->
<!--            label="ASOT">-->
<!--            <template slot-scope="scope">-->
<!--              {{scope.row.asot}}-->

<!--            </template>-->
<!--          </el-table-column>-->
<!--&lt;!&ndash;            <el-table-column&ndash;&gt;-->

<!--&lt;!&ndash;              label="评价时段">&ndash;&gt;-->
<!--&lt;!&ndash;              <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                {{scope.row.wqWqsinfBDTO.mnag}}&ndash;&gt;-->

<!--&lt;!&ndash;              </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->
<!--            <el-table-column-->

<!--              label="水质类别">-->
<!--              <template slot-scope="scope">-->
<!--                {{scope.row.wQG}}-->

<!--              </template>-->
<!--            </el-table-column>-->

<!--            <el-table-column-->

<!--              label="超标项目与倍数">-->
<!--              <template slot-scope="scope">-->
<!--                {{scope.row.wQG}}-->

<!--              </template>-->
<!--            </el-table-column>-->

<!--          <el-table-column-->

<!--              label="测站备注">-->
<!--            <template slot-scope="scope">-->
<!--              {{scope.row.wqWqsinfBDTO.stlc}}-->

<!--            </template>-->
<!--            </el-table-column>-->

<!--          <el-table-column-->

<!--              label="WQEI">-->
<!--            <template slot-scope="scope">-->
<!--              {{scope.row.wqWqsinfBDTO.mnag}}-->

<!--            </template>-->
<!--            </el-table-column>-->

<!--           <el-table-column-->

<!--              label="总磷评价参照值">-->
<!--             <template slot-scope="scope">-->
<!--               {{scope.row.wqWqsinfBDTO.mnfrq}}-->

<!--             </template>-->
<!--            </el-table-column>-->

<!--          <el-table-column-->

<!--              label="总氮评价参照值">-->
<!--            <template slot-scope="scope">-->
<!--              {{scope.row.wqWqsinfBDTO.stgrd}}-->

<!--            </template>-->
<!--            </el-table-column>-->

<!--          <el-table-column-->
<!--            label="叶绿素">-->
<!--            <template slot-scope="scope">-->
<!--              {{scope.row.wqWqsinfBDTO.stwqt}}-->
<!--            </template>-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            label="高锰酸盐指数">-->
<!--            <template slot-scope="scope">-->
<!--              {{scope.row.wqWqsinfBDTO.mnag}}-->
<!--            </template>-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            label="透明度指数">-->
<!--            <template slot-scope="scope">-->
<!--              {{scope.row.wqWqsinfBDTO.atmn}}-->
<!--            </template>-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--              label="备注">-->
<!--              <template slot-scope="scope">-->
<!--                  {{scope.row.stlc}}-->
<!--              </template>-->
<!--            </el-table-column>-->
<!--          </el-table>-->
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
            selectTimeType:"singletime",
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
            startTime:'2015-07',
            /*截至时间*/
            endTime:'2015-08',

            /*表明以及字段筛选*/
            props: { multiple: true },
            options: [{
              value: 'szjcStation',
              label: '水质监测站',
              children: [{
                value: 'stcd',
                label: '测站代码',

              }, {
                value: 'stnm',
                label: '水域类型',

              }, {
                value: 'mndgMax',
                label: '流域名称',

              }]
            }, {
              value: 'surfaceWaterStation',
              label: '地表水水质监测',
              children: [{
                value: 'mndgType',
                label: '水系名称',

              }, {
                value: 'mndgName',
                label: '河流名称',

              }]
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
        queryTableData(){



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

          console.log(this.selectTimeType)
          console.log(this.startTime)
          console.log(this.endTime)

          /*if(this.selectTimeType=="singletime"){
            if(this.startTime ){
              this.$message('请选择时间参数');
              return
            }
          }else{
            if(this.startTime||this.endTime){
              this.$message('请选择时间参数');
              return
            }
          }*/

        let checkstartTime = moment(this.startTime).format('YYYYMM');
        let startyear = moment(this.startTime).format('YYYY');
        let checkendTime = moment(this.endTime).format('YYYYMM');
        let endyear = moment(this.endTime).format('YYYY');
         console.log(checkstartTime)
         console.log(startyear)
         console.log(checkstartTime.substring(checkstartTime.length-2))
          let startMonth=checkstartTime.substring(checkstartTime.length-2)
         console.log(checkendTime)
         console.log(endyear)
          console.log(checkendTime.substring(checkendTime.length-2))
          let endMonth=checkendTime.substring(checkendTime.length-2)

          console.log(parseInt(endMonth)-parseInt(startMonth))



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


          var param=
          {
            "pageNum":this.currentPage,
            "pageSize":this.pageSize,
            "qzfs":this.qzfsval,// min max avg
            "tjsj":tjsj
          }
          this.tableData=[]
          /*矿化度请求*/
          let url="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/base/listswmsar"
          /*http请求*/
          this.$http.post(url, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function(res) {
            // alert("chenggong")
            console.log(res)

            this.tableData=res.body.data.pageResultList
          }).catch(function(res){


          })

        }
      },
      watch:{
        pjxmval(newValue){

          this.tableData=[]



        },
        selectedOptions(newValue){

          let data=[{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,mndgMax:807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田222东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田333东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田444东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田555东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田666东"},{"lgtd":107.11,"lttd":23.58,"lynm":null,"mNDG":null,"mndg":null,"mndgMax":807.9,"mndgName":"较高矿化度","mndgType":"四","nEOBJ":null,"nT":null,"pH":null,"prpnm":null,"rEDOX":null,"sMELL":null,"sS":null,"spt":null,"stcd":"80786230","stnm":"田11东"}]



          this.tabledata=data
          console.log(newValue)

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
            console.log(newValue[i])
            var obj={}
            obj.key=newValue[i][1]
            obj.label=newValue[i][1]
            arr.push(obj)

          }
          console.log(arr)//渲染表头
          this.renderTab=arr
          /*每次切换数据table表格清空重新渲染*/




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
    width: 20%;
    height: calc( 100vh - 80px);
    background: #031823;
    /*background: rgba(21, 37, 63,1);*/
    position: absolute;
    top: 0;
    left: 0;
    border-right: #fff dashed 2px;
    border-left: #fff solid 1px;
  }
  #groundWater  .right_menu{
    width: 80%;
    height: calc( 100vh - 80px);
    padding-top: 50px;
    background: #031823;
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
    margin-top: 20px;
  }

  #groundWater .singleli_title .sysfxTit {
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
    /* text-align: right; */
    margin-right: 10px;
  }
  #groundWater >>>.el-input__inner {
    padding-left: 24px !important;
    color: #058cd0;
    border: 1px solid #058cd0;
    background: #031823;
    /*background: rgba(21,37,63,0.86);*/
    -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    font-size: 16px !important;
    /* border-radius: 10px !important; */
    /* border: 0px !important; */
    height: 30px !important;
     /*width: 190px !important;*/
  }
  #groundWater >>>.el-pagination__total{
    color:#ffffff !important;
  }
  #groundWater >>>.el-pagination__jump{
    color:#ffffff !important;
  }
  #groundWater >>>.el-pagination .el-select .el-input .el-input__inner{
    color: #ffff;
  }

  >>>.el-main{
    padding:0;
  }
  >>>.el-input__inner {
    padding-left: 30px;
    color: #058cd0;
    border: 1px solid #058cd0;
    background: #031823;
    -webkit-box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    box-shadow: 0px 0px 4px 0px rgb(19 255 187 / 30%);
    font-size: 14px;
    height: 30px ;

  }
  >>>.el-pagination__total{
    color:#ffffff !important;
  }
  >>>.el-pagination__jump{
    color:#ffffff !important;
  }
  >>>.el-pagination .el-select .el-input .el-input__inner{
    color: #ffff;

  }

  >>>.el-button{
    padding: 5px 15px !important;
  }
  >>>.el-button:active {
    color: #fff;
    border-color: #3a8ee6;
    outline: 0;
    background: rgba(21,37,63,0.86);
  }
  >>>.el-button:focus, .el-button:hover {
    color: #fff;
    border-color: #c6e2ff;
    background-color: rgba(21,37,63,0.86);
  }

  >>>.el-radio-group{
    width:100%;
  }
  >>>.el-radio {
    color: #fff;
  }
  >>>.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width:86%;
  }
  >>>.el-select-dropdown__item.selected{
    padding-left:20px!important;
  }

  >>>.el-radio__label {
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

</style>
