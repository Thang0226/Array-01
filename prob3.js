let arr = [-1, 2, 23, 15, 46, -2, 5, 7, 98, -18];
let max_num = arr[0];
let total = 0;

for (num of arr) {
  total += num;
  if (num > max_num) {
    max_num = num;
  }
}
let avg = total / arr.length;

document.write(`Greatest number in the array is ${max_num} <br>`);
document.write(`Average of all numbers is ${avg}`);
