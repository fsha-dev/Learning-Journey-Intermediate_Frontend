// Getters, Setters
console.log("🏫 Getters, Setters");

class Circle {
  static allowedColors = new Set(["red", "green", "blue"]); //allowedColors belongs to the CLASS not the instance
  constructor(radius, color) {
    this._radius = radius;
    if (Circle.allowedColors.has(color)) {
      this._color = color;
    } else {
      throw new Error("That color is not allowed");
    }
  }
  //Setter for the radius
  // we use setters for: when we want to provide an mechanism for someone to update sth like it is a propery but it has logic behinde it
  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }
  // Getter
  get diameter() {
    return this._radius * 2;
  } //acts like property but runs logic(function)
  get radius() {
    return this._radius;
  }
  get color() {
    return this._color;
  }
  set color(newColor) {
    if (allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That color is not allowed");
    }
  }
}

const c = new Circle(4, "red");
console.log(c._radius, c.diameter);
console.log(c.color);
c.color = "green";
console.log(c.color);
