
// import stationStore from '../../store/map/comp/stationData'
// import map from '../../store/map/comp/map'
export var calculateLocaltion= function(num) {

    var str = "";
    num =num.toFixed(2);
    num = parseFloat(num);
    num = (num + 180 ) % 360 - 180;
    if(num < -180){
            num = (num - 180 ) % 360 + 180;
    }

    num = num+"";
   // num = num.substr(0,5);
    var split = num.split(".");
    var degree = split[0];
    var fen = split.length > 1 ? split[1].substr(0,2)  : "";
    if (fen=="")
    {
        str = degree + fen+"°";
    }
    else{
        str = degree + "." + fen+"°";
    }



    return str;
}


var windLv = [[0.3,1.5],[1.6,3.3],[3.4,5.4],[5.5,7.9],[8.0,10.7],[10.8,13.8],[13.9,17.1],[17.2,20.7],
              [20.8,24.4],[24.5,28.4],[28.5,32.6],[32.7,36.9],[37,41],[42,45],[46,51],[52,59],[60,69],[70]]

function isBetween(min , max , target){
    if(min != null && max != null) return target >= min && target <= max
    else if(min != null && max == null)return target >= min
    else if(min == null && max != null) return target <= max
    else return false;
}

export var getWindLv = function getWindLv(speed){
    for(var i = 0 ; i < windLv.length ; i++){
        if(isBetween(windLv[i][0] , windLv[i][1] , speed)) return i
    }
}

/**
 * 获取两个数组的不同元素
 * @param{Array}a
 * @param{Array}b
 */
export var getDifferentValue=function(a,b){
    let resultArr=a.concat(b).filter(function(v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v);
    });
    return resultArr[0]
}
// 鼠标悬浮方法
export const onPointerMove=function(e){
	let pixel,ishit;
	// 如果是拖动地图造成的鼠标移动，则不作处理

	pixel = map.getEventPixel(e.originalEvent);
	ishit = map.hasFeatureAtPixel(pixel);
	map.getTargetElement().style.cursor = ishit ? 'pointer' : '';
}
// 选择器方法_click  ActiveLayer
// export const createSelectByClick=function(){
//     let layerArr=[stationStore.state.OB_chinaArea_surface_stationLayer.layers[0]];
// 	var selectClick = new ol.interaction.Select({
// 		condition:ol.events.condition.click,
// 		layers:layerArr,   //默认不加，会对地图中的所有图层执行单机选中事件
//         multi:false,
// 		hitTolerance:5
// 	});
// 	return selectClick;
// }


//edit by yuanguoyan  修改点击要素显示消失问题
export const createSelectByClick=function(){
        let layer = stationStore.state.OB_chinaArea_surface_stationLayer.layers[0];
        let styleFunction = layer.getStyleFunction();
        let select = new ol.style.Style({
            image: new ol.style.Circle({
              radius: 6,
              fill: new ol.style.Fill({
                color: "blue",
              }),
              stroke: new ol.style.Stroke({ 
                  color: 'white', 
                  width: 1.5 
              })
            })
          });
        var selectClick = new ol.interaction.Select({
            condition:ol.events.condition.click,
            layers:[layer],   //默认不加，会对地图中的所有图层执行单机选中事件
            style:function (feature) {
                let orgin = styleFunction(feature);
                orgin.push(select);
                return orgin;
              },
            multi:false,
            hitTolerance:5
        });
        return selectClick;
    }
export const createEnvironmentSelectByClick=function(){
  // console.log("环境质量监测图层显示弹窗")
  let layer = stationStore.state.environmenStationLayer.layers[0];
  // console.log(layer)
  let styleFunction = layer.getStyleFunction();
  let select = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 6,
      fill: new ol.style.Fill({
        color: "blue",
      }),
      stroke: new ol.style.Stroke({
        color: 'white',
        width: 1.5
      })
    })
  });
  var selectClick = new ol.interaction.Select({
    condition:ol.events.condition.click,
    layers:[layer],   //默认不加，会对地图中的所有图层执行单机选中事件
    style:function (feature) {
      let orgin = styleFunction(feature);
      orgin.push(select);
      return orgin;
    },
    multi:false,
    hitTolerance:10
  });
  return selectClick;
}

