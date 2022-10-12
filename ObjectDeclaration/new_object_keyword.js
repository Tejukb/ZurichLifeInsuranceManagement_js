//SYNTAX----->// var obj_ref = new Object()
               // obj_ref.prop1=value1
               // obj_ref.prop2=vaue2
              
var course= new Object()
{
    course.name="science"
    course.free=500
    course.trainer="Rekha maam"
    course.topics=["physics","chemistry","biology"]
    course.hourse=function(){return 6}
    timings=new Object()
    {
        timings.morning="09.30 am"
        timings.evening="04.30 pm"
    }
}
    course.session="aftrnoon"

console.log(course.name);
console.log(course.hourse());  
console.log(timings.morning);  