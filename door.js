

var selectoption=prompt("Enter 1:Room1, 2:Room2, 3:Room3");
switch(selectoption){
  case"1":room1();
  break;
  case"2":room2();
  break;
  case"3":room3();
  break;
  default:console.log("Required option is invalid");
}
var openRoom1=["room1","Sai"];
var openRoom2=["room2","Kiran"];
var openRoom3=["room3","Ram"];

for(var count=1;count<3;count++)
function room1(){
  alert("Your are near the door of Room1");
  var oStatus=true;
  while(oStatus){
    let start=prompt("To open room door enter 1,2,3");
    if(start==1){
      alert("room1 door opened once by ::" +(openRoom1[1]));
    console.log(`Hi:: ${openRoom1[1]} ${openRoom1[0]}::Door opens 1st time.`);
  }
  else if(start==2){
    alert("room1 door opened twice by ::" +(openRoom1[1]));
      console.log(`Hi:: ${openRoom1[1]} ${openRoom1[0]}::Door opens 2nd time.`);
  }
  else if(start==3){
    alert("room1 door opened thrice by ::" +(openRoom1[1]));
    console.log(`Hi:: ${openRoom1[1]} ${openRoom1[0]}::Door opens 3rd time.`);
  }
  else if(start==4)
  {    // function Math.random(){
    alert("room1 door blocked");
    console.log(`Hi:: ${openRoom1[1]} ${openRoom1[0]}::Door was blocked.`);
  }
  else{
    oStatus=false;
    console.log("No action done");
  }
}
}
//
// }
//
// var doorOpen=(doorOpen(room,name));
// function doorOpen(room,name){
//   var notOpen=false;
//   for(open of openRoom){
//   if(open.room==room){
//     // console.log(`your AccountNo:${account.accountId} Name::${account.name} Balance::${account.balance}`);
//     notOpen=true;
//     return open;
// }
// while(oStatus){
//   let start=prompt("Enter room no to open");
//   if(start==1){
//   console.log(`Open the door::${doorOpen}`);
// }
// else if(start==2){
//     console.log(`Your OTP is generated 2nd time::${genOTP}`);
// }
// else if(start==3){
//   console.log(`Your OTP is generated 3rd time::${genOTP}`);
// }
// else if(start==4)
// {
//   var gennewOTP=Math.floor(Math.random()*200);
//   // function Math.random(){
//   console.log(`your OTP has been generated 4th time newly::${gennewOTP}`);
// }
// else{
//   oStatus=false;
//   console.log("No OTP Generated");
// }
// }
