function linearSearch(array, num) {
  for (let i = 0; i < array.length; i += 1) {
    if (num === array[i]) return i;
  }
  return -1;
}

linearSearch([1, 2], 1);