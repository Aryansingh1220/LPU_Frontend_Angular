// default export --  default import (you could change the name of the information)
//there is only one deafult export in a js file

// name export (you have to use the same name of the information for exporting)

export let ageofAryan = 21

let ageofAyush = 22
export { ageofAyush }

// export default ageofAryan

// export default ageofAyush;// you can only have one default export in a js file

function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

export { add, sub }
