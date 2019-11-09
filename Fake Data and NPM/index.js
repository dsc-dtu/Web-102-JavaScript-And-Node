var faker = require("faker");

function generateData(num) {
	let result = [];
	for (let i = 0; i < num; i++) {
		result.push({
			id: i + 1,
			fname: faker.name.firstName(),
			lname: faker.name.lastName(),
			age: faker.random.number(100),
			email: faker.internet.email(),
			country: faker.address.country()
		});
	}

	return result;
}

console.log(generateData(10));
