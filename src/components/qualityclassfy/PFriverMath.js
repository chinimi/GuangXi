
//PF 物理结构准测层
var  add = function(num) {
  var sum = 0;
  for (var i = 0, j = num.length; i < j; i++) {
    sum += parseFloat(num[i])
  }
  return sum.toFixed(2);
}


export var SAr = function(num)
{
    var SA_Fufen=0
    if (parseFloat(num)<15)
      {
          SA_Fufen = 90
      }
      else if (parseFloat(num)<30 &&parseFloat(num)>=15 )
      {
          SA_Fufen = 75
      }
      else if (parseFloat(num)<45 &&parseFloat(num)>=30)
      {
          SA_Fufen = 25
      }
      else 
      {
        SA_Fufen = 0
      }
    return parseInt(SA_Fufen)
}

export var SCr = function(num)
{
    var SC_Fufen=0
    if (parseFloat(num)>75)
      { 
        SC_Fufen = 90
      }
      else if (parseFloat(num)<=75&&parseFloat(num)>50)
      {
        SC_Fufen = 75
      }
      else if (parseFloat(num)<=50&&parseFloat(num)>25)
      {
        SC_Fufen = 25
      }
      else 
      {
        SC_Fufen = 0
      }
    return parseInt(SC_Fufen)
}

export var SHr = function(num)
{
  var SH_Fufen=0
  if (parseFloat(num)<1)
  { 
    SH_Fufen = 90
  }
  else if (parseFloat(num)<2&&parseFloat(num)>=1)
  {
     SH_Fufen = 75
  }
  else if (parseFloat(num)<3&&parseFloat(num)>=2)
  {
    SH_Fufen = 25
  }
  else 
  {
     SH_Fufen = 0
  }
  return parseInt(SH_Fufen)
}

export var SMr = function(num)
{
  var SM_Fufen=0

  if (num==1)
  { 
    SM_Fufen = 90
  }
  else if (num==2)
  {
     SM_Fufen = 75
  }
  else if (num==3)
  {
    SM_Fufen = 25
  }
  else 
  {
     SM_Fufen = 0
  }
  return parseInt(SM_Fufen)
}

export var STr = function(num)
{
  var ST_Fufen=0
  
  if (num==1)
  { 
    ST_Fufen = 90
  }
  else if (num==2)
  {
      ST_Fufen = 75
  }
  else if (num==3)
  {
    ST_Fufen = 25
  }
  else 
  {
      ST_Fufen = 0
  }

  return parseInt(ST_Fufen)
}

export var RVS =  function(num)
{
  var shuoming="";
  var Fufen=0;
  if (parseFloat(num)<=10)
  { 
      shuoming = "植被稀疏"
      Fufen = 20

  }
  else if (parseFloat(num)<=40&&parseFloat(num)>10)
  {
      shuoming = "中度覆盖"
      Fufen = 50
  }
  else if (parseFloat(num)<=75&&parseFloat(num)>40)
  {
      shuoming = "重度覆盖"
      Fufen = 80
  }
  else if(parseFloat(num)>75)
  {
    shuoming = "极重覆盖"
    Fufen = 100
  }
  return parseInt(Fufen);

}

export var HeA_PF =  function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 0
  }
  else 
  {
    Fufen= -5
  }
  return parseInt(Fufen);
}
export var CaiS_PF =  function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 0
  }
  else 
  {
    Fufen= -40
  }
  return parseInt(Fufen);
}
export var JianZ_PF =  function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 0
  }
  else 
  {
    Fufen= -10
  }
  return parseInt(Fufen);
}
export var GongL_PF =  function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 0
  }
  else 
  {
    Fufen= -10
  }
  return parseInt(Fufen);
}
export var Laj_PF =  function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 0
  }
  else 
  {
    Fufen= -60
  }
  return parseInt(Fufen);
}
export var GongY_PF =  function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 0
  }
  else 
  {
    Fufen= -5
  }
  return parseInt(Fufen);
}

export var GuanD_PF =  function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 0
  }
  else 
  {
    Fufen= -5
  }
  return parseInt(Fufen);
}
export var NongY_PF =  function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 0
  }
  else 
  {
    Fufen= -15
  }
  return parseInt(Fufen);
}
export var XuM_PF =  function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 0
  }
  else 
  {
    Fufen= -10
  }
  return parseInt(Fufen);
}

export var YuL_PF=function(num)
{
  var Fufen =0
  if (num==0)
  {
    Fufen = 100
  }
  else if (num==1)
  {
    Fufen= 75
  }
  else if (num==2)
  {
    Fufen= 25
  }
  else if (num==3)
  {
    Fufen= 0
  }
  return parseInt(Fufen);
}
