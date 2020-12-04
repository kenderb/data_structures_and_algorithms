function repeatedString(s, n) {
    
  var aCounter = 0;
  
  if(n >= s.length) {
      let aOnString = [...s].filter(item => item == 'a').length;
      aCounter = Math.floor(n / s.length) * aOnString;
  }
  
  let restOfString = n % s.length;
  
  for(let i = 0 ; i < restOfString; i++ ) if(s[i] === 'a') aCounter++;

  return aCounter;
}