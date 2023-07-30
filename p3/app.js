const readline = require("readline");
const { handleUserInput } = require("./chatbot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startChat() {
  rl.question(
    "Chatbot: Hi there! How can I assist you today? ",
    (userInput) => {
      if (userInput.trim() === "exit") {
        console.log("Chatbot: Goodbye! Have a great day!");
        rl.close();
      } else {
        const response = handleUserInput(userInput);
        console.log(`Chatbot: ${response}`);
        startChat();
      }
    }
  );
}

startChat();
