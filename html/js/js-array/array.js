    //task1  "simple array1"

//  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//  let i = 0;

//  console.log(itCompanies);
//  console.log(itCompanies.length);
//  console.log('hamgin ehni company:' , itCompanies[0]);
//  console.log('hamgin suulin company: ' ,itCompanies[6])

//  console.log
 

//task "array of numbers"

let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let sum = 0;
let l = 0;
let max = 0;
           
         //toonuudin niilber oloh

while ( l < arrayOfNumbers.length ) {
    sum+=arrayOfNumbers[l];
    l++;
}
console.log('toonudin niilber:' ,sum);

        //hamgin ih too

for ( let a = 0; a < arrayOfNumbers.length; a++) {
    if (max < arrayOfNumbers [a]) {
        max = arrayOfNumbers [a];
    }
}
console.log('max utga ni:' , max);

        ///hamgin baga too



     








