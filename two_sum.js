const twoSum = (nums, target) => {
  const numsHash = {};
  for (let i = 0; i < nums.length; i++) {
    numsHash[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const rest =  target - nums[i];
    const value = numsHash[rest];
    if(value && (i !== value)) return [ i, value]
  }
};

console.log(twoSum([1, 3, 4, 2], 6));