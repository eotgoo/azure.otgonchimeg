const body = document.getElementsByTagName("body")[0];
let button = document.getElementById("myBtn");

const change = () => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    body.style.backgroundColor = `rgb(${r}, ${g} ,${b})`;
}

button.addEventListener("click", change);