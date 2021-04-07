function fibonacci(num, temp = {}) {
  if (num in temp) return temp[num];
  if (num < 2) return num;
  temp[num] = fibonacci(num - 1, temp) + fibonacci(num - 2, temp);
  return temp[num];
}
console.log(fibonacci(9));
