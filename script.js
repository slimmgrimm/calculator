const add = function(x, y){
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

const multiply = function(x, y) {
    return x * y;
}

const divide = function() {
    return  x / y;
}



const operate = function(operator, x, y) {
    x = Number(x);
    y = Number(y);
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

const previousEntry = document.getElementById('previousEntry');
const currentEntry = document.getElementById('currentEntry');
let displayValue = '';

const updateDisplay = function() {
    currentEntry.textContent = displayValue;
}

const addToOutput = function(digit) {
    displayValue += digit;
    updateDisplay();
}

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