/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {


    let i = 1, len = s.length;
        while (i <= Math.floor(len/2)) {
            if (s.slice(0, i).repeat(len/i) == s) return true;
            i++
        }
        return false;

    };




      /*   let pattern = "";
        for (let i = 0; i < Math.floor(s.length/2); i++) {
            pattern += s[i];
            if (pattern.repeat(s.length / pattern.length) === s) return true;
        }
        return false; */


/*
Set i to 1 and len to the length of string s.
While i is less than or equal to the floor of len/2:
a. Check if the substring of s from index 0 to index i, repeated len/i times, is equal to s.
b. If the above condition is true, return true.
c. Otherwise, increment i by 1 and repeat the loop.
If the function has not yet returned, return false.
*/
