/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let lcp = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(lcp) !== 0) {
            lcp = lcp.substring(0, lcp.length-1);
        }
    }

    return lcp;
};

/*

["flower", "flow", "flight"] (flower becomes fl on the first iteration)
["flower", "flowerful", "flowerfully"] (indexOf will always be 0)
Compare the first string of each array with the other strings
Create variable to store that first string

Using indexOf, which returns the index that a string first starts at, compare first string to others
While indexOf first string is NOT equal to 0 (meaning all of first string doesn't fully fit)
use substring to slice off the last character
keep chopping off the last character until that first string can fit into whatever is next
make sure to reassign variable

 */
