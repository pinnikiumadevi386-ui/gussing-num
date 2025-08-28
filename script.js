let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    message.textContent = `🎉 Congratulations! You guessed it right in ${attempts} attempts.`;
    document.getElementById("restartBtn").style.display = "inline-block";
  } else if (userGuess < secretNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("restartBtn").style.display = "none";
}
