let ip=["192.168.0.4","192.168.0.5","192.168.0.6","192.168.0.7","192.168.0.8","192.168.0.9"];
// here we can declare the initialization outside or inside an for loop
// let ip1=0;
for( let ip1=0; ip1<ip.length; ip1++){
console.log(ip[ip1]);
if(ip[ip1]==="192.168.0.5"){
  ip[ip1]="192.168.0.52"
}
else if(ip[ip1]==="192.168.0.7"){
  ip[ip1]="192.168.0.79"
}
else if(ip[ip1]==="192.168.0.9"){
  ip[ip1]="192.168.0.98"
}
// (ip[ip1]==="192.168.0.5")? "192.168.0.52": ip[ip1];{
}
console.log(ip);

// ip[ip1]="192.168.0.52";
//   }
// }
