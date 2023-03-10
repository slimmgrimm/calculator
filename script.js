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

const display = document.getElementById('result');
let displayValue = '';

const updateDisplay = function() {
    display.textContent = displayValue;
}

const addToOutput = function(digit) {
    displayValue += digit;
    updateDisplay();
}