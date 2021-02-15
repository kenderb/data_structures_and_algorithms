const twoSum = (nums, target) => {
  const SetOfNumbers = new Map();
  nums.forEach((num, index) => SetOfNumbers.set(num, index));
  console.log(SetOfNumbers);
  for (let i = 0; i < nums.length; i++) {
    let LookNumber = target - nums[i];
    if (SetOfNumbers.has(LookNumber) && nums[i] !== SetOfNumbers.get(LookNumber)) return [i, SetOfNumbers.get(LookNumber)];
  }
};

console.log(twoSum([3, 3], 6));