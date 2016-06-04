//Etch-A-Sketch JavaScript//
$(document).ready(function() {
  
  var board = $('#board');
  var cBoard = 20;

  for (var i = 0; i < cBoard * cBoard; i++) {
    board.append('<div class="square"></div>');
  }
  
  var square = $('.square');

  square.width(600 / cBoard).height(400 / cBoard);

  square.on('mouseenter', function() {
    $(this).addClass('color');
  });

  // Function with user input to create new board
  var boardSize = function() {

    var squareAmount = prompt('Enter a board dimension between 1-100!');
    if (isNaN(squareAmount) || squareAmount > 80 || squareAmount < 1) {
      var squareAmount = prompt('Invalid entry: you must pick a number between 1 and 100.');
    }

    $('#board').empty();

    for (i = 0; i < squareAmount * squareAmount; i++) {
      board.append('<div class="square"></div>');

    }
    var newSquare = $('.square')
    newSquare.width(600 / squareAmount).height(400 / squareAmount);
    newSquare.on('mouseenter', function() {
      $(this).addClass('color');
    });
  }
  $('#size').click(boardSize);

 /* Need functions that change board style according to corresponding buttons: black, rainbow, trail:
  
My attempt w/incorrect syntax:

  function black () {
    $('#black').click //when #black button is clicked
    $('square').mouseenter(function () { // then mousenter
    $('square').css('background-color', 'black'); // will change background to black
      )};
          */                 
                          
  
  //clear button
  var clear = function() {
    $('.square').removeClass('color');
    $('.square')(square)
  }

  $('#reset').click(clear);

});