
var user = [{
  name:"saikiran",
  accountid:100,
  bal:1000,
  branch:"sangareddy"

  },{
    name:"kiran",
    accountid:101,
    bal:1000,
    branch:"Hyderabad"
},{
  name:"sai",
  accountid:102,
  bal:2000,
  branch:"pune"
}]
alert("Welcome to bank");
let bank=prompt("Enter 1.accountinfo 2.balenq 3.deposit 4.withdraw");
var bstatus=true;
// let amountdep=prompt("enter deposit amount");
// let amountdraw=prompt("enter amount to withdraw");
// function(amountdep){
//   var dep=(user[index].bal)+amountdep;
//   console.log(dep);
// }
// function(){
//   amountdraw<(user[index].bal);
//   var draw=(user[index].bal)-amountdraw;
//   console.log(draw);
// }
if(bank=1){
var account= function(index){
  console.log(`Account details::user was ${user[index].name} holding a id ${user[index].accountid} belongs to ${user[index].branch} branch. `);
}}
else if(bank=2){
var balenquiry = function(hi){
  console.log(`Balance of:: ${user[hi].accountid} is::${user[hi].bal}`);
}}

else if(bank=3){
var deposited=(index)=>{
  console.log(`Balance deposited in ${user[index].accountid} is ${dep}`);
}
}
else if(bank=4){
  var withdraw=(index)=>{
  console.log(`Balance withdrawn from ${user[index].accountid} is ${draw}`);
}
}
// else{
//   console.log(exit);
// }
function bankstatus(callback1,callback2,callback3,callback4){
  console.log("This is my account status");
  callback1(2);
  callback2(1);
  callback3();
  callback4();
}
bankstatus(account,balenquiry,deposited,withdraw);
