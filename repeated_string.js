// Complete the repeatedString function below.
function repeatedString(s, n) {

  var newArray = [];
  var counter = 0;
  while (newArray.length + 1 <= n) {
    newArray.push(s[counter]);
    counter ++;
    if (counter > s.length - 1) counter = 0;
  }
  return newArray
  //return newArray.filter((value) => (value === "a")).length;

}

console.log(repeatedString("aca", 100000000000));


console.log();