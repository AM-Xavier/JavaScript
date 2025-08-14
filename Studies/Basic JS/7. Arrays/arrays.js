// Initial array
let arr = [1, 2, 3];
console.log("Start:", arr);

// Adding and Removing Elements

// push - add to end
arr.push(4);
console.log("push(4):", arr); // [1, 2, 3, 4]

// pop - remove last
arr.pop();
console.log("pop():", arr); // [1, 2, 3]

// unshift - add to start
arr.unshift(0);
console.log("unshift(0):", arr); // [0, 1, 2, 3]

// shift - remove first
arr.shift();
console.log("shift():", arr); // [1, 2, 3]

// splice - remove and/or add at position
arr.splice(1, 1, "x", "y"); // remove 1 element at index 1, add "x" and "y"
console.log("splice(1, 1, 'x', 'y'):", arr); // [1, 'x', 'y', 3]


// Searching and Checking

let nums = [5, 10, 15, 20, 15];

// includes - check if value exists
console.log("includes(10):", nums.includes(10)); // true
console.log("includes(99):", nums.includes(99)); // false

// indexOf - first occurrence
console.log("indexOf(15):", nums.indexOf(15)); // 2

// lastIndexOf - last occurrence
console.log("lastIndexOf(15):", nums.lastIndexOf(15)); // 4

// find - first element matching condition
let found = nums.find(n => n > 12);
console.log("find(n > 12):", found); // 15

// findIndex - index of first match
let foundIndex = nums.findIndex(n => n > 12);
console.log("findIndex(n > 12):", foundIndex); // 2
