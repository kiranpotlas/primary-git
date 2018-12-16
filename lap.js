alert("Time lap between 24hours");
var timezone=prompt("Enter the timezone between 24hours");
if(timezone<=5)
{
  console.log(timezone,":AM Good Night");
}
else if(timezone<12){
  console.log(timezone,":AM Good Morning");
}
else if(timezone=12){
  console.log(timezone,":PM Noon");
}
else if(timezone<=18){
  console.log(timezone,":PM Good Afternoon");
}
else if(timezone<=24){
  console.log(timezone,":PM Good Evening");
}
else{
  console.log("Not a valid hour");
}
