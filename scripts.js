// reference to elements
const answerDisplay = document.querySelector(".answer");
const equationDisplay = document.querySelector(".equation");
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
let num2Entered = false;
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
  answerDisplay.textContent = calculatedOutput;
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
  equationDisplay.textContent += `${str}`;
}

// event listeners
numbers.addEventListener("click", (e) => {
  numberPressed = +e.target.id;
  if (!num1Entered) {
    num1 = num1 * 10 + numberPressed;
  } else {
    operatorEntered = false;
    num2Entered = true;
    num2 = num2 * 10 + numberPressed;
  }
  displayExpressionOnCalculator(numberPressed);
});

operators.addEventListener("click", (e) => {
  if (operatorEntered) {
    equationDisplay.textContent = equationDisplay.textContent.slice(0, -1);
  } else if (!operatorEntered && num2Entered) {
    displayAnswerOnCalculator();
    equationDisplay.textContent = "";
    displayExpressionOnCalculator(num1);
  }
  num1Entered = true;
  operatorEntered = true;
  operator = e.target.id;
  displayExpressionOnCalculator(operator);
});

equals.addEventListener("click", (e) => {
  displayAnswerOnCalculator();
  equationDisplay.textContent = "";
  displayExpressionOnCalculator(num1);
});

accumulatorClear.addEventListener("click", () => {
  num1 = num2 = 0;
  num1Entered = false;
  operator = "";
  answerDisplay.textContent = "";
  equationDisplay.textContent = "";
});

clear.addEventListener("click", () => {
  if (num1Entered) {
    if (operatorEntered) {
      operator = "";
      operatorEntered = false;
      num1Entered = false;
    } else {
      num2 = Math.floor(num2 / 10);
      if (num2 === 0) {
        operatorEntered = true;
        num2Entered = false;
      }
    }
    equationDisplay.textContent = equationDisplay.textContent.slice(0, -1);
  } else {
    num1 = Math.floor(num1 / 10);
    equationDisplay.textContent = equationDisplay.textContent.slice(0, -1);
    answerDisplay.textContent = equationDisplay.textContent;
  }
});
