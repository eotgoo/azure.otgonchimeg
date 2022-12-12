const colors = ["red" , "blue" , "green"];
let colorIndex = 0;

const body = document.getElementsByTagName("body")[0];
let button = document.getElementsByClassName("myButton");
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
const buttons = document.getElementsByClassName("myButton");

buttons.addEventListener('click' , change => {
    const isButton = change.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  console.dir(change.target.id);
})

button.addEventListener("click", change);