/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    let count = 0;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        result.push(count)

    }

    return result
};
