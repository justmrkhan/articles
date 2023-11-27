"use strict";

/* Example 1: Code Duplication and Modification Issue

// Model 1 of Porsche
const car1 = {
  brand: "Porsche",

  model: "911 GT3",
  topSpeed: "318 KM/h",
  acceleration: "3.4",

  carDetails: function () {
    console.log(
      `This is a ${this.model} by ${this.brand} with a top speed of ${this.topSpeed} and accelerates from 0 to 100 KM/h in ${this.acceleration} seconds`
    );
  },
};

// Model 2 of Porsche
const car2 = {
  brand: "Porsche",

  model: "718 Cayman GT4 RS",
  topSpeed: "315 KM/h",
  acceleration: "3.4",

  carDetails: function () {
    console.log(
      `This is a ${this.model} by ${this.brand} with a top speed of ${this.topSpeed} and accelerates from 0 to 100 KM/h in ${this.acceleration} seconds`
    );
  }
};

car1.carDetails();
car2.carDetails();

class porscheCar {
  // Constructor
  constructor(carModel, carTopSpeed, accl) {
    this.model = carModel;
    this.topSpeed = carTopSpeed;
    this.acceleration = accl;
  }

  // Default Brand Name
  brand = "Porsche";

  // Display Function

  carDetails() {
    const result = `This is a ${this.model} by ${this.brand} with a top speed of ${this.topSpeed} and accelerates from 0 to 100 KM/h in ${this.acceleration} seconds`;

    return result;
  }
}

// Creating new Objects of porscheCar Class

const car1 = new porscheCar("911 GT3", "318 KM/h", "3.4");
const car2 = new porscheCar("718 Cayman GT4 RS", "315 KM/h", "3.4");

porscheCar.prototype.carDetails = function () {
  const result = `You are looking at ${this.brand}'s ${this.model} with a top speed of ${this.topSpeed} and swifts from 1 to 100 KM/h in ${this.topSpeed} seconds.`;

  return result;
};

console.log(car1.carDetails());
console.log(car2.carDetails());

// Mercedes Benz Example

class mercedesCar extends porscheCar {
  constructor(carModel, carTopSpeed, accl) {
    super();
    this.model = carModel;
    this.topSpeed = carTopSpeed;
    this.acceleration = accl;
    this.brand = "Mercedes";
  }
}

const mb1 = new mercedesCar("300 SLR", "290 km/h", "7.7", "1955");
console.log(mb1.carDetails());

// Proto and Prototype

function createBenz(modelName, brandName, engine, releaseYear) {
  this.model = modelName;
  this.brand = brandName;
  this.engine = engine;
}

const mb2 = new createBenz("S-Class S680", "Mercedes Maybach", "V12");

console.log(mb2);

const mb3 = new createBenz(
  "C-Class C250",
  "Mercedes Benz",
  "2.2-liter BlueEfficiency"
);

createBenz.prototype.returnDetails = function () {
  return `You are looking at ${this.brand}'s ${this.model} with a ${this.engine} engine`;
};

createBenz.prototype.greetCustomer = function () {
  return `Welcome to Mercedes Benz 👋`;
};

console.log(mb2);
console.log(mb3);

console.log(mb3.returnDetails());
console.log(mb3.greetCustomer());

// Creates the constructor function
function porscheCar() {}

// Creates the methods inside the Prototype
porscheCar.prototype.displayBrand = function () {
  console.log(`Brand: ${this.brand}`);
};

// Creates an Instance of the constructor
const car1 = new porscheCar();

// Creates the unique property for each object
car1.brand = "Porsche";

// Invokes the method through the Prototype
car1.displayBrand();

class atomicHabits {
  author = "James Clear";
  bookName = "Atomic Habits";

  constructor(rating, comments) {
    this.ratingOfBook = rating;
    this.extraComments = comments;

    this.displayProperties = function () {
      return `The ${this.bookName} book by ${this.author} has a rating of ${this.ratingOfBook} and "${this.extraComments}" extra comment(s).`;
    };
  }
}

const reader1 = new atomicHabits("4.8", "N/A");
const reader2 = new atomicHabits("4.95", "One of the best productivity books!");

console.log(atomicHabits);
console.log(reader1);
console.log(reader2);

console.log(reader1.displayProperties());
console.log(reader2.displayProperties());

reader1.displayProperties = function () {
  return `Changed without prototype! This will not change reader2 object!`;
};

console.log(reader1.displayProperties());
console.log(reader2.displayProperties());
*/
