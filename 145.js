console.log(PrimePallindromeIndividual(8));

function PrimePallindromeIndividual(number) {
  if (typeof number != "string") {
    number = String(number);
  }

  if (PrimeCheck(2, Number(number[0]) == 0)) {
    let temp = String(number)[0];

    while (PrimeCheck(2, Number(temp)) == 0) {
      temp = Number(temp);
      temp += 1;
    }

    number = number.split("");
    for (let i = 0; i < number.length; i++) {
      number[i] = temp;
    }
    return number.join("");
  }
}

function reverseRecursion(len, str, store) {
  if (len >= 0) {
    store += str[len];
    return reverseRecursion(len - 1, str, store);
  }
  return store;
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