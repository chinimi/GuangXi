export var PHP_fufen = function(num)
{
  var fufen= 0
  if(num==0){
    fufen =100
  }
  else if (num==1)
  {
    fufen =80
  }
  else if (num ==2)
  {
    fufen =60
  }
  else if (num ==3)
  {
    fufen =40
  }
  else if (num ==4){
    fufen =20
  }
  return parseInt(fufen)
}
export var FOE_fufen = function(num1,num2)
{
  var fufen = 0
  var FOE = parseFloat(num1)/parseFloat(num2)

  if (FOE<0.25)
  {
    fufen = 0
  }
  else if (FOE>=0.25 && FOE<0.5)
  {
    fufen = 10
  }
  else if (FOE>=0.5 && FOE<0.6)
  {
    fufen = 30
  }
  else if (FOE>=0.6 && FOE<0.75)
  {
    fufen = 40
  }
  else if (FOE>=0.75 && FOE<0.85)
  {
    fufen = 60
  }
  else if (FOE>=0.85 && FOE<1)
  {
    fufen = 80
  }
  else 
  {
    fufen = 100
  }
  return parseInt(fufen)
}

var  add = function(num) {
  var sum = 0;
  for (var i = 0, j = num.length; i < j; i++) {
    sum += parseFloat(num[i])
  }
  return sum.toFixed(2);
}

export var Alr_fufen = function(num1,num2,num3)
{
  var Fufen = 0
  var AIVlist =[];
  var AVlist = []
  for (var i = 0, j = num1.length; i < j; i++) 
  {
    AIVlist.push(parseFloat(num1[i])*parseFloat(num2[i])*parseFloat(num3[i]));
    AVlist.push(parseFloat(num1[i])*parseFloat(num3[i]));
  }
  var sumAIV = add(AIVlist);
  var sumAV =  add(AVlist);
  var IPS = (parseFloat(sumAIV/sumAV)).toFixed(2);
  //F16<5,15,IF(F16<9,35,IF(F16<13,65,IF(F16<17,85,IF(F16>=17,100,)))))

  if (IPS<5)
  {
    Fufen = 15;
  }
  else if (IPS<9&&IPS>=5)
  {
    Fufen = 35;
  }
  else if (IPS<13&&IPS>=9)
  {
    Fufen = 65;
  }
  else if (IPS<17&&IPS>=13)
  {
    Fufen = 85;
  }
  else if (IPS>=17)
  {
    Fufen = 100;
  }
  return parseInt(Fufen)
}