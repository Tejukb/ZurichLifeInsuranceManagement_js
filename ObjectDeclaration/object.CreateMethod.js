var a1 ={                                                                                             
    name:"teju",
    gender:'female',
    age:26,
    address:"Bangalore"
}
var read = Object.create(a1)
read.name="suma"
read.gender="female"
console.log(read);
console.log(a1);

// var a2={}
// a2.__proto__=a1
// console.log(a2.name="suma");
// console.log(a2.age);