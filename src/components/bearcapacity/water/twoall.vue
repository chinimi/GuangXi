<template>
  <!--一维-->
  <div class="twoall">
    <ul class="clear-fix twoall_ul">
       <li :class="[TapType == '1' ? 'csour' : '']" @click="TapSwitch(1)">二维解析法</li>
       <li :class="[TapType == '2' ? 'csour' : '']" @click="TapSwitch(2)">二维数值法</li>

    </ul>
    <div class="twoall_text" v-show="TapType == '1'">
      <twodimension></twodimension>
    </div>
    <div class="twoall_text" v-show="TapType == '2'">
      <twodimensionMIKE></twodimensionMIKE>
    </div>

  </div>
</template>
<script>
import twodimension from "./two_dimension";
import twodimensionMIKE from "./two_dimensionMIKE";
export default {
  components: {
    twodimension,
    twodimensionMIKE,
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
