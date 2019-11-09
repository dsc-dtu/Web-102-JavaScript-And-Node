const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const data = require("./data");

const PORT = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Welcome to Human API");
});

app.get("/humans", (req, res) => {
	res.send(data);
});

app.get("/humans/:id", (req, res) => {
	let id = req.params["id"];
	id = parseInt(id, 10);

	if (id > 0 && id < data.length) {
		res.send(data[id - 1]);
	} else {
		res.send({});
	}
});

app.post("/humans", (req, res) => {
	const { name, age, email, country } = req.body;
	try {
		data.push({
			id: data.length + 1,
			name,
			age,
			email,
			country
		});
		res.send("Human created");
	} catch (err) {
		res.status(500).send("There was a problem");
	}
});

app.put("/humans/:id", (req, res) => {
	const { name, age, email, country } = req.body;
	let id = req.params["id"];
	id = parseInt(id, 10);

	try {
		const humanToUpdate = data[id - 1];
		data[id - 1] = {
			name: name ? name : humanToUpdate.name,
			age: age ? age : humanToUpdate.age,
			email: email ? email : humanToUpdate.email,
			country: country ? country : humanToUpdate.country
		};
		res.send("Human updated");
	} catch (err) {
		console.log(err);
		res.status(500).send("There was a problem");
	}
});

app.delete("/humans/:id", (req, res) => {
	let id = req.params["id"];
	id = parseInt(id, 10);
	try {
		data.splice(id - 1, 1);
		res.send("Human deleted");
	} catch (err) {
		console.log(err);
		res.status(500).send("There was a problem");
	}
});

app.listen(PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});
