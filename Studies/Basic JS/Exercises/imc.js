let name = 'Alessandro'
let age = 25
let height = 1.71
let weight = 60

const imc = weight / (height ** 2)

// template strings are the equivalent of f-strings in python.
//`${variable}`

console.log(`${name} is ${age} years old, weights ${weight}kg, is ${height}m tall and have an imc of ${imc}`);