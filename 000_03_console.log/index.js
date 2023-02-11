// What is the result of ‘console.log(3<2<1)’ and why?
//type coercion problem

//1] Coercion happens when operands are of different types. i.e. 99 + '99'

console.log(3<2<1) // true;

//why => 

/*js evaluates expression from left to right. i.e above code will first check for
 3<2 => false, 
 false < 1 here JS will type coerce false = 0 & check for 
 0 < 1 true
 */

 //result will be trues