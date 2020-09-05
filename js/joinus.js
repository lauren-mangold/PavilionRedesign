$("button").hover(function(){
    $(this).css("background-color", "red");

})

$( "#calendar" ).scroll(function() {
    $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
  });