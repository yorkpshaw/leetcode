/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    // Hash Table
     const freq = {};
      let res = 0;

    //   for (let i = 0; i < nums.length; i++) {
    //     if (freq[nums[i]] === undefined) {
    //       freq[nums[i]] = 1;
    //     } else {
    //       freq[nums[i]]++;
    //     }
    //   }

    for (let i of nums) {
        freq[i] = (freq[i] ? freq[i] : 0) + 1
    }

      for (let i = 0; i < nums.length; i++) {
        if (freq[nums[i]] === 1) {
          res += nums[i];
        }
      }

      return res;

    };


    // Brute force:
    // let res = 0;
    //     for(let i = 0; i < nums.length; i++){
    //         if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
    //             continue;
    //         };
    //         res += nums[i];
    //     };
    //     return res;

    // Map:
    //  const freq = new Map();
    //   let res = 0;

    //   for (let i = 0; i < nums.length; i++) {
    //     if (!freq.has(nums[i])) {
    //       freq.set(nums[i], 1);
    //     } else {
    //       freq.set(nums[i], freq.get(nums[i]) + 1);
    //     }
    //   }

    //   for (let i = 0; i < nums.length; i++) {
    //     if (freq.get(nums[i]) === 1) {
    //       res += nums[i];
    //     }
    //   }

    //   return res;
