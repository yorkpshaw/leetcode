/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let start = 0;
    let stop = (s.length - 1);

    while (start < stop){
        [s[start], s[stop]] = [s[stop], s[start]]
        start++;
        stop--;
    }

    return s

};

// set a pointer at first element and last element
// swap them, and increment/decrement pointers while first < last
