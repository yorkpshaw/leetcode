var twoSum = function(nums, target) {
    let mp = new Map()

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (mp.has(diff)) { // same as diff in mp
            return [i, mp.get(diff)] // get(key) will return the value (which is the index)
        }

        mp.set(nums[i], i) // set(key, value)
    }
};


var twoSum = function (nums, target) {
    const mp = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (diff in mp) return [i, mp[diff]] // If in checks if property is present in object, and then you return indices

        mp[nums[i]] = i // If not, then mp[current number] is set to the current index in the mp object
    }
 }

var twoSum = function(nums, target) {

  let mapOfNumbers = {};
  let twoIndexes = [];

  // Push each nums index into a dictionary as {num: index} pair
  for (let i = 0; i < nums.length; i++) {
    mapOfNumbers[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let goal = target - nums[i]; //
    if(mapOfNumbers[goal] !== null && mapOfNumbers[goal] !== i) {
      // Check if mapOfNumbers[i] is NOT null or is NOT the current index, as you cannot add same one twice
      twoIndexes.push(i); // Push in the current index i first
      twoIndexes.push(mapOfNumbers[goal]); // Push in the goal's index
      break; // exit the loop as soon as a pair is found
    }
      }
    return twoIndexes;
};

//[2,7,11,15]

/*
{
  2:0,
  7:1,
  11:2,
  15:3
}
Target = 26                          x
Goal(15)= 26 - nums[i](11), index 2
Look for the goal that complements nums[i]
if mapOfNumbers[15] 3 is not null or is not the current index, then push
mapOfNumbers[24]
*/





/* O(n^2)
  let idx = [];

  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              idx.push(i,j)
          }
      }
  }

  return idx
*/
