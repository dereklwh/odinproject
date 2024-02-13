const display = document.querySelector('.container');
const tempButton = document.querySelector('button');

//takes 2 integer params
function fillDisplay(width, height) {

    let isMouseDown = false;

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
            grid.style.outline = '1px solid black';
            grid.style.width = '50px';
            grid.style.height = '50px';
            grid.style.display = 'inline-block';
            grid.style.margin = '0px';

            grid.addEventListener('mouseenter', () => {
                if (isMouseDown) {
                    grid.style.backgroundColor = 'black';
                }
            });

            display.appendChild(grid);
        }
    }
}


tempButton.addEventListener('click', () => {
    display.style.width = '800px';
    fillDisplay(16,16);
});


