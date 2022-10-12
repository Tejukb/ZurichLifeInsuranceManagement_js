//declaring an object
var myself  = {
    f_name : "Teju",
    l_name : "T",
    yoe : 4,
    skillset : ["java", "selenium", "javascript", "api"],           //===>array

    greet : function(){                                                //===>function
        return "Hello all, I am "+" "+this.f_name+" "+this.l_name
    },

    company : {                                             //===>object
    c_name : "TestYantra",
    dept : "RMG",

    }
}

//case 1: regular method
// let myName = myself.f_name
// let skills = myself.skillset
// console.log(myName);
// console.log(skills);

//case 2: 
// let {f_name} = myself
// let {company} = myself
// console.log(f_name);
// console.log(company);
//c0ndition 1: curly braces
//condition 2: reference name should be same as that which is in the object

//case 3: change the reference variable => so that we can decalre our own reference variable
//f_name in object myself will be renamed as myName
let {f_name: myName} = myself
console.log(myName);                    
// console.log(f_name);                //undefined /error

