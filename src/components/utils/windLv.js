	var windLv = [[0.3,1.5],[1.6,3.3],[3.4,5.4],[5.5,7.9],[8.0,10.7],[10.8,13.8],[13.9,17.1],[17.2,20.7],
				  [20.8,24.4],[24.5,28.4],[28.5,32.6],[32.7,36.9],[37,41],[42,45],[46,51],[52,59],[60,69],[70]]
	 
	function isBetween(min , max , target){
		if(min != null && max != null) return target >= min && target <= max
		else if(min != null && max == null)return target >= min
		else if(min == null && max != null) return target <= max
		else return false;
	}
	
	var getWindLv = function getWindLv(speed){
		for(var i = 0 ; i < windLv.length ; i++){
			if(isBetween(windLv[i][0] , windLv[i][1] , speed)) return i
		}
	}
	export default {getWindLv: getWindLv}