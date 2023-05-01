/* 
intro to recursion 
4! is read as '4 factorial': 4 * 3 * 2 * 1 = 24
*/

const factorial = (num) => {
  let total = 1;
  //i = 4
  //total = 1 * 4 = 4
  //i = 3
  //total = 4 * 3 = 12
  //i = 2
  //total = 12 * 2 = 24
  //i = 1
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

console.log(factorial(1));

/* 
4 * 4 - 1 (3) * 3-1 (2) * 2 - 1 (1) */
