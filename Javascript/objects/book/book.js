// Object to primitive conversion
console.log("🏫 A primitive as an object");
/*
Those look like method calls on objects — but primitives don’t have methods.

"hello".toUpperCase();
(3.142).toFixed(2);


To make that syntax possible, JavaScript temporarily wraps the primitive inside a “wrapper object”, which does have methods. 

So when you write "Hi".toUpperCase(), JS silently does something like this (conceptually):

new String("Hi").toUpperCase();
That wrapper object gives access to the method toUpperCase.

🧠 4. Why do we need the wrapper at all?
Because the language needs to unify object-style method calls with primitive types:

Objects have methods and properties.
Primitives do not (they’re simple values).
JavaScript’s design goal was to make code look consistent:

js
someString.toUpperCase()
someNumber.toFixed(2)
someBoolean.toString()
All have the same object‑style interface.

So the wrapper makes primitives appear to act like objects, even though they’re not.

*/

let str = "hello";
console.log(str.toUpperCase());

//More ways to write a number
console.log("🏫 More ways to write a number");
let num1Billion = 1000000000;
let num1BillionAnotherWay = 1e9; // 1 with 9 zeros
let floatNumInBillion = 7.3e9;
let ms = 1e-6; // six zeroes to the left from 1
console.log(num1BillionAnotherWay, floatNumInBillion, ms);

//Hex, binary and octal numbers
console.log("🏫 Hex, binary and octal numbers");
console.log(0xff); // 255
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
console.log(a == b); // true, the same number 255 at both sides

//toString(base)
let num = 255;
console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111
console.log((745).toString(36)); //🚨🤔2 dot is not a typo, it is because we write number directly
