alert("welcome to registration page");
// var reg=prompt("Enter your name");

function User (name,dob,gender,address,mobileno){
this.name=name;
this.dob=dob;
this.gender=gender;
this.address=address;
this.mobileno=mobileno;
}
let user1= new User("Saikiran","24-03-92","Male","sangareddy","8801673446");
let user2= new User("kiran","21-03-93","Male","sangareddy","8977240392");
let user3= new User("Harish","16-08-92","Male","Hyderabad","9000821608");
//keys name,dob etc are same but values which we pass are changing ,if we not pass the values for the keys it prints undefined defaultly
console.log(user1);
console.log(user2);
console.log(user3);
console.log("Hi" +user1.name+ "you belong to "+user1.address+"location");
