/////////////INITIALIZE ME COACH/////////////
const previousEntry = document.getElementById('previousEntry');
const currentEntry = document.getElementById('currentEntry');
let displayValue = '';
let firstNumber = '';
let secondNumber = '';
let currentOperation = '';


//////////////DISPLAY FUNCTIONS/////////////
const updateDisplay = function() {
    currentEntry.textContent = displayValue;
}

const clearDisplay = function() {
    previousEntry.textContent = '';
    currentEntry.textContent = 0;
    displayValue = '';
    firstNumber = '';
    secondNumber = '';
    currentOperation = '';
}

const addToOutput = function(digit) {
    if(displayValue === '0'){
        return;
    }
    displayValue += Number(digit);
    updateDisplay();
}

const deleteDigit = function() {
    currentEntry.textContent = 
        currentEntry.textContent
            .toString()
            .slice(0, -1);
    displayValue = currentEntry.textContent;
}

const putDecimal = function() {
    if(currentEntry.textContent === '') {
        currentEntry.textContent = '0';
    } else if(currentEntry.textContent.includes('.')){
        return;
    }
    displayValue += '.';
    updateDisplay();
}

const signChange = function() {
    let x = Number(currentEntry.textContent);
    if(x < 0) {
        currentEntry.textContent = Math.abs(currentEntry.textContent);
    } else if (x > 0) {
        currentEntry.textContent = ((currentEntry.textContent) * -1);
    }
    displayValue = currentEntry.textContent;
}


//////////////////MEAT AND POTATOES//////////////////
const setOperation = function(operator) {
    if(displayValue === '.') {
        return;
    }
    if(secondNumber !== '') calculate();
    firstNumber = Number(currentEntry.textContent);
    currentOperation = operator;
    previousEntry.textContent = `${firstNumber} ${currentOperation}`;
    displayValue = '';
}

const calculate = function() {
    if(displayValue === '.') {
        return;
    }
    if(currentOperation === '') {
        return;
    }
    if(currentOperation === '/' && currentEntry.textContent === '0') {
        alert('You cannot divide by zero. System Meltdown Imminent!');
        displayValue = '';
        updateDisplay();
        return;
    }
    secondNumber = Number(currentEntry.textContent);
    currentEntry.textContent = roundNumber(operate(currentOperation, firstNumber, secondNumber));
    previousEntry.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
    currentOperation = '';
}


///////////////////BASIC MATH FUNCTIONS///////////////////
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
const percent = function(x, y) {
    return (x + (x * y/100));
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
        case '%':
            return percent(x, y);
        default:
            return null;
    }
}

const roundNumber = function(x) {
    return Math.round(x * 100000) / 100000;
}

const checkForGlobal = function() {
    console.log(x);
}
