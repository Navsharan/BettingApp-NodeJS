// Bet type Place
function Place (totalAmountOnPlace, placeBets, result){
	this.totalAmountOnPlace = totalAmountOnPlace;
	this.placeBets = placeBets;
	this.result = result;
}

Place.calculateDividend = function(totalAmountOnPlace, placeBets, result) {
	var place = new Place(totalAmountOnPlace, placeBets, result);
	var placeAmountFirst = 0;
	var placeAmountSecond = 0;
	var placeAmountThird = 0;

	//Punters must choose the first, second or third place horse in a race.
	placeBets.forEach(function (arrayItem) {
		if(place.result.first == parseInt(arrayItem.selections)){
    		placeAmountFirst += parseInt(arrayItem.stake);
    	}
    	if(place.result.second == parseInt(arrayItem.selections)){
    		placeAmountSecond += parseInt(arrayItem.stake);
    	}
    	if(place.result.third == parseInt(arrayItem.selections)){
    		placeAmountThird += parseInt(arrayItem.stake);
    	}
	});

	// Tabcorp takes a 12% commission from the Place pool.
	// The total pool is split evenly into 3 and each of these amounts is then split, proportionally to stake, amongst the punters who chose each placed horse.
	var placeOutput = ("Place:" + place.result.first + ":" + "$" + parseFloat((0.88 * totalAmountOnPlace) / (3 * placeAmountFirst)).toFixed(2) + '\n' + "Place:" + place.result.second + ":" + "$" + parseFloat((0.88 * totalAmountOnPlace) / (3 * placeAmountSecond)).toFixed(2) + '\n' + "Place:" + place.result.third + ":" + "$" + parseFloat((0.88 * totalAmountOnPlace) / (3 * placeAmountThird)).toFixed(2));

	return placeOutput;
}

module.exports = Place;