const container = document.querySelector('#container');

function createBox() {
    for (i = 0; i < 256; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        box.addEventListener('mouseover', () => {
            box.classList.add('hover');
        });   
    }
}

createBox();

