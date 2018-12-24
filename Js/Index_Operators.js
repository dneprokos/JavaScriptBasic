//Calculation a value
function square(number){
    return number * number;
}

let squareNumber = square(2);
console.log('Square of 2 equals to: ' + squareNumber);

//Equality operators
console.log('compare 1 number with 1 string shoudl return: ', 1 === '1') //Strict equality. Will return false
console.log('compare 1 number with 1 string shoudl return: ',  1 == '1') //Lose equality. Will return true


//Tiernary operator(Conditional operators)
let points = 110;
let type = points > 100 ? 'gold': 'silver';
console.log('Customer type is: ' + type);

//Non boolean logical operators

//&& logical AND. WIll be true only if all values are true
console.log('All values true, is equals to: ', true && true);
console.log('Some value is false , is equals to: ', false && true);

// || logical OR
//If any value is true than it's true
console.log('Any value true, is equals to: ', false && true);
console.log('All values are false , is equals to: ', false && false); 

// ! logical NOT
console.log('Not true is equals to: ' + !true);
console.log('Not false is equals to: ' + !false);


//Logical operators with Not Booleans
console.log('Expected result is: Test. Actual Result is: ', false || 'Test');

//Falsy(false)
//undefined
//null
//0
//false
//''
//NAN

//Anything that is not Falsy -> Truthy
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log('User has color, Then current color equals to: ', currentColor);
userColor = '';
currentColor = userColor || defaultColor;
console.log('User has no color, Then current color equals to: ', currentColor);

//Bitwise OR | 
//Bitwise AND &

//Exercise
let a = 'blue';
let b = 'red';

console.log('before swap a = ', a)
console.log('before swap b = ', b)

let c = a;
a = b;
b = c;

console.log('after swap a = ', a)
console.log('after swap b = ', b)