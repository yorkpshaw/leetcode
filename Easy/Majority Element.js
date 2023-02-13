/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let ordered = nums.sort();

    const l = ordered.length;

    if (l % 2 === 0) {
        return ordered[l / 2]
    } else {
        return ordered[(l - 1) / 2]
    }

};
