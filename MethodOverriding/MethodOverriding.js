var clothStore1={
    clothName:"saari",
    price:"10000",
    status:"available",
    production:["international","local","global"],
    standard:function(){
        return this.clothName+"  "+this.price+"  "+this.status
    }
}

var clothStore2=Object.create(clothStore1)
    clothStore2.clothName="salwar suit"
    clothStore2.price="5000"
    clothStore2.status="Unavailable"
    console.log(clothStore2.standard());
    console.log(clothStore1.standard());
    console.log(clothStore2.status);
    console.log(clothStore1.status);