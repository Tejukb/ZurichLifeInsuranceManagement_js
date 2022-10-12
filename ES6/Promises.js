const { reject } = require("async");

async function sync(){
    console.log("Login to the application");
    var p= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("in progress")
            reject("rejected")
        },2000)
    })
    await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
    console.log("1st primise executed");


    var p= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("in progress continues")
            reject("rejected")
        },2000)
    })
    await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
    console.log("logout");

}
sync()
