const object = Object.getOwnPropertyDescriptor(Math , "PI")
//console.log(object);
 //console.log(Math.PI);
 //Math.PI=4;
 //console.log(Math.PI); => it will not override the value of PI by any how\
const outfit ={
     name :'saree',
     price:2300,
     fabric:'net'

}
//console.log(outfit);
console.log(Object.getOwnPropertyDescriptor(outfit , "price"));
Object.defineProperty(outfit , "price", {
 
    writable:false,
    enumerable: false
})
//console.log(Object.getOwnPropertyDescriptor(outfit , "price"));


// after Applying loops => bydefault object is not itertable so we use object .enteries
for (let[key , value] of Object.entries(outfit)) {
    console.log(`${key}:${value}`);
    
}