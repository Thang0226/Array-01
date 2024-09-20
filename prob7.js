let arr = [-1, 2, 23, 15, 46, -2, 5, 7, 98, -18];
let value = +prompt("Enter an integer:");
let ind = -1;

for (let i = 0; i < arr.length; i++) {
  if (value == arr[i]) {
    ind = i;
    break;
  }
}

if (ind > -1) {
  //   arr.splice(ind, 1);
  for (let i = ind; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;

  document.write(`${value} is in the array <br>`);
  document.write(`Array after delete the value: ${arr.join(", ")}`);
} else {
  document.write(`${value} is not in the array`);
}
