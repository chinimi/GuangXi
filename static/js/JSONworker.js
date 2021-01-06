this.addEventListener('message', function (e) {
	var a = e.data
	let dataJson =JSON.parse(a);
	returnIntv(dataJson , this)
}, false);


function returnIntv(dataJson , that){
	var addFeature = dataJson.features.splice(0,50);
    addFeature = {name: "xian",type: "FeatureCollection",features:addFeature} 
	that.postMessage(addFeature)
	if(dataJson.features.length != 0){
		setTimeout(function(){
			returnIntv(dataJson , that)
		} ,150)
	}else{
		that.close()
	}
}