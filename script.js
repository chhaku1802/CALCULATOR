let currentInput = '';  
let previousInput = ''; 
let operation = '';     
let equation = '';     

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    equation = ''; 
    updateDisplay();
}


function setOperation(op) {
    if (currentInput === '') return; 
    if (previousInput !== '') {
        calculateResult(); 
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    equation = `${previousInput} ${operation}`; 
    updateDisplay();
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return; 
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    
    equation = `${previousInput} ${operation} ${currentInput} = ${result}`;
    currentInput = result.toString(); 
    operation = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = equation || currentInput; 
}
