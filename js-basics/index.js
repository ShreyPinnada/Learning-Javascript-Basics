//REFERENCE TYPES
// Object
// Array
// Function


//Objects

let person = {
    name: 'Shrey',
    age: 30
};              // {} is called an object literal , there will be key value pairs , the keys are called the properties of the object

console.log(person);

//there are two ways to work with this person object

//first way is DOT NOTATION
person.name = 'Shashank'

console.log(person);
console.log(person.name);

//second way is BRACKET NOTATION
person['name'] = 'Mary';

console.log(person.name);

// so which one is better
// dot notation is cleaner and more consise do it should be your default choice
// but bracket has a use case where we may not know the property eg:-

let selection = 'name';
person[selection] = 'John';

console.log(person.name);