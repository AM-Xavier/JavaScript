// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!

// Stored in a variable
const greet1 = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet1("Bob"));

// Arrow functions: Shorter syntax
const greet2 = (name) => `Hello, ${name}!`;

console.log(greet2("Charlie"));

const sqrt = n => Math.sqrt(n);

console.log(sqrt(16))

// Default parameters
function greet3(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet3()); // Hello, Guest!

// Multiple parameters
function add(a, b) {
    return a + b;
}

console.log(add(3, 4)); // 7
