$(document).ready(function() { 
 $('.menuItem').click(function(e) { 
   var clickedElem= $(this);
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
 }); 
});
