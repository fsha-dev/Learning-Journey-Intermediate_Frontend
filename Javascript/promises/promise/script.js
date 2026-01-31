/*
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000); //state fullfilled, result done
  setTimeout(() => reject("Ooops!"), 1000); //state rejected, result Ooops!
});
*/
//Topic: .then
//1️⃣what is the result of code belows?
/*
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
  setTimeout(() => reject("Ooops something went wrong"), 100);
});

promise2.then(
  function (resultPromise2) {
    console.log(
      "in this function it gets the result of promise2 and execute the function so the result is:✅ ",
      resultPromise2
    );
  },
  function (errorPromise2) {
    console.log(
      "in this function it gets the error of promise2 and execute the function so the result is:🚨 ",
      errorPromise2
    );
  }
);
*/
//2️⃣What is the output of the code below?
/*
let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});
promise3.then(console.log);
*/

//Topic: .catch
let promise4 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("Error occured"), 100);
});
//First way to .then the error

promise4.then(
  function (result) {
    console.log("successfully, ", result);
  },
  function (error) {
    console.log("It has error: ", error);
  }
);

//Second way to .catch the error
/*
promise4.catch(function (error) {
  console.log("❌Error appeard, something is broken");
});
*/
//Third way to .then error
/*
promise4.then(null, function (error) {
  console.log("It is broken: ", error);
});
*/

console.log(`script 1 is loaded`);
