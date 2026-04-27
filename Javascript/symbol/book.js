// What is Symbol
/**
 * Let’s clarify. The problem Symbols solve is when two separate pieces of code, written independently, accidentally use the same property name.
 * The “name collision” that Symbols prevent is not about the JavaScript variable name. It’s about the property key value itself.

Let’s look at the creation code again:

const johnsKey1 = Symbol('key');

const johnsKey2 = Symbol('key');
 */
console.log("🏫 What is Symbol");
const id = Symbol("id");
const idAnother = Symbol("id");

console.log(id === idAnother);

// How to log a symbol
console.log("🏫 How to log a Symbol");
console.log(id);
console.log(id.toString());
console.log(id.description);

// “Hidden” properties
/**
 The “safety” and “hidden” nature of Symbols is not about hiding from a developer who is actively inspecting an object in the console. It’s about hiding from common programmatic operations.
 */
console.log("🏫 “Hidden” properties");
const user = {
  name: "Fazeh",
};
const idUser = Symbol("id");
user[idUser] = 1;
console.log(user, user[idUser]);

// Ignore Symbols in for...in and as keys
console.log("🏫 Ignore Symbols in for...in and as keys");
console.log(Object.keys[user]);

// Global key
console.log("🏫 Global key");
/**
 * Symbol('id') (Normal Symbol): This is like going to a key-cutting machine. Every time you use it, it creates a brand new, unique key.
 * Symbol.for('app.id') (Global Symbol): This is like asking the bank manager for the key to the “Main Vault”. There is only one official key for the Main Vault.
 */
const globalKey = Symbol.for("everyBodyCanUseThis");
const globalKeyCompany = Symbol.for("everyBodyCanUseThis");
console.log("Is this key global?Is this same?", globalKey === globalKeyCompany);
