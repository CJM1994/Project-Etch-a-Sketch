const grid = document.getElementById('grid');
const gridSlider = document.getElementById('grid-slider');
const resetButton = document.getElementById('reset-button');
const blackMode = document.getElementById('black-mode');
const rainbowMode = document.getElementById('rainbow-mode');

resetButton.addEventListener('click', resetGrid);
blackMode.addEventListener('click', chooseBlackMode);
rainbowMode.addEventListener('click', chooseRainbowMode);

let colorSetting = 'black';

// Create grid of rows * columns and populate with evenly sized cells
function populateGrid(rows, columns) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor)
        cell.classList.add('grid-item');
        grid.appendChild(cell);
    }
}

function changeColor(e) {
    if (colorSetting === 'black') {
        e.target.style.backgroundColor = 'black'
    }
    else if (colorSetting === 'rainbow') {
        const randomR = (Math.random() * 256);
        const randomG = (Math.random() * 256);
        const randomB = (Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}

function chooseBlackMode(e) {
    colorSetting = 'black';
}

function chooseRainbowMode(e) {
    colorSetting = 'rainbow';
}

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    populateGrid(gridSlider.value, gridSlider.value);
}

populateGrid(9, 9);