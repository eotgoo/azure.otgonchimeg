   //task1   "Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол"

 let a = 85;
 let b = 75;
 let c = 96;
 let d = 69;

 let sum = 0 ;
 if ( a > 80 ){
   sum = sum+a;
 }
 if ( b > 80 ){
    sum=sum+b;
 }
 if ( c > 80 ){
    sum=sum+c;
 }
 if ( d > 80 ){
    sum=sum+d;
 }
 console.log("sum=" , sum);
   

    //task1-2   "Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол"

 let number1 = 2;
 let number2 = 3;
 let number3 = 6;
 let number4 = 5;
 let number = 1;

 if (number1 >= 5) {
    number=number1*number;
 }
 if (number2 >= 5) {
    number=number2*number;
 }
 if (number3 >= 5) {
    number=number3*number;
 }
 if (number4 >= 5) {
    number=number4*number;
 }
 console.log("urjwer=" , number);


    //task2   "Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл."

 let i = 4 > 3; //true
 let iii = 4 < 3; //false
 let ii = 4 >= 3; //true
 let iv = 4 <= 3; //false
 let v = 4 == 4; //true
 let vi = 4 === 4; //true
 let vii = 4 != 4; //false
 let iix = 4 !== 4; //false
 let ix = 4 != "4"; //false
 let x = 4 == "4"; //true
 let xi = 4 === "4"; //false

 console.log(i , iii, ii, iv, v, vi, vii, iix, ix, x, xi);


    //task2-2    "Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл."

 let one = 4 > 3 && 10 < 12; //true
 let two = 4 > 3 && 10 > 12; //false
 let three = 4 > 3 || 10 < 12; //true
 let four = 4 > 3 || 10 > 12; //true
 let five = !(4 > 3); //false
 let six = !(4 < 3); //true
 let eight = !(4 > 3 && 10 < 12); //false
 let nine = !(4 > 3 && 10 > 12); //true
 let ten = !(4 === "4"); //true

 console.log (one, two, three, four, five, six, eight, nine, ten);


    //task2-3   ".if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул.prompt

 let myAge = 18;
 let yourAge =  prompt("та насаа оруулна уу");

 if ( yourAge > myAge) {
    console.log('хөгшин байна');
 }else if (yourAge < myAge ){
    console.log('залуухан байна');
 }


    //task2-4   "Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай. "

 let days = prompt('та өдрөө оруулна уу');
 let daysname;

 if (days == 1) {
    daysname = 'ажлын өдөр';
 } else if (days == 2) {
    daysname = 'ажлын өдөр';
 } else if (days == 3) {
    daysname = 'ажлын өдөр';
 } else if (days == 4) {
    daysname = 'ажлын өдөр';
 } else if (days == 5) {
    daysname = 'ажлын өдөр';
 } else if (days == 6) {
    daysname = 'амралтын өдөр';
 } else if (days == 7) {
    daysname = 'амралтын өдөр';
 } else (daysname = 'Буруу тоо')

 console.log(daysname);


    //task2-5   "Хэрэглэгчээс цаг оруулах, цаг тутамд үнэлгээ өгөх скрипт бичээрэй."

 let hours = prompt('та цагаа оруулна уу');
 let ratePerHour = 28;

 console.log("Таны ажилласан цагийн хөлс:" , hours*28);


    //task3    "Undur jil oloh"

 let year = prompt('та жилээ оруулна уу');

 if ( year%400===0 ) {
    console.log('mon');
 } else if ( year%100===0 ) {
    console.log('bish');
 } else if ( year%400===0 ) {
    console.log('mon');
 } else {
    console.log('bish');
 }


    //task4   " 3huwisagch zarlan hamgin ih bolon baga toog console deer hewlene uu" 

 let e = 1;
 let f = 2;
 let g = 3;

 console.log('hamgiin ih too:',g);
 console.log('hamgiin baga too:',e);


    //task5  "4 toonii baga"

 let h = 120;
 let l = 33;
 let m = 10;
 let n = 12;




//task6
let name1 = 'Bat';
let name1Dun = 69;

if(name1Dun<=59) {
    console.log('mash muu');
} else if(name1Dun>=69) {
    console.log('hangalttai')
} else if(name1Dun>=79) {
    console.log('dund');
} else if(name1Dun>=89) {
    console.log('sain');
} else if(name1Dun>=100) {
    console.log('mash sain');
}

let = 'name2';
let name2Dun = 56;

if(name2Dun<=59) {
    console.log('mash muu');
} else if(name2Dun>=69) {
    console.log('hangalttai');
} else if(name2Dun>=79) {
    console.log('dund');
} else if(name2Dun>=89) {
    console.log('sain');
} else if(name2Dun>=100) {
    console.log('mash sain');
}


//task7
// let weekNumber = 1;
// let weekName;
// if (weekNumber == 1) {
// weekName = 'Даваа';
// } else if (weekNumber == 2) {
// weekName = 'Мягмар';
// } else if (weekNumber == 3) {
// weekName = 'Лхагва';
// } else if (weekNumber == 4) {
// weekName = 'Пүрэв';
// } else if (weekNumber == 5) {
// weekName = 'Баасан';
// } else if (weekNumber == 6) {
// weekName = 'Бямба'
// } else if (weekNumber == 7) {
// weekName = "Ням"
// } else {
// weekName = "Буруу тоо"
// }
// console.log(weekName);


// let gender = 'male';
// let age = 19;

// if (gender === 'male' && age >= 18) {
//     console.log('насанд хүрсэн эрэгтэй');
// }else {
//     console.log('насанд хүрээгүй эсвэл хүйс тохирохгүй байна');
// }


