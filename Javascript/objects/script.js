// call object: bracket
console.log("🏫 call object: bracket");
// const car = prompt("what kind of car do you have", "BMW");
const car = "BMW";
const info = { [car]: 5, "name of the owner": "Sir James" };
const sentence = "name of the owner";
console.log(info.BMW, info["name of the owner"], info[sentence]);

// Existense Check
console.log("🏫 Existense Check");
const information = { name: "ME", year: 2016 };
console.log(information.noSuchProperty === undefined);
console.log("noSuchProperty" in information);
const year = "year";
console.log(year in information);
console.log("name" in information);

// 🤔⁉️ May be a Bug🐛?!
console.log(" May be a Bug🐛?!");
const obj = { test: undefined, anotherTest: null };
console.log(obj.test); // it's undefined, no such property?!
console.log("test" in obj); // what happen is that existed!!!
console.log(obj.anotherTest); // null = unknown, empty

// for...in loop
console.log("🏫 The 'for...in' loop");
for (key in information) {
}
console.log(key);

let user = { name: "Nime", isAdmin: true, job: "Developer" };
for (let prop in user) {
  console.log(prop, user[prop]);
}

// Order in object
console.log("🏫 Ordered like an object");
const code = {
  "+49": "Germany",
  "+48": "Switzerland",
  "+47": "Itely",
  "+1": "USA",
};
for (let prop in code) {
  console.log(+prop);
}

// Copying by reference
console.log("🏫 Copying by reference");

// primitives
const sentences = "HEllo";
const message = "Sentences";

//Object
const obj1 = { userName: "MEEE" };
const obj2 = obj1;
obj2.userName = "Have Changed!!";
console.log(obj1.userName);

// The key will be stringified
const objPuzzel = { objName: "Randomer", 2: "integer", 2: "string" };
objPuzzel[1] = "integer";
objPuzzel["1"] = "string";
console.log(objPuzzel[1], objPuzzel["1"]);
console.log(objPuzzel[2], objPuzzel["2"]);
console.log(objPuzzel);

// Deep copy & merge
console.log("🏫 Deep copy & merge");
// Method 1: loop over each key value
const object1 = {
  name: "ali",
  age: "non of your business",
  occupation: "doctor",
};
const objectMethod1DeepCopy = {};
for (key in object1) {
  objectMethod1DeepCopy[key] = object1[key];
}
console.log(objectMethod1DeepCopy, "1");
// Method 2: object.assign(mainObj,{obj1,obj2,...})
const objectMethod2DeepCopy = Object.assign({}, { ...object1 });
console.log(objectMethod2DeepCopy, "2");
objectMethod2DeepCopy.age = 49;
console.log(objectMethod2DeepCopy, "2");
console.log(object1, "main");
console.log(objectMethod1DeepCopy, "1");
console.log(objectMethod2DeepCopy, "2");

// Also we can use Object.assign to merge 2 or more objects
const game1 = { release: 2030, name: "unknown world", company: "fugi" };
const game2 = { release: 2010, name: "black rainbow", company: "kiwi" };
const allGames = Object.assign({}, { game1, game2 });
console.log(allGames);

// But Becarefull 🤔🚨 for in to in object these ways are not worked
const matin = {
  name: "matin",
  age: 21,
  hobby: { game: "GTA", sports: "soccer" },
  assets: { car: "207", motor: "jappenies" },
};

const shallowCopyMatin = Object.assign({}, matin);
console.log("equality whole object", shallowCopyMatin === matin); //different place in memory
console.log("equality part of object", shallowCopyMatin.hobby === matin.hobby); //same place in memory
matin.hobby = "tennis";
console.log(shallowCopyMatin.hobby, matin.hobby); //🚨🤔 find out why this happen
matin.assets.car = "BMW";
console.log(shallowCopyMatin.assets, matin.assets); //🚨🤔 find out why this happen

// Exercise
console.log(" 🎽Exercise: Check for emptiness");
function isEmpty(obj) {
  return obj && Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty({ hell: 0 }));

// Figure It out: Garbage Collection
let person = { name: "Jack" };
let actor = person;
person = "someone else";
console.log(person, actor);
