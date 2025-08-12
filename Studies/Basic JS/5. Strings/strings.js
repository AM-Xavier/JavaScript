// Basic strings properties
let text = "Hello World";
console.log(text.length); // 11
console.log(text[0]);     // 'H'

// Case conversion
let msg = "JavaScript";
msg.toUpperCase(); // "JAVASCRIPT"
msg.toLowerCase(); // "javascript"

// Finding stuff
let phrase = "The quick brown fox jumps";
phrase.indexOf("quick");    // 4
phrase.lastIndexOf("o");    // 17
phrase.includes("fox");     // true
phrase.startsWith("The");   // true
phrase.endsWith("jumps");   // true

// Extracting parts
let str = "JavaScript";
str.slice(0, 4);    // "Java"
str.substring(4, 10); // "Script"
str.substr(4, 6);   // "Script" (deprecated but still works)

// Replacing
let greet = "Hello World";
greet.replace("World", "JS");          // "Hello JS"
greet.replace(/world/i, "JavaScript"); // "Hello JavaScript"

// Splitting & joining 
let csv = "red,green,blue";
let arr = csv.split(","); // ["red", "green", "blue"]
arr.join(" | ");          // "red | green | blue"