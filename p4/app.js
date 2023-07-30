const http = require("http");
const WebSocket = require("ws");
const { handleUserInput } = require("../p3/chatbot");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    console.log("Received message:", message);

    const response = handleUserInput(message);
    ws.send(response);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`WebSocket server is listening on port ${PORT}`);
});
