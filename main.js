// script.js
const dP = document.getElementById("display2");
let currentInput = "";
let operation = null;
let previousInput = "";
const sncdDisplay = document.getElementById("display");

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  playSound() 
  if (currentInput === "") return;

  if (previousInput !== "") {
    
    calculate();
  }

  operation = op;
  previousInput = currentInput;
  currentInput = "";

  // Show the previous number and operation on the secondary display
  dP.value = previousInput + " " + operation;

  playSound();
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operation = null;
  dP.value = " ";
  updateDisplay();
}

function calculate() {
  playSound() 
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = "";

  // Display a result message
  dP.value = "RESULT: " + currentInput;

  updateDisplay();
}

function updateDisplay() {
  if (previousInput !== "" && operation !== null) {
    document.getElementById("output").value = currentInput;

    dP.value = previousInput + " " + operation + " " + currentInput;

    // here we will display both
  } else {
    document.getElementById("output").value = currentInput;
  }
  playSound();
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  console.log(key);
  playSound();
  if (!isNaN(key)) {
    appendNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    setOperation(key);
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Escape" || key === "c") {
    clearDisplay();
  }
});

// const audio = new Audio("calculator-sound.mp3");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     audio.play();

//   });
// });

function playSound() {
  const audio = new Audio("switch-button-106349.mp3");
  audio.play();
}
