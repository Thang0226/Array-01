let arr = [-1, 2, 23, 15, 46, -2, 5, 7, 98, -18];
count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    count++;
    console.log(arr[i]);
  }
}

document.write(`There are ${count} numbers greater than or equal to 10`);
