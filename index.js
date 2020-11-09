function printString (myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString (string) {
    if(string.length > 1){
        return reverseString(string.substring(1)) + string[0]
    } else {
        return string
    }
}

function isPalindrome (string) {
    let l = string.length

    if(l < 2){
        return true
    } else if (string[l - 1] === string[0]){
        return isPalindrome(string.substring(1, l - 1))
    } else {
        return false
    }
}

function addUpTo (array, idx) {
    return idx ? array[idx] + addUpTo(array, idx -1) : array[idx]
}

function maxOf(myArray) {
    if (myArray.length === 1) {
      return myArray[0];
    } else {
      return Math.max(myArray.pop(), maxOf(myArray));
    }
  }
  
  function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
      return false;
    } else if (myArray[0] === myNumber) {
      return true;
    } else {
      return includesNumber(myArray.slice(1), myNumber);
    }
  }