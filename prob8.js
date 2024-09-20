let arr = [-1, 2, 23, 15, 46, -2, 5, 7, 98, -18];
let n = arr.length;

document.write(`Array before sorting: ${arr.join(", ")}`);

for (let i = 0; i < n - 1; i++) {
  // find max number from arr[i] to arr[n-1]
  let max_num = arr[i];
  let key = i;
  for (let j = i; j < n; j++) {
    if (arr[j] > max_num) {
      max_num = arr[j];
      key = j;
    }
  }
  // swap arr[i] with the max element
  let temp = arr[key];
  arr[key] = arr[i];
  arr[i] = temp;
}

document.write(`<br> Array after sorting: ${arr.join(", ")}`);
