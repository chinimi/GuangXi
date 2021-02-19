<template>
  <div  class="measureRange">
    <el-checkbox-group v-model="checkedLayer">
      <div class='LayerItem' v-for="item of layerList" :key="item.value">
        <el-checkbox  :label="item.value"  >{{item.label}}</el-checkbox>
      </div>
    </el-checkbox-group>






  </div>
</template>
<script>



  export default {
    data() {
      return {
        checkedLayer:[],
        layerList:[{label:'测量距离',value:'waterStation'},{label:'测量面积',value:'2'},{label:'清除',value:'3'}]
      }
    },
    methods: {

    },
    computed: {


    },
    mounted(){

      },
    watch: {

    }

  }
</script>
<style scoped="scoped">
.measureRange{
  width: 93px;
  position: absolute;
  top: 60px;
  right: 92px;
  z-index: 9;
  background: #fff;
  min-height: 50px;
  /* border: solid 1px #c8d2df; */
  border-radius: 5px;
  padding: 15px;

}

</style>
