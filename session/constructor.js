function Motor (name,wheels,company,price){
  this.name = name;
  this.wheels = wheels;
  this.company = company;
  this.price = price;
}

let motor1 = new Motor("Rx 100",2,"Yamaha",45000);
let motor2 = new Motor("Fz",2,"Yamaha",145000);
let motor3 = new Motor("Scooty",2,"TVS");
console.log(motor1);
console.log(motor2);
console.log(motor3);
