$(document).ready(function() { 
 $('li').click(function(e) { 
   var clickedElem= $(this);
    console.log( "clickedElem: ",clickedElem.text());
   $( "li" ).each(function( index ) {
   var currentElem = $( this ); 
   console.log( "currentElem:", currentElem.text() );
    if(clickedElem.text() === currentElem.text()){
     console.log("Clicked elem is the current, removing active class")
    currentElem.addClass( "active" );
    console.log(currentElem);
    }else{
     console.log("removing class active")
      currentElem.removeClass( "active" );
    }
   });
 }); 
});
