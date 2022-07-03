function arrayUnique(arrayA, arrayB) {
  // Your Code Here
  let result = [];
  for (let i = 0; i < arrayA.length; i++) {
    let double = 0;
    for (let j = 0; j < arrayA.length; j++) {
      if (arrayA[i] == arrayB[j]) {
        double += 1;
      }
    }
    if (double == 0) {
      result.push(arrayA[i]);
    }
    double = 0;
  }
  return result;
}
console.log(arrayUnique([1, 2, 3, 4], [1, 3, 5, 10, 16])); // [2 4]
console.log(arrayUnique([10, 20, 30, 40], [5, 10, 15, 59])); // [20 30 40]
console.log(arrayUnique([1, 3, 7], [1, 3, 5])); // [7]
console.log(arrayUnique([3, 8], [2, 8])); // [3]
