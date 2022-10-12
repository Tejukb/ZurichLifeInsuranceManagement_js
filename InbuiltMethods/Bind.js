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

   //f2.display.bind(f1)
   function greating(a1,a2)
   {
    console.log("good morning"+" "+this.fname+" "+this.lname+""+"have a nice day");
   }
  var star=greating.bind(f2)
  star()