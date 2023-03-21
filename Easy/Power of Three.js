/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    while(n > 1){
           n /= 3
       }

       return n === 1

   };


console.log(isPowerOfThree(10))

//    The division assignment (/=) operator divides a variable by the value of the right operand and assigns the result to the variable.
