<template>
  <!--模板管理主页面-->
  <div class="oneDimensionalModel">
    <div class="Model" v-if="slideDown">
      <ul class="clear-fix Model_ul">
        <li :class="[TapType == '1' ? 'csourer' : '']" @click="TapSwitch(1)">
          模板管理
        </li>
        <li>
          <div class="butt_close" @click="header(1)">
            <img src="../../../../static/images/close.png" alt="" />
          </div>
        </li>
      </ul>
      <div v-show="TapType == '1'" class="Model_text">
        <div class="programmePreparation">
          <ul class="clear-fix programmePreparation_ul">
            <li :class="[Type == '1' ? 'csour' : '']" @click="TapTypes(1)">
              行政分区
            </li>
            <li :class="[Type == '2' ? 'csour' : '']" @click="TapTypes(2)">
              流域分区
            </li>
            <li :class="[Type == '3' ? 'csour' : '']" @click="TapTypes(3)">
              水资源分区
            </li>
          </ul>
          <div class="programmePreparation_text" v-show="Type == '1'">
            <administrativeDivisions></administrativeDivisions>
          </div>
          <div class="programmePreparation_text" v-show="Type == '2'">
            <watershedPartition></watershedPartition>
          </div>
          <div class="programmePreparation_text" v-show="Type == '3'">
            <waterResourcesZoning></waterResourcesZoning>
          </div>
        </div>
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
import administrativeDivisions from "./administrativeDivisions.vue";
import watershedPartition from "./watershedPartition.vue";
import waterResourcesZoning from "./waterResourcesZoning.vue";
export default {
  components: {
    administrativeDivisions,
    watershedPartition,
    waterResourcesZoning
  },
  data() {
    return {
      TapType: 1,
      Type: 1,
      slideDown: true
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
    TapSwitch(id) {
      this.TapType = id;
    },
    TapTypes(id) {
      this.Type = id;
    }
  },
  computed: {},
  mounted() {},
  watch: {}
};
</script>
<style scoped>
@import "../../../../static/css/public.css";
</style>
