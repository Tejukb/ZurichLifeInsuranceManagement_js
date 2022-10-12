class person
{
     constructor(f_name,l_name,skills)
     {
        this.f_name=f_name
        this.l_name=l_name
        this.skills=skills
     }

     static a=10
            b=20

     sample()
     {
        //console.log(`my name is ${this.f_name}`);
        console.log("nonstatic methos executed");
          console.log(person.a)                       // to acces ststic variable ----->className.variableName
         console.log(this.b )                        // to acces non static variable inside non static methos----->nonstatic to nonstatic use (this.) keyword
     }

     static Demo()
     {
        //console.log(`my last name is ${this.l_name}`);
        console.log("static method executed")
        console.log(this.a);                        // to acces static variable inside static method-------->ststic to static use (this.) keyword
                               
        var b1=new person()
        console.log(b1.b);                           // to acces nonststic variable in static method creat an separe object/instance of the class inside the static methos
     }


         sample2()
         {
          console.log(this.sample());              // to accec non static method inside the non static method use this keyword
          //**** /  person.Demo()
         }

         static Demo2()
         {
            this.Demo()                            // to acces static methos inside the static use this keyword
            //**** */
         }
    }

     var a1=new person("Teju","naik",["javaScript","selenium","WebDriverIO"])    // instance for the class to acces non static method
    
     a1.sample()     // to acces nonstatic method---->instanceOfCalss.methodName
     person.Demo()   // to acces static method ---->className.methodName

     console.log(person.a);   // to acces static variable ----->className.variableName
     console.log(a1.b);       // to acces non static variable ----->instanceOfCalss.variableName

