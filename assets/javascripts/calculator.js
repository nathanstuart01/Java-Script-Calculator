$(document).ready(function() {
// $(selector).jqueryFunction(param1, param2)
// JavaScript: document.getElementById('body');
// jQuery: $('#body')
// JavaScript: document.getElementsByClassName('list-item')
// jQuery: $('.list-item')
// JavaScript: document.getElementsByTagName('h1')
// jQuery: $('h1')

// Best practice is to name variables with $ in front of them if using jQuery
var $numButtons = $('.num-button');  //arrays with all the num-buttons found on html page
var $opButtons = $('.op-button');
var $eqButtons = $('#eq-button');
var $calcScreen = $('#calc-screen');

var leftSide, op, rightSide;
var result;
function calculateResult(num1, operator, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if(operator === '+') {
    result = num1 + num2;
  } else if(operator === '-') {
    result = num1 - num2;
  } else if(operator === '/') {
    result = num1 / num2;
    if(num2 === 0) {
    result = "ERROR"
    }
  } else if(operator === '*') {
    result = num1 * num2;
  }
  $( '#calc-screen' ).text(result);
}


$numButtons.click(function() {
  // need to refactor $(this).text() into a variable.
  //
  $numButtons.removeClass('error-border');
  if(!leftSide) {
    leftSide = $(this).text();
  } else if (leftSide && !op) {
    leftSide += $(this).text();
  } else if (leftSide && op && !rightSide) {
    rightSide = $(this).text();
  } else if (leftSide && op && rightSide) {
    rightSide += $(this).text();
  }
  $calcScreen.text(leftSide + ' ' + op + ' ' + rightSide); //this function gets and sets value in jQuery
});

$opButtons.click(function() {
  $opButtons.removeClass('error-border');
  if(!leftSide) {
    alert('You need a number');
    $numButtons.addClass('error-border');
  } else {
    op = $(this).text();
  }

});

$eqButtons.click(function() {
  console.log(leftSide);
  console.log(op);
  console.log(rightSide);

    if(leftSide && op && rightSide) {
      calculateResult(leftSide, op, rightSide);
    } else {
      if(!leftSide) {
      alert('You need a number!');
      $numButtons.addClass('error-border');
    } else if (leftSide && !op) {
      alert('You need an operator');
      $opButtons.addClass('error-border');
    }
      else if (leftSide && op && !rightSide) {
        alert('You need a number');
        $numButtons.addClass('error-border');
    }
  }

});

});
