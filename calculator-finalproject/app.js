const add = (a,b) => {return a + b};
const sub = (a,b) => {return a - b};
const multiply = (a,b) => {return a * b};
const divide = (a,b) => {return a / b};

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const timeDisplay = document.querySelector('.time');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('clicked!!');
        display.textContent = button.id;
    });
});

const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

    timeDisplay.textContent = timeString;
}

updateTime();

setInterval(updateTime, 1000);
