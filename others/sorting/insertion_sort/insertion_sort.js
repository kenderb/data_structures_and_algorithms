function insertionSort(arr) {
  let j;
  let currentVal;
  for (let i = 1; i < arr.length; i += 1) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j -= 1) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);