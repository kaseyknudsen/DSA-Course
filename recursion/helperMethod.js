/* 
design pattern

function outer(input) {
var outerScopedVariable = []
function helper(helperInput) {
    //modify outer scoped variable
    helper--
}
helper(input)

return outerScopedVariable

}
*/

//non recursive solution
const oddNums = (nums) => {
  const oddNumArray = [];
  for (num of nums) {
    if (num % 2 !== 0) {
      oddNumArray.push(num);
    }
  }
  return oddNumArray;
};

console.log(oddNums([1, 2, 3, 4, 5, 7]));

//recursive solution
const collectOddValues = (arr) => {
  let result = [];
  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };
  helper(arr);
  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 7]));

//solution using filter
const newArray = (arr) => {
    return arr.filter((num) => num % 2 !== 0)
}

console.log(newArray([1, 2, 3, 4, 5, 7]))

