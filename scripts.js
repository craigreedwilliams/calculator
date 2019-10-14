// calculator app

/**
 *
 */

 const calculator = {
  add(a, b) {
  return Number(a) + Number(b);
  }

  subtract(a, b) {
  return a - b;
  }

  multiply(a, b) {
  return a * b;
  }

  divide(a, b) {
  return a / b;
  }

  remainder(a, b) {
  return a % b;
  }
};

console.log(calculator.add(1,5));

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  output.textContent = calculator[select.value](num1.value, num2.value);
});
