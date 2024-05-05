const button= document.querySelectorAll('.button');
 const body =  document.querySelector("body");
  button.forEach( function(button){
     console.log(button);
     //Adding event listener for each button
     button.addEventListener('click',function(event){
         console.log( event);
          console.log(event.target);
       // let action = event.target.getAttribute
    if (event.target.id === 'green'){
        body.style.backgroundColor=event.target.id;
    }
    if (event.target.id === 'purple'){
        body.style.backgroundColor=event.target.id;
    }

    if (event.target.id === 'pink'){
        body.style.backgroundColor=event.target.id;
    }

    if (event.target.id === 'blue'){
        body.style.backgroundColor=event.target.id;
    }


  });
});