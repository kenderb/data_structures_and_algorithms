// iterate through the array and finf Linear... Time complexity O(n) good if the array is not sorted.
function linearSearch(array, n) {
  for (let index = 0; index < array.length; index++) {
    if (array[index]==n) {
      return true;
    }
    return false;
  }
  
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9], 6));