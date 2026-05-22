// The Mystery of The Keyword This
console.log("🏫 The Mystery of The Keyword This");
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  dance(style = "tango") {
    return `I am ${this.firstName} and I like to ${style}`;
  }
}

const fluffy = new Cat("fluffy");
console.log(fluffy.dance());
const fDance = fluffy.dance;
console.log(fDance);
// console.log(fDance());//🚨Error

// Global object and This
console.log("🏫 Global object and This");
function greet() {
  return `Welcome, Hi there!!!`;
}

//greet is on the global object, in browser it is on the global scope that is windows

console.log("HI");
// window.console.log("HI"); // same thing, window just exist in browser enviroment not node enviroment

// The left of the dot rule
console.log("🏫 The left of the dot rule");
function whatIsThis() {
  console.log(`This is, ${this}`);
  console.log(this);
}
whatIsThis();

const object1 = {
  name: "It is object1",
  whatIsThis: whatIsThis,
};
object1.whatIsThis();

const country = {
  name: "UK",
  population: "234,23434,32432",
  gpdRate: "344545",
  gpd: function () {
    console.log(this.name, " produce ", this.gpdRate, " in they country");
  },
};
country.gpd();

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  whatIsName() {
    console.log(this.name, "is my dog");
  }
}

const myDog = new Dog("poopy", 5);
myDog.name = "goody";
myDog.whatIsName();
