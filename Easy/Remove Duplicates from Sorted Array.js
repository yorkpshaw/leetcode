/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let i = 1;

    for (let j = 0; j < nums.length -1; j++) {
        if (nums[j] !== nums[j+1]) {
            nums[i] = nums[j+1];
            i++
        }
    }

        return i

    };

    //    i
    // [0,0,1,1,1,2,2,3,3,4] i !== j, swap i/j and move j forward (only move i when swapping)
    //      j                if i === j, move until you find something to swap

    //    i
    // [0,1,0,1,1,2,2,3,3,4] i === j, no swap, move only j forward until you find a diff num than i
    //        j

    //    i
    // [0,1,0,1,1,2,2,3,3,4] i !== j, swap i+1 and j, increment i and j
    //            j

    //      i
    // [0,1,2,1,1,0,2,3,3,4] i === j, no swap, j++
    //              j

    //      i
    // [0,1,2,1,1,0,2,3,3,4] i !== j, swap i+1 and j, increment i and j
    //                j

    //        i
    // [0,1,2,3,1,0,2,1,3,4] i === j, move j over
    //                  j

    //        i
    // [0,1,2,3,1,0,2,1,3,4] i !== j, swap i+1 and j, increment i and j
    //                    j

    // j has hit the end of the loop

    // set i = 1
    // loop over the sorted nums array, initialize first pointer j to start at 0
    //

    // It's sorted ascending, so first element will always be same
    // [0,1,1,2] first two are not the same
    // [0,0,1,2] first two are same, keep looping
