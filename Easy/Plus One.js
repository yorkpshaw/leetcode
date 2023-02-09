/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    // let newInt = Number(digits.join("")) + 1;
    // let newString = newInt.toString();
    // let newArray = newString.split('').map(num => Number(num));
    // return newArray;


// let newInt = Number(digits.join("")) + 1;
// let newArray = Array.from(newInt);
// console.log(newArray);
// return newArray;


let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    digits[i] = sum;
    if (carry === 0) break;
  }
  if (carry === 1) digits.unshift(1);
  return digits;

};

// [1,2,3,9] should return []1,2,3,1,0]
// if 9 is the last digit in the array, it should be 1, 0
// join the array together, num conversion on outside
// add one and return the split
