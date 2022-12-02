//task1-1  "1-10 hurtelh natural too"

console.log ('1-10 hurtelh natural too');

 let count = 1;
 while (count <= 10) {
     console.log(count);
     count = count + 1;
 }



//task1-2  "1-10 hurtelh natural sondgoi too"

console.log ('1-10 hurtelh natural sondgoit too');

 let oddNumber = 1; 
 while (oddNumber <= 10) {     
    console.log(oddNumber);     
    oddNumber = oddNumber + 2; }



//task1-3  "1-10 hurtelh natural tegsh too 

console.log ('1-10 hurtelh natural tesgh too');

 let evenNumber = 2;
 while (evenNumber <= 10) {     
    console.log(evenNumber);
    evenNumber = evenNumber +2; }



 //task1-4   "1-100 hurtelh natural tooni niilber"

console.log ('1-100 hurtelh natural tooni niilber');

 let sum = 1;
 let a = 2; do {    
     console.log(sum);    
     sum += a;    
     a++; 
} while(a <= 101);



//task1-5   "n hurtelh toog hewleh niilber oloh"

console.log ('n hurtelh toonii niilber');

 let n = prompt('ta duriin toogo oruulna uu?');
 let c = 1;
 let s = 0;
  do {
    console.log(c);
    s = s + c;
    c = c + 1;
} while(c<=n)
console.log('niilber ni ;' , s);



//task1-6 "anhnii too mun esehig shalgah"

let firstNumber = prompt('ta toogoo oruulna uu');
let too = Number(firstNumber);

let i = 2;
let anhniiToo = true;

if(too === 2){
    console.log("Anhnii too mun");
}else{
    while(i<too){
        if(too % i === 0){
            anhniiToo = false;
            break;
        }
        i++;
    }

    if(anhniiToo){
        console.log("Anhnii too mun");
    }else{
        console.log("Anhnii too bish");
    }
}



//task1-7 "ugugdsun interval dahi anhni toog hewleh"

let lowerNumber = 1;
let higherNumber = 10;
let l=2 ;
let m;

if (m = lowerNumber) {
} else if (m <= higherNumber) {

}



//task1-8 "n tooni paktorial oloh"







