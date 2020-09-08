//////////////////////////////////////////////////////////////////
// Write a function called same which accepts two arrays.       //
// The function should return true if every value in the        //
// array has it's corresponding value squared in the second     //
// array. The frequency of values should be the same.           //
//////////////////////////////////////////////////////////////////


//////////////////////
// A NAIVE SOLUTION //
//////////////////////
function sameOLD(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

// sameOLD([1,2,3,2], [9,1,4,4])

/////////////////
// REFACTORED //
////////////////
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }

    return true
}

// same([1,3,5,6,1,2,3,2,5,3,3,3], [9,9,9,9,1,4,4,25,1,9,25,36])



function sameGurcan(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < arr1.length; i++){
        obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
        obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1;
    }

    for (key in obj1){
        if (obj2[key * key] !== obj1[key]){
            return false;
        }
    }

    return true;
}

// sameGurcan([1,2,3,2,5], [9,1,4,4,5]);
