#!/usr/bin/env node

// your code

let array = [0, 1];
let ba = [1, 2, 3, 4];
function fib(num) {
  if (num == 0) return 0;
  if (num == 1) return 1;
  if (num > 1) {
    array[num] = fib(num - 1) + fib(num - 2);
    return array[num];
  }
}

fib(9);
console.log(array);
