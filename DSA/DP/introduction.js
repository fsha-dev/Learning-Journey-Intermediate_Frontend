// JavaScript program to find
// fibonacci number using recursion.

// Function to find nth fibonacci number
function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

//driver code
let n = 5;
console.log(fib(n));
/*
fib(5)
├─ fib(4)
│  ├─ fib(3)
│  │  ├─ fib(2)
│  │  ├─ fib(1)
│  ├─ fib(2)
├─ fib(3)
│  ├─ fib(2)
│  ├─ fib(1) 
*/

// Javascript program to find
// fibonacci number using memoization.(TOP-Down)

function fibMemo(n, memo = []) {
  //Base Case
  if (n <= 1) {
    return n;
  }
  // To check if output already exists
  if (memo[n] !== undefined) {
    return memo[n];
  }
  // Calculate and save output for future use
  //Chaching happen here
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  // Returning the final output
  return memo[n];
}

// // Driver code
console.log(fibMemo(5));
/*
fib(5)
 ├── fib(4)
 │    ├── fib(3)
 │    │    ├── fib(2)
 │    │    │    ├── fib(1)
 │    │    │    └── fib(0)
 │    │    └── fib(1)
 │    └── fib(2) ❌ (cached, no new call)
 └── fib(3) ❌ (cached, no new call)
*/

// JavaScript program to find
// fibonacci number using tabulation.
function fibTable(n) {
  const table = new Array(n + 1);
  table[0] = 0;
  table[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}
console.log(fibTable(n));
/*
fib[0] = 0
fib[1] = 1
fib[2] = fib[1] + fib[0]
fib[3] = fib[2] + fib[1]
fib[4] = fib[3] + fib[2]
fib[5] = fib[4] + fib[3]
*/

/*🧠 Problem 1: Climbing Stairs
Description:

You are climbing a staircase.
Each time you can climb 1 or 2 steps.
How many distinct ways can you reach the top?*/
// 1. Recursive (Naive)
function climbStairs(n) {
  if (n <= 2) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log("climbStair recursion", climbStairs(n));

// 2. Dynamic Programming (Tabulation)
function climbStairsDP(n) {
  const table = new Array(n + 1);
  table[0] = 0;
  table[1] = 1;
  table[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}

console.log("climbStairs DP", climbStairsDP(n));

/*
🧩 Practice Problem #2
🎯 Problem:

You have a robot on the top-left corner of a grid with size m x n.
The robot can only move right or down at any point.
Find how many unique paths the robot can take to reach the bottom-right corner.
*/
//Notice that to reach any cell (i, j), the robot must come either from the cell above (i-1, j) or the cell to the left (i, j-1). Therefore, the number of paths to (i, j) is the sum of the number of paths to (i-1, j) and (i, j-1). This suggests a dynamic programming approach.
function path(n, m) {
  // base case: only one path if we are in first row or first column

  if (n === 1 || m === 1) {
    return 1;
  }
  // recurrence relation
  return path(n - 1, m) + path(n, m - 1);
}
console.log(path(4, 5));

function pathDP(n, m) {
  const table = Array.from({ length: n }, () => new Array(m));
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      table[i][j] = table[i - 1][j] + table[i][j - 1];
    }
  }
  return table[n - 1][m - 1];
}
