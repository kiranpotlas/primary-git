alert("please enter the user details");
var uDetails={
  // username:"sai",
  // email:"sai@gmail.com",
  // password:"2123232"
}
// var print=`hi ${uDetails.username} ur password was ${uDetails.password}`;
// var print1= uDetails.username+ "is a killer";
// console.log(print);
// console.log(print1);
var details='User details which were entered';
console.log(details);
 var i=0;
var username=prompt("enter the username");
var email=prompt("enter the email");
var password=prompt("enter the password");
uDetails.username=username;
uDetails.email=email;
uDetails.password=password;
var det={};
det.push(uDetails); 
for(let i=0; i<uDetails.length; i++){
  console.log(uDetails);
}
// console.log(username);
// console.log(uDetails)
