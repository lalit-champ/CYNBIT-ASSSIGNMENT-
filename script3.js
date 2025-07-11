// Access elements
const input = document.getElementById("userInput");
const button = document.getElementById("showBtn");
const display = document.getElementById("displayArea");

// Add click event
button.addEventListener("click", () => {
  const userText = input.value.trim();

  if (userText === "") {
    display.textContent = "Please enter something!";
  } else {
    display.textContent = `You typed: ${userText}`;
  }

  input.value = ""; // clear input after displaying
});
