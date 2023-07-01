/* https://leetcode.com/problems/subsets-ii/ */

var subsetsWithDup = function(nums) {

    nums = nums.sort((a,b)=> a-b);
    let result = [];

    const backtrack = (nums, current, i) => {

        result.push(current.slice());

        for (let j = i; j < nums.length; j++) {

            if(j > i && nums[j-1] === nums[j]) continue;

            current.push(nums[j]);

            backtrack(nums, current, j+1);

            current.pop();
        }
    }

    backtrack(nums, [], 0);
    return result;
    
};
