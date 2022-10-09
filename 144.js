console.log(recursiveForcePalli(431));

function recursiveForcePalli(num) {
  if (reverseRecursion(String(num).length - 1, String(num), "") != num) {
    return recursiveForcePalli(num + 1);
  }
  return num;
}

function reverseRecursion(start, str, store) {
  if (start >= 0) {
    store += str[start];
    return reverseRecursion(start - 1, str, store);
  }
  return store;
}
