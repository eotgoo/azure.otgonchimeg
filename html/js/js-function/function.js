    //task1-1     "function zohioh-1. Өгөгдсөн 2 тооны ихийг олох функц бич."

let number1 = parseFloat(prompt('Ehnii toogo oruulna uu:'));
let number2 = parseFloat(prompt('draagin toogo oruulna uu:'));

let result = haha(number1, number2);
 function haha(num1, num2){
    if(num1>num2) return num1;
    else if(num1<num2) return num2
    else return "tentsuu";
 }

 console.log(`ih utga:${result}`);
 



    //task1-2     "Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич"

let arrayOfNumbers = [1, 2, 3];
function x(a) {
    for (i =0; i < arrayOfNumbers.length ; i++) {
        if (a == arrayOfNumbers[i]) return i;
        
    }
    return -1;

}
let num = x(3);
console.log(num);




    //task1-3       "Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич."

let studentName = 'naraa';
function temdegt(a) {
    for ( i = 0; i < studentName.length ; i++) {
        if (studentName[i][0] === a ) return [i];
    }
    return -1;
}
let result1 = temdegt('a');
console.log(result1);




    //task1-4     "Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич."

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
let random = randomNumber(10, 30);
console.log('random:' +random);




    //task1-5     "Өгөгдсөн array - ийн дундажыг олох функц бич."

function avNum (array) {
    let average = 0; 
    for (let i = 0; i < array.length; i++) {
        let currentNum = array [i];
        average += currentNum;
    }
    average = average / array.length;
    return average;
}

let averageNumbers = avNum([2, 5, 6, 8, 10,]);
console.log('array dundaj:' + averageNumbers);



    //task1-6    "Өгөгдсөн array - ийн нийлбэрийг олох функц бич."

function sumNum (array) {
    let sumNumber = 0; 
    for (let i = 0; i < array.length; i++) {
        let currentNum = array [i];
        sumNumber += currentNum;
    }
    return sumNumber;
}

let niilber = sumNum([2, 5, 7, 11,]);
console.log('array niilber:' + niilber);



    //task1-7    "Өгөгдсөн тоо анхны эсэхийг олох функц бич."

function firstNum (array) {
    let 
}