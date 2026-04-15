// var text = 'ABCDE1234R'

// var patt = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i // ^ - start of string
// // [A-Z]{5} - 5 uppercase letters
// // [0-9]{4} - 4 digits
// // [A-Z]{1} - 1 uppercase letter
// // $ - end of string

// var valid = patt.test(text)

// console.log(valid)

var pat = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
function validatePan() {
  let pan = document.getElementById('pan').value
  if (pat.test(pan)) {
    document.getElementById('result').innerHTML = 'Valid PAN'
    document.getElementById('result').style.color = 'green'
    document.getElementById('pan').style.backgroundColor = 'green'
  } 
  else {
    document.getElementById('result').innerHTML = 'Invalid PAN'
    document.getElementById('result').style.color = 'red'
    document.getElementById('pan').style.backgroundColor = 'red'
    }
}
