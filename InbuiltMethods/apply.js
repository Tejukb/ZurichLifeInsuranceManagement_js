var f1=
{
    fname:"java",
    lname: "script",
    greating:function () {
        console.log( "hello hi" +" "+this.fname+" "+this.lname) 
    }
}

      var f2={
        fname:"selenium",
        lname:"webdriver io",
        display:function()
        {
            console.log( "hello"+this.fname+" "+"hi"+this.lname)
        }
      }

   
   function welcome(a1,a2)
   {
    console.log( a1+this.fname+" "+this.lname+a2);
   }


f1.greating.call(f2)