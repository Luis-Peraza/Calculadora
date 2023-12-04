// calculator.js

let displayValue = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    if (displayValue !== '') {
        firstOperand = displayValue;
        displayValue = '';
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function clearLastDigit() {
    if (displayValue !== '') {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    }
}

function calculateResult() {
    if (operator !== '' && firstOperand !== '' && displayValue !== '') {
        let result;
        const secondOperand = displayValue;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case 'x':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '÷':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                return;
        }
        displayValue = result.toString();
        updateDisplay();
        operator = '';
        firstOperand = '';
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
