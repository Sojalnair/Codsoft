let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let firstOperand = 0;
let secondOperand = 0;

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.innerText = currentInput;
    firstOperand = 0;
    secondOperand = 0;
    operator = '';
}

function calculate() {
    let expression = display.innerText;
    let operands = expression.split(/[+\-*\/]/);
    firstOperand = parseFloat(operands[0]);
    secondOperand = parseFloat(operands[1]);
    operator = expression.match(/[+\-*\/]/)[0];

    switch (operator) {
        case '+':
            currentInput = (firstOperand + secondOperand).toString();
            break;
        case '-':
            currentInput = (firstOperand - secondOperand).toString();
            break;
        case '*':
            currentInput = (firstOperand * secondOperand).toString();
            break;
        case '/':
            if (secondOperand === 0) {
                currentInput = 'Error';
            } else {
                currentInput = (firstOperand / secondOperand).toString();
            }
            break;
        default:
            break;
    }

    display.innerText = currentInput;
    firstOperand = 0;
    secondOperand = 0;
    operator = '';
}