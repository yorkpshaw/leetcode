/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    //base case
if (n <= 1) return 1;

//otherwise this is basically fib sequence f(n) = f(n-1) + f(n-2)
return climbStairs(n - 1) + climbStairs(n - 2);


};

// Fibonacci Sequence
