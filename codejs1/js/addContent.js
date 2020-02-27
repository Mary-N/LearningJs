/* This script displays a greeting to the user
based upon current time. it is an example from the 
Javasrcipt and JQuery book */

var today = new Date(); // create a new date
var hourNow = today.getHours(); // find the current hour
var greeting;

// display the appropriate greeting based on the current time
if (hourNow > 18) {
    greeting = 'Good evening!';     
} else if (hourNow > 12){
    greeting = 'Good afternoon!';
} else if (hourNow > 0){
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');