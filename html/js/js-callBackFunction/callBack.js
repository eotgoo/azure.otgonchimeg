let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filter(numbers, callback) {
let results = [];
for (let i=0; i < numbers.length; i++) {
if (callback(numbers[i])) {
results.push(numbers[i]);
}
}
return results;
}
const evens = filter(numbers, (n)=>{return n%2===0});
const odds = filter(numbers, (n)=>{return n%2!==0});
const odds3 = filter(numbers, (n)=>{return n%3===0});

console.log("evens:", evens);
console.log("odds:", odds);
console.log("odds3:", odds3);
