// this repo is all about Promises 
 //Intro
/* const promise1= new Promise( function(resolve , reject) {
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
  }) */
  // this part will teach us how to use resolve and add data in it and how to use it and print it
     /* const promise3 = new Promise( function( resolve, reject){
        setTimeout(function(){
          
          resolve( {
              username:"Isha" , email:"isha@11123 .com"
          })
        }, 250)
     })
    
    promise3.then(function(user){
      console.log( user);
    }) */
  
    
  // reject

    /* const promise2= new Promise( function( resolve , reject){
       setTimeout(function(){
         let error= false;
         if (!error) {
          resolve( { username:"Isha ", password:"1234"})
         } else {
            reject( 'ERROR:something went wrong, please check')
         }
       }, 500);
   }) */
    // database chaining*************** IMPORTANT*****************
   /* promise2.then ( function(user){
      console.log( user);
      return user.username
      return user.password
   }).then( function(username){
        console.log(username);
   })//.then( function(password){
      //console.log(password);
 //})
 .catch(function(error){
      console.log(error);
   })
   .finally(function(){
       console.log(" your issues will get resolved within time ");
   })
 */
  /*  const promise4= new Promise( function( resolve , reject){
      setTimeout(function(){
        let error= true;
        if (!error) {
         resolve( { username:"Isha ", password:"1234"})
        } else {
           reject( 'ERROR:something went wrong, please check')
        }
      }, 500);
  }) */
  // this syntax cannot handle error gracefully 
 /*  async function responsetopromise(){
   const response = await promise4
   console.log( response);
  }
   responsetopromise() */
// theis syntax can handle errors gracefully with try-catch method and provides you a way to handle  errors in async-await 
/* async function responsetopromise(){
   try {
      const response = await promise4
   console.log( response);
      
   } catch (error) {
      console.log( error);
   }
  }
   responsetopromise() */
   