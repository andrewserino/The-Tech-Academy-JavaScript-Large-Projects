// Get the pizza size price and add it to the running Total
// then pass that running total to the next function so 
// the next function will add a particular total to the running total and so on...
//
// Keep doing this until you get all items added to the running total.
//
// Just remember that the syntax will be text1 = text1 + something + "<br>";
// So you take the orginal value and concetenate to something new and end it with
// an HTML line break so our code will write the next thing one line below instead
// of overwriting the previous print out.
function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};	

// With both the meat and veggie functions each item in the array will be
// 1 dollar but the first is going to be free so we can count the total
// of items in their array and subtract 1 to get the total item cost
//
// Now we can add the item cost to our running total to get the new
// running total and then pass this new running total to the next function
// Just keep up this process until we've added all items to the running total
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

// Veggies

	function getVeggie(runningTotal,text1) {
		var veggieTotal = 0;
		var selectedVeggie = [];
		var veggieArray = document.getElementsByClassName("veggies");
		for (var j = 0; j < veggieArray.length; j++) {
			if (veggieArray[j].checked) {
				selectedVeggie.push(veggieArray[j].value);
				console.log("selected veggie item: ("+veggieArray[j].value+")");
				text1 = text1+veggieArray[j].value+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCrust(runningTotal,text1);
};

// Cheese

	function getCheese(runningTotal,text1) {
		var cheeseTotal = 0;
		var selectedCheese = [];
		var cheeseArray = document.getElementsByClassName("cheese");
		for (var j = 0; j < cheeseArray.length; j++) {
			if (cheeseArray[j].checked) {
				selectedCheese.push(cheeseArray[j].value);
				console.log("selected cheese item: ("+cheeseArray[j].value+")");
				text1 = text1+cheeseArray[j].value+"<br>";
		}
	}
	var cheeseCount = selectedCheese.length;
	if (cheeseCount > 1) {
		cheeseTotal = (cheeseCount - 1);
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log("total selected cheese items: "+cheeseCount);
	console.log(cheeseCount+" cheese - 1 free cheese = "+"$"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getSauce(runningTotal,text1);
};

// Sauce

	function getSauce(runningTotal,text1) {
		var sauceTotal = 0;
		var selectedSauce = [];
		var cheeseSauce = document.getElementsByClassName("sauce");
		for (var j = 0; j < sauceArray.length; j++) {
			if (sauceArray[j].checked) {
				selectedSauce.push(sauceArray[j].value);
				console.log("selected sauce item: ("+sauceArray[j].value+")");
				text1 = text1+sauceArray[j].value+"<br>";
			}
		}
	runningTotal = (runningTotal + sauceTotal);
	console.log("total selected sauce items: "+sauceCount);
	console.log(sauceCount+" sauce - 1 free sauce = "+"$"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getMeat(runningTotal,text1);
};

// Crust

    function getCrust(runningTotal,text1) {
	    var crustTotal = 0;
	    var selectedCrust = [];
	    var crustArray = document.getElementsByClassName("crust");
	    for (var j = 0; j < crustArray.length; j++) {
		    if (crustArray[j].checked) {
		        selectedCrust.push(crustArray[j].value);
			    console.log("selected crust item: ("+crustArray[j].value+")");
			    text1 = text1+crustArray[j].value+"<br>";
		}
    }
	runningTotal = (runningTotal + crustTotal);
	console.log("total selected crust items: "+crustCount);
	console.log(crustCount+" crust - 1 free crust = "+"$"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
