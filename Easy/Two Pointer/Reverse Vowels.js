/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {


    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    let i = 0;
    let j = s.length - 1;
    s = s.split('');

    while (i < j) {
        if (vowels.includes(s[i]) && vowels.includes(s[j])) {
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }
        else if (!vowels.includes(s[i])) {
            i++;
        } else {
            j--;
        }
    }

    return s.join('');

};

/*
Set up two pointers, one at beginning and one at end
iterate over the string while i < j
if pointer i is aeiou, then set off pointer j to go backwards
    if pointer j is aeiou, then swap i and j, i++ and j--
else, keep pointer i moving until you find a vowel
 */

// https://leetcode.com/problems/reverse-vowels-of-a-string/
