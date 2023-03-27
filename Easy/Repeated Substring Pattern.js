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
