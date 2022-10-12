class Abc
{
    constructor(fname,lname,skills)
    {
    this.fname=fname
    this.lname=lname
    this.skills
    }

    static a=10
           b=20

    static m1()
    {
     console.log("ststic method executed")
     console.log(this.a)                          //ststic variable inside static function---->this.staticVariableName
     var m=new Abc()
     console.log(m.b)             //non-ststic variable inside static function--->objevtReffOfClassInsideFunction.nonstaticVariableName
     m.m2()                       

    }

       m2()
    {
      console.log("Non static method executed")
      console.log(Abc.a)
      console.log(this.b)
      Abc.m1()
    }
}

var a1=new Abc("Teju","Naik",["javascript","webDriverIO","selenium"])

console.log(Abc.a)    //static member outside the class---->className.staticVariableName
console.log(a1.b)     //Non-static member outside the class---->ObjectReffOfTheClass.NonstaticVariableName

Abc.m1()              //static function outside the class---->className.staticFunctionName
a1.m2()               //non-static function outside the class---->ObjectReffOfTheClass.NonstaticFunctionName