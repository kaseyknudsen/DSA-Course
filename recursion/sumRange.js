function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/* 
sumRange(3)
num is not === to 1
return 3 + sumRange(2)
            return 2 + sumRange(1)
                     return 1 (base case)

return 1 gets simplified, 
return 2 + sumRange(1) = 3
return 3 + 3, which is equal to 6


sumRange(4)
num is not === to 1
return 4 + sumRange(3)
    num is not === to 1
        return 3 + sumRange(2)
            num is not === to 1
                return 2 + sumRange(1)
                    num is === 1
                        return 1 (pops off)
                            
*/