// reference to elements
const displayForAnswer = document.querySelector(".answer");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const equals = document.querySelector("#equals");

// global variables
let num1, num2;
let operator = "";
let num1Entered = false;
let equalsPressed = false;

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

// event listeners
numbers.addEventListener("click", (e) => {
  numberPressed = +e.target.id;
  if (num1Entered === false) {
    num1Entered = true;
    num1 = numberPressed;
  } else {
    num2 = numberPressed;
  }
});

operators.addEventListener("click", (e) => {
  operator = e.target.id;
});

equals.addEventListener("click", (e) => {});
