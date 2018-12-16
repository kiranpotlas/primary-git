let users=["mike","tike","son","fight","hero"]
let age=[20,30,23,43,22]
let combo=[users,age]
let actor={heroine:"smitha", gender:"female"};
let jumbo=[combo]
jumbo.push(actor);
let index=0
let indexo=0
for(;indexo<actor.length;indexo++){
  console.log("heroine::",actor.heroine);
  console.log("gender::",actor.gender);
for( ;index<users.length;index++){
  console.log(users[index]);
if(users[index]==="son"){
  users[index]="father";
}
}
// users[index]=="son"? "father": "users[index]"
}
// console.log(users);

for(var ooindex=0; ooindex<jumbo.length; ooindex++){
console.log(jumbo[ooindex],jumbo['actor']);
// here oindex means outerindex i.e.combo in which we have users and age arrey
for(var oindex=0; oindex<jumbo[ooindex].length; oindex++){
  console.log(jumbo[ooindex][oindex]);
//   // inorder to print internal elements of users and age we go for other nested loop
  for(var iindex=0; iindex<combo[oindex].length; iindex++){
    console.log(jumbo[ooindex][oindex][iindex]);
}
  }
}
