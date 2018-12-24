//If-else. The same as C#/Java


//Switch case. The same as C#/Java


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
    if (i === 9) break;

    if (i % 2 === 0){
        i++;
        continue;
    }


    console.log(i);
    i++;
}


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