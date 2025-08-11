// Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000


// Assignment Operators
let x = 5;

x += 2;  // x = 7
x -= 1;  // x = 6
x *= 3;  // x = 18
x /= 2;  // x = 9
x %= 4;  // x = 1
x **= 3; // x = 1 (since 1³ = 1)


// Increment & Decrement Operators
let y = 5;

console.log(y++); // 5 (then y becomes 6)
console.log(y);   // 6

console.log(++y); // 7 (increments first)
console.log(y);   // 7


// Converting strings into numbers
// Using Number()
let str = '42';
let num = Number(str);
console.log(num); // 42

console.log(Number("3.14"));  // 3.14
console.log(Number("abc"));   // NaN

// Using parseInt()
console.log(parseInt("42"));     // 42
console.log(parseInt("42px"));   // 42
console.log(parseInt("3.14"));   // 3
console.log(parseInt("1010", 2));// 10 (binary to decimal)

// Using parseFloat()
console.log(parseFloat("3.14"));    // 3.14
console.log(parseFloat("3.14px"));  // 3.14
console.log(parseFloat("42"));      // 42