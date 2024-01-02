let displayValue = '0';
let operator = '';
let firstOperand = '';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function appendValue(value) {
    if (displayValue === '0' || displayValue === '-0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function eraseDigit() {

    displayValue = displayValue.slice(0, -1);
    
    // If the display becomes empty, reset it to '0'
    if (displayValue === '') {
        displayValue = '0';
    }

    updateDisplay();
}


function setOperator(op) {
    operator = op;
    if (displayValue !== '0') {
        firstOperand = displayValue;
        displayValue += ` ${operator} `;
        updateDisplay();
    }
}


function calculateResult() {
    let result;
    const secondOperand = displayValue.split(' ')[2]; // Extract the second operand

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            break;
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = '';
    updateDisplay();
}


updateDisplay();
