let arr = [-1, 2, 23, 15, 46, -2, 5, 7, 98, -18];
let value = +prompt("Enter an integer:");
let ind = false;

for (let i = 0; i < arr.length; i++) {
  if (value == arr[i]) {
    ind = true;
    break;
  }
}

if (ind) {
  document.write(`${value} is in the array`);
} else {
  document.write(`${value} is not in the array`);
}
