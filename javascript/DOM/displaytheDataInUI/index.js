let table = document.getElementById('table')
console.log(table)

let api01 = 'https://api.escuelajs.co/api/v1/products'
async function fetchData() {
  let response = await fetch(api01)
  let data = await response.json()
  console.log(data)

  // console.log(tr01)

  for (let i = 0; i < data.length; i++) {
    let tr01 = document.createElement('tr')
    tr01.innerHTML = ` <td> ${data[i].id} </td>
      <td> ${data[i].title} </td>
      <td> ${data[i].price} </td>
      <td> ${data[i].slug} </td>
      <td> ${data[i].description} </td>
      `

    table.append(tr01)
  }
}

fetchData()
