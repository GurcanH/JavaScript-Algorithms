

function validAnagramGurcan(str1, str2){
    if (str1.length !==str2.length){
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i< str1.length; i++){
        obj1[str1.charAt(i)] = (obj1[str1.charAt(i)] || 0) + 1;
        obj2[str2.charAt(i)] = (obj2[str2.charAt(i)] || 0) + 1;
    }

    for (let key in obj1){
        if (obj1[key] !== obj2[key]){
            return false;
        }
    }

    return true;
}



function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')