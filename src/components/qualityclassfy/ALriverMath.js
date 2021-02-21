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
  else{
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