var containsDuplicate = function(nums) {
  const hash = {};
  nums.forEach(num => hash[num] = hash[num]? hash[num] += 1: 1);
  for (const num in hash) if (hash[num]>1) return true;
  return false;
};

export default containsDuplicate;