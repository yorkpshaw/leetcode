/* https://leetcode.com/problems/combination-sum-iii/ */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    const nums = [1,2,3,4,5,6,7,8,9]
    const result = [];

    // dfs recursive helper
    const dfs = (i, nums, k, n, slate) => {
        // backtracking case
        if (n < 0) return;

        // base case
        if (slate.length === k) {
            if (n === 0) {
                result.push(slate.slice());
            }
            return
        }
    // dfs recursive case
        for (let j = i; j < nums.length; j++) {
            slate.push(nums[j]);
            dfs(j + 1, nums, k, n - nums[j], slate);
            slate.pop();
        }
    }

    dfs(0, nums, k, n, []);
    return result;


};


/* 

Output is an array of arrays

[1,2,3,4,5,6,7,8,9]
k (number of choices) is at least 2
n (target number) is at least 1
n always has to be at least 3 since k forces two choices

Cannot repeat numbers
Push in the shortest path first

Sum up the first K numbers from 1-9
If you find a combo that works, 2 can be 3 and the other number can subtract by 1
or add 1 and subtract last number by 1


 */