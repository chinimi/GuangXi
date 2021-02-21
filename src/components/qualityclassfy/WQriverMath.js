export var DO_fufen = function(num)
{
  var fufen = 0
   if(parseFloat(num)>7.5)
   {
    fufen = 100
   }
   else if (parseFloat(num)>6&&parseFloat(num)<=7.5)
   {
    fufen = 80
   }
   else if (parseFloat(num)>5&&parseFloat(num)<=6)
   {
    fufen = 60
   }
   else if (parseFloat(num)>3&& parseFloat(num)<=5)
   {
    fufen = 30
   }
   else if (parseFloat(num)>2  && parseFloat(num)<=3)
   {
    fufen = 10
   }
   else 
   {
    fufen = 0
   }
   return fufen
}


//CODMNr+BODr+NH3-Nr)

export var CODMNr_fufen = function(num)
{
   var fufen = 0
   if(parseFloat(num)<2)
   {
    fufen = 100
   }
   else if (parseFloat(num)>=2&&parseFloat(num)<4)
   {
    fufen = 80
   }
   else if (parseFloat(num)>=4&&parseFloat(num)<6)
   {
    fufen = 60
   }
   else if (parseFloat(num)>=6&& parseFloat(num)<10)
   {
    fufen = 30
   }
   else if (parseFloat(num)>=10  && parseFloat(num)<15)
   {
    fufen = 0
   }
   else 
   {
    fufen = 0
   }
   
   return parseInt(fufen)
}
export var BODr_fufen = function(num)
{
   var fufen = 0
   if(parseFloat(num)<3)
   {
    fufen = 100
   }
   else if (parseFloat(num)>=3&&parseFloat(num)<3.5)
   {
    fufen = 80
   }
   else if (parseFloat(num)>=3.5&&parseFloat(num)<4)
   {
    fufen = 60
   }
   else if (parseFloat(num)>=4&& parseFloat(num)<6)
   {
    fufen = 30
   }
   else if (parseFloat(num)>=6  && parseFloat(num)<10)
   {
    fufen = 0
   }
   else 
   {
    fufen = 0
   }
  
   return parseInt(fufen)
}
export var NH3_Nr_fufen = function(num)
{
  var fufen = 0
  if(parseFloat(num)<0.15)
  {
   fufen = 100
  }
  else if (parseFloat(num)>=0.15&&parseFloat(num)<0.5)
  {
   fufen = 80
  }
  else if (parseFloat(num)>=0.5&&parseFloat(num)<1)
  {
   fufen = 60
  }
  else if (parseFloat(num)>=1  && parseFloat(num)<1.5)
  {
   fufen = 30
  }
  else if (parseFloat(num)>=1.5&& parseFloat(num)<2)
  {
   fufen = 0
  }
  else 
  {
   fufen = 0
  }
  return parseInt(fufen)
}


///shen
export var ARr_fufen = function(num)
{
  var fufen = 0
  if(parseFloat(num)<0.05)
  {
   fufen = 100
  }
  else if (parseFloat(num)>=0.05&&parseFloat(num)<0.1)
  {
   fufen = 60
  }
  else if (parseFloat(num)>=0.1)
  {
   fufen = 0
  }
  return parseInt(fufen)
}
//gong
export var HGr_fufen = function(num)
{

  //=_xlfn.IFS(C16<0.00005,100,C16<0.0001,80,C16<0.001,40,C16>=0.001,0)
  var fufen = 0
  if(parseFloat(num)<0.00005)
  {
   fufen = 100
  }
  else if (parseFloat(num)>=0.00005&&parseFloat(num)<0.0001)
  {
   fufen = 80
  }
  else if (parseFloat(num)>=0.0001 && parseFloat(num)<0.001)
  {
   fufen = 40
  }
  else 
  {
    fufen = 0
  }
  return parseInt(fufen)
}
export var CDr_fufen = function(num)
{
  var fufen = 0
 // =_xlfn.IFS(D16<0.001,100,D16<0.005,80,D16<0.01,40,D16>=0.01,0)
  if(parseFloat(num)<0.001)
  {
   fufen = 100
  }
  else if (parseFloat(num)>=0.001&&parseFloat(num)<0.005)
  {
   fufen = 80
  }
  else if (parseFloat(num)>=0.005&&parseFloat(num)<0.01)
  {
   fufen = 40
  }
  else 
  {
    fufen = 0
  }
  return parseInt(fufen)
}
export var CRr_fufen = function(num)
{
  var fufen = 0

  //=_xlfn.IFS(E16<0.01,100,E16<0.05,80,E16<0.1,40,E16>=0.1,0)
  if(parseFloat(num)<0.01)
  {
   fufen = 100
  }
  else if (parseFloat(num)>=0.01&&parseFloat(num)<0.05)
  {
   fufen = 80
  }
  else if (parseFloat(num)>=0.05 && parseFloat(num)<0.1)
  {
    fufen = 40
  }
  else 
  {
    fufen = 0
  }
  return parseInt(fufen)
}
export var PBr_fufen = function(num)
{
  var fufen = 0

  //=_xlfn.IFS(F16<0.01,100,F16<0.05,80,F16<0.1,40,F16>=0.1,0)
  if(parseFloat(num)<0.01)
  {
   fufen = 100
  }
  else if (parseFloat(num)>=0.01&&parseFloat(num)<0.05)
  {
   fufen =80
  }
  else if (parseFloat(num)>=0.05 && parseFloat(num)<0.1)
  {
    fufen = 40
  }
  else 
  {
    fufen = 0
  }
  return parseInt(fufen)
}
export var BEN_fufen = function(num)
{
  var fufen= 0
  if(parseFloat(num)==0){
    fufen =100
  }
  else 
  {
    fufen =30
  }
  return parseInt(fufen)
}







export var HMPr_fufen = function(num)
{
  
}




export var OCP_fufen = function(num)
{
   var fufen = 0
  
   return fufen
}

export var ZJS_fufen = function(num)
{
   var fufen = 0
  
   return fufen
}