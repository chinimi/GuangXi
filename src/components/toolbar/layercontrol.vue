<template>
  <div  id="layercontrol">
    <el-checkbox-group v-model="checkedLayer">
      <div class='LayerItem' v-for="item of layerList" :key="item.value">
        <el-checkbox  :label="item.value"  >{{item.label}}</el-checkbox>
      </div>
    </el-checkbox-group>



    <vectorLayer v-for="product of showVectorLayers"
                 :key="product.name"
                 :name='product.name'
                  >

    </vectorLayer>


  </div>
</template>
<script>

  import vectorLayer from "../toolbar/layer/vectorLayer"

  export default {
    components:{
      vectorLayer

    },
    data() {
      return {
        positionLayer:null,
        waterStationData:[],
        checkedLayer:[],//选中的checkbox
        showVectorLayers:[],//要创建并显示的图层
        layerList:[{label:'影像图',value:'waterStation'},{label:'街道图',value:'2'},{label:'地名标注',value:'3'}]
      }
    },
    methods: {

    },
    computed: {


    },
    mounted(){
      this.waterStationData= {
        "type": "FeatureCollection",
        "name": "WaterQualityKeySection",
        "features": [
          {
            "type": "Feature",
            "id": 0,
            "properties": {
              "SecName": "八达水文站",
              "SecCode": "80786140",
              "Long": 105.088889,
              "SecAddress": "广西百色市西林县八达镇火亮山路001号八达水文站",
              "Lat": 24.491389
            },
            "geometry": {"type": "Point", "coordinates": [105.088888888888889, 24.491388888888888]}
          },
          {
            "type": "Feature",
            "id": 1,
            "properties": {
              "SecName": "百法",
              "SecCode": "80786200",
              "Long": 106.535,
              "SecAddress": "广西百色市右江区那毕乡百法渡口",
              "Lat": 23.896389
            },
            "geometry": {"type": "Point", "coordinates": [106.535, 23.89638888888889]}
          },
          {
            "type": "Feature",
            "id": 2,
            "properties": {
              "SecName": "百南",
              "SecCode": "90487200",
              "Long": 105.81,
              "SecAddress": "广西百色市那坡县百南乡百南水文站",
              "Lat": 23.044722
            },
            "geometry": {"type": "Point", "coordinates": [105.81, 23.044722222222223]}
          },
          {
            "type": "Feature",
            "id": 3,
            "properties": {
              "SecName": "百色",
              "SecCode": "80786210",
              "Long": 106.621111,
              "SecAddress": "广西百色市右江区拉域村百色水文站",
              "Lat": 23.890278
            },
            "geometry": {"type": "Point", "coordinates": [106.621111111111105, 23.890277777777776]}
          },
          {
            "type": "Feature",
            "id": 4,
            "properties": {
              "SecName": "板陈",
              "SecCode": "90000000",
              "Long": 106.14,
              "SecAddress": "贵州省黔西南布依族苗族自治州望谟县蔗香乡板陈村",
              "Lat": 24.9575
            },
            "geometry": {"type": "Point", "coordinates": [106.14, 24.9575]}
          },
          {
            "type": "Feature",
            "id": 5,
            "properties": {
              "SecName": "澄碧河坝址",
              "SecCode": "80786400",
              "Long": 106.638056,
              "SecAddress": "广西百色市右江区澄碧河水库坝首",
              "Lat": 23.951667
            },
            "geometry": {"type": "Point", "coordinates": [106.638055555555567, 23.951666666666664]}
          },
          {
            "type": "Feature",
            "id": 6,
            "properties": {
              "SecName": "大罗",
              "SecCode": "80786180",
              "Long": 106.151111,
              "SecAddress": "广西百色市右江区阳圩镇大罗村，323国道、广昆高速横跨河流处",
              "Lat": 23.910833
            },
            "geometry": {"type": "Point", "coordinates": [106.151111111111121, 23.910833333333333]}
          },
          {
            "type": "Feature",
            "id": 7,
            "properties": {
              "SecName": "东坪",
              "SecCode": "80786410",
              "Long": 106.621111,
              "SecAddress": "广西百色市右江区百城街道办",
              "Lat": 23.916111
            },
            "geometry": {"type": "Point", "coordinates": [106.621111111111105, 23.91611111111111]}
          },
          {
            "type": "Feature",
            "id": 8,
            "properties": {
              "SecName": "洞巴电站",
              "SecCode": "80786285",
              "Long": 105.676944,
              "SecAddress": "广西百色市田林县田林县那比乡那腊村洞巴水电站下游500m",
              "Lat": 24.1125
            },
            "geometry": {"type": "Point", "coordinates": [105.676944444444445, 24.1125]}
          },
          {
            "type": "Feature",
            "id": 9,
            "properties": {
              "SecName": "湖润桥",
              "SecCode": "80785030",
              "Long": 106.71,
              "SecAddress": "广西百色市靖西市湖润镇弄欣屯湖润水文站",
              "Lat": 22.957222
            },
            "geometry": {"type": "Point", "coordinates": [106.71, 22.957222222222221]}
          },
          {
            "type": "Feature",
            "id": 10,
            "properties": {
              "SecName": "百色水利枢纽（华村大桥）",
              "SecCode": "80786190",
              "Long": 106.353056,
              "SecAddress": "广西百色市百色市右江区阳圩镇华村",
              "Lat": 23.953611
            },
            "geometry": {"type": "Point", "coordinates": [106.353055555555557, 23.953611111111112]}
          },
          {
            "type": "Feature",
            "id": 11,
            "properties": {
              "SecName": "靖西水文站",
              "SecCode": "80785000",
              "Long": 106.408056,
              "SecAddress": "广西百色市靖西县新靖镇五隆村狮子山",
              "Lat": 23.130833
            },
            "geometry": {"type": "Point", "coordinates": [106.408055555555563, 23.130833333333335]}
          },
          {
            "type": "Feature",
            "id": 12,
            "properties": {
              "SecName": "雷感村",
              "SecCode": "80786260",
              "Long": 107.521111,
              "SecAddress": "广西百色市平果县马头镇雷感村",
              "Lat": 23.346111
            },
            "geometry": {"type": "Point", "coordinates": [107.521111111111111, 23.34611111111111]}
          },
          {
            "type": "Feature",
            "id": 13,
            "properties": {
              "SecName": "鲁维",
              "SecCode": "80280200",
              "Long": 104.533056,
              "SecAddress": "广西百色市西林县马蚌乡鲁维村鲁维屯",
              "Lat": 24.732778
            },
            "geometry": {"type": "Point", "coordinates": [104.533055555555549, 24.732777777777777]}
          },
          {
            "type": "Feature",
            "id": 14,
            "properties": {
              "SecName": "天生桥",
              "SecCode": "80280205",
              "Long": 105.250278,
              "SecAddress": "广西百色市隆林县天生桥镇天生桥水库坝址",
              "Lat": 24.970833
            },
            "geometry": {"type": "Point", "coordinates": [105.250277777777782, 24.970833333333331]}
          },
          {
            "type": "Feature",
            "id": 15,
            "properties": {
              "SecName": "罗村口",
              "SecCode": "80786170",
              "Long": 106.131944,
              "SecAddress": "广西百色市右江区阳圩镇罗村口",
              "Lat": 23.930278
            },
            "geometry": {"type": "Point", "coordinates": [106.131944444444443, 23.930277777777778]}
          },
          {
            "type": "Feature",
            "id": 16,
            "properties": {
              "SecName": "猫街水文站",
              "SecCode": "80786110",
              "Long": 104.508056,
              "SecAddress": "广西百色市西林县古障镇者黑村猫街水文站",
              "Lat": 24.576389
            },
            "geometry": {"type": "Point", "coordinates": [104.508055555555558, 24.576388888888889]}
          },
          {
            "type": "Feature",
            "id": 17,
            "properties": {
              "SecName": "那比电站",
              "SecCode": "80786290",
              "Long": 105.786111,
              "SecAddress": "广西百色市田林县那比乡那比村那比电站下游500米",
              "Lat": 24.115278
            },
            "geometry": {"type": "Point", "coordinates": [105.786111111111111, 24.115277777777781]}
          },
          {
            "type": "Feature",
            "id": 18,
            "properties": {
              "SecName": "那侣桥",
              "SecCode": "80786530",
              "Long": 106.942756,
              "SecAddress": "广西百色市田阳县玉凤镇坤平村那侣桥",
              "Lat": 24.037268
            },
            "geometry": {"type": "Point", "coordinates": [106.942756, 24.037268]}
          },
          {
            "type": "Feature",
            "id": 19,
            "properties": {
              "SecName": "那全",
              "SecCode": "90487000",
              "Long": 105.61,
              "SecAddress": "广西百色市那坡县百都乡百都村那全屯",
              "Lat": 23.319167
            },
            "geometry": {"type": "Point", "coordinates": [105.61, 23.319166666666668]}
          },
          {
            "type": "Feature",
            "id": 20,
            "properties": {
              "SecName": "平班电站",
              "SecCode": "80281001",
              "Long": 105.47,
              "SecAddress": "广西百色市隆林县平班镇平班电站坝下",
              "Lat": 24.855833
            },
            "geometry": {"type": "Point", "coordinates": [105.47, 24.855833333333333]}
          },
          {
            "type": "Feature",
            "id": 21,
            "properties": {
              "SecName": "田东",
              "SecCode": "80786230",
              "Long": 107.136944,
              "SecAddress": "广西百色市田东县平马镇和恒村田东水位站断面",
              "Lat": 23.581111
            },
            "geometry": {"type": "Point", "coordinates": [107.136944444444453, 23.58111111111111]}
          },
          {
            "type": "Feature",
            "id": 22,
            "properties": {
              "SecName": "土黄",
              "SecCode": "87086120",
              "Long": 104.991944,
              "SecAddress": "广西百色市西林县八达镇土黄村土黄电站",
              "Lat": 24.430556
            },
            "geometry": {"type": "Point", "coordinates": [104.991944444444442, 24.430555555555557]}
          },
          {
            "type": "Feature",
            "id": 23,
            "properties": {
              "SecName": "瓦村",
              "SecCode": "80786160",
              "Long": 105.968889,
              "SecAddress": "广西百色市田林县弄瓦乡瓦村水文站",
              "Lat": 24.185278
            },
            "geometry": {"type": "Point", "coordinates": [105.968888888888884, 24.185277777777777]}
          },
          {
            "type": "Feature",
            "id": 24,
            "properties": {
              "SecName": "弄瓦",
              "SecCode": "80786162",
              "Long": 105.985,
              "SecAddress": "广西百色市田林县弄瓦乡弄瓦乡大桥",
              "Lat": 24.155278
            },
            "geometry": {"type": "Point", "coordinates": [105.985, 24.155277777777776]}
          },
          {
            "type": "Feature",
            "id": 25,
            "properties": {
              "SecName": "汪甸",
              "SecCode": "80786330",
              "Long": 106.336111,
              "SecAddress": "广西百色市右江区汪甸乡平侯村",
              "Lat": 24.184722
            },
            "geometry": {"type": "Point", "coordinates": [106.336111111111109, 24.184722222222224]}
          },
          {
            "type": "Feature",
            "id": 26,
            "properties": {
              "SecName": "岳圩",
              "SecCode": "80785010",
              "Long": 106.518056,
              "SecAddress": "广西百色市靖西县岳圩镇岳圩水文站",
              "Lat": 22.947222
            },
            "geometry": {"type": "Point", "coordinates": [106.518055555555549, 22.947222222222223]}
          },
          {
            "type": "Feature",
            "id": 27,
            "properties": {
              "SecName": "西读小学",
              "SecCode": "87084220",
              "Long": 106.57,
              "SecAddress": "广西德保县城关镇西读村上沐屯",
              "Lat": 23.334167
            },
            "geometry": {"type": "Point", "coordinates": [106.57, 23.334166666666665]}
          },
          {
            "type": "Feature",
            "id": 28,
            "properties": {
              "SecName": "龙眼",
              "SecCode": "80286301",
              "Long": 107.686389,
              "SecAddress": "广西百色平果县凤梧镇甘河村甘必屯甘河电站坝址",
              "Lat": 23.711111
            },
            "geometry": {"type": "Point", "coordinates": [107.686388888888899, 23.711111111111112]}
          },
          {
            "type": "Feature",
            "id": 29,
            "properties": {
              "SecName": "龙须河水库坝址",
              "SecCode": "80786510",
              "Long": 107.067222,
              "SecAddress": "广西百色田东县平马镇游昌村游屯",
              "Lat": 23.506111
            },
            "geometry": {"type": "Point", "coordinates": [107.067222222222213, 23.50611111111111]}
          },
          {
            "type": "Feature",
            "id": 30,
            "properties": {
              "SecName": "金钟山",
              "SecCode": "80280203",
              "Long": 104.833333,
              "SecAddress": "广西百色市隆林县金钟山乡乌冲村码头",
              "Lat": 24.676389
            },
            "geometry": {"type": "Point", "coordinates": [104.833333333333329, 24.676388888888891]}
          },
          {
            "type": "Feature",
            "id": 31,
            "properties": {
              "SecName": "者立屯",
              "SecCode": "80280955",
              "Long": 105.671667,
              "SecAddress": "广西百色市隆林县沙梨乡委敢村者立屯",
              "Lat": 24.7775
            },
            "geometry": {"type": "Point", "coordinates": [105.671666666666667, 24.7775]}
          },
          {
            "type": "Feature",
            "id": 32,
            "properties": {
              "SecName": "八洞村",
              "SecCode": "80280958",
              "Long": 106.17,
              "SecAddress": "广西百色市田林县百乐乡八洞村凤凰岛",
              "Lat": 24.759444
            },
            "geometry": {"type": "Point", "coordinates": [106.17, 24.759444444444444]}
          },
          {
            "type": "Feature",
            "id": 33,
            "properties": {
              "SecName": "定安",
              "SecCode": "80786155",
              "Long": 105.637778,
              "SecAddress": "广西田林县定安镇八新村八新电站",
              "Lat": 24.314167
            },
            "geometry": {"type": "Point", "coordinates": [105.637777777777785, 24.314166666666669]}
          },
          {
            "type": "Feature",
            "id": 34,
            "properties": {
              "SecName": "那吉大桥(那吉航运枢纽)",
              "SecCode": "80786215",
              "Long": 106.640278,
              "SecAddress": "广西百色市田阳县那吉航运枢纽下游那吉大桥下",
              "Lat": 23.792222
            },
            "geometry": {"type": "Point", "coordinates": [106.640277777777783, 23.792222222222225]}
          },
          {
            "type": "Feature",
            "id": 35,
            "properties": {
              "SecName": "治塘渡口",
              "SecCode": "80786225",
              "Long": 106.6375,
              "SecAddress": "广西百色市田阳县那满镇治塘村治塘渡口",
              "Lat": 23.893611
            },
            "geometry": {"type": "Point", "coordinates": [106.6375, 23.89361111111111]}
          },
          {
            "type": "Feature",
            "id": 36,
            "properties": {
              "SecName": "百甫",
              "SecCode": "80786245",
              "Long": 107.392222,
              "SecAddress": "广西百色市田东县思林镇东龙村百甫屯",
              "Lat": 23.453889
            },
            "geometry": {"type": "Point", "coordinates": [107.39222222222223, 23.453888888888887]}
          },
          {
            "type": "Feature",
            "id": 37,
            "properties": {
              "SecName": "福禄",
              "SecCode": "80786172",
              "Long": 106.622938,
              "SecAddress": "右江区福禄镇",
              "Lat": 23.795855
            },
            "geometry": {"type": "Point", "coordinates": [106.622938, 23.795855]}
          },
          {
            "type": "Feature",
            "id": 38,
            "properties": {
              "SecName": "英竹",
              "SecCode": "80713000",
              "Long": 107.323778,
              "SecAddress": "百色田东县思林镇英竹村",
              "Lat": 23.450556
            },
            "geometry": {"type": "Point", "coordinates": [107.323777777777778, 23.450555555555553]}
          },
          {
            "type": "Feature",
            "id": 39,
            "properties": {
              "SecName": "百东河水库",
              "SecCode": "80786430",
              "Long": 106.862222,
              "SecAddress": "百色市田阳县头塘镇",
              "Lat": 23.814722
            },
            "geometry": {"type": "Point", "coordinates": [106.862222222222215, 23.814722222222223]}
          },
          {
            "type": "Feature",
            "id": 40,
            "properties": {
              "SecName": "威后水电站",
              "SecCode": "80707300",
              "Long": 105.134722,
              "SecAddress": "广西西林县普合乡那后村",
              "Lat": 24.460833
            },
            "geometry": {"type": "Point", "coordinates": [105.134722222222223, 24.460833333333333]}
          },
          {
            "type": "Feature",
            "id": 41,
            "properties": {
              "SecName": "崇左",
              "SecCode": "80785210",
              "Long": 107.341944,
              "SecAddress": "广西崇左市江州区太平镇屹立村",
              "Lat": 22.427778
            },
            "geometry": {"type": "Point", "coordinates": [107.341944444444437, 22.427777777777781]}
          },
          {
            "type": "Feature",
            "id": 42,
            "properties": {
              "SecName": "龙州",
              "SecCode": "80785180",
              "Long": 106.843056,
              "SecAddress": "广西崇左市龙州县利民街1-1号龙州水文站",
              "Lat": 22.346389
            },
            "geometry": {"type": "Point", "coordinates": [106.843055555555551, 22.346388888888889]}
          },
          {
            "type": "Feature",
            "id": 43,
            "properties": {
              "SecName": "平而关",
              "SecCode": "80785140",
              "Long": 106.705,
              "SecAddress": "广西崇左市凭祥市友谊镇平而村",
              "Lat": 22.218333
            },
            "geometry": {"type": "Point", "coordinates": [106.705, 22.21833333333333]}
          },
          {
            "type": "Feature",
            "id": 44,
            "properties": {
              "SecName": "平良",
              "SecCode": "80786550",
              "Long": 107.501944,
              "SecAddress": "崇左市大新县福隆镇平良桥",
              "Lat": 22.863611
            },
            "geometry": {"type": "Point", "coordinates": [107.501944444444447, 22.863611111111112]}
          },
          {
            "type": "Feature",
            "id": 45,
            "properties": {
              "SecName": "上洞大村",
              "SecCode": "80785270",
              "Long": 107.851944,
              "SecAddress": "广西崇左市扶绥县新宁镇上洞大村",
              "Lat": 22.634444
            },
            "geometry": {"type": "Point", "coordinates": [107.851944444444442, 22.634444444444444]}
          },
          {
            "type": "Feature",
            "id": 46,
            "properties": {
              "SecName": "水口",
              "SecCode": "80785120",
              "Long": 106.578056,
              "SecAddress": "广西崇左市水口镇水口街",
              "Lat": 22.469167
            },
            "geometry": {"type": "Point", "coordinates": [106.578055555555551, 22.469166666666666]}
          },
          {
            "type": "Feature",
            "id": 47,
            "properties": {
              "SecName": "硕龙",
              "SecCode": "80785300",
              "Long": 106.821111,
              "SecAddress": "广西崇左市大新县硕龙镇仁屯硕龙水文站",
              "Lat": 22.8175
            },
            "geometry": {"type": "Point", "coordinates": [106.821111111111108, 22.8175]}
          },
          {
            "type": "Feature",
            "id": 48,
            "properties": {
              "SecName": "驮卢大桥",
              "SecCode": "80785240",
              "Long": 107.633889,
              "SecAddress": "广西崇左市江州区驮卢镇驮卢大桥",
              "Lat": 22.659722
            },
            "geometry": {"type": "Point", "coordinates": [107.63388888888889, 22.659722222222221]}
          },
          {
            "type": "Feature",
            "id": 49,
            "properties": {
              "SecName": "小连城",
              "SecCode": "80785130",
              "Long": 106.793056,
              "SecAddress": "广西崇左市龙州县彬桥乡小连城",
              "Lat": 22.361389
            },
            "geometry": {"type": "Point", "coordinates": [106.793055555555554, 22.361388888888889]}
          },
          {
            "type": "Feature",
            "id": 50,
            "properties": {
              "SecName": "新和",
              "SecCode": "80785320",
              "Long": 107.232222,
              "SecAddress": "广西崇左市大新县新和镇新和电站",
              "Lat": 22.529167
            },
            "geometry": {"type": "Point", "coordinates": [107.232222222222219, 22.529166666666665]}
          },
          {
            "type": "Feature",
            "id": 51,
            "properties": {
              "SecName": "宁明",
              "SecCode": "80785380",
              "Long": 107.198611,
              "SecAddress": "崇左市宁明县东安乡宁明水文站",
              "Lat": 22.119444
            },
            "geometry": {"type": "Point", "coordinates": [107.19861111111112, 22.119444444444444]}
          },
          {
            "type": "Feature",
            "id": 52,
            "properties": {
              "SecName": "那岸",
              "SecCode": "80704900",
              "Long": 106.957806,
              "SecAddress": "崇左大新县雷平镇那岸村",
              "Lat": 22.762944
            },
            "geometry": {"type": "Point", "coordinates": [106.957805555555552, 22.762944444444443]}
          },
          {
            "type": "Feature",
            "id": 53,
            "properties": {
              "SecName": "客兰水库",
              "SecCode": "91000162",
              "Long": 107.643878,
              "SecAddress": "崇左市扶绥县东罗镇客兰村左江支流客兰河",
              "Lat": 22.372731
            },
            "geometry": {"type": "Point", "coordinates": [107.643877777777789, 22.372730555555556]}
          },
          {
            "type": "Feature",
            "id": 54,
            "properties": {
              "SecName": "山秀水电站",
              "SecCode": "80785275",
              "Long": 107.786944,
              "SecAddress": "广西扶绥县上游约14公里处",
              "Lat": 22.5375
            },
            "geometry": {"type": "Point", "coordinates": [107.786944444444444, 22.5375]}
          },
          {
            "type": "Feature",
            "id": 55,
            "properties": {
              "SecName": "左江电站",
              "SecCode": "80785200",
              "Long": 107.218889,
              "SecAddress": "广西崇左市江州区太平镇盆峒村左江电站",
              "Lat": 22.357778
            },
            "geometry": {"type": "Point", "coordinates": [107.218888888888884, 22.35777777777778]}
          },
          {
            "type": "Feature",
            "id": 56,
            "properties": {
              "SecName": "大湟江口",
              "SecCode": "80683070",
              "Long": 110.206111,
              "SecAddress": "广西贵港市桂平市江口镇镇南街",
              "Lat": 23.581389
            },
            "geometry": {"type": "Point", "coordinates": [110.206111111111113, 23.581388888888888]}
          },
          {
            "type": "Feature",
            "id": 57,
            "properties": {
              "SecName": "大岭",
              "SecCode": "80781200",
              "Long": 109.546111,
              "SecAddress": "贵港市覃塘区大岭镇江兴村（大岭至思怀渡口处）",
              "Lat": 22.859444
            },
            "geometry": {"type": "Point", "coordinates": [109.546111111111102, 22.859444444444446]}
          },
          {
            "type": "Feature",
            "id": 58,
            "properties": {
              "SecName": "大藤峡坝址",
              "SecCode": "80582220",
              "Long": 110.013889,
              "SecAddress": "广西贵港市桂平市南木镇弩滩村",
              "Lat": 23.474722
            },
            "geometry": {"type": "Point", "coordinates": [110.013888888888886, 23.474722222222219]}
          },
          {
            "type": "Feature",
            "id": 59,
            "properties": {
              "SecName": "东津",
              "SecCode": "80781260",
              "Long": 109.81,
              "SecAddress": "广西贵港市港北区武乐镇武乐（-东津）渡口",
              "Lat": 23.075556
            },
            "geometry": {"type": "Point", "coordinates": [109.81, 23.075555555555557]}
          },
          {
            "type": "Feature",
            "id": 60,
            "properties": {
              "SecName": "贵港",
              "SecCode": "80781250",
              "Long": 109.608889,
              "SecAddress": "广西贵港市贵城镇东风路莲塘小区282号",
              "Lat": 23.087778
            },
            "geometry": {"type": "Point", "coordinates": [109.608888888888885, 23.087777777777777]}
          },
          {
            "type": "Feature",
            "id": 61,
            "properties": {
              "SecName": "桂平郁江口",
              "SecCode": "80781290",
              "Long": 110.093889,
              "SecAddress": "广西贵港市西山镇厢东社区码头",
              "Lat": 23.393611
            },
            "geometry": {"type": "Point", "coordinates": [110.093888888888884, 23.39361111111111]}
          },
          {
            "type": "Feature",
            "id": 62,
            "properties": {
              "SecName": "利列",
              "SecCode": "80781351",
              "Long": 110.563889,
              "SecAddress": "贵港市平南县同和镇利列村",
              "Lat": 23.771389
            },
            "geometry": {"type": "Point", "coordinates": [110.563888888888883, 23.77138888888889]}
          },
          {
            "type": "Feature",
            "id": 63,
            "properties": {
              "SecName": "泸湾江（仙衣滩水库）",
              "SecCode": "80781240",
              "Long": 109.573889,
              "SecAddress": "广西贵港市覃塘区石卡镇陆村",
              "Lat": 23.055278
            },
            "geometry": {"type": "Point", "coordinates": [109.573888888888888, 23.055277777777778]}
          },
          {
            "type": "Feature",
            "id": 64,
            "properties": {
              "SecName": "马骝滩（桂平航运枢纽）",
              "SecCode": "80781280",
              "Long": 110.083889,
              "SecAddress": "广西贵港市西山镇郁江大桥",
              "Lat": 23.365556
            },
            "geometry": {"type": "Point", "coordinates": [110.083888888888879, 23.365555555555556]}
          },
          {
            "type": "Feature",
            "id": 65,
            "properties": {
              "SecName": "黔江大桥",
              "SecCode": "80582240",
              "Long": 110.076111,
              "SecAddress": "广西贵港市桂平市西山镇城北社区黔江大桥",
              "Lat": 23.402222
            },
            "geometry": {"type": "Point", "coordinates": [110.076111111111103, 23.402222222222221]}
          },
          {
            "type": "Feature",
            "id": 66,
            "properties": {
              "SecName": "瓦塘圩",
              "SecCode": "80781210",
              "Long": 109.64,
              "SecAddress": "广西贵港市覃塘区石卡镇江南村渡口",
              "Lat": 22.928333
            },
            "geometry": {"type": "Point", "coordinates": [109.64, 22.928333333333335]}
          },
          {
            "type": "Feature",
            "id": 67,
            "properties": {
              "SecName": "乌江村",
              "SecCode": "80683080",
              "Long": 110.376944,
              "SecAddress": "广西贵港市平南县平南镇乌江社区",
              "Lat": 23.543333
            },
            "geometry": {"type": "Point", "coordinates": [110.376944444444433, 23.543333333333337]}
          },
          {
            "type": "Feature",
            "id": 68,
            "properties": {
              "SecName": "武林",
              "SecCode": "80683090",
              "Long": 110.545,
              "SecAddress": "贵港市平南县武林镇渡口",
              "Lat": 23.428889
            },
            "geometry": {"type": "Point", "coordinates": [110.545, 23.428888888888888]}
          },
          {
            "type": "Feature",
            "id": 69,
            "properties": {
              "SecName": "武思江水库坝首",
              "SecCode": "80781361",
              "Long": 109.654167,
              "SecAddress": "贵港市港南区武思江水库坝首",
              "Lat": 22.733333
            },
            "geometry": {"type": "Point", "coordinates": [109.654166666666669, 22.733333333333334]}
          },
          {
            "type": "Feature",
            "id": 70,
            "properties": {
              "SecName": "平龙水库坝首",
              "SecCode": "80781390",
              "Long": 109.407222,
              "SecAddress": "贵港市覃塘区平龙水库坝首",
              "Lat": 23.215833
            },
            "geometry": {"type": "Point", "coordinates": [109.407222222222231, 23.215833333333332]}
          },
          {
            "type": "Feature",
            "id": 71,
            "properties": {
              "SecName": "六陈水库坝首",
              "SecCode": "80781420",
              "Long": 110.342778,
              "SecAddress": "贵港市六陈水库",
              "Lat": 23.201667
            },
            "geometry": {"type": "Point", "coordinates": [110.342777777777769, 23.201666666666664]}
          },
          {
            "type": "Feature",
            "id": 72,
            "properties": {
              "SecName": "达开水库坝首",
              "SecCode": "80582233",
              "Long": 109.714167,
              "SecAddress": "贵港市达开水库",
              "Lat": 23.426389
            },
            "geometry": {"type": "Point", "coordinates": [109.714166666666671, 23.426388888888891]}
          },
          {
            "type": "Feature",
            "id": 73,
            "properties": {
              "SecName": "龙扶",
              "SecCode": "80781381",
              "Long": 109.436389,
              "SecAddress": "贵港市覃塘区山北乡轩村鲤鱼江桥",
              "Lat": 23.298056
            },
            "geometry": {"type": "Point", "coordinates": [109.436388888888899, 23.298055555555557]}
          },
          {
            "type": "Feature",
            "id": 74,
            "properties": {
              "SecName": "高山",
              "SecCode": "80781371",
              "Long": 109.619167,
              "SecAddress": "贵港市港南区木梓木梓街",
              "Lat": 22.785
            },
            "geometry": {"type": "Point", "coordinates": [109.619166666666658, 22.785]}
          },
          {
            "type": "Feature",
            "id": 75,
            "properties": {
              "SecName": "西江农场3队",
              "SecCode": "80781400",
              "Long": 109.510278,
              "SecAddress": "西江农场3队",
              "Lat": 23.068611
            },
            "geometry": {"type": "Point", "coordinates": [109.510277777777773, 23.06861111111111]}
          },
          {
            "type": "Feature",
            "id": 76,
            "properties": {
              "SecName": "大安",
              "SecCode": "80781433",
              "Long": 110.506389,
              "SecAddress": "贵港市平南县大安镇二级公路桥",
              "Lat": 23.39
            },
            "geometry": {"type": "Point", "coordinates": [110.506388888888893, 23.39]}
          },
          {
            "type": "Feature",
            "id": 77,
            "properties": {
              "SecName": "大梅头",
              "SecCode": "61283131",
              "Long": 110.783889,
              "SecAddress": "桂林市资源县梅溪乡大梅头村",
              "Lat": 26.263889
            },
            "geometry": {"type": "Point", "coordinates": [110.783888888888882, 26.263888888888889]}
          },
          {
            "type": "Feature",
            "id": 78,
            "properties": {
              "SecName": "资源水文站",
              "SecCode": "61203200",
              "Long": 110.648889,
              "SecAddress": "广西资源县资源镇滨江路",
              "Lat": 26.043889
            },
            "geometry": {"type": "Point", "coordinates": [110.648888888888891, 26.04388888888889]}
          },
          {
            "type": "Feature",
            "id": 79,
            "properties": {
              "SecName": "大面",
              "SecCode": "80882120",
              "Long": 110.323056,
              "SecAddress": "广西桂林市灵川县灵川镇大面村",
              "Lat": 25.35
            },
            "geometry": {"type": "Point", "coordinates": [110.323055555555555, 25.35]}
          },
          {
            "type": "Feature",
            "id": 80,
            "properties": {
              "SecName": "大溶江",
              "SecCode": "80882110",
              "Long": 110.44,
              "SecAddress": "广西桂林市兴安县溶江镇前进街76号大溶江水文站",
              "Lat": 25.531667
            },
            "geometry": {"type": "Point", "coordinates": [110.44, 25.531666666666666]}
          },
          {
            "type": "Feature",
            "id": 81,
            "properties": {
              "SecName": "高弄",
              "SecCode": "80582610",
              "Long": 109.976944,
              "SecAddress": "龙胜县平等乡新元村",
              "Lat": 26.184722
            },
            "geometry": {"type": "Point", "coordinates": [109.976944444444442, 26.184722222222224]}
          },
          {
            "type": "Feature",
            "id": 82,
            "properties": {
              "SecName": "恭城",
              "SecCode": "80882570",
              "Long": 110.823056,
              "SecAddress": "广西桂林市恭城县恭城镇乐湾村",
              "Lat": 24.828611
            },
            "geometry": {"type": "Point", "coordinates": [110.823055555555555, 24.828611111111112]}
          },
          {
            "type": "Feature",
            "id": 83,
            "properties": {
              "SecName": "恭城河口",
              "SecCode": "80882580",
              "Long": 107.843056,
              "SecAddress": "广西桂林市平乐县平乐镇同乐村木关汀",
              "Lat": 24.549167
            },
            "geometry": {"type": "Point", "coordinates": [107.843055555555551, 24.549166666666668]}
          },
          {
            "type": "Feature",
            "id": 84,
            "properties": {
              "SecName": "冠岩",
              "SecCode": "80882150",
              "Long": 110.443889,
              "SecAddress": "桂林市雁山区草坪乡人渡",
              "Lat": 25.037778
            },
            "geometry": {"type": "Point", "coordinates": [110.443888888888893, 25.03777777777778]}
          },
          {
            "type": "Feature",
            "id": 85,
            "properties": {
              "SecName": "桂湖迎宾桥",
              "SecCode": "80000001",
              "Long": 110.298889,
              "SecAddress": "桂林市城区",
              "Lat": 25.244444
            },
            "geometry": {"type": "Point", "coordinates": [110.298888888888882, 25.244444444444447]}
          },
          {
            "type": "Feature",
            "id": 86,
            "properties": {
              "SecName": "桂林",
              "SecCode": "82882130",
              "Long": 110.34,
              "SecAddress": "广西桂林市七星区穿山乡渡头村桂林水文站",
              "Lat": 25.219722
            },
            "geometry": {"type": "Point", "coordinates": [110.34, 25.21972222222222]}
          },
          {
            "type": "Feature",
            "id": 87,
            "properties": {
              "SecName": "崔家",
              "SecCode": "61180101",
              "Long": 110.658056,
              "SecAddress": "兴安县崔家乡崔家村",
              "Lat": 25.519722
            },
            "geometry": {"type": "Point", "coordinates": [110.658055555555563, 25.519722222222221]}
          },
          {
            "type": "Feature",
            "id": 88,
            "properties": {
              "SecName": "回龙洲",
              "SecCode": "80882560",
              "Long": 110.836944,
              "SecAddress": "广西桂林市恭城县平安乡回龙洲村",
              "Lat": 24.882778
            },
            "geometry": {"type": "Point", "coordinates": [110.836944444444441, 24.882777777777779]}
          },
          {
            "type": "Feature",
            "id": 89,
            "properties": {
              "SecName": "大地",
              "SecCode": "80882510",
              "Long": 111.083889,
              "SecAddress": "广西桂林市恭城县三江乡大地村",
              "Lat": 24.838611
            },
            "geometry": {"type": "Point", "coordinates": [111.083888888888879, 24.83861111111111]}
          },
          {
            "type": "Feature",
            "id": 90,
            "properties": {
              "SecName": "灵渠",
              "SecCode": "80882500",
              "Long": 110.521111,
              "SecAddress": "广西桂林市兴安县溶江镇前进街76号灵渠水文站",
              "Lat": 25.599722
            },
            "geometry": {"type": "Point", "coordinates": [110.521111111111111, 25.599722222222223]}
          },
          {
            "type": "Feature",
            "id": 91,
            "properties": {
              "SecName": "龙虎",
              "SecCode": "80882530",
              "Long": 110.948889,
              "SecAddress": "恭城县龙虎乡黄沙湾村",
              "Lat": 25.08
            },
            "geometry": {"type": "Point", "coordinates": [110.948888888888888, 25.08]}
          },
          {
            "type": "Feature",
            "id": 92,
            "properties": {
              "SecName": "龙头山",
              "SecCode": "80882670",
              "Long": 110.358889,
              "SecAddress": "桂林市荔浦县青山镇满洞村",
              "Lat": 24.458889
            },
            "geometry": {"type": "Point", "coordinates": [110.358888888888885, 24.45888888888889]}
          },
          {
            "type": "Feature",
            "id": 93,
            "properties": {
              "SecName": "庙头",
              "SecCode": "61180160",
              "Long": 111.278889,
              "SecAddress": "桂林市全州县庙头镇",
              "Lat": 26.258056
            },
            "geometry": {"type": "Point", "coordinates": [111.278888888888886, 26.258055555555554]}
          },
          {
            "type": "Feature",
            "id": 94,
            "properties": {
              "SecName": "平乐",
              "SecCode": "80882200",
              "Long": 110.651944,
              "SecAddress": "广西桂林市平乐县长滩乡裕丰村平乐水文站",
              "Lat": 24.625833
            },
            "geometry": {"type": "Point", "coordinates": [110.651944444444453, 24.625833333333333]}
          },
          {
            "type": "Feature",
            "id": 95,
            "properties": {
              "SecName": "青狮潭坝首",
              "SecCode": "80882600",
              "Long": 110.248889,
              "SecAddress": "灵川县九屋镇青狮潭水库",
              "Lat": 25.5225
            },
            "geometry": {"type": "Point", "coordinates": [110.248888888888885, 25.5225]}
          },
          {
            "type": "Feature",
            "id": 96,
            "properties": {
              "SecName": "全州",
              "SecCode": "61100701",
              "Long": 111.07,
              "SecAddress": "全州县全州镇鸟塘坪村",
              "Lat": 25.928056
            },
            "geometry": {"type": "Point", "coordinates": [111.07, 25.928055555555556]}
          },
          {
            "type": "Feature",
            "id": 97,
            "properties": {
              "SecName": "兴安水文站",
              "SecCode": "61100150",
              "Long": 110.673889,
              "SecAddress": "广西兴安县兴安镇北街里",
              "Lat": 25.613611
            },
            "geometry": {"type": "Point", "coordinates": [110.673888888888897, 25.613611111111112]}
          },
          {
            "type": "Feature",
            "id": 98,
            "properties": {
              "SecName": "阳朔",
              "SecCode": "80882170",
              "Long": 110.506944,
              "SecAddress": "广西桂林市阳朔县城关乡木山榨村阳朔水文站",
              "Lat": 24.818333
            },
            "geometry": {"type": "Point", "coordinates": [110.506944444444443, 24.818333333333332]}
          },
          {
            "type": "Feature",
            "id": 99,
            "properties": {
              "SecName": "福兴",
              "SecCode": "80882180",
              "Long": 110.6,
              "SecAddress": "桂林市平乐县福兴乡",
              "Lat": 24.691389
            },
            "geometry": {"type": "Point", "coordinates": [110.6, 24.691388888888888]}
          },
          {
            "type": "Feature",
            "id": 100,
            "properties": {
              "SecName": "永福水文站",
              "SecCode": "80582690",
              "Long": 109.979722,
              "SecAddress": "桂林市永永福县永福镇永福水文站",
              "Lat": 24.990278
            },
            "geometry": {"type": "Point", "coordinates": [109.979722222222222, 24.990277777777777]}
          },
          {
            "type": "Feature",
            "id": 101,
            "properties": {
              "SecName": "灌阳水文站",
              "SecCode": "61102700",
              "Long": 111.154722,
              "SecAddress": "灌阳县灌阳镇卿家村",
              "Lat": 25.488333
            },
            "geometry": {"type": "Point", "coordinates": [111.154722222222233, 25.488333333333333]}
          },
          {
            "type": "Feature",
            "id": 102,
            "properties": {
              "SecName": "里茶",
              "SecCode": "80582590",
              "Long": 110.012222,
              "SecAddress": "龙胜县城区上游白龙桥",
              "Lat": 25.804722
            },
            "geometry": {"type": "Point", "coordinates": [110.012222222222221, 25.804722222222225]}
          },
          {
            "type": "Feature",
            "id": 103,
            "properties": {
              "SecName": "坪头山",
              "SecCode": "80882000",
              "Long": 110.49,
              "SecAddress": "广西桂林市兴安县华江乡坪头山村",
              "Lat": 25.774722
            },
            "geometry": {"type": "Point", "coordinates": [110.49, 25.77472222222222]}
          },
          {
            "type": "Feature",
            "id": 104,
            "properties": {
              "SecName": "下坪",
              "SecCode": "61283100",
              "Long": 110.598889,
              "SecAddress": "资源县中峰乡于家田村",
              "Lat": 25.894167
            },
            "geometry": {"type": "Point", "coordinates": [110.598888888888879, 25.894166666666667]}
          },
          {
            "type": "Feature",
            "id": 105,
            "properties": {
              "SecName": "糖榨",
              "SecCode": "80882690",
              "Long": 110.603333,
              "SecAddress": "平乐县平乐镇糖榨村",
              "Lat": 24.628056
            },
            "geometry": {"type": "Point", "coordinates": [110.603333333333325, 24.628055555555555]}
          },
          {
            "type": "Feature",
            "id": 106,
            "properties": {
              "SecName": "两江",
              "SecCode": "80512400",
              "Long": 110.021667,
              "SecAddress": "临桂县两江镇城联村",
              "Lat": 25.195833
            },
            "geometry": {"type": "Point", "coordinates": [110.021666666666661, 25.195833333333333]}
          },
          {
            "type": "Feature",
            "id": 107,
            "properties": {
              "SecName": "五里峡水库",
              "SecCode": "91000117",
              "Long": 110.764606,
              "SecAddress": "桂林市兴安县湘漓镇会龙村湘江漠川河",
              "Lat": 25.585025
            },
            "geometry": {"type": "Point", "coordinates": [110.764605555555562, 25.585025]}
          },
          {
            "type": "Feature",
            "id": 108,
            "properties": {
              "SecName": "峻山水库",
              "SecCode": "91000129",
              "Long": 110.890158,
              "SecAddress": "桂林市恭城瑶族自治县西岭乡塘合村桂江水系恭城河支流澄江河",
              "Lat": 24.871036
            },
            "geometry": {"type": "Point", "coordinates": [110.890158333333346, 24.871036111111113]}
          },
          {
            "type": "Feature",
            "id": 109,
            "properties": {
              "SecName": "小溶江水库",
              "SecCode": "80805016",
              "Long": 110.433889,
              "SecAddress": "桂林市灵川县三街镇小溶江水利枢纽",
              "Lat": 25.551944
            },
            "geometry": {"type": "Point", "coordinates": [110.433888888888887, 25.551944444444445]}
          },
          {
            "type": "Feature",
            "id": 110,
            "properties": {
              "SecName": "菜木塘(斧子口水库)",
              "SecCode": "80882100",
              "Long": 109.274444,
              "SecAddress": "广西桂林市兴安县华江乡菜木塘",
              "Lat": 25.071667
            },
            "geometry": {"type": "Point", "coordinates": [109.274444444444441, 25.071666666666665]}
          },
          {
            "type": "Feature",
            "id": 111,
            "properties": {
              "SecName": "古王桥",
              "SecCode": "80481117",
              "Long": 107.271944,
              "SecAddress": "河池市天峨县六排镇云榜村古王桥",
              "Lat": 24.901111
            },
            "geometry": {"type": "Point", "coordinates": [107.271944444444443, 24.90111111111111]}
          },
          {
            "type": "Feature",
            "id": 112,
            "properties": {
              "SecName": "平勇村",
              "SecCode": "80789478",
              "Long": 107.615556,
              "SecAddress": "河池市大化县板升乡平勇村",
              "Lat": 24.280556
            },
            "geometry": {"type": "Point", "coordinates": [107.615555555555545, 24.280555555555555]}
          },
          {
            "type": "Feature",
            "id": 113,
            "properties": {
              "SecName": "大湾码头",
              "SecCode": "80481185",
              "Long": 108.058611,
              "SecAddress": "河池市大化县大化社区百凌村",
              "Lat": 23.800278
            },
            "geometry": {"type": "Point", "coordinates": [108.058611111111105, 23.800277777777779]}
          },
          {
            "type": "Feature",
            "id": 114,
            "properties": {
              "SecName": "32医院",
              "SecCode": "80582420",
              "Long": 108.66,
              "SecAddress": "广西河池市宜州市庆远镇",
              "Lat": 24.5
            },
            "geometry": {"type": "Point", "coordinates": [108.66, 24.5]}
          },
          {
            "type": "Feature",
            "id": 115,
            "properties": {
              "SecName": "八扣",
              "SecCode": "80481295",
              "Long": 106.958056,
              "SecAddress": "曹渡河汇入红水河",
              "Lat": 25.244167
            },
            "geometry": {"type": "Point", "coordinates": [106.958055555555561, 25.244166666666668]}
          },
          {
            "type": "Feature",
            "id": 116,
            "properties": {
              "SecName": "百旺村",
              "SecCode": "80582760",
              "Long": 108.046111,
              "SecAddress": "广西河池市金城江区百旺村",
              "Lat": 24.706111
            },
            "geometry": {"type": "Point", "coordinates": [108.046111111111102, 24.70611111111111]}
          },
          {
            "type": "Feature",
            "id": 117,
            "properties": {
              "SecName": "城北水厂",
              "SecCode": "80589220",
              "Long": 108.056111,
              "SecAddress": "河池市金城江区东江镇加辽村城北水厂",
              "Lat": 24.702778
            },
            "geometry": {"type": "Point", "coordinates": [108.056111111111107, 24.702777777777776]}
          },
          {
            "type": "Feature",
            "id": 118,
            "properties": {
              "SecName": "大化电厂",
              "SecCode": "80481170",
              "Long": 107.948889,
              "SecAddress": "广西河池市大化县大化电厂坝址",
              "Lat": 23.716944
            },
            "geometry": {"type": "Point", "coordinates": [107.948888888888888, 23.716944444444444]}
          },
          {
            "type": "Feature",
            "id": 119,
            "properties": {
              "SecName": "都安",
              "SecCode": "80481200",
              "Long": 108.145,
              "SecAddress": "广西河池市都安县澄江乡红渡村",
              "Lat": 23.846389
            },
            "geometry": {"type": "Point", "coordinates": [108.145, 23.846388888888889]}
          },
          {
            "type": "Feature",
            "id": 120,
            "properties": {
              "SecName": "贵江",
              "SecCode": "80582720",
              "Long": 107.833056,
              "SecAddress": "环江县木论乡东山村",
              "Lat": 25.121389
            },
            "geometry": {"type": "Point", "coordinates": [107.833055555555546, 25.121388888888891]}
          },
          {
            "type": "Feature",
            "id": 121,
            "properties": {
              "SecName": "何家寨",
              "SecCode": "80582770",
              "Long": 108.236667,
              "SecAddress": "环江县驯乐乡何家寨",
              "Lat": 25.432222
            },
            "geometry": {"type": "Point", "coordinates": [108.236666666666665, 25.432222222222222]}
          },
          {
            "type": "Feature",
            "id": 122,
            "properties": {
              "SecName": "环江",
              "SecCode": "80582810",
              "Long": 108.251111,
              "SecAddress": "广西河池市环江县思恩镇良伞村",
              "Lat": 24.834722
            },
            "geometry": {"type": "Point", "coordinates": [108.251111111111115, 24.834722222222222]}
          },
          {
            "type": "Feature",
            "id": 123,
            "properties": {
              "SecName": "黄种村",
              "SecCode": "80582890",
              "Long": 108.433889,
              "SecAddress": "环江县龙岩乡黄种村",
              "Lat": 25.425
            },
            "geometry": {"type": "Point", "coordinates": [108.433888888888887, 25.425]}
          },
          {
            "type": "Feature",
            "id": 124,
            "properties": {
              "SecName": "加辽水厂",
              "SecCode": "80589210",
              "Long": 108.041944,
              "SecAddress": "河池市金城江区东江镇加辽村加辽水厂",
              "Lat": 24.726667
            },
            "geometry": {"type": "Point", "coordinates": [108.041944444444439, 24.726666666666667]}
          },
          {
            "type": "Feature",
            "id": 125,
            "properties": {
              "SecName": "甲板",
              "SecCode": "80481450",
              "Long": 107.003889,
              "SecAddress": "六硐河汇入红水河口",
              "Lat": 25.323333
            },
            "geometry": {"type": "Point", "coordinates": [107.003888888888895, 25.323333333333334]}
          },
          {
            "type": "Feature",
            "id": 126,
            "properties": {
              "SecName": "肯冲水厂",
              "SecCode": "80589200",
              "Long": 108.016944,
              "SecAddress": "河池市金城江六圩镇下爱村肯冲屯肯冲水厂",
              "Lat": 24.737222
            },
            "geometry": {"type": "Point", "coordinates": [108.016944444444448, 24.737222222222222]}
          },
          {
            "type": "Feature",
            "id": 127,
            "properties": {
              "SecName": "柳木桥",
              "SecCode": "80582710",
              "Long": 109.103056,
              "SecAddress": "河池市罗城县牛毕河（阳江）柳木村柳木桥",
              "Lat": 24.856111
            },
            "geometry": {"type": "Point", "coordinates": [109.103055555555557, 24.856111111111112]}
          },
          {
            "type": "Feature",
            "id": 128,
            "properties": {
              "SecName": "六圩水厂（城西）",
              "SecCode": "80589230",
              "Long": 108.021111,
              "SecAddress": "河池市金城江区六圩镇城西水厂",
              "Lat": 24.68
            },
            "geometry": {"type": "Point", "coordinates": [108.021111111111111, 24.68]}
          },
          {
            "type": "Feature",
            "id": 129,
            "properties": {
              "SecName": "龙滩",
              "SecCode": "80481000",
              "Long": 107.051944,
              "SecAddress": "河池市天峨县龙滩坝址",
              "Lat": 25.023333
            },
            "geometry": {"type": "Point", "coordinates": [107.051944444444445, 25.023333333333333]}
          },
          {
            "type": "Feature",
            "id": 130,
            "properties": {
              "SecName": "马陇",
              "SecCode": "80481530",
              "Long": 108.326944,
              "SecAddress": "入红水河口（都安乡百旺乡板依村）",
              "Lat": 24.216667
            },
            "geometry": {"type": "Point", "coordinates": [108.326944444444436, 24.216666666666665]}
          },
          {
            "type": "Feature",
            "id": 131,
            "properties": {
              "SecName": "纳解屯",
              "SecCode": "80481420",
              "Long": 106.973056,
              "SecAddress": "曹渡河汇入六硐河口",
              "Lat": 25.378889
            },
            "geometry": {"type": "Point", "coordinates": [106.973055555555561, 25.378888888888888]}
          },
          {
            "type": "Feature",
            "id": 132,
            "properties": {
              "SecName": "三岔",
              "SecCode": "80582430",
              "Long": 109.031944,
              "SecAddress": "河池市宜州市洛东镇三岔水文站",
              "Lat": 24.487778
            },
            "geometry": {"type": "Point", "coordinates": [109.031944444444449, 24.487777777777779]}
          },
          {
            "type": "Feature",
            "id": 133,
            "properties": {
              "SecName": "天峨",
              "SecCode": "80481110",
              "Long": 107.156111,
              "SecAddress": "广西河池市天峨县六排镇天峨水文站",
              "Lat": 24.999444
            },
            "geometry": {"type": "Point", "coordinates": [107.156111111111116, 24.999444444444446]}
          },
          {
            "type": "Feature",
            "id": 134,
            "properties": {
              "SecName": "土桥水库",
              "SecCode": "80000005",
              "Long": 108.633056,
              "SecAddress": "宜州市石别镇土桥水库",
              "Lat": 24.352222
            },
            "geometry": {"type": "Point", "coordinates": [108.633055555555543, 24.352222222222224]}
          },
          {
            "type": "Feature",
            "id": 135,
            "properties": {
              "SecName": "新荣甸",
              "SecCode": "80582850",
              "Long": 108.098889,
              "SecAddress": "环江县川山镇社村新荣甸",
              "Lat": 25.193889
            },
            "geometry": {"type": "Point", "coordinates": [108.098888888888879, 25.193888888888889]}
          },
          {
            "type": "Feature",
            "id": 136,
            "properties": {
              "SecName": "岩滩",
              "SecCode": "80481150",
              "Long": 107.526111,
              "SecAddress": "广西河池市大化县岩滩镇岩滩电站坝址",
              "Lat": 24.008056
            },
            "geometry": {"type": "Point", "coordinates": [107.526111111111106, 24.008055555555554]}
          },
          {
            "type": "Feature",
            "id": 137,
            "properties": {
              "SecName": "百龙滩坝址",
              "SecCode": "80481190",
              "Long": 107.051944,
              "SecAddress": "广西河池市都安县百龙滩坝址",
              "Lat": 25.023333
            },
            "geometry": {"type": "Point", "coordinates": [107.051944444444445, 25.023333333333333]}
          },
          {
            "type": "Feature",
            "id": 138,
            "properties": {
              "SecName": "顶换村",
              "SecCode": "80481440",
              "Long": 106.996111,
              "SecAddress": "广西河池市曹渡河汇入六硐河口",
              "Lat": 25.389722
            },
            "geometry": {"type": "Point", "coordinates": [106.996111111111105, 25.389722222222222]}
          },
          {
            "type": "Feature",
            "id": 139,
            "properties": {
              "SecName": "弄堂",
              "SecCode": "80789470",
              "Long": 107.37,
              "SecAddress": "河池市东兰县弄堂（江洞河入红水河口）",
              "Lat": 24.601111
            },
            "geometry": {"type": "Point", "coordinates": [107.37, 24.601111111111113]}
          },
          {
            "type": "Feature",
            "id": 140,
            "properties": {
              "SecName": "同贡",
              "SecCode": "80481470",
              "Long": 107.330556,
              "SecAddress": "南丹县吾隘镇同贡村更且屯",
              "Lat": 24.844722
            },
            "geometry": {"type": "Point", "coordinates": [107.330555555555549, 24.84472222222222]}
          },
          {
            "type": "Feature",
            "id": 141,
            "properties": {
              "SecName": "那坝村",
              "SecCode": "80481490",
              "Long": 107.275833,
              "SecAddress": "巴马县巴马镇那坝村",
              "Lat": 24.164167
            },
            "geometry": {"type": "Point", "coordinates": [107.275833333333338, 24.164166666666667]}
          },
          {
            "type": "Feature",
            "id": 142,
            "properties": {
              "SecName": "百林",
              "SecCode": "80481500",
              "Long": 107.407778,
              "SecAddress": "河池市巴马县百林水文站",
              "Lat": 23.906111
            },
            "geometry": {"type": "Point", "coordinates": [107.407777777777781, 23.906111111111109]}
          },
          {
            "type": "Feature",
            "id": 143,
            "properties": {
              "SecName": "平腊",
              "SecCode": "80481421",
              "Long": 106.940833,
              "SecAddress": "河池市天峨县向阳镇平腊",
              "Lat": 24.974444
            },
            "geometry": {"type": "Point", "coordinates": [106.94083333333333, 24.974444444444444]}
          },
          {
            "type": "Feature",
            "id": 144,
            "properties": {
              "SecName": "黄江村",
              "SecCode": "80481460",
              "Long": 107.349444,
              "SecAddress": "南丹县罗富乡黄江村　",
              "Lat": 25.089444
            },
            "geometry": {"type": "Point", "coordinates": [107.349444444444444, 25.089444444444442]}
          },
          {
            "type": "Feature",
            "id": 145,
            "properties": {
              "SecName": "拉浪电站坝址",
              "SecCode": "80582880",
              "Long": 108.293056,
              "SecAddress": "广西河池市宜州市拉浪乡拉浪水电站坝址",
              "Lat": 24.575556
            },
            "geometry": {"type": "Point", "coordinates": [108.293055555555554, 24.575555555555557]}
          },
          {
            "type": "Feature",
            "id": 146,
            "properties": {
              "SecName": "洛东水电站",
              "SecCode": "80510700",
              "Long": 108.806667,
              "SecAddress": "宜州市洛东乡",
              "Lat": 24.4525
            },
            "geometry": {"type": "Point", "coordinates": [108.806666666666658, 24.4525]}
          },
          {
            "type": "Feature",
            "id": 147,
            "properties": {
              "SecName": "叶茂电站坝址",
              "SecCode": "80582410",
              "Long": 108.578056,
              "SecAddress": "广西河池市宜州市怀远镇叶茂村叶茂电站坝址",
              "Lat": 24.523333
            },
            "geometry": {"type": "Point", "coordinates": [108.578055555555551, 24.523333333333333]}
          },
          {
            "type": "Feature",
            "id": 148,
            "properties": {
              "SecName": "龙颈电站",
              "SecCode": "80481195",
              "Long": 108.138279,
              "SecAddress": "都安县安阳镇龙颈电站",
              "Lat": 23.860661
            },
            "geometry": {"type": "Point", "coordinates": [108.138279, 23.860661]}
          },
          {
            "type": "Feature",
            "id": 149,
            "properties": {
              "SecName": "扶隆村浮桥",
              "SecCode": "80882440",
              "Long": 111.793889,
              "SecAddress": "贺州八步区辅门镇扶隆村石塔渡口",
              "Lat": 23.823611
            },
            "geometry": {"type": "Point", "coordinates": [111.793888888888887, 23.823611111111109]}
          },
          {
            "type": "Feature",
            "id": 150,
            "properties": {
              "SecName": "富阳",
              "SecCode": "80882310",
              "Long": 111.266111,
              "SecAddress": "广西贺州市富川县富阳镇富阳水文站",
              "Lat": 24.820556
            },
            "geometry": {"type": "Point", "coordinates": [111.266111111111115, 24.820555555555554]}
          },
          {
            "type": "Feature",
            "id": 151,
            "properties": {
              "SecName": "龟石水库坝首",
              "SecCode": "80882330",
              "Long": 111.286111,
              "SecAddress": "广西贺州市钟山县龟石水库坝址",
              "Lat": 24.6625
            },
            "geometry": {"type": "Point", "coordinates": [111.286111111111111, 24.6625]}
          },
          {
            "type": "Feature",
            "id": 152,
            "properties": {
              "SecName": "合面狮电站",
              "SecCode": "80882410",
              "Long": 111.753889,
              "SecAddress": "广西贺州市八步区信都镇合面狮电站",
              "Lat": 24.049444
            },
            "geometry": {"type": "Point", "coordinates": [111.753888888888895, 24.049444444444447]}
          },
          {
            "type": "Feature",
            "id": 153,
            "properties": {
              "SecName": "贺江大桥",
              "SecCode": "80882390",
              "Long": 111.538056,
              "SecAddress": "广西贺州市八步区光明大道贺江大桥",
              "Lat": 24.412222
            },
            "geometry": {"type": "Point", "coordinates": [111.538055555555559, 24.412222222222219]}
          },
          {
            "type": "Feature",
            "id": 154,
            "properties": {
              "SecName": "黄石电站",
              "SecCode": "80882370",
              "Long": 111.358889,
              "SecAddress": "广西贺州市平桂管理区西湾街道办黄石电站",
              "Lat": 24.521389
            },
            "geometry": {"type": "Point", "coordinates": [111.358888888888885, 24.52138888888889]}
          },
          {
            "type": "Feature",
            "id": 155,
            "properties": {
              "SecName": "平峡口（昭平水电站）",
              "SecCode": "80882260",
              "Long": 110.816667,
              "SecAddress": "广西贺州市昭平县昭平镇龙坪村",
              "Lat": 24.174167
            },
            "geometry": {"type": "Point", "coordinates": [110.816666666666663, 24.174166666666668]}
          },
          {
            "type": "Feature",
            "id": 156,
            "properties": {
              "SecName": "水口村",
              "SecCode": "80785125",
              "Long": 111.374444,
              "SecAddress": "贺州市平桂管理区水口镇水口村",
              "Lat": 23.902222
            },
            "geometry": {"type": "Point", "coordinates": [111.374444444444435, 23.902222222222221]}
          },
          {
            "type": "Feature",
            "id": 157,
            "properties": {
              "SecName": "信都大桥",
              "SecCode": "80882420",
              "Long": 111.718611,
              "SecAddress": "广西贺州市八步区信都镇信联村信都大桥",
              "Lat": 23.985556
            },
            "geometry": {"type": "Point", "coordinates": [111.718611111111116, 23.985555555555557]}
          },
          {
            "type": "Feature",
            "id": 158,
            "properties": {
              "SecName": "蓬冲口（巴江口水库下6km）",
              "SecCode": "80882210",
              "Long": 110.766944,
              "SecAddress": "贺州市昭平县文竹镇大广村",
              "Lat": 24.276389
            },
            "geometry": {"type": "Point", "coordinates": [110.766944444444448, 24.276388888888889]}
          },
          {
            "type": "Feature",
            "id": 159,
            "properties": {
              "SecName": "三板桥",
              "SecCode": "80882300",
              "Long": 111.268889,
              "SecAddress": "广西贺州市富川县富阳镇社三村",
              "Lat": 24.856111
            },
            "geometry": {"type": "Point", "coordinates": [111.268888888888881, 24.856111111111112]}
          },
          {
            "type": "Feature",
            "id": 160,
            "properties": {
              "SecName": "文德村",
              "SecCode": "80882790",
              "Long": 111.796944,
              "SecAddress": "贺州市八步区桂岭镇文德村",
              "Lat": 24.662222
            },
            "geometry": {"type": "Point", "coordinates": [111.796944444444449, 24.662222222222219]}
          },
          {
            "type": "Feature",
            "id": 161,
            "properties": {
              "SecName": "劳村水文站",
              "SecCode": "80882760",
              "Long": 110.945278,
              "SecAddress": "贺州市昭平县走马乡庙枒村",
              "Lat": 24.236667
            },
            "geometry": {"type": "Point", "coordinates": [110.945277777777775, 24.236666666666668]}
          },
          {
            "type": "Feature",
            "id": 162,
            "properties": {
              "SecName": "龙窝",
              "SecCode": "80882750",
              "Long": 111.161389,
              "SecAddress": "贺州市钟山县两安瑶族乡龙窝村",
              "Lat": 24.675278
            },
            "geometry": {"type": "Point", "coordinates": [111.161388888888894, 24.675277777777779]}
          },
          {
            "type": "Feature",
            "id": 163,
            "properties": {
              "SecName": "黄姚",
              "SecCode": "80882770",
              "Long": 111.218611,
              "SecAddress": "贺州市昭平县黄姚镇阳朔村",
              "Lat": 24.259444
            },
            "geometry": {"type": "Point", "coordinates": [111.218611111111116, 24.259444444444444]}
          },
          {
            "type": "Feature",
            "id": 164,
            "properties": {
              "SecName": "马江",
              "SecCode": "80882780",
              "Long": 111.036944,
              "SecAddress": "贺州市昭平县马江镇马江村",
              "Lat": 23.881389
            },
            "geometry": {"type": "Point", "coordinates": [111.036944444444444, 23.881388888888889]}
          },
          {
            "type": "Feature",
            "id": 165,
            "properties": {
              "SecName": "信都(三)",
              "SecCode": "80900300",
              "Long": 111.738778,
              "SecAddress": "贺州八步区信都镇平龙村委杨家村",
              "Lat": 23.998917
            },
            "geometry": {"type": "Point", "coordinates": [111.738777777777784, 23.998916666666666]}
          },
          {
            "type": "Feature",
            "id": 166,
            "properties": {
              "SecName": "昭平",
              "SecCode": "80805000",
              "Long": 110.809722,
              "SecAddress": "贺州昭平县昭平镇城南社区西堤南路9号",
              "Lat": 24.167222
            },
            "geometry": {"type": "Point", "coordinates": [110.80972222222222, 24.167222222222222]}
          },
          {
            "type": "Feature",
            "id": 167,
            "properties": {
              "SecName": "金牛坪水电站",
              "SecCode": "80805670",
              "Long": 110.013056,
              "SecAddress": "昭平县马江镇上游约7公里处的熊埠村",
              "Lat": 24.353056
            },
            "geometry": {"type": "Point", "coordinates": [110.013055555555553, 24.353055555555557]}
          },
          {
            "type": "Feature",
            "id": 168,
            "properties": {
              "SecName": "板塘",
              "SecCode": "80000002",
              "Long": 109.428889,
              "SecAddress": "柳州市柳江县板塘村",
              "Lat": 23.9225
            },
            "geometry": {"type": "Point", "coordinates": [109.428888888888892, 23.9225]}
          },
          {
            "type": "Feature",
            "id": 169,
            "properties": {
              "SecName": "秤砣湾",
              "SecCode": "80582210",
              "Long": 109.521111,
              "SecAddress": "广西来宾市象州县石龙镇称砣湾",
              "Lat": 23.813611
            },
            "geometry": {"type": "Point", "coordinates": [109.521111111111111, 23.813611111111111]}
          },
          {
            "type": "Feature",
            "id": 170,
            "properties": {
              "SecName": "高安",
              "SecCode": "80481290",
              "Long": 109.501944,
              "SecAddress": "广西来宾市兴宾区高安乡",
              "Lat": 23.781944
            },
            "geometry": {"type": "Point", "coordinates": [109.501944444444447, 23.781944444444445]}
          },
          {
            "type": "Feature",
            "id": 171,
            "properties": {
              "SecName": "合山电厂",
              "SecCode": "80481230",
              "Long": 108.866111,
              "SecAddress": "广西来宾市合山市合山电厂",
              "Lat": 23.815
            },
            "geometry": {"type": "Point", "coordinates": [108.86611111111111, 23.815]}
          },
          {
            "type": "Feature",
            "id": 172,
            "properties": {
              "SecName": "河东水厂",
              "SecCode": "80481270",
              "Long": 109.225,
              "SecAddress": "广西来宾市兴宾区河东水厂取水口上游100m",
              "Lat": 23.721667
            },
            "geometry": {"type": "Point", "coordinates": [109.225, 23.721666666666664]}
          },
          {
            "type": "Feature",
            "id": 173,
            "properties": {
              "SecName": "怀集",
              "SecCode": "80481240",
              "Long": 108.856944,
              "SecAddress": "广西来宾市合山市河里乡怀集村",
              "Lat": 23.753889
            },
            "geometry": {"type": "Point", "coordinates": [108.856944444444437, 23.753888888888888]}
          },
          {
            "type": "Feature",
            "id": 174,
            "properties": {
              "SecName": "蓝甲（乐滩水电站）",
              "SecCode": "80481210",
              "Long": 108.501111,
              "SecAddress": "来宾市忻城县遂义乡蓝甲村码头",
              "Lat": 23.994444
            },
            "geometry": {"type": "Point", "coordinates": [108.501111111111115, 23.994444444444447]}
          },
          {
            "type": "Feature",
            "id": 175,
            "properties": {
              "SecName": "勒马",
              "SecCode": "80000003",
              "Long": 109.846944,
              "SecAddress": "来宾市武宣县三里镇勒马村",
              "Lat": 23.455278
            },
            "geometry": {"type": "Point", "coordinates": [109.846944444444446, 23.455277777777777]}
          },
          {
            "type": "Feature",
            "id": 176,
            "properties": {
              "SecName": "里高",
              "SecCode": "80481380",
              "Long": 108.963056,
              "SecAddress": "柳州市柳江县里高镇",
              "Lat": 24.139167
            },
            "geometry": {"type": "Point", "coordinates": [108.963055555555556, 24.139166666666664]}
          },
          {
            "type": "Feature",
            "id": 177,
            "properties": {
              "SecName": "龙马村",
              "SecCode": "80481220",
              "Long": 108.775,
              "SecAddress": "广西来宾市忻城县果遂乡龙马村",
              "Lat": 23.825833
            },
            "geometry": {"type": "Point", "coordinates": [108.775, 23.825833333333332]}
          },
          {
            "type": "Feature",
            "id": 178,
            "properties": {
              "SecName": "迁江（桥巩水电站）",
              "SecCode": "80481250",
              "Long": 108.968889,
              "SecAddress": "广西来宾市兴宾区迁江镇兴隆街",
              "Lat": 23.627222
            },
            "geometry": {"type": "Point", "coordinates": [108.968888888888884, 23.627222222222223]}
          },
          {
            "type": "Feature",
            "id": 179,
            "properties": {
              "SecName": "武宣",
              "SecCode": "80582990",
              "Long": 109.668889,
              "SecAddress": "广西来宾市武宣县武宣镇武宣水文站",
              "Lat": 23.593056
            },
            "geometry": {"type": "Point", "coordinates": [109.668888888888887, 23.593055555555555]}
          },
          {
            "type": "Feature",
            "id": 180,
            "properties": {
              "SecName": "象州大桥",
              "SecCode": "80582190",
              "Long": 109.673056,
              "SecAddress": "广西来宾市象州县县城大桥",
              "Lat": 23.963611
            },
            "geometry": {"type": "Point", "coordinates": [109.673055555555564, 23.96361111111111]}
          },
          {
            "type": "Feature",
            "id": 181,
            "properties": {
              "SecName": "运江",
              "SecCode": "80582170",
              "Long": 109.706944,
              "SecAddress": "来宾市象州县运江镇新运码头",
              "Lat": 24.160278
            },
            "geometry": {"type": "Point", "coordinates": [109.706944444444446, 24.160277777777775]}
          },
          {
            "type": "Feature",
            "id": 182,
            "properties": {
              "SecName": "老山",
              "SecCode": "80591500",
              "Long": 110.205,
              "SecAddress": "金秀县城解放路老山林场",
              "Lat": 24.107778
            },
            "geometry": {"type": "Point", "coordinates": [110.205, 24.10777777777778]}
          },
          {
            "type": "Feature",
            "id": 183,
            "properties": {
              "SecName": "范团",
              "SecCode": "80492015",
              "Long": 108.621944,
              "SecAddress": "忻城县城关镇范团村",
              "Lat": 24.019722
            },
            "geometry": {"type": "Point", "coordinates": [108.621944444444438, 24.019722222222221]}
          },
          {
            "type": "Feature",
            "id": 184,
            "properties": {
              "SecName": "彩村",
              "SecCode": "80491940",
              "Long": 109.1725,
              "SecAddress": "入红水河口（兴宾区桥巩乡古瓦电站下游）",
              "Lat": 23.779167
            },
            "geometry": {"type": "Point", "coordinates": [109.1725, 23.779166666666665]}
          },
          {
            "type": "Feature",
            "id": 185,
            "properties": {
              "SecName": "长塘桥",
              "SecCode": "80591200",
              "Long": 109.752222,
              "SecAddress": "入柳江口（来宾市象州县运江镇芽村长塘屯）",
              "Lat": 24.145833
            },
            "geometry": {"type": "Point", "coordinates": [109.752222222222215, 24.145833333333332]}
          },
          {
            "type": "Feature",
            "id": 186,
            "properties": {
              "SecName": "横岭",
              "SecCode": "80582940",
              "Long": 110.173333,
              "SecAddress": "桂林市荔浦县茶城镇清良村大伦屯与来宾市金秀县三江乡三江村八旦屯交界处",
              "Lat": 24.446944
            },
            "geometry": {"type": "Point", "coordinates": [110.173333333333332, 24.446944444444444]}
          },
          {
            "type": "Feature",
            "id": 187,
            "properties": {
              "SecName": "大樟",
              "SecCode": "80582960",
              "Long": 109.890833,
              "SecAddress": "来宾市金秀县大樟乡奔腾村",
              "Lat": 23.873333
            },
            "geometry": {"type": "Point", "coordinates": [109.890833333333333, 23.873333333333335]}
          },
          {
            "type": "Feature",
            "id": 188,
            "properties": {
              "SecName": "南门渡大桥",
              "SecCode": "80481550",
              "Long": 108.981389,
              "SecAddress": "来宾市兴宾区迁江镇南门渡大桥",
              "Lat": 23.612222
            },
            "geometry": {"type": "Point", "coordinates": [108.981388888888887, 23.612222222222222]}
          },
          {
            "type": "Feature",
            "id": 189,
            "properties": {
              "SecName": "上卜头",
              "SecCode": "80882240",
              "Long": 110.257778,
              "SecAddress": "桂林市荔浦县修仁镇福旺村委上卜头屯",
              "Lat": 24.369167
            },
            "geometry": {"type": "Point", "coordinates": [110.257777777777775, 24.369166666666668]}
          },
          {
            "type": "Feature",
            "id": 190,
            "properties": {
              "SecName": "大垌",
              "SecCode": "80682250",
              "Long": 110.288333,
              "SecAddress": "来宾市金秀县罗香乡大垌村委大垌屯",
              "Lat": 24.032222
            },
            "geometry": {"type": "Point", "coordinates": [110.288333333333327, 24.03222222222222]}
          },
          {
            "type": "Feature",
            "id": 191,
            "properties": {
              "SecName": "对亭",
              "SecCode": "80582360",
              "Long": 109.628889,
              "SecAddress": "广西鹿寨县城关区对亭村",
              "Lat": 24.423889
            },
            "geometry": {"type": "Point", "coordinates": [109.628888888888881, 24.423888888888889]}
          },
          {
            "type": "Feature",
            "id": 192,
            "properties": {
              "SecName": "河表",
              "SecCode": "80582150",
              "Long": 109.478889,
              "SecAddress": "广西柳州市柳江县里雍镇河表村",
              "Lat": 24.2225
            },
            "geometry": {"type": "Point", "coordinates": [109.478888888888889, 24.2225]}
          },
          {
            "type": "Feature",
            "id": 193,
            "properties": {
              "SecName": "河东大桥",
              "SecCode": "80582120",
              "Long": 109.418889,
              "SecAddress": "广西柳州市城中区河东大桥",
              "Lat": 24.323333
            },
            "geometry": {"type": "Point", "coordinates": [109.418888888888887, 24.323333333333334]}
          },
          {
            "type": "Feature",
            "id": 194,
            "properties": {
              "SecName": "江洲",
              "SecCode": "80582950",
              "Long": 110.023889,
              "SecAddress": "来宾市金秀县头排镇江州村",
              "Lat": 24.341667
            },
            "geometry": {"type": "Point", "coordinates": [110.023888888888891, 24.341666666666665]}
          },
          {
            "type": "Feature",
            "id": 195,
            "properties": {
              "SecName": "冷水冲",
              "SecCode": "80582140",
              "Long": 109.46,
              "SecAddress": "广西柳州市鱼峰区九头山路12号龙泉山污水处理厂",
              "Lat": 24.301111
            },
            "geometry": {"type": "Point", "coordinates": [109.46, 24.301111111111112]}
          },
          {
            "type": "Feature",
            "id": 196,
            "properties": {
              "SecName": "红花电站",
              "SecCode": "80582160",
              "Long": 109.551944,
              "SecAddress": "广西柳州市柳江县里雍镇红花村红花电站坝址",
              "Lat": 24.204722
            },
            "geometry": {"type": "Point", "coordinates": [109.551944444444445, 24.204722222222223]}
          },
          {
            "type": "Feature",
            "id": 197,
            "properties": {
              "SecName": "里定",
              "SecCode": "80582500",
              "Long": 109.883056,
              "SecAddress": "柳州市鹿寨县黄冕乡里定村立定水厂坝上",
              "Lat": 24.816944
            },
            "geometry": {"type": "Point", "coordinates": [109.883055555555543, 24.816944444444445]}
          },
          {
            "type": "Feature",
            "id": 198,
            "properties": {
              "SecName": "柳州　",
              "SecCode": "80582110",
              "Long": 109.393889,
              "SecAddress": "广西柳州市柳北区雅儒路218号柳州水文站",
              "Lat": 24.32
            },
            "geometry": {"type": "Point", "coordinates": [109.393888888888895, 24.32]}
          },
          {
            "type": "Feature",
            "id": 199,
            "properties": {
              "SecName": "露塘",
              "SecCode": "80582100",
              "Long": 109.293889,
              "SecAddress": "广西柳州市柳江县洛满镇露塘车渡码头",
              "Lat": 24.486389
            },
            "geometry": {"type": "Point", "coordinates": [109.293888888888887, 24.486388888888889]}
          },
          {
            "type": "Feature",
            "id": 200,
            "properties": {
              "SecName": "洛崖",
              "SecCode": "80582060",
              "Long": 109.168056,
              "SecAddress": "广西柳州市柳城县洛崖乡上里村",
              "Lat": 24.675833
            },
            "geometry": {"type": "Point", "coordinates": [109.168055555555554, 24.675833333333333]}
          },
          {
            "type": "Feature",
            "id": 201,
            "properties": {
              "SecName": "石碑",
              "SecCode": "80582000",
              "Long": 108.905,
              "SecAddress": "广西区柳州市三江侗族自治县石碑村上游3km处",
              "Lat": 25.713889
            },
            "geometry": {"type": "Point", "coordinates": [108.905, 25.713888888888889]}
          },
          {
            "type": "Feature",
            "id": 202,
            "properties": {
              "SecName": "融水",
              "SecCode": "80582050",
              "Long": 109.251111,
              "SecAddress": "广西柳州市融水县融水镇融水水文站",
              "Lat": 25.073056
            },
            "geometry": {"type": "Point", "coordinates": [109.251111111111115, 25.073055555555555]}
          },
          {
            "type": "Feature",
            "id": 203,
            "properties": {
              "SecName": "沙宜",
              "SecCode": "80582560",
              "Long": 109.726944,
              "SecAddress": "柳州市三江县斗江镇沙宜村大桥上游200m",
              "Lat": 25.859444
            },
            "geometry": {"type": "Point", "coordinates": [109.726944444444442, 25.859444444444446]}
          },
          {
            "type": "Feature",
            "id": 204,
            "properties": {
              "SecName": "小洲",
              "SecCode": "80582020",
              "Long": 109.408056,
              "SecAddress": "广西柳州市融安县大巷乡木樟村",
              "Lat": 25.294444
            },
            "geometry": {"type": "Point", "coordinates": [109.408055555555563, 25.294444444444448]}
          },
          {
            "type": "Feature",
            "id": 205,
            "properties": {
              "SecName": "涌尾",
              "SecCode": "80582010",
              "Long": 109.336111,
              "SecAddress": "广西柳州市三江县洋溪乡涌尾村",
              "Lat": 25.697778
            },
            "geometry": {"type": "Point", "coordinates": [109.336111111111109, 25.697777777777777]}
          },
          {
            "type": "Feature",
            "id": 206,
            "properties": {
              "SecName": "长安大桥",
              "SecCode": "80582030",
              "Long": 109.393889,
              "SecAddress": "广西柳州市融安县长安镇长安大码头",
              "Lat": 25.213889
            },
            "geometry": {"type": "Point", "coordinates": [109.393888888888895, 25.213888888888889]}
          },
          {
            "type": "Feature",
            "id": 207,
            "properties": {
              "SecName": "浮石",
              "SecCode": "80582040",
              "Long": 109.353056,
              "SecAddress": "融安县浮石电站坝址",
              "Lat": 25.131389
            },
            "geometry": {"type": "Point", "coordinates": [109.353055555555557, 25.131388888888889]}
          },
          {
            "type": "Feature",
            "id": 208,
            "properties": {
              "SecName": "中回河口",
              "SecCode": "80785450",
              "Long": 109.22,
              "SecAddress": "广西柳州市柳城县大埔镇中回河口",
              "Lat": 24.666389
            },
            "geometry": {"type": "Point", "coordinates": [109.22, 24.666388888888889]}
          },
          {
            "type": "Feature",
            "id": 209,
            "properties": {
              "SecName": "瓦窑",
              "SecCode": "80505600",
              "Long": 109.769444,
              "SecAddress": "三江县古宜镇北村瓦窑屯",
              "Lat": 25.769444
            },
            "geometry": {"type": "Point", "coordinates": [109.769444444444446, 25.769444444444442]}
          },
          {
            "type": "Feature",
            "id": 210,
            "properties": {
              "SecName": "鹿寨水文站",
              "SecCode": "80590100",
              "Long": 109.737778,
              "SecAddress": "鹿寨县鹿寨镇",
              "Lat": 24.491944
            },
            "geometry": {"type": "Point", "coordinates": [109.737777777777779, 24.491944444444446]}
          },
          {
            "type": "Feature",
            "id": 211,
            "properties": {
              "SecName": "新村",
              "SecCode": "80590110",
              "Long": 109.617222,
              "SecAddress": "鹿寨县江口乡新村屯",
              "Lat": 24.267222
            },
            "geometry": {"type": "Point", "coordinates": [109.61722222222221, 24.26722222222222]}
          },
          {
            "type": "Feature",
            "id": 212,
            "properties": {
              "SecName": "勾滩水文站",
              "SecCode": "80590095",
              "Long": 109.275278,
              "SecAddress": "融水县融水镇四荣乡保合村大湾屯",
              "Lat": 25.133611
            },
            "geometry": {"type": "Point", "coordinates": [109.275277777777774, 25.133611111111112]}
          },
          {
            "type": "Feature",
            "id": 213,
            "properties": {
              "SecName": "门楼村",
              "SecCode": "80582280",
              "Long": 109.665278,
              "SecAddress": "融安县板揽镇门楼村门楼桥",
              "Lat": 25.453056
            },
            "geometry": {"type": "Point", "coordinates": [109.665277777777789, 25.453055555555554]}
          },
          {
            "type": "Feature",
            "id": 214,
            "properties": {
              "SecName": "淑母电站",
              "SecCode": "80582300",
              "Long": 109.418889,
              "SecAddress": "融安县长安镇淑母屯",
              "Lat": 25.254167
            },
            "geometry": {"type": "Point", "coordinates": [109.418888888888887, 25.254166666666666]}
          },
          {
            "type": "Feature",
            "id": 215,
            "properties": {
              "SecName": "汪洞乡",
              "SecCode": "80590085",
              "Long": 108.818083,
              "SecAddress": "广西融水县汪洞乡都欢屯",
              "Lat": 25.451667
            },
            "geometry": {"type": "Point", "coordinates": [108.818083333333334, 25.451666666666664]}
          },
          {
            "type": "Feature",
            "id": 216,
            "properties": {
              "SecName": "古宜",
              "SecCode": "80505605",
              "Long": 109.605667,
              "SecAddress": "柳州三江县古宜镇桥西南9号",
              "Lat": 25.787
            },
            "geometry": {"type": "Point", "coordinates": [109.605666666666664, 25.787]}
          },
          {
            "type": "Feature",
            "id": 217,
            "properties": {
              "SecName": "黄冕",
              "SecCode": "80514000",
              "Long": 109.844556,
              "SecAddress": "柳州鹿寨县黄冕乡黄冕街",
              "Lat": 24.669833
            },
            "geometry": {"type": "Point", "coordinates": [109.844555555555544, 24.669833333333333]}
          },
          {
            "type": "Feature",
            "id": 218,
            "properties": {
              "SecName": "大埔电站",
              "SecCode": "80785455",
              "Long": 109.274444,
              "SecAddress": "柳城县大埔电站坝址",
              "Lat": 25.071667
            },
            "geometry": {"type": "Point", "coordinates": [109.274444444444441, 25.071666666666665]}
          },
          {
            "type": "Feature",
            "id": 219,
            "properties": {
              "SecName": "麻石水库",
              "SecCode": "80502300",
              "Long": 110.433889,
              "SecAddress": "融水县大浪乡麻石村",
              "Lat": 25.551944
            },
            "geometry": {"type": "Point", "coordinates": [110.433888888888887, 25.551944444444445]}
          },
          {
            "type": "Feature",
            "id": 220,
            "properties": {
              "SecName": "豹子头",
              "SecCode": "80781100",
              "Long": 108.331111,
              "SecAddress": "广西南宁市良庆区豹子头航道站",
              "Lat": 22.77
            },
            "geometry": {"type": "Point", "coordinates": [108.331111111111113, 22.77]}
          },
          {
            "type": "Feature",
            "id": 221,
            "properties": {
              "SecName": "丁当镇白马村",
              "SecCode": "81790105",
              "Long": 107.971944,
              "SecAddress": "广西南宁市隆安县丁当镇白马村",
              "Lat": 23.133056
            },
            "geometry": {"type": "Point", "coordinates": [107.971944444444446, 23.133055555555558]}
          },
          {
            "type": "Feature",
            "id": 222,
            "properties": {
              "SecName": "凤亭河坝首",
              "SecCode": "80781330",
              "Long": 108.24,
              "SecAddress": "南宁市良庆区凤亭河水库坝首",
              "Lat": 22.307222
            },
            "geometry": {"type": "Point", "coordinates": [108.24, 22.307222222222222]}
          },
          {
            "type": "Feature",
            "id": 223,
            "properties": {
              "SecName": "廖平",
              "SecCode": "80481370",
              "Long": 108.97,
              "SecAddress": "黎塘监狱12监区沿公路向东500m清河大桥",
              "Lat": 23.381667
            },
            "geometry": {"type": "Point", "coordinates": [108.97, 23.381666666666668]}
          },
          {
            "type": "Feature",
            "id": 224,
            "properties": {
              "SecName": "伶俐",
              "SecCode": "80781130",
              "Long": 108.761944,
              "SecAddress": "广西南宁市青秀区伶俐镇",
              "Lat": 22.850833
            },
            "geometry": {"type": "Point", "coordinates": [108.761944444444438, 22.850833333333334]}
          },
          {
            "type": "Feature",
            "id": 225,
            "properties": {
              "SecName": "隆安",
              "SecCode": "80786005",
              "Long": 107.686111,
              "SecAddress": "广西南宁市隆安县城北商住区隆安水文站",
              "Lat": 23.181389
            },
            "geometry": {"type": "Point", "coordinates": [107.686111111111117, 23.18138888888889]}
          },
          {
            "type": "Feature",
            "id": 226,
            "properties": {
              "SecName": "蒙垌",
              "SecCode": "80781180",
              "Long": 109.256111,
              "SecAddress": "广西南宁市横县横州镇蒙垌村",
              "Lat": 22.679444
            },
            "geometry": {"type": "Point", "coordinates": [109.25611111111111, 22.679444444444446]}
          },
          {
            "type": "Feature",
            "id": 227,
            "properties": {
              "SecName": "南宁",
              "SecCode": "80781000",
              "Long": 108.218056,
              "SecAddress": "广西南宁市西乡塘区大学西路55-3号南宁水文站",
              "Lat": 22.826389
            },
            "geometry": {"type": "Point", "coordinates": [108.218055555555551, 22.826388888888889]}
          },
          {
            "type": "Feature",
            "id": 228,
            "properties": {
              "SecName": "蒲庙",
              "SecCode": "80781110",
              "Long": 108.486111,
              "SecAddress": "广西南宁市邕宁区蒲庙镇",
              "Lat": 22.773333
            },
            "geometry": {"type": "Point", "coordinates": [108.486111111111114, 22.773333333333333]}
          },
          {
            "type": "Feature",
            "id": 229,
            "properties": {
              "SecName": "西津",
              "SecCode": "80781170",
              "Long": 109.25,
              "SecAddress": "广西南宁市横县西津水库坝首",
              "Lat": 22.647778
            },
            "geometry": {"type": "Point", "coordinates": [109.25, 22.647777777777776]}
          },
          {
            "type": "Feature",
            "id": 230,
            "properties": {
              "SecName": "下颜（金鸡滩水库）",
              "SecCode": "80786100",
              "Long": 107.643889,
              "SecAddress": "南宁市隆安县雁江镇人渡",
              "Lat": 23.266111
            },
            "geometry": {"type": "Point", "coordinates": [107.643888888888895, 23.266111111111112]}
          },
          {
            "type": "Feature",
            "id": 231,
            "properties": {
              "SecName": "老口水库",
              "SecCode": "80781020",
              "Long": 108.111979,
              "SecAddress": "南宁市石埠街道老口电站",
              "Lat": 22.797422
            },
            "geometry": {"type": "Point", "coordinates": [108.111979, 22.797422]}
          },
          {
            "type": "Feature",
            "id": 232,
            "properties": {
              "SecName": "智信",
              "SecCode": "80785110",
              "Long": 108.028056,
              "SecAddress": "南宁市西乡塘区坛洛镇中楞渡口",
              "Lat": 22.776389
            },
            "geometry": {"type": "Point", "coordinates": [108.028055555555554, 22.776388888888889]}
          },
          {
            "type": "Feature",
            "id": 233,
            "properties": {
              "SecName": "丁当",
              "SecCode": "80786055",
              "Long": 107.968794,
              "SecAddress": "隆安县丁当水文站",
              "Lat": 23.130303
            },
            "geometry": {"type": "Point", "coordinates": [107.968794444444441, 23.130302777777779]}
          },
          {
            "type": "Feature",
            "id": 234,
            "properties": {
              "SecName": "那马",
              "SecCode": "80781310",
              "Long": 108.384444,
              "SecAddress": "南宁市良庆区那马镇那马街",
              "Lat": 22.638056
            },
            "geometry": {"type": "Point", "coordinates": [108.384444444444455, 22.638055555555557]}
          },
          {
            "type": "Feature",
            "id": 235,
            "properties": {
              "SecName": "屯六水库坝首",
              "SecCode": "80781350",
              "Long": 108.313056,
              "SecAddress": "南宁市良庆区大塘镇屯六水库",
              "Lat": 22.258611
            },
            "geometry": {"type": "Point", "coordinates": [108.31305555555555, 22.258611111111112]}
          },
          {
            "type": "Feature",
            "id": 236,
            "properties": {
              "SecName": "大王滩水库",
              "SecCode": "91000064",
              "Long": 108.237414,
              "SecAddress": "南宁市邕宁县那马镇郁江支流八尺江中游",
              "Lat": 22.471633
            },
            "geometry": {"type": "Point", "coordinates": [108.237413888888895, 22.471633333333333]}
          },
          {
            "type": "Feature",
            "id": 237,
            "properties": {
              "SecName": "大龙洞水库",
              "SecCode": "91000067",
              "Long": 108.557925,
              "SecAddress": "南宁市上林县西燕乡大龙洞村红水河支流清水河上游",
              "Lat": 23.610275
            },
            "geometry": {"type": "Point", "coordinates": [108.557925, 23.610275]}
          },
          {
            "type": "Feature",
            "id": 238,
            "properties": {
              "SecName": "仙湖水库",
              "SecCode": "91000073",
              "Long": 108.080039,
              "SecAddress": "南宁市武鸣县仙湖镇六冬村右江支流武鸣河",
              "Lat": 23.387289
            },
            "geometry": {"type": "Point", "coordinates": [108.080038888888879, 23.387288888888889]}
          },
          {
            "type": "Feature",
            "id": 239,
            "properties": {
              "SecName": "龙床",
              "SecCode": "80786060",
              "Long": 107.771065,
              "SecAddress": "隆安县乔建镇龙床村",
              "Lat": 23.090181
            },
            "geometry": {"type": "Point", "coordinates": [107.771065, 23.090181]}
          },
          {
            "type": "Feature",
            "id": 240,
            "properties": {
              "SecName": "桂江船厂码头",
              "SecCode": "80882220",
              "Long": 111.326111,
              "SecAddress": "广西梧州市钱鉴路桂江船厂码头",
              "Lat": 23.507778
            },
            "geometry": {"type": "Point", "coordinates": [111.326111111111103, 23.507777777777779]}
          },
          {
            "type": "Feature",
            "id": 241,
            "properties": {
              "SecName": "桂江一桥",
              "SecCode": "80882230",
              "Long": 111.306111,
              "SecAddress": "广西梧州市万秀区桂江一桥",
              "Lat": 23.479722
            },
            "geometry": {"type": "Point", "coordinates": [111.306111111111107, 23.479722222222222]}
          },
          {
            "type": "Feature",
            "id": 242,
            "properties": {
              "SecName": "角咀码头",
              "SecCode": "80683010",
              "Long": 110.916389,
              "SecAddress": "藤县藤州镇丽新村磨刀冲小组",
              "Lat": 23.386944
            },
            "geometry": {"type": "Point", "coordinates": [110.916388888888889, 23.386944444444445]}
          },
          {
            "type": "Feature",
            "id": 243,
            "properties": {
              "SecName": "界首",
              "SecCode": "80981000",
              "Long": 111.416111,
              "SecAddress": "梧州市塘源路梧州水文站",
              "Lat": 23.471389
            },
            "geometry": {"type": "Point", "coordinates": [111.416111111111121, 23.471388888888889]}
          },
          {
            "type": "Feature",
            "id": 244,
            "properties": {
              "SecName": "龙圩区白沙（长洲水利枢纽）",
              "SecCode": "80683030",
              "Long": 111.188889,
              "SecAddress": "广西梧州市长洲水利枢纽拦水坝上游300m的泗洲岛洲头",
              "Lat": 23.422778
            },
            "geometry": {"type": "Point", "coordinates": [111.188888888888897, 23.422777777777778]}
          },
          {
            "type": "Feature",
            "id": 245,
            "properties": {
              "SecName": "龙新小学",
              "SecCode": "80683040",
              "Long": 111.256111,
              "SecAddress": "广西梧州市长洲区西江叉河桥上游200米",
              "Lat": 23.472778
            },
            "geometry": {"type": "Point", "coordinates": [111.25611111111111, 23.472777777777775]}
          },
          {
            "type": "Feature",
            "id": 246,
            "properties": {
              "SecName": "木双镇",
              "SecCode": "80882740",
              "Long": 111.551111,
              "SecAddress": "梧州市苍梧县木双镇双贤村",
              "Lat": 23.645833
            },
            "geometry": {"type": "Point", "coordinates": [111.551111111111112, 23.645833333333332]}
          },
          {
            "type": "Feature",
            "id": 247,
            "properties": {
              "SecName": "南安",
              "SecCode": "80683020",
              "Long": 111.031111,
              "SecAddress": "广西梧州市藤县塘步镇南安村",
              "Lat": 23.435278
            },
            "geometry": {"type": "Point", "coordinates": [111.031111111111116, 23.435277777777777]}
          },
          {
            "type": "Feature",
            "id": 248,
            "properties": {
              "SecName": "深冲",
              "SecCode": "80683060",
              "Long": 111.296944,
              "SecAddress": "广西梧州市万秀区上深冲",
              "Lat": 23.468889
            },
            "geometry": {"type": "Point", "coordinates": [111.296944444444449, 23.468888888888888]}
          },
          {
            "type": "Feature",
            "id": 249,
            "properties": {
              "SecName": "水汶村",
              "SecCode": "80683190",
              "Long": 111.016944,
              "SecAddress": "岑溪县水汶镇",
              "Lat": 22.656944
            },
            "geometry": {"type": "Point", "coordinates": [111.016944444444448, 22.656944444444441]}
          },
          {
            "type": "Feature",
            "id": 250,
            "properties": {
              "SecName": "泗洲尾",
              "SecCode": "80683050",
              "Long": 111.241944,
              "SecAddress": "广西梧州市长洲区泗洲尾",
              "Lat": 23.430833
            },
            "geometry": {"type": "Point", "coordinates": [111.241944444444442, 23.430833333333336]}
          },
          {
            "type": "Feature",
            "id": 251,
            "properties": {
              "SecName": "中平村",
              "SecCode": "80882280",
              "Long": 111.008889,
              "SecAddress": "梧州市苍梧县京南镇京南大桥",
              "Lat": 23.811111
            },
            "geometry": {"type": "Point", "coordinates": [111.00888888888889, 23.811111111111114]}
          },
          {
            "type": "Feature",
            "id": 252,
            "properties": {
              "SecName": "藤州镇　",
              "SecCode": "80683320",
              "Long": 110.921389,
              "SecAddress": "梧州市藤县藤州镇中和村黎山口　",
              "Lat": 23.307222
            },
            "geometry": {"type": "Point", "coordinates": [110.921388888888899, 23.307222222222222]}
          },
          {
            "type": "Feature",
            "id": 253,
            "properties": {
              "SecName": "蒙江镇　",
              "SecCode": "80683270",
              "Long": 110.740833,
              "SecAddress": "梧州市藤县蒙江镇安和村石咀",
              "Lat": 23.478889
            },
            "geometry": {"type": "Point", "coordinates": [110.740833333333327, 23.478888888888886]}
          },
          {
            "type": "Feature",
            "id": 254,
            "properties": {
              "SecName": "岑城　",
              "SecCode": "80683360",
              "Long": 111.015833,
              "SecAddress": "岑溪市岑城镇探花村　",
              "Lat": 22.898333
            },
            "geometry": {"type": "Point", "coordinates": [111.015833333333333, 22.898333333333333]}
          },
          {
            "type": "Feature",
            "id": 255,
            "properties": {
              "SecName": "茶山水库",
              "SecCode": "80683290",
              "Long": 110.511111,
              "SecAddress": "蒙山县蒙山镇高堆村",
              "Lat": 24.227778
            },
            "geometry": {"type": "Point", "coordinates": [110.511111111111106, 24.227777777777778]}
          },
          {
            "type": "Feature",
            "id": 256,
            "properties": {
              "SecName": "新建电站",
              "SecCode": "80882810",
              "Long": 111.571944,
              "SecAddress": "广西梧州市苍梧县沙头镇参田村",
              "Lat": 24.138889
            },
            "geometry": {"type": "Point", "coordinates": [111.571944444444441, 24.138888888888889]}
          },
          {
            "type": "Feature",
            "id": 257,
            "properties": {
              "SecName": "赤水水库",
              "SecCode": "80683365",
              "Long": 110.976111,
              "SecAddress": "岑溪市岑城镇赤水村　",
              "Lat": 22.893889
            },
            "geometry": {"type": "Point", "coordinates": [110.976111111111109, 22.893888888888888]}
          },
          {
            "type": "Feature",
            "id": 258,
            "properties": {
              "SecName": "长发",
              "SecCode": "80882285",
              "Long": 111.137778,
              "SecAddress": "苍梧县京南镇长发村长发中学",
              "Lat": 23.630278
            },
            "geometry": {"type": "Point", "coordinates": [111.137777777777785, 23.630277777777778]}
          },
          {
            "type": "Feature",
            "id": 259,
            "properties": {
              "SecName": "思龙口（旺村水利枢纽）",
              "SecCode": "80882288",
              "Long": 111.213889,
              "SecAddress": "梧州市长洲区倒水镇仁义村下垌口屯",
              "Lat": 23.386111
            },
            "geometry": {"type": "Point", "coordinates": [111.213888888888889, 23.386111111111109]}
          },
          {
            "type": "Feature",
            "id": 260,
            "properties": {
              "SecName": "太平",
              "SecCode": "80607500",
              "Long": 110.688,
              "SecAddress": "梧州藤县太平镇德胜街138号",
              "Lat": 23.65425
            },
            "geometry": {"type": "Point", "coordinates": [110.688, 23.65425]}
          },
          {
            "type": "Feature",
            "id": 261,
            "properties": {
              "SecName": "象棋",
              "SecCode": "80613000",
              "Long": 110.739,
              "SecAddress": "梧州藤县象棋镇象棋街",
              "Lat": 23.1755
            },
            "geometry": {"type": "Point", "coordinates": [110.739, 23.1755]}
          },
          {
            "type": "Feature",
            "id": 262,
            "properties": {
              "SecName": "金鸡(二)",
              "SecCode": "80614000",
              "Long": 110.839944,
              "SecAddress": "梧州藤县金鸡镇洲地村金鸡水文站",
              "Lat": 23.225333
            },
            "geometry": {"type": "Point", "coordinates": [110.839944444444441, 23.225333333333332]}
          },
          {
            "type": "Feature",
            "id": 263,
            "properties": {
              "SecName": "京南(坝下二)",
              "SecCode": "80805600",
              "Long": 111.055667,
              "SecAddress": "梧州苍梧县京南镇京南电站",
              "Lat": 23.714722
            },
            "geometry": {"type": "Point", "coordinates": [111.055666666666667, 23.714722222222221]}
          },
          {
            "type": "Feature",
            "id": 264,
            "properties": {
              "SecName": "爽岛水库",
              "SecCode": "91000033",
              "Long": 111.439675,
              "SecAddress": "梧州市苍梧县梨埠镇贺江支流东安江",
              "Lat": 23.826314
            },
            "geometry": {"type": "Point", "coordinates": [111.439675, 23.82631388888889]}
          },
          {
            "type": "Feature",
            "id": 265,
            "properties": {
              "SecName": "大江口",
              "SecCode": "80718400",
              "Long": 109.665,
              "SecAddress": "钦州市浦北县寨圩镇大江口水文站",
              "Lat": 22.601111
            },
            "geometry": {"type": "Point", "coordinates": [109.665, 22.601111111111113]}
          },
          {
            "type": "Feature",
            "id": 266,
            "properties": {
              "SecName": "东场",
              "SecCode": "81482050",
              "Long": 108.778889,
              "SecAddress": "钦州市钦南区东场镇东场拦河坝",
              "Lat": 21.831111
            },
            "geometry": {"type": "Point", "coordinates": [108.778888888888886, 21.83111111111111]}
          },
          {
            "type": "Feature",
            "id": 267,
            "properties": {
              "SecName": "东兴",
              "SecCode": "81483640",
              "Long": 107.97,
              "SecAddress": "广西防城港市东兴市东兴水文站",
              "Lat": 21.537778
            },
            "geometry": {"type": "Point", "coordinates": [107.97, 21.53777777777778]}
          },
          {
            "type": "Feature",
            "id": 268,
            "properties": {
              "SecName": "防城上",
              "SecCode": "81483760",
              "Long": 108.335,
              "SecAddress": "防城镇木头滩",
              "Lat": 21.760278
            },
            "geometry": {"type": "Point", "coordinates": [108.335, 21.760277777777777]}
          },
          {
            "type": "Feature",
            "id": 269,
            "properties": {
              "SecName": "横丰",
              "SecCode": "81484050",
              "Long": 108.603056,
              "SecAddress": "钦州市钦南区尖山镇南北高速公路桥",
              "Lat": 21.898889
            },
            "geometry": {"type": "Point", "coordinates": [108.603055555555557, 21.898888888888887]}
          },
          {
            "type": "Feature",
            "id": 270,
            "properties": {
              "SecName": "红头坝",
              "SecCode": "81488380",
              "Long": 108.338889,
              "SecAddress": "防城港市防城区城南大队红头坝村红头坝断面",
              "Lat": 21.718611
            },
            "geometry": {"type": "Point", "coordinates": [108.338888888888889, 21.718611111111109]}
          },
          {
            "type": "Feature",
            "id": 271,
            "properties": {
              "SecName": "龙潭水厂",
              "SecCode": "81499130",
              "Long": 109.193056,
              "SecAddress": "北海市银海区银滩镇龙潭村",
              "Lat": 21.430278
            },
            "geometry": {"type": "Point", "coordinates": [109.19305555555556, 21.430277777777778]}
          },
          {
            "type": "Feature",
            "id": 272,
            "properties": {
              "SecName": "马口",
              "SecCode": "81480400",
              "Long": 109.605,
              "SecAddress": "玉林市博白县菱角乡南流江与 小江汇合口上游100m",
              "Lat": 21.986667
            },
            "geometry": {"type": "Point", "coordinates": [109.605, 21.986666666666668]}
          },
          {
            "type": "Feature",
            "id": 273,
            "properties": {
              "SecName": "钦北铁路桥",
              "SecCode": "81483325",
              "Long": 109.128889,
              "SecAddress": "北海市合浦县总江口闸上",
              "Lat": 21.666944
            },
            "geometry": {"type": "Point", "coordinates": [109.128888888888881, 21.666944444444447]}
          },
          {
            "type": "Feature",
            "id": 274,
            "properties": {
              "SecName": "青年水闸",
              "SecCode": "81483080",
              "Long": 108.623056,
              "SecAddress": "钦州水文站",
              "Lat": 21.956389
            },
            "geometry": {"type": "Point", "coordinates": [108.623055555555553, 21.956388888888888]}
          },
          {
            "type": "Feature",
            "id": 275,
            "properties": {
              "SecName": "在妙",
              "SecCode": "80783010",
              "Long": 107.658056,
              "SecAddress": "防城港上思县在妙镇人渡",
              "Lat": 22.1275
            },
            "geometry": {"type": "Point", "coordinates": [107.658055555555563, 22.1275]}
          },
          {
            "type": "Feature",
            "id": 276,
            "properties": {
              "SecName": "中直坝",
              "SecCode": "81488400",
              "Long": 109.303056,
              "SecAddress": "北海市合浦县常乐镇忠直坝",
              "Lat": 21.899444
            },
            "geometry": {"type": "Point", "coordinates": [109.303055555555559, 21.899444444444445]}
          },
          {
            "type": "Feature",
            "id": 277,
            "properties": {
              "SecName": "洪潮江库中心1",
              "SecCode": "81483375",
              "Long": 109.109722,
              "SecAddress": "洪潮江库中钦州",
              "Lat": 21.869722
            },
            "geometry": {"type": "Point", "coordinates": [109.109722222222217, 21.869722222222222]}
          },
          {
            "type": "Feature",
            "id": 278,
            "properties": {
              "SecName": "洪潮江库中心2",
              "SecCode": "81483377",
              "Long": 109.151944,
              "SecAddress": "北海两市交界处　",
              "Lat": 21.851111
            },
            "geometry": {"type": "Point", "coordinates": [109.151944444444453, 21.851111111111113]}
          },
          {
            "type": "Feature",
            "id": 279,
            "properties": {
              "SecName": "洪潮江坝首　",
              "SecCode": "81483380",
              "Long": 109.151111,
              "SecAddress": "北海市合浦县星岛湖乡洪潮江水库坝首　",
              "Lat": 22.016667
            },
            "geometry": {"type": "Point", "coordinates": [109.151111111111121, 22.016666666666666]}
          },
          {
            "type": "Feature",
            "id": 280,
            "properties": {
              "SecName": "灵东水库",
              "SecCode": "81483010",
              "Long": 109.393611,
              "SecAddress": "钦州市灵山县平山镇灵东水库坝址",
              "Lat": 22.459444
            },
            "geometry": {"type": "Point", "coordinates": [109.393611111111113, 22.459444444444443]}
          },
          {
            "type": "Feature",
            "id": 281,
            "properties": {
              "SecName": "板八那把桥",
              "SecCode": "81483560",
              "Long": 107.571944,
              "SecAddress": "广西防城港市防城区垌中镇板八村那把桥",
              "Lat": 21.674444
            },
            "geometry": {"type": "Point", "coordinates": [107.571944444444441, 21.674444444444447]}
          },
          {
            "type": "Feature",
            "id": 282,
            "properties": {
              "SecName": "常乐",
              "SecCode": "81406000",
              "Long": 109.416944,
              "SecAddress": "常乐镇常乐水文站",
              "Lat": 21.838333
            },
            "geometry": {"type": "Point", "coordinates": [109.416944444444454, 21.838333333333331]}
          },
          {
            "type": "Feature",
            "id": 283,
            "properties": {
              "SecName": "东兴红树",
              "SecCode": "81489540",
              "Long": 108.0,
              "SecAddress": "广西防城港市东兴市东兴镇北仑河东兴独墩岛",
              "Lat": 21.546111
            },
            "geometry": {"type": "Point", "coordinates": [108.0, 21.546111111111113]}
          },
          {
            "type": "Feature",
            "id": 284,
            "properties": {
              "SecName": "牛尾岭水库坝首",
              "SecCode": "81483385",
              "Long": 109.229444,
              "SecAddress": "北海市孙东乡西冲村牛尾岭水库坝首",
              "Lat": 21.5875
            },
            "geometry": {"type": "Point", "coordinates": [109.229444444444439, 21.5875]}
          },
          {
            "type": "Feature",
            "id": 285,
            "properties": {
              "SecName": "黄屋屯",
              "SecCode": "81415000",
              "Long": 108.523889,
              "SecAddress": "钦南区黄屋屯水文站",
              "Lat": 21.9875
            },
            "geometry": {"type": "Point", "coordinates": [108.523888888888891, 21.9875]}
          },
          {
            "type": "Feature",
            "id": 286,
            "properties": {
              "SecName": "陆屋",
              "SecCode": "81483050",
              "Long": 108.948889,
              "SecAddress": "灵山县陆屋东胜坝",
              "Lat": 22.279444
            },
            "geometry": {"type": "Point", "coordinates": [108.948888888888888, 22.279444444444444]}
          },
          {
            "type": "Feature",
            "id": 287,
            "properties": {
              "SecName": "那板水库坝首",
              "SecCode": "80785080",
              "Long": 108.001944,
              "SecAddress": "思阳镇那板水库",
              "Lat": 22.136111
            },
            "geometry": {"type": "Point", "coordinates": [108.001944444444447, 22.136111111111109]}
          },
          {
            "type": "Feature",
            "id": 288,
            "properties": {
              "SecName": "大榄江",
              "SecCode": "81483120",
              "Long": 108.578056,
              "SecAddress": "南北高速公路大榄江桥",
              "Lat": 21.908056
            },
            "geometry": {"type": "Point", "coordinates": [108.578055555555551, 21.908055555555553]}
          },
          {
            "type": "Feature",
            "id": 289,
            "properties": {
              "SecName": "小江坝首",
              "SecCode": "81411000",
              "Long": 109.605,
              "SecAddress": "石冲镇小江水库坝首",
              "Lat": 21.998611
            },
            "geometry": {"type": "Point", "coordinates": [109.605, 21.998611111111114]}
          },
          {
            "type": "Feature",
            "id": 290,
            "properties": {
              "SecName": "旺盛江水库",
              "SecCode": "91000016",
              "Long": 109.604214,
              "SecAddress": "钦州浦北县石埇镇",
              "Lat": 21.922725
            },
            "geometry": {"type": "Point", "coordinates": [109.604213888888879, 21.922725]}
          },
          {
            "type": "Feature",
            "id": 291,
            "properties": {
              "SecName": "小峰水库",
              "SecCode": "91000153",
              "Long": 108.029978,
              "SecAddress": "防城港市防城区那鄞乡防城江支流电六江",
              "Lat": 21.781428
            },
            "geometry": {"type": "Point", "coordinates": [108.029977777777773, 21.781427777777775]}
          },
          {
            "type": "Feature",
            "id": 292,
            "properties": {
              "SecName": "圭江二桥",
              "SecCode": "80683130",
              "Long": 110.368889,
              "SecAddress": "北流镇环城村圭江二桥",
              "Lat": 22.698056
            },
            "geometry": {"type": "Point", "coordinates": [110.368888888888875, 22.698055555555555]}
          },
          {
            "type": "Feature",
            "id": 293,
            "properties": {
              "SecName": "岭塘",
              "SecCode": "81480150",
              "Long": 110.231944,
              "SecAddress": "玉林市玉东湖橡胶坝",
              "Lat": 22.645278
            },
            "geometry": {"type": "Point", "coordinates": [110.231944444444451, 22.645277777777778]}
          },
          {
            "type": "Feature",
            "id": 294,
            "properties": {
              "SecName": "四良",
              "SecCode": "81790200",
              "Long": 110.288889,
              "SecAddress": "广西玉林市陆川县温泉镇四良村绕城公路桥",
              "Lat": 22.345556
            },
            "geometry": {"type": "Point", "coordinates": [110.288888888888891, 22.345555555555553]}
          },
          {
            "type": "Feature",
            "id": 295,
            "properties": {
              "SecName": "良田坝",
              "SecCode": "81790400",
              "Long": 110.226111,
              "SecAddress": "广西玉林市陆川县良田镇良田坝",
              "Lat": 22.058333
            },
            "geometry": {"type": "Point", "coordinates": [110.226111111111109, 22.058333333333334]}
          },
          {
            "type": "Feature",
            "id": 296,
            "properties": {
              "SecName": "盘龙",
              "SecCode": "81790500",
              "Long": 110.313889,
              "SecAddress": "玉林市陆川县古城镇盘龙圩",
              "Lat": 21.899444
            },
            "geometry": {"type": "Point", "coordinates": [110.313888888888883, 21.899444444444445]}
          },
          {
            "type": "Feature",
            "id": 297,
            "properties": {
              "SecName": "爽底坪",
              "SecCode": "80683380",
              "Long": 110.813889,
              "SecAddress": "杨村镇爽底坪电站拦水坝",
              "Lat": 22.581389
            },
            "geometry": {"type": "Point", "coordinates": [110.813888888888883, 22.581388888888888]}
          },
          {
            "type": "Feature",
            "id": 298,
            "properties": {
              "SecName": "苏烟水库坝首",
              "SecCode": "81489100",
              "Long": 110.138889,
              "SecAddress": "大塘镇苏烟村",
              "Lat": 22.770833
            },
            "geometry": {"type": "Point", "coordinates": [110.1388888888889, 22.770833333333332]}
          },
          {
            "type": "Feature",
            "id": 299,
            "properties": {
              "SecName": "长岐桥",
              "SecCode": "81790150",
              "Long": 110.703889,
              "SecAddress": "广东省茂名市高州市荷花镇文山村长岐桥",
              "Lat": 22.279167
            },
            "geometry": {"type": "Point", "coordinates": [110.703888888888898, 22.279166666666665]}
          },
          {
            "type": "Feature",
            "id": 300,
            "properties": {
              "SecName": "自良",
              "SecCode": "80683180",
              "Long": 110.678889,
              "SecAddress": "玉林市容县自良镇梁屋渡口",
              "Lat": 23.067222
            },
            "geometry": {"type": "Point", "coordinates": [110.678888888888892, 23.06722222222222]}
          },
          {
            "type": "Feature",
            "id": 301,
            "properties": {
              "SecName": "罗田水库坝首",
              "SecCode": "81489105",
              "Long": 109.956944,
              "SecAddress": "福绵区樟木镇罗田水库坝址",
              "Lat": 22.476111
            },
            "geometry": {"type": "Point", "coordinates": [109.956944444444446, 22.476111111111109]}
          },
          {
            "type": "Feature",
            "id": 302,
            "properties": {
              "SecName": "博白",
              "SecCode": "81405000",
              "Long": 109.976944,
              "SecAddress": "城厢镇新仲村博白水文站",
              "Lat": 22.292222
            },
            "geometry": {"type": "Point", "coordinates": [109.976944444444442, 22.292222222222225]}
          },
          {
            "type": "Feature",
            "id": 303,
            "properties": {
              "SecName": "容县水文站",
              "SecCode": "80683160",
              "Long": 110.548889,
              "SecAddress": "北流河容县水文站",
              "Lat": 22.853611
            },
            "geometry": {"type": "Point", "coordinates": [110.548888888888882, 22.853611111111114]}
          },
          {
            "type": "Feature",
            "id": 304,
            "properties": {
              "SecName": "大车",
              "SecCode": "81480100",
              "Long": 110.250947,
              "SecAddress": "北流市西埌镇大车村",
              "Lat": 22.824181
            },
            "geometry": {"type": "Point", "coordinates": [110.250947222222223, 22.824180555555554]}
          },
          {
            "type": "Feature",
            "id": 305,
            "properties": {
              "SecName": "老虎头水库",
              "SecCode": "91000027",
              "Long": 109.885964,
              "SecAddress": "玉林市博白县沙陂镇龙潭河支流跃河",
              "Lat": 21.834139
            },
            "geometry": {"type": "Point", "coordinates": [109.885963888888895, 21.834138888888887]}
          },],
      }


      },
    watch: {
      checkedLayer:{
        handler(newValue , oldValue) {
          this.showVectorLayers=[]
          newValue.forEach((item,i) =>{
            console.log(item)
            let obj={}
            obj.name=item
            this.showVectorLayers.push(obj)
           /* // console.log(i)
            /!*1:绘制多个图层，并给图层设置id*!/
            if(item=='waterStation'){
              console.log(map.getLayers())

              let data= this.waterStationData.features
              let points=[]
              for (let i=0;i<data.length;i++) {
                let coord = data[i].geometry.coordinates

                var labelCoords = ol.proj.transform([coord[0], coord[1]], "EPSG:4326", "EPSG:3857");
                var point = new ol.Feature({
                  geometry: new ol.geom.Point(labelCoords)
                });//构点
                // var point = new ol.Feature({
                //   geometry: new ol.geom.Point([coord.Long, coord.Lat])
                // });//构点
                points.push(point)
              }

              console.log(points)

              //实例化一个矢量图层Vector作为绘制层
              var source = new ol.source.Vector({
                features: points
              });
              //矢量图层
              this.positionLayer = new ol.layer.Vector({
                layerId:'waterStation',
                zIndex: 10,
                projection: 'EPSG:4326',
                source: source,
                style: new ol.style.Style({
                  fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                  }),
                  stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 10
                  }),
                  image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                      color: '#ffcf43'
                    })
                  })
                })
              });

              console.log(map)
              console.log(positionLayer)
              positionLayer.setSource(source);
              map.addLayer(positionLayer)


            }//if   over

            /!*2:根据id,删除图层*!/*/

          })


        }
      }

    }

  }
</script>
<style scoped="scoped">
#layercontrol{
  width: 93px;
  position: absolute;
  top: 60px;
  right: 168px;
  z-index: 9;
  background: #fff;
  min-height: 50px;
  /* border: solid 1px #c8d2df; */
  border-radius: 5px;
  padding: 15px;

}

</style>
