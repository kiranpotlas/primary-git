alert("welcome to twitter");
var lstatus=true;
var register=[];
// for(var index=0; index<register.length; index++)
while(lstatus){
  var start=prompt("enter 1,2 or 3 for register,login and exit");
  if(start==1){
    alert("Register here");
  var username=prompt("enter the username");
  var password=prompt("enter the password");
  alert("registration successful");
console.log("username::",username);
console.log("password::",password);
  }
  if(start==2){
    alert("login here");
    var username=prompt("enter username");
    var password=prompt("enter password");
    var login={};
    login.username==username;
    login.password==password;
    console.log(login.username);
    console.log(login.password);
    alert("login successful");
    console.log("welcome to home page");
  }
  if(start==3){
    var exit=alert("Exit")
    console.log(exit);
  }
  else{
    lstatus=false;
  }
}
console.log(register);
