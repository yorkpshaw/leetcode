/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
    let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;

};

/*
-Define a start and end pointer outside of the loop
-While the start pointer is less than the end pointer...
    -Define the mid pointer inside the loop, as this is constantly changing
    -If the num in middle is target, return. Otherwise, change the left or right pointer depending on result
    -If the target is greater than the mid, shift the start pointer to the mid+1
    -If the target is less than the mid, shift the end pointer to the mid-1
*/
