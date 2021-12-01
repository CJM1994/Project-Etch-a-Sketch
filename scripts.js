const grid = document.getElementById('grid');
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGrid);

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
    e.target.classList.add('paint');
}

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    populateGrid(prompt('Select a new grid width (Number of rows)'), prompt('Select a new grid height (Number of columns)'))
}

populateGrid(16, 16);