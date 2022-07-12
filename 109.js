let a = [];

for (let i = 0; i < 100; i++) {
  a[i] = i;
}

console.log(MultipleSummation(3, a));

function MultipleSummation(index, a) {
  if (index < a.length) {
    return a[index] + MultipleSummation(index + 3, a);
  }
  return 0;
}