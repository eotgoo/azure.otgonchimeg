let button = document.getElementById("btn");

const change = () => {
    let bgChange1 = document.getElementById("text1");
    bgChange1.style.backgroundColor = "red";
    let bgChange2 = document.getElementById("text2");
    bgChange2.style.backgroundColor = "yellow"
}

button.addEventListener("click" , change);