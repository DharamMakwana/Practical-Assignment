const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

function generateRandomScore() {
  const team1Score = Math.floor(Math.random() * 200);
  const team2Score = Math.floor(Math.random() * 200);
  return { team1: team1Score, team2: team2Score };
}

function sendScoresToClients() {
  const scores = generateRandomScore();
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(scores));
    }
  });
}

setInterval(sendScoresToClients, 5000);

wss.on("connection", (ws) => {
  console.log("New client connected.");

  ws.send(
    JSON.stringify({ message: "Welcome to the live cricket score updates!" })
  );

  ws.on("close", () => {
    console.log("Client disconnected.");
  });
});
