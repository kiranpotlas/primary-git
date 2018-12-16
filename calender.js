alert("2019 calender");
var month=prompt("Enter the month number");
var months=["","January","February","March","April","May","June","July","August","September","October","November","December"];
for(index=0;index<12;index++){
if(month==index){
    console.log(months[index]);
}
}
var entry=(month<=4)? "Winter Season":
(month<=8)? "Summer Season":
(month<=12)? "Rainy Season":
"not a valid Number";
console.log(entry);
// if(month<=4){
//   console.log("winter season");
// }
// else if(month<=8){
//   console.log("summer season");
// }
// else if(month<=12){
//   console.log("rainy season");
// }
// else{
//   console.log("not allowed");
// }
