const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const gridSizeButton = document.querySelector('#gridSize');
const rainbowButton = document.querySelector('#rainbow');
let counter = 0;
let size = gridSize();

/* creates grid and boxes */
function createBox(size) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, calc(100%/${size})`;
    container.style.gridTemplateRows = `repeat(${size}, calc(100%/${size})`;
    container.style.gap = 'none';
    for (i = 0; i < (size * size); i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        box.addEventListener('mouseover', () => {
           if (counter == 1) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            box.style.backgroundColor = '#' + randomColor;
           } else {
            box.style.backgroundColor = 'black';
           }
        });
    }
}


/* tests for correct input type and builds grid */
function gridSize(size = 16) {
    size = Number(size);
    if (Number.isInteger(size) && (size < 101) && (size > 0)) {
        createBox(size);
    } else {
        createBox(16);
    }
    return size;
}


/*clears grid */
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
}


/*clears grid, rebuilds grid */
function resetBox() {
    clearGrid();
    gridSize(size);    
}


/*clears grid, gets new size, tests new size for type, builds news grid */
function changeGridSize() {
    clearGrid();
    size = getSize();
    gridSize(size);
    return size;
}


/*Prompts User for desired size */
function getSize() {
    return prompt("Please enter a grid size up to 100 (Defaults to 16)");
}


/*Toggles rainbow feature on and off */
function rainbowTime() {
    counter++;
    resetBox();
    if(counter > 1) {
        rainbowButton.style.backgroundColor = 'lightgray';
        counter = 0;
    } else {
        rainbowButton.style.backgroundColor = 'gray';
    }
}


/* Initial size grid */
gridSize(16);


/* Various event listeners */
resetButton.addEventListener('click', resetBox);
gridSizeButton.addEventListener('click', changeGridSize);
rainbowButton.addEventListener('click', rainbowTime);


