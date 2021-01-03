function binarySearch(array, num) {
  let min = 0;
  let max = array.length - 1;
  while (min < array[array.length - 1]) {
    const avarage = Math.floor((min + max) / 2);
    if (num === array[avarage]) {
      return avarage;
    }
    if (array[avarage] < num) {
      min += 1;
    } else if (array[avarage] > num) {
      max -= 1;
    }
  }
  return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));
//
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10));
