var mul=(x,y)=>{                     // sigle line arrow function
    console.log(x*y);
}
mul(2,5)


var smaller=(m,n)=>{                     // multi-line arrow function
    if(m<n){
        return "m is smaller"
    }
    else{
        return "n is greater"
    }
}
console.log(smaller(50,60));
