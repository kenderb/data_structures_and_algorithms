function repeatedString(s, n) {
  let aCounter = 0;

  if (n >= s.length) {
    const aOnString = [...s].filter(item => item == 'a').length;
    aCounter = Math.floor(n / s.length) * aOnString;
  }

  const restOfString = n % s.length;

  for (let i = 0; i < restOfString; i++) if (s[i] === 'a') aCounter++;

  return aCounter;
}