const express = require("express");
const app = express();
const data = require("./data");

const PORT = 8000;

app.get("/", function(req, res) {
	res.send("Welcome to Human API");
});

app.listen(PORT, function() {
	console.log(`Server running at port: ${PORT}`);
});
