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
];


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

// function age() {
//     let average = 0;
//     for ( i = 0; i < students.length ; i++) {
//         let currentNum = students[i].age;
//         average += currentNum;
//     }
//     average = average / students.length;
//     return average;
// }
// let nas = age();
// console.log(nas);


 //ovog nemj oruulah

// for (i = 0; i < students.length ; i++) {
//     let ovog =prompt(students[i].name , 'ovog oruulna uu');
//     students[i].lastname=ovog;
// }
// console.log(students);


 //ijil nas oloh

let arrayOfAges = [];
let ages = 0;
let same = [];
for( i = 0; i < students.length; i++) {
    ages = students[i].age;
    arrayOfAges.push(ages);
}
for (l= 0; l < arrayOfAges.length; l++) {
    for (j = l+1; j < arrayOfAges.length; j++) {
        if (arrayOfAges[l] == arrayOfAges[j]) {
            same.push(arrayOfAges[l], arrayOfAges[j]);
        }
    }
}
console.log('same ages:',same); 




    //task2          "simple object"

// let dog = {
//     nameofDog: 'Sanaa',
//     breed: 'Tuwd',
//     color: 'beige brown',
//     age: 1,
//     indentification: 'sad eyes',
// };
// console.log(dog);




    //task3        "animals"

// let animals = [
//         {
//         type: "dog", 
//         sound: "woof"
//     }, 
//         {
//         type: "cow",
//         sound: "moo"
//     },
//         {
//         type: "cat",
//         sound: "meow"
//     }
// ];




    //task4     "suragchid"

// let oyutan=[
//     {
//     name: 'dulmaa',
//     birthOfYear: 1999,
//     single: 'false'
// },
//     {
//     name: 'bataa',
//     birthOfYear: 2000,
//     single: 'true'
// },
//     {
//     name: 'damiran',
//     birthOfYear: 1998,
//     single: 'true'
// },
//     {
//     name: 'dondog',
//     birthOfYear: 1999,
//     single: 'false'
// },
//     {
//     name: 'naraa',
//     birthOfYear: 2003,
//     single: 'true'
// },
// ];

    //20s deesh nas butsaah

// function agesOfOyutan () {
//     for (i=0; i<oyutan.length; i++) {
//         if (oyutan[i].birthOfYear < 2002) {
//             console.log('20 deesh nastangud' ,oyutan[i]);
//         }
//     }
// }
// console.log(agesOfOyutan(oyutan));

    //nasiig oloh

// let nasaa = 0;
// function oyutanNas () {
//     for (i = 0; i < oyutan.length; i++) {
//         nasaa = 2022 - oyutan[i].birthOfYear;
//         console.log('nas:' , nasaa)
//     }
// }
// console.log(oyutanNas(oyutan));

    //gants biy humuus

// function singleStatus () {
//     for (i = 0; i < oyutan.length; i++) {
//         if (oyutan[i].single === 'true') {
//             console.log('single:' ,oyutan[i]);
//         }
//         else {
//             console.log('not single:' , oyutan[i]);
//         }
//     }
// }
// console.log(singleStatus(oyutan));




    //task5     "MERN Object"

const users = [
    {
        name: 'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30,
    },
    {
        name: 'Job',
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    {
        name: 'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn:  true,
        points: 50,
    },
    {
        name: 'Daniel',
        email: 'daniel@daniel.com',
        skills:  ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40,
    },
    {
        name: 'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      {
        name:   'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
      },
    {
        name:    'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
      }
]

    //Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.

// console.log(users[2]);

    //olon ur chadwar ezemshsen

// let skill = [];
// for (i = 0; i < users.length; i++) {
//     skill.push(users[i].skills.length);
//     max = Math.max(...skill);
// }
// console.log('hamgin ih skills ni :' , max);

    //newtersen usersig tooloh

// function loggedStatus () {
//     for (i = 0; i < users.length; i++) {
//         if (users[i].isLoggedIn === true) {
//             console.log('isLoggedIn:' ,users[i]);
//         }
//         else {
//             console.log('not logged:' , users[i]);
//         }
//     }
// }
// console.log(loggedStatus(users));

    //50s deesh ono awsnig tool

// function pointsStatus () {
//     for (i = 0; i < users.length; i++) {
//         if (users[i].points >= 50) {
//             console.log(users[i]);
//         }
//     }
// }
// console.log(pointsStatus(users));


    //MongoDB, Express, React, Node hugjuulegchdig oloh

// for (i = 0; i < users.length ; i++) {
//     console.log(users[i].skills.indexOf('MongoDB' , 'Express' , 'React' , 'Node'));
// }

    //Хамгийн их настай 3 хүмүүсийн мэдээллийг хэвлэх

// let ageOfUsers = [];
// for (i = 0; i < users.length; i++) {
//     ageOfUsers.push(users[i].age);
// }
// console.log('buh usersin nas:',ageOfUsers);    //dutuu!!!!!!!


