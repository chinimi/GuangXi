var zoologyTableData = [
  {
    num: "1",
    descriptor: "氧平衡过程：动植物呼吸作用",
    unit: "/day",
    value: "",
    number: "11",
    descriptor1: "沉积过程：有机物沉降速率",
    unit1: "m/day",
    value1: "",
  },
  {
    num: "2",
    descriptor: "氧平衡过程：光合作用最大氧速率",
    unit: "/day",
    value: "",
    number: "12",
    descriptor1: "沉积过程：临界流速",
    unit1: "m/s",
    value1: "",
  },
  {
    num: "3",
    descriptor: "氧平衡过程：动植物呼吸作用",
    unit: "-",
    value: "",
    number: "13",
    descriptor1: "氧平衡常数：BOD氧化速率",
    unit1: "gNH4/gBOD",
    value1: "",
  },
  {
    num: "4",
    descriptor: "一阶降解系数（20℃）",
    unit: "/day",
    value: "",
    number: "14",
    descriptor1: "氧平衡常数：植物吸收氨氮常数",
    unit1: "无量纲",
    value1: "",
  },
  {
    num: "5",
    descriptor: "溶解氧的半饱和浓度",
    unit: "mg/L",
    value: "",
    number: "15",
    descriptor1: "氮平衡常数：细菌吸收氨氮常数",
    unit1: "无量纲",
    value1: "",
  },
  {
    num: "6",
    descriptor: "氧平衡过程：反应常数1",
    unit: "/day",
    value: "",
    number: "16",
    descriptor1: "氮化：一二阶反应常数",
    unit1: "无量纲",
    value1: "",
  },
  {
    num: "7",
    descriptor: "氧平衡过程：反应常数2",
    unit: "/day",
    value: "",
    number: "17",
    descriptor1: "氮化：氨氮讲解系数（20度）",
    unit1: "m/s",
    value1: "",
  },
  {
    num: "8",
    descriptor: "氧平衡过程：反应常数3",
    unit: "/day",
    value: "",
    number: "18",
    descriptor1: "脱氮：氮化需氧量",
    unit1: "gO2/gHN4",
    value1: "",
  },
  {
    num: "9",
    descriptor: "沉积过程：底泥耗氧量",
    unit: "g/㎡/day",
    value: "",
    number: "19",
    descriptor1: "脱氮：半饱和常数",
    unit1: "mg/L",
    value1: "",
  },
  {
    num: "10",
    descriptor: "沉积过程：有机物在悬浮",
    unit: "g/㎡/day",
    value: "",
    number: "20",
    descriptor1: "脱氮：氮气释放常数",
    unit1: "/day",
    value1: "",
  },

]
var roughnessTableData = [
  {
    date: "第一类 小河（汛期最大水面宽度30m）",
    name: "",
    address: "",
    max: ""
  },
  {
    date: "1、平原河流",
    name: "",
    address: "",
    max: ""
  },
  {
    date: "（1）清洁，顺直，无沙滩，无谭",
    name: "0.025",
    address: "0.030",
    max: "0.033"
  },
  {
    date: "（2）清洁，顺直，无沙滩，无谭，但多石多草",
    name: "0.030",
    address: "0.035",
    max: "0.040"
  },
  {
    date: "（3）清洁，弯曲，稍许淤滩和潭坑",
    name: "0.033",
    address: "0.040",
    max: "0.045"
  },
  {
    date: "（4）清洁，弯曲，稍许淤滩和潭坑，但有草石",
    name: "0.035",
    address: "0.045",
    max: "0.050"
  },
  {
    date: "（5）清洁，弯曲，稍许淤滩和潭坑，有草石，有草石，但水深较浅，河堤度多变，平面上回流区较多",
    name: "0.040",
    address: "0.045",
    max: "0.050"
  },
  {
    date: "（6）清洁，弯曲，稍许：淤滩和潭坑，但有草石并多石",
    name: "0.045",
    address: "0.050",
    max: "0.060"
  },
  {
    date: "（7）多滞流间段，多草，有深潭",
    name: "0.050",
    address: "0.070",
    max: "0.080"
  },
  {
    date: "（8）多丛草河段，多深潭，或草木滩地上过洪",
    name: "0.075",
    address: "0.100",
    max: "0.015"
  },
  {
    date: "2、山区河流（河槽无草树，河岸较陡，岸坡树丛过洪时淹没）",
    name: "",
    address: "",
    max: ""
  },
  {
    date: "（1）河底：砾石，卵石间有孤石",
    name: "0.030",
    address: "0.040",
    max: "0.050"
  },
  {
    date: "（2）河底：卵石和大孤石",
    name: "0.040",
    address: "0.050",
    max: "0.070"
  },
]

var convectionTable =  [
  {
    indicator: "CODcr",
    minmum: "0.5",
    maxmum: "0.05",
  },
  {
    indicator: "BOD",
    minmum: "1",
    maxmum: "0.3",
  },
  {
    indicator: "NH3-N",
    minmum: "0.8",
    maxmum: "0.05",
  },
  {
    indicator: "CODmn",
    minmum: "0.72",
    maxmum: "0.008",
  },
  {
    indicator: "NH4-N",
    minmum: "0.95",
    maxmum: "0.002",
  },
  {
    indicator: "TN",
    minmum: "0.73",
    maxmum: "0.002",
  },
  {
    indicator: "TP",
    minmum: "0.68",
    maxmum: "0.011",
  },

]
var twoconvectionTable =  [
  {
    indicator: "CODcr",
    minmum: "0.5",
    maxmum: "0.05",
  },
  {
    indicator: "BOD",
    minmum: "1",
    maxmum: "0.3",
  },
  {
    indicator: "CODmn",
    minmum: "0.72",
    maxmum: "0.008",
  },
  {
    indicator: "NH4-N",
    minmum: "0.95",
    maxmum: "0.002",
  },
  {
    indicator: "TN",
    minmum: "0.73",
    maxmum: "0.002",
  },
  {
    indicator: "TP",
    minmum: "0.68",
    maxmum: "0.011",
  },

]

export default {
  roughnessTableData:roughnessTableData,
  zoologyTableData:zoologyTableData,
  convectionTable:convectionTable,
  twoconvectionTable:twoconvectionTable,
}

