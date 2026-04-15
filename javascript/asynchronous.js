// setInterval and set timeout
//setInterval(the task,time)

let count = 0
let interval = setInterval(() => {
  console.log('Hello')
  count++
  if (count == 3) {
    clearInterval(interval)
  }
}, 2000)

console.log('I am first')
console.log('Do it now major')

// clearInterval(interval);

// delay any task
setTimeout(() => {
  console.log('Chl ho gya task')
}, 4000)
