$(document).ready(function() { 
 
 //set default to home
 setDefaultLocation();
 
 //add click event handler for the menu
 $('.menuItem').bind("click",displayMenuContent());
 
});

function displayMenuContent(){

   var clickedElem=  $( this );
    console.log( "clickedElem: ",clickedElem.text());
   $( ".menuItem" ).each(function( index ) {
   var currentElem = $( this ); 
   console.log( "currentElem:", currentElem.text() );
    if(clickedElem.text() === currentElem.text()){
     console.log("Clicked elem is the current, adding active class")
    clickedElem.addClass( "active" );
    console.log(currentElem);
    }else{
     console.log("removing class active")
      currentElem.removeClass( "active" );
    }
   });
 }

 
 function setDefaultLocation(){
  if(window.location.hash.length <1){
    window.location.hash= "home";
  }
 }
