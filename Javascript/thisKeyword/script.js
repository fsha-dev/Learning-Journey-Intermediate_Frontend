//Check the outputs and understand why is like it?
/*
const user = {
  name: "Hogu",
  greet: function () {
    console.log(this.name);
  },
};

user.greet();

const greet = user.greet;
console.log(greet);
greet();

setTimeout(user.greet, 100);
setTimeout(() => user.greet(), 200);
*/
/*
let user = {
  name: "faezeh",
  age: 26,
};

function sayHi() {
  return `hi ${this.name}`;
}

user.sayHi = sayHi; //add function sayHi to Object user
console.log(user.sayHi);
console.log(user.sayHi());

//Assignment 1
function makeUser() {
  return {
    name: "John",
    ref0: function () {
      return this;
    },
    ref: this,
  };
}

let fard = makeUser();
console.log(fard.ref.name);
console.log(fard.ref0().name);
//Assignemt 2
//https://javascript.info/object-methods#create-a-calculator
let calculator = {
  read: function () {
    this.a = prompt("Enter a number:");
    this.b = prompt("Enter another number:");
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
};
//Assignment 3
//https://javascript.info/object-methods#chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
*/
//Losing “this”

let shakhs = {
  firstname: "Asghar",
  sayHi() {
    console.log(`Hello , ${this.firstname}`);
  },
};
/*
setTimeout(shakhs.sayHi, 1000);
//line above is equal to:
const func = shakhs.sayHi;
setTimeout(func, 500);
*/
//1️⃣Solution 1: a wrapper
//this is from lexical enviroment in arrow function
setTimeout(() => shakhs.sayHi(), 1000);
//🚨🫣but it has a problem like this
/*
shakhs = {
  sayHi() {
    console.log("another setTimerout");
  },
};
*/
//2️⃣solution 2: bind
//It is like we have fixed 'this'
let person = {
  name: "Hogu",
};

function sayPersonName() {
  return this.name;
}

const funcPerson = sayPersonName.bind(person);

console.log(funcPerson());

//now we use solution 2 for shakhs example
const sayHiTo = shakhs.sayHi.bind(shakhs);
sayHiTo();
setTimeout(sayHiTo, 200);

shakhs = {
  sayHi() {
    console.log("see the difference🤔?!");
  },
};
