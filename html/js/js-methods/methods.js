    //task1     "simple1"

// let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] ;

// array.sort();
// console.log('sort:' , array);
// array.reverse();
// console.log('reversed:' , array);
// array.shift();
// console.log('remove the first IT company:' , array);
// array.pop();
// console.log('remove the last IT comapny:' , array);
// array.splice(2, 1,);
// console.log('remove the middle IT company:' , array);
// array.splice(0,4);
// console.log('remove all IT companies:' , array);



    //task2     "In the following shopping cart add, remove, edit items"

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// shoppingCart.unshift('Meat');
// console.log('add meat:' , shoppingCart);
// shoppingCart.push('Sugar');
// console.log('add sugar /end/' , shoppingCart);
// shoppingCart.splice(4,1);
// console.log('remove honey:' , shoppingCart);
// shoppingCart.splice(3, 0, 'Green');
// console.log('modify Tea to GreenTea:' , shoppingCart)



    //task3    "reverse number"

// numbers = [1, 2, 3, 4, 5];
// console.log('reversed:' , numbers.reverse());



    //task4    "parameterize a string"

// let words = ['This' ,'Is' ,'Where' ,'I' ,'Begin'];
// console.log('dundur zuraas oruulah:' , words.join('-'));



    //task5   "banknii oochir"

// let names = ["Бат","Дорж", "Пунцаг","Готов","Баяраа", "Болд", "Навчаа", "Гончигсумлай", "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар" ];
// console.log('ehnii 10 hun:' , names.slice(0,10));
// names.splice(7, 0, 'Нараа' , 'Сараа');
// console.log('gonchigsumlaid oochir zahisan 2 nemegdev:' , names);
// console.log('unoodor uilchluuleh 10 hun ni:' , names.slice(0,10));



    //task6   "palindromic checker"

a = prompt('ta utga oruulna uu');
function haha(a) {
    revVal = a.toString().split('').reverse().join(" ");
    val = a.toString();
    if (revVal == val) return 'palindrome';
    else return 'not palindrome';
}
console.log(haha(a));



    //task 7    "array-s todorhoi element ustgah"

// function remArray(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] >= 5) {
//             a.splice([i] , 1); return a
//         }
//         else return a;
//     }
// }
// console.log(remArray([1 , 4, 7, 9, 10]));
