const container = document.querySelector("#container")

const content = document.createElement("div")

content.classList.add("content")
content.textContent = "hello DOM"

container.appendChild(content)

const p = document.createElement("p")
p.textContent = "Hi I'm red"
p.style.color = "red"
container.appendChild(p)

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
/*      method 1        */

/*      method 2        */

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
// btn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
//   });
/*      method 3        */

const btnn = document.querySelector("#btnn");
btnn.addEventListener("click", () => {
    alert("Hello World");
}); 