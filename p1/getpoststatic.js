const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

function serveStaticResource(res, filepath) {
  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      serveStaticResource(res, "index.html");
    } else {
      serveStaticResource(res, "404.html");
    }
  }

  if (req.method === "POST") {
    if (req.url === "/submit") {
      let body = "";
      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        // Parse the POST data into an object
        const formData = querystring.parse(body);

        console.log("Received POST data:", formData);

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Post Request Received successfully");
      });
    } else {
      serveStaticResource(res, "404.html");
    }
  }
});

const PORT = 4040;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
