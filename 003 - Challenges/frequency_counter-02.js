///////////////////////////////////////////////////////////////
// Frequency Counter / Multiple Pointers - areThereDuplicates//
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, /// 
// and checks whether there are any duplicates among the arguments passed in.                   ///
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.    ///
/////////////////////////////////////////////////////////////////////////////////////////////////
//<p>Time: O(N)</p>
// Sample Inputs
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

///////////////////////
// Gurcan Solutions  //
///////////////////////

// function areThereDuplicates(){

//     const arr =  [...arguments];

//     if(arr.length === 0) return false;

//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//             return true;
//         }
//     }
//     return false;
    
// }

 function areThereDuplicates1(){

     const arr =  [...arguments];
     let obj= {};
     if(arr.length === 0) return false;
     for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]]){
            return true;
        } else {
            obj[arr[i]] = true;
        }
     }

     return false;
}



///////////////////
//Real Solution//
///////////////////
//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates2() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

 /// areThereDuplicates Solution (Multiple Pointers)

 function areThereDuplicates3() {
    // Two pointers
    let args =  [...arguments];
  // Two pointers;
    args.sort((a,b) => a - b); //NOTICE this is a - b NOT >
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
    
    
  }

  ///areThereDuplicates One Liner Solution
function areThereDuplicates4() {
  return new Set(arguments).size !== arguments.length;
}