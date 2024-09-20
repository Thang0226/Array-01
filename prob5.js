let arr = [-1, -3, -4, -5, 0, 3, 0, 5, 3, 4];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) count++;
}

document.write(`Array has ${count} negative integers`);
