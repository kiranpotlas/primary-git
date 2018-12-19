function showMsg (name){
  console.log("hi",name);
}
// showMsg("John");
var sample = ()=>{
  console.log("Welcome Arrow Sample....");
}
var sample1 = (name,age)=>{
  console.log("Welcome Arrow");
  console.log("Hi  :: "+name);
  console.log("with  :: "+age +"years");
}
var sample3 = callback =>{
  console.log("Callback from arrow function");
  callback();
}
var sample4 = name => console.log(name);

sample4('john')
sample3(sample);
// sample1("john smith",29);
