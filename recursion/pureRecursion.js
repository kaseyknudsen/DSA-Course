//pure recursion
function collectOddValues2(arr) {
    let newArr = []
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues2(arr.slice(1)))
    return newArr;
  }

  console.log(collectOddValues2([1,2,3,4,5]))

  /* 
  pure recursion tips
  -for arrays, use methods like slice, the spread operator and concat that make copies
  of arrays so you do not mutate them
  -strings are immutable, so you will need to use methods like slice, substr or substring to make
  copies of strings
  -to make copies of objects use Objects.assign or the spread operator
  */