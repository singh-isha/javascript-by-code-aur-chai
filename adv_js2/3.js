 // repo is about static properties 
 class user {
    constructor(username){
        this.username = username
    }
     logme(){
        console.log(`username : ${ this.username}`);
     }

static createID(){
     return `allow`
}
}
const hitesh = new user ("hitesh")
console.log(hitesh.createID());
 // static restrict some activities 
