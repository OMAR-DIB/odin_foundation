function add(nb1, nb2) {
    return nb1 + nb2;
}

function substract(nb1, nb2) {
    return nb1 - nb2;
}

function multiply(nb1, nb2) {
    return nb1 * nb2;
}

function divide(nb1, nb2) {
    return nb1 / nb2;
}

function restDeDivision(nb1, nb2) {
    return nb1 % nb2;
}
function operate(nb1, nb2, operator) {
    let res;
    if (operator === "*") {
        res = multiply(nb1, nb2);
    } else if (operator === "-") {
        res = substract(nb1, nb2);
    } else if (operator === "+") {
        res = add(nb1, nb2);
    } else if (operator === "/") {
        res = divide(nb1, nb2);
    } else if (operator === "%") {
        res = restDeDivision(nb1, nb2);
    }
    return res;
}

let buttons = document.querySelectorAll(".button");
let equal = document.querySelector(".equals");
let display = document.querySelector("p");
let nb1 = "";
let nb2 = "";
let operator = "";
function handling(button){
    let value = button.textContent;
        if (value === "Clear") {
            nb1 = "";
            nb2 = "";
            operator = "";
            display.textContent = 0;
            return;
        }
        if (button.classList.contains("delete-one")) {
            if (!operator) {
                nb1 = nb1.slice(0, -1);
                display.textContent = nb1 || 0;
            } else {
                nb2 = nb2.slice(0, -1);
                display.textContent = nb2 || 0;
            }
            return;
        }
        if (button.classList.contains("decimal")){
            if (!operator){
                if (!nb1.includes(".")){
                    nb1 += ".";
                    display.textContent = nb1;
                }
            }else{
                if (!nb2.includes(".")){
                    nb2 += ".";
                    display.textContent = nb2;
                }
            }
            return;
        }
        if (!operator) {
            if (!isNaN(value)) {
                nb1 += value;
                display.textContent = nb1;
            } else {
                operator = value;
            }
        } else {
            nb2 += value;
            display.textContent = nb2;
        }
}


buttons.forEach((button) => {
    button.addEventListener("click", function () {
        handling(button);
    })
})

equal.addEventListener("click", function () {
    if (nb1 && nb2 && operator) {
        let res = operate(parseFloat(nb1), parseFloat(nb2), operator);
        display.textContent = res;
        nb1 = res.toString();
        nb2 = "";
        operator = "";
    }
});

// document.addEventListener("keydown",function (event){
//     const key = event.key;
    
//     // Check if the key is a number, operator, or special key
//     if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
//         handling(key); // Handle numbers and operators
//     } else if (key === "Enter") {
//         equal.click(); // Simulate "equals" button click
//     } else if (key === "Backspace") {
//         if (!operator) {
//             nb1 = nb1.slice(0, -1); // Remove last character from nb1
//             display.textContent = nb1 || "0"; // Update display, show 0 if empty
//         } else if (nb2) {
//             nb2 = nb2.slice(0, -1); // Remove last character from nb2
//             display.textContent = nb2 || "0"; // Update display, show 0 if empty
//         }
//     }
// })
