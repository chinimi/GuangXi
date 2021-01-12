<template>
  <div id="modelParameter">
    <ul class="clear-fix title">
      <li
        v-for="(item, index) in menu"
        :key="index"
        :class="[
          'Class',
          { active: isActive == item.value ? true : false }
        ]"
        @click="
          isActive = item.value;
          currentComp = item.comp;
        "
      >
        <i :class="['iconfont', item.icon]"></i>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <!--切换组件-->
    <div>
      <!--組件跳轉-->
      <div v-show="currentComp == 'hydrology'">
        <hydrology></hydrology>
      </div>

      <div v-show="currentComp == 'hydrodynamicForce'">
        <hydrodynamicForce></hydrodynamicForce>
      </div>
      <div v-show="currentComp == 'convectiveDiffusion'">
        <convectiveDiffusion></convectiveDiffusion>
      </div>
      <div v-show="currentComp == 'zoology'">
        <zoology></zoology>
      </div>
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
      currentComp: "hydrology",
      isActive: "hydrology",
      menu: [
        {
          name: "水文",
          value: "hydrology",
          comp: "hydrology"
        },
        {
          name: "水动力",
          value: "hydrodynamicForce",
          comp: "hydrodynamicForce"
        },
        {
          name: "对流扩散",
          value: "convectiveDiffusion",
          comp: "convectiveDiffusion"
        },
        {
          name: "生态",
          value: "zoology",
          comp: "zoology"
        }
      ]
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {}
};
</script>
<style>
#modelParameter {
  position: relative;
  z-index: 9;
}
#modelParameter .title{
  position: absolute;
  /* left: -19%; */
  /* width: 620px;
     height: 350px; */

}
#modelParameter .Class {
    cursor: pointer;
    color: #fff;
    list-style: none;
    font-size: 14px;
    text-align: center;
    width: 95px;
    margin-right: 10px;
    padding: 7px 0;
    background: rgba(5, 160, 236, 0.58);
        margin-top: 20px;
    border-radius: 50px;
}
#modelParameter .active {
    color: #fff!important;
    background: #01ddff!important;
    /* border-left: 4px solid #0718fa; */
}

</style>
