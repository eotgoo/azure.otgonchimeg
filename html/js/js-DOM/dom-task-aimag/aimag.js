let first = document.getElementById("aimag-101");
let second = document.getElementById("aimag-202");
let last = document.getElementById("aimag-522");
let sukhbaatar = document.getElementById("aimag-315");

console.log(first);
console.log(second);
console.log(last);
console.log(sukhbaatar);


let aimagNames = document.getElementsByTagName('ul')[0];
let aimag = document.getElementsByTagName('li');

for(let i = 0; i < aimag.length ; i++) {
    aimag[i].style.listStyle = "none";
    aimag[i].style.fontSize = "20px";
};


let hangainbus = document.getElementsByClassName("hangai");
let baruunbvs = document.getElementsByClassName("baruun");
let zuunbvs = document.getElementsByClassName("zuun");
let tuwiinbvs = document.getElementsByClassName("tuwiin");
let hot = document.getElementsByClassName("hot");

for(let i = 0; i < aimag.length ; i++) {
    hangainbus[i].style.backgroundColor = "#AFB4FF";
    baruunbvs[i].style.backgroundColor = "#B1E1FF";
    zuunbvs[i].style.backgroundColor = "#9C9EFE";
    tuwiinbvs[i].style.backgroundColor = "#FFCAC8";
    hot[i].style.backgroundColor = "#F3CCFF";
}