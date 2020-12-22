function sameFrequency(num1, num2){
  const splitNumbers1 = ('' + num1).split('');
  const splitNumbers2 = ('' + num2).split('');
  const countNumbers1 = counter(splitNumbers1);
  const countNumbers2 = counter(splitNumbers2);
  for (const key in countNumbers1) {
    if (countNumbers1[key]!==countNumbers2[key]) {
      return false;
    }
    return true;
  }

}
function counter(numbers) {
  let frequencyCounter1 = {};
  for (let number of numbers) {
    frequencyCounter1[number] = (frequencyCounter1[number] || 0) + 1;
  }
  return frequencyCounter1;
}
console.log(sameFrequency(182, 218));