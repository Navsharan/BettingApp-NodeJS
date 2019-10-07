'use strict';

var Result = require('./result');
var Bet = require('./bet');
var Win = require('./win');
var Place = require('./place');
var Exacta = require('./exacta');

var totalAmountOnWin = 0, result; 
var totalAmountOnPlace = 0, result;
var totalAmountOnExacta = 0, result;

var winBets = new Array();
var placeBets = new Array();
var exactaBets = new Array();

const readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var arr = line.split(":");

    // For Bet
    if (arr[0] === "Bet"){
    	var bet = new Bet(arr[1], arr[2], arr[3]);
    	// new Bet -> (bet.product, bet.selections, bet.stake)

      // Win
    	if (bet.product == "W"){
    		totalAmountOnWin += parseInt(bet.stake);
    		winBets.push(bet);
    	}

      // Place
      if (bet.product == "P"){
        totalAmountOnPlace += parseInt(bet.stake);
        placeBets.push(bet);
      }

      // Exacta
      if (bet.product == "E"){ 
        totalAmountOnExacta += parseInt(bet.stake);
        exactaBets.push(bet);
      }
    }

    //For Result
    if (arr[0] === "Result"){
    	result = new Result(arr[1], arr[2], arr[3]);
    }   
});

rl.on('close', function() {
  calculateResult();
  process.exit(0);
});

//Dividend for Win, Place & Exacta bets.
function calculateResult () {
	var dividendWin = Win.calculateDividend(totalAmountOnWin, winBets, result);
    console.log(dividendWin);
  var dividendPlace = Place.calculateDividend(totalAmountOnPlace, placeBets, result);
    console.log(dividendPlace);
  var dividendExacta = Exacta.calculateDividend(totalAmountOnExacta, exactaBets, result);
    console.log(dividendExacta);
}
