/* 
2 essential parts of a recursive function:
1) Base Case: the condition when recursion ends
recursion is a process that calls itself
2) Different input

*/

/* the call stack
-first in last out
-it's a stack data structure 
-when javascript sees the return keyword or when the function ends, the compiler will pop
*/

function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return; //return needs to be there, or loop will continue
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(4);

//print 4
//countdown(3)
//print 3
//countdown(2)
//print 2
//countdown(1)
//print 1
//countdown(0) //base case
//print 'all done'
