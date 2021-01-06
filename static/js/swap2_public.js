var satelliteObj;
var pressure = is_phone ? 6 : 9;
var visibilityNull = 0
var visibilityZero = 0.0001
var xianVector = null;
var productRoute = null;



/**
 * 参数初始化
 * **/
function getQueryStringAsObject() {
	var e, t, o, r, a, l, i, n = {},
		s = function(e) {
			return decodeURIComponent(e).replace(/\+/g, " ")
		},
		c = decodeURI(window.location.search.substring(1)),
		u = /([^&;=]+)=?([^&;]*)/g
	for(a = function(e) {
			return "object" != typeof e && (t = e, e = {}, t && Array.prototype.push.call(e, t)),
				e
		}; o = u.exec(c);)
		e = o[1].indexOf("["),
		i = s(o[2]),
		0 > e ?
		(r = s(o[1]), n[r] ? (n[r] = a(n[r]), Array.prototype.push.call(n[r], i)) : n[r] = i) :
		(r = s(o[1].slice(0, e)), l = s(o[1].slice(e + 1, o[1].indexOf("]", e))), n[r] = a(n[r]), l ? n[r][l] = i : Array.prototype.push.call(n[r], i))
	return n
}

/**
 * 校验路径参数,剔除多余的参数
 * **/
function validateUrlParameters() {
	return $.each(url_parameters, function(e, t) {
		-1 == $.inArray(e, ["hide","index", "x", "y", "z", "area", "satellite", "type", "band", "duration", "baseVisib", "contrast", "subVisib", "subBand", "speed" , "swipeValue" , "startTime" , "endTime" , "interval" , "isPlay" ,"opa" , "subOpa" , 'pro' , "areaCode","c"]) && delete url_parameters[e]
	})
}
/**
 * 初始化路径参数
 * **/
function initUrlParameters() {
	$.each(url_parameters, function(e, t) {
		if(e == "index") {
			loopIndex = url_parameters.index;
		} else if(e == "x") {
			centerX = url_parameters.x;
		} else if(e == "y") {
			centerY = url_parameters.y;
		} else if(e == "z") {
			zoom = url_parameters.z;
		} else if(e == "area") {
			areaLineChecked = url_parameters.area;
		} else if(e == "satellite") {
			queryParamSatellite = url_parameters.satellite
		} else if(e == "type") {
			queryParamType = url_parameters.type;
		} else if(e == "band") {
			queryParamBand = url_parameters.band;
		} else if(e == "duration") {
			queryParamNum = url_parameters.duration;
		} else if(e == "baseVisib") {
			layerVisi = eval( url_parameters.baseVisib );
		} else if(e == "contrast") {
			webSliderChecked = url_parameters.contrast;
		} else if(e == "subVisib") {
			subLayerVisi = eval( url_parameters.subVisib );
		} else if(e == "subBand") {
			subjoinLayerBand = url_parameters.subBand;
		} else if(e == "speed") {
			frameRate = 0 - url_parameters.speed * 10;
			if(url_parameters.speed >= -100 && url_parameters.speed <= -20){
				frameRate = 0 - url_parameters.speed * 10;
			}else{
				url_parameters.speed = -80
				frameRate = 0 - url_parameters.speed * 10;
			}
		} else if(e == "swipeValue") {
			swipeValue = url_parameters.swipeValue;
		}else if(e == "startTime") {
			startTime = url_parameters.startTime;
		}else if(e == "endTime") {
			endTime = url_parameters.endTime;
		}else if(e == "interval") {
			queryParamInterval = url_parameters.interval;
		}else if(e == "isPlay") {
			isPlay = eval(url_parameters.isPlay);
		}else if(e == "opa"){
			opa = url_parameters.opa
		}else if(e == "subOpa"){
			subOpa = url_parameters.subOpa
		}else if(e == "hide"){
			isHide = parseInt( url_parameters.hide )
		}else if(e == 'pro'){
			pro = url_parameters.pro
		}else if(e == 'areaCode'){
			areaCode = url_parameters.areaCode
		}
	})
	satelliteObj = getSatellite(queryParamSatellite)
	resolutions = satelliteObj.pro[pro].sectors[queryParamType].resolutions
	projection = satelliteObj.pro[pro].sectors[queryParamType].projection
	tileGrid = satelliteObj.pro[pro].sectors[queryParamType].tileGrid
	extent = satelliteObj.pro[pro].sectors[queryParamType].extent


	projectionAttr.projection = projection
	projectionAttr.resolutions = resolutions
	projectionAttr.tileGrid = tileGrid
	projectionAttr.extent = extent
}

/**
//TODO 初始化页面
*/
function init(){
	$.extend(url_parameters, getQueryStringAsObject());
	url_parameters = validateUrlParameters();
	initUrlParameters();
	initFoot();
	//下拉框---卫星
	$.each($(productJson.satellites) , function(t ,satellite){
		if(satellite.value == url_parameters.satellite){
			$('#satelliteSelectorChange').append("<option selected='selected' value="+satellite.value+">"+satellite.name+"</option>");
			var sectors = satelliteObj.pro[pro].sectors
			for(var key in satelliteObj.pro[pro].sectors){
				var sector = sectors[key];
				if(key == queryParamType){
					$('#productSelectorChange').append("<option selected='selected' value="+key+">"+sector.sector_title+"</option>");
				}else{
					$('#productSelectorChange').append("<option value="+key+">"+sector.sector_title+"</option>")
				}
			}
			
			for(var proKey in  satellite.pro){
				var proObj = satellite.pro[proKey]
				if(proKey == pro){
					$('#projectionChange').append("<option selected='selected' value="+proKey+">"+proObj.title+"</option>");
				}else{
					$('#projectionChange').append("<option value="+proKey+">"+proObj.title+"</option>")
				}
			}
			
			
			$.each($(satellite.products), function(t ,bandObj) {
				if(bandObj.area.contains(queryParamType )){
					if(bandObj.name == queryParamBand){
						$('#sectorSelectorBand').append("<option selected='selected' value="+bandObj.name+">"+bandObj.product_title+"</option>")
					}else{
						$('#sectorSelectorBand').append("<option value="+bandObj.name+">"+bandObj.product_title+"</option>")
					}
				}
			});
			
			$.each($(satellite.overlay), function(t ,bandObj) {
				if(bandObj.area.contains(queryParamType )){  	
					if(bandObj.name == subjoinLayerBand){
						$('#sectorSelectorOverlay').append("<option selected='selected' value="+bandObj.name+">"+bandObj.product_title+"</option>")
					}else{
						$('#sectorSelectorOverlay').append("<option value="+bandObj.name+">"+bandObj.product_title+"</option>")
					}
				}
			});
		}else{
			$('#satelliteSelectorChange').append("<option value="+satellite.value+">"+satellite.name+"</option>")
		}
	});

	$.each($(productJson.number_of_images_options) , function(t ,e){
		if(e == queryParamNum){
			$('#productSelectorTime').append("<option selected='selected' value="+e+">"+e +"</option>")
		}else{
			$('#productSelectorTime').append("<option value="+e+">"+e+"</option>")
		}
	});
	
	var minutes = getSectors(queryParamType).minutes_between_images
	$.each($(productJson.time_step_options) , function(t ,e){
		if(e == queryParamInterval){
			$('#timeStepSelectorChange').append("<option selected='selected' value="+e+">"+e * minutes+" min</option>")
		}else{
			$('#timeStepSelectorChange').append("<option value="+e+">"+e * minutes + " min</option>")
		}
	});
	
	projection = satelliteObj.pro[pro].sectors[queryParamType].projection
	getLatestTimes()
}

var pauseType = 0;

/**
 * 查询时间列表,显示列表
 * */
// ts  为时间间隔  n * ms  中的n
 function getLatestTimes() {
	 stop();
     $.ajax({
        type: "GET",
        url: root_url+"/data/geos.jsondata",
        data:{"type":"latest_times",
        	    "st":startTime && endTime && parseInt(startTime) > parseInt(endTime) ? startTime : endTime,
        		"et":startTime && endTime && parseInt(startTime) > parseInt(endTime) ? endTime : startTime,
        		"sat":queryParamSatellite,
        	 	"sec":queryParamType,
        	 	"ts":queryParamInterval,
        	 	"im":queryParamNum,
				"interval":getSectors(queryParamType).minutes_between_images,
        	 	"product_name":queryParamBand},
        dataType: "json",
        success: function (e) {
        	list = $(e.timestamps_int).toArray()
        	//历史数据查询模式时,过滤掉时间之外的数据
        	if(startTime && endTime){
				var minTime = parseInt(startTime) < parseInt(endTime) ? startTime : endTime
				minTime = parseInt(minTime)
        		var flag = true
	        	while(flag){
	        		var pop = list.pop()
	        		if(pop >= minTime || pop == undefined){
	        			flag = false
	        			list.push(pop)
	        		}
	        	}
	        	var maxTime = parseInt(startTime) > parseInt(endTime) ? startTime : endTime
				    maxTime = parseInt(maxTime)
        		flag = true
	        	while(flag){
	        		var shift = list.shift()
	        		if(shift <= maxTime){
	        			flag = false
	        			list.unshift(shift)
	        		}
	        	}
        	}
        	list = list.reverse()
        	getShowData(e.timestamps_int)
			getSubShowData(e.timestamps_int)
			
			if(isPlay){
				play();
			}else{
				setNewImage(loopIndex);
			}
        }, error: function (e, t, o) {}
    })
    
    asynOnLine()
}

/**
 * 主图层显示列表初始化
 * */
function getShowData() {
		if(setTimeSize!= 0 ){
			setTimeSize = 0;
		}
		$("#imageSlider").slider({ 
			value: loopIndex,
			min: 0,
			max: list.length - 1,
			step: 1,
			slide: function(e, t) {
				timeSliderChange(e, t)
			},
			change: function(e, t) {
				timeSliderChange(e, t)
			}
		});
		
		//删除历史图层
		$.each($(baseLayerList), function(e , t) {
			var a = collection.remove(t);
		});
		
		baseLayerList = new Array();
		var value = getNameByValue(queryParamBand);
		var max = value.zoom_level_adjust;

		var subTileGrid = new ol.tilegrid.TileGrid({
            extent: projection.getExtent(),
            resolutions: tileGrid.getResolutions().slice(0,max+1),
            tileSize: tileGrid.getTileSize(0)
          })
		
		//var now = loopIndex;
		for(var i = 0 ; i < pressure ; i++){
			var baseLayer ;
			if(i == 0){
				baseLayer =  createBaseLayer(opa , value , subTileGrid);
			}else{
				baseLayer =  createBaseLayer(visibilityZero , value , subTileGrid);
			}
			baseLayer.setVisible(layerVisi)
			baseLayerList[i] = baseLayer;
			collection.insertAt(i,baseLayer);
		}
		
		var t = getNameByValue(queryParamBand);
		if(t){
			resizeColorBar(t.color_table_name , true , 1);
		}
	
}

/**
 * 叠加图层显示列表初始化
 * */
function getSubShowData() {
	if(subjoinLayerBand != null && subjoinLayerBand != ""){
			//删除历史图层
			$.each($(subjoinLayerList), function(e , t) {
				var a = collection.remove(t);
			});
			
			subjoinLayerList = new Array();
			
			var value = getNameByValue(subjoinLayerBand);
			var max = value.zoom_level_adjust;
			

			var subTileGrid = new ol.tilegrid.TileGrid({
                extent: projection.getExtent(),
                resolutions: tileGrid.getResolutions().slice(0,max+1),
                tileSize: tileGrid.getTileSize(0)
              }) 

			for(var i = 0 ; i < pressure ; i++){
				var baseLayer ;
				if(i == 0){
					baseLayer =  createBaseLayer(subOpa , value , subTileGrid);
				}else{
					baseLayer =  createBaseLayer(visibilityZero , value , subTileGrid);
				}
				baseLayer.setVisible(subLayerVisi)
				subjoinLayerList[i] = baseLayer;
				collection.insertAt(i + pressure,baseLayer);
			}
			
			//如果有对比  则添加对比
			if(webSliderChecked == 1){
				addSliderEvent();
			}
	}
	var t = getNameByValue(subjoinLayerBand);
	if(t != null){
		resizeColorBar(t.color_table_name , true , 2);
	}
}

function timeSliderChange(e, t) {
	//图片变更
	loopIndex = t.value;
	if(e.originalEvent != null) {
		setNewImage(loopIndex);
		stop();
	}
	
}
// 初始化
init();
/**
 * 展示加载图标
 * */
var showLoadingType;
function showLoading(type){
	showLoadingType = type;
	if($("#overlay").length != 1){
		$("#loading").append("<div id='overlay'>"+
        		"<img src='static/images/loading_spinner.gif' alt='"+msg_loading+"'>"+
	    "</div>");
		$("#playPause").attr("disabled" , "true");
		$("#playPause").addClass("ui-button-disabled");
		$("#playPause").addClass("ui-state-disabled");
		
		$("#previous").attr("disabled" , "true");
		$("#previous").addClass("ui-button-disabled");
		$("#previous").addClass("ui-state-disabled");
		
		$("#next").attr("disabled" , "true");
		$("#next").addClass("ui-button-disabled");
		$("#next").addClass("ui-state-disabled");
		
		$("#expGif").attr("disabled" , "true");
		$("#expGif").addClass("ui-button-disabled");
		$("#expGif").addClass("ui-state-disabled");
	}
}

/**
 * 隐藏加载图标
 * */
function closeLoading(type){
	if(type == showLoadingType || (type == null && showLoadingType == null)){
		$("#playPause").button("option", "label", msg_stop);
		$("#loading").html("");
		$("#playPause").removeAttr("disabled" , "true");
		$("#playPause").removeClass("ui-button-disabled");
		$("#playPause").removeClass("ui-state-disabled");
		
		$("#previous").removeAttr("disabled" , "true");
		$("#previous").removeClass("ui-button-disabled");
		$("#previous").removeClass("ui-state-disabled");
		
		$("#next").removeAttr("disabled" , "true");
		$("#next").removeClass("ui-button-disabled");
		$("#next").removeClass("ui-state-disabled");
		
		$("#expGif").removeAttr("disabled" , "true");
		$("#expGif").removeClass("ui-button-disabled");
		$("#expGif").removeClass("ui-state-disabled");
	}
	
}

/**
 * 基础图层的创建
 * */
function createBaseLayer(opacity , obj , targetTileGrid) {
	if(opacity == null){
		opacity = 0;
	}
	var source = new ol.source.XYZ({
		projection : projection,
		wrapX: false,
		tileGrid: targetTileGrid ? targetTileGrid : tileGrid,
	})
    
	
	var layer = new ol.layer.Tile({
		source: source,
		opacity: opacity,
		useInterimTilesOnError:false
	})
	layer.isPlayF = function(){
		var source = layer.getSource();
		var ol_uid = source.ol_uid;
		var tileQueueObj = map.tileQueue_
		var ready = source.getState() == "ready";
		if(ready){
			if(tileQueueObj){
				var elements_ = tileQueueObj.elements_
				for(var i = 0 , ii = elements_.length ; i < ii ; i++){
					if( elements_[i][1] == ol_uid) return false;
				}
				return true
			}else{
				return true;
			}
		}else{
			return ready;
		}
	}
	return layer;
}



/**
 * 边界线图层的创建
 * */
function createAreaLineLayer() {
	//不同的坐标系有不同的矢量图层
    var layer = null;
	var source = new ol.source.XYZ({
		projection : projection,
		tileGrid: tileGrid,
		tileUrlFunction : function(tileCoord){
			var z = tileCoord[0];
			var allTilesSize = Math.pow(2 , z);
			var y = tileCoord[1];
			var x = 0 - tileCoord[2] - 1;
			return rootURL + "map/" + queryParamSatellite +"/" + queryParamType + "/white/20171201000000/" + 
			leadingZeros(z , 2) + "/" + leadingZeros(x , 3) + "_" + leadingZeros(y , 3) + ".png";
		}
	})
	layer = new ol.layer.Tile({zIndex:10});
	layer.setSource(source);
	return layer;
}



var view = new ol.View({
	center: [-80.50781249999997, 11.250000000000007],
	zoom: 0,
	minZoom : 0,//getSectors(queryParamType).min_zoom_level,
	maxZoom:6,
	extent:extent,
	resolutions:resolutions,
	projection: projection,
	wrapX: false
});

var lineSource = new ol.source.Vector({
	wrapX: false
});

var drawLineLayer = new ol.layer.Vector({
	source: lineSource,
	style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            })
        })
    })
});

var areaLineLayer = createAreaLineLayer();

var map = new ol.Map({
	controls: ol.control.defaults({
        attribution: false,
        rotate: false,
        zoom: true
    }),
	layers: areaLineLayer ?  [areaLineLayer, drawLineLayer] : [drawLineLayer],
	target: 'map',
    controls: ol.control.defaults({
		  zoom:false,
		  rotate:false,
		  attribution:false,
    }),
    interactions: ol.interaction.defaults({
			doubleClickZoom:false,
			dragRotate:false,
			pinchRotate:false,
			PinchZoom:false
		}),
    view: view
  });

collection = map.getLayers();

var moveend = function(){
	updateURL();
	layeStateUtils.clear();
}
map.on("moveend" , moveend)

/**
 * 动画播放的定时执行方法
 * */
function setTime() {
	closeLoading();
	if(setTimeSize == 0){
		setNewImage(null);
	}else{
		var nextloop = calculateNextImage(loopIndex);
		setNewImage(null , nextloop);
	}
}

/**
 * 计算动画播放下一帧
 * */
function calculateNextImage(index){
	if(index < list.length - 1) {
		index++;
	} else {
		index = 0;
	}
	return index;
}


/**
 * 校验当前帧是否已经准备完成,
 * 准备完成则设置当前帧显示,其他帧隐藏
 * 为准备完成则等待加载
 * */
function setNewImage(param , nextloop){

	//主图层
	if(loopIndex >= list.length){
		loopIndex = 0;
	}
	if(shareindex >= list.length){
		shareindex = 0;
	}
	
	if(param != null){
		//主图层
		baseLayerList[param%2].setOpacity(opa);
		updateBaseSourceURL(baseLayerList[0].getSource() , list[loopIndex]  ,queryParamBand)
		for (var i = 1 ; i < baseLayerList.length ; i++) {
			baseLayerList[i].setOpacity(0);
		}
		
		//附加图层
		if(subjoinLayerList.length != 0){
			subjoinLayerList[0].setOpacity(subOpa);
			updateBaseSourceURL(subjoinLayerList[0].getSource() , list[loopIndex]  ,subjoinLayerBand)
			for (var i = 1 ; i < subjoinLayerList.length ; i++) {
				subjoinLayerList[i].setOpacity(0);
			}
		}
		$("#imageSlider").slider("value", loopIndex);
		setImageTime(list[loopIndex]+"");
		shareindex = loopIndex;
	}else{
		var show = setTimeSize % pressure;
		var preShow = show - 1;
		if(preShow < 0){
			preShow = pressure - 1;
		}
		var baseShowLayer = baseLayerList[show];
		var subjoinShowLayer;
		if(subjoinLayerList.length > 0){
			subjoinShowLayer = subjoinLayerList[show];
		}
		//判断是否可以播放
		var layerIsPlay ;
		if(!layerVisi || (baseShowLayer.getSource().getState() == "ready" && baseShowLayer.isPlayF())){
			layerIsPlay = true;
		}
		
		if(subjoinShowLayer != null && layerIsPlay){
			layerIsPlay = false;
			if(!subLayerVisi || (subjoinShowLayer.getSource().getState() == "ready" && subjoinShowLayer.isPlayF())){
				layerIsPlay = true;
			}
		}
		
		if(!layerIsPlay && animationId != null){
			window.clearInterval(animationId);
			pauseType = 1;
			play();
			return;
		}else{
			loopIndex = nextloop
			setTimeSize++;
			//主图层
			baseLayerList[preShow].setOpacity(0);
			
			var next = loopIndex;
			for(var i = 0 ; i < pressure - 1 ; i++){
				 next = calculateNextImage(next);
			}
			updateBaseSourceURL(baseLayerList[preShow].getSource() , list[next]  ,queryParamBand)
			baseLayerList[preShow].isPlay = false;
			baseShowLayer.setOpacity(opa);
			//附加图层
			if(subjoinShowLayer != null){
				subjoinLayerList[preShow].setOpacity(0);
				updateBaseSourceURL(subjoinLayerList[preShow].getSource() , list[next]  ,subjoinLayerBand)
				subjoinLayerList[preShow].isPlay = false;
				subjoinShowLayer.setOpacity(subOpa);
			}
			
			$("#imageSlider").slider("value", loopIndex);
			setImageTime(list[loopIndex]+"");
			shareindex = loopIndex;
		}
	}
}



function stop() {
	if(animationId != null) {
		window.clearInterval(animationId);
		$("#expGif").html(msg_expPng);
		$("#playPause").button("option", "label", msg_play);
		animationId = null;
	}
};

function play() {
	stop();
	preload();
	
};

function preload(){
	showLoading();
	if(pauseType != 1){
		layeStateUtils.clear(1);
		var now = loopIndex;
		for(var i = 0 ; i < pressure ; i++){
			var baseLayer = baseLayerList[i];
			updateBaseSourceURL(baseLayer.getSource() , list[now] , queryParamBand)
            baseLayer.setOpacity(i== 0 ? opa : 0);
			
			if(subjoinLayerList != null && subjoinLayerList.length > 0){
				updateBaseSourceURL(subjoinLayerList[i].getSource() , list[now] , subjoinLayerBand)
				subjoinLayerList[i].setOpacity(i==0 ? subOpa : 0 );
			}
            now = calculateNextImage(now);
		}
		pauseType = 1;
		checkStartLoop();
	}else{
		setTimeout(function(){
			checkStartLoop();
		} , 1000)
	}
	
}
var checkPreloadDate = null;
var preBaseLoading = new Array();
function checkStartLoop(){
	setTimeout(function(){
		if(checkPreload() && isPlay){
			pauseType = 0;
			$("#expGif").html(msg_expGif);
			  checkPreloadDate = null;
		      window.clearInterval(animationId)
	          animationId = window.setInterval(setTime, frameRate)
			  closeLoading();
		}else{
			if(pauseType == 0){
				preload()
			}else{
				checkStartLoop();
			}
			
		}
	}, 500);
}

function checkPreload(){
	//等待超过1分钟则播放
	if(checkPreloadDate == null){
		checkPreloadDate = (new Date()).valueOf();
	}else{
		var nowCheckPreloadDate = (new Date()).valueOf();
		if(nowCheckPreloadDate - checkPreloadDate > 1000 * 60){
			layeStateUtils.clear(1);
			return true;
		}
	}
	
	
	var flag = true;
	var isNull = false;
	for(var i = 0 ; i < baseLayerList.length ; i++){
		if(baseLayerList[i].isPlayF() == null && layerVisi){
			isNull = true;
		}
		if(layerVisi && ( !baseLayerList[i].isPlayF() || baseLayerList[i].getSource().getState() != "ready")){
			flag = false;
		}
	}
	
	for(var i = 0 ; i < subjoinLayerList.length ; i++){
		if(subjoinLayerList[i].isPlayF() == null && subLayerVisi){
			isNull = true;
		}
		if(subLayerVisi && (!subjoinLayerList[i].isPlayF() || subjoinLayerList[i].getSource().getState() != "ready")){
			flag = false;
		}
	}
	if(isNull){
		flag = false;
		pauseType = 0;
		preload();
	}
	return flag
}

/**
 * 添加colorBar
 * **/
function resizeColorBar(tableName , isColor , type) {

		var other = type == 1 ? 2 : 1
		if(isColor){
			if(tableName != ""){
				$("#colorBarWrapper" + type).css("height", "54px")
				$("#colorBarWrapper" + type).css("bottom", "70px")
					$("#colorBarWrapper" + type).attr("src", rootURL+"color_bar/" + queryParamSatellite + "/color_bar_1670_" + tableName + ".png")
					$("#colorBarWrapper" + other).attr("src") != "static/images/transparent_pixel.png"  ? (
							$("#colorBarWrapper" + type).css("bottom", "130px"),
							$("#colorBarWrapper" + other).css("bottom", "70px")
							) : null
			}else{
			$("#colorBarWrapper" + type).css("height", "1px")
					$("#colorBarWrapper" + type).attr("src","static/images/transparent_pixel.png");
				$("#colorBarWrapper" + other).attr("src") != "static/images/transparent_pixel.png" ? $("#colorBarWrapper" + other).css("bottom", "30px") : null
				type = 0
			}
		}else{
			$("#colorBarWrapper" + type).css("height", "1px")
			$("#colorBarWrapper" + type).attr("src", "static/images/transparent_pixel.png");
			$("#colorBarWrapper" + other).css("bottom", "70px")
			type = 0
		}
    refershImageryInfo(type , other)
}
//最大长度限制
$("#colorBarWrapper1")[0].onload = function(e){
	changeColorBarSize(e)
}

$("#colorBarWrapper2")[0].onload = function(e){
	changeColorBarSize(e)
}

function changeColorBarSize(e){
	var maxWidth = document.body.clientWidth * 0.8;
	if(e.srcElement.naturalWidth > maxWidth)
		e.target.width = maxWidth
	else 
		e.target.width = e.srcElement.naturalWidth
}



/**
 * 修改图层显示名称
 * **/
function refershImageryInfo(type , other){
    var info = satelliteObj.name;
    var pns = " ";
    var obj = getNameByValue(queryParamBand);
    var sub = getNameByValue(subjoinLayerBand);
    pns += obj && baseLayerList && baseLayerList.length ? obj.product_title : ""
    pns += sub && subjoinLayerList && subjoinLayerList.length ? " & " + sub.product_title : ""
    info+=pns;
    
    var num = 0;
    $("div#imageryInfoBottom").css("bottom",30 + num + "px");
	$("div#imageryInfoBottom").html(info);
}



//设置图片的时间
function setImageTime(date1) {
	  var date = date1.toDate("yyyyMMddhhmmss");
		is_bj_time ? date.setHours(date.getHours() + 8) : null
		var time = date.format("yyyy-MM-dd hh:mm")
		var day = time.substring(0 , 10);
		var dateTime = time.substring(11 , 19);
		if(time.indexOf("N") == -1){
		  $("p#imageryTimeBottom").html(day + " " + dateTime + msg_timeZone);
			$("#imageryTime").html(day + "<br/>" + dateTime + msg_timeZone)
	  }else{
		 $("p#imageryTimeBottom").html(msg_loading);
	  }
};

/**
 * 开始播放
 * */
function runLoopJs2() {
	$("#playPause").button("option", "label", msg_stop);
	isPlay = true;
	play();
}

/**
 * 关闭播放
 * */
function stopLoopJs() {
	isPlay = false;
	stop();
	$("#playPause").button("option", "label", msg_play);
}

function updateURL( updatetype ) {
	var center = view.getCenter();
	var zoom = view.getZoom();
	//opa = opa != visibilityNull ? opa : 1;
	//subOpa = subjoinLayerList.length != 0 ? subjoinLayerList[0].getOpacity() : 1;
	url_parameters.index = loopIndex;
	if(updatetype != 1){
		url_parameters.x = center[0];
		url_parameters.y = center[1];
		url_parameters.z = zoom;
	}
	url_parameters.area = areaLineChecked;
	url_parameters.satellite = queryParamSatellite;
	url_parameters.type = queryParamType;
	url_parameters.band = queryParamBand;
	url_parameters.duration = queryParamNum
	url_parameters.baseVisib = layerVisi;
	url_parameters.contrast = (subjoinLayerBand == null || subjoinLayerBand == "" ) ? 0 :webSliderChecked;
	url_parameters.subVisib = subLayerVisi;
	url_parameters.subBand = subjoinLayerBand;
	url_parameters.speed = 0 - frameRate / 10;
	url_parameters.swipeValue =  swipeValue;
    url_parameters.startTime = startTime;
	url_parameters.endTime = endTime;
	url_parameters.interval = queryParamInterval;
	url_parameters.isPlay = isPlay;
	url_parameters.opa = opa;
	url_parameters.pro = pro;
	url_parameters.hide = isHide
	url_parameters.subOpa = subOpa
	url_parameters.areaCode = areaCode 
	new_url = encodeURI(window.location.pathname + "?" +decodeURIComponent($.param(url_parameters))),encodeURI(window.location.pathname + "?" +decodeURIComponent($.param(url_parameters))),
	window.history.replaceState("", document.title, new_url)
}

function animationSliderChange() {
	url_parameters.speed = Math.abs($("#animationSpeed").slider("value"));
	frameRate = url_parameters.speed * 10;
    $("#playPause").button("option", "label", msg_stop);
	isPlay = true;
	window.clearInterval(animationId)
	animationId = window.setInterval(setTime, frameRate)
	$("#animationSpeed").blur();
}

/**
 * 展示下一张图片 , 停止播放
 * */
function nextImage() {
	stopLoopJs()
	loopIndex = calculateNextImage(loopIndex);
	setNewImage(loopIndex);
}

/**
 * 展示上一张图片, 停止播放
 * */
function previousImage() {
	stopLoopJs();
	//TODO
	loopIndex = calculateNextImage(loopIndex);
	setNewImage(loopIndex);
}

/** 
 * 点击历史数据查询按钮后进行,查询,创建,展示,弹出 的方法
 * */
function queryHistoryData(id , day , hour , type , o){
	$obj = $(id);
	$obj.empty();
	$obj.append('<option disabled="disabled">' + o + "</option>");
    if(type == 1){
    	var url = root_url+"/data/geos.jsondata?type=by_hour&sat=" + queryParamSatellite
          + "&sec=" + queryParamType + "&product_name=" + queryParamBand	+"&time=" + day +"&timeType=BJ"
        $.getJSON(url, function(dataJson) {
			dataJson.timestamps_int
        	for(var i = 0 ; i < 24 ; i++){
				var ii = i - 8;
				ii = ii < 0 ? ii + 24 : ii
				var value = dataJson.timestamps_int[leadingZeros(ii ,2)]
        		if(value != null){
        			$obj.append("<option value='"+ value.join(",") +"'>"+ leadingZeros(i ,2) +"</option>");
        		}
			}
            focusTargetButton($obj , id)
        })  
    }else{
    	var split = hour.split(",")
    	$.each(split, function(index,value) {
    		$obj.append("<option value='"+ value +"'>"+ moment(value,"YYYYMMDDHHmmss").format("mm:ss") +"</option>");
    	});
    	focusTargetButton($obj , id)
    }
}

function focusTargetButton($obj , id){
	$obj.selectmenu("enable");
	$obj.val(0).selectmenu("refresh");
	$obj.selectmenu("open");
	$(id + "-button").focus()
}
/**
 * 对比的卷积操作
 * */
var ctx;
function addSliderEvent(){
	map.render();
	$.each($(subjoinLayerList), function(e , t) {
		t.on('precompose', function(event) {
			ctx = event.context;
			var sliderValue = $("#slide-me").slider("value");
			var width = ctx.canvas.width * (sliderValue / document.body.scrollWidth);
			if(sliderValue != 0){
				swipeValue = sliderValue; 
			}
			ctx.save();
			ctx.beginPath();
			ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
			ctx.clip();
		});
		t.on('postcompose', function(event) {
			var ctx = event.context;
			ctx.restore();
		});	
	});
}


/**境界**/
$("#mapHideShow").checkboxradio().click(function(e) {
	this.checked || typeof  areaLineChecked == 'string' ?
		(areaLineLayer ? areaLineLayer.setVisible(true) : null, areaLineChecked = 1,xianVector ? xianVector.setVisible(true) : null) :
		(areaLineLayer ? areaLineLayer.setVisible(false) : null, areaLineChecked = 0,xianVector ? xianVector.setVisible(false) : null);
	blurObject(this);
});

/**经纬网**/
$("#countyShow").checkboxradio().click(function(e) {
	if(this.checked){
		if(xianVector == null){
			loadCountySource();
		}
		xianVector.setVisible(true)
	}else{
		xianVector ? xianVector.setVisible(false) : null
	}
	blurObject(this);
});
/**文字标识**/
$("#textMarkupShow").checkboxradio().click(function(e) {
	if(this.checked){
		if(xianVector == null){
			loadCountySource();
		}
		xianVector.setVisible(true)
	}else{
		xianVector ? xianVector.setVisible(false) : null
	}
	blurObject(this);
});
/**对比**/
$("#webSlider").checkboxradio().click(function(e) {
	//对比
	if(this.checked || typeof webSliderChecked == "string") {
		if(!subjoinLayerBand || !subjoinLayerList || !subjoinLayerList.length){
			alert(msg_comperaGuide);
			$("#webSlider").prop('checked' , '');
		}else{
			webSliderChecked = 1;
			$('#slide-me').prop('hidden', '');
			swipeValue = swipeValue == visibilityNull ? document.body.scrollWidth / 2 : swipeValue;
			$("#slide-me").slider({
				value : swipeValue,
		        min: 0, 
		        max: document.body.scrollWidth,
		        step: 10,
		        slide: function (e, t) {
		            $("#web_slider_wrapper").width(t.value)
		            map.render();
		        }, change: function (e, t) {
		            $("#web_slider_wrapper").width(t.value)
		        }, stop: function (e, t) {
		        }
		    }).width($zoom_holder.width()).css({
		        left: $zoom_holder.css("left"),
		        top: 40
		    });
		    addSliderEvent();
		}
	} else {
		webSliderChecked = 0;
		$('#slide-me').prop('hidden', 'hidden');
		map.render();
		$("#slide-me").slider("value" , 0);
	}
	blurObject(this);
});

/** 手绘痕迹清除  **/
$("button#canvasClear").button().click(function(e) {
	lineSource.clear();
});
/** 动画导出 **/
$("#expGif").button().click(function(e) {
	if(is_phone){
		//动画导出
		$("#gifDownload").css('display' , "none");
		//导出动画
		expGifMethod();
	}else{
		var isSourceLabel = $("#isSourceLabel")[0];
		var innerHTML = isSourceLabel.innerHTML;
		innerHTML = isSourceLabel.innerHTML.substr(0,innerHTML.length - 4);
		if(isPlay){
			isSourceLabel.innerHTML =  innerHTML + "单帧图片";
		}else{
			isSourceLabel.innerHTML =  innerHTML + "原分辨率";
		}
		screenshots.init($(window).width() / 2,$(window).height() / 2);
	}
});
/** 分享页面??? **/
$("#shortUrlDialog").dialog({
	autoOpen: !1
});
/** 分享页面打开 **/
$("#shareUrl").button().click(function(e) {
	updateURL();
	var returnUrl = "";
	$("#shortUrlDialog").dialog("isOpen") 
	? $("#shortUrlDialog").dialog("close") :
		(
		urlToShorten = window.location,
		$.ajax({
	        type: "POST",
	        url:  queryURL + "/typhoon/shortUrl?url=" + encodeURIComponent(urlToShorten), 
	        dataType: "text",
	        success: function (e) {
	        	if(e){
	        		returnUrl = window.location.host + "/typhoon/shortUrl/" + e
	        	}else{
	        		console.log("生成短链接失败: ")
	        		returnUrl = window.location
	        	}
	        }, error: function () {
	        	returnUrl = window.location
	        }, complete: function () {
	            $("input#shortUrl").val(returnUrl), hideOverlaySpinner(), $("#shortUrlDialog").dialog("open"), $("#shortUrl").select()
	        }
	    })

	), blurObject(this)
})

function hideOverlaySpinner() {
    $("#overlay").remove()
}

var lineChart
/**手绘线方法**/
$("#mouseDrawDrag").checkboxradio().click(function(e) { 
		map.removeInteraction(draw);
		if(lineNum % 2 == 0) {
			draw = new ol.interaction.Draw({
				source: lineSource,
				type: "LineString",
				freehand: true,
				style: new ol.style.Style({
			        fill: new ol.style.Fill({
			            color: 'rgba(255, 255, 255, 0.2)'
			        }),
			        stroke: new ol.style.Stroke({
			            color: '#ffcc33',
			            width: 2
			        }),
			        image: new ol.style.Circle({
			            radius: 7,
			            fill: new ol.style.Fill({
			                color: '#ffcc33'
			            })
			        })
			    })
			});
			map.addInteraction(draw);
		}
		lineNum++;
});
/**历史数据查询,天,开始时间选择**/
$("#startDateSelector").selectmenu({
	change: function(e, t) {
    	$("#startHourSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	$("#startTimeSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	startTime = "";
    	queryHistoryData("#startHourSelector" , $(this).val() , "" , 1 , "小时");
	}
});
/**历史数据查询,结束时间选择**/
$("#endDateSelector").selectmenu({
	change: function(e, t) {
    	$("#endHourSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	$("#endTimeSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	endTime = "";
    	queryHistoryData("#endHourSelector" , $(this).val() , "" , 1 , "小时");
	}
});
/**历史数据查询,时,开始时间选择**/
$("#startHourSelector").selectmenu({
	change: function(e, t) {
    	$("#startTimeSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	startTime = "";
    	queryHistoryData("#startTimeSelector" ,"" , $(this).val(), 2 , "分钟");
	}
});
/**历史数据查询,时,结束时间选择**/
$("#endHourSelector").selectmenu({
	change: function(e, t) {
    	$("#endTimeSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	endTime = "";
    	queryHistoryData("#endTimeSelector" ,"" , $(this).val(), 2 , "分钟");
	}
});
/**历史数据查询,分,开始时间选择**/
$("#startTimeSelector").selectmenu({
	change: function(e, t) {
		startTime = $(this).val();
		if(endTime == null || endTime == ""){
			endTime = startTime.toDate("yyyyMMddhhmmss")
			endTime.setMinutes (endTime.getMinutes () + queryParamInterval * queryParamNum * getSectors(queryParamType).minutes_between_images);
			endTime = endTime.format("yyyyMMddhhmmss")
		}
		getLatestTimes()
	}
});
/**历史数据查询,分,结束时间选择**/
$("#endTimeSelector").selectmenu({
	change: function(e, t) {
		endTime = $(this).val();
		if(startTime != null && startTime != ""){
			getLatestTimes()
		}
	}
});
/**点击事件**/
$(document).keydown(function(e) {
	var t = e.which
	e.ctrlKey || e.shiftKey || e.altKey ? e.ctrlKey ||
		(e.shiftKey ?
			(39 == t ? moveImagery("left", "-") : 37 == t && moveImagery("left", "+"),
				38 == t ? moveImagery("top", "+") : 40 == t && moveImagery("top", "-")) : e.altKey) :
		(65 == t ? $("#archive").click() :
			66 == t ? keyboardSelectmenu($("#sectorSelectorBand")) :
			67 == t ? keyboardSelectmenu($("#productSelectorChange")) :
			68 == t ? $("#mouseDrawDrag").click() :
			69 == t ? $("#webSlider").click() :
			71 == t ? $("#canvasClear").click() :
			72 == t ? $("#menuHideShow").click() :
			73 == t ? $("#expGif").click() :
			74 == t ? nextImage() :
			75 == t ? previousImage() :
			77 == t ? $("#mapHideShow").click() :
			79 == t ? keyboardSelectmenu($("#sectorSelectorOverlay")) :
			80 == t ? keyboardSelectmenu($("#productSelectorChange")) :
			83 == t ? keyboardSelectmenu($("#satelliteSelectorChange")) :
			78 == t ? keyboardSelectmenu($("#productSelectorTime")) :
			84 == t ? keyboardSelectmenu($("#timeStepSelectorChange")) :
			85 == t ? $("#shareUrl").click() :
			88 == t ? removeAlert() :
			89 == t ? $("#goHome").click() :
			90 == t ? $("#zoomSuper").click() :
			191 == t ? (e.preventDefault(), $("#help").click()) :
			32 == t ? (e.preventDefault(), $("#playPause").click()) :
			187 == t || 107 == t ? $("#zoomIn").click() :
			(189 == t || 109 == t) && $("#zoomOut").click(),
			$(".ui-button").is(":focus") || $(".ui-checkboxradio").is(":focus") || $(".ui-slider-handle").is(":focus") || (39 == t ? nextImage() : 37 == t && previousImage(), 38 == t &&  $("#playPause").click()))
});

	$(document).bind("mousedown", function(e) {
		!$(e.target).parents("#custom-menu").length > 0 && $("#custom-menu").hide(100)
	}),  $zoom_holder.mouseup(function(e) {
		if(3 === e.which) 2 === e.originalEvent.detail ? (clearTimeout(right_click_timeout), zoomOut(e.pageX, e.pageY)) : 1 === e.originalEvent.detail && (right_click_timeout = setTimeout(function() {
			var e, t
			e = right_click_x + $("#custom-menu").width() > $(window).width() ? $(window).width() - $("#custom-menu").width() : right_click_x, t = right_click_y + $("#custom-menu").height() > $(window).height() ? $(window).height() - $("#custom-menu").height() : right_click_y, $("#custom-menu").finish().toggle(100).css({
				left: e + "px",
				top: t + "px"
			})
		}, 500))
	}), $zoom_holder.bind("contextmenu", function(e) {
		e.preventDefault(), right_click_x = e.pageX, right_click_y = e.pageY
	}),$("#sectorSelectorBand").selectmenu({
		change: function(e, t) {
			var o = $(this).val();
			var obj = getNameByValue(queryParamBand)
			queryParamBand = o;
			layerVisi = true;
			opa = obj.defOpecity;
			getLatestTimes();
			//调整放大等级
			setMaxZoom(o) 
			addProductToDisplay(2 , getNameByValue(o).product_title);
			blurObject(this);
		}
	}), $("#sectorSelectorOverlay").selectmenu({
		change: function(e, t) {
			var o = $(this).val();
			subjoinLayerBand = o;
			var obj = getNameByValue(subjoinLayerBand)
			subLayerVisi = true;
			subOpa = getNameByValue(queryParamBand).defOpecity
			getSubShowData();
			url_parameters.subBand = o;
			var product = getNameByValue(o)
			addProductToDisplay(1 , product.product_title);
			//判断是否是轮廓线产品
			//显隐图层
			blurObject(this);
			isPlay ? preload() : setNewImage(loopIndex);
		}
	}), $("#productSelectorChange").selectmenu({
		change: function(e, t) {
			var o = $(this).val();
			queryParamType = o;
			var sectors = getSectors(queryParamType)
			queryParamInterval = sectors.defMinute
			queryParamNum = sectors.defNum
			frameRate = sectors.defSpeed
			
			url_parameters.x = sectors.x
			url_parameters.y = sectors.y
			url_parameters.z = calculationZ(sectors)
			
			subjoinLayerBand = null;
			updateURL(1);
			reload()
		}
	}), $("#projectionChange").selectmenu({
		change: function(e, t) {
			var o = $(this).val();
			pro = o;
			var proObj = satelliteObj.pro[pro]
			queryParamType = proObj.defSectors;
			var sectors = proObj.sectors[queryParamType];
			url_parameters.x =sectors.x;
			url_parameters.y =sectors.y;
			url_parameters.z =sectors.z;
			queryParamBand = proObj.defproduct;
			subjoinLayerBand = null;
			updateURL(1);
	        reload();
		}
	}), $("#productSelectorTime").selectmenu({
		change: function(e, t) {
			var o = $(this).val();
			queryParamNum = o;
			getLatestTimes();
			blurObject(this);
		}
	}), $("#timeStepSelectorChange").selectmenu({
		change: function(e, t) {
			var o = $(this).val();
			queryParamInterval = o;
			getLatestTimes();
			blurObject(this);
		}
	}), $("#menuHideShow").checkboxradio().click(function () {
	    "0px" != $("#controlWrapper").css("left") ? (
	    isHide = 0,
	    $("#controlWrapper").animate({
	        left: "0px"
	    }), is_phone ? $("#imageryTimeBottom").animate({
	    	right : "-400px"
	    }) : null,
	    $("div#imageryInfoBottom").animate({
	        left: "260px"
	    }),$(".colorBarWrapper").animate({
	        left: "260px"
	    }),$("label[for=menuHideShow]").animate({
	        left: "250px"
	    }), i, url_parameters.hide_controls = 0) : (
	    isHide = 1,
	    $("#controlWrapper").animate({
	        left: "-250px"
	    }),is_phone ? $("#imageryTimeBottom").animate({
	    	right : "0px"
	    }): null,
	    $("div#imageryInfoBottom").animate({
	        left: "10px"
	    }),$(".colorBarWrapper").animate({
	        left: "10px"
	    }),$("label[for=menuHideShow]").animate({
	        left: "0px"
	    }), url_parameters.hide_controls = 1), blurObject(this)
    
	}),$("#queryXYZ").button().click(function (e) {
		var z = view.getZoom()
		var xy = view.getCenter()
		alert("x=" + xy[0] + "y=" + xy[1] + "z=" + z)
	}), $("#satelliteSelectorChange").selectmenu({
		change: function(e, t) {
			var o = $(this).val();
			queryParamSatellite = o;
			pro = "geos"
			satelliteObj = getSatellite(queryParamSatellite);
			queryParamBand = satelliteObj.pro["geos"].defproduct;
			subjoinLayerBand = null;
			queryParamType = "full_disk";
			var sectors = getSectors(queryParamType)
			queryParamInterval = sectors.defMinute
			queryParamNum = sectors.defNum
			frameRate = sectors.defSpeed
			url_parameters.x = sectors.x
			url_parameters.y = sectors.y
			//url_parameters.z = sectors.z
			subLayerVisi = true;
			layerVisi = true;
			opa = 1;
			subOpa = 1;
			startTime = null;
			endTime = null;
			updateURL(1);
	        reload();
		}
	})
	,$("select").selectmenu({
		position: {
			my: "left top",
			at: "left top",
			collision: "fit"
		},
		open: function(e, t) {
			$("div.ui-selectmenu-open") && $("div.ui-selectmenu-open").not($("#" + $(this).attr("id") + "-menu").parent()).each(function() {
				var e = $(this).children().first().attr("id").slice(0, -5)
				$("#" + e).selectmenu("close")
			}), $("#" + $(this).attr("id") + "-menu").css({
				"max-height": $(window).height() + "px",
				"max-width": $(window).width() + "px"
			})
		}
	}), $("#imageryTime").text("Loading data.."),
	$("#animationSpeed").slider({
		value: url_parameters.speed,
		min: -100,
		max: -10,
		step: 5,
		slide: function(e, t) {
			animationSliderChange()
		},
		change: function(e, t) {
			animationSliderChange()
		}
	}), $("#next").button().click(function(e) {
		stopLoopJs();
		nextImage();
		blurObject(this);
	}), $("#previous").button().click(function(e) {
		stopLoopJs();
		previousImage();
		blurObject(this);
	}), $("#playPause").button().click(function(e) {
		animationId == null ? runLoopJs2() : stopLoopJs();
	}), $("#zoomIn").button().click(function(e) {
		var zoom = view.getZoom();
		if(zoom >= maxZoom) {
			alert(msg_maxZoom)
		} else {
			view.setZoom(Math.floor(zoom) + 1);
			$("#zoomSuper").prop("checked", !1).checkboxradio("refresh");
		}
	}),$("#snapshotType").button()
	,$("#snapshotScala").button()
	,$("#determine").button()
	,$("#screenDown").button()
	,$("#isSource").checkboxradio()

	,$("#zoomOut").button().click(function(e) {
		var zoom = Math.ceil(view.getZoom())
		view.setZoom(zoom - 1);
		$("#zoomSuper").prop("checked", !1).checkboxradio("refresh");
	}), $("#zoomSuper").checkboxradio().click(function(e) {
		view.setZoom(maxZoom);
	}), $("#showTools").button().click(function(e) {
		e.preventDefault(), $("#advancedControlWrapper").is(":visible") ? $("#advancedControlWrapper").hide() : $("#advancedControlWrapper").show(), blurObject(this)
	}), $("#fullScreen").button().click(function(e) {
		e.preventDefault(), 0 == intHorizontalControlHeight ? (intVerticalControlWidth = intDefaultVerticalControlWidth, intHorizontalControlHeight = intDefaultHorizontalControlHeight, $("#controlWrapper").show(), $("#map3d").css("margin-right", "0"), $("#map3d").css("margin-left", "0"), $("#map3d").css("float", "left"), fitImageToWindow()) : (intVerticalControlWidth = 0, intHorizontalControlHeight = 0, $("#controlWrapper").hide(), $("#map3d").css("margin-right", "auto"), $("#map3d").css("margin-left", "auto"), $("#map3d").css("float", "none"), fitImageToWindow()), blurObject(this)
	}), $("#radio_LoopRockRev").buttonset(), $("#map3d").click(function(e) {
		$("#fullScreen").click(), blurObject(this)
	}), $("#help").button().click(function(e) {
		window.open(root_url + "/doc/SWAP2-Web-UsersManual-zh-0816.pdf")
	}), $("#archive").checkboxradio().click(function () {
    if(this.checked){
    	$("#archive").prop("checked", !0).checkboxradio("refresh");
	    $obj1 = $('#startDateSelector');
	    if($obj1[0].length > 2){
	    	updateDateSelector()
		    return;
	    }
	    $obj2 = $('#endDateSelector');		
		var url = root_url+"/data/geos.jsondata?type=available_dates&sat=" + queryParamSatellite
		          + "&sec=" + queryParamType + "&product_name=" + queryParamBand+"&timeType=BJ&im=180"			
			
		$.getJSON(url, function(dataJson) {
		    $.each(dataJson.dates_int, function (e, t) {
		    	if(e < 180){
		    		$("#startDateSelector").append('<option value="' + t + '">' + convertTimestampToDisplayTime(t) + "</option>");
		            $("#endDateSelector").append('<option value="' + t + '">' + convertTimestampToDisplayTime(t) + "</option>")
		    	}
		    });
		    updateDateSelector()
		});
    }else{
    	$("#archive").prop("checked", !1).checkboxradio("refresh");
    	$("#startDateSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	$("#startHourSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	$("#startTimeSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	$("#endDateSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	$("#endHourSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	$("#endTimeSelector-button").addClass("ui-selectmenu-disabled ui-state-disabled");
    	endTime = "";
    	startTime = "";
    	getLatestTimes()
    }
    blurObject(this);
    
})



function updateDateSelector(){
	 $("#startDateSelector").selectmenu("enable");
	 $("#endDateSelector").selectmenu("enable");
	 $("#startDateSelector").selectmenu("refresh");
     $("#endDateSelector").selectmenu("refresh");
}

function addProductToDisplay(index , name) {
	$("#product" + index + "Container").remove();
    var t = index
    if(t == 2 ){
    	$("#dummyHolder").after('<li id="product' + index + 'Container" class="productContainer"><label for="product' + index + 'Container">' + name + '</label><input class="productNumber" type="hidden" value="' + index + '" /><button class="productRemove"  disabled title="Completely remove this product from view." value="' + index + '"></button><label class="productHideShowLabel" for="productHideShow' + index + '">'+msg_hidden+'</label><input type="checkbox" class="productHideShow" name="productHideShow' + index + '" id="productHideShow' + t + '" title="Hide/Show this product temporarily." value="' + t + '"><div class="sliderContainerOpacity" title="Control the opacity for this product"><div id="product' + index + 'Opacity" class="opacitySlider"></div></div></li>'), setupProductBoxUI(t)
    }else{
    	$("#dummyHolder").after('<li id="product' + index + 'Container" class="productContainer"><label for="product' + index + 'Container">' + name + '</label><input class="productNumber" type="hidden" value="' + index + '" /><button class="productRemove" title="Completely remove this product from view." value="' + index + '"></button><label class="productHideShowLabel" for="productHideShow' + index + '">'+msg_hidden+'</label><input type="checkbox" class="productHideShow" name="productHideShow' + index + '" id="productHideShow' + t + '" title="Hide/Show this product temporarily." value="' + t + '"><div class="sliderContainerOpacity" title="Control the opacity for this product"><div id="product' + index + 'Opacity" class="opacitySlider"></div></div></li>'), setupProductBoxUI(t)
	}
}

function setMaxZoom(o) {
	var value = getNameByValue(o);
	maxZoom =  value.zoom_level_adjust + 1;
	view.setMaxZoom(maxZoom);
	if(view.getZoom() > maxZoom){
		view.setZoom(maxZoom);
	}
	$("#custom-menu").html("");
	
	for(imagery_resolutions = satelliteObj.pro[pro].imagery_resolutions, i = 0; i <= maxZoom; i++)
		$("#custom-menu").append('<li data-action="' + i + '" onclick="viewCustomMenu('+ i +')">' + imagery_resolutions[i] + "</li>");
}

function viewCustomMenu(i){
	view.setZoom(parseInt(i));
	$("#custom-menu").hide(100);
}

function setupProductBoxUI(e) {
    var t = e
    var value = 1
    var layerValue;
    if(e == 2){
    	value = opa == null ? 1 : opa;
		opa = value;
    }else if(e == 1){
    	value = subOpa == null ? 1 : subOpa;
		subOpa = value;
    }
    $("#product" + e+ "Container div.sliderContainerOpacity div.opacitySlider").slider({
        value: value,
        min: 0,
        max: 1,
        step: .01,
        change: function (e, t) {
            changeOpacity($(this).parents("li").children(".productNumber").prop("value"), e, t.value)
        },
        slide: function(e, t) {
			 changeOpacity($(this).parents("li").children(".productNumber").prop("value"), e, t.value)
		}
    }), $("#product" + e+ "Container button.productRemove").button({
        label: "x"
    }).on("click", function () {
        var e = parseInt($(this).prop("value")),
            t = e,
            o = 0
        
        $("#sectorSelectorOverlay option[value='" + e + "']").prop("disabled", !1);
        $("#sectorSelectorOverlay").selectmenu("refresh");
        if(e == 1){
        	if (webSliderChecked == 1) {
           		 $("#webSlider").click()
       		}
			$.each($(subjoinLayerList), function(e , t) {
				var a = collection.remove(t);
			});
			var obj = getNameByValue(subjoinLayerBand)
			subjoinLayerBand = null;
			subjoinLayerList = new Array();
			if(obj !=null && obj.color_table_name != null && obj.color_table_name != ""){
				resizeColorBar(null,false , 2);
			}
			!layerVisi ? $("#productHideShow2").click() : null;
			$("#sectorSelectorOverlay").val("")
			
        }
        $("#product" + e + "Container").remove();
    }), $("#product" + e+ "Container .productHideShow").checkboxradio().on("click", function () {
        var e = $(this).prop("value");
		changeVisible(e , !this.checked)
    })
}


/**
 * 在调整显示位置时，根据分辨率调整z的级别
 * */
function calculationZ(obj){
	var z = 0;
	var width = $(window).width()
	if(width <= 1400 && width > 800){
		z = obj.z - 2
	}else if(width <= 800){
		z = obj.z - 3
	}else{
		z = obj.z - 1
	}
	if(z < 0){
		z = 0
	}
	return z
}


function changeVisible(r, o){
	if(r == 1){
		$.each($(subjoinLayerList), function(e , t) {
			subLayerVisi = o;
			t.setVisible(o);
		});
	}else if(r == 2){
		$.each($(baseLayerList), function(e , t) {
			layerVisi = o;
			t.setVisible(o);
		});
	}
}

function changeOpacity(r, t, opacity){
	if(opacity == visibilityNull){
		opacity = visibilityZero
	}
	if(r == 1){
		$.each($(subjoinLayerList), function(e , t) {
			t.setOpacity(opacity);
		});
		subOpa = opacity;
	}else if(r == 2){
		$.each($(baseLayerList), function(e , t) {
			t.setOpacity(opacity);
		});
		opa = opacity;
	}
}


/**     更新基础栅格图层的瓦片URL       **/
function updateBaseSourceURL(baseSource , dateShow , product){
	var date = dateShow+""
	var t = getNameByValue(product)
	baseSource.setTileUrlFunction (function (src){
		var pow = Math.pow(2 , src[0]);
		var y = -1- src[2]	;
		var z = src[0];
		if(y < 0 ){
			y = y + pow;
		}else if(x > pow){
			y = y - pow;
		}
		var x = 0
		x = src[1]
		var url = "";
		if(queryParamType == "prj_gll"){
			url = rootURLGLL;
		}else{
			url = rootURL;
		}
		var re = url + "imagery/" + date.toDate("yyyyMMddhhmmss").format("yyyyMMdd") + "/" +
		queryParamSatellite + "---" + queryParamType + "/" + product + "/" + date + "/"
		+ leadingZeros(z , 2) + "/" + leadingZeros(y , 3) +"_" + leadingZeros(x , 3) + t.img_type
		return re;
	} , product + dateShow);
}



function getNameByValue(value){
	var obj;
	$.each(satelliteObj.products, function(e , t) {
		if(t.name == value){
			obj = t;
		}
	}); 
	
	if(obj == null){
		$.each(satelliteObj.overlay, function(e , t) {
		if(t.name == value){
			obj = t;
		}
	}); 
	}
	return obj;
}


function getSatellite(value){
	var obj;
	$.each(productJson.satellites, function(e , t) {
		if(t.value == value){
			obj = t;
		}
	}); 
	return obj;
}

function getSectors(value){
	var obj;
	var sectors = satelliteObj.pro[pro].sectors
	for(var key in satelliteObj.pro[pro].sectors){
		if(key == value){
			obj = sectors[key];
		}
	}
	return obj;
}


function delayWebSlider(){
	subjoinLayerList.length == 0 ? setTimeout('delayWebSlider()' , 200) : $("#webSlider").click();
}


function delayInitPlay(){
	baseLayerList.length == 0 ? setTimeout('delayInitPlay()' , 200) : $("#playPause").click();
}

function initEnvent(){
	
	if(areaLineChecked == 1){
		var userAgent = navigator.userAgent;
		if(userAgent.indexOf("Firefox") > -1){
			$("#mapHideShow").is(':checked') ? (
			areaLineLayer.setVisible(true),
			areaLineChecked = 1
			) : $("#mapHideShow").click()
		}else{
			$("#mapHideShow").click();
		}
		
	}
	if(webSliderChecked == 1){
		delayWebSlider();
	}
	
	if(isPlay){
		delayInitPlay();
	}
	if(isHide){
		$("#menuHideShow").click()
	}
	
	if(queryParamBand != null && queryParamBand != ""){
		setMaxZoom(queryParamBand);
		addProductToDisplay( 2 , getNameByValue(queryParamBand).product_title);
		if(!layerVisi){
			 $("#productHideShow2").click()
		}
	}
	if(subjoinLayerBand != null && subjoinLayerBand != ""){
		addProductToDisplay( 1 , getNameByValue(subjoinLayerBand).product_title);
		if(!subLayerVisi){
			$("#productHideShow1").click()
		}
	}
	
	view.setCenter([parseFloat(centerX) , parseFloat(centerY)]);
	view.setZoom(zoom);
	
	if(startTime != null && startTime != "" && endTime != null && endTime != ""){
		$('#archive').click();
	}
}

/**
 * 点击下拉菜单弹出工具
 **/
function keyboardSelectmenu(e) {
    $elem_menu = $("#" + e.attr("id") + "-menu"),
    $elem_menu.parent("div").hasClass("ui-selectmenu-open") ? 
    (e.selectmenu("close"), $elem_menu.blur()) : 
    (e.selectmenu("open"), $elem_menu.focus())
}
/**
时间转换 yjz_update_1
*/
function convertTimestampToDisplayTime(e) {
    var t = "" + e
    var o = "";
    var d = new Date();
	if($.isNumeric(t)){
		if(14 == t.length){
			d = t.toDate("yyyyMMddhhmmss");
			if(is_bj_time){
				d.setHours(d.getHours()+8);//转换北京时间
			}
			o = d.format("yyyy-MM-dd hh:mm") + (is_bj_time?" 北京时间":" UTC");
			//o = t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6, 2) + " " + t.substr(8, 2) + ":" + t.substr(10, 2) + ":" + t.substr(12, 2) + " UTC" ;
		}else if(12 == t.length ){
			d = t.toDate("yyyyMMddhhmm");
			if(is_bj_time){
				d.setHours(d.getHours()+8);//转换北京时间
			}
			o = d.format("yyyy-MM-dd hh:mm") + (is_bj_time?" 北京时间":" UTC");
			//o = t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6, 2) + " " + t.substr(8, 2) + ":" + t.substr(10, 2) + " UTC-B" ;
		}else if(8 == t.length ){
			d = t.toDate("yyyyMMdd");
			o = d.format("yyyy-MM-dd");
			//o = t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6, 2);
		}else if(6 == t.length ){
			d = t.toDate("hhmmss");
			o = d.format("hh:mm") + " UTC";
		    //o = t.substr(0, 2) + ":" + t.substr(2, 2) + ":" + t.substr(4, 2) + " UTC";
		}else{
			o = t;
		}
	}else{
		o = t;
	}
    return o
}
/**
 * 关闭关注
 * */
function blurObject(e) {
	$("#" + e.id + "-button").length ?
	$("#" + e.id + "-button").blur() :
	$("#" + e.id).blur()
	updateURL()
}



/**
 * 补零工具方法
 * */
function leadingZeros(e, t, o) {
    for (o = void 0 === o ? "0" : o + "", e += ""; e.length < t;) e = o + e
    return e
}

function reload(){
	if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){  
        var url = window.location.href;
		var parm = parseInt(Math.random() * 100);
		if (url.lastIndexOf('?') > -1) {
			url = url + "&" + parm;
		} else {
		    url = url + "?" + parm; 
		}
		window.location.href = url;
    }else{
		location.reload();
	}
	
}


//layeState对象，用来描述瓦片加载进度
function LayeState(){
	var that = this;
	var p_id = null;
	var p_list = [];
	var p_key = null;
	var p_resolution = null;
	
	that.init = function(id , resolution , key){
		p_id = id;
		p_key = key;
		p_resolution = resolution;
	}
	/**
	 * 添加需要加载的源，去重
	 * */
	that.addloadingSrc = function(src){
		p_list.contains(src) ? "" : p_list.push(src)
	}
	/**
	 * 删除加载完成的源
	 * */
	that.remove = function (src){
		p_list.remove(src)
	}
	
	/**
	 * 判断分辨率是否更新，若分辨率更新则清空加载列表
	 * */
	that.isResolutionUpdate = function(resolution){
		if(resolution != p_resolution){
			p_resolution = resolution;
			p_list = [];
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 判断key是否变更
	 * */
	that.isKeyUpdate = function(key){
		if(key != p_key){
			p_key = key;
			p_list = [];
			return true;
		}else{
			return false;
		}
	}
	
	that.isPlay = function (){
		return p_list.length == 0
	}
	
	that.clear = function(){
		p_list = [];
	}
	
	that.state = function(){
		var str = '[';
		for(var i = 0 ; i < p_list.length ; i++){
			var a = p_list[i];
			str = str + a + ','
		}
		str + ']'
		return str + '----' + p_list.length + '----' + p_id
	}
}

function LayeStateUtils(){
	var that = this;
	var list = {};
	var version = 0;
	
	that.addSrc = function(id , src , resolution , key){
		if(list[id] == null){
			var layeState = new LayeState();
			layeState.init(id , resolution , key)
			list[id] = layeState;
		}
		list[id].isKeyUpdate(key)
		list[id].isResolutionUpdate(resolution)
		list[id].addloadingSrc(src)
	}

	that.removeSrc = function(id , src){
		if(list[id] != null){
			list[id].remove(src) 
			//console.log(list[id].state() + '----' + list[id].isPlay() + '----' + version)
			return list[id].isPlay()
		}else{
			return true;
		}
		
	}
	// type == 1 全新的对象
	that.clear = function(type){
		//version++;
		if(type == 1){
			list = {};
		}else{
			for(var id in list){
				if(list[id] != null){
					list[id].clear();
				}
			}
		}
	}
}
var layeStateUtils = new LayeStateUtils()

initEnvent();

var destroy = function(){
	//关闭播放
	stopLoopJs()
	//删除已经显示的图层
	baseLayerList = [];
	queryParamBand = null;
	subjoinLayerList = [];
    subjoinLayerBand = null;
	areaLineLayer = null;
	drawLineLayer = null;
	xianVector = null;
	
	collection.clear()
	//更换坐标系

    //路径清理
 	map.un("moveend",moveend);
	var new_url = encodeURI(window.location.pathname);
	window.history.replaceState("", document.title, new_url)
	//删除左侧菜单 以及显示的时间等
	$("#pluginWrapper").css("display","none")
	$("#imageryInfoBottom").css("display","none")
	$("#imageryTimeBottom").css("display","none")
	$("#overlay").css("display","none")
	//删除状态栏
	$("#changeArea").remove();
	$("#ciraLogo").css("display","none")
	$("#rammbLogo").css("display","none")
	$("#colorBarWrapper1").css("display","none")
	$("#colorBarWrapper2").css("display","none")
}


//is_phone  手机优化


window.map = map
window.ol = ol
window.destroy = destroy

