"use strict";

//foreach
var foreachArr = ["Apple", "Orange", "Pear"];

foreachArr.forEach(function(item, i, arr) {
  console.log( i + ": " + item + " (array:" + arr + ")" );
});


//filer
var filerArr = [1, -1, 2, -2, 3];

var positiveArr = filerArr.filter(function(number) {
  return number > 0;
});

console.log( positiveArr );

//map
var mapArr = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = mapArr.map(function(name) {
  return name + " word consist of " + name.length + " letters";
});

console.log(nameLengths);

//every/some
var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log( arr.every(isPositive) ); // false, not all positive
console.log( arr.some(isPositive) ); // true, contains at least one positive

//reduce
var forReduce = [1, 2, 3, 4, 5]

// for each element of an array call a function,
// preliminary result pass as firts argument
var result = forReduce.reduce(function(sum, current) {
  return sum + current;
}, 0);

console.log( result ); // 15

