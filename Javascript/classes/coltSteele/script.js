// Classes are blueprint of functionality
console.log("🏫 Class");
class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  } // Methods
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
  logThis() {
    return this; // reffered particular instance of the class
  }
  getTriangle() {
    return `The Triagle with the area of ${this.getArea()} and hypotenuse ${this.getHypotenuse()}`;
  }
} // A factory to generate Triagle

// instantiation new instance from class
let myTri = new Triangle();
myTri.a = 3;
myTri.b = 4;
console.log("Area: ", myTri.getArea());
console.log("Hypotenuse: ", myTri.getHypotenuse());
console.log(myTri.logThis());
console.log(myTri.getTriangle());

console.log(myTri instanceof Triangle);
console.log([1, 2, 3] instanceof Array);

// Constructors
console.log("🏫 Constructors");
class TriagleWithConstructor {
  constructor(sideA, sideB) {
    this.a = sideA; //instint properties
    this.b = sideB;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
  describe() {
    return `The Triagle with the area of ${this.getArea()} and hypotenuse ${this.getHypotenuse()}`;
  }
}

let newTriagle = new TriagleWithConstructor(4, 4);
console.log("Area:", newTriagle.getArea());
console.log("Hypotenuse:", newTriagle.getHypotenuse());

// What can we do in the sonstructor?
/*
1️⃣ Whatever you want!
2️⃣ Common things
    ⭐ Validate data

    class Some {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) {
      throw new Error(`Invalid a:${a}`);
    }
    if (!Number.isFinite(b) || b <= 0) {
      throw new Error(`Invalid a:${b}`);
    }
    this.a = a;
    this.b = b;
  }
}

    ⭐ Assign properties
*/

// Exercise
console.log("🎽 Exercise");
class BackAcount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
  }
  deposite(amt) {
    if (amt > 0) {
      return (this.balance = this.balance + amt);
    } else {
      return "you can not deposite a negetive amount";
    }
  }
  withdraw(amt) {
    if (amt > 0) {
      if (this.balance - amt < 0) {
        return "You do not have enough money to widthraw";
      }
      return (this.balance = this.balance - amt);
    } else {
      {
        return "you can not withdraw a negetive amount";
      }
    }
  }
}

const myBackAccount = new BackAcount("Faezeh", 6999009);
console.log(myBackAccount);
console.log(myBackAccount.deposite(-8));
console.log(myBackAccount.withdraw(1));
console.log(myBackAccount.balance);

// Inheritance: Basics
console.log("🏫 Inheritance");
console.log(
  "Description: It is used for changed shared methods and make new methods",
);
class shyTriangle extends TriagleWithConstructor {
  describe() {
    return "runs and hides";
  }
  iAmShy() {
    return "I am a shy triangle";
  }
}
// shyTriangle = child class, sub class
// Triangle = parent class, super class
const shyTri = new shyTriangle(2, 3);
console.log(shyTri.describe(), shyTri.iAmShy());

// The Super keyboard
console.log("🏫 The Super keyboard");
console.log(
  "Description: if you need to add another constructer beyond parent class",
);
class ColorTriangle extends TriagleWithConstructor {
  constructor(a, b, color) {
    super(a, b); //call parent class counstructoer
    this.color = color; // add new property
  }
}
class ColorMoodTriangle extends ColorTriangle {
  constructor(a, b, color, mood) {
    super(a, b, color);
    this.mood = mood;
  }
}

// Static properties
console.log("🏫 Static properties");

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static species = "Persian"; // it belongs to the class itseld, ex in math you can save PI
}

const myCat = new Cat("Piky", "scottish fold");
console.log(myCat.name, myCat.breed, myCat.species);
console.log(Cat.species);
Cat.species = "Catus";
console.log(Cat.species);

// Static Methods
console.log("🏫 Static Methods");
console.log(
  "Description: A static method is a method that belongs to the class itself,not to an individual object (instance).",
);
class Dog {
  constructor(dog) {
    this.dog = dog;
  }
  static hop() {
    return `${Dog.dog} hop hop hop`;
  }
  static thisIs() {
    return `this is :${this}`;
  }
}

const myDog = new Dog("toyi");
// console.log(myDog.hop());
console.log(Dog.hop());
console.log(Dog.thisIs());

// Use Cases for static methods
console.log("🏫 Use Cases for static methods");
console.log(`Description: Static Methods to Group Related Functions like Math.random(),Math.PI()
  Or Static Methods as Factory Methods (functions that create objects)`);
class Cat2 {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static registerStray() {
    const names = [
      "Muffin",
      "Biscuit",
      "Sleepy",
      "Dodo",
      "Princess Butterface",
    ];
    const name = choice(names);
    return new Cat2(name, "unknown");
  }
  meow() {
    return `${this.name} says meow`;
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

console.log(Cat2.registerStray().meow());

// Getter and Setters
console.log("🏫 Getter and Setter");
//Getter = specail method that makes a property readable
//Setter = specail method that makes a property writable

class Rectangle {
  #count = 0;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.log("must be a positive number");
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.log("must be a positive number");
    }
  }
  increaseCount() {
    this.#count += 1;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get count() {
    return this.#count;
  }
}
const rectangle = new Rectangle(-1000, "pizza");
// rectangle.width = 7;
// rectangle.height = 8;
console.log(rectangle.width);
console.log(rectangle.height);
console.log("rectangle 1 count: ", rectangle.count);
rectangle.increaseCount();
// rectangle.#count = 5; // 🚨Error
console.log("rectangle 1 count: ", rectangle.count);

const rectangle2 = new Rectangle(3, 4);
console.log("rectangle 2 count: ", rectangle2.count);
// More Resource
console.log(
  `🌐🌐More Resources: Immutable Class Pattern,{(https://coreui.io/answers/how-to-create-immutable-objects-in-javascript/)}`,
);
