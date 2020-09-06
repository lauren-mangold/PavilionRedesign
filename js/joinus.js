console.log("Hello world");

$(".buttons").hover(function(){
    $(this).css("text-shadow", "2px 2px 4px #000000");
    $(this).css("border", "2px black");
    $(this).css("box-shadow", "2px 2px 4px #000000");
},
function(){
    $(this).css("text-shadow", "none");
    $(this).css("border", "none");
    $(this).css("box-shadow", "none");
});

$( "#calendar" ).scroll(function() {
    $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
  });

  $("button").click(function(){ 
    $("#submit").css("background-color","#f1bf62");
    $("#submit").css("color", "white");
});

$( ".photoScroll" ).scroll(function() {
    $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
  });