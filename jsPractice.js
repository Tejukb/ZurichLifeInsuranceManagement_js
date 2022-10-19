var payment1={
    cash:10,
    cheque:20,
    amount1:function(){
        console.log("1st payment"+" "+this.cash+" "+"2nd payment"+" "+this.cheque);
    }
}

var payment2={
    cash:30,
    cheque:40,
    amount2:function(){
        console.log("3rd payment"+" "+this.cash+" "+"4th payment"+" "+this.cheque);
    }
}

function totalamount(value1,value2){
    console.log("5th payment"+" "+value1+payment2.cash+" "+"6th payment"+" "+value2+payment2.cheque);
}

payment2.amount2.apply(payment1)
totalamount.apply(payment2,[200,300])

