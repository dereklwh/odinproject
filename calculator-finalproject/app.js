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
        display.textContent = currentInput;
    } else if (buttonId in opArray) {
        prevInput = currentInput;
        currentInput = '';
        operation = buttonId;
        console.log('no');
        display.textContent = 'no';
    }
}

// const operate = (a,b) => {
//     let num1 = ''
//     let operation = '';
//     let operator = false;
//     let exponent = 0;

//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             if (button.id in numArray) {
//                     num1 += button.id;
//                     console.log(num1);
//                     display.textContent = num1;
//             } else if (button.id in opArray) {
//                 //STORE OPERATION FOR 
//                 operation = button.id;
//                 if (operation == 'mul')
                
//             }
//         });
//     });
// }

// operate(1,2);

const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

    timeDisplay.textContent = timeString;
}

updateTime();

setInterval(updateTime, 1000);
