let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function appendToDisplay(value) {
    if (currentInput === '' && value === '0') {
        return; // Prevent leading zeros
    }
    currentInput += value;
    display.textContent = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
