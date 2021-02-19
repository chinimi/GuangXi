//流量过程变异程度
//评估年天然月径流量年平均值（Qu）
var  add = function(num) {
  var sum = 0;
  for (var i = 0, j = num.length; i < j; i++) {
    sum += parseFloat(num[i])
  }
  return sum.toFixed(2);
}
var  add_abs = function(num) {
  var sum = 0;
  for (var i = 0, j = num.length; i < j; i++) {
    sum += math.abs(parseFloat(num[i]))
  }
  return sum.toFixed(2);
}
var  avg = function(num) {
  var sum = 0;
  for (var i = 0, j = num.length; i < j; i++) {
    sum += parseFloat(num[i]);
  }
  var da = (sum / num.length).toFixed(2)
  return da;
}

export var FD_Value = function(num1,num2,ave) {
  var par= [];
  for (var i = 0, j = num1.length; i < j; i++) {
    par[i]  = Math.pow((parseFloat(num1[i])-parseFloat(num2[i]))/parseFloat(ave),2)
  }
  var sum = add(par)/2;
  return sum;
}
///F4<0.05,100,F4<0.1,75,F4<0.3,50,F4<1.5,25,F4<3.5,10
export var FD_Fufeng = function(num)
{
  var fufeng = 0;
  if (num<0.05)
  {
    fufeng =100;
  }
  else if (num>=0.05 && num<0.1)
  {
    fufeng =75;
  }
  else if(num>=0.1 && num<0.3)
  {
    fufeng =50;
  }
  else if (num>=0.3 && num<1.5)
  {
    fufeng =25;
  }
  else if(num>=1.5 && num<3.5)
  {
    fufeng =10;
  }
  else
  {
    fufeng =0;
  }

  return fufeng;
}

export var FD_Qu_AVE= function(num) {
  
  return avg(num)
}
export var HFV_HFM =  function(num1,num2) {
  if (parseFloat(num1)>=parseFloat(num2))
  {
    return 1;
  }
  else{
    return 0;
  }
}
export var LFV_LFM =  function(num1,num2,num3) {
  if (parseFloat(num1)<parseFloat(num2))
  {
    return parseFloat(num1)/parseFloat(num2)
  }
  else if (parseFloat(num1)>=parseFloat(num2) &&parseFloat(num1)<=parseFloat(num3))
  {
    return 1
  }
  else if (parseFloat(num1) >parseFloat(num3))
  {
    return 1-0.3*(parseFloat(num1)/parseFloat(num3))
  }
}

export var PHF =  function(num1,num2,num3)
{
  var sum = 0;
  for (var i = 0, j = num1.length; i < j; i++) {
     var dif = 0;
     if (parseFloat(num1[i])>=parseFloat(num2[i]) && parseFloat(num1[i])<=parseFloat(num3[i]))
     {
        dif = 0;
     }
     else if (parseFloat(num1[i])<parseFloat(num2[i]))
     {
        dif = -1;
     }
     else if (parseFloat(num1[i]) >parseFloat(num3[i]))
     {
        dif = 1;
     }
     if(dif>0)
     {
       sum +=dif;
     }
  
  }
  return (1-sum/12).toFixed(2);
}
export var PLF =  function(num1,num2,num3)
{ 
  var sum = 0;
  for (var i = 0, j = num1.length; i < j; i++) {
     var dif = 0;
     if (parseFloat(num1[i])>=parseFloat(num2[i]) && parseFloat(num1[i])<=parseFloat(num3[i]))
     {
        dif = 0;
     }
     else if (parseFloat(num1[i])<parseFloat(num2[i]))
     {
        dif = -1;
     }
     else if (parseFloat(num1[i]) >parseFloat(num3[i]))
     {
        dif = 1;
     }
     if(dif<0)
     {
       sum +=dif;
     }
  
  }
  return (1-sum/12).toFixed(2);
}
export var PVL =  function(num1,num2)
{
  var sum = 0;
  for (var i = 0, j = num1.length; i < j; i++) {
        var dif = 0;
        if (parseFloat(num1[i])<parseFloat(num2[i]))
        {
          dif = 1;
        }
        else{
          dif =  0
        }
        if (dif>0)
        {
          sum +=dif;
        }
     }
     return (1-sum/6).toFixed(2);
}
export var SFS =  function(num1)
{

}



