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
};
        dfs(0, nums, k, n, []);
        return result;
}

// var combinationSum3 = function(k, n) {

//     const nums = [1,2,3,4,5,6,7,8,9]
//     const result = [];

//     // dfs recursive helper
//     const dfs = (i, nums, k, n, slate) => {
//         // backtracking case, target sum is invalid, place first so you don't waste memory/speed
//         if (n < 0) return;

//         // base case
//         if (slate.length === k) { // The test array is the same length as k, the number of digits we can use
//             if (n === 0) { // If it's zero,
//                 result.push(slate.slice()); // push a copy of the slate into the result array, gotta slice or else you lose what's in slate
//             }
//             return // Found a correct combo, so stop going down that tree path
//         }
//     // dfs recursive case
//         for (let j = i; j < nums.length; j++) { // Iterate over nums array, j = i, j = 0 on first iteration
//             slate.push(nums[j]); // push the number in...
//             dfs(j + 1, nums, k, n - nums[j], slate); // use helper function to increment J, n-nums[j] is target number subtracting current number of slate array
//             slate.pop();                             // it will continue to iterate until the base case is reached
//         }                                            // slate.pop() backtracks and continues onto the next element
//     }

//     dfs(0, nums, k, n, []);
//     return result;


// };


/*
slate will keep track of the values being passed in, with the size and sum/target
i and nums is to keep track from 1-9
// Only j gets incremented in the dfs helper function
// Second level of the tree will be [1,2] as i stays 0 and j increments
// the length of the slate determines if you are at the leaf level
// slate.slice is used to copy the array, and slate.pop...

// Keep looping until you hit a base case, then make decisions
123
124 -> Good result
125 -> Out of bounds, backtrack and increment j
134 -> OOB, backtrack
135


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
