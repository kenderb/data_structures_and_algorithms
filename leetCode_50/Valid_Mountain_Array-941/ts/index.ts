export const validMountainArray = (arr: number[]): boolean => {
  let i = 1;
  while (i < arr.length && arr[i] > arr[i - 1]) i += 1;
  if (i === 1 || i === arr.length) return false;
  while (i < arr.length && arr[i] < arr[i - 1]) i += 1;
  return i === arr.length;
};