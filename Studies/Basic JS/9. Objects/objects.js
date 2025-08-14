// Object literal
const person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

console.log(person)

// Using a constructor function
function Person(name, age) {
    return{
    name,
    age
};
}

const person1 = Person('Alessandro', 25)

console.log(person1)