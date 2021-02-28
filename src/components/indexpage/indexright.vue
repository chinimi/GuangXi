<template>
  <div  id="index_right">
    <div class="r_module_title">
      <span>实时水情</span>
    </div>



      <div class="r_model_content">
        <el-row >
        <el-col :span="6" ><span  class="th_bg">站名</span></el-col>
        <el-col :span="6" > <span  class="th_bg">时间</span></el-col>
        <el-col :span="6" ><span  class="th_bg">水位</span></el-col>
        <el-col :span="6" ><span  class="th_bg">流量</span></el-col>
        </el-row>

        <!--table表格-->
        <!--跑马灯效果-->
        <!--:class="{marquee_top:animate}"
        animate?'marquee_top':''

        -->
        <div  class="content_table" v-on:mouseover="stopmove()" v-on:mouseout="play()"  style="cursor:pointer;max-height:150px;overflow-y: hidden;">
          <el-row     v-for="(item, index) in announcementArr" :key="index"  :class="[index%2==0?'on':'off',  ]" >
                <el-col :span="5" class="border-right">{{item.city}}</el-col>
                <el-col :span="8" class="border-right">{{item.time}} </el-col>
                <el-col :span="5" class="border-right">{{item.waterlevel}}</el-col>
                <el-col :span="5" class="border-right">{{item.watertraffic}}</el-col>
          </el-row>
        </div>
      </div>



      <!--2-->

      <div class="r_module_title">
        <span>实时水质</span>
      </div>

      <div class="r_model_content">
        <el-row>
          <el-col :span="6" ><span  class="th_bg">河流</span></el-col>
          <el-col :span="9"><span  class="th_bg">占地名称</span></el-col>
          <el-col :span="9" ><span  class="th_bg">水质类别</span></el-col>

        </el-row>

        <div  class="content_table">
          <el-row  class="on">
            <el-col :span="6" class="border-right">郁江</el-col>
            <el-col :span="9" class="border-right">田东</el-col>
            <el-col :span="9" class="border-right">Ⅲ</el-col>
          </el-row>

          <el-row  class="off">
            <el-col :span="6" class="border-right">郁江</el-col>
            <el-col :span="9" class="border-right">隆安</el-col>
            <el-col :span="9" class="border-right">Ⅲ</el-col>
          </el-row>
          <el-row  class="on">
            <el-col :span="6" class="border-right">郁江</el-col>
            <el-col :span="9" class="border-right">太平</el-col>
            <el-col :span="9" class="border-right">Ⅲ</el-col>
          </el-row>
          <el-row  class="off">
            <el-col :span="6" class="border-right">英竹河</el-col>
            <el-col :span="9" class="border-right">英竹</el-col>
            <el-col :span="9" class="border-right">Ⅲ</el-col>
          </el-row>
          <el-row  class="on">
            <el-col :span="6" class="border-right">秦川河</el-col>
            <el-col :span="9" class="border-right">东华</el-col>
            <el-col :span="9" class="border-right">Ⅲ</el-col>
          </el-row>


        </div>


      </div>

      <!--3:-->

      <div class="r_module_title">
        <span>水质报告</span>
      </div>

      <div class="r_model_content" style="max-height:230px;overflow-y: auto;">
         <div >
           <el-row  class="lion">
            <el-col :span="2">
              <i class="iconfont icon-xiazai1  downstyle" ></i>
            </el-col>
            <el-col :span="14">
              2020邕江流域水质报告54期
            </el-col>
            <el-col :span="4" class="date_color">
               03/02
            </el-col>
            <el-col :span="4" class="date_color">
              17:39
            </el-col>
          </el-row>
           <el-row  class="lioff">
             <el-col :span="2">
               <i class="iconfont icon-xiazai1  downstyle" ></i>
             </el-col>
             <el-col :span="14">
               2020邕江流域水质报告53期
             </el-col>
             <el-col :span="4" class="date_color">
               03/02
             </el-col>
             <el-col :span="4" class="date_color">
               17:39
             </el-col>
           </el-row>
           <el-row  class="lion">
             <el-col :span="2">
               <i class="iconfont icon-xiazai1  downstyle" ></i>
             </el-col>
             <el-col :span="14">
               2020邕江流域水质报告52期
             </el-col>
             <el-col :span="4" class="date_color">
               03/02
             </el-col>
             <el-col :span="4" class="date_color">
               17:39
             </el-col>
           </el-row>
           <el-row  class="lioff">
             <el-col :span="2">
               <i class="iconfont icon-xiazai1  downstyle" ></i>
             </el-col>
             <el-col :span="14">
               2020邕江流域水质报告51期
             </el-col>
             <el-col :span="4" class="date_color">
               03/02
             </el-col>
             <el-col :span="4" class="date_color">
               17:39
             </el-col>
           </el-row>
           <el-row  class="lion">
             <el-col :span="2">
               <i class="iconfont icon-xiazai1  downstyle" ></i>
             </el-col>
             <el-col :span="14">
               2020邕江流域水质报告50期
             </el-col>
             <el-col :span="4" class="date_color">
               03/02
             </el-col>
             <el-col :span="4" class="date_color">
               17:39
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
        timer:null,//定时器
        animate: false,//走马灯
        zmdTableData:[
          {
            city:'田东',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },
          {
            city:'隆安',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },
          {
            city:'太平',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },   {
            city:'英竹',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },
          {
            city:'东华',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },





        ],//走马灯数据
        announcementArr: [],//走马灯数据

        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]

      }
    },
    methods: {
      /*跑马灯效果*/
      getScrollData(){
        this.announcementArr=[
          {
            city:'田东',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },
          {
            city:'隆安',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },
          {
            city:'太平',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },   {
            city:'英竹',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },
          {
            city:'东华',
            time:'2021-01-03',
            waterlevel:30,
            watertraffic:5000,
          },





        ]

      },
      showMarquee(){
        this.animate = true;
        setTimeout(() => {
          this.announcementArr.push(this.announcementArr[0]);
          this.announcementArr.shift();
          this.animate = false
        }, 1000)


      },

      /*走马灯效果*/

      change() {
        //change、paly表格数据动态滚动
        this.animate = true;
        this.announcementArr.push(this.announcementArr[0]);//把第一条数据插入数组最有一条

        this.announcementArr.shift();//删除数组中第一条数据

      },

      play() {
        this.timer=setInterval(this.change, 2000);//每两秒执行一次插入删除操作

      },
      //鼠标悬停时停止移动
      stopmove() {
        clearInterval(this.timer)
      }




    },
    computed: {


    },
    mounted(){
      this.getScrollData()
      this.play()
      // setInterval(this.showMarquee, 2000);
    },
    watch: {

    }

  }
</script>
<style scoped="scoped">
#index_right{
  width: 339px;
  position: absolute;
  top: 74px;
  right: 10px;
  z-index: 9;
  height: calc(100vh - 200px);
  background-size: 100% 100%;
  background: #fff;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 4px 0px rgb(22 119 255);
  box-shadow: 0px 0px 4px 0px rgb(22 119 255);
}

.th_bg{
  font-size: 15px;
  background: #caebff;
  color: #235d9a;
  font-weight: 900;
  padding: 4px 18px;
}
.r_module_title{
  font-weight: 800;
  color: #fff;
 border-top-left-radius: 5px;
 border-top-right-radius: 5px;
  background: #457ff5;
  line-height: 39px;
  padding-left: 19px;
  font-size: 16px;
  border-bottom: solid 1px #01c3e4;

}

  .r_model_content{
    color: #7b7e7f;
    width:90%;
    margin:9px auto;

  }
  .on {

    background: #f5f5f5;
    line-height: 30px;
  }
  .off {

    background: #fefdff;
    line-height: 30px;
  }

  .lion{
    cursor: pointer;
    padding: 12px 0px;
    background: #fff;
    font-size: 14px;
  }

  .lioff{
    font-size: 14px;
    cursor: pointer;
    padding: 12px 0px;
    background: #eaf7ff;
  }

  .downstyle{
    color:#1677FF;
  }
  .date_color{
    color:#333;
  }

  .marquee_top{
    transition: all 0.5s;
    /*transition: all 1s linear;		//这个是关键*/

  }
</style>
