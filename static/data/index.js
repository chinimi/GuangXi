document.title = "大三";
var vectorLayer = {
// 境界(国/省/市)
// 境界(县)
// 经纬网
// 地形图
// 影像图
// 水系图
// 地名标注
// 定位高亮  
    option: {
        "layer": [{
            name: "境界(国/省/市)",
            key: "boundary"
            },
            {
                name: "县界",
                key: "county"
            },
            {
                name: "经纬网",
                key: "lonlat"
            },
            {
                name: "地形图",
                key: "ter_w"
            },
            {
                name: "影像图",
                key: "img_w"
            },
            {
                name: "水系图",
                key: "wat_w"
            },
            {
                name: "地名标注",
                key: "cva_w"
            },   
            ]
    }
}


var msg_stop = "停止(space)";
//var msg_stop="stop(space)";
var msg_play = "播放(space)";
//var msg_play="play(space)";

var msg_comperaGuide = "若要使用产品比较滑块，请使用下面的“产品”选项添加第一个比较的产品，然后拖动“滑块”按钮。";
//var msg_comperaGuide="To use product comparison slider, use the \"Add Overlay\" option below to add a second product to compare first, and then click the \"Slid(e)r\" button again";

var msg_expgifGuide = "在动画导出前,请确保动画在页面可以快速播放!";
//var msg_expgifGuide="Before the animation is exported, make sure the animation can be played quickly on the page!";

var msg_maxZoom = "已到最大缩放级别";
//var msg_maxZoom="Has reached the maximum zoom level";

var msg_hidden = "隐藏";
//var msg_hidden="Hide";

var msg_loading = "加载中...";
//var msg_loading="load...";

var msg_process_info = "生成进度";

var msg_process_success = "执行成功！";

var msg_expGif = "动画导出(U)";

var msg_expPng = "图片导出(U)";
