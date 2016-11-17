$(document).ready(function() { 
 
 //set default to home
 setDefaultLocation();
 
 //add click event handler for the menu
 $('.menuItem').click(displayMenuContent.bind(this,$(this)));
 
});

function displayMenuContent(menuItem){

   var clickedElem= menuItem;
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
