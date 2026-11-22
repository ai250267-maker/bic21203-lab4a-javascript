// Select the paragraph and button using DOM selection methods
const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

// Define the function to replace the paragraph text
function changeMessage() {
    messageParagraph.textContent = "Hello there!";
}

// Attach the function to the button click event
changeButton.addEventListener("click", changeMessage);