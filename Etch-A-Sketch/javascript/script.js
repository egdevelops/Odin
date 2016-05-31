//Etch-A-Sketch JavaScript//

var board = $('.board');
var cBoard = 16;

for (var i = 0; i < cBoard * cBoard; i++) {
  board.append('<div id="square"></div>');
}
var square = $('#square');

square.width(600 / cBoard).height(400 / cBoard);

square.on('mouseenter', function() {  
  $(this).addClass('.filler');
});


/*

// Function with user input to create new board

var gridSize = function() {

  var squareAmount = prompt('Please enter a new board dimension between 1 - 80!');
  if (isNaN(squareAmount) || squareAmount > 80 || squareAmount < 1) {
    var squareAmount = prompt('Please pick a number between 1-80!');
  }
  $('.board').empty(); 
  for (i = 0; i < squareAmount * squareAmount; i++) {
    board.append('<div id="square"></div>');

  }
  var newSquare = $('.square') 
  newSquare.width(600 / squareAmount).height(400 / squareAmount);
  newSquare.on('mouseenter', function() { 
    $(this).addClass('.filler');
  });
}
$('.boardsize').click(boardSize);

//clear button

var clear = function() {
  $('.square').removeClass('.filler');
  }

$('.clear').click(clear);

*/













