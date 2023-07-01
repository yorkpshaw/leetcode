var subsets = function(nums) {
    let result = [[]];
    
    function backtrack(first, current) {
    // we iterate over the indexes i from 'first' to the length
    //of the entire sequence 'nums'
    for (let i = first; i < nums.length; i++) {
        current.push(nums[i]);

        // use distructure operator to clone 'current' value and save to 'result'
        result.push([...current]);

        // generate all other subsets for the current subset.
        // increasing the position by one to avoid duplicates in 'result'
        backtrack(i + 1, current);

        // BACKTRACK.
        current.pop();
    }
}
    
    backtrack(0, []);
    return result
};

console.log(subsets([1,2,3]))


/* 
[]
[1]
[1,2]
[1,2,3]
*at length* pops off 3, then 2
[1,3]
i=3, undefined, so pop off 3...then [1] pop off 1
[2]
[2,3]
[3]


So you pop after you've gone to the end of list

When i becomes 3...loop has to stop
pop off
What happens to i every time we pop?
*/
/* https://leetcode.com/problems/subsets/ */