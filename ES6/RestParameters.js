// function Emp_Details(Ename,EId,...skills)
// {
//     console.log(skills);         // which will print the except ename and eid
// }

// Emp_Details("Teju","1834","javaScript","WebDriverIO","selenium")

//==========================================================================================

var {fname,lname,...other_details}={
    fname:"Teju",
    lname:"Naik",
    skills:["javaScript","WebDriverIO","selenium"],
    BloodGrp:"B-ve"
}
     console.log(other_details);  // which will print the other details except faname and laname
   