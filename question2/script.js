const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultDisplay = document.getElementById("result");

function checkInput() {
    // Trim whitespace to catch empty or space-only inputs
    const rawValue = userInput.value.trim();

    // Check if empty or not a valid number
    if (rawValue === "" || Number.isNaN(Number(rawValue))) {
        resultDisplay.textContent = "Please enter a valid number!";
        return;
    }

    const num = Number(rawValue);

    if (num < 10) {
        resultDisplay.textContent = "The number is lower than 10";
    } else if (num > 10) {
        resultDisplay.textContent = "The number is higher than 10";
    } else {
        resultDisplay.textContent = "The number is equal to 10";
    }
}

checkButton.addEventListener("click", checkInput);