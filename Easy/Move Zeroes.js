/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    if (nums.length === 1) {
        return nums
    }

    let i = 0;
    let j = 1;

    while (j < nums.length) {
        if (nums[i] === 0 && nums[j] === 0) {
            j++;
        } else if (nums[i] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++
        } else {
            i++;
            j++;
        }

    }
    return nums

};

//  i
//    j
// [0,1,0,3,12]
//    i
//      j
// [1,0,0,3,12]
//    i
//        j
// [1,0,0,3,12]
//      i
//          j
// [1,3,0,0,12]

// [1,3,12,0,0]

// while length of array is iterating,
// if nums[i] === 0 && nums[j] === 0, j++
// else if nums[i] === 0,
// swap nums[i] and nums[j]
// i++, j++
// return array
