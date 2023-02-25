/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 2) {

        return 1;
    }

        let firstStep = 1;

        let secondStep = 1;

        let thirdStep = 0;

        for (let i=2; i<=n; i++) {

            thirdStep = firstStep + secondStep;

            firstStep = secondStep;

            secondStep = thirdStep;
        }

        return thirdStep;

    };

    // Recursion solution:
    // var climbStairs = function(n) {

    //     if (n <= 1)
    //         return 1;
    //     return climbStairs(n-1) + climbStairs(n-2);

    // };
