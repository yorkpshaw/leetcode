var singleNumber = function(nums) {

    let counter = {};


    for (let i = 0; i < nums.length; i++) {
        if (counter[nums[i]] === undefined) {
            counter[nums[i]] = 1;
        } else {
            counter[nums[i]] += 1;
        }
    }

    let once = 0;

    for (let j in counter) {
        if (counter[j] === 1) {
            once = j;
        }
    }

    return once;

};
