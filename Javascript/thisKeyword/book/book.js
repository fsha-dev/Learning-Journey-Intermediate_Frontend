// Objects: Method
console.log("🏫 Object: Method");

let user = {
  name: "Faezeh",
  sayHi: function () {
    return `Hello, ${this.name}`;
  },
};

console.log(user.sayHi());

// Internals: Reference Type
console.log("🏫 Internals: Reference Type");
console.log(
  "Description: In JavaScript, the value of 'this' inside a method depends on exactly how you call it.",
);

let somebody = {
  name: "John",
  hi: function () {
    return this.name;
  },
};

console.log(somebody.hi());
const copySomebody = somebody.hi;
console.log(copySomebody());

// Arrow functions have no “this”
console.log("🏫 Arrow functions have no “this”");
console.log(`Description: Normal function:

“Call me → I will choose a this based on the caller.”
Arrow function:

“I don’t care who calls me. I already have my this from earlier.”`);

const anObject = {
  name: "Penny Worth",
  genere: ["criminal", "comic"],
  seasons: 3,
  play: function () {
    const playTheTeaser = () => {
      console.log(`Teaser ${this.name} is playing`);
    };
    playTheTeaser();
  },
  playTheTeaser: function () {
    console.log(`${this.name} Teaser is playingggg`);
  },
  watchTheMovie: () => {
    console.log(`${this.name} is being watched`);
  },
};

anObject.play();
anObject.playTheTeaser();
anObject.watchTheMovie();

// Exercises
console.log("🎽 Exercises");

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
  showStep: function () {
    // shows the current step
    console.log(this.step);
  },
};
ladder.up().up().down().showStep();
