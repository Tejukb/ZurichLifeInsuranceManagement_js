function calculate(a,b,multiply)
{
    console.log("Function started");
    result=multiply(a,b)
    console.log(result)
    console.log("Function ended");
}
function mul(a,b)
{
    console.log("calculation started");
    return(a*b)
}
calculate(2,4,mul)

