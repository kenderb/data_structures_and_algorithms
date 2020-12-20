function anagram(s) {
  if (s.length % 2 != 0) return -1;
  spplitArray = split_in_half(s);
  spplitArray[0].split('').forEach(n => {
    if (spplitArray[1].includes(n)) {
      spplitArray[0] = spplitArray[0].replace(n, '');
      spplitArray[1] = spplitArray[1].replace(n, '');
    }
  });
  return (spplitArray[0].length + spplitArray[1].length)/2;
}

function split_in_half(s) {
  var middle = Math.ceil(s.length / 2);
  return [s.slice(0, middle), s.slice(middle)];
  
}

console.log(anagram('dfgasf'));