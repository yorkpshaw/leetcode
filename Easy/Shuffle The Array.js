// #1470
var shuffle = function(nums, n) {

    if (n === 0) {
        return [];
    }

    if (n === 1) {
        return nums;
    }

    let shuffledArray = [];
    let j = (nums.length / 2);

    for (let i = 0; i < nums.length / 2; i++) {
        shuffledArray.push(nums[i], nums[j]);
        j++;
    }

    return shuffledArray;

};

console.log(shuffle(nums = [1,2,3,4,4,3,2,1], n = 4))


// All lists are even
// Edge: If n is 0, return an empty list
// Edge: If n is 1, the list is 2 elements long...[x1, y1] return nums
// Split the array in half
// Rejoin the arrays, one element at a time from each
// j is always nums.length / 2
// O(n) beause you are checking each value once?
