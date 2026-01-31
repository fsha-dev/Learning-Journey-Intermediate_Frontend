/* 🔔Nested setTimeout */
// let i = 1;

// function addNum(num) {
//   let i = num;
//   return function result() {
//     console.log(i++);
//     return i;
//   };
// }

// const add1 = addNum(i);
// const timerId = setInterval(() => {
//   add1();
// }, 100);
// setTimeout(() => {
//   console.log("clear timer");
//   clearInterval(timerId);
// }, 1000);

// let timerId3;
// const timerId2 = setTimeout(function timer() {
//   console.log(`Timer NO.${i++}`);
//   add1();
//   timerId3 = setTimeout(timer, 100);
// }, 100);

// setTimeout(() => {
//   console.log("Clear Timer ID"); //see the differcen it the console.log() comes first in the qeue it takes time to clear the timer so it log more number but it we move console.log below clearTimeout it log less timer that before
//   clearTimeout(timerId3);
// }, 1000);

/* 🔔Zero delay is in fact not zero (in a browser)
 */
// const start = Date.now();
// console.log(`Start: ${new Date().getMilliseconds()}`);
// const times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start);

//   if (start + 100 < Date.now()) console.log(times);
//   else setTimeout(run);
// });
/* 📒Tasks */
/*Output every second*/
const delay = 1000;
// Variant 1
/*
function printNumbers(from, to) {
  let currentNum = from;
  const endNum = to;
  return function printEachNum() {
    if (currentNum <= endNum) {
      setTimeout(() => {
        console.log(currentNum++);
        printEachNum();
      }, delay);
    }
  };
}

const printNums = printNumbers(1, 5);
console.log(printNums());
*/

//variant 2
/*
function printNumbers3(from, to) {
  let current = from;
  const timerId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbers3(3, 8);
*/
/*
//Instantly Executing 
function printNumbers4(from, to) {
  let current = from;
  function go() {
    console.log(current);
    if (current === to) clearInterval(timerId);
    current++;
  }
  go();
  let timerId = setInterval(go, 1000);
}

printNumbers4(4, 9);
*/
/*📒 What will setTimeout show?*/
/*
let i = 0;

setTimeout(() => console.log(i), 100); //Any setTimeout will run only after the current code has finished.

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
*/
