const display = document.querySelector('.container');
const createButton = document.querySelector('button');
const numSquares = document.querySelector('#n');
const outlineButton = document.querySelector('#outline-button');
let isOutlineOn = false;

// Function to create the display grid
function createDisplay(width, height) {
    let divSize = 800 / width;
    let divString = divSize.toString().concat('px');
    let onoff = false;

    // Clear existing grid
    display.innerHTML = '';

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const grid = document.createElement('div');
            grid.style.width = divString;
            grid.style.height = divString;
            grid.style.display = 'inline-block';
            grid.style.margin = '0px';
            display.appendChild(grid);
        }
    }
}

// Function to enable drawing on the grid
function enableDrawing() {
    let isMouseDown = false;

    document.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isMouseDown = true;
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    display.addEventListener('mouseenter', (e) => {
        if (e.target !== display && isMouseDown) {
            e.target.style.backgroundColor = 'black';
        }
    }, true);

    display.addEventListener('mousedown', (e) => {
        if (e.target !== display) {
            e.preventDefault();
            e.target.style.backgroundColor = 'black';
        }
    }, true);
}



createButton.addEventListener('click', () => {

    let userInput = Number(numSquares.value);
    // numSquares.value = '';
    if (userInput && userInput <= 200) {
        createDisplay(userInput, userInput);
        enableDrawing();
    } else if (userInput > 200) {
        alert('Please pick a number between 1 and 200');
    } else {
        alert('Please pick a valid number');
        console.log('not a nubmer');
    }
});

numSquares.addEventListener('input', () => {
    console.log('Input field value:', numSquares.value);
});

// Function to toggle the outline for all grid elements
function toggleOutline() {
    const gridElements = document.querySelectorAll('.container div'); // Select all grid divs inside the container
    gridElements.forEach(grid => {
        if (isOutlineOn) {
            grid.style.outline = ''; // Remove the outline
        } else {
            grid.style.outline = '1px solid grey'; // Apply the outline
        }
    });
    isOutlineOn = !isOutlineOn; // Toggle the state
}

outlineButton.addEventListener('click', () => {
    toggleOutline();
});

// TODO:
//Eraser



