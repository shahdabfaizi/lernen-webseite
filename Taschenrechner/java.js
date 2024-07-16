let currentInput = "";
let previousInput = "";
let operator = null;
let liste = "";

function rufNummer(number) {
  currentInput += number;
  updateDisplay();
}

function add() {
  performOperator();
  operator = "+";
  currentInput = "";
  updateDisplay();
  updatePreviousInput();
}

function sub() {
  performOperator();
  operator = "-";
  currentInput = "";
  updateDisplay();
  updatePreviousInput();
}

function multi() {
  performOperator();
  operator = "*";
  currentInput = "";
  updateDisplay();
  updatePreviousInput();
}

function divi() {
  performOperator();
  operator = "/";
  currentInput = "";
  updateDisplay();
  updatePreviousInput();
}

function summe() {
  performOperator();
  operator = "=";
  currentInput = "";
  updateDisplay();
  updatePreviousInput();
  updateVerlauf();
}

function cleardisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  resetDisplay();
}

function performOperator() {
  if (operator === "=") {
    return;
  }
  if (previousInput === "") {
    previousInput = currentInput;
    currentInput = "";
    return;
  }
  // parseInt für ganz zahl.
  let result = 0;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (operator === "+") {
    result = prev + current;
  } else if (operator === "-") {
    result = prev - current;
  } else if (operator === "*") {
    result = prev * current;
  } else if (operator === "/") {
    result = prev / current;
  }

  result = result.toFixed(2);
  //result = Math.round(result);
  const listString =
    "<p>" +
    previousInput +
    " " +
    operator +
    " " +
    currentInput +
    " = " +
    result +
    "</p>";
  liste = listString + liste;

  previousInput = result.toString();
  currentInput = "";
}

function updateDisplay() {
  if (currentInput) {
    document.getElementById("display").innerHTML = currentInput;
  } else if (previousInput) {
    document.getElementById("display").innerHTML = previousInput;
  } else {
    document.getElementById("display").innerHTML = "0";
  }
}

function updatePreviousInput() {
  document.getElementById("zwischenAnzeige").innerHTML = previousInput || "0";
}

function updateVerlauf() {
  document.getElementById("verlaufanzeige").innerHTML = liste;
}

function resetDisplay() {
  document.getElementById("display").innerHTML = "0";
  document.getElementById("zwischenAnzeige").innerHTML = "0";
}
