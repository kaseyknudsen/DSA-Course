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

console.log(factorial(4));

//recursive solution

const factorial2 = (num) => {
  //base case
  if (num === 1) return 1;
  //changing input
  return num * factorial2(num - 1);
  /* 
     5 * 4
                * 3
                    * 2
                
*/
};

console.log(factorial2(5));
