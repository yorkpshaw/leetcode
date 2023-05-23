/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let str = ''; // Create empty string to concat into
    let i = 0; // Pointer for string s
    let j = 0; // Pointer for string t

    while (j < t.length) { // Iterate through string t
        if (s[i] === t[j]) { // If char s[i] and t[j] match,
            str += s[i]; // concat str and s[i] character
            i++; // increment pointer i
            j++; // increment pointer j
        } else { // if char does not match,
            j++; // increment only j, since we are trying to find a match for s[i]
        }
    }
    return str.length === s.length; // return boolean, as str.length must equal s.length
};

/*
Create an empty string
Create a pointer to iterate through s
Create a pointer to iterate through t

while looping through the length of t...
    if s[i] === s[j]
        str += s[i]
        i++
        j++
    else
        j++

if str length = s.length return true

If we get to the end of s and the characters from S have all matched with T, then return true

https://leetcode.com/problems/is-subsequence/
 */
