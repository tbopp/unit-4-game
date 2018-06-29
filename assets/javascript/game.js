// Defining global variables to record wins, losses, and the crystal point level (the user's score).
var wins = 0;
var losses = 0;

var score = 0;

// Global variable to retain the randomly generated ranNumber at each game start.
var ranNumber = Math.floor((Math.random()* 100) + 23);

// Global variables to assign random values to each of the five crystals.
var blue = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var orange = Math.floor((Math.random()* 12) + 1);
var purple = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);

// Fuction update the scoreboard and score div's.
var calculation = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.score').empty();
	$('.score').append(score);
	
}

// Functin to reset the game, generate new random number, generate new values for each crystal.
var reset = function(){
	score = 0;
    ranNumber = Math.floor((Math.random()* 100) + 23);

	$('.ranNumber').empty();
	$('.ranNumber').append(ranNumber);

	blue = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    orange = Math.floor((Math.random()* 12) + 1);
    purple = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    calculation();
}

var config = function (){
	if (score == ranNumber) {
		wins++;
		reset();
}
	else if(score > ranNumber){
		losses++;
		reset();
}
	else{
		calculation();
}}

	$('.score').append(score);
	$('.ranNumber').append(ranNumber);

	$(document).ready(function(){
	$('#blue').click(function(){
		score = score + red;
		config();
	})
	$('#green').click(function(){
		score  = score  + blue;
		config();
	})
	$('#orange').click(function(){
		score  = score  + yellow;
		config();
	})
	$('#purple').click(function(){
		score  = score  + green;
		config();
    })
    $('#red').click(function(){
		score  = score  + green;
		config();
	})
});












