"use strict";

// define the Animal Class
class Animal {
  // adding the properties of the class
  constructor(eyes, legs, mouth) {
    this.eyes = eyes;
    this.legs = legs;
    this.mouth = mouth;
  }

  // get features of an animal (function or method)
  getFeatures() {
    console.log("I have " + this.eyes + " eyes and " + this.legs + " legs");
  }
}

// an object
const animal1 = new Animal(2, 4, 1);
const animal2 = new Animal(2, 2, 1);

console.log(animal1.eyes);
console.log(animal2.legs);
animal2.getFeatures();
animal1.getFeatures();
