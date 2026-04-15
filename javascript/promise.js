// promise is an object that represents the eventual completion (or failure)
//  of an asynchronous operation and its resulting value.

let promise = new Promise((resolve, reject) => {
  resolve('Task completed successfully')

  // reject('Having issues so promise is rejected')
})

console.log(promise)

promise
  .then((data) => {
    console.log(data)
  })
  .catch((errorMessage) => {
    console.log(errorMessage)
  })
  .finally(() => {
    console.log('I am not relay on the settlement of promises.')
  })
