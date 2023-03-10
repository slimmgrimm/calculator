const add = function(x, y){
    const z = x + y;
    return z;
}

const subtract = function(x, y) {
    const z = x - y;
    return z;
}

const multiply = function(x, y) {
    const z = x * y;
    return z;
}

const divide = function() {
    const z = x / y;
    return z;
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
            return divide(x, y);
        default:
            return "Invalid operator";
    }
}

const display = document.getElementById('result');
let displayValue = '';

const updateDisplay = function() {
    display.textContent = displayValue;
}

const addToOutput = function(digit) {
    displayValue += digit;
    updateDisplay();
}