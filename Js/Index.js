//Defines modern standart of Js. Doesn't work in IE-9
"use strict";
//Variables
//Cannot be reserved keywords
//Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are case-sensitive 
let firstName = 'Kostiantyn';
console.log(firstName);

let message = firstName;
alert(message + ' says hello!');

//Constant
//System will throw exception if we will try to change it
const interestRate = 0.3;

//Primitive types/Value types
let lastName = 'Teltov'; //String Literal
let age = 30 //Number Literal
let isApproved = true //Boolean Literal
let middleName; //undefined
let $undefined = undefined; //undefined
let selectedColor = null //null

//Get symbol of string
console.log('First symbol of', lastName, 'is', lastName.charAt(0));

//Rebuild string
let rebuildString = "Manchester United";
rebuildString = rebuildString[0] 
                + rebuildString[1] 
                + rebuildString[2]
                +" " + rebuildString[11]
                + rebuildString[14]
                + rebuildString[16]
console.log('Rebuild string equals to', rebuildString.toUpperCase());

let str  = "This is my string";
console.log('Using substring method with end: ', str.substring(0,1)); //Will take only first symbol
console.log('Using substring method without end: ', str.substring(2)); //Will take from defined to the end
console.log('Using substr: ', str.substr(2,4)); //Will take string from 2 to 4. If there is no second arg then till the end.
console.log('Using slice with negative value: ', str.slice(-2));
console.log('Using slice with positive and negative values: ', str.slice(1, -1)); //Takes from pos 1 to 1 from the end  


//Special number values
let infinity = 1/0 //Infinity
let nan = 'test' * 2 //NaN, exception

//isFinite(n) checks if value not NaN, Infinity и -Infinity,
console.log('Is finite of 2 ', isFinite(2));
console.log('Is finite of NaN ', isFinite(NaN));

//NaN is not equals to NaN
if (NaN == NaN) alert( "==" ); // Will not be shown

//Transform to number. But value should not contain any except numbers
var s = "12.34";
console.log('String was transformed to number: ', +s ); // 12.34

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

//typeOf returns datatype
typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof {} // "object"

typeof null // "object"  (1)

typeof function(){} // "function"  (2)






