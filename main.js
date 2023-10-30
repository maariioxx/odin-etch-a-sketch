const grid = document.querySelector(".grid");

const numberButton = document.querySelector(".numberGrid");

let numberSquares;

numberButton.addEventListener('click', () => {
    clearGrid();  
})

const changeSize = () => {
    numberSquares = parseInt(prompt("How many squares per side do you want? (Maximum 100)"));
    while (numberSquares > 100){
        numberSquares = parseInt(prompt("How many squares per side do you want? (Maximum 100)"));
    }
    return numberSquares;
}

const clearGrid = () => {
    while(grid.firstChild){
    grid.removeChild(grid.lastChild);
    }
    changeSize();
    createGrid(numberSquares);
}

const createGrid = (numberSquares) => {
    for (i = 0; i < numberSquares; i++){
        for (j = 0; j < numberSquares; j++){
            const cell = document.createElement("div")
            cell.classList.add("cell");
            cell.style.width = 500 / numberSquares + "px";
            cell.style.height = 500 / numberSquares + "px";
            grid.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                let R = Math.round(Math.random() * 256);
                let G = Math.round(Math.random() * 256);
                let B = Math.round(Math.random() * 256);
                cell.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
                })
            }
    }
}

createGrid(16);






