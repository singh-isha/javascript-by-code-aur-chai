// this repo is all about understanding of prototypes and their depth knowledge
/* let bts =["taehyung" , " jungkook"]
let btstalent ={
     taehyung:" handsome",
     jungkook:" golden makae",
  getpower:function(){
    console.log( ` handsome is ${this.taehyung}`);

  }
}
 Object.prototype.Isha = function(){
    console.log(`is this present in all or not`);
 }
  Array.prototype.heyisha=function(){
    console.log(`just say hello `);
  }
 */
  //btstalent.Isha()
//bts.Isha()
//bts.heyisha()
//btstalent.heyisha()
//btstalent.Isha()
//btstalent.heyisha()
// there is a property which helps in linking  two objects so that their property can be linked 

const teacher ={
     makevideo :true,
}
const teaching_support ={
     isavailable :true,
}
 const TA_support=  {
   MakeAssignment : 'js assignments ',
   FullTime : false,
   __proto__:teaching_support
 }
teacher.__proto__= user
//Modern Syntax
object.setProt




