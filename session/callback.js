var pizzas  = [{
  name:"Cheese Pizza",
  size:"13 inch",
  price:800
},{
  name:"Onion Pizza",
  size:"13 inch",
  price:1800
},{
  name:"Butter Pizza",
  size:"13 inch",
  price:1300
}]
var takeOrder = function(index){
  console.log(`Got Order For ${pizzas[index].name}`);
}
var deliver = function(index){
  console.log("Dispached for Delivary");
}
function makePizza (callback1,callback2){
  console.log("This My Make Pizza!");
  callback1(2);
  callback2();
}
makePizza(takeOrder,deliver);
