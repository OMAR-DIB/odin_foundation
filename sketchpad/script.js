const container = document.getElementById("container");
let rowCreated = document.getElementsByClassName("row-grid");
var selection ;
function defaultGrid(selection) {
    clearGrid();
    makeRows(selection);
    makeColumns(selection);
    hoverEffect();
}

function makeRows(rowCount) {
    for (var i = 0; i < rowCount; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row-grid";
    }
}

function makeColumns(columnCount) {
    for (var i = 0; i < rowCreated.length; i++) {
        for (var j = 0; j < columnCount; j++) {
            let column = document.createElement("div");
            rowCreated[i].appendChild(column).classList = "cell";
        }
    }
}

function clearGrid() {
    let deleteRow = document.querySelectorAll(".row-grid");
    let deleteColumn = document.querySelectorAll(".cell");
    deleteRow.forEach(cell => cell.remove());
    deleteColumn.forEach(cell => cell.remove());
}

function hoverEffect() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function () {
             const rgb = `rgb(${ Math.floor(Math.random() * 256)}, ${ Math.floor(Math.random() * 256)}, ${ Math.floor(Math.random() * 256)})`;
            cell.style.backgroundColor = rgb;
        });
    });
}

const reset = document.querySelector(".reset")
function getSelection(){
    let answer = prompt("Please x,x grid :");
    return  parseInt(answer); 
}

reset.onclick = () => {   
    while(true){
        selection = getSelection();
        if (!isNaN(selection) && selection > 0) {
            defaultGrid(selection); 
            break;
        } else {
            alert("Please enter a valid number.");
        }
    }
};

defaultGrid(16)