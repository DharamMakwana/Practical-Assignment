function handleUserInput(userInput) {
  const input = userInput.toLowerCase();

  if (input.indexOf("hello") !== -1 || input.indexOf("hi") !== -1) {
    return "Hello! How can I assist you today?";
  } else if (input.indexOf("bye") !== -1 || input.indexOf("exit") !== -1) {
    return "Goodbye! Have a great day!";
  } else if (input.indexOf("what is your name") !== -1) {
    return "I'm a Chatbot";
  } else if (input.indexOf("what time is it") !== -1) {
    const currentTime = new Date().toLocaleTimeString();
    return `The current time is: ${currentTime}`;
  } else if (input.indexOf("how are you") !== -1) {
    return "I'm just a program, but thanks for asking!";
  } else if (input.indexOf("tell me a joke") !== -1) {
    return "Why don't scientists trust atoms? Because they make up everything!";
  } else {
    return "I'm sorry, I didn't understand that.";
  }
}

module.exports = {
  handleUserInput,
};
