console.log("🌋Errors might happen🌋");

console.log(typeof null); //error occurs in the output

/*****Quesion1: whyin line 6 the output is string?how to solve it? */
const age = "123";
Number(age);
console.log("Question 1️⃣🤔");
console.log(typeof age);
console.log(typeof Number("564"));
console.log(typeof Number(age));
/**** Solution1: 
let age = "445"
age = Number(age)
*/
console.log("🥴Tip🥴");

console.log(Boolean("0")); //it is not a empty string
console.log(Boolean("    ")); //spaces means something is inside there -> ture
console.log(Boolean("")); //empty strign -> false
console.log(Boolean(0));

console.log("👾Learning👾");
console.log(Number(undefined)); //undefined -> when nothing is assigned to the variable
console.log(Number(null));
console.log(Number("dfjdfk")); //NaN -> incorrect calculation
console.log(Number("    12365"));

/**** Exercises */
console.log("📒Exeecises📒");
console.log(
  "" + 1 + 0,
  "" - 1 + 0,
  true + false,
  6 / "3",
  "2" * "3",
  4 + 5 + "px",
  "$" + 4 + 5,
  "4" - 2,
  "4px" - 2,
  7 / 0,
  "  -9  " + 5,
  "  -9  " - 5,
  null + 1,
  undefined + 1,
  " \t \n" - 2,
);
console.log(2 + 5 + "3");

console.log("👾Learning👾 : type conversion");
console.log(+true);
console.log(-true);
console.log(+"6");
console.log(+"");
console.log(typeof -"");
console.log(typeof +"8");

console.log("👾Learning👾 : increament/decreament");
console.log("Postfix++");
let aRandomNumber = 8;
console.log(aRandomNumber++); //it added 1 to the counter but it returns the value before adding
// console.log(8++) //Error occured
console.log(aRandomNumber); // you can see the value is added but in postfix it returned the value before adding and in prefix it returned the added value
console.log("++Prefix");
console.log(++aRandomNumber);

console.log("🖊️Assignment✒️");
//What is the result?
//1.
let counter = 0;
counter++;
++counter;
console.log(counter);

console.log(counter++);
console.log(counter);
console.log(++counter);
//2.
let aNUM = 1,
  bNUM = 1;
let cNUM = ++aNUM;
let dNUM = bNUM++;
console.log(cNUM, dNUM, bNUM, aNUM);

console.log("👾Learning👾 : Bitewise operator");
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

console.log("👾Learning👾 : Comparisons");
console.log("3" > 1); //different types -> in comparisons convert to type number

console.log("🌋Errors might happen🌋");
console.log(0 == false);
console.log("" == false);
console.log("" == 0);
console.log(0 === false); //strict equality, type conversion is not happen
console.log(null == undefined);
console.log(null === undefined);

console.log("🖊️Assignment✒️");
console.log(
  5 > 4,
  "apple" > "pineapple",
  "2" > "12",
  undefined == null,
  undefined === null,
  null == "\n0\n",
  null === +"\n0\n",
);

const ageMan = 26;
ageMan === 26
  ? console.log("you are so young")
  : console.log("How old are you ?");
ageMan === 26 && console.log("YESSSSSSSSSS,you are so young");

console.log("👾Learning👾 : Truty  and falsy values");
console.log(
  "Falsy values below👇",
  "0",
  "null",
  "undefined",
  'empty string("")',
);
console.log("👾Learning👾 : Logical Operators");
console.log(true || "me");
console.log(1 || 0); // 1 (1 is truthy)
console.log(true || "no matter what"); // (true is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

console.log("🖊️Assignment✒️");
console.log(console.log(1) || 2 || console.log(3));
console.log(console.log(1) && 2 && console.log(3));
console.log(null || (2 && 3) || 4);

if (ageMan >= 14 && ageMan <= 90) {
  console.log("age is", ageMan);
}

const newAge = 10;
if (!(newAge >= 14 && newAge <= 90)) {
  console.log("you are not able to enter this site due to your age");
}

if (-1 || 0) console.log("first");
if (-1 && 0) console.log("second");
if (null || (-1 && 1)) console.log("third");

console.log("👾Learning👾 : For loop");
//1. what is the difference between these codes

let i = 0;
for (let i = 0; i < 3; i++) {
  true;
}
console.log("i is", i);

let j = 0;
for (j = 0; j < 3; j++) {
  true;
}
console.log("j is", j);

//2. Continue and Break
for (let i = 0; i < 5; i++) {
  if (i % 2 !== 0) continue;
  console.log(i, "it is odd");
}
//3. what is the difference between these 2 codes?
for (let i = 0; i < 4; i++) {
  if (i % 2 !== 0) {
    console.log("this number is even", i);
  } else {
    continue;
  }
}
for (let i = 0; i < 4; i++) {
  if (i % 2 === 0) {
    console.log("this number is odd", i);
  } else {
    break;
  }
}
let emptyItem = 1;
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (!emptyItem) {
      break outer; //Chat GPT question: what if we do not have any label
    }
    console.log(i, j, "this is coordinate (i,j)");
  }
}
let aNumber = 3;
while (aNumber) {
  console.log(aNumber, "times");
  aNumber--;
}
let aNumber2 = 3;
do {
  console.log("do this while this condition is checked");
  aNumber2--;
} while (aNumber2);
