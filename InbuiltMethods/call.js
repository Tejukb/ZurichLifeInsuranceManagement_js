var f1=
{
    fname:"java",
    lname: "script",
    greating:function () {
        console.log( "Hi" +" "+this.fname+" "+this.lname) 
    }
}

      var f2={
        fname:"selenium",
        lname:"webDriverIO",
        display:function()
        {
            console.log( "Hello"+" "+this.fname+" "+"hi"+this.lname)
        }
      }
      

    f2.display.call(f1)

   function greating(a1,a2)
   {
    console.log("good morning"+" "+this.fname+" "+this.lname+" "+"have a nice day");
   }
   greating.call(f2)

