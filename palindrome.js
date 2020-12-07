

const validatePalindrome = (string) => {
  return string === string.split('').reverse().join('');
}

function palindromeIndex(s) {
  
  for (let index = 0; index < s.length; index++) {
    let newString = s.slice(0, index) + s.slice(index + 1);
    if(validatePalindrome(newString)) return index;
  }

  return -1;
}


console.log(palindromeIndex('aaab'));