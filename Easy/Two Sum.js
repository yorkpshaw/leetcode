var twoSum = function(nums, target) {
    let mp = new Map()

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }

        mp.set(nums[i], i)
    }
};


var twoSum = function (nums, target) {
    const mp = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (diff in mp) return [i, mp[diff]]

        mp[nums[i]] = i
    }
 }

 var twoSum = function(nums, target) {

    let mapOfNumbers = {};
        let twoIndexes = [];

        for (let i = 0; i < nums.length; i++) {
        mapOfNumbers[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
          let goal = target - nums[i];
      if(mapOfNumbers[goal] !== null && mapOfNumbers[goal] !== i) {
        twoIndexes.push(i);
            twoIndexes.push(mapOfNumbers[goal]);
      }
        }

      return twoIndexes;

};
