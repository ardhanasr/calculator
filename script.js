const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value);
  });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "";
let result = "";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else if (result !== "") {
    clearAll();
    currentNumber = "";
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";

  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
  result = "";
};

const decimals = document.querySelector(".decimal");

decimals.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const percentages = document.querySelector(".percentage");

percentages.addEventListener("click", (event) => {
  percenting();
});

percenting = (nyeh) => {
  if (prevNumber === "") {
    currentNumber = currentNumber / 100;
    updateScreen(currentNumber);
  }
  if (prevNumber !== "") {
    currentNumber = (prevNumber * currentNumber) / 100;
    updateScreen(currentNumber);
  }
};

/**/
