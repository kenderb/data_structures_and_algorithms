// iterate through the array and finf Linear... Time complexity O(n) good if the array is not sorted.
function linearSearch(array, n) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] == n) {
      return true;
    }
    return false;
  }
}

// console.log(linearSearch([1,2,3,4,5,6,7,8,9], 6));

function binarySearch(array, n) {
  let lowIndex = 0; let
    highIndex = array.length - 1;
  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((highIndex + lowIndex) / 2);

    if (array[midIndex] == n) {
      return true;
    } if (n > array[midIndex]) {
      lowIndex = midIndex;
      console.log(lowIndex);
    } else {
      highIndex = midIndex;
      console.log(highIndex);
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 4));