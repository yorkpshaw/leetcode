var subsets = function(nums) {

    const result = [];

    const dfs = (i, nums, slate) => {
        // Base
        if (i === nums.length) {
            result.push(slate.slice());
            return;
        }

        // exclude
        dfs(i + 1, nums, slate);

        // include
        slate.push(nums[i]);
        dfs(i + 1, nums, slate);
        slate.pop();
    }

    dfs(0, nums, []);
    return result;
};

// var subsets = function(nums) {
//     let result = [[]];
    
//     function backtrack(first, current) {
//     // we iterate over the indexes i from 'first' to the length
//     //of the entire sequence 'nums'
//     for (let i = first; i < nums.length; i++) {
//         current.push(nums[i]);

//         // use distructure operator to clone 'current' value and save to 'result'
//         result.push([...current]);

//         // generate all other subsets for the current subset.
//         // increasing the position by one to avoid duplicates in 'result'
//         backtrack(i + 1, current);

//         // BACKTRACK.
//         current.pop();
//     }
// }
    
//     backtrack(0, []);
//     return result
// };

console.log(subsets([1,2,3]))

/* https://leetcode.com/problems/subsets/ */