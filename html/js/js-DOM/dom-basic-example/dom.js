const colors = ["red" , "blue" , "green"];
let colorIndex = 0;

const body = document.getElementsByTagName("body")[0];
let button = document.getElementById("buttons");
let box = document.getElementsByClassName("box");

const change = () => {
    
    for ( let i = 0; i < box.length; i++) {
        let color = getColor ();
        box[i].style.backgroundColor = color;
    }
}
const getColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red} , ${green} , ${blue})`;
}

button.addEventListener("click", change);