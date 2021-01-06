var pointermove = function(e){updateMousePosition(e.coordinate)};
var singleclick = function(e){updateMousePosition(e.coordinate)};
map.on("pointermove" , pointermove)
map.on("singleclick" , singleclick)

var districtFeatures = []; 
var districtList = null;
var provinceFeatures = null;


function loadCountySource(){
		var xianStyle = new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: "rgba( 99, 184, 255 ,0.3)",
						width: 0.3
				})
		});
			//areaLineLayer
		var xianSource = new ol.source.Vector();
			xianVector = new ol.layer.Vector({
					source: xianSource,
					style:xianStyle,
					maxResolution:resolutions[4],
			});
			map.addLayer(xianVector);
}


var updateMousePositionTimeout = null;
function updateMousePosition(coordinate){
	updateMousePositionTimeout ? clearTimeout(updateMousePositionTimeout) : null
    updateMousePositionTimeout = setTimeout(function(){
    	calcuMousePosition(coordinate)
    }, 100)
}

function calcuMousePosition(coordinate){
		var districtName = "";
		
		if(districtFeatures.length != 0 && !is_phone){
			districtName = districtName + getDistrictName(coordinate)
		}
		
		if("EPSG:4326" != projection){
			coordinate= ol.proj.transform(coordinate,  projection , 'EPSG:4326' )
		} 
		//超出边界
		if( Math.abs( coordinate[0] )>10000 || Math.abs( coordinate[1] )>10000 ){
			var  str =   "-";
		    $("#mousePosition").html(districtName + "    " + str + " ");
		}else{
			var  str = calculateLocaltion(coordinate[0])
			str = str.indexOf("-") != -1 ? str.substr(1,str.length) + "W" : str + "E";

			var lat = calculateLocaltion(coordinate[1]);
			str = str + (lat.indexOf("-") != -1 ? lat.substr(1,lat.length) + "S" :lat + "N");
		  $("#mousePosition").html(districtName + "    " + str + " ");
		}
		updateMousePositionTimeout = null
}


function getDistrictName(coordinate){
    var array = new Array()
		for(var i = 0 ; i< districtFeatures.length ; i++){
			var districtFeature = districtFeatures[i];
			var geometry = districtFeature.getGeometry()
			var flag  = geometry.intersectsCoordinate(coordinate)
				flag ? array.push(districtFeature) : null
		}
	  var feature = array[0];
	  if(feature != null){
			var values = feature.values_   
			var codeXian = values.Code+""
			var codeShi = codeXian.substr(0,4)+"00";
			codeShi = parseInt(codeShi)
			var codeSheng = codeXian.substr(0,2)+"0000";
			codeSheng = parseInt(codeSheng)
			var name = values.NAME
					var nameShi = null;
					var nameSheng = null;
			for(var i =  0; i<districtList.length;i++){
			var  codeList =	districtList[i]
				var targetCode = codeList[0]
						if(targetCode == codeSheng){
							nameSheng = codeList[1]
						}else if(targetCode == codeShi){
							nameShi = codeList[1]
						}
			}
		return nameShi ? nameSheng + nameShi  + name : nameSheng  + name
	}else{
		return ""
	}
}

/**        计算当前鼠标经纬度                 **/
function calculateLocaltion(num){

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
    
}


function addFeatrueToXian(dataJson  , GeoJSON){
			 var districtFeature = GeoJSON.readFeatures(dataJson);
			 function  addF (feature){
				districtFeatures.push(feature)
			 }
			 districtFeature.forEach(addF)
}