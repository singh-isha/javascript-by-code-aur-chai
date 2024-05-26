// this repo is all about  call and this keyword their usage and different ways to use them in different secenarioes
function SetUserName (username){
this.username = username
 console.log("called");
}
 function createUsername ( username , email ,password){
  SetUserName.call(this,username)
 //this.username = username
 this.email  = email
 this.password = password
 }
  const createuser = new createUsername( "isha" , " ishasingh.com" , "1123")
   console.log(createuser);
 





   