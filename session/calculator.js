let x = 10;
let y = 20;
let add = function(num1,num2){
  return num1+num2;
}
let sub = function(num1,num2){
  return num1-num2;
}
let mul = function(num1,num2){
  return num1*num2;
}
let div = function(num1,num2){
  return num1/num2;
}
let operation = function (opert){
  return opert(x,y);
}
var result = operation(div);
console.log(result);
