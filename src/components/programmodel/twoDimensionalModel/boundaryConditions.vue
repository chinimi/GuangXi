<template>
<!--边界条件主组件-->
  <div
    id="boundaryConditions"
    style="position: relative"
    class="boundaryConditions"
  >
    <div class="boundaryConditions_top clear-fix">
      <div class="data_left">
        <div v-for="(item, index) in data" :key="index">
          <div class="data_info" @click="tap(item, index)">
            <span>{{ item.name }}</span>
            <img
              :src="
                item.info == true
                  ? '../../../../static/images/top.png'
                  : '../../../../static/images/bottom.png'
              "
              alt=""
            />
          </div>
          <ul
            class="list"
            :style="item.info == true ? 'display: block;' : 'display: none;'"
          >
            <li
              class="info"
              v-for="(item, index) in item.data_name"
              :key="index"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="data_right clear-fix">
        <div class="table">
          <table>
            <tr>
              <td>时间</td>
              <td>流量（m³/s）</td>
            </tr>
            <tr>
              <td>2020-1-1 8:00</td>
              <td></td>
            </tr>
            <tr>
              <td>2020-1-1 8:00</td>
              <td></td>
            </tr>
            <tr>
              <td>2020-1-1 8:00</td>
              <td></td>
            </tr>
            <tr>
              <td>2020-1-1 8:00</td>
              <td></td>
            </tr>
          </table>
          <button class="table_name">上传</button>
        </div>
        <div class="echarts">曲线图</div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="boundaryConditions_bottom">
      <button>保存</button>
      <button>计算</button>
      <button>查看结果</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      data: [
        {
          name: "流量边界",
          info: false,
          data_name: [{ name: "田东" }, { name: "影著" }],
        },
        {
          name: "流量边界",
          info: false,
          data_name: [{ name: "隆安" }],
        },
        {
          name: "水质边界",
          info: false,
          data_name: [{ name: "田东" }, { name: "英竹" }, { name: "隆安" }],
        },
        {
          name: "降雨站",
          info: false,
          data_name: [{ name: "站点1" }, { name: "站点2" }, { name: "站点3" }],
        },
      ],
    };
  },
  methods: {
    tap(item, index) {
      if (item.info == false) {
        this.data[index].info = true;
      } else if (item.info == true) {
        this.data[index].info = false;
      }
    },
  },
  computed: {},
  mounted() {},
  watch: {},
};
</script>
<style scoped="scoped">
.boundaryConditions {
  position: relative;
  width: 100%;
  height: 100%;
  color: #01bdf5 ;
}
.boundaryConditions_top {
  position: relative;
  width: 100%;
  height: 480px;
  padding: 0 40px;
  box-sizing: border-box;
}
.boundaryConditions_bottom {
  position: relative;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  text-align: right;
  right: 10px;
  top: 10px;
}
.data_left {
  position: relative;
  width: calc(20% - 2px);
  float: left;
  border: 1px solid #ffffff;
  height: calc(100% - 2px);
  overflow: auto;
}
.data_right {
  position: relative;
  width: 80%;
  float: left;
  /* background: #6c7874; */
  height: 100%;
}
.data_info {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.data_info img {
  width: 15px;
  height: 10px;
  position: relative;
  top: 15px;
  float: right;
  right: 10px;
}
.list {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
}
.info {
  height: 40px;
  line-height: 40px;
  color: #01bdf5 ;
}
.info > ul {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0;
  display: block;
}
.table {
  position: relative;
  width: 40%;
  height: 100%;
  float: left;
}
.echarts {
    position: relative;
    width: 59%;
    height: 100%;
    float: left;
    border: 1px solid #fff;
}

.table {
  height: calc(100% - 10px);
  width: calc(40% - 10px);
  position: relative;
  margin: 5px;
  box-sizing: border-box;
  text-align: center;
}
table,
th,
td {
  width: 100%;
  position: relative;
  border-collapse: collapse;
  border: 1px solid #fff;
  height: 90%;
}
th,
td {
  height: 30px;
}
.table_name {
  position: relative;
  width: 100%;
  height: 10%;
  float: right;
  /* bottom: 0; */
  top:10px;
  /* right: 30px; */
}
button{
  width: 120px!important;
  height: 40px!important;
}
</style>
