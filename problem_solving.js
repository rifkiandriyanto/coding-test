// Given five positive integers, find the minimum and maximum values that can be calculated by
// summing exactly four of the five integers. Then print the respective minimum and maximum
// values as a single line of two space-separated long integers.
// function miniMaxSum(arr) {
// console.log(min + ‘ ‘ + max)
// }
// For example - Given arr = [1, 3, 5, 7, 9], the function will return 16 24 as the minimum sum is
// 1+3+5+7 = 16 and maximum sum is 3+5+7+9 = 24.

let arr = [1, 3, 5, 7, 9];

function miniMaxSum(orderedArr) {
  let minArr = orderedArr.slice(0, -1);
  let maxArr = orderedArr.slice(1);

  console.log(maxArr, minArr);

  var maxSum = 0;

  for (let i = 0; i < maxArr.length; i++) {
    maxSum += maxArr[i];
  }
  var minSum = 0;
  for (let i = 0; i < minArr.length; i++) {
    minSum += minArr[i];
  }
  console.log(minSum, maxSum);
}
miniMaxSum(arr);