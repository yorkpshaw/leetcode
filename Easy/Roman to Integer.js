/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const roman_nums = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    const num_adjust = {IV: 2, IX: 2, XL: 20, XC: 20, CD: 200, CM: 200 }
    let count = 0

    console.log(count)
};



//Number length at least 1, no more than 15
//Create a count variable
//IV(6) -> 4, IX(11) -> 9, XL(60) -> 40, XC(110) -> 90,
//CD(600) -> 400, CM(1100) -> 900
//Each time IV or IX appears, subtract 2 from count
//Each time XL or XC appears, subtract 20 from count
//Each time CD or CM appears, subtract 200 from count
