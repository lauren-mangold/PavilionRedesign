console.log(
$("button").hover(function(){
    $(this).css("border", "black");
});
    $(this).css("background-color", "red");

})

$( "#calendar" ).scroll(function() {
    $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
  });
