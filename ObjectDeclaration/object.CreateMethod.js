var a ={                                                                                             
    name:"teju",
    gender:'female',
    age:26,
    address:"Bangalore"
}
var read = Object.create(a)
read.name="suma"
read.gender="female"
console.log(read);
console.log(a);

// var a2={}
// a2.__proto__=a
// console.log(a2.name="suma");
// console.log(a2.age);
// console.log(a.name);