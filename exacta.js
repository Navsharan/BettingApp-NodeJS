// Bet type Exacta
function Exacta (totalAmountOnExacta, exactaBets, result){
	this.totalAmountOnExacta = totalAmountOnExacta;
	this.exactaBets = exactaBets;
	this.result = result;
}

Exacta.calculateDividend = function(totalAmountOnExacta, exactaBets, result) {
	var exacta = new Exacta(totalAmountOnExacta, exactaBets, result);
	var exactaAmount = 0;

	//Punters must choose the first and second place runners in a race in the correct order.
	exactaBets.forEach(function (arrayItem) {
		//split the array item into two to match the first and the second position.
		var valueSplit = arrayItem.selections.split(",");
		if((exacta.result.first == valueSplit [0]) && (exacta.result.second == valueSplit [1])){
    		exactaAmount += parseInt(arrayItem.stake);
    	}
	});

	//Tabcorp takes an 18% commission from the Exacta pool.
	//The remaining total is split, proportionally to stake, amongst punters who chose the correct first and second horse in correct order.
	return "Exacta:" + exacta.result.first + "," + exacta.result.second + ":" + "$" + parseFloat((0.82 * totalAmountOnExacta) / exactaAmount).toFixed(2);
}

module.exports = Exacta;