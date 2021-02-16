<template>
<!--模型参数主页面-->
  <div class="modelParameter clear-fix">
      <div class="modelParameter_left">
        <ul class="clear-fix modelParameter_left_ul">
          <li :class="[TapType == '1' ? 'actve' : '']" @click="TapSwitch(1)">水动力</li>
          <li :class="[TapType == '2' ? 'actve' : '']" @click="TapSwitch(2)">对流扩散</li>
          <li :class="[TapType == '3' ? 'actve' : '']" @click="TapSwitch(3)">生态</li>
        </ul>
      </div>
      <div class="modelParameter_right" v-show="TapType == '1'">
          <hydrodynamicForce></hydrodynamicForce>
      </div>
      <div class="modelParameter_right" v-show="TapType == '2'">
          <convectiveDiffusion></convectiveDiffusion>
      </div>
      <div class="modelParameter_right" v-show="TapType == '3'">
          <zoology></zoology>
      </div>
    </div>
</template>
<script>
import hydrodynamicForce from "./hydrodynamicForce.vue";
import convectiveDiffusion from "./convectiveDiffusion.vue";
import zoology from "./zoology.vue";

export default {
  components: {
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
