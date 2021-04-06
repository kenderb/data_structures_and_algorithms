const validate = (array, sequence) => {
  const arrayHash = {};
  let arrayIndex = [] 

  // fill the object
  array.forEach((num, index) => arrayHash[num] = index); // O(n)

  // filter the index of the array
  sequence.forEach( num => {if (arrayHash[num] !== undefined ) arrayIndex.push(arrayHash[num])}); // O(n)

  // edge case for the array length
  if (arrayIndex.length !== sequence.length) return false;
  
  // return false if the arrayIndex ind not sequencial
  for (let i = 0; i < arrayIndex.length - 1; i ++) { // O(n)
    if (!(arrayIndex[i] < arrayIndex[i + 1])) return false
  }
  return true;
}

export default validate;