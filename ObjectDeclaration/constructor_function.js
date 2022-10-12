function mobile(brand,version,colour,cost,configuration) 
{
 this.brand=brand
 this.version=version
 this.colour=colour
 this.cost=cost
 this.configuration=configuration
}

var mobile1=new mobile("iphone",13,"pink",100000,{ram:"225gb",rom:"185gb",os:"ios"})
var mobile2=new mobile("vivo","v9","black",28000,{ram:"120gb",rom:"8gb",os:"android"})

console.log(mobile1);
console.log(mobile1.cost);
console.log(mobile1.configuration.os);
//console.log(delete mobile1.colour);
console.log(mobile2.configuration.rom);