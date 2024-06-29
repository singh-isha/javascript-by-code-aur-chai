class user {
    constructor ( email ,password){
       this.email = email;
       this.password = password;
    }
     get password(){
       return this._password.toUpperCase();
       //return `${this._password}zxcv`;
     }
     set password(value){
       this._password = value;
     }
}
const Isha = new user("i.isha@gmail.com" , "zxcv")
console.log(Isha.password);

// few more syntax are there 
