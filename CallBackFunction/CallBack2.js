function sum(a,b)
{
    console.log(a+b);
}
function mul(a,b)
{
    return(a*b)
}
function div(a,b)
{
    console.log(a/b);
}
function calculate(a,b,operator)
{
    console.log(operator(a,b));
}
calculate(10,5,mul)