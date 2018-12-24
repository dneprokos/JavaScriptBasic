////Adding elements
const numbers = [3, 4];

//End
numbers.push(5, 6)
console.log(numbers);

//Begining
numbers.unshift(1, 2);
console.log(numbers);

//Middle
numbers.splice(2, 0, 'a', 'b')
console.log(numbers);

////FInd elements

//Find primitives
numbers.push(1);
console.log(numbers);
console.log(numbers.indexOf(1)); //returns first index or -1 if it does not exists
console.log(numbers.lastIndexOf(1)); //returns last index or -1 if it does not exists
console.log(numbers.includes(1, 1)); //Second argument is a start search index 

//Find reference
const cources  = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]

const cource = cources.find(function(cource){
    return cource.name === 'a';
});

const courceIndex = cources.findIndex(function(cource){
    return cource.name === 'b';
});

console.log(cource);
console.log(courceIndex);

//Arrow functions 
const arrowCource = cources.find(cource => cource.name === 'a');
console.log(arrowCource);


////Remove elements

//End 
numbers.pop();
console.log(numbers);

//Begining
numbers.shift();
console.log(numbers);

//Middle
numbers.splice(2, 1);
console.log(numbers);

//Remove all elements
//Solution 1: We can reasign it to new empty array. But it should not be const and if you don't have another references to this array. 
//Solution 2: Most coolest
numbers.length = 0;
console.log(numbers);

//Solution 3: 
numbers.splice(0, numbers.length);

//Solution 4: Not recomended due to possible performance issues
while(numbers.length > 0)
    numbers.pop;


//Combining and slicing arrays
const firstA = [1, 2, 3];
const secondA = [4, 5, 6];


let combined = firstA.concat(secondA);
console.log(combined);

let sliced = combined.slice(2, 4);
console.log(sliced);

//Spread operator
const thirdA = [1, 2, 3];
const fourthA = [4, 5, 6];

let newCombined = [...thirdA, 'a', ...fourthA, 'b'];
console.log(newCombined);

let newSlice = [...newCombined];

//Iterating with foreach 
newSlice.forEach((number, index) => console.log(index, number));

//Join
newSlice.join(',');
console.log(newSlice); 

//Split
let message  = 'This is a test message';
const parts  = message.split(' ');
console.log(parts);

////Sorting arrays
const unsortedNumbers = [2, 3, 1];

//Asc order
const sortedNumbers = unsortedNumbers.sort();
console.log(sortedNumbers);

//Desc order
sortedNumbers.reverse();

//Objects sort
const tests = [
    {id: 1, name: 'BetaTest'}, 
    {id: 2, name: 'AlphaTest'}
]

tests.sort(function(a, b){
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
})

console.log(tests);

//Every. Looks like it's equivalent of ALL in LINQ
sortedNumbers.every(function(value){
    return value >= 0;
})

//Some. Looks like it's equivalent of Any in LINQ
sortedNumbers.some(function(value){
    return value >= 0;
})

//Filtering array
const filtered = sortedNumbers.filter(function(value){
    return value < 3;
})


////Mapping array
const items = filtered.map(function(value){
    return '<li>' +value + '</li>';
})
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

////Reducing array
const prices = [1, -1, 2, 3];

//let sum = 0;
//for(let n of prices)
//    sum += n;

prices.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
}, 0);  //Second argument is initial value of accumulator


////Excercise Movies
const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
]

//Get all movies in 2018 with rating > 4. Sort them by rating desc. Print their title

 const sortedMovieTitles = movies
 .filter(m =>m.year === 2018 && m.rating > 4)
 .sort((a, b) => a.rating - b.rating)
 .reverse()
 .map(m =>m.title);

 console.log(sortedMovieTitles);

 



