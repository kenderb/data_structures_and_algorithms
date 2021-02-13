var findDisappearedNumbers = function(nums) {
  const numsHas = {};
  let findArray = []
  nums.forEach((num, index )=> {
    numsHas[num] = index;
  });
  for (let i = 1; i <= nums.length; i++) {
    if(numsHas[i] === undefined) findArray.push(i);
  }
  return findArray;
};
export default findDisappearedNumbers;