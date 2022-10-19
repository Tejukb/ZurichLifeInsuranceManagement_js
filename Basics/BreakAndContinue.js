var arr=[1,"teju",5.2,25]
for(let index=0; index<arr.length; index++){
    if(index<2){
        console.log("Hello");
        continue;
        //break;
    }
    console.log(arr[index]+"  "+index);
}