<template>
<!--模型参数主页面-->
    <div class="modelParameter clear-fix">
      <div class="modelParameter_left">
        <ul class="clear-fix modelParameter_left_ul">
          <li :class="[TapType == '1' ? 'actve' : '']" @click="TapSwitch(1)">水文</li>
          <li :class="[TapType == '2' ? 'actve' : '']" @click="TapSwitch(2)">水动力</li>
          <li :class="[TapType == '3' ? 'actve' : '']" @click="TapSwitch(3)">对流扩散</li>
          <li :class="[TapType == '4' ? 'actve' : '']" @click="TapSwitch(4)">生态</li>
        </ul>
      </div>
      <div class="modelParameter_right" v-if="TapType == '1'">
          <hydrology></hydrology>
      </div>
      <div class="modelParameter_right" v-if="TapType == '2'">
          <hydrodynamicForce></hydrodynamicForce>
      </div>
      <div class="modelParameter_right" v-if="TapType == '3'">
          <convectiveDiffusion></convectiveDiffusion>
      </div>
      <div class="modelParameter_right" v-if="TapType == '4'">
          <zoology></zoology>
      </div>
    </div>
</template>
<script>
import hydrology from "./hydrology.vue";
import hydrodynamicForce from "./hydrodynamicForce.vue";
import convectiveDiffusion from "./convectiveDiffusion.vue";
import zoology from "./zoology.vue";

export default {
  components: {
    hydrology,
    hydrodynamicForce,
    convectiveDiffusion,
    zoology
  },
  data() {
    return {
      TapType:1,
    };
  },
  methods: {
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
