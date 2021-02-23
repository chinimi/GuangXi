<template>
  <!--一维模型主页面-->
  <div class="oneDimensionalModel">
    <div class="Model" v-if="slideDown">
      <ul class="clear-fix Model_ul">
        <li :class="[TapType == '1' ? 'csourer' : '']" @click="TapSwitch(1)">方案库</li>
        <li :class="[TapType == '2' ? 'csourer' : '']" @click="TapSwitch(2)">方案编制</li>
        <li>
          <div class="butt_close" @click="header(1)">
            <img src="../../../../static/images/close.png" alt="" />
          </div>
        </li>
      </ul>
      <div  class="Model_text">
        <router-view></router-view>
      </div>
    </div>
    <div class="header_true" v-if="!slideDown">
      <div class="header_shangla_div" @click="header(2)">
        <img  src="static/images/icon/chuangkou.png" alt="" />
        方案管理窗口
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import schemeLibrary from "./schemeLibrary.vue";
import programmePreparation from "./programmePreparation.vue";

export default {
  props: ["type"],
  components: {
    schemeLibrary,
    programmePreparation
  },
  data() {
    return {
      TapType:1,
      slideDown: true,
    };
  },
  created () {

  },
  methods: {
    ...mapActions({
      changeOneDimensionalModelTabID: "changeOneDimensionalModelTabID",
    }),
    // 增加显示隐藏
    header(id) {
      if (id == "1") {
        this.slideDown = false;
      } else {
        this.slideDown = true;
      }
    },
    TapSwitch(id){
      this.changeOneDimensionalModelTabID({value:id})
      this.TapType = id;
      if(id==1){
              this.$router.push({name:'schemeLibrary',params:{}});
      }else{
        // this.$message.error("请选择方案！");
        this.$router.push({name:'programmePreparation',params:{}});
      }
    }
  },
  computed: {},
  mounted() {

  },
  watch: {


  }
};
</script>
<style scoped>
@import '../../../../static/css/public.css';
</style>
