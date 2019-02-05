"use strict";

//STRING TRANSFORM
var a = true;
console.log( a ); // "true"

//obvious/explicit transform 
console.log( String(null) === "null" ); // true
console.log( true + "test" ); // "truetest". Works only with + if one of an arguments is string
console.log( "123" + undefined ); // "123undefined". Works only with + if one of an arguments is string

//NUMBER TRANSFORM
var a = +"123"; // 123
var a = Number("123"); // 123, the same as above

//undefined    |	NaN
//null	       |  0
//true / false |	1 / 0
//String	   | Space boundary symbols cut. Further, 
                //if (string is empty), then 0, 
                //OR if (string is not empty), then reads number, 
                //if exception then result is NaN.

//string example
console.log( +"   \n  123   \n  \n" ); // 123

console.log( +true ); // 1
console.log( +false ); // 0

console.log( "\n0 " == 0 ); // true

console.log( "\n" == false );
console.log( "1" == true );

//Special symbols
//undefined | NaN
//null	    | 0

//null
console.log( null >= 0 ); // true, because null transforms to 0
console.log( null > 0 ); // false (not greater), because null transforms to 0
console.log( null == 0 ); // false (and not equals), because == processes null in a special way.

//undefined
console.log( undefined > 0 ); // false, because undefined -> NaN
console.log( undefined == 0 ); // false, because ist's undefined (without transform)
console.log( undefined < 0 ); // false, because undefined -> NaN

//It's better do not use special symbols with > >= < <=
//Use variable-numbers or transform to explicit number

//LOGICAL TRANSFORM
//if(value)

//Table of transformation
//undefined, null |	false
//Numbers	      | All true, except 0, NaN -- false.
//Strings	      | All true, except empty string "" -- false
//Objects	      | Always true


//example
console.log( !!"0" ); // true
console.log( !!" " ); // any not empty string, even with spaces - true!
console.log( 0 == "\n0\n" ); // true, because number transform
if ("\n0\n") {
    console.log( "true, not like 0" );
}

//Conclusion:

// JavaScript contains 3 types of transformation:

//String: String(value) – in a string context or sum with a string. Works explicidly.
//Number: Number(value) – in a number context, including unary plus +value. Happens when compare diffrent types, except strict equality.
//Logical: Boolean(value) – in a logical context, also can do in a double Not: !!value.

