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

/* O(log2n)
Logarithmic complexity. For a given n, this will operate only log2n
times because i is incremented by multiplying by 2 rather than
adding 1 as in the other examples. */

function someFunction(n) {
  for (var i = 0; i < n; i * 2) {
  console.log(n);
  }
}