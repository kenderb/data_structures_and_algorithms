function sameFrequency(num1, num2){
  const countNumbers = counter(num1);
  console.log(countNumbers);
}
function counter(numbers) {
  let frequencyCounter1= {};
  for (let number in numbers) {
    frequencyCounter1[number] = (frequencyCounter1[number] || 0) + 1;
  }
  return frequencyCounter1;
}
console.log(sameFrequency(182, 218));