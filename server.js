// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var GOOD_PORT = 7000;
var FUNNY_PORT = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  console.log(request);
  // Send the below string to the client when the user visits the PORT URL
  response.end("You are good");
}

function handleRequestFunny(request, response) {
  console.log(request);
  // Send the below string to the client when the user visits the PORT URL
  response.end("You aren't funny");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequestFunny);

// Start our server so that it can begin listening to client requests.
server1.listen(GOOD_PORT, function() {
  console.log("Server listening on: http://localhost:" + GOOD_PORT);
});

server2.listen(FUNNY_PORT, function() {
  console.log("Server listening on: http://localhost:" + FUNNY_PORT);
});