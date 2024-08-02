// reference to elements
const displayForAnswer = document.querySelector(".answer");
const displayForEquation = document.querySelector(".equation");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const equals = document.querySelector("#equals");
const accumulatorClear = document.querySelector(".accumulator-clear");
const clear = document.querySelector(".clear");

// global variables
let num1, num2;
num1 = num2 = 0;
let operator = "";
let num1Entered = false;
let operatorEntered = false;

// calculation functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return b !== 0 ? a / b : "divide by zero not possible";
}
function multiply(a, b) {
  return a * b;
}

function calculate(num1, operator, num2) {
  let output;
  switch (operator) {
    case "add":
      output = add(num1, num2);
      break;
    case "subtract":
      output = subtract(num1, num2);
      break;
    case "divide":
      output = divide(num1, num2);
      break;
    case "multiply":
      output = multiply(num1, num2);
      break;
  }
  return output;
}

function displayAnswerOnCalculator() {
  calculatedOutput = calculate(num1, operator, num2);
  num1 = calculatedOutput;
  num2 = 0;
  displayForAnswer.textContent = calculatedOutput;
}

function displayExpressionOnCalculator(str) {
  switch (str) {
    case "add":
      str = "+";
      break;
    case "subtract":
      str = "-";
      break;
    case "divide":
      str = "/";
      break;
    case "multiply":
      str = "*";
      break;
  }
  displayForEquation.textContent += ` ${str}`;
}

// event listeners
numbers.addEventListener("click", (e) => {
  numberPressed = +e.target.id;
  if (!num1Entered) {
    num1 = num1 * 10 + numberPressed;
  } else {
    operatorEntered = false;
    num2 = num2 * 10 + numberPressed;
  }
  displayExpressionOnCalculator(numberPressed);
});

operators.addEventListener("click", (e) => {
  num1Entered = true;
  operatorEntered = true;
  operator = e.target.id;
  displayExpressionOnCalculator(operator);
});

equals.addEventListener("click", (e) => {
  displayAnswerOnCalculator();
});

accumulatorClear.addEventListener("click", () => {
  num1 = num2 = 0;
  num1Entered = false;
  operator = "";
  displayForAnswer.textContent = "";
  displayForEquation.textContent = "";
});
