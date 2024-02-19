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
        currentInput += buttonId;
        console.log(currentInput);
        // display.textContent = currentInput;
        updateDisplay();
    } else if (['add', 'sub', 'mul', 'div'].includes(buttonId)) {
        prevInput = currentInput;
        currentInput = '';
        operation = buttonId;
        if (prevInput !== '') {
            operate();
        }
    } else if (buttonId === 'eql') {
        operate();
    }
    else if (buttonId === 'clear') {
        clear();
        updateDisplay();
    }
}

const operate = () => {
    let result;
    if (prevInput == '') {
        display.textContent = 'try again'
    }

    const prev = parseFloat(prevInput);
    const cur = parseFloat(currentInput);

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

    currentInput = result.toString();
    operation = null;
    previousInput = '';
}

const clear = () => {
    currentInput = '';
    prevInput = '';
    operation = null;
}

function updateDisplay() {
    if (currentInput === '') {
        display.textContent = "0";
    } else {
        display.textContent = currentInput;
    }
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
