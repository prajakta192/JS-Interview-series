/* 7 Primitive data types in JS are Immutable, once assigned a value we can't change the original value.
we can reassined whole new value, that will point to new memory location.
*/
//e.g

let browser = 'Mozilla';
console.log(browser) // 'Mozilla'
browser[0] = 'G';
console.log(browser) // 'Mozilla'
browser = 'Godzilla';
console.log(browser) // 'Godzilla'


//data types other than Primitive are mutable. i.e. objects & functions are mutable data types in JS.

//mutable data types => once assigned a value we can change the original value.

let numArr = [1, 2, 3];
console.log(numArr) // [1,2,3]
numArr[0] = '1'; // ['1',2,3]
numArr.length = 0 // []

numArr[20] = 20 // [1, 2, 3, empty × 17, 20]

//arrays stored value adjucent to each other