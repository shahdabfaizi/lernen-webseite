let currentInput = "0";
let currentOperation = null;
let previousInput = "0";

function rufNummer(number) {
  currentInput += number;
  updateDisplay();
}

function add() {
  previousInput = currentInput;
  currentInputt = 0;
  updateDisplay();
  updatePreviousInput();
}

function sub() {}

function multi() {}

function divi() {}

function summe() {}

function clear() {}

function updateDisplay() {
  document.getElementById("display").innerHTML = currentInput;
}

function updatePreviousInput() {
  document.getElementById("zwischenAnzeige").innerHTML = previousInput + "+";
}
