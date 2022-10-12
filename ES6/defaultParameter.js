function m1(a,b)
{                                     //nan
   console.log(a*b);
}
m1(2)
//==============================

function m2(a,b=2)
{
    console.log(a+b);
}
m2(2)                             // visa versa is not possible 
//===============================

function m3(a,b=4)
{
    console.log(a+b);
}
m3(2,6)
//===============================

// class abc{
// constroctur(a,b=2)
// {
//     console.log(a);
//     console.log(b);      
// }
// }
//  new abc (10,20)