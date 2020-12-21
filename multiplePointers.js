//O(n)
function countUniqueValues(array) {
  let current = 0;
  let next = 1;
  if (array.length == 0) return 0;
  while (next < array.length) {
    if (array[current] == array[next]) {
      next ++;
    } else if (array[current] != array[next]) {
      current ++;
      array[current] = array[next];
    }
  }
  console.log(array);
  return current + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));