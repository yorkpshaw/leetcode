function countUniqueValues(nums){

    if(nums.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1;

    // if (nums.length === 0) {
    //     return 0;
    // }

    // let arr = [];
    // let j = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== arr[j]) {
    //         arr.push(nums[i]);
    //     } else {
    //         j++;
    //     }
    // }

    // return arr.length

}

// create an empty arr, looping over nums
// if nums[i] !== arr[j], arr.push(nums[i])
// otherwise keep i moving
// return length of arr
// [1]
// [1,2,3,4,]
