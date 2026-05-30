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
    console.log("This in country is ", this);
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

// This and Classes
console.log("🏫 This and Classes");

class Flower {
  constructor(name) {
    this.name = name;
  }
  static getRandomFlower() {
    console.log("This is", this);
  }
  smell(smellOf = "nothing") {
    console.log("This is", this);
    console.log(
      `This ${this.name} has a great smell, it's smell like ${smellOf}`,
    );
  }
}
const myFlower = new Flower();
// myFlower.getRandomFlower();// 🚨Error
Flower.getRandomFlower();

//see the difference between like 48 and 79 in code below:
const func = myFlower.smell;
// func();// 🚨Error
console.log(console.name);
// console.log(undefined.name);// 🚨Error

// OOP and this
console.log(
  "When you call a function on nothing, but the function comes from inside a class, the value of this will be undefined, not the window",
);

// The call Method
console.log("🏫 The call Method");
console.log(
  "🍺 Sometimes, you'll need to say 'call this function on this object'",
);
const fLowerName = {
  name: "Lily",
  rigon: "Swiss",
};
func.call(fLowerName); // Call func on FLowrName object
const fLowerName2 = {
  name: "Shabdar",
  rigon: "Parks",
};
func.call(fLowerName2);
// you can pass argument too!
func.call(fLowerName2, "cake");

//Hint
const conan = {
  name: "Conan",
  city: "LA",
  sing: function () {
    console.log("this is ", this);
    console.log(`${this.name} sings a song`);
  },
  greet(greeting) {
    console.log(`${greeting}, Mr/Ms ${this.name}`);
  },
};

const lisa = {
  name: "Lisa",
  city: "NYC",
};

const sing = conan.sing;
sing.call(lisa);

class PersonInfo {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  static sing() {
    console.log("this is ", this);
    console.log(`${this.name} sings a song`);
  }
  greet(greeting) {
    console.log(`${greeting}, Mr/Ms ${this.name}`);
  }
}

const singFunc = PersonInfo.sing;
singFunc.call(conan);
singFunc.call({ name: "Matin" });
PersonInfo.sing.call({ name: "Fafa" });

// The Apply Method
console.log("🏫 The Apply Method");
const george = {
  name: "George",
  city: "Mossco",
};
// conan.greet.apply(george, "Holaaaaaaaaaaaaa");// 🚨Error
// Apply accepts an array
conan.greet.apply(george, ["Olayyyy"]);
// function.apply(this refered to?, arguments) -> apply this function with these refered value and arguments
console.log(
  "🤔👩‍🎓function.apply(this refered to?, arguments) -> apply this function with these refered value and arguments",
);

// The Bind Method
console.log("🏫 The Bind Method");
// You can call .call 10 times like this below
conan.sing.call(lisa);
conan.sing.call(lisa);
conan.sing.call(lisa);
conan.sing.call(lisa);
conan.sing.call(lisa);
conan.sing.call(lisa);
conan.sing.call(lisa);
conan.sing.call(lisa);
conan.sing.call(lisa);
conan.sing.call(lisa);

//Or instead use bind
const singLisa = conan.sing.bind(lisa); // make a brand new function which bounds to the contex of lisa
console.log("1️⃣");
singLisa();
console.log("2️⃣");
singLisa();
console.log("3️⃣");
singLisa();

// Binding Arguments
console.log("🏫 Binding Arguments");
function applySalesTax(taxRate, price) {
  const total = price + price * taxRate;
  console.log(
    `The tax rate is ${taxRate} and total is ${total} with price ${price}`,
  );
  return total;
}

const applyCASalesTax = applySalesTax.bind(null, 0.15);
const applyMTSalesTax = applySalesTax.bind(null, 0.2);
console.log(applyCASalesTax(1000), applyMTSalesTax(1000));

// Binding With Event Listeners
console.log("🏫 Binding With Event Listeners");
// Go to app.js & index.html file
console.log("Go to app.js & index.html file");

// Bind With Timers
console.log("🏫 Bind With Timers");
class Counter {
  constructor(startingNum, increamnetAmount) {
    this.startingNum = startingNum;
    this.increamnetAmount = increamnetAmount;
    this.currentNum = 0;
  }
  start() {
    this.currentNum = this.startingNum;
    return this.startingNum;
  }
  increamnet() {
    if (this.currentNum === 0) {
      return this.start();
    } else {
      return (this.currentNum += this.increamnetAmount);
    }
  }
}
const counter1 = new Counter(2, 100);
console.log(counter1.increamnet());
console.log(counter1.increamnet());
console.log(counter1.increamnet());
