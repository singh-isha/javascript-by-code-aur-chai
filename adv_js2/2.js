// class constructor and static 
class user {
     constructor(username){
         this.username = username
     }
      logme(){
         console.log(`username : ${ this.username}`);
      }
}
 class admin extends user{
constructor(username, password , email){
    super(username)
    this.password= password
     this.email= email
}
AddCourse(){
    //console.log(`this course is provided by : ${this.username}`);

}
 }
 const user2= new admin("keshav" , "1122" , "kesha112.com");
 user2.AddCourse()
  const user3 = new user("Isha")
  //user3.AddCourse() -> you cannot access it directly as it is not connected it directly with this function 
  user3.logme()
  //if you try to  equaliate it with other other quantities  which are sharing the same  class 
   // they which equalate eachother as instances 
   console.log(user2 instanceof user);

