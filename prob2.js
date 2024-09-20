let arr = [-1, 2, 23, 15, 46, -2, 5, 7, 98, -18];
let max_num = arr[0];
let index = 0;

for (key in arr) {
  if (arr[key] > max_num) {
    index = key;
    max_num = arr[key];
  }
}

document.write(`Greatest number in the array is ${max_num}, at index ${index}`);
