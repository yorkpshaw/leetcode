/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let miss = 1;
    let r = [];
    let i = 0;
    while (r.length < k) {
      if (miss === arr[i]) i += 1;
      else r.push(miss);
      miss += 1;
    }
    return r[k - 1];
  };
