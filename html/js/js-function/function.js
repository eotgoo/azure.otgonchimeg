// function sainuu () {
//     console.log('hello pinecone');
// }

// function sain (name) {
//     console.log('sainuu' + name);
// }

// function add(a,b) {
//     return a + b;
// }

// function sub(a ,b) {
//     return a-b;
// }

// sainuu();
// sain("hoho");
// let c = add(5, 5);
// console.log("c=" +c);

// let d = sub(10,5);
// console.log('d=' +d);



    //task1-1     "function zohioh-1. Өгөгдсөн 2 тооны ихийг олох функц бич."

// let number1 = parseFloat(prompt('Ehnii toogo oruulna uu:'));
// let number2 = parseFloat(prompt('draagin toogo oruulna uu:'));

// let result = haha(number1, number2);
//  function haha(num1, num2){
//     if(num1>num2) return num1;
//     else if(num1<num2) return num2
//     else return "tentsuu";
//  }

//  console.log(`ih utga:${result}`);
 

    //task1-2     "Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич"

// let arrayOfNumbers = [1, 2, 3];
// function x(a) {
//     for (i =0; i < arrayOfNumbers.length ; i++) {
//         if (a == arrayOfNumbers[i]) return i;
        
//     }
//     return -1;

// }
// let num = x(3);
// console.log(num);


    //task1-3       "Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич."

// let studentName = 'naraa';
// function temdegt(a) {
//     for ( i = 0; i < studentName.length ; i++) {
//         if (studentName[i][0] === a ) return [i];
//     }
//     return -1;
// }
// let result = temdegt('a');
// console.log(result);


    //task1-4     "Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич."

// function randomNumber(max, min) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// let random = randomNumber(10, 30);
// console.log('random:' +random)


    //task1-5     "Өгөгдсөн array - ийн дундажыг олох функц бич."

let arrayNum = [1, 2, 3, 4, 5, 6];
let count = 0;
let total = 0;

// function array(x) {
//     for ( m = 0; m < arrayNum.length ; m++) {
//         count += arrayNum[m];
//         total++; 
//         total / arrayNum.length
//     }
// }
// let average = array(x);
// console.log(average);     aldaaatai