// Binary Search Exercise
// <p>Write a function called <strong>binarySearch</strong> which accepts a <strong>sorted</strong> array 
// and a value and returns the index at which the value exists. Otherwise, return -1. </p>
// <p>This algorithm should be more efficient than linearSearch - you can read how to implement it here -
//  https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
// and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/</p>
// 
// Examples:
// binarySearch([1,2,3,4,5], 2) //1
// binarySearch([1,2,3,4,5], 3) //2
// binarySearch([1,2,3,4,6], -1) //2   
// binarySearch([5,6,10,13,14, 18, 30, 34, 35, 37, 40, 44, 64 , 79, 84, 86, 95, 96, 98, 99], 10) //2


function binarySearchGurcan(arr, val){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let middle = Math.floor ((start + end) / 2);
        if (arr[middle] > val){
            end = middle -1;
        } else if  (arr[middle] < val){
            start = middle + 1;
        } else {
            return middle;
        }        
    }

    return -1;


  }


  // Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

// binarySearch([2,5,6,9,13,15,28,30], 103)
