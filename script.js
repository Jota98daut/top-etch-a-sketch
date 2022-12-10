const WIDTH = 550;

const grid          = document.querySelector("#display");
const sizeInput     = document.querySelector("#size");
const sizeSubmit    = document.querySelector("#size-submit");
const form          = document.querySelector("form");
const opacityInput  = document.querySelector("#opacity");
const opacityOutput = document.querySelector("#rangevalue");
const colors        = document.querySelectorAll(".color");
let cursorColor   = "black";
let opacityDelta  = 0.5;

opacityInput.onchange = _ => opacityDelta = parseFloat(opacityInput.value);
opacityInput.addEventListener('change', _ => {
  opacityDelta = parseFloat(opacityInput.value);
  opacityOutput.innerText = opacityInput.value;
})

form.onsubmit = e => {
  e.preventDefault();
  generateGrid();
};

colors.forEach(color => {
  color.style.background = color.id;
  color.addEventListener('click', _ => cursorColor = color.id);
});

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
        newCell.style.height = `${Math.floor(WIDTH / size)}px`;
        newCell.style.opacity = 0;
        grid.appendChild(newCell);

        newCell.addEventListener('mouseover', e => {
          currentOpacity = parseFloat(e.target.style.opacity);
          e.target.style.background = cursorColor;
          e.target.style.opacity = Math.min(1, currentOpacity + opacityDelta);
        });
      }
    }
  }
}

generateGrid();
