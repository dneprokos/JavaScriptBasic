//Object example
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: false,
    draw: function(){
        console.log('Draw object example');
    }
};

circle.draw(); //method


//Factory functions
function CreateCircle(radius, location, isVisible){
    return {
        //If property name equals to parameter, 
        //we can remove parameter assign. See example 
        radius, //Equals to radius: radius
        location, //Equals to location: location,
        isVisible, //Equals to isVisible: isVisible,
        draw() {
            console.log('Draw as Factory function');
        } 
    };
}

const circle2 = CreateCircle(1, 1, true);
console.log(circle2.draw());


//Constructor functions
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw as Constructor function');
    }
}

const circle3 = new Circle(2);
console.log(circle3.draw());

//Dynamic Nature of Objects 
circle2.color = 'Red'; //Add new property
console.log(circle2);

//Constructor
// new String(), but we use '' or ""
// new Boolean()
// new Number()

//Functions in Javascript are Objects


//Value types| Reference Types
//Number     | Object  
//String     | Function 
//Boolean    | Array
//Symbol     |
//Undefined  |
//Null       |

//Primitive example 
let x = 10;
let y = x;

x = 20;

console.log('Primitive y value: ' + y);

//Object example
let x1 = {value: 10};
let y1 = x1;

x1.value = 20;

console.log('Object y value: ' + y1.value);

//Enumerating properties
for (let key of Object.keys(circle3)){
    console.log(key);
}

if ('radius' in circle3) console.log('yes')

//Copy object
const oldSchoolCopy = {};

//Old school method
for(let key in circle)
    oldSchoolCopy[key] = circle[key];

console.log(oldSchoolCopy);    

//Copy object with assign
const assignCopy = Object.assign({color: 'red'}, circle);
console.log(assignCopy);

//Copy with spread
const spreadCopy = { ...circle };
console.log(spreadCopy);

//Math object

//String object new String('Hello world') - it's object type

//Template literals
const value = 'first';
const message = `this is my 
'${value}' message`;
console.log(message);

//Date object
const now = new Date();
const stringDate = new Date('May 11 2018 09:00');
const numbersDate = new Date(2018, 4, 11, 9);

now.setFullYear(1986);

console.log(now.toISOString());
console.log(stringDate);
console.log(numbersDate.toTimeString());

//Remove property
let testPerson = {};
testPerson.name = 'John Rambo';
testPerson.age = 25;

delete testPerson.age
console.log(testPerson);


//Count number of object properties
let objForCount = {
    name: 'Test',
    age: 30,
    isReady: true
}

var counter = 0;

for (const key in objForCount) {
    counter++;
}

console.log('Current properties count is: ', counter);


