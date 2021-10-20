"use strict";

//If-else. The same as C#/Java


//Switch case. The same as C#/Java
var s = 2 + 2;

switch (s) {
  case 3:
    console.log( 'Not enought' );
    break;
  case 4:
    console.log( 'Nice shot!' );
    break;
  case 5:
    console.log( 'A lot' );
    break;
  default:
    console.log( 'There is no such value' );
}

//If you remove break, case 4, 5, default will be invoked.
//Also you can group cases in order to invoke the same block of code
/*case 3:                    // (*)
  case 5:                    // (**)
    alert('Неверно!');
    alert('Немного ошиблись, бывает.');
    break;*/

//Type is important

/* var arg = prompt("Введите arg?")
    case '2':
        alert( 'Два' );
        break;

    case 3:
        alert( 'Will never be invoked' );    
*/

//For. The same as C#/Java


//While. Do While. The same as C#/Java


//For in. Use to iterate over properties of the object
const person = {
    name: 'Kostas',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);


//For-of. Use to iterate over elements of array
const colors = ['Red', 'Blue', 'Green']

for (let color of colors)
    console.log(color);


//Break, Continue
let i = 0;

while (i <= 10){
    if (i === 9) break; //Finishes a loop

    if (i % 2 === 0){
        i++;
        continue; //Jumps to the next iteration
    }

    console.log(i);
    i++;
}

//Out from a few loops level
outer: for (var o = 0; o < 3; o++) {

    for (var j = 0; j < 3; j++) {
  
      var input = prompt('Value in cordinates '+i+','+j, '');
  
      // if cancel input or empty strong -
      // finish a loop
      if (!input) break outer; // (*)
  
    }
  }
  console.log('Ready!');


//Exercise. Return max of the two numbers
let maxNumber = max(3, 2);
console.log(maxNumber);

function max(number1, number2){
    return number1 > number2? number1:number2;
}

//Exercise FizzBuzz
//If number Divisible by 3 =>Fizz
//If number Divisible by 5 =>Buzz
//If number Divisible by both 3 and 5 =>FizzBuzz
//If number Is not divisible by both 3 and 5 =>Return this number
let fizzBuzzResult = fizzBuzz(15);
console.log(fizzBuzzResult);

function fizzBuzz (value){
    if (typeof(value) !== 'number')
        return typeof(value);
    else if (value % 3 === 0 || value & 5 === 0)
        return 'FizzBuzz';
    else if (value % 3 === 0)
        return 'Fizz';
    else if (value & 5 === 0)    
        return 'Buzz';
    else return value;    
}

//Exercise Prime numbers
//Prime (whoses who only factors 1 and itself)
//Composite - other 

//Invoke function
console.log(showPrimes(10));

//Main function
function showPrimes(limit){
    for (let number = 2; number <= limit; number++)        
        if (isPrime(number)) console.log('Prime number is: ', number);
}

//Encapsulated function
function isPrime(number){        
        for(let factor = 2; factor < number; factor++)
            if (number % factor === 0)
                return false;        
        return true;
}

let a = 0;
while (++s < 5) console.log("Case a = 0, (++a < 5): " + +s );

let b = 0;
while (b++ < 5) console.log( "Case b = 0, (b++ < 5): " + +b );

