const validate = (array, sequence) => {
  // Crate empty array and an object
  const arrayHash = {};
  let arrayIndex = []

  // fill the object
  array.forEach((num, index) => arrayHash[num] = index);

  // filter the index of the array
  sequence.forEach( num => {if (arrayHash[num] !== undefined ) arrayIndex.push(arrayHash[num])});

  // edge case for the array length
  if (arrayIndex.length !== sequence.length) return false;
  return arrayIndex.every((num, index) => (index === arrayIndex.length - 1 || num < arrayIndex[index + 1]))
}

export default validate;