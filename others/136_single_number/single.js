var singleNumber = function(nums) {
  const newHahs = {};
  nums.forEach(num => {
    if (newHahs[num]) delete(newHahs[num]);
    else newHahs[num] = 1;
  });
  for (const key in newHahs) {
    return Number(key);
  }
  return false;
};

export default singleNumber;