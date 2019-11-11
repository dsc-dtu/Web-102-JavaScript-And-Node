// Basic example
let isWorkDone = false;

const job = new Promise(function(resolve, reject) {
	if (isWorkDone) {
		resolve("Work Done");
	} else {
		reject("Job failed");
	}
});

job
	.then(function(val) {
		console.log(`Message is: ${val}`);
	})
	.catch(function(err) {
		console.log(`Message is: ${err}`);
	});

// Call function after waiting
const greeter = new Promise((res, rej) => {
	setTimeout(() => res("Hello world!"), 2000);
});

function myFunc() {
	greeter.then(message => console.log(message));
}

myFunc();

// Rough Code
// let data;
// axios
// 	.get("google.com")
// 	.then(function(response) {
// 		data = response;
// 		console.log(data);
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	});

// db.get("sbc").then(function(user) {
// 	user.password == enteredPassword;
// 	return;
// });
