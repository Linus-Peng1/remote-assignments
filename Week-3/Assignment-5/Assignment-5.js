function twoSum(nums, target) {
  let numStor = {}
  for (let i = 0; i < nums.length; i++) {
    numStor[nums[i]] = i
  }
  for (let x = 0; x < nums.length; x++) {
    let goal = target - nums[x]
    if (nums.indexOf(goal) >= 0) {
      return [x, numStor[goal]]
    }
  }
}



// For example:
twoSum([2, 7, 11, 15], 9);
// Should returns:
// [0, 1]
// Because:
// nums[0]+nums[1] is 9