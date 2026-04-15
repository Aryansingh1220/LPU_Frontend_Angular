// rest operator
// rest operator is used to collect the remaining elements into an array.
// It is denoted by three dots (...)
// Use: Collect multiple values into one
// Works with: Function parameters, destructuring

function receiveValues(para1, para2, para3, ...para4) {
  console.log(para1)
  console.log(para2)
  console.log(para3)
  console.log(arguments)
  console.log(para4)
}

receiveValues(1, 2, 3, 4, 5, 6, 7, 8, 9)

// spread operator
// spread operator is used to spread the elements of an array or object into individual elements.
//  It is denoted by three dots (...)

// Spread Operator (...)
// Use: Expand / unpack values
// Works with: Arrays, objects, function calls

let fruits1 = ['apple', 'banana', 'orange']
let fruits2 = ['grape', 'melon', 'kiwi', ...fruits1]

console.log(fruits2.flat())

let fruits3 = [...fruits1, ...fruits2, 'Pineapple', 'Mango']

let obj1 = { name: 'Aryan', age: 21 }
let obj2 = { work: 'Student', city: 'Bijnor' }
let obj3 = { ...obj1, ...obj2 }
console.log(obj3)

// Destructuring in javascript - Array and Object
// Destructuring is a convenient way of extracting multiple values from data stored in objects and arrays.
// It allows you to unpack values from arrays or properties from objects into distinct variables.
let arr1 = ['Aryan', 'Ayush', 'Navdeep', 'Sneh', 'Shiva']

let info = {
  name: 'Aryan',
  city: 'Bijnor',
  Phone: 8077241665,
}

let [stu1, stu2, stu3, stu4, stu5] = arr1
console.log(stu1)
console.log(stu2)
console.log(stu3)
console.log(stu4)
console.log(stu5)

let [s1, s2, ...s3] = arr1
console.log(s1)
console.log(s2)
console.log(s3)

// Object destructuring
// Object destructuring is a powerful feature in JavaScript that allows you to extract
// values from objects and assign them to variables in a concise and readable way.
// It uses a syntax that resembles object literals, making it easy to understand and use.

let o1 = {
  name: 'Ayush',
  city: 'Bijnor',
  Phone: 9760203187,
}
let { name, city, Phone } = o1
console.log(name)
console.log(city)
console.log(Phone)

let arr = [
  [1, 2],
  [3, 4],
]

// Destructuring
let [[a, b], [c, d]] = arr

console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
console.log(d) // 4

let arrr = [
  [1, 2, 3],
  [4, 5, 6],
  {
    namee: 'Aryan',
    city: 'Bijnor',
    address: {
      state: 'UP',
      pincode: 246701,
    },
  },
  (a, b) => a + b,
]
let [
  [x, y, z],
  [p, q, r],
  {
    namee,
    address: { state, pincode },
  },
  sum,
] = arrr

console.log(x) // 1
console.log(y) // 2
console.log(z) // 3
console.log(namee) // Aryan
console.log(state) // UP
console.log(pincode) // 246701
console.log(sum(10, 20)) // 30
