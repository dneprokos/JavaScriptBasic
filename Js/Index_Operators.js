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

//&& logical AND. WIll be true only if all values are true. Return first true false. Has Higher priority then ||
console.log('All values true, is equals to: ', true && true);
console.log('Some value is false , is equals to: ', false && true);
console.log( 1 && 5 ); // 5, because first argument is true
console.log( null && 5 ); // null, because first argument is false
console.log( 5 || 1 && 0 ); // 5, Because && has higher priority than ||
//So, first processing "1 && 0 = 0" and then "||"

// || logical OR
//If any value is true than it's true. Return first true value
console.log('Any value true, is equals to: ', false && true);
console.log('All values are false , is equals to: ', false && false); 
console.log( null || 1 ); // 1, first value which is true

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

//Bitwise operators 

//OR ( | ) 
//AND ( & )
//XOR(Biwise excluding OR) ( ^ )
//NOT ( ~ )
//LEFT SHIFT ( << )
//RIGHT SHIFT ( >> )
//ZERO-FILL RIGHT SHIFT ( >>> )

//Binary operators
var x = 1, y = 3;
alert( y - x ); // 2, binary minus

var a = "my" + "string";
alert( a ); // mystring

//if any of operators is string than result will be transformed to string,
//but it's only applyed to "+" operator
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

//All other works as numbers
console.log( 2 - '1' ); // 1
console.log( 6 / '2' ); // 3

//unary plus
var apples = "2";
var oranges = "3";

console.log( +apples + +oranges ); // 5, plus before variables transforms it to the numbers

//Comparison operators
//logical comparison
console.log( 2 > 1 ); // true, 
console.log( 2 == 1 ); // false
console.log( 2 != 1 ); // true

//string comparison
console.log( 'B' > 'А' ); // true
console.log( 'а' > 'Я' ); // true, case sensetivity is important too.
console.log( 'Банан' > 'Анна' ); // true, comparing first not identical chars
console.log( 'Вася' > 'Ваня' ); // true,  'с' > 'н'
console.log( 'Hello' > 'Hell' ); //true, any char is more than absent char
console.log( "2" > "14" ); //This is not correct. Because 2 > 1, next example will show a correct way
console.log( +"2" > +"14" ); // false,

//strict equality
alert( 0 == false ); //true, because it ignores datatypes
alert( 0 === false ); // false, because they have different data types


//Get a rest
console.log( 5 % 2 ); // 1, 
console.log( 8 % 3 ); // 2, 
console.log( 6 % 3 ); // 0,

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