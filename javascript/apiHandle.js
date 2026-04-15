// fetch(api/url)=> bydeafult, it is a get request means to receice/collect data from the server/backend

import axios from 'axios'

let api01 = 'https://api.escuelajs.co/api/v1/products'
function fetchDataFromBackend() {
  let promise = fetch(api01)
  console.log(promise)
  promise
    .then((response) => {
      response.json().then((data) => {
        console.log(data)
      })
    })
    .catch((errormessage) => {
      console.error(errormessage)
    })
    .finally(() => {
      console.log('fetching data from backend is completed')
    })
}
fetchDataFromBackend()

let api02 = 'https://api.github.com/users'
async function getDataFromBackend() {
  let response = await fetch(api02)
  // console.log(response)
  let data = await response.json()
  console.log(data)
}
getDataFromBackend()

//axios - for handling api (modern way)(combine both modern way for handling api and old way for handling api)

let api03 = 'https://api.escuelajs.co/api/v1/products'

async function getDataFromBackendUsingAxios() {
  try {
    let response = await axios.get(api03)
    console.log('Axios Data:', response.data)
  } catch (error) {
    console.error('Axios Error:', error)
  }
}
