// Bet type Win
function Win (totalAmountOnWin, winBets, result){
	this.totalAmountOnWin = totalAmountOnWin;
	this.winBets = winBets;
	this.result = result;
}

Win.calculateDividend = function(totalAmountOnWin, winBets, result) {
	var win = new Win(totalAmountOnWin, winBets, result);
	var winAmount = 0;

	//Punters must choose the winner of a race.
	winBets.forEach(function (arrayItem) {
		if(win.result.first == parseInt(arrayItem.selections)){
    		winAmount += parseInt(arrayItem.stake);
    	}
	});

	//Tabcorp takes a 15% commission from the Win pool
	//The remaining total is split, proportionally to stake, amongst punters who chose the correct winning horse.
	return "Win:"+ win.result.first + ":" + "$" + parseFloat((0.85 * totalAmountOnWin) / winAmount).toFixed(2); 
}

module.exports = Win;