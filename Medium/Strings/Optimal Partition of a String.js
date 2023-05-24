/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 1;
    let prevChars = s[0];

    for (let i = 1; i < s.length; i++) {
      if (!prevChars.includes(s[i])) {
        prevChars += s[i];
      } else {
        count++;
        prevChars = s[i];
      }
    }

    return count;
};

/*
Create a counter
Create a pointer and a loop to iterate over the string

While the length of the string is being iterated over...
    Initialize an empty object
    If the current letter of the string is present in the object,
        Increment the counter
        Increment the pointer
        Empty out the object
    If the current letter of the string is NOT present in the object,
        Add letter to empty object
        Continue to iterate
*/
