<template>
  <div class="index clear-fix">
    <div class="remoteSensingModel_left">
      <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText"
        class="filterText_input">
      </el-input>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2,3]"
        :default-checked-keys="[9]"
        :props="defaultProps">
      </el-tree>
    </div>
    <div class="remoteSensingModel_right">
      内容
    </div>
  </div>
</template>
<script>


  export default {
    components:{

    },
    data() {
      return {
         data: [{
          id: 1,
          label: '河湖水系岸线时空演变',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '卫星水质污染遥感定格',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '流域水污染公里网格',
          children: [{
            id: 7,
            label: '总氮'
          }, {
            id: 8,
            label: '总磷'
          },{
            id: 9,
            label: '化学需氧量'
          },{
            id: 10,
            label: '五日生化需氧量'
          },{
            id: 11,
            label: '溶解氧'
          },
          ]
        }],
         defaultProps: {
          children: 'children',
          label: 'label'
        }
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
.index{
    position: fixed;
    width: 100%;
    height: calc(100% - 80px);
    top: 80px;
    left: 0%;
    /* background: #031823; */
    color: #000;
}
.remoteSensingModel_left{
  position: relative;
  float: left;
  width: 20%;
  padding: 10px 20px;
  box-sizing: border-box;
  height: 100%;
  background: rgba(21, 37, 63, 0.86);
}
.filterText_input{
  color: #058cd0;
    /* border: 1px solid #058cd0; */
    border-radius: 5px;
        color: #058cd0;
    border: 1px solid #058cd0;
}
.remoteSensingModel_left /deep/ .filterText_input .el-input__inner{
   background-color: #031823!important;
}
.el-input__inner{
  background-color: #031823!important ;
}
.filterText{
  position: relative;
  text-align: center;
  height: 40px;
  line-height: 40px;
  padding: 5px 0;
}
.filterText div{
  width: 120px;
  height: 100%;
  background: #6184b5;
  border: 0;
  margin: 0 auto;
  border-radius: 5px;
}

.el-tree {
    position: relative;
    cursor: default;
      background: rgba(21, 37, 63, 0.86);
    color: #ffffff;
    height: calc(100% - 92px);
    border: 1px solid #000;
    border-radius: 5px;
}
.remoteSensingModel_right{
    position: relative;
  float: left;
  width: 80%;
  padding: 10px 20px;
  box-sizing: border-box;
  color: #FFF;
}
/* .el-tree-node__content:hover {
    background-color: transparent !important;

} */
</style>
<style>
.index .el-tree-node__content:hover {
    background-color: transparent !important;

}
</style>
