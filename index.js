$(document).ready(function() 
 {
    $('li').click(function(e) 
    { 
     var clickedElem= $(this).text(); 
      $( "li" ).each(function( index ) {
       
       var currentElem = $( this ).text();
       console.log( index + ": " + $( this ).text() );
      
       if(clickedElem === currentElem){
        $(this).addClass( "active" );
       }
    });

    });
 });