//input

function display(calc) {
    document.getElementById('calc').value += calc;
    return calc;
};

//AC

 const clr= ()=>{
    calc.value = '';
 }

//sum

const sum = () => {
    calc.value += calc.value;
}
