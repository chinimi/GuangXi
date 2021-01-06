//原生日期对象扩展
Date.prototype.format = function(format){
	var o = {
		"M+" : this.getMonth()+1, //month
		"d+" : this.getDate(),    //day
		"h+" : this.getHours(),   //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth()+3)/3),  //quarter
		"S" : this.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
	(this.getFullYear()+"").substr(4 - RegExp.$1.length));
	for(var k in o)if(new RegExp("("+ k +")").test(format))
	format = format.replace(RegExp.$1,
	RegExp.$1.length==1 ? o[k] :
	("00"+ o[k]).substr((""+ o[k]).length));
	return format;
}

function setPIndex(value){
	if(/^[0-9]*$/.test(value)){
		var vp = parseInt(value);
		if(vp < 20){
			url_parameters.p[0] = vp-1;
		}
	}
}
function randomChar(l)  {
	var  x="0123456789qwertyuioplkjhgfdsazxcvbnm";
	var  tmp="";
	var timestamp = new Date().getTime();
	for(var  i=0;i<l;i++)  {
		tmp+=x.charAt(Math.ceil(Math.random()*100000000)%x.length);
	}
	return  timestamp+tmp;
}

//原生字符串扩展
/*************************************************
Usage… 
    var test = "   Test   ";
    var test1 = test.ltrim();   // returns "Test   "
    var test2 = test.rtrim();   // returns "   Test"
    var test3 = test.trim();    // returns "Test"
 *************************************************/
String.prototype.trim = function() {
	   return this.replace(/^\s+|\s+$/g,"");
}
String.prototype.ltrim = function() {
   return this.replace(/^\s+/g,"");
}
String.prototype.rtrim = function() {
   return this.replace(/\s+$/g,"");
}

String.prototype.toDate = function(style) {
	 if (style == null) style = 'yyyy-MM-dd hh:mm:ss';
	 var o = {'y+' : 'y','M+' : 'M','d+' : 'd','h+' : 'h','m+' : 'm','s+' : 's'};
	 var result = {'y' : '','M' : '','d' : '','h' : '00','m' : '00','s' : '00'}
	 var tmp = style;for (var k in o) {if (new RegExp('(' + k + ')').test(style)) {
	 result[o[k]] = this.substring(tmp.indexOf(RegExp.$1), tmp.indexOf(RegExp.$1) + RegExp.$1.length);}}
	 return new Date(result['y'], result['M'] - 1, result['d'], result['h'], result['m'], result['s']);   
}

/*************************************************
Usage… 
    var tmp = '<html><head></head>';
    var safe= tmp.htmlEntities(); // Returns “&lt;html&gt;&lt;head&gt;&lt;/head&gt;”
**************************************************/
String.prototype.htmlEntities = function () {   
    return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
};
/*************************************************
Usage… 
    var tmp = '<a href="htpp://somespammer.com">Some Link</a>';
    var safe= tmp.stripTags(); // Returns “Some Link”;
**************************************************/
String.prototype.stripTags = function () {   
    return this.replace(/<([^>]+)>/g,'');
}


function number_format(number, decimals, dec_point, thousands_sep) {
    /*
    * 参数说明：
    * number：要格式化的数字
    * decimals：保留几位小数
    * dec_point：小数点符号
    * thousands_sep：千分位符号
    * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };
 
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
 
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

Array.prototype.contains = function(val)
{
     for (var i = 0; i < this.length; i++)
    {
       if (this[i] == val)
      {
       return true;
      }
    }
     return false;
}


Array.prototype.remove = function(val)
{
	var index = [];
    for (var i = 0; i < this.length; i++)
    {
       if (this[i] == val)
      {
    	   index.push(i)
      }
    }
    for(var i = 0 ; i< index.length ; i++){
    	this.splice(index[i] - i , 1)
    }
    return index;
}

function isString(str){ 
	return (typeof str=='string')&&str.constructor==String; 
}

/**
* 将二维数组转为 json 字符串
*/
function arrayToJson(o) {     
	var r = [];     
	if (typeof o == "string") return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";     
	if (typeof o == "object") {     
		if (!o.sort) {     
			for (var i in o)     
			r.push(i + ":" + arrayToJson(o[i]));     
			if (!!document.all && !/^\n?function\s*toString\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {     
			r.push("toString:" + o.toString.toString());     
			}     
			r = "{" + r.join() + "}";     
		} else {     
			for (var i = 0; i < o.length; i++) {     
			r.push(arrayToJson(o[i]));     
			}     
			r = "[" + r.join() + "]";     
		}     
		return r;     
	}     
	return o.toString();     
}  



window.getVueComponent = function(url, initFunc) {
							$.ajax({
								type: "get",
								url: url,
								async: false,
								dataType: 'text',
								success: function(data) {
									initFunc(data);
								}
							});
						};
						
						
function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0,  len = obj.length; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
