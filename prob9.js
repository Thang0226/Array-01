let a = [-1, 2, 23, 15, 46, -2, 5, 7, 98, -18];
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let c = [];

for (let i = 0; i < b.length; i++) {
  c[c.length] = b[i];
}

for (let i = 0; i < a.length; i++) {
  c[c.length] = a[i];
}

document.write(`Array a: ${a.join(", ")} <br>`);
document.write(`Array b: ${b.join(", ")} <br>`);
document.write(`Array c: ${c.join(", ")}`);
