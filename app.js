const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const gridSizeButton = document.querySelector('#gridSize');
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
            box.classList.add('hover');
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


/* Initial size grid */
gridSize(16);


/* Various event listeners */
resetButton.addEventListener('click', resetBox);
gridSizeButton.addEventListener('click', changeGridSize);

