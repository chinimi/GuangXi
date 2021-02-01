<template>
  <div id="associativeOperate">
    <el-container>
      <!--右侧-->
      <el-main width="50%"  class="associateRight">
        <div class="topPan">
          <div class="analyze_title">
            <i class="iconfont icon-fuhao-tuceng"></i>
            <span>水质专题</span>
          </div>
          <!--内容部分-->
          <div class="analyze_content">
            <ul >
              <li
                v-for="item  in subjectProducts"
                :class="['sliderClass',{activeLi : ( curli == item.name ? true : false )}]"
                @click="curli = item.name"
              >

                <span>{{item.title}}</span>
              </li>
            </ul>

          </div>
        </div>
        <div class="middlePan">
          <div class="analyze_title">
            <span>统计分析</span>
          </div>
          <!--内容部分-->
          <div class="analyze_content">
            <ul  class="mid_tab_title">
              <li
                v-for="item  in calculateType"
                :class="['middleSliderClass',{ activeLi : ( curMidTab == item.name ? true : false )}]"
                @click="curMidTab = item.name;curMidCom=item.comp ;showMidTab(item.comp)"
              >

                <span>{{item.name}}</span>
              </li>
              <div class="clear"></div>
            </ul>

            <div  class="mid_tab_content">
              <div v-show="curMidCom == 'first'">

                <el-radio-group  v-model="firstRadio">
                  <el-col :span="8" v-for="product in firstRadioOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>

              </div>
              <div v-show="curMidCom == 'second'">
                <el-radio-group  v-model="secondRadio">
                  <el-col :span="8" v-for="product in secondRadioOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>


              </div>
              <div v-show="curMidCom == 'third'">
                <el-radio-group  v-model="thirdRadio">
                  <el-col :span="8" v-for="product in thirdRadioOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>


              </div>
              <div v-show="curMidCom == 'fourth'">
                <el-radio-group  v-model="fourthRadio">
                  <el-col :span="8" v-for="product in fourthRadioOption"   :key="product.value">
                    <el-radio :label="product.value"   >{{product.label}}</el-radio>
                  </el-col>
                </el-radio-group>


              </div>
            </div>

          </div>

        </div>
        <div class="bottomPan">
          <div class="analyze_title">
            <span>三维展示</span>
          </div>

          <!--内容部分-->
          <div class="analyze_content">


          </div>


        </div>
      </el-main>
      <!--左侧-->
      <el-aside  style='display: block' width="50%" class="associateLeft">
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
          <!--    &lt;!&ndash;时间序列&ndash;&gt;
          <div class="singleli_title" >
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
                  placeholder="选择日期时间">
                </el-date-picker>
              </el-col>
            </el-row>
          </div>


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
                  format="yyyy-MM"
                  type="month"
                  align="right"
                  size="mini"
                  placeholder="选择日期时间">
                </el-date-picker>
              </el-col>
            </el-row>
          </div>-->
          <!--时间选择-->
          <!--年份-->
          <div class="singleli_title">
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
              <el-col :span="1" style="color:#fff;text-align: center;">-</el-col>

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
          <div class="singleli_title" v-if="selectTimeType=='ordertime'&&pjbcVal=='month'">
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
          <div class="singleli_title"  v-if="selectTimeType=='singletime'&&pjbcVal=='month'">
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
              <el-col :span="1" style="color:#fff;text-align: center;">-</el-col>

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
          <div class="singleli_title" v-if=" pjbcVal=='xun'">
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
          <div class="singleli_title" v-if=" pjbcVal=='xq'">
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
          </div>
          <!--非汛期-->
          <div class="singleli_title" v-if=" pjbcVal=='fxq'">
            <el-row>
              <el-col :span="8">
                <div class="sysfxTit">
                  非汛期：
                </div>
              </el-col>
              <el-col :span="14" style="margin-left: -5%;"   >
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
          <div class="singleli_title" v-if="  pjbcVal=='halfyear'">
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
          <div  style="padding-left: 80px;margin-top:15px;">
            <el-button @click="drawPoint">确定</el-button>
            <el-button>取消</el-button>
          </div>
        </div>

      </el-aside>

    </el-container>

  </div>
</template>
<script>

  import moment from 'moment'
 
  export default {
    data() {
      return {
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
        firstRadio:'',//1
        firstRadioOption:[{label:'监测成果测站一览表',value:'jccgylb'},{label:'·监测成果',value:'jccg'},{label:'监测成果月均',value:'jccgyj'},{label:'监测成果均值',value:'jccgjz'}],

        secondRadio:'',//2
        secondRadioOption:[{label:'水质类别',value:'szlb'},{label:'·水质均',value:'szj'},{label:'水质类别月',value:'szlby'},{label:'水源地水质状',value:'sydszz'}],
        thirdRadio:'',//3
        thirdRadioOption:[{label:'测次、最差值、最优值统计表',value:'ztjb'},{label:'水质类别河流站次统计',value:'szlbtjb'},{label:'水质类别站次和河长统计总',value:'hctjzb'},{label:'河长、超标站次统计',value:'cbzctj'}],
        fourthRadio:'',//4
        fourthRadioOption:[{label:'监测频次表',value:'jcpcb'},{label:'监测月均值',value:'jcyjz'},{label:'监测均值',value:'jcjz'} ],




        curMidCom:'first',//跳转组件
        curMidTab:'first',//tab mid
        /*评价标准*/
        pjbzval:'all',
        pjbzOption:[{
          label:"全部",
          value:'all',
        }],
        /*评价项目*/
        pjxmval:'khd',
        pjxmOption:[{
          label:"矿化度",
          value:'khd',
        },{
          label:"总硬度",
          value:'zyd',
        },{
          label:"水化学类型",
          value:'shxlx',
        },{
          label:"地表天然水",
          value:'dbtrs',
        }],
        /*取值方式*/
        qzfsval:'avg',
        qzfsOption:[{
          label:"平均值",
          value:'avg',
        },{
          label:"最小值",
          value:'min',
        },{
          label:"最大值",
          value:'max',
        }],
        /*当前水系*/
        cursysval:'longriver',
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
        }],

        /*评价步长*/
        pjbcVal:'year',//评价步长
        pjbcOption:[{value:'xun',label:'旬'},{value:'month',label:'月'},{value:'ji',label:'季'},{value:'xq',label:'汛期'},{value:'fxq',label:'非汛期'},{value:'halfyear',label:'半年'},{value:'year',label:'年'}],

        /*初始时间*/
        startTime:'2015-07',
        /*截至时间*/
        endTime:'2015-08',
        curli:'4',

        subjectProducts:[
          {name:'1',title:'污染物浓度分布专题图'},
          {name:'2',title:'污染物评价类别分布专题图'},
          {name:'3',title:'污染物评价类别时间变化趋势专题地图'},
          {name:'4',title:'测站现状评价专题图'},
          {name:'5',title:'水质类别色彩渲染专题图'},
          {name:'6',title:'污染物排放达标专题图'},
          {name:'7',title:'污染物排放量专题图'},
        ],
        calculateType:[
          {
            name: '监测成果',
            value: 'first',
            comp: 'first'
          },
          {
            name: '评价分析',
            value: 'second',
            comp: 'second'
          },
          {
            name: '统计类',
            value: 'third',
            comp: 'third'
          },
          {
            name: '富营养化',
            value: 'fourth',
            comp: 'fourth'
          },
        ],
        pointLayer:null,//绘制的点图层
        selectClick:null,
        pointSource:null,//点图层上的点要素
        pointData:[],//当前点

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



      }
    },
    methods: {
      showMidTab(ele){

      },
      /*请求当前评价项目参数*/
      ajaxPointSource(param,pointLayer){//传请求参数

        debugger
        var  that=this

        /*矿化度请求*/
        //debugger
        if(that.pjxmval=="khd") {
          let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
          /*http请求*/
          this.$http.post(khdurl, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function(res) {
            // alert('矿化度')
            let data=res.body.data.pageResultList
            let points=[]
            console.log(data)
            for (let i=0;i<data.length;i++) {
              let coord = data[i]
              //debugger
              var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:4326");
              var point = new ol.Feature({
                geometry: new ol.geom.Point(labelCoords)
              });//构点
              points.push(point)
            }

          //实例化一个矢量图层Vector作为绘制层
          var source = new ol.source.Vector({
            features: points
          });

            // if(pointLayer){//如果有图层
            //   source = pointLayer.getSource()
            //   source.clear();
            //   pointLayer.setSource(source)
            //
            // }else{//没有图层创建新图层
                  //矢量图层
              that.pointLayer=new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source:source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#62ff3c'
                    })
                  })
                })
              });

              map.addLayer(that.pointLayer);//添加上站点的图层


            // }


          }).catch(function(res){
          })

        }

        /*水化学类型*/
        if(that.pjxmval=="shxlx") {
          let chemistryurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listshx"
          /*http请求*/
          this.$http.post(chemistryurl, JSON.stringify( param), {
            emulateJSON: true,
          }).then(function (res) {
            // alert('水化学类型')

            let data=res.body.data.pageResultList
            console.log(data)

            let points=[]

            for (let i=0;i<data.length;i++) {
              let coord = data[i]

              var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:4326");
              var point = new ol.Feature({
                geometry: new ol.geom.Point(labelCoords)
              });//构点
              points.push(point)
            }

            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });

            // if(pointLayer){//如果有图层
            //   pointLayer.setSource(source)
            //
            // }else{//没有图层创建新图层
              //矢量图层
              that.pointLayer=new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source:source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#ffcf43'
                    })
                  })
                })
              });

              map.addLayer(that.pointLayer);//添加上站点的图层


            // }



          }).catch(function (res) {

            // alert("请求失败")
          })
        }
        /*总硬度*/
        if(that.pjxmval=="zyd") {
          let zydurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listthrd"
          /*http请求*/
          this.$http.post(zydurl, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function (res) {
            // alert('总硬度')

            let data=res.body.data.pageResultList
            console.log(data)

            let points=[]

            for (let i=0;i<data.length;i++) {
              let coord = data[i]

              var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:4326");
              var point = new ol.Feature({
                geometry: new ol.geom.Point(labelCoords)
              });//构点
              points.push(point)
            }

            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });

            // if(pointLayer){//如果有图层
            //   pointLayer.setSource(source)
            //
            // }else{//没有图层创建新图层
              //矢量图层
              that.pointLayer=new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source:source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#ff0833'
                    })
                  })
                })
              });

              map.addLayer(that.pointLayer);//添加上站点的图层


            // }
          }).catch(function (res) {
            console.log(res)

          })
        }
        /*地表天然水*/
        if(that.pjxmval=="dbtrs") {

          let dbtrsurl = "http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/listTrlzs"
          /*http请求*/
          this.$http.post(dbtrsurl, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function (res) {

            // alert('地表天然水')
            let data=res.body.data.pageResultList
            console.log(data)

            let points=[]

            for (let i=0;i<data.length;i++) {
              let coord = data[i]
              console.log(coord.lgtd)
              console.log(coord.lttd)
              var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:4326");
              var point = new ol.Feature({
                geometry: new ol.geom.Point(labelCoords)
              });//构点
              points.push(point)
            }

            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });

            // if(pointLayer){//如果有图层
            //   pointLayer.setSource(source)
            //
            // }else{//没有图层创建新图层
              //矢量图层
              that.pointLayer=new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source:source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#4b97ff'
                    })
                  })
                })
              });
              map.addLayer(that.pointLayer);//添加上站点的图层


            // }

          }).catch(function (res) {
          })
        }
      },

      /*绘制点要素   创建source*/
      PlotPointSource(data){

        let points=[]
        for (let i=0;i<data.length;i++) {
          let coord = data[i]
          console.log(coord.lgtd)
          console.log(coord.lttd)
          var point = new ol.Feature({
            geometry: new ol.geom.Point([coord.lgtd, coord.lttd])
          });//构点
          points.push(point)

          //实例化一个矢量图层Vector作为绘制层
          var source = new ol.source.Vector({
            features: points
          });
          //矢量图层
          let positionLayer = new ol.layer.Vector({
            zIndex: 10,
            projection: 'EPSG:4326',
            source: source,
            style: new ol.style.Style({
              fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.1)'
              }),
              stroke: new ol.style.Stroke({
                color: 'red',
                width: 10
              }),
              image: new ol.style.Circle({
                radius: 10,
                fill: new ol.style.Fill({
                  color: '#ffcf43'
                })
              })
            })
          });

          return   source
          // positionLayer.setSource(source);
          // map.addLayer(positionLayer);//添加上站点的图层

        }


      },


      drawPoint(){//绘制点要素图层
      if (map==null) return
        var that=this
       // debugger
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
        let startMonth=checkstartTime.substring(checkstartTime.length-2)
        let endMonth=checkendTime.substring(checkendTime.length-2)

        var str=""
        var count=parseInt(endMonth)-parseInt(startMonth)
        for(var i=parseInt(startMonth)-1;i<count;i++)
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


        // alert(1)
        console.log(map)


         // this.activeLayerEvent(map)



        /*1:获取参数*/
        /*请求经纬度坐标点*/
        var param=
          {
            "pageNum":0,
            "pageSize":100,
            "qzfs":this.qzfsval,// min max avg
          //  "tjsj":tjsj
            "tjsj":"201412-201501-201502-201503-201504-201505-201506-201507-201508-201509-201510-201511-201512-201601-201602-201603-201604-201605-201606-201607-201608-201609-201610-201611-201612"
          }

        /*2：a:判断是否有图层，有图层，清空source  b:没有图层，创建一个新的图层*/

        if(this.pointLayer) {//有图层，清空所有几何要素
          let lastsource =  this.pointLayer.getSource()
          lastsource.clear();
          /*请求数据重新绘制*/
          this.ajaxPointSource(param,this.pointLayer)


        }else{
          console.log("获取请求数据  并创建一个图层")
          this.ajaxPointSource(param)
        }


        /*  if(this.pointLayer){//有图层，清空所有几何要素
             let lastsource =  this.pointLayer.getSource()
                 lastsource.clear();
             let source=this.PlotPointSource(pointData)//当前数据绘制的图层
             this.pointLayer.setSource(source)
          }else{//没有图层，创建一个新的图层，添加要素

            let source=this.PlotPointSource(pointData)//当前数据绘制的图层

            //矢量图层
              this.pointLayer=new ol.layer.Vector({
              zIndex: 10,
              projection: 'EPSG:4326',
              source:source,
              style: new ol.style.Style({
                fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 255, 0.1)'
                }),
                stroke: new ol.style.Stroke({
                  color: 'red',
                  width: 10
                }),
                image: new ol.style.Circle({
                  radius: 10,
                  fill: new ol.style.Fill({
                    color: '#ffcf43'
                  })
                })
              })
            });

            map.addLayer( this.pointLayer);//添加上站点的图层

          }*/
       /* /!*矿化度请求*!/
        let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
        /!*http请求*!/
        this.$http.post(khdurl, JSON.stringify(param), {
          emulateJSON: true,
        }).then(function(res) {
          let data=res.body.data.pageResultList
          let points=[]
          for (let i=0;i<data.length;i++) {
            let coord = data[i]
            console.log(coord.lgtd)
            console.log(coord.lttd)
            var labelCoords = ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:3857");
            var point = new ol.Feature({
              geometry: new ol.geom.Point(labelCoords)
            });//构点
            points.push(point)
          }
            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });
            //矢量图层
            let positionLayer = new ol.layer.Vector({
              zIndex: 10,
              projection: 'EPSG:4326',
              source: source,
              style: new ol.style.Style({
                fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 255, 0.1)'
                }),
                stroke: new ol.style.Stroke({
                  color: 'red',
                  width: 10
                }),
                image: new ol.style.Circle({
                  radius: 10,
                  fill: new ol.style.Fill({
                    color: '#ffcf43'
                  })
                })
              })
            });

            console.log(map)
            // positionLayer.setSource(source);
            map.addLayer(positionLayer);//添加上站点的图层

          }
        }).catch(function(res){})*/

      var that = this;
      window.map.on('singleclick', mapClick);
        debugger
       function mapClick(e){
          //点击的坐标
         // var coordinate = e.coordinate;
          //添加地图点击标记,创建标记feature
       
          debugger
          var pixel = map.getEventPixel(e.originalEvent);

          var feature = map.forEachFeatureAtPixel(pixel,
                  function (feature, layer) {
                      return {feature:feature};
                  });
          if (feature!==undefined&&feature!==null)
          {
            
            console.log(feature);

            var element;

            that.OverlayPopup=that.createPopupOverlay();
            element= that.OverlayPopup.getElement();
            element.innerHTML=that.GetPopupContent(featureInfo);

            this.OverlayPopup.setPosition(features[0].getGeometry().getCoordinates());
            map.addOverlay(this.OverlayPopup);


          }

       }
       //this.activeLayerEvent();

      },


     /* drawPoint(){//绘制点要素图层
        /!*请求经纬度坐标点*!/
        var param={
          "pageNum":"0",      // --当前页
          "pageSize":"10",     //--一页显示数量
          "qzfs":"avg",        //--取值方式: min max avg  （分别为最小值、最大值、平均值）
          "tjsj":"201507-201508"
        }
        let pointData=this.ajaxPointData(param)//请求回来的数据

        console.log(pointData)
      /!*  if(this.pointLayer){//有图层，清空所有几何要素
           let lastsource =  this.pointLayer.getSource()
               lastsource.clear();
           let source=this.PlotPointSource(pointData)//当前数据绘制的图层
           this.pointLayer.setSource(source)
        }else{//没有图层，创建一个新的图层，添加要素

          let source=this.PlotPointSource(pointData)//当前数据绘制的图层

          //矢量图层
            this.pointLayer=new ol.layer.Vector({
            zIndex: 10,
            projection: 'EPSG:4326',
            source:source,
            style: new ol.style.Style({
              fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.1)'
              }),
              stroke: new ol.style.Stroke({
                color: 'red',
                width: 10
              }),
              image: new ol.style.Circle({
                radius: 10,
                fill: new ol.style.Fill({
                  color: '#ffcf43'
                })
              })
            })
          });

          map.addLayer( this.pointLayer);//添加上站点的图层

        }*!/
        /!*矿化度请求*!/
        let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
        /!*http请求*!/
        this.$http.post(khdurl, JSON.stringify(param), {
          emulateJSON: true,
        }).then(function(res) {
          let data=res.body.data.pageResultList
          let points=[]
          for (let i=0;i<data.length;i++) {
            let coord = data[i]
            console.log(coord.lgtd)
            console.log(coord.lttd)
            var labelCoords=ol.proj.transform([coord.lgtd, coord.lttd], "EPSG:4326", "EPSG:3857");
            var point = new ol.Feature({
              geometry: new ol.geom.Point(labelCoords)
            });//构点
            points.push(point)

            //实例化一个矢量图层Vector作为绘制层
            var source = new ol.source.Vector({
              features: points
            });
            //矢量图层
            let positionLayer = new ol.layer.Vector({
              zIndex: 10,
              projection: 'EPSG:4326',
              source: source,
              style: new ol.style.Style({
                fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 255, 0.1)'
                }),
                stroke: new ol.style.Stroke({
                  color: 'red',
                  width: 10
                }),
                image: new ol.style.Circle({
                  radius: 10,
                  fill: new ol.style.Fill({
                    color: '#ffcf43'
                  })
                })
              })
            });

            console.log(map)
            // positionLayer.setSource(source);
            map.addLayer(positionLayer);//添加上站点的图层

          }
        }).catch(function(res){})

      },*/


      drawPolygon(){
        debugger
        /*请求经纬度坐标点*/
        var param={
          "pageNum":"0",      // --当前页
          "pageSize":"100",     //--一页显示数量
          "qzfs":"avg",        //--取值方式: min max avg  （分别为最小值、最大值、平均值）
          "tjsj":"201412-201501-201502-201503-201504-201505-201506-201507-201508-201509-201510-201511-201512-201601-201602-201603-201604-201605-201606-201607-201608-201609-201610-201611-201612"
        }
        /*矿化度请求*/
          let khdurl="http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/wqpcpd/list"
          /*http请求*/
          this.$http.post(khdurl, JSON.stringify(param), {
            emulateJSON: true,
          }).then(function(res) {

            let data=res.body.data.pageResultList
            let points=[]
            for (let i=0;i<data.length;i++) {
              let coord = data[i]
              console.log(coord.lgtd)
              console.log(coord.lttd)
              var point = new ol.Feature({
                geometry: new ol.geom.Point([coord.lgtd, coord.lttd])
              });//构点
              points.push(point)

              //实例化一个矢量图层Vector作为绘制层
              var source = new ol.source.Vector({
                features: points
              });
              //矢量图层
             let positionLayer = new ol.layer.Vector({
                zIndex: 10,
                projection: 'EPSG:4326',
                source: source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#ffcf43'
                    })
                  })
                })
              });

              console.log(map)
              positionLayer.setSource(source);
              map.addLayer(positionLayer);//添加上站点的图层

            }

          }).catch(function(res){


          })


      },


      /*点击地图查询功能20210131*/

      GetPopupContent(features){
        debugger

        ////////edit songmingming///////////////////////////
        let property=features[0].getProperties();
        console.log("获取当前选中要素的属性")
        let attribute=property.attribute
        console.log(attribute)

        var hdms="";

        hdms = hdms+"<span class='Popup_p_title'>"+attribute["SecName"]+"</span>"+
          "<div><span class='Popup_p'><span class='Popup_span'>经度:</span>"+attribute["Long"]+'°</span>'+
          "<span class='Popup_p'><span class='Popup_span'>纬度:</span>"+attribute["Lat"]+'°</span>'+
          "<span class='Popup_p'><span class='Popup_span'>地址:</span>"+attribute["SecAddress"]+'</span>'+
          "<span class='Popup_p'><span class='Popup_span'>编码:</span>"+attribute["SecCode"]+'</span>';
        hdms=hdms+"</div>";


        return hdms;
      },
      removeAllOverlay (map) {
        map.getOverlays().getArray().slice(0).forEach(function (overlay){
          map.removeOverlay(overlay)
        })
      },
      createPopupOverlay(){
        debugger
        var elediv_popup=document.createElement('div');
        // elediv_popup.setAttribute(id,'environmentpop');
        elediv_popup.className="environmentFeaturePopup";
        var elediv_popup = new ol.Overlay({
          element:elediv_popup,
          autoPan:true,
          autoPanMargin:100,
          positioning:'center-left',
          offset:[15,-10]
        });
        return elediv_popup;
      },


      activeLayerEvent(){
        debugger
        if (this.pointLayer==null)
        {
          return
        }
        let that=this;

        console.log(that.pointLayer)
        /*选中要素样式*/
        let select = new ol.style.Style({
          image: new ol.style.Circle({
            radius: 6,
            fill: new ol.style.Fill({
              color: "blue",
            }),
            stroke: new ol.style.Stroke({
              color: 'white',
              width: 1.5
            })
          })
        });
        debugger
        that.selectClick = new ol.interaction.Select({
          condition:ol.events.condition.click,
          layers:[that.pointLayer],   //默认不加，会对地图中的所有图层执行单机选中事件
          // style:function (feature) {
          //   let orgin = styleFunction(feature);
          //   orgin.push(select);
          //   return orgin;
          // },
          style:select,//选中后要素样式
          multi:false,
          hitTolerance:10
        });

        // map.on('pointermove',onPointerMove);
      //  window.map.addInteraction(that.selectClick);
        that.selectClick.on('select', function(e) {
          // alert(2)
          console.log("获取当前选中的要素")
          console.log(e)

          if(that.OverlayPopup){
            that.removeAllOverlay(map)
            // map.removeOverlay(that.OverlayPopup);
          }
          var features=e.selected;

          // var features=e.target.getFeatures().getArray();
          if(features.length>0){
            var element;
            that.OverlayPopup=that.createPopupOverlay();
            element= that.OverlayPopup.getElement();
            element.innerHTML=that.GetPopupContent(features);

            that.OverlayPopup.setPosition(features[0].getGeometry().getCoordinates());
            map.addOverlay(that.OverlayPopup);

          }

        })
      },


    },

    mounted(){

      //debugger
      map = window.map
      console.log("水质专题中")
      console.log('获取地图全局变量')
      console.log(this.$store.state.map)
    
      console.log(map)
      
      //drawPoint();

     
    
     




    },
    watch: {
      
      pjxmval() {
        if (this.pointLayer) {
          this.source = this.pointLayer.getSource()
          this.source.clear();
        }

        },

      

    },
    created() {
      // alert(1)
      // console.log(map)
    }


  }
</script>
<style scoped="scoped">

.clear{
  clear:both;
  height: 0;
  font-size: 0;
}
#associativeOperate{
  width: 30%;
  background: rgba(21,37,63,0.86);
  /*width:800px;*/
  height:calc( 100vh - 290px);
  -webkit-box-shadow: 0 0 2px #1e88ef, 0 0 12px #1e88ef;
  box-shadow: 0 0 2px #1e88ef, 0 0 12px #1e88ef;
  /*border-left-color: #0a74db;*/
  position: absolute;
  top: 30px;
  left:0;
}
.associateRight{
  border-right:dashed 1px rgba(255,249,229,0.5);
  padding:0;
 }
.associateLeft{
  padding:0;
}

#associativeOperate .singleli_title {
  font-size: 13px;
  height: 35px;
  /* line-height: 13px; */
  border-radius: 5px;
  font-weight: lighter;
  margin-left: 3%;
  margin-top: 10px;
}

#associativeOperate .singleli_title .sysfxTit {
  color: #fff;
  letter-spacing: 1px;
  font-size: 13px;
}
.topPan{
  width: 100%;
  height: 40%;
}
.middlePan{
  width: 100%;
  height: 30%;
}
.bottomPan{
  width: 100%;
  height: 30%;
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
    width:100%;
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
  background-color: transparent !important;
  height: 0 !important;
  width: 0 !important;
}

>>> ::-webkit-scrollbar-thumb {
  background-color: transparent !important;
}

/* 修改边框颜色*/
>>> ::-webkit-scrollbar-thumb {
  background-color: transparent !important;
}
>>>.el-container{
  height: 100%;
}

.sliderClass{
  cursor: pointer;
  color: #fff;
  list-style: none;
  font-size: 15px;
  line-height: 30px;
  padding: 5px 10px ;

}
.activeLi{
  /*background-color: #ffdb61 !important;*/
  color: #ffdb61 !important;
  /*border: 1px solid #d49500!important;*/
}
/*middle part*/
.middleSliderClass{
  cursor: pointer;
  color: #fff;
  float: left;
  list-style: none;
  font-size: 10px;
  line-height: 30px;
  padding: 0px 6px;
  background: #6184b5;
  border-radius: 5px;
  margin-left: 6px;
  margin-top: 6px;

}
  .midactiveli{
    color:yellow;
  }

  .analyze_content{
    width:98%;
    height: calc(100% - 30px);
    overflow-y: auto;
    margin:0 auto;

  }
  .analyze_title{
    padding-left:20px;
    line-height: 30px;
    color:#fff;
    background: #042c64;
    text-align: left;
    font-weight: 700;
  }
  .analyze_title span {
    font-size:14px;
  }

  .mid_tab_title{
    width: 100%;
    line-height: 30px;

  }
  .mid_tab_content{
    width:100%;
    color: #fff;
  }

.environmentFeaturePopup{
  background: #252424d1 !important;
  font-size: 13px;
  font-family: sans-serif;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  padding-left: 20px;
  border-radius: 10px;
  border: 2px solid #24948b;
  width: 200px;
  color: #dcdbdb;
  height: 180px;
  overflow-y: auto;
}
.environmentFeaturePopup .Popup_p{
  float:left;
  display:block;
  width:150px;
  line-height: 25px;
  /*height: 25px;*/
  padding: 0;
  margin: 0;
  font-weight: lighter;
  font-size: 12px;
}
.environmentFeaturePopup .Popup_p_title{
  display:block;
  padding:5px 0;
  color:#00fbfb;
  text-align: center;
  font-size:15px;
}
.environmentFeaturePopup .Popup_span{
  font-weight: 500;



}

</style>

