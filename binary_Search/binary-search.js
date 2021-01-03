const binarySearch = (array, num) => {
  const arrayLength = array.length;
  if (num > arrayLength) return -1;
};


console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
