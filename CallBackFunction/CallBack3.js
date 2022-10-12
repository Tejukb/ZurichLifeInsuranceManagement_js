function operator(a,b,operation)
{
    console.log(operation(a,b));
}
function sum(a,b)
{
    return("addition of 2 values are "+(a+b));
}
function mul(a,b)
{
    console.log(a*b);
}
operator(2,4,sum)