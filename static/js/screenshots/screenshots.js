//注：使用Jcrop截图，需引入jquery.Jcrop.css、jquery.js、jquery.Jcrop.js
var isWheeleel = true
var addImageButton

var screenshots={
    minHeight:500,
    minWidth:700,
    api:null,
    size:null,
}
    /**
     * 初始化
     * @param url
     */
    init:function(x,y){
        var oSnapshot=document.getElementById("snapshot");
        var oBut=document.getElementById("screenDown");
        var api = null;
        oSnapshot.style.display="block";
		isWheeleel = false
        //创建Jcrop截图
        $('#map').Jcrop({     //ol-viewport     //ol-unselectable
            bgOpacity: 0.5,
            bgColor:"black",
            addClass: 'jcrop-normal',
            onChange:   screenshots.showCoords,
            onSelect:   screenshots.showCoords,
            onRelease:  screenshots.clearCoords,
        },function(){
        	screenshots.api = this;
            api = this;
            if(!screenshots.size){
                screenshots.size = [x - screenshots.minWidth / 2,y- screenshots.minHeight / 2,x+screenshots.minWidth / 2,y+screenshots.minHeight / 2];
            }
        	screenshots.api.setSelect(screenshots.size);
        	screenshots.api.setOptions({ bgFade: true });
        	screenshots.api.ui.selection.addClass('jcrop-selection');
        });


        /**
         * 点击DownLoad下载所截图片时需要的信息
         */
        oBut.onclick=function(){
            //获取到需要传递的参数（星标、仪器、经纬度、分辨率）
			var self = $("#screenDown")[0]
			var x1 = parseInt(self.x1) ;
			var x2 = parseInt(self.x2) ;
			var y1 = parseInt(self.y1) ;
			var y2 = parseInt(self.y2) ;

			
			var leftTopXY=map.getCoordinateFromPixel([x1,y1]);
            var bottomRightXY=map.getCoordinateFromPixel([x2,y2]);
			//TODO 判断出界
	        var projX1 = leftTopXY[0] < projection.extent_[0] ? projection.extent_[0] : leftTopXY[0]
	        var projY1 = leftTopXY[1] > projection.extent_[3] ? projection.extent_[3] : leftTopXY[1]
	        var projX2 = bottomRightXY[0] > projection.extent_[2] ? projection.extent_[2] : bottomRightXY[0]
	        var projY2 = bottomRightXY[1] < projection.extent_[1] ? projection.extent_[1] : bottomRightXY[1]
	        
			var origin = map.getPixelFromCoordinate([projX1,projY1]);
	        var origin1 = map.getPixelFromCoordinate([projX2,projY2]);
			
            expGifMethod(Math.round( origin[0] + 1)
			            , Math.round(origin[1] - 1)
						, Math.round(origin1[0] -1)
						, Math.round(origin1[1]) + 1)
            $('#determine').click()
    }

        /**
         * 点击“取消”调用的函数
         */
        $('#determine').click(function(e) {
            //取消Jcrop
            //api.release();
            api.destroy();
            //不显示截图下拉框
            oSnapshot.style.display="none";
			isWheeleel = true
        });
    },


    showCoords:function(c){			
		var self = $("#screenDown")[0]
		self.x1 = c.x;
		self.x2 = c.x2;
		self.y1 = c.y;
		self.y2 = c.y2;

		
		// if(self.x2 - self.x1 < screenshots.minWidth || self.y2 - self.y1 < screenshots.minHeight){
		// 	screenshots.api.setSelect(screenshots.size);
		// 	return ;
		// }
        screenshots.size = [self.x1 , self.y1 , self.x2 , self.y2]
		screenshots.addImageButton(c.screenX,c.screenY , c.h ,c.w)
    },
     
	
    clearRes:function(){
        var owv_resolution=document.getElementById("wv-image-resolution");
        var owv_option=owv_resolution.getElementsByTagName("option");
        console.log(owv_option);
        console.log(owv_option.length);
        for (var i=0;i<owv_option.length;i++){
            owv_resolution.removeChild(owv_option[0]);
        }
    },

    /**
     * 将浮点数四舍五入，取小数点后1位
     * @param x
     * @returns {Number}
     */
    formatNum:function round(x){
        var f = parseFloat(x);
        if (isNaN(f)) {
            return;
        }
        f = Math.round(x*10)/10;
        return f;
    },
	 /**
     * 添加按钮，延迟0.5s
     * @param x
     * @returns {Number}
     */
	addImageButton:function(x,y,h,w){
		if(h>10 && w>10){
			$("#snapshot").css("display","block")
			$("#snapshot").css("top" , y-60+"px")
		    $("#snapshot").css("left", x+5+"px")
		}else{
			$("#snapshot").css("display","none")
		}
		
		var $that = $("#snapshot")
		var offset  =  $that.offset()
		var clienH = $(window).height() ;
		var clienW = $(window).width()
		
		var height = $that.css("height")
		height = parseFloat(height.substr(0,height.length-2))
		var width = $that.css("width")
		width = parseFloat(width.substr(0,width.length-2))
		//snapshotType
		//snapshotScala
		if(offset.top > clienH-height){
			var topOffset = offset.top - clienH + height
			$("#snapshot").css("top" , y-60-topOffset+"px")
		}
		if(offset.left > clienW-width){
			var leftOffset = offset.left - clienW + width
			$("#snapshot").css("left" , x+5-leftOffset+"px")
		}
	}

}


