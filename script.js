
const previousEntry = document.getElementById('previousEntry');
const currentEntry = document.getElementById('currentEntry');
let displayValue = '';
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

const updateDisplay = function() {
    currentEntry.textContent = displayValue;
}

const addToOutput = function(digit) {
    displayValue += digit;
    updateDisplay();
}

const setOperation = function(operator) {
    if(currentOperation !== null) calculate();
    firstOperand = Number(currentEntry.textContent);
    currentOperation = operator;
    previousEntry.textContent = `${firstOperand} ${currentOperation}`;
    displayValue = '';
}

////////////////BUTTON FUNCTIONS//////////////
const clearDisplay = function() {
    previousEntry.textContent = '';
    currentEntry.textContent = 0;
    displayValue = '';
}

const deleteDigit = function() {
    currentEntry.textContent = 
        currentEntry.textContent
            .toString()
            .slice(0, -1);
    displayValue = currentEntry.textContent;
}

const signChange = function() {
    x = Number(currentEntry.textContent);
    if(x < 0) {
        currentEntry.textContent = abs(currentEntry.textContent);
    } else if (x > 0) {
        currentEntry.textContent = ((currentEntry.textContent) * -1);
    }
    displayValue = currentEntry.textContent;
}

const add = function(x, y){
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

const multiply = function(x, y) {
    return x * y;
}

const divide = function(x, y) {
    return  x / y;
}

const operate = function(operator, x, y) {
    switch(operator) {
        case '+': 
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            if(y === 0) return null
            else return divide(x, y);
        default:
            return null;
    }
}

const calculate = function() {
    secondOperand = Number(currentEntry.textContent);
    currentEntry.textContent = operate(currentOperation, firstOperand, secondOperand);
    previousEntry.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null;
}