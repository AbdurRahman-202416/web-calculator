// script.js
const dP = document.getElementById('display2');
let currentInput = "";
let operation = null;
let previousInput = "";
const sncdDisplay = document.getElementById('display');

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === "") return;

  if (previousInput !== "") {
    calculate();
  }

  operation = op;
  previousInput = currentInput;
  currentInput = "";
  
  // Show the previous number and operation on the secondary display
  dP.value = previousInput + " " + operation;
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operation = null;
  dP.value=' '
  updateDisplay();
}

function calculate() {
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
  dP.value = "RESULT: "

  updateDisplay();
}

function updateDisplay() {
  if (previousInput !== "" && operation !== null) {
    document.getElementById("output").value =
    previousInput + " " + operation + " " + currentInput;
      dP.value=   previousInput + " " + operation + " " + currentInput;
  } else {
    document.getElementById("output").value = currentInput;
  }
}

// Button scaling effect
let btnStyle = document.querySelectorAll(".button");
btnStyle.forEach((button) =>
  button.addEventListener("click", () => {
    button.style.transform = "scale(1.1)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 100);
  })
);
