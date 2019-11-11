const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 202;
	res.writeHead(202, { "Content-Type": "text/plain" });

	console.log("Received a request");

	// Route visited
	console.log(req.url);
	switch (req.url) {
		case "/home":
			return homepage;
		case "/login":
			return login;
	}

	// The query parameters provided in route
	// const q = url.parse(req.url, true).query;
	// console.log(q);

	res.end("Hello World And Friends\n");
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
