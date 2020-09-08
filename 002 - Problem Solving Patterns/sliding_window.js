// NAIVE SOLUTION
function maxSubarraySumNaive(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  console.log(maxSubarraySumNaive([2,6,9,2,1,8,5,6,3],3))
  
  // REFACTORED SOLUTION
  function maxSubarraySumRefactored(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      let previousValue = arr[i - num];
      let nextValue = arr[i];

      tempSum = tempSum - previousValue + nextValue;
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  console.log(maxSubarraySumRefactored([2,6,9,2,1,8,5,6,3],3))
  