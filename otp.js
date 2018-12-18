alert("Generate new OTP");
var oStatus=true;
var otp=["otp1","otp2","otp3","otp4"];
var genOTP=Math.floor(Math.random()*2299);
for(var index=1;index<=otp.length;index++)
while(oStatus){
  let start=prompt("To generate same OTP thrice enter 1,2,3");
  if(start==1){
  console.log(`Your OTP is generated 1st time::${genOTP}`);
}
else if(start==2){
    console.log(`Your OTP is generated 2nd time::${genOTP}`);
}
else if(start==3){
  console.log(`Your OTP is generated 3rd time::${genOTP}`);
}
else if(start==4)
{
  var gennewOTP=Math.floor(Math.random()*200);
  // function Math.random(){
  console.log(`your OTP has been generated 4th time newly::${gennewOTP}`);
}
else{
  oStatus=false;
  console.log("No OTP Generated");
}
}
