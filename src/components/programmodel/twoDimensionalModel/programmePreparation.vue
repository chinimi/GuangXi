<template>
  <!--方案编制主页面-->
  <div class="programmePreparation">
    <ul class="clear-fix programmePreparation_ul">
      <li :class="[TapType == '1' ? 'csour' : '']" @click="TapSwitch(1)">
        基本设置
      </li>
      <li :class="[TapType == '2' ? 'csour' : '']" @click="TapSwitch(2)">
        模型参数
      </li>
      <li :class="[TapType == '3' ? 'csour' : '']" @click="TapSwitch(3)">
        边界条件
      </li>
    </ul>
    <div class="programmePreparation_text" v-show="TapType == '1'">
      <basicSetup></basicSetup>
    </div>
    <div class="programmePreparation_text" v-show="TapType == '2'">
      <modelParameter></modelParameter>
    </div>
    <div class="programmePreparation_text" v-show="TapType == '3'">
      <boundaryConditions></boundaryConditions>
    </div>
  </div>
</template>
<script>
import basicSetup from "./basicSetup.vue";
import modelParameter from "./modelParameter.vue";
import boundaryConditions from "./boundaryConditions.vue";

export default {
  components: {
    basicSetup,
    modelParameter,
    boundaryConditions
  },
  data() {
    return {
      TapType: 1
    };
  },
  methods: {
    TapSwitch(id) {
      this.TapType = id;
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