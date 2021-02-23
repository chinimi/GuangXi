
var  add = function(num) {
  var sum = 0;
  for (var i = 0, j = num.length; i < j; i++) {
    sum += parseFloat(num[i])
  }
  return sum.toFixed(2);
}



export var WRU_fufen = function(num1,num2)
{
  var Fufen = 0
  for (var i = 0, j = num1.length; i < j; i++) 
  {
  if (parseFloat(num2[i])==0)
    {
      alert("评估次数不能为0")
      return;
    }
    else 
    {
      var DB = 0
      DB = parseFloat(num2[i])/parseFloat(num1[i])
    }
  }
      
     // =_xlfn.IFS(D13<20%,100,D13<60%,-625*D13^2+250*D13+75,D13<100%,0)

    if(DB<0.2)
    {
      Fufen = 100
    }
    else if (DB<0.6)
    {
      Fufen = (parseFloat(-625*DB*DB+250*DB+75)).toFixed(2)
    }
    else if (DB<1)
    {
      Fufen = 0
    }

    return parseFloat(Fufen)
}
export var SS_fufen = function(num1,num2)
{
  var Fufen = 0
  var DBlist =[];

  for (var i = 0, j = num1.length; i < j; i++) 
  {
    if (parseFloat(num2[i])==0)
    {
      alert("评估次数不能为0")
      return;
    }
    else 
    {
      var DB = 0
      if (parseFloat(num1[i])/parseFloat(num2[i]) >0.8)
      {
        DB = 1
      }
      DBlist.push(DB)
    }
   
  }
  var DN_fufen = add(DBlist);
  Fufen = (DN_fufen/DN_fufen.length)*100
  return parseInt(Fufen)
}
export var PP_fufen = function(num1,num2)
{
  // =_xlfn.IFS(C30="沿河/库居民（河岸以外 1Km 以内范围）",3
  // ,C30="河道/水库管理者",2,C30="河道/水库周边从事生产活动",
  // 1.5,C30="经常来旅游",1,C30="偶尔来旅游",0.5)
  var Fufen = 0
  var PERwlist =[];
  var PPrlist =[];

  for (var i = 0, j = num1.length; i < j; i++) 
  {
    if (parseFloat(num2[i])==0)
    {
      PPrlist.push(parseFloat(num1[i])*3)
      PERwlist.push(3)
    }
    else if (parseFloat(num2[i])==1)
    {
      PPrlist.push(parseFloat(num1[i])*2)
      PERwlist.push(2)
    }
    else if (parseFloat(num2[i])==2)
    {
      PPrlist.push(parseFloat(num1[i])*1.5)
      PERwlist.push(1.5)
    }
    else if (parseFloat(num2[i])==3)
    {
      PPrlist.push(parseFloat(num1[i])*1)
      PERwlist.push(1)
    }
    else if (parseFloat(num2[i])==4)
    {
      PPrlist.push(parseFloat(num1[i])*0.5)
      PERwlist.push(0.5)
    }
  }
  var sumppr = add(PPrlist);
  var sumper = add(PERwlist);
  Fufen = (sumppr/sumper).toFixed(2);
  return Fufen
}

export var FLD_fufen = function(num1,num2,num3)
{
  var fufen = 0
  var list1 =[];
  var list2 =[];
  for (var i = 0, j = num1.length; i < j; i++) 
  {
    list1.push(parseFloat(num1[i])*parseFloat(num2[i])*parseFloat(num3[i]));
    list2.push(parseFloat(num1[i])*parseFloat(num3[i]));
  }
  var FLD = (add(list1)/add(list2)).toFixed(2);

 // =_xlfn.IFS(E19<0.5,0,E19<0.7,25,E19<0.85,50,E19<0.9,75,E19<1,100)
  if (FLD<0.5)
  {
    fufen = 0
  }
  else if (FLD<0.7)
  {
    fufen = 25
  }
  else if (FLD<0.85)
  {
    fufen = 50
  }
  else if(FLD<0.9)
  {
    fufen = 75
  }
  else if (FLD<1)
  {
    fufen = 100
  }
  return fufen
}
