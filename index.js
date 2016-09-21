$(document).ready(function() { 
 $('li').click(function(e) { 
   var clickedElem= $(this);
    console.log( clickedElem.text());
   $( "li" ).each(function( index ) {
   var currentElem = $( this ); 
   console.log( "current element", currentElem.text() );
    if(clickedElem.text() === currentElem.text()){
    //  currentElem.addClass( "active" );
    currentElem.removeClass( "active" );
    }else{
      currentElem.removeClass( "active" );
    }
   });
 }); 
});
