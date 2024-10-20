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
    // Remove all child elements (the existing grid) from the container
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}
// function addHoverEffect() {
//     const cells = document.querySelectorAll('.cell');
//     cells.forEach(cell => {
//         cell.addEventListener('mouseover', function () {
//             // Change background color on hover
//             cell.style.backgroundColor = 'lightblue'; // Choose any color you like
//             // Optionally, you can also add a class instead:
//             // cell.classList.add('hovered');
//         });
//     });
// }
function hoverEffect() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function () {
            cell.classList.add("hovered");
        });
    });
}

const reset = document.querySelector(".reset")
function getSelection(){
    let answer = prompt("Please x,x grid :");
    return  parseInt(answer); 
}
reset.onclick = () => {
    selection = getSelection();
    if (!isNaN(selection) && selection > 0) {
        defaultGrid(selection); // Create new grid based on user's selection
    } else {
        alert("Please enter a valid number.");
    }
};

// Default grid on page load
defaultGrid(16)