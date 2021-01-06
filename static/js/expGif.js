var progressbar = $("#progressbar" );
var progressLabel = $(".progress-label" );
progressbar.progressbar({
      value: false,
      change: function() {
    	  progressLabel.text(msg_process_info+" "+progressbar.progressbar( "value" ) + "%");
      },
      complete: function() {
    	  progressLabel.text(msg_process_success);
    	  progressbar.hide();
    	  $("#message_download_info").show();
      }
});




var progressFalg = false;
function progress(total , now) {
	$.ajax({type: "POST",url: root_url+"/data/geos.jsondata",data:{"type":"get_exp_process_value","t":randomChar(5)},dataType: "json",
	success: function (data){
		   progressbar.progressbar("value", data.progressValue);
		   if (data.progressValue < 100 && progressFalg) {
		       setTimeout(progress, 1000);
		   }
	  	}, error: function () {
			progressFalg = false;
	       	console.log("ERROR occurred in get_exp_process_value()")
	    }
	})
}

var stopProgress = function(){
	progressFalg = false;
	progressbar.hide()
}

function expGifMethod(x1,y1,x2,y2 , expGifObj){
	if(x2<=x1 || y2 <= y1){
		x1 = null;x2 = null;y1 = null;y2 = null;
	}
	let projection = projectionAttr.projection;
	let isPlay = expGifObj.getIsPlay
	expGifObj.get

	var origin = map.getPixelFromCoordinate([projection.extent_[0],projection.extent_[3]]);
	if(x1 != null){
		origin[0] = origin[0] - x1
	}
	
	if(y1 != null){
		origin[1] = origin[1] - y1
	}

	var imageRequestModel = {};
	var listStr = [];
	function transToString(value ){
		listStr.push(value+"")
	}
	list.forEach(transToString); 
	imageRequestModel.dateList = listStr;
	imageRequestModel.isBjTime = is_bj_time;
	imageRequestModel.pauseTime = isPlay == true ? 0 : list[loopIndex];
	imageRequestModel.speed = frameRate;
	imageRequestModel.satellite = queryParamSatellite;
	imageRequestModel.vectorPath = queryParamSatellite+"/"+url_parameters.type+"/white/20171201000000/";
	imageRequestModel.tileSize = baseLayerList[0].getSource().getTileGrid().getTileSize();
	imageRequestModel.sec = queryParamType;
	var image = {};
	imageRequestModel.image = image;
	image.height = y1 == null ? $(window).height() : y2 - y1;
	image.width = x1 == null ? $(window).width() : x2 - x1;
	image.zoomX = origin[0];
	image.zoomY = origin[1];
	image.list = [];
	


	var bands = [queryParamBand , subjoinLayerBand];

	createModelList(bands , 0 , image.list)
	//TODO 是否加原始分辨率
	var isScoure = $("#isSource").is(':checked');
    if(isScoure){
		var current = view.getZoom();
		current = Math.floor(current)
		var baseProducts = getNameByValue(queryParamBand);
		var max =  baseProducts.zoom_level_adjust
        var offset = max - current;
		offset = Math.pow(2,offset)
        
		var originScoure = getCoordinateByResolution(resolutions[max] , [projection.extent_[0],projection.extent_[3]]);
		
		var top = map.getCoordinateFromPixel([x1,y1])
		var topOriginScouce = getCoordinateByResolution(resolutions[max] , [top[0],top[1]]);

		var scourceImage = {};
		imageRequestModel.scourceImage = scourceImage;
		scourceImage.height = offset * image.height;
		scourceImage.width = offset * image.width;
		scourceImage.zoomX = originScoure[0] - topOriginScouce[0];
		scourceImage.zoomY = originScoure[1] - topOriginScouce[1];
		scourceImage.list = [];
		createModelList(bands , 1 , scourceImage.list)
	}


   // imageRequestModel.dateList = ["20190510000000","20190510001500","20190510010000","20190510020000","20190510024500","20190510030000"];
	//imageRequestModel.pauseTime = isPlay == true ? 0 : "20190510030000"; 
	
	var timeList = new Array();
	$.each(list, function(index , value) {
		timeList.push(value + "");
	});
	
	
    var request_data={"type":"expGif2",
    		"imageRequestModel": JSON.stringify(imageRequestModel),
    }
    start_progress();
    $.ajax({
        type: "POST",
        url: root_url+"/data/geos.jsondata",
	    //url: "http://localhost:8088/geofy/data/geos.jsondata",
	   data:request_data,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function (t) {
			progressFalg = false;
        	var expUrls = t.exp_gif_path.split(",")
        	$("#download_Url").html("<a href='"+rootURL + expUrls[0]+"' target='_blank'>当前分辨率图</a>");
        	// $("#download_Url").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='"+rootURL + expUrls[1]+"' target='_blank'>缩略图</a>");
			if(expUrls.length == 3){
				$("#download_Url").append("<br/> <a href='"+rootURL + expUrls[2]+"' target='_blank'>原始分辨率图</a>");
			}
			
        	$("#download_Url").css("display" , "block")
        	progressbar.hide()
        }, error: function () {
            console.log("ERROR occurred in expGif()")
        }
    })
	
}



var getCoordinateByResolution = function(resolution , coordinate){
	var transformList = getTransform(resolution);
	return transform(transformList , coordinate);
}

/***
 * 
 * 获得当前分辨率下的某个坐标的 piexl
 * 
 */
function getTransform(resolution){
	var transform = [];
	var frameState = map.frameState_;
	var viewState = frameState.viewState;

	compose ( transform,
	frameState.size[0] / 2, frameState.size[1] / 2,
	1 / resolution, -1 / resolution,
	-viewState.rotation,
	-viewState.center[0], -viewState.center[1]);

	return transform;
}


function transform(transform, coordinate) {
	var x = coordinate[0], y = coordinate[1];
	coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
	coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
	return coordinate;
  };

/***
 * transform , 容器
 * dx1 宽 / 2
 * dy1 高 / 2
 * sx  1 / x方向分辨率 
 * sy  1 / y方向分辨率 
 * angle 旋转角度
 * dx2 中心点 x值
 * dy2 中心点 y值
 */
function compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
	var sin = Math.sin(angle);
	var cos = Math.cos(angle);
	transform[0] = sx * cos;
	transform[1] = sy * sin;
	transform[2] = -sx * sin;
	transform[3] = sy * cos;
	transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
	transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
	return transform;
};

var createModelList =  function(bands , type , list){
	$.each(bands, function(index , value) {
		var imageModel = createImageModel(index , value , type)
		if(imageModel){
			list.push(imageModel)
		}
	 })
}

/***
 * value 显示产品的id
 * index 若为0则表示基础图层 , 否为叠加图层
 * type  类型  0 正常 ;  1 原图
 */
function createImageModel(index , value , type){
	var imageModel= {};
	
	var layerTiles = new Array();
	var products = getNameByValue(value);
	if(products == null){
		return ;
	}
	imageModel.name = products.product_title;
	imageModel.colorbars = products.color_table_name;
	imageModel.path = queryParamSatellite + "---" + url_parameters.type + "/" + value + "/";
	if(index == 0){
		imageModel.opacity = layerVisi ? opa : 0
	}else{
		imageModel.opacity = subLayerVisi ? subOpa : 0
	}
	var zoom =  products.zoom_level_adjust;
	var current = null;
	if(type == 0){
		current = view.getZoom();
		current = Math.floor(current)
		if(current < zoom){
			zoom = current;
		}
	}else{
		var baseProducts = getNameByValue(queryParamBand);
		current =  baseProducts.zoom_level_adjust;
		current = Math.floor(current)
		if(current < zoom){
			zoom = current;
		}
	}
	imageModel.scale = Math.pow(2,current-zoom)
	calculationShowTile(products , layerTiles , zoom);
	imageModel.tiles = layerTiles;
	return imageModel;
}
	


function calculationShowTile(showTiles , nowZoom){
	var show = setTimeSize % pressure;
	var baseShowLayer = baseLayerList[show];
	var baseSource = baseShowLayer.getSource();
	var tileGrid = baseSource.getTileGrid();
	
	var width = $(window).width() * 1.2;
	var height = $(window).height() * 1.2;
	var startWidth = 0 - $(window).width() * 0.1;
	var startHeight = 0 -$(window).height() * 0.1;
	
	var a = map.getCoordinateFromPixel([startWidth,startHeight + startHeight]);
	var b = map.getCoordinateFromPixel([startWidth, height + startHeight]);
	var c = map.getCoordinateFromPixel([startWidth + width, startHeight + startHeight]);
	var d = map.getCoordinateFromPixel([startWidth + width, height + startHeight]);
	
	var aaa = [a,b,c,d];
	var tiles = new Array();	
	var allTilesSize = Math.pow(2 ,nowZoom);
	var minX = allTilesSize ,
	    minY = allTilesSize ,
	    maxX = 0 ,
	    maxY = 0 ;
	$.each(aaa, function(index , value) {
		var tile = [];
		tileGrid.getTileCoordForCoordAndZ(value ,nowZoom ,tile);
		var z = tile[0];
       	var y = tile[1];
       	var x = 0 - tile[2] - 1;
       	if(x < minX){
       		minX = x;
       	}
       	if(y < minY){
       		minY = y;
       	}
        if(x > maxX){
       		maxX = x;
       	}
       	if(y > maxY){
       		maxY = y;
       	}
       	
       	tile = [z , x , y];
	});
	

	if(minX < 0){
		minX = 0;
	}
	if(minY < 0){
		minY = 0;
	}	
	if(maxX > allTilesSize){
		maxX = allTilesSize;
	}
	if(maxY > allTilesSize){
		maxY = allTilesSize;
	}
	console.log([minX , minY , maxX , maxY]);
	for(var x = minX ; x <= maxX ; x++){
		for(var y = minY ; y <= maxY ; y++){
			var showTile = leadingZeros(nowZoom , 2) + "/" + leadingZeros(x , 3) + "_" + leadingZeros(y , 3) + ".png";
			showTiles.push(showTile);
		}
	}
	
}

var start_progress = function() {
	progressFalg = true;
	$("#download_Url").html("");
	$("#message_download_info").hide(),
	progressLabel.text(msg_process_info + " 0%"),
	progressbar.show(),
	setTimeout(progress, 1000)
}

/**
* 将二维数组转为 json 字符串
*/
function encodeArray2D(obj) {
	var array = [];
	for (var i = 0; i < obj.length; i++) {
		array[i] = '[' + obj[i].join(',') + ']';
	}
	return '[' + array.join(',') + ']';
}

export default {
	createModelList:createModelList,
	getCoordinateByResolution:getCoordinateByResolution,
	start_progress:start_progress,
	stopProgress:stopProgress,
}
