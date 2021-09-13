start();

function start() {
  var operand = selectOperand();
  var numbers = getNumbers();

  console.log(operand);
  doOperation(operand, numbers);
}

function getNumbers() {
  var first = Number(prompt("Enter first number"));
  var second = Number(prompt("Enter second number"));

  return { first, second };
}

function selectOperand() {
  return Number(prompt("1.Add \n2. Subtract \n3. Multiply \n4. Divide"));
}

function doOperation(a, b) {
  switch (a) {
    case 1:
      add(b.first, b.second);
      break;
    case 2:
      subtract(b.first, b.second);
      break;
    case 3:
      multiply(b.first, b.second);
      break;
    case 4:
      divide(b.first, b.second);
      break;
    default:
      alert("Invalid");
      break;
  }
}

function add(a, b) {
  alert(a + b);
}

function subtract(a, b) {
  alert(a - b);
}

function multiply(a, b) {
  alert(a * b);
}

function divide(a, b) {
  try {
    alert(a / b);
  } catch (err) {
    alert("Unable to divide");
  }
}
