// What is the result of ‘console.log(3<2<1)’ and why?
console.log(3<2<1) // true;

//why => 

/*js evaluates expression from left to right. i.e above code will first check for
 3<2 => false, 
 false < 1 here JS will type coerce false = 0 & check for 
 0 < 1 true
 */

 //result will be trues