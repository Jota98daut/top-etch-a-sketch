const WIDTH = 550;

const grid = document.querySelector("#display");
const sizeInput = document.querySelector("#size");
const sizeSubmit = document.querySelector("#size-submit");
const form = document.querySelector("form");

form.onsubmit = e => {
  e.preventDefault();
  generateGrid();
};

function generateGrid() {
  let size = sizeInput.value;
  let newCell;
  if(size != '') {
    size = parseInt(size);
    grid.innerHTML = "";    // Remove all old cells
    grid.style.width = `${WIDTH}px`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
        newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.setAttribute("data-x", i);
        newCell.setAttribute("data-y", j);
        newCell.style.height = `${Math.floor(WIDTH / size)}px`;
        grid.appendChild(newCell);
      }
    }
  }
}

generateGrid();
