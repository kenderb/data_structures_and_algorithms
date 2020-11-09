// O(n)
function exampleLinear(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// O(n^2)
function exampleLinear(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
    }
  }
}

// O(n^3)
function exampleLinear(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
      for (let k = j; j < n; j++) {
        console.log(k);
      }
    }
  }
}

// O(log n)
function exampleLinear(n) {
  for (let i = 2; i <= n; i = i*2) {
    console.log(i);
  }
}