// Declaration
console.log(x);
var x = 123;

console.log(y);
let y = 125;

const z = 10;
console.log(z);
z = 100;

// Scope
function discountPrices(prices, discount) {
	var discounted = [];
	// var i;
	// var discountedPrice;

	for (var i = 0; i < prices.length; i++) {
		var discountedPrice = prices[i] * (1 - discount);
		var finalPrice = Math.round(discountedPrice * 100) / 100;
		discounted.push(finalPrice);
	}

	console.log(i); // 3
	console.log(discountedPrice); // 150
	console.log(finalPrice); // 150

	return discounted;
}

function discountPrices(prices, discount) {
	let discounted = [];

	for (let i = 0; i < prices.length; i++) {
		let discountedPrice = prices[i] * (1 - discount);
		let finalPrice = Math.round(discountedPrice * 100) / 100;
		discounted.push(finalPrice);
	}

	console.log(i); // 3
	console.log(discountedPrice); // 150
	console.log(finalPrice); // 150

	return discounted;
}
