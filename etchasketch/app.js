const display = document.querySelector('.container');
const createButton = document.querySelector('button');
const numSquares = document.querySelector('#n');

//takes 2 integer params
function fillDisplay(width, height) {

    let isMouseDown = false;
    let divSize = 800 / width;
    let divString = divSize.toString().concat('px');


    document.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isMouseDown = true;
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    })

    for (let i=0; i<width; i++) {
        for (let j=0; j<height; j++) {
            const grid = document.createElement('div');
            grid.style.outline = '0.1px solid grey';
            grid.style.width = divString;
            grid.style.height = divString;
            grid.style.display = 'inline-block';
            grid.style.margin = '0px';
            grid.style.display = 'flex';

            grid.addEventListener('mouseenter', () => {
                if (isMouseDown) {
                    grid.style.backgroundColor = 'black';
                }
            });

            grid.addEventListener('mousedown', (e) => {
                e.preventDefault();
                grid.style.backgroundColor = 'black';
            });

            display.appendChild(grid);
        }
    }
}


createButton.addEventListener('click', () => {

    let userInput = Number(numSquares.value);
    if (userInput) {
        fillDisplay(userInput,userInput);
        console.log(userInput);
    } else {
        console.log('not a nubmer');
    }
});


