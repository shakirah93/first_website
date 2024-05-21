console.log("I am testing out the console");

let firstName = "Sakirat"; // declaring a variable

firstName = "Rayyan"; // reassigning a variable

const a = 85;
let b = 15;
let c = a + b;

console.log(c);

b = 25;
c = a + b;
console.log(c);

/*
var $firstName;

var first_name;

var name1;
var name2;
var _first_name;

$firstName = "Lorraine";
*/

// creating a function
function sayHey() {
  console.log("Hey");
  console.log(firstName);
}

sayHey(); // call the function

function conversation() {
  sayHey();
  console.log("How are you?");
  console.log("Goodnight!");
}

conversation();

// function with parameter
function greeting(name) {
  console.log("Hello " + name + "!");
}

greeting("Sakirat");
greeting("Varlene");
greeting("Beauty");

function addition(num1, num2) {
  return num1 + num2;
}

addition(1000, -2); // 998
addition(2300, 40000); // 42300

let additionOfTwoNumbers = addition(1000, -2); // 998
console.log(additionOfTwoNumbers);

function newConversation(person, topic) {
  console.log("Hey, " + person + "!");
  console.log("How are you?");
  console.log("Do you like " + topic + "?");
}

newConversation("Shakirah", "programming");
newConversation("Varlene", "HTML");

// function expression
const multiply = function (num) {
  return num * num;
};

console.log(multiply(2));

// local scope: variables created inside a function only works in the function
// you cannot access the myName variable outside of the function
function testing() {
  const myName = "Sakirat Kehinde";
  console.log(myName);
}

testing();

// this will throw an error because the variable cannot be accessed outside of the function
// console.log(myName);

let age = 12;

age = 30;

console.log(age);

// an immediately-invoked function expression
(function() {
  // code to execute
  console.log("running now");
}());


// function expression

/*

const multiply = function (num) {
  return num * num;
};

*/

// an arrow function
const multiply2 = (num) => {
  return num * num;
}

const multiply3 = num => num * num;
