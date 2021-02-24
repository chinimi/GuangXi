<template>
  <div  id="index_left_top" >
    <div class="model_title">
      <i  style='color:#8cf1b3;' class="iconfont icon-shu"></i>
      <span>河湖长制信息</span>
    </div>
    <div class="index_model">

        <ul class="model_content">

          <li class="shu_line">
            <div class="river_name">河流（条）</div>
            <div class="river_amount">{{heliu}}</div>

          </li>
          <li>
            <div class="river_name">河段（条）</div>
            <div class="river_amount">{{heduan}}</div>

          </li>
          <div class="clear"></div>



        </ul>
      <ul class="model_content">

        <li class="shu_line">
          <div class="river_name">湖泊（个）</div>
          <div class="river_amount">{{hp}}</div>

        </li>
        <li>
          <div class="river_name">水库（座）</div>
          <div class="river_amount">{{sk}}</div>

        </li>

        <div class="clear"></div>


      </ul>
      <ul class="model_content">

        <li class="shu_line">
          <div class="river_name">总河（湖）长数（人）</div>
          <div class="river_amount">{{zhcs}}</div>

        </li>
        <li>
          <div class="river_name">河（湖）长数（人）</div>
          <div class="river_amount">{{hhcs}}</div>

        </li>

        <div class="clear"></div>


      </ul>






    </div>



  </div>
</template>
<script>


  export default {
    components:{

    },
    data() {
      return {
        heliu:null,//河流
        heduan:null,//河段
        hp:null,//湖泊
        sk:null,//水库
        zhcs:null,//总河（湖）长数（人）
        hhcs:null,//河（湖）长数（人）

      }
    },
    methods: {

    },
    computed: {


    },
    mounted(){
      /*请求河湖长制展示信息*/
      /*http请求*/
      let url='http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/gm/gmcont'
      this.$http.post( url,{
        emulateJSON: true,
      }).then(function(res) {

        console.log(res.body.data)
        let resData=res.body.data
        this.heliu=resData.River
        this.heduan=resData.MasterZHC
        this.hp=resData.Lake
        this.sk=resData.River
        this.zhcs=resData.River
        this.hhcs=resData.Reservoirr

      }).catch(function(res){
      })

    },
    watch: {

    }

  }
</script>
<style scoped="scoped">
#index_left_top{
  width: 313px;
  height: 330px;
  position: absolute;
  top: 52px;
  left: 8px;
  /* background: url(/static/img/left_tt.548cfb4.png); */
  z-index: 10;
  border: solid 1px rgb(22, 119, 255);
  border-radius: 20px;
  background: #fff;
  -webkit-box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
  box-shadow: 0px 0px 4px 0px rgb(22, 119, 255);
}

.model_content{
  margin-bottom: 5px;
  font-size: 14px;
  padding: 7px 0px 0 0px;
  text-align: center;
}

.model_content li{
  width: 48%;
  float: left;
  text-align: center;

}

.shu_line{
  border-right:1px solid #eee;
}

.river_name{
  color:#7b7e7f;
  font-size:13px;
}
.river_amount{
  padding:10px;
  color:#4580f6;
  font-size:20px;
  font-weight: 800;


}

</style>
