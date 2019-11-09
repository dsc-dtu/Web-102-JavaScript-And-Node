const express = require("express");
const app = express();
const data = require("./data");

const PORT = 8000;

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

app.listen(PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});
