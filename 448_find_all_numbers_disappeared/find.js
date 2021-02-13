var findDisappearedNumbers = function(nums) {
  const numsHas = new Set;
  let findArray = []
  nums.forEach((num) => numsHas.add(num));
  for (let i = 1; i <= nums.length; i++) {
    if(!numsHas.has(i)) findArray.push(i);
  }
  return findArray;
};
export default findDisappearedNumbers;