const display = document.getElementById("display");
const numbers = document.querySelectorAll("[id*=key]");
const operators = document.querySelectorAll("[id*=operator]");

let newNumber = true;
let operator;
let previousNumber;

const keyboardMap = {
  0: "key0",
  1: "key1",
  2: "key2",
  3: "key3",
  4: "key4",
  5: "key5",
  6: "key6",
  7: "key7",
  8: "key8",
  9: "key9",
  "/": "operatorDivide",
  "*": "operatorMultiply",
  "-": "operatorSubtract",
  "+": "operatorAdd",
  "=": "equals",
  Enter: "equals",
  Backspace: "backspace",
  c: "clearEntry",
  Escape: "clearAll",
  ",": "decimal",
};

const pendingOperator = () => operator !== undefined;

const calculate = () => {
  if (pendingOperator()) {
    const currentNumber = parseFloat(display.textContent.replace(".", "").replace(",", "."));
    newNumber = true;
    const result = eval(`${previousNumber} ${operator} ${currentNumber}`);
    updateDisplay(result);
  }
};

const updateDisplay = (text) => {
  if (newNumber) {
    display.textContent = text.toLocaleString("EN");
    newNumber = false;
  } else {
    display.textContent += text.toLocaleString("EN");
  }

  document.querySelector("#equals").focus();
};

const insertNumber = (event) => updateDisplay(event.target.textContent);

numbers.forEach((number) => number.addEventListener("click", insertNumber));

const selectOperator = (event) => {
  if (!newNumber) {
    calculate();
    newNumber = true;
    operator = event.target.textContent;
    previousNumber = parseFloat(display.textContent.replace(".", "").replace(",", "."));
  }
};

operators.forEach((operator) => operator.addEventListener("click", selectOperator));

const activateEquals = () => {
  calculate();
  operator = undefined;
};

const clearEntry = () => (display.textContent = "");

const clearAll = () => {
  clearEntry();
  operator = undefined;
  newNumber = true;
  previousNumber = undefined;
};

const removeLastNumber = () => (display.textContent = display.textContent.slice(0, 1));

const invertSign = () => {
  newNumber = true;
  updateDisplay(display.textContent * -1);
};

const hasDecimal = () => display.textContent.indexOf(",") !== -1;

const hasValue = () => display.textContent.length > 0;

const insertDecimal = () => {
  if (!hasDecimal()) {
    updateDisplay("0,");
  } else {
    updateDisplay(",");
  }
};

const mapKeyboard = (event) => {
  const key = event.key;
  const allowedKey = () => Object.keys(keyboardMap).indexOf(key) !== -1;

  if (allowedKey()) {
    document.getElementById(keyboardMap[key]).click();
  }
};

document.getElementById("equals").addEventListener("click", activateEquals);
document.getElementById("clearEntry").addEventListener("click", clearEntry);
document.getElementById("clearAll").addEventListener("click", clearAll);
document.getElementById("backspace").addEventListener("click", removeLastNumber);
document.getElementById("invert").addEventListener("click", invertSign);
document.getElementById("decimal").addEventListener("click", insertDecimal);
document.addEventListener("keydown", mapKeyboard);