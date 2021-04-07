export const moveZeros = (arr: number[]): number[] => {
  let zeroIndex: number = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== 0) {
      arr[zeroIndex] = arr[i];
      zeroIndex += 1;
    }
  }
  
  for(let i = zeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }
  
  return arr;
};