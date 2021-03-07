

//所有的地图服务配置可以写到这里面
var map=null

// 天地图URL
var tdtURL  =  "http://t{0-7}.tianditu.gov.cn"; //use
// 基础地图
var baseMap = "http://112.26.122.200:7080/arcgis/rest/services/guangxi3/MapServer"
//方案模型管理
// var modelURL = "http://112.26.122.200:8082/RiverChiefWQWebServer"
var modelURL = "http://139.196.41.243/RiverChiefWQWebServer"

var baseMap
//var baseMap = "http://139.196.41.243:6080/arcgis/rest/services/guangxiwgs84/MapServer"
// var baseMap = "http://112.26.122.200:6080/arcgis/rest/services/guangxi3/MapServer"

 window.ol = ol;
 window.map = map;
var  mapcenter=[]
/*
在文件的开始先定义一个对象
*/
// const  globalVar = {}
// // 要全局的变量的话
// globalVar.map =null
//
// globalVar.tdtURL=  "http://t{0-7}.tianditu.gov.cn"; //use
// globalVar.baseMap=  "http://112.26.122.200:6080/arcgis/rest/services/guangxi3/MapServer"
//
// export default globalVar

/*table表渲染变量*/
/*tab1  水文水资源指标(HD)*/
var FDr =null
var EFr = null
var IFDr = null


var HDr =null

/*tab2  物埋结构准则层(PF)*/
var RSr=null
var PFr=null
var RCr =null

var BKSr=null
var RVSr =null
var RDr = null


/*tab3*/
var DOr_ =null
var OCPr_ =null
var HMBr_ =null
var BCPr_ = null

var WQr_ = null



/*tab4*/
var PHPr =null
var FOEr =null
var EDr =null
var Alr =null




var WFZr =null
var WRUr =null
var FLDr =null
var PPr = null

var SSr =null
var RElir=null
var RElr= null
var RHlr =null

/*河段公示牌adCode*/
currentRiverId=null

// 遥感影像反演
/////////////////////
/////////////////////////////


