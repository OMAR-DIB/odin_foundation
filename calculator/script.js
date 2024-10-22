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
    } 
    return res;
}

let buttons = document.querySelectorAll(".button");
let equal = document.querySelector(".equals");
let display = document.querySelector("p");
let nb1 = "";
let nb2 = "";
let operator = "";

buttons.forEach((button)=> {
    button.addEventListener("click" , function (){
        let value = button.textContent;
        if (value === "Clear"){
            nb1 = "";
            nb2 = ""; 
            operator = "";
            display.textContent = 0;
            return ;
        }
        if (!operator){
            if (!isNaN(value)){
                nb1 += value;
                display.textContent = nb1;
            }else{
                operator = value;
            }
        }else {
            nb2 += value;
            display.textContent = nb2;
        }
    })
})
equal.addEventListener("click" , function(){
    if(nb1 && nb2 && operator){
        let res = operate(parseFloat(nb1),parseFloat(nb2),operator);
        display.textContent = res;
        nb1= res;
        nb2 ="";
        operator="";
    }
});
