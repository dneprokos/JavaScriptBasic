"use strict";

walk();

//Function declaration. We can call it before it was defined. All declarations goes first. It's called HOISTING 
/**
 * Prints 'Walk' message into the console
 */
function walk(){
    console.log('Walk');
}


//Anonymous Function expression. We cannot call it before it was defined.
let run = function() {
    console.log('Run');
};

//Named Function expression. We cannot call it before it was defined.
let jump = function jump() {
    console.log('Jump');
};

run();
jump();


////Arguments
function sum(a, b){
    console.log(arguments); //It will log all arguments passed. We can loop though arguments as an array 
    return a + b;
}

console.log(sum(1)) // Will get NAN (Not a number)
console.log(sum(1, 2, 3, 4, 5)) // It's valid. Result will be 3


//Rest operators
function restSum(...args){
    console.log(args); //Real arrays. We can use reduce
    return args.reduce((a, b) => a + b);
}

//Rest parameter should go last
function sumWithDiscount(discount, ...args){
    let total = args.reduce((a, b) => a + b);
    return total * (1 - discount);
}

//Default parameters. The same as in C#
function totalInterest(principal, rate = 3.5, years = 5){
    return principal *  rate / 100 * years;
}

////Getters and Setters. And Try catch 
const person = {
    firstName: 'Kostiantyn', 
    lastName: 'Teltov',

    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value){

        if (typeof value !== 'string') 
        throw new Error('Value is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try{
    person.fullName = null;
}
catch(e){
    alert(e);
}


////Local and Global scope
{
    const msg = 'Hi';
    console.log(msg); 
} // When we decalred with const or let the scope is limited only to block where it was defined

const msg = 'Bye' // Global scope. Should avoid to define global consts. Bad practice. 


//Let vs Var keyword
function start(){
    for(let i = 0; i > 5; i++){
        console.log(i++); //i is only accesible in scope of for block
    }
}

function stop(){
    for(var i = 0; i > 5; i++){
        console.log(i++);
    }
    console.log(i); //Var is accesible in whole function
}

//Global Var keyword attaches object to Window. YOu can invoke it Window.object
//Global Let does not attach object to Window


////This keyword
const video = {
    title: 'a', 
    play(){
        console.log(this);
    }
}

video.play(); //this references object because play is a method of the object

video.stop = function(){
    console.log(this) 
}

video.stop(); //Still references object



function playVideo(){
    console.log(this);
}

playVideo();

function Video(title){
    this.title = title;
    console.log(this);
}

const v = new Video('b'); //If you call with new perator than this is reference a new object (v)