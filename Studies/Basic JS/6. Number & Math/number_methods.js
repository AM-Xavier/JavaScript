// toFixed(digits)
let num = 5.6789;
console.log(num.toFixed(2)); // "5.68"

// toPrecision(digits)
let num1 = 5.6789;
console.log(num.toPrecision(3)); // "5.68"
console.log(num.toPrecision(2)); // "5.7"

// toExponential(digits)
let num2 = 123456;
console.log(num.toExponential(2)); // "1.23e+5"

// toString([radix])
let num3 = 255;
console.log(num.toString());   // "255"
console.log(num.toString(16)); // "ff" (hexadecimal)
console.log(num.toString(2));  // "11111111" (binary)

// Global Number Functions (Static)
console.log(Number.isInteger(5));       // true
console.log(Number.isInteger(5.5));     // false
console.log(Number.isInteger("5"));     // false (string, not number)

console.log(Number.isNaN(NaN));         // true
console.log(Number.isNaN("hello"));     // false
console.log(Number.isNaN("hello" - 5)); // true ("hello" - 5 gives NaN)

console.log(Number.parseInt("42"));     // 42
console.log(Number.parseInt("42px"));   // 42
console.log(Number.parseInt("ff", 16)); // 255

console.log(Number.parseFloat("3.14"));   // 3.14
console.log(Number.parseFloat("3.14m"));  // 3.14
console.log(Number.parseFloat("10"));     // 10