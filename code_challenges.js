// Problem: numberSyllables("beau-ti-ful") ➞ 3
// Our Solution: 
function numberSyllables(word) { return [...word].filter(x => '-' === x).length + 1; }
// Best Solution: 
function numberSyllables(word) { return word.split("-").length; }
//----------------------------------------------------------------------------------------------------------------------
// Problem: Ex: reverse(false) ➞ true reverse(0) ➞ "boolean expected"
// Our Solution: 
function reverse(bool) { return typeof (bool) === boolean ? !bool : boolean }
// Best Solution: 
function reverse(bool) { return typeof (bool) === boolean ? !bool : boolean }
// Another Solution: 
function reverse(bool) { if (bool === true) { return false; } else if (bool === false) { return true; } else { return "boolean expected"; } }
//----------------------------------------------------------------------------------------------------------------------
// Problem: charCount("c", "Chamber of secrets") ➞ 1
// Our Solution: 
function charCount(myChar, str) { let finalCount = 0; for (let i = 0; i < str.length; i++){ if (str[i] === myChar) { finalCount++; } } return finalCount; }
//  Better Solution:  
function charCount(myChar, str) { let finalCount = 0; for (anyChar of str) { if (anyChar === myChar) { finalCount++; } } return finalCount; }
//----------------------------------------------------------------------------------------------------------------------
// Problem: lastItem("The quick brown fox jumped over the lazy dog") ➞ "g" 
// Our Solution: 
function lastItem(input) { return input[input.length - 1]; } 
// Better Solution: 
const lastItem = input => input[input.length - 1];
//----------------------------------------------------------------------------------------------------------------------
// Problem: given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
// Solved Examples: addName({}, "Brutus", 300) ➞ { Brutus: 300 } addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 } addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 } Our Solution: function addName(obj, name, value) { if (obj !== {}){ return {...obj,[name]:value} } else{ let object = {} object[name] = value return object } } Better Solution: function addName (obj, name, value) { return {...obj, [name]: value} };(edited)
//----------------------------------------------------------------------------------------------------------------------
// Problem: To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// Solved Examples: changeEnough([2, 100, 0, 0], 14.11) ➞ false changeEnough([0, 0, 20, 5], 0.75) ➞ true changeEnough([30, 40, 20, 5], 12.55) ➞ true changeEnough([10, 0, 0, 50], 3.85) ➞ false changeEnough([1, 0, 5, 219], 19.99) ➞ false
// Our Solution:
function changeEnough(change, amountDue) {
  let total =
    change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
  if (total >= amountDue) {
    return true;
  } else {
    //console.log(total)
    return false;
  }
}
// Better Solution:
function changeEnough(change, amountDue) {
  let sum =
    change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
  return sum >= amountDue;
}
//----------------------------------------------------------------------------------------------------------------------
// Problem: Seven Boom! Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Example Solutions:
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!" sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array" sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// Our Solution: 
function sevenBoom(arr) {
    let allNums = [] for (let item of arr) {
        allNums.push(...item.toString())
    } //console.log(allNums) 
    for (let item of allNums) {
        // console.log(item)
        if (item == '7') { return 'Boom!' }
    } return "there is no 7 in the array"
}
// Better Solution:
const sevenBoom = (arr) =>
  /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';
// So the / 7 / looks for 7 anywhere within a string and the.test checks for matches within a string.
//----------------------------------------------------------------------------------------------------------------------
