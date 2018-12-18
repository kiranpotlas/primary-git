// function call with no parameters
function bank(){
  alert("Hello welcome to Bank");
}

function accountGen(name,id,address){
alert(`Hi your name is ${name}..new id::${id} was gemerated on address::${address}`);
console.log(`Hi your name is ${name}..new id::${id} was generated on address::${address}`);
}
// function call with no arguments
bank();
accountGen(name=prompt("enter your name"),
id=prompt("Please enter your a new id"),
address=prompt("you stay at"));
alert("your account was generated successfully");
console.log("your account was generated successfully");
// fun1(name1=name,id1=id,address);
var selectoption=prompt("Enter 1:Accountdetails, 2:Bal enquiry, 3:Deposit, 4:withdraw, 5:exit");
switch(selectoption){
  case"1":accDetails();
  break;
  case"2":showBal();
  break;
  case"3":deposit();
  break;
  case"4":withdraw();
  break;
  case"5":exit();
  break;
  default:console.log("Required option is invalid");
}
var accounts=[
  {accountId:"100", name:"sai", age:26, address:"srd", balance:5000},
     {accountId:"101", name:"kiran", age:28, address:"hyd", balance:2000},
        {accountId:"102", name:"ram", age:25, address:"goa",balance:1000},
           {accountId:"103", name:"harish", age:23, address:"pune",balance:10000}];
function findAcc(accountId){
  var noAcc=false;
  for(account of accounts){
  if(account.accountId==accountId){
    // console.log(`your AccountNo:${account.accountId} Name::${account.name} Balance::${account.balance}`);
    noAcc=true;
    return account;
  }
}
if(!noAcc){
  alert("Account not Found");
  return null;
}
}
function showBal(){
  var accId=prompt("Enter the account id:");
if(accId=findAcc(accountId)){
    alert("welcome to bank");
    console.log(`your accountbalance::${account.balance}`);
  }
}
