const add = (a,b) => {return a + b};
const sub = (a,b) => {return a - b};
const multiply = (a,b) => {return a * b};
const divide = (a,b) => {return a / b};

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('clicked!!');
        display.textContent = button.id;
    });
});
