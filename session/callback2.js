// While we call one function and pass
//  other function as argument with hope that function will get
//  executed some time that is a callback;

function fun2(){
  console.log(" Im function2 body");
}
function fun1(callback){
  // console.log(callback);
  console.log("I am Function1 Body");
  callback();
}
fun1(fun2);
