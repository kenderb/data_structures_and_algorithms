var missingNumber = function(nums) {
  let sortArray = nums.sort();
  console.log(sortArray);
  if(sortArray[0] !== 0) return 0;
  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i+1] !== sortArray[i] + 1) {
      return sortArray[i]+1;
    }
  }
  
  return sortArray;
};

export default missingNumber;