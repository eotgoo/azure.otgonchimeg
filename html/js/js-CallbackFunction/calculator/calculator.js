let number = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".opr");
let result = document.getElementById("result");


//input

function display(calc) {
    document.getElementById('calc').value += calc;
    return calc;
};

//AC

 const clr= ()=>{
    calc.value = '';
 }
