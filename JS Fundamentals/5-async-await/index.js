// Basic example
let isWorkDone = true;

const job = new Promise(function(resolve, reject) {
	if (isWorkDone) {
		resolve("Work Done");
	} else {
		reject("Job failed");
	}
});

async function init() {
	try {
		const res = await job;
		console.log(res);
	} catch (err) {
		console.log("Error is:", err);
	}
}

init();
