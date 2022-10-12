var personalDetailes1={
    name:"Teju",
    age:"26",
    add:{
         layout:"bhoostrestha",
         street:"KR Puram"
    },
    edu:function(){
        return "engineering"
    }
}

var personalDetailes2={}
personalDetailes2.__proto__=personalDetailes1
personalDetailes2.name="suma"
personalDetailes2.age="27"
console.log(personalDetails2);
