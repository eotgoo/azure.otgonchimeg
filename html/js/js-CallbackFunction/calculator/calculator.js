const numbersBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".opr");
const equal = document.getElementById("result");
const display = document.getElementById('calc');
let firstNum = null;
let secondNum = null;
let uildel = null;
let result = 0;



//AC
 const clr= ()=>{
    calc.value = '';
 }

 

 //number
 numbersBtn.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        const value = event.target.value;
        // console.log(value);
            display.value += value;
    });
 });



 //opr
 operatorBtn.forEach((btn)=>{
    btn.addEventListener("click", (ev)=>{
     uildel = ev.target.value;
     firstNum = display.value;
     display.value = "";
    });
 });
 


 //add
 function add(a,b){
    return a + b;
 }


 //sub
 function sub(a,b) {
    return a-b;
 }


 //div 
 function div(a,b) {
    return a/b;
 }

 //mul 
 function mul(a,b) {
    return a*b;
 }


 //uildel
 function operator() {
    secondNum = display.value;
    switch(uildel){
       case "+": return add(parseFloat(firstNum), parseFloat(secondNum));
       case "-": return sub(parseFloat(firstNum), parseFloat(secondNum));
       case  "/": return div(parseFloat(firstNum), parseFloat(secondNum));
       case "*": return mul(parseFloat(firstNum), parseFloat(secondNum));
        default: break;
    }
 }



 //equal result
 equal.addEventListener("click",()=>{
    result = operator();
    display.value = result;
 });