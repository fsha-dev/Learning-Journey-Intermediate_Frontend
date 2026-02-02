// See the order of logging in console
/* 
function display(data) {
  console.log(data);
}
function printHello() {
  console.log("Hello");
}
function blackoutFor300ms() {}

setTimeout(printHello, 0);

const futureData = fetch("https://twitter.com/will/tweets/1");
futureData
  .finally(() => console.log("fetch started"))
  .then(display)
  .catch(console.log);

blackoutFor300ms();

console.log("Me first");
*/

//Object.create()
/*
const user = Object.create({ name: "faezeh", score: 26 }); //name & age are hidden property
console.log(user);
// user.name = "Ali";
console.log(user.name);
*/
//Solution 1. Generate objects using a function
/*
function createUser(name, score) {
  const user = {};
  user.name = name;
  user.score = score;
  user.increament = function addOne() {
    user.score++;
  };
  return user;
}

const user1 = createUser("Will", 2);
const user2 = createUser("Faezeh", 6);
user1.increament();
console.log(user1);
*/
//Solution 2: Using the prototype chain
/*
What properties are typically added to an object created using the user creator function?
The objects typically have properties like 'name' and 'score', which are set during object creation, and have an implicit link to a function store object containing shared methods.
*/
/*
function userCreater(name, score) {
  const newUser = Object.create(userFunctionScore); //hidden property
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

//This is the object
const userFunctionScore = {
  increament: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};

const user3 = userCreater("Will", 5);
const user4 = userCreater("Tim", 9);
user3.increament();
console.log(user3);
*/
//Create and invoke a new function (add1) inside increment
/*
What potential issue arises when incrementing this.score inside a nested function in older JavaScript implementations?
When incrementing this.score inside a nested function, this would refer to the global window object, potentially creating an undefined property and not incrementing the intended object's score.
*/
/*
function userCreater(name, score) {
  const newUser = Object.create(userFunctionScore); //hidden property
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

//This is the object
const userFunctionScore = {
  increament: function () {
    function addOne() {
      this.score++;
    }
    addOne();
  },
};

const user5 = userCreater("Will", 5);
const user6 = userCreater("Tim", 9);
user3.increament();
*/
//Arrow functions override the normal this rules
function userCreater(name, score) {
  const newUser = Object.create(userFunctionScore); //hidden property
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

//This is the object
const userFunctionScore = {
  increament: function () {
    const addOne = () => {
      this.score++;
    };
    addOne();
  },
};

const user5 = userCreater("Will", 5);
const user6 = userCreater("Tim", 9);
user3.increament();
