//Etch-A-Sketch JavaScript//

var $board = 16;

$(document).ready(function() {
	$('.container').on('pageload', draw($board));
});

function draw($board) {
	for(i = 1; i <=4; i++) {
		
	}

}	

}
	/*change board style*/

	$('#clear').click(function() {
		$rainbow = false;
		$black = false;
		$board = 16;
		draw($board);
	});


})