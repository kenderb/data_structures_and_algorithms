var containsDuplicate = function(nums) {
  const hash = {};
  for (const num of nums) {
    if (hash[num])return true;
    else hash[num] = 1;
  }
  return false;
};

export default containsDuplicate;