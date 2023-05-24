/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {

    let factors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i)
        }
    }

    if (factors[k-1] === undefined) return -1;
    return factors[k-1];

};

/* BETTER SPACE COMPLEXITY
let count = 0;

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        count++;

        if (count === k) {
            return i;
        }
    }
}

return -1;
*/


/*
Create an empty array to push factors of N into
Loop to the range of N
    if N % i = 0 then push in the number

return the number from array[k] if it doesn't exist return -1

 */
