<template>
  <div id="infoSystem">
    <div class="sidebar clear-fix">
      <div class="tree_form">
        <div class="stair">
          <ul class="clear-fix stair_ui">
            <li :class="[Type == '1' ? 'cur' : '']" @click=" Switch(1);contraction(statse);">
              <!-- <i class="iconfont icon-menu"></i> -->
              <img src="/static/images/icon/xinxi.png" alt="">
              信息汇总
            </li>
            <div class="list" v-if="statse">
              <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="filterText"
              >
              </el-input>
              <ul class="clear-fix tree_form_ui">
                <li :class="[TapType == '1' ? 'curer' : '']" @click="TapSwitch(1)">行政区</li>
                <li :class="[TapType == '2' ? 'curer' : '']" @click="TapSwitch(2)">流域</li>
                <li :class="[TapType == '3' ? 'curer' : '']" @click="TapSwitch(3)">河长制</li>
              </ul>
              <!--行政区-->
              <div class="filter" v-if="TapType == '1'">
                <el-tree
                  class="filter-tree"
                  :data="data1"
                  accordion
                  :props="defaultProps"
                  :filter-node-method="filterNode"
                  @node-click="handleNodeClick"
                  ref="tree">
                </el-tree>
              </div>
              <!--流域-->
              <div class="filter" v-if="TapType == '2'">
                <el-tree
                  class="filter-tree"
                  :data="data2"
                  accordion
                  :props="defaultProps"
                  :filter-node-method="filterNode"
                  @node-click="handleNodeClick"
                  ref="tree">
                </el-tree>
              </div>
              <!--河长制-->
              <div class="filter" v-if="TapType == '3'">
                <el-tree
                  class="filter-tree"
                  :data="data3"
                  accordion
                  node-key="id"
                  :props="defaultProps"
                  :filter-node-method="filterNode"
                  @node-click="handleNodeClick"
                  @node-contextmenu='rihgtClick'
                  ref="tree">
                </el-tree>
              </div>
            </div>
            <li :class="[Type == '2' ? 'cur' : '']" @click="Switch(2)">
              <!-- <i class="iconfont icon-shuidi2"></i> -->
              <img src="/static/images/icon/chaxun.png" alt="">
              信息查询
            </li>
            <li :class="[Type == '3' ? 'cur' : '']" @click="Switch(3)">
              <img src="/static/images/icon/shuizhi.png" alt="">
              水质报告
            </li>
            <li :class="[Type == '4' ? 'cur' : '']" @click="Switch(4)">
              <img src="/static/images/icon/quanxian.png" alt="">
              权限管理
            </li>
          </ul>
        </div>
      </div>
      <!-- 信息汇总 -->
      <div class="DataPage" v-if="Type == 1">
          <!-- 行政区 -->
        <div v-if="TapType == '1' &&  nonelist" class="orientation">
          <administrative></administrative>
        </div>
        <!-- 流域 -->
        <div v-if="TapType == '2' && nonelist" class="orientation">
          <drainageBasin></drainageBasin>
        </div>
        <!-- 河长治 -->
        <div v-if="TapType == '3' && nonelist" class="orientation">
          <!-- @getChidC="getChid"-->
          <riverChiefSystem :valueRiver="currentRiverId" ></riverChiefSystem>
<!--          <router-view></router-view>-->
        </div>
      </div>
      <!-- 信息查询 -->
      <div class="DataPage" v-if="Type == 2">
        <informationLnquiry></informationLnquiry>
      </div>
      <!-- 水质报告 -->
      <div class="DataPage" v-if="Type == 3">
        <waterQualityReport></waterQualityReport>
      </div>
    </div>



    <!--鼠标右键点击出现页面-->
    <div v-show="menuVisible">
      <el-menu
        id = "rightClickMenu"
        class="el-menu-vertical"
        @select="handleRightSelect"
        active-text-color="#333"
        text-color="#333">
        <el-menu-item index="1" class="menuItem"  v-if="addVisible">
          <span slot="title">添加</span>
        </el-menu-item>
<!--        <el-menu-item index="2" class="menuItem">-->
<!--          <span slot="title">修改分类</span>-->
<!--        </el-menu-item>-->
        <el-menu-item index="3" class="menuItem"   v-if="delVisible">
          <span slot="title">删除</span>
        </el-menu-item>
<!--        <hr style="color: #333">-->
<!--        <el-menu-item index="4" class="menuItem">-->
<!--          <span slot="title">添加标签</span>-->
<!--        </el-menu-item>-->
      </el-menu>
    </div>

   </div>
</template>

<script>
import administrative from '../infosys/administrative.vue'//信息汇总行政区
import drainageBasin from '../infosys/drainageBasin.vue'//信息汇总流域
import riverChiefSystem from '../infosys/riverChiefSystem.vue'//信息汇总河长制
import informationLnquiry from '../infosys/informationLnquiry.vue'//信息报告
import waterQualityReport from '../infosys/waterQualityReport.vue'//水质报告
export default {
  name: "infoSystem",
  props: {},
  components: {
    administrative,//信息汇总行政区
    drainageBasin,//信息汇总流域
    riverChiefSystem,//信息汇总河长制
    informationLnquiry,//信息报告
    waterQualityReport,//水质报告
  },
  data() {
    return {
      //右键功能
      objectID:null,
      menuVisible:false,//右键弹窗显示
      DATA:null,
      NODE:null,
      addVisible:false,
      delVisible:false,
      non_maxexpandId:"",
      maxexpandId:0,
      currentRiverId:'',//河段公示牌id
      filterText: "",
      Type: "1",
      statse: false,
      TapType:'1',
      nonelist:false,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data1: [{
          id: 1,
          label: '省级行政区',
          children: [{
            id: 4,
            label: '广西壮族自治区',
          }]
        }, {
          id: 2,
          label: '市级行政区',
          children: [{
            id: 5,
            label: '南宁市'
          }, {
            id: 6,
            label: '桂林市'
          }, {
            id: 7,
            label: '柳州市'
          }, {
            id: 8,
            label: '梧州市'
          }, {
            id: 9,
            label: '北海市'
          }, {
            id: 10,
            label: '防城港市'
          }]
        }, {
          id: 3,
          label: '重点关注地区',
          children: [{
            id: 11,
            label: '南宁市'
          }, {
            id: 12,
            label: '桂林市'
          }]
      }],
      data2: [{
          id: 1,
          label: '省级河道',
          children: [{
            id: 4,
            label: '红水河',
          },{
            id: 5,
            label: '柳江',
          },{
            id: 6,
            label: '桂江',
          }]
        }, {
          id: 2,
          label: '市级河道',
          children: [{
            id: 7,
            label: '琵江'
          }, {
            id: 8,
            label: '马巢河'
          }, {
            id: 9,
            label: '柳州市'
          }, {
            id: 10,
            label: '凤凰江'
          }, {
            id: 11,
            label: '良凤江'
          }, {
            id: 12,
            label: '良庆河'
          }]
        }, {
          id: 3,
          label: '重点关注地区',
          children: [{
            id: 13,
            label: '左江'
          }, {
            id: 14,
            label: '右江'
          }]
      }],
      data3: [{
          id: 1,
          label: '省级河长制公示牌',
          children: [{
            id: 4,
            label: '公示牌GX0001',
          },{
            id: 5,
            label: '公示牌GX0002',
          },{
            id: 6,
            label: '公示牌GX0003',
          }]
        }, {
          id: 2,
          label: '市级河长制公示牌',
          children: [{
            id: 7,
            label: '公示牌GX0004'
          }, {
            id: 8,
            label: '公示牌GX0005'
          }, {
            id: 9,
            label: '公示牌GX0006'
          }, {
            id: 10,
            label: '公示牌GX0007'
          }, {
            id: 11,
            label: '公示牌GX0008'
          }, {
            id: 12,
            label: '公示牌GX0009'
          }]
        }, {
          id: 3,
          label: '重点关注公示牌',
          children: [{
            id: 13,
            label: '公示牌GX00010'
          }, {
            id: 14,
            label: '公示牌GX00011'
          }]
      }],
      label:null,
    };
  },
  methods: {
    handleRightSelect(key) {

      if (key == 1) {
        this.NodeAdd(this.NODE, this.DATA);

      }

      if(key == 3){
        this.NodeDel(this.NODE, this.DATA);


      }
     /* if (key == 1) {
        this.NodeAdd(this.NODE, this.DATA);
        this.menuVisible2 = false;
      } else if (key == 2) {
        this.NodeEdit(this.NODE, this.DATA);
        this.menuVisible2 = false;
      } else if (key == 3) {
        this.NodeDel(this.NODE, this.DATA);
        this.menuVisible2 = false;
      } else if(key == 4){
        console.log('4')
      }*/
    },
    // NodeBlur(n, d){//输入框失焦
    //   console.log(n, d)
    //   if(n.isEdit){
    //     this.$set(n, 'isEdit', false)
    //   }
    //   this.$nextTick(() => {
    //     this.$refs['slotTreeInput'+d.id].$refs.input.focus()
    //   })
    // },
    NodeEdit(n, d){//编辑节点
      console.log(n, d)
      if(!n.isEdit){//检测isEdit是否存在or是否为false
        this.$set(n, 'isEdit', true)
      }
    },
    NodeDel(n, d){//删除节点
      console.log(n)
      console.log(d)
      console.log(n, d)
      /*删除重点关注节点*/

      for(var i=0;i<this.data3.length;i++){
        console.log(this.data3[i].id)
        if(this.data3[i].id=='focus'){
          console.log(this.data3[i].children)
          console.log(d)

          let _list = this.data3[i].children
          let _index = _list.map((c) => c.id).indexOf(d.id);
          console.log(_index)
          _list.splice(_index, 1);
        }



      }



     // /* let that = this;
     //  if(d.children && d.children.length !== 0){
     //    this.$message.error("此节点有子级，不可删除！")
     //    return false;
     //  }else{
     //    //新增节点可直接删除，已存在的节点要二次确认
     //    //删除操作
     //    let DelFun = () => {
     //      let _list = n.parent.data.children || n.parent.data;//节点同级数据
     //      let _index = _list.map((c) => c.id).indexOf(d.id);
     //      console.log(_index)
     //      _list.splice(_index, 1);
     //      this.$message.success("删除成功！")
     //    }
     //    //二次确认
     //    let ConfirmFun = () => {
     //      this.$confirm("是否删除此节点？","提示",{
     //        confirmButtonText: "确认",
     //        cancelButtonText: "取消",
     //        type: "warning"
     //      }).then(() => {
     //        DelFun()
     //      }).catch(() => {})
     //    }
     //    //判断是否是新增节点
     //    d.id > this.non_maxexpandId ? DelFun() : ConfirmFun()*/
     //  }
    },
    NodeAdd(n, node){//新增节点
      console.log(node)
      console.log(n, node)
      console.log(n.level)

      console.log(this.data3)
      let addObj={}
      let index=1

      for(var i=0;i<this.data3.length;i++){
        console.log(this.data3[i].id)
        if(this.data3[i].id=='focus'){
          // let id="focus_"+index++
          // addObj.id="focus_"+index++
          addObj.id=node.id
          addObj.label=node.label
          addObj.type="focustype"
          this.data3[i].children.push(addObj)

        }

      }
      //同时展开节点
      if(!n.expanded){
        n.expanded = true
      }
      //判断层级
   /*   if(n.level >= 3){
        this.$message.error("最多只支持三级！")
        return false;
      }
      //新增数据
      d.children.push({
        id: ++this.maxexpandId,
        name: '新增节点',
        pid: d.id,
        children: []
      })
      //同时展开节点
      if(!n.expanded){
        n.expanded = true
      }*/
    },

     /*右键选择*/
    rihgtClick(event, object, value, element) {
      console.log(object)




      // if (this.objectID !== object.id) {
        this.objectID = object.id;
        this.DATA = object;
        this.NODE = value;


        if(object.id=='province'||object.id=='city'||object.id=='focus'){
          this.menuVisible = false;//什么时候显示右键弹窗


        }else{
          // this.menuVisible = true;//什么时候显示右键弹窗

          if(object.type=='provincetype'||object.type=='citytype'){
            this.menuVisible = true;//什么时候显示右键弹窗
            this.addVisible = true;
            this.delVisible = false;
          }
          if(object.type=='focustype'){
            this.menuVisible = true;//什么时候显示右键弹窗
            this.addVisible = false;
            this.delVisible = true;
          }

        }

      // }
      // else {
        // this.menuVisible = !this.menuVisible;
        // this.menuVisible = false;
      // }
      document.addEventListener('click',(e)=>{
        this.menuVisible = false;
      })
      let menu = document.querySelector("#rightClickMenu");
      /* 菜单定位基于鼠标点击位置 */
      menu.style.left = event.clientX + 20 + "px";
      menu.style.top = event.clientY - 30 + "px";
      menu.style.position = "absolute"; // 为新创建的DIV指定绝对定位
      menu.style.width = 160 + "px";
      menu.style.borderRadius = 5 + "px";
      menu.style.border = 'solid 1px #c0c0c0'
      /*console.log("右键被点击的左侧:",menu.style.left);
        console.log("右键被点击的顶部:",menu.style.top);*/
      //        console.log("右键被点击的event:",event);
      // console.log("右键被点击的object:", object);
      // console.log("右键被点击的value:", value);
      // console.log("右键被点击的element:", element);
    },

    //  赋值状态
    Switch(id) {
      this.Type = id;
    },
    // 一级展开收缩
    contraction(id) {
      if (id == true) {
        this.statse = false;
      } else if (id == false) {
        this.statse = true;
      }
    },
    TapSwitch(id){
      this.TapType = id
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // 获取属性图
    handleNodeClick(data) {

      console.log("获取当前选中节点")
      console.log(data)
      this.currentRiverId=data.id
      // if(this.TapType==3){
      //   this.$router.push({name:'riverChiefSystem',params:{adCode:data.id}});
      // }

      if(data.children == undefined){
        this.nonelist = true
      }else{
        this.nonelist = false
      }
    }
  },
  mounted() {

    /*tab1 省 */
     let provinceParam={
       "adCode":"000000000000"
      }
      let districtUrl='http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/gm/district'
      this.$http.post(districtUrl, JSON.stringify(provinceParam), {
      emulateJSON: true,
    }).then(function(res) {
      console.log("省数据")
      console.log(res)

    }).catch(function(res){

    })

    /*市*/
     let cityParam={
        "adCode":"450000000000",//
      }

    let cityUrl='http://rsapp.nsmc.org.cn/waterquality_server/waterquality_server/gm/district'
    // let provinceUrl='http://222.216.6.169:8888/api/info/ad/get'
    this.$http.post(cityUrl, JSON.stringify(cityParam), {
      emulateJSON: true,
    }).then(function(res) {
      console.log("市级行政区")
      console.log(res.body.data.district)

     let  data=res.body.data.district
      console.log(data)
      let treeData=[]

      /*省*/
      let provinceObj={}
      provinceObj.id="province"
      provinceObj.type="province"
      provinceObj.label="省级河长制公示牌"
      provinceObj.children=[
        {
          id:'450000000000',
          label:'广西壮族自治区',
          type:'provincetype'

        }

      ]
      /*adCode: "450000000000"
      adGrad: "自治区级"
      adName: "广西壮族自治区"
      preaddvcd: "000000000000"*/


      let obj={}
      obj.id="city"
      obj.label="市级河长制公示牌"
      obj.type="city"
      obj.children=[]
      /*重点关注*/
      let  focusObj={}
      focusObj.id="focus"
      focusObj.label="重点关注"
      focusObj.children=[]
      focusObj.type='focus'

      for(var i=0;i<data.length;i++){
        console.log(data[i])
        let cityObj={}
        cityObj.id=data[i].adCode
        cityObj.label=data[i].adName
        cityObj.type="citytype"

        obj.children.push(cityObj)
      }

      treeData.push(provinceObj)
      treeData.push(obj)
      treeData.push(focusObj)
      this.data3=treeData

    }).catch(function(res){

    })

  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
    // TapType(Tap){
    //   console.log(Tap)
    //  /*路由跳转传参数*/
    //   if(Tap=='3'){
    //
    //      this.$router.push({name:'riverChiefSystem',params:{adCode: currentRiverId}});
    //     }
    //   }

  },
  computed: {},
  filters: {}
};
</script>
<style scoped>
@import '../../../static/css/public.css';
</style>>
