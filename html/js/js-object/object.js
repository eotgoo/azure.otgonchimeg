           //task1       "accessing objects"

let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 24,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]
    //er em tooloh

// let er = 0;
// let em = {};
// function sex() {

//     for ( i = 0; i < students.length ; i++) {
//         if (students[i].gender === 'male') {
//             er++;
//         }
//         em.emegtei = students.length - er;
//         em.eregtei = er;
//     }
//     return em;
// }
// let huis = sex('students');
// console.log(huis);  

    //nasni dundaj

function age() {
    let average = 0;
    for ( i = 0; i < students.length ; i++) {
        let currentNum = students[i].age;
        average += currentNum;
    }
    average = average / students.length;
    return average;
}
let nas = age();
console.log(nas);

   //ovog nemj oruulah

// for (i = 0; i < students.length ; i++) {
//     let ovog =prompt(students[i].name , 'ovog oruulna uu');
//     students[i].lastname=ovog;
// }
// console.log(students);

   //ijil nas oloh

function getYoungestAge(data) {
    return data.reduce((min, max) => max.age == min.age ? max : min, data[0])
 }
 
let same = getYoungestAge(students) ;
console.log(same);







