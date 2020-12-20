function validAnagram(string1, string2){
  if (string1.length !== string2.length) return false
  let frequencyCounter1= counter(string1);
  let frequencyCounter2= counter(string1);
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
  }
  return true;
}

function counter(string) {
  let frequencyCounter1= {};
  for (let letter of string) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  return frequencyCounter1;
}


// console.log(validAnagram('', ''));
// console.log(validAnagram('aaz', 'zza'));
// console.log(validAnagram('anagram', 'nagaram'));
// console.log(validAnagram('anagra', 'nagaram'));
console.log(validAnagram('anagraf', 'nagaram'));