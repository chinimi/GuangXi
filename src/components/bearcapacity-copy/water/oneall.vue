<template>
  <!--一维-->
  <div class="oneall">
    <ul class="clear-fix oneall_ul">
       <li :class="[TapType == '1' ? 'csour' : '']" @click="TapSwitch(1)">一维解析法</li>
       <li :class="[TapType == '2' ? 'csour' : '']" @click="TapSwitch(2)">一维数值法</li>

    </ul>
    <div class="oneall_text" v-show="TapType == '1'">
      <onedimension></onedimension>
    </div>
    <div class="oneall_text" v-show="TapType == '2'">
      <onedimensionMIKE></onedimensionMIKE>
    </div>

  </div>
</template>
<script>
import onedimension from "./one_dimension";
import onedimensionMIKE from "./one_dimensionMIKE";
export default {
  components: {
    onedimension,
    onedimensionMIKE,
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
