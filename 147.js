let matrix = [
  [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ],
  [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ],
];

console.log(MakePrimeChangeDimension(0, 0, matrix, []));

function MakePrimeChangeDimension(index, j, matrix, arr) {
  if (index < matrix.length) {
    if (j < matrix[index].length) {
      if (PrimeCheck(2, matrix[index][j]) == 0 && matrix[index][j] != 1) {
        matrix[index][j] += 1;
        return MakePrimeChangeDimension(index, j, matrix, arr);
      }
      arr.push(matrix[index][j]);
      return MakePrimeChangeDimension(index, j + 1, matrix, arr);
    }
    j = 0;
    return MakePrimeChangeDimension(index + 1, j, matrix, arr);
  }
  return arr;
}

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}