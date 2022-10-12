//SYNTAX------> var obj_ref ={prop1:value1, prop2:value2}

var mobile={brand:"vivo", version:"v9",colour:"black",configutation:{ram:"10gb",rom:"8gb",os:"android"}}

mobile.manufactureYear=2022     // To add the property and value
delete mobile.configutation.ram          // To delete the proprty and value
console.log( mobile.configutation )          // To print the perticular property and value
mobile.defaultApplication=["faceBook","calender","calculator"]   // To add the array to the object
console.log(mobile.defaultApplication[1] )      // to print the  value of arrays required index
console.log(mobile)

