console.log("👾Learning👾:Functions");
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    console.log("i::::", i);
    for (let j = 2; j < i; j++) {
      console.log("::::j::::", j);
      if (i % j == 0) continue nextPrime;
    }
    console.log(i); // a prime
  }
}
showPrimes(7);
console.log("🖊️Assignment✒️");
//1.write a function to detect prime numbers
//Make the function above better:
function showPrimes2(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime2(i)) continue;
    console.log(i);
  }
}
function isPrime2(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function getMin(a, b) {
  return a > b ? b : a;
}
function pow(x, n) {
  return x ** n;
}
console.log("👾Learning👾:Functions_Block Scope");
let welcome;
const age3 = 20;
if (age3 > 18) {
  welcome = function () {
    console.log("welcome you are too old engough to be here");
  };
} else {
  welcome = function () {
    console.log("sorry you are not old engough to be hereeeeeeee!!!!!!1");
  };
}
welcome();
console.log("🥴Tip🥴");
//right the code for pow (exponential)
function pow2(x, n) {
  if (n >= 0) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  console.log('Negetaive "n" not supported');
}
console.log(pow2(-2, 3));

console.log("👾Learning👾:BDD, behavior driven development");
/*
describe("pow2", function () {
  it("raises to n-th power", function () {
    assert.equal(pow2(2, 3), 8);
  });
});
*/
console.log("👾Learning👾: Object");
const name = "Faezeh";
//Shorthand
function createUser(name, age = 20) {
  return {
    name, //instead of name: name
    age, //instead of age :age
  };
}
console.log(createUser(name, 26));

const getTheUserName = "Mania";
const aRandomObject = {
  [getTheUserName]: "a name",
  hobby: "playing tennis",
};
aRandomObject["a key name which has spaces"] = "i don't have any idea";
console.log(aRandomObject);
console.log(aRandomObject.someKey); //undefined, because we do not have this key in our object, this case may be failed but "in" always works fine, think which way this cause be failed?!
console.log("name" in aRandomObject);
console.log("hobby" in aRandomObject); //to check if there is any key named hobby in our object

let key = "hobby";
console.log(key in aRandomObject);
