


function initFoot(){
   
   if(is_phone){
        initPhoneFoot();
   }else{
        initPcFoot()
   }

 
}



function initPcFoot(){
    var footUl = $("#foot");
    footUl.append('<li id="changeArea"><span style="color:#FFE4E1"><img src="static/images/foot/areaManager.png"/> 切换区域</span><ul class="submenu" id="areaManager"></ul></li>');
    footUl.append('<li class="footer-ss" style="width:400px;color:#DCDCDC"><span id="mousePosition">-</span></li>');
    footUl.append('<li class="footer-ss" style="color:#DAA520">在线用户数（<span id="onLineNum">-</span>）</li>');
    
    loadMoreScript(["static/js/Jcrop/jquery.Jcrop.js" ,
                    "static/js/screenshots/screenshots.js" ,
                    "static/js/jsZip/jszip.min.js" ,
                    "static/js/jsZip/jsZipUtils.js"
                   ] , exePcFoot)
}


function exePcFoot(){
    $("#areaManager").html('')
    $.each(regionShow[queryParamSatellite][pro], function (e, t) {
        $("#areaManager").append('<li><a href="#" onClick="changeAreaManager(' + e + ')" > ' + t.regionName + '</a></li>') 
    })
    loadZip();
}

function initPhoneFoot(){
    var footUl = $("#foot");
    footUl.append('<li><span style="color:#FFE4E1"><img id="preProgram" src="static/images/foot/preProgram.png"/></span></li>');
    footUl.append('<li><span style="color:#FFE4E1"><img id="areaManager" src="static/images/foot/areaManager.png"/></span></li>');
     footUl.append('<li style="color:#ECECEC"><span id="mousePosition">109°93′E,23°00′N </span></li>');
    
    //自动隐藏
    isHide=1;
    


    var headImg = $( $("body").children("div").get(0) );
    headImg.css("display" , "none");

    loadMoreScript([    
        "static/js/Mobiscroll/js/mobiscroll.core.js",
        "static/js/Mobiscroll/js/mobiscroll.frame.js",
        "static/js/Mobiscroll/js/mobiscroll.scroller.js",
        "static/js/Mobiscroll/js/mobiscroll.frame.android-holo.js"
        ] , exePhoneFoot)
}

function exePhoneFoot(){
    var areaManagerKey = new Array()
    var areaManagerValue = new Array()
    $.each(regionShow[queryParamSatellite][pro], function (e, t) {
        areaManagerKey.push(e);
        areaManagerValue.push(t.regionName);
    })

    $("#areaManager").mobiscroll().scroller({
        theme: 'android-holo-light',
        animate:"pop",
        closeOnOverlay:true,
        buttons:[{ 
                text: '取消',
                handler:'cancel'
                },{
                    text: '确认',
                    handler:'set'
                }],
        display: 'bottom',
        headerText:false,
        showLabel:true,
        wheels: [
            [{
                label: '区域选择',
                keys: areaManagerKey,
                values: areaManagerValue
            }]
        ],
        onSelect: function (valueText, inst) {
            changeAreaManager(valueText);
        }
    });

    areaManagerKey = new Array()
    areaManagerValue = new Array()
    $.each(satelliteObj.preProgram, function (e, t) {
        areaManagerKey.push(e);
        areaManagerValue.push(t.product_title);
    })
    $("#preProgram").mobiscroll().scroller({
        theme: 'android-holo-light',
        animate:"pop",
        closeOnOverlay:true,
        buttons:[{ 
                text: '取消',
                handler:'cancel'
                },{
                    text: '确认',
                    handler:'set'
                }],
        display: 'bottom',
        headerText:false,
        showLabel:true,
        wheels: [
            [{
                label: '合成图选择',
                keys: areaManagerKey,
                values: areaManagerValue
            }]
        ],
        onSelect: function (valueText, inst) {
            changePreProgram(valueText);
        }
    });
    areaManagerKey = null;
    areaManagerValue = null;
}

function loadZip(){
    window.setTimeout(function(){
        if(is_phone){
            return;
        }
        JSZipUtils.getBinaryContent('static/data/xian', function(err, content) {
            var new_zip = new JSZip();
            new_zip.loadAsync(content)
            .then(function(zip) {
                new_zip.file("xian.geojson").async("string").then(function(data){
                        var worker = new Worker('static/js/JSONworker.js');
                        worker.postMessage(data);
                        var GeoJSON = new ol.format.GeoJSON({dataProjection:"EPSG:4326" , featureProjection:projection});
                                        worker.onmessage = function (event) {
                                              var data = event.data;
                                              addFeatrueToXian(event.data , GeoJSON) ;
                                        }
                        })
                  new_zip.file("list.json").async("string").then(function(data){
                      districtList =JSON.parse(data);
                })
              })
          });
    },0)
}



function loadMoreScript(list , cd){
    var total = list.length
    var call = function(){
        total--;
        if(total <= 0){
            cd ? cd() : null;
        }
    }
    
    function loadMoreScript_(url){
        if( _.endsWith(url , ".js") ){
            loadJs(url , call)
       }else if( _.endsWith(url , ".css")){
            loadCss(url , call)
       }else{
            total--
       }
    }

    //  for(var i=0,ii = list.length ; i < ii ; i++){
    //      var url = list[i]
    //      loadMoreScript_(url , call)
    //  }
    list.forEach(loadMoreScript_)
}




function loadJs(url, cb){
    dynamicLoad(url, cb , 'script')
}

function loadCss(url, cb){
    dynamicLoad(url, cb , 'style')
}

/**  加载js  / css**/
function dynamicLoad (url, cb , type) {
    var newjs = document.createElement(type);
    // IE
    newjs.onreadystatechange = function(e) {
        if (newjs.readyState === 'loaded' || newjs.readyState === 'complete') {
            newjs.onreadystatechange = null;
            if(cb != null){
            	cb(e)
            }
            
        }
    };
    // others
    newjs.onload = function(e) {
    	if(cb != null){
            cb(e)
        }
    };
    newjs.src = url;
    document.head.appendChild(newjs);
}


/**
 * 修改观察区域
 * */
function changeAreaManager(o){
	var obj = regionShow[queryParamSatellite][pro][parseInt(o)]
	view.fit(obj.extent);
	blurObject(this);
}


/**
 * 声明上线，并请求在线人数
 * */
function asynOnLine(){
	setTimeout(function(){
		var url = root_url+"/data/geos.jsondata?type=onLine"
		 $.getJSON(url, function(dataJson) {
			 $("#onLineNum").html(dataJson)
		 })
	},0)
}


/***
 * 修改预选方案
 * */
function changePreProgram(index){
	var obj = satelliteObj.preProgram[index]
	queryParamBand = obj.name;
	layerVisi = true;
	opa = obj.defOpecity;
	getLatestTimes();
	//调整放大等级
	setMaxZoom(queryParamBand) 
	addProductToDisplay(2 , obj.product_title);
	$("#sectorSelectorBand").get(0).selectedIndex=index+1;
	$('#sectorSelectorBand').selectmenu("refresh");
	updateURL()
}
