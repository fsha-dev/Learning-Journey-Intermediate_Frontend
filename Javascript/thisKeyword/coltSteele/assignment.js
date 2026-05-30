// 1.
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  describe(year) {
    console.log(`This is a ${year} ${this.brand} ${this.model}.`);
  }
}

const myCar = new Car("Tesla", "Model 3");
const rentalAgency = {
  brand: "Hertz",
  model: "Fleet",
};

const describeFunc = myCar.describe;

// TASK 1: Why does this line fail? Explain in a comment and fix it using .call()
// describeFunc(2024);
describeFunc.call(myCar, 2024);

// TASK 2: Use .apply() to invoke describeFunc so it prints:
// "This is a 2022 Hertz Fleet."
describeFunc.apply(rentalAgency, [2022]);

// 2.
const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log("Current Count:", this.count);
  },
};

// TASK 3: Use .bind() to create a permanent version of the increment
// function that is ALWAYS locked to the 'counter' object.
// Store it in a variable called 'boundIncrement'.

const boundIncrement = counter.increment.bind(counter);
// Test: Even when called "on nothing", it should still work.
boundIncrement(); // Should log: Current Count: 1
boundIncrement(); // Should log: Current Count: 2

// 3.
function calculateTax(taxRate, price) {
  const total = price + price * taxRate;
  console.log(`Total price with ${taxRate * 100}% tax: $${total.toFixed(2)}`);
}

// TASK 4: In many countries, the tax is fixed (e.g., 15%).
// Use .bind() to create a new function called 'applyVAT'
// that has the 'taxRate' argument PRE-FILLED as 0.15.
// Note: Since we don't care about 'this' here, pass 'null' as the first argument to .bind().

const applyVAT = calculateTax.bind(null, 0.15);
// Test:
applyVAT(100); // Should log: Total price with 15% tax: $115.00
applyVAT(50); // Should log: Total price with 15% tax: $57.50
