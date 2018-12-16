let users=["mike","tike","son","fight","hero"]
let obj={name:"john", id:"123"};
// var index
for(index in users)
{
  console.log(index);
  console.log(users[index]);
}
// if(tike=true){
//   console.log(tike);
// }
// for(name in obj){
//   console.log(obj[name])
// }
for(name in obj){
  // console.log('name');
  console.log(obj['name']);
}
var keysArr=object.keys(obj).length;
console.log(keysArr);
for (var index = 0; index<object.keys(obj).length; index++){
  console.log("key:",objext.key(obj)[index]);
}
