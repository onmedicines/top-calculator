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
    case "+":
      output = add(num1, num2);
      break;
    case "-":
      output = subtract(num1, num2);
      break;
    case "/":
      output = divide(num1, num2);
      break;
    case "*":
      output = multiply(num1, num2);
      break;
  }
  return output;
}

calculate("2", "/", "5");
