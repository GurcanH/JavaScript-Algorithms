//NAIVE SOLUTION
function sumZeroNaive(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


// sumZeroNaive([-4,-3,-2,-1,0,1,2,5])



//REFACTOR SOLUTION
function sumZeroRefactor(arr){
    let left = 0;
    let right = arr.length -1;

    while (left < right) {
        var leftValue = arr[left];
        var rightValue = arr[right];

        let sum = leftValue + rightValue;
        if (sum === 0){
            return [leftValue, rightValue];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }

}

console.log(sumZeroRefactor([-4,-3,-2,-1,0,1,2,5]));

function sumZeroGurcan(arr){
    var obj1 = {};
    for (let i= 0; i< arr.length; i++){
        const num =arr[i];
        obj1[num] = true;
    }
    for (let i= 0; i< arr.length; i++){
        if (obj1[arr[i]] && obj1[arr[i] * -1] && arr[i] !== 0 ) {
            return arr[i];
        }

    }
    return false;
}

// console.log(sumZeroGurcan([-4,-3,-2,-1,0,1,2,5]));