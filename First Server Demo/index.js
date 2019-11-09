const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 5678;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.writeHead(200, { "Content-Type": "text/plain" });

	// Route visited
	console.log(req.url);

	// The query parameters provided in route
	const q = url.parse(req.url, true).query;
	console.log(q);

	res.end("Hello World\n");
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
