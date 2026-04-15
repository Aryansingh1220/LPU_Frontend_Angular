// global scope=var
// summary global scope is accessible anywhere in the code
// function scope=var,let const
// function scope is only accessible within the function where it is defined
// block scope=let,const
// block scope is only accessible within the block where it is defined

var message = 'Heyyy'
function sum() {
  var value1 = 1
  var value2 = 2
  let value3 = 3
  const value4 = 4
}

sum()
console.log(message)

if (true) {
  var message2 = 'Push all the task to git'
  const message3 = ''
}
