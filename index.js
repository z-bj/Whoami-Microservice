// init project
require("dotenv").config();
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
let cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// This API point defines a route at '/api/whoami' that returns a JSON response with the client's IP address, language and user agent information.

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip, // The IP address of the client making the request
    language: req.headers["accept-language"], // The language accepted by the client
    software: req.headers["user-agent"], // The client's user agent information
  });
});

// To 404
app.use((req, res) => {
  res.status(404).sendFile(path.resolve("views/404.html"));
});

// listen for requests on port: 3000
let listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

module.exports = app;
