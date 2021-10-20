"use strict";
//New date
let now = new Date();
console.log('Current date: ', now);

//New date millseconds
/*Creates object Date, that value equals quantity of millseconds 
(1/1000 of second), has passed from 1 january 1970 GMT+0.*/
let Jan02_1970 = new Date(3600 * 24 * 1000);
console.log( Jan02_1970.toUTCString() );


//You can get date components e.g 
//getFullYear() Get year (4 digits). Don't use getYear(). That's not javascript standart
//getMonth() Get month, from 0 to 11.
//getDate() Get month date number, from 1 to 31.
//getHours(), getMinutes(), getSeconds(), getMilliseconds()

/* getDay() Get number of week day. 
In JavaScript a week starts from Sunday, 
so, result will be number from 0(Sunday) to 6(Saturday). */

/*
Also exists UTC-types of these methods, that returns day, 
month, year and etc. for zone GMT+0 (UTC): getUTCFullYear(), getUTCMonth(), getUTCDay(). 
It means, after "get" inserts "UTC".
*/

// текущая дата
let currentDate = new Date();

// Time in my timezone
console.log('My timezone time is:', currentDate.getHours() + ":" + currentDate.getMinutes() );

// Time in London timezone(GMT+0)
console.log('London timezone time is:', currentDate.getUTCHours() + ":" + currentDate.getUTCMinutes() );


//getTimezoneOffset() Returns diffrence between current timezone time and UTC in minutes.
console.log('Difference between current timezone time and UTC:', currentDate.getTimezoneOffset());


////Set Date
/* You can also set date and time

setFullYear(year [, month, date])
setMonth(month [, date])
setDate(date)
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [, ms])
setMilliseconds(ms)
setTime(milliseconds) (sets full date in milliseconds starting from 01.01.1970 UTC)
All of them also have UTC option
*/

//Date autocorrection
let d = new Date(2013, 0, 32); // 32 January 2013 ?!?
console.log('Autocorrection was applied for 2013, 0, 32. And it equals t0: ', d); // ... no this is 1 February 2013!
