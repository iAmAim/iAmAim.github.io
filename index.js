$(document).ready(function() { 
 $('li').click(function(e) { 
   var clickedElem= $(this).text();
    console.log( clickedElem);
   $( "li" ).each(function( index ) {
   var currentElem = $( this ).text(); 
   console.log( index + ": " + currentElem );
    if(clickedElem === currentElem){
     $(this).addClass( "active" );
    } 
   });
 }); 
});
