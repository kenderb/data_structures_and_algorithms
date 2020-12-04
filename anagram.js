function anagram(s) {
  if (s.length % 2 != 0) return -1;

  var middle = Math.ceil(s.length / 2);
  var s1 = s.slice(0, middle);
  var s2 = s.slice(middle);

  s1.split('').forEach(n => {
    if (s2.includes(n)) {
      s1 = s1.replace(n, '');
      s2 = s2.replace(n, '');
    }
  });
  return (s1.length + s2.length)/2;
}

console.log(anagram('dfgas'));