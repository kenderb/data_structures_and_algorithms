var missingNumber = function(nums) {
  const numsHas = {};
  nums.forEach((element, index)=> {
    numsHas[element] = index;
  });
  if (numsHas[0] === undefined) return 0;
  console.log(numsHas);
  for (let i = 0; i < nums.length; i++) {
    const nextNum = i + 1
    if (numsHas[nextNum] === undefined) return nextNum;
  }
};

export default missingNumber;