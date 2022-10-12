var a1={
    brand:"audi",
    model:2015,
    check1:function(){
        console.log(this.brand);
        console.log(this.model);
    }
}

var a2={
    brand:"bmw",
    model:2020,
    check2:function(){
        console.log(a1.brand);
        console.log(this.brand);
    }
}
a1.check1()
a2.check2()