// Passing functions as arguments
function doSomething(num, oddFunc, evenFunc) {
	if (num % 2 == 0) {
		evenFunc(num);
	} else {
		oddFunc(num);
	}
}

function odd(x) {
	console.log(`That was an odd number: ${x}`);
}

function even(x) {
	console.log(`That was an even number: ${x}`);
}

doSomething(12, odd, even);

// Using callbacks
function solve(time, callback) {
	setTimeout(callback, time * 1000);
}

solve(2, function() {
	console.log("Hello World");
});
