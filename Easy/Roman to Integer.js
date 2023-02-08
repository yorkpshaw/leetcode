/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  let integer = 0;

  for (let i = 0; i < s.length; i++) {
      let cur = numerals[s[i]];
      let next = numerals[s[i+1]]
      if (cur < next) {
          integer -= cur;
      } else {
          integer += cur;
      }
  }
  return integer;
};


//Number length at least 1, no more than 15
//Create a counting variable
//IV(4) is V-I, IX(9) is X-I, XL(40) is L-X, XC(90) ix C-X,
//CD(400) is D-C, CM(900) is M-C
//Roman Integers are sorted from largest to smallest
//Iterate through string S
//Set two pointers, one for the curr and one for the next
//If the curr element is smaller than the next (ie, IV or IX), subtract current from count

//MCMXCIV - M CM XC IV - 1000+900+90+4 = 1994
//1000(M) -100(C) +1000(M) -10(X) +100(C) -1(I) +5(V)
//1000->900->1900->1890->1990->1989->1994
