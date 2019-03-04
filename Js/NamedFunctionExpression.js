"use strict";

//Usual function
var f = function(name) { /* function body */ };

//Named function experession
var f = function sayHi(name) { /* function body */ };

//Name (sayHi) is available only inside of the function (f).

var f = function sayHi(name) {
    alert( sayHi ); // Inside of function - visible (it will print the code)
  };

//alert( sayHi ); // outside - not visible (exception: undefined variable 'sayHi')


//Also you cannot override NFE
/*
var test = function sayHi(name) {
    sayHi = "тест"; // override attempt
    alert( sayHi ); // function... (override is failed)
};*/
  
//test();

//Example:
function f(n) {
    return n ? n * f(n - 1) : 1;
};
  
alert( f(5) ); // 120