$(document).ready(function() { 
 $('li').click(function(e) { 
   var clickedElem= $(this);
    console.log( clickedElem);
   $( "li" ).each(function( index ) {
   var currentElem = $( this ); 
   console.log( index + ": " + currentElem );
    if(clickedElem.text() === currentElem.text()){
    //  currentElem.addClass( "active" );
    currentElem.removeClass( "active" );
    }else{
      currentElem.removeClass( "active" );
    }
   });
 }); 
});
