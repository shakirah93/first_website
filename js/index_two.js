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

// extends means inheriting all the properties and methods from another class
class Dog extends Animal {
  constructor(eyes, legs, mouth, breed) {
    // Call the constructor that is coming from the Animal class
    super(eyes, legs, mouth);
    this.breed = breed;
  }

  bark() {
    console.log("I am barking");
  }
}

const dog1 = new Dog(2, 4, 1, "German Shepherd");
console.log(dog1.eyes);
dog1.getFeatures();
dog1.bark();

// creating a class Component in react

class ClickButton extends React.Component {
  constructor(props) {
    // this allows us to use properties coming from React.Component
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    if (this.state.clicked) {
      return "Nothing here yet. Change this text to add more info";
    }
    return React.createElement(
      "button",
      {
        id: "click-button",
        className: "btn",
        style: {
          backgroundColor: "#3393e4",
          color: "#fff",
          border: "0",
          padding: "10px 20px",
          fontWeight: "bold",
          borderRadius: "5px",
          fontSize: "14px",
        },
        onClick: () => this.setState({ clicked: true }),
      },
      "Click to Reveal"
    );
  }
}

/* Another class component */
class TestComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      {},
      React.createElement("p", {}, "This is a paragraph")
    );
  }
}

class H1Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "h1",
      {
        style: {
          color: "green",
          fontSize: "30px",
        },
      },
      "This is a  heading text"
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(H1Component), domContainer);

/*
React.createElement(
  type, //type of element you want to create
  [props], // this includes styles, events, id, className
  [...children] // this specifies what should between the opening tag and closing tag of an element 
)
<button id="click-button" class="btn" style="background: red" onclick="">Click to Reveal</button>
*/
{
  /* <div>
  <p>This is a paragraph</p>
</div>; */
}
