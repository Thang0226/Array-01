let arr_str = prompt("Enter an array of numbers, split by a comma:").split(",");
console.log(arr_str);
let arr = arr_str.map((string) => +string);
let n = arr.length;

for (let i = 0; i < n / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[n - 1 - i];
  arr[n - 1 - i] = temp;
}

document.write(`Reversed Array: ${arr.join(", ")}`);
