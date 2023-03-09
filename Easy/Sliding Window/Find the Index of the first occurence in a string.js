/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    if (!needle) return 0
      let idx = 0
      for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] != needle[idx]) {
          i = i-idx
          idx = 0
        } else {
          if (idx == needle.length-1) return i-idx
          idx++
        }
      }
      return -1



    };

    // Sliding Window
    // If a character doesn't match, then increment H
    // If you hit the end of needle and it was all the same as haystack,
    // Return H - length of N-1

    // "ssssadbutsad" Starts at index 3
    // "sad" is length 3 

    // Loop over larger string and compare it with shorter string
    // When characters match, keep incrementing the pointers
    // When you've hit the end of the short character, then you have found a match
    // Return h - n.length - 1
    // If a character does not match, then move up the H pointer by 1
    // If you have reached the end of H, with no match, return -1

    // Need to somehow save the value of first index while looping through longer string

    // Return output if last index of needle = last index of haystack, the loop is over
    // If characters don't match
