// this repo is all about Promises 
 //Intro
const promise1= new Promise( function(resolve , reject) {
     setTimeout(function(){
        console.log( " async task is done for first time");
     resolve()
     } , 1000)
})
 promise1.then( function(){
    console.log(" promise1 is fullfilled");
 })
// resolve
  new Promise(function(resolve, reject){
   setTimeout( function(){
      console.log(" async2 is completed");
      resolve()
   }, 1000)
 
  }).then( function(){
    console.log("promise of async2 is fulfilled");
  })
  // reject
   const promise2= new Promise( function( resolve , reject){
       setTimeout(function(){
         let error= true;
         if (!error) {
          resolve( { username:"Isha ", password:"1234"})
         } else {
            reject( 'ERROR:something went wrong, please check')
         }
       }, 500);
   })

