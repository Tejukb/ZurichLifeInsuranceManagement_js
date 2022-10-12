var d= new Date()

console.log(d.toDateString());
console.log("today's date is:"+d.getDate());
console.log("today's day is:"+d.getDay());
console.log("today's month is:"+d.getMonth());
console.log("today's year is:"+d.getFullYear());


date=d.toDateString()
console.log(date);
console.log(date.split(" ")[2]);