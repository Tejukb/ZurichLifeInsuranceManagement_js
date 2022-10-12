//declaration of an array
let arr1 = [10,50, 69, 76, 38]

//case1: accessing elements of an array in normal way
let x = arr1[2]
let y = arr1[4]
console.log(x,y);          

//case2: accessing first 2 elements of an array 
let [m,n] = arr1
console.log(m,n);               

//case3: accessing first 3 elements of an array 
let [d,e,f] = arr1
console.log(d,e,f);               

// //case4: accessing elements of an array by skipping the elements in between
let[a,,,b]=arr1
console.log(a,b);       
