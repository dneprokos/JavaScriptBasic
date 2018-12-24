//Variables
//Cannot be reserved keywords
//Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are case-sensitive 
let firstName = 'Kostiantyn';

console.log(firstName);

//Constant
//System will throw exception if we will try to change it
const interestRate = 0.3;

//Primitive types/Value types
let lastName = 'Teltov'; //String Literal
let age = 30 //Number Literal
let isApproved = true //Boolean Literal
let middleName; //undefined
let selectedColor = null //null

//Reference Types

//Objects
let person = {
    firstName: 'Test',
    age: 30
}

person.firstName = "Test1" //Dot Notation
person['firstName'] = "Test2" //Bracket notation. Most commonly used by passing variable

//Arrays (Object type)
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; //dynamically added
selectedColors[3] = 1; // Any type can be added
console.log(selectedColors[0]); 


//Functions (building blocks in js)

//Function declaration
//Performing a task function
function greet(name, testName){
    console.log('Hello ' + name + " " + testName);
}

//Function call
greet('John'); //if paramater value was not added than value will be displayed as undefined








