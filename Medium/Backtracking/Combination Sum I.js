/* https://leetcode.com/problems/combination-sum/ */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const dfs = (i, candidates, target, slate) => {

        if (target < 0) return;

        if (target === 0) {
            result.push(slate.slice());
            return;
        }

        for (let j = i; j < candidates.length; j++) {
            
            slate.push(candidates[j]);
            dfs(j, candidates, target - candidates[j], slate);
            slate.pop();
        }

    };

    dfs(0, candidates, target, []);
    return result;
    
};

/* 
increment J after pop
In the DFS recursive call, it is j and not j+1 in order to allow for duplicate calls
First call will be...
[2,3,6,7] target = 7
2
22
222
2222
2223
2226
2227
223
226
etc.

*/