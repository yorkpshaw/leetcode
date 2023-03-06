// 3 pointers - beginning, end, middle
// This is better than linear search because you continually cut sorted arrays in half until you find target
// If the value in the middle is LARGER than target, then cut off the list to the RIGHT
// end now equals middle - 1
// If the value in the middle is SMALLER than target, then cut off the list to the LEFT
// start now equals middle + 1
// Usually return -1 if it is not present

// WHILE LOOP WHILE LOOP WHILE LOOP

// [1,2,3,4,5,6,7,8,9], 7, mid is 5, so start is now mid+1
// [6,7,8,9], 7, mid is 8, so end is now mid-1


// [1,2,3,4,5,6,7,8,9,10], 2, mid is 6, so end is now mid-1
// [1,2,3,4,5], 1, mid is 3, so end is now mid-1 (index 1)
// [1,2], mid is 0 === 1


function binarySearch(array, target) {

    let start = 0;
    let end = 0;
    let mid = Math.floor(start+end/2)

    // Loop while start less than end and we haven't found target
    while (array[mid] !== target && start <= end) {
        if (array[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor(start+end/2) // ALWAYS RE-ESTABLISH THE MIDWAY POINT!
    }
    return -1
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}
