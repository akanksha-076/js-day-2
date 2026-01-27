let user={
    name:"akanksha",
    address:"begusarai",
    mobno:"234567891",
    favcolor:["black","white","blue"],
    demo:function(){
        return "demo";
    }
}
console.log("My name is "+user.name+". my mobile number is "+user.mobno)
console.log(`my name is ${user.name}.My mobile no is ${user.mobno}`)
console.log(user.demo())

//object method
//1. Object.keys(obj)
const key= Object.keys(user)
console.log(key)
const value=Object.values(user)
console.log(value)

console.log(Object.entries(user))

//Object.freeze(obj)
const car = { make: "Toyota", model: "Camry" };
Object.freeze(car);
Object.seal(car);

car.model="XUV700";
car.color = "Blue"; // This property addition is ignored.
console.log(car); // undefined

//what is the dofferrece between obj.frese and onj..seal
//in seal we chAnge the existing value but cant add a new value
// in freeze we cant even change or add existing value.


