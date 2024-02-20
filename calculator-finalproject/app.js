const add = (a,b) => {return a + b};
const sub = (a,b) => {return a - b};
const multiply = (a,b) => {return a * b};
const divide = (a,b) => {return a / b};

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const timeDisplay = document.querySelector('.time');

const numArray = [...document.querySelectorAll('.numbers button')];
const opArray = [...document.querySelectorAll('.operators button')];

console.log(numArray);
console.log(opArray);

let currentInput = '';
let prevInput = '';
let operation = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.id);
    });
});

const handleButtonClick = (buttonId) => {
    if (buttonId in numArray) {
        if (currentInput === '0') {
            currentInput = buttonId;
        } else {
            currentInput += buttonId;
        }
        updateDisplay();
    } else if (['add', 'sub', 'mul', 'div'].includes(buttonId)) {
        if (prevInput !== '') {
            operate();
        }
        prevInput = currentInput;
        currentInput = '';
        operation = buttonId;
        updateDisplay();
    } else if (buttonId === 'eql') {
        operate();
        updateDisplay();
    } else if (buttonId === 'clear') {
        clear();
        updateDisplay();
    } else if (buttonId === 'sign') {
        changeSign();
        updateDisplay();
    } else if (buttonId === 'percent') {

    }
}

const operate = () => {
    let result;
    if (prevInput == '') {
        display.textContent = 'try again'
    }

    const prev = parseFloat(prevInput);
    const cur = parseFloat(currentInput);

    // if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case 'add':
            result = add(prev, cur);
            break;
        case 'sub':
            result = sub(prev, cur);
            break;
        case 'mul':
            result = multiply(prev, cur);
            break;
        case 'div':
            result = divide(prev, cur);
            break;
        default:
            return;
    }

    currentInput = Number.isInteger(result) ? result.toString() : Number(result.toFixed(7)).toString();
    operation = null;
    previousInput = '';
}

const clear = () => {
    currentInput = '0';
    prevInput = '';
    operation = null;
}

const updateDisplay = () => {
    if (currentInput === '') {
        display.textContent = prevInput;
    } else {
        display.textContent = currentInput;
    }
}

const changeSign = () => {
    currentInput = currentInput.startsWith('-') ? currentInput.substring(1) : ('-' + currentInput);
}


// updateDisplay();


const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

    timeDisplay.textContent = timeString;
}

updateTime();

setInterval(updateTime, 1000);
