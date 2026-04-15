function parent() {
  return function child() {
    return 'Hello from child'
  }
}

let answer = parent()()
console.log(answer)

function parent1(value1, value2) {
  return function child1(value3, value4) {
    return value3 + value4 + value1 + value2
  }
}

let catchValue = parent1(10, 20)(30, 40)
console.log(catchValue)

// nested function
// summary - A nested function is a function defined inside another function.
// The inner function has access to the variables and parameters of the outer function,
// allowing for encapsulation and modular code design. Nested functions can be used to create closures,
//  which enable the inner function to retain access to the outer function's scope even after the outer
// function has finished executing. This can be useful for creating private variables and functions,
// as well as for organizing code in a more structured way.
