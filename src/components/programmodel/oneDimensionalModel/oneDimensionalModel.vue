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
      <div v-show="TapType == '1'" class="Model_text">
        <schemeLibrary></schemeLibrary>
      </div>
      <div v-show="TapType == '2'" class="Model_text">
        <programmePreparation></programmePreparation>
      </div>
    </div>
    <div class="header_true" v-if="!slideDown">
      <div class="header_shangla_div" @click="header(2)">
        <img class="shangla_img" src="static/images/shangla.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import schemeLibrary from "./schemeLibrary.vue";
import programmePreparation from "./programmePreparation.vue";

export default {
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
  methods: {
    // 增加显示隐藏
    header(id) {
      if (id == "1") {
        this.slideDown = false;
      } else {
        this.slideDown = true;
      }
    },
    TapSwitch(id){
      this.TapType = id;
    }
  },
  computed: {},
  mounted() {},
  watch: {}
};
</script>
<style scoped>
@import '../../../../static/css/public.css';
</style>
