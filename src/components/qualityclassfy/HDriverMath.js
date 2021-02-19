//流量过程变异程度
//评估年天然月径流量年平均值（Qu）
// var  add = function(arguments) {
//   var sum = 0;
//   for (var i = 0, j = arguments.length; i < j; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
var  avg = function(num) {
  var sum = 0;
  for (var i = 0, j = num.length; i < j; i++) {
    sum += parseFloat(num[i]);
  }
  var da = (sum / num.length).toFixed(2)
  return da;
}
export var FD_Qu_AVE= function(num) {
  
  return avg(num)
}
export var FD_Fufeng= function(num) {
  return avg(num)
}

