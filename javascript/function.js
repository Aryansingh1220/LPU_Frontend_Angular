// ---------------------- FUNCTION DECLARATION ----------------------

// Definition of function
function greet() {
  console.log('Hello')
}

// Calling the function
greet()

// ---------------------- TYPES OF FUNCTIONS ----------------------

// 1. Parameterized Function (takes inputs)
function add(a, b) {
  return a + b
}
console.log(add(10, 20)) // 30

// 2. Non-Parameterized Function (no inputs)
function sayHi() {
  console.log('Hi')
}
sayHi()

// ---------------------- ARGUMENTS OBJECT ----------------------

function displayListOfAngular() {
  console.log(arguments) // array-like object

  // Different ways to convert arguments → array
  console.log(Array.from(arguments))
  console.log([...arguments])
  console.log(Array.prototype.slice.call(arguments))
  console.log(Array.prototype.slice.apply(arguments))

  // Accessing values
  console.log(arguments[0])
  console.log(arguments[1])
  console.log(arguments[2])
}

displayListOfAngular('ayush', 'aryan', 'navdeep')

// ---------------------- RETURN vs NO RETURN ----------------------

function breakForAngularPeople() {
  console.log('This is a break for Angular people')
}

let result = breakForAngularPeople()
console.log(typeof result) // undefined (no return)

function returnForAngularPeople() {
  console.log('This is a return for Angular people')
  return 'Angular is great!'
}

let result2 = returnForAngularPeople()
console.log(typeof result2) // string

// ---------------------- FUNCTION EXPRESSION ----------------------

let funfuction = function hello(name1, name2) {
  console.log(`Hello ${name1} and ${name2}`)
}

console.log(typeof funfuction) // function
funfuction('Ayush', 'Aryan')

// ---------------------- ANONYMOUS FUNCTION ----------------------

let anonymousFunction = function () {
  console.log('This is an anonymous function')
}

anonymousFunction()

// ---------------------- ARROW FUNCTIONS ----------------------

// Simple arrow function
const arrowFunction = () => 34
console.log(arrowFunction())

// Arrow function returning string
const arrowFunction02 = () => 45 + ' This is a arrow function.'
console.log(arrowFunction02())

let resultFromArrowFunction = arrowFunction02()
console.log('Variable value - ' + resultFromArrowFunction)

// Unary + converts string → number
const arrowFunction03 = () => 45 + +'45'
console.log(arrowFunction03()) // 90

// String + number → concatenation
const arrowFunction04 = () => '45' + 45
console.log(arrowFunction04()) // "4545"

const arrowFunction05 = () => 45 + '45'
console.log(arrowFunction05()) // "4545"

// Single parameter → no parentheses needed
const arrowFunction06 = (value01) => value01
console.log(arrowFunction06('Ayush'))

// ---------------------- ARROW FUNCTION LIMITATIONS ----------------------

const arrowFunction07 = (value01, value02) => {
  console.log(value01)
  console.log(value02)

  // Arrow functions do NOT have their own 'arguments'
  // console.log(arguments); // ReferenceError

  return value01 + ' and ' + value02
}

let resultFromArrowFunction07 = arrowFunction07('Ayush', 'Aryan')
console.log(resultFromArrowFunction07)

// ---------------------- IMPORTANT NOTES ----------------------

// Function Declaration → hoisted
// Function Expression → not hoisted
// arguments → available only in normal functions
// Arrow Function → no arguments, no own 'this'
// Unary + → converts string to number
// String + Number → concatenation

function calculator(valu1, value2, callbackFun) {
  return callbackFun(valu1, value2)
}

let resultofSum = calculator(10, 20, (a, b) => {
  return a + b
})

let resultOfSub = calculator(10, 20, (a, b) => a - b)
console.log(resultOfSub)

console.log(calculator(10, 20, (a, b) => a * b))

console.log(calculator(10, 20, (a, b) => a / b))

console.log(calculator(10, 20, (a, b) => a % b))

console.log(calculator('Hello ', 'World', (a, b) => a + b))

function findDigit(number1) {
  if (number1 === 0) {
    return 0
  }
  return number1 + findDigit(number1 - 1)
}

console.log(findDigit(5))

// Factorial of a number using recursion

function factorial(number1) {
  if (number1 === 0) {
    return 1
  }
  return number1 * factorial(number1 - 1)
}

console.log(factorial(5))
