//Etch-A-Sketch JavaScript//



var div = document.createElement("div");
div.style.width = "50px";
div.style.height = "50px";
div.style.background = "white";	
document.body.appendChild(div);


/* Student Solution Examples (for setting up grid)

Sample 1: Student name: SpoonAndBirdcage

  function gridSetup() {
    var box_count = $('.grid-num').val();
    var box_face = ((700 / box_count) - 1) + 'px';
    for (var i = 0; i < box_count; i++) {
      for (var j = 0; j < box_count; j++) {
        $('.wrapper').append('<div class="square"></div>');
      }
    }
    $('.square').css({
      'height': box_face,
      'width': box_face
    });
    $('div').filter('.selected').click();
  }

----------

Sample 2 simpler solution from: Matt Dillon:

('document').ready(function(){
	

	var boxSize = 16;
	var size = 480 / boxSize; 
	
	for (var i=0; i<boxSize; i++){
		for (var j=0; j<boxSize; j++) {
			$("#container").append("<div class='squares'></div>");
			
		}
	}
		$(".squares").css("height", size);
		$(".squares").css("width", size);

  
  $('.squares').mouseenter(function(){
  	$(this).addClass('color');
  })  

  $('#clear').on('click', function(){
  	$('.squares').removeClass('color');
  })
  
------------

/* My Attempt

var $board = 16;

$(document).ready(function() {
	$('.container').on('pageload', draw($board));
});

function draw($board) {
	for(i = 1; i <=4; i++) {
}

/*change board style

/*
$('#clear').click(function() {
	$rainbow = false;
	$black = false;
	$board = 16;
	draw($board);
});
*/