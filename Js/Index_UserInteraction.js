"use strict";

//We are already familiar with alert method

//"prompt" takes two arguments. First - text message, second - default value (undefined if it was not passed)
//It shows text field and two buttons: 'OK' and 'CANCEL'.
var years = prompt('How old are you?', 100);
alert('You are ' + years + ' years old!')

//'confirm' shows a window with question and two buttons: OK и CANCEL.
var isAdmin = confirm("Are you - admin?");
alert( isAdmin );