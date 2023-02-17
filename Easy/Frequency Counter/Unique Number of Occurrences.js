/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    if (arr.length === 0) {
        return false
    }

    counter = {};
    arrayCounter = [];

    for (let val of arr) {
        counter[val] = (counter[val] ? counter[val] : 0) + 1;
    }

    arrayCounter = Object.values(counter);

    const arraySet = new Set(arrayCounter);

    if (arrayCounter.length === arraySet.size) {
        return true
    }

    return false;
};

// Create object variable
// Iterate over array
// Take the first number of array and initialize it to 1 in the object
// If the following elements are the same as the object key, increment the key's value
// make a counting object/dict, push the values of those into an array, loop over array and if anything is the same number as the first, return false
// first[val] = (first[val] ? first[val] : 0) + 1;
