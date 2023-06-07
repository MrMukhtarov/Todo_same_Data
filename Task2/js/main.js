"use strict";

const arr = [1, 2, 3];
let count = 9;
let reduce;

function LastThree() {
  for (let i = 0; i <= 9; i++) {
    if (i > 0) {
      let slice = arr.slice(arr.length - 3, arr.length);
      reduce = slice.reduce((a, b) => a + b);
      arr.push(reduce);
    }
  }
}
LastThree();
console.log(arr);
