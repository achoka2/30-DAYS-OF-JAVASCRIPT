"use strict";
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

/*let usersAge = prompt("Enter you age:");

if (usersAge >= 18) {
  console.log("You're old enough to drive");
} else {
  console.log(`you should wait for ${18 - usersAge} to be able to drive`);
}*/
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*let yourAge = 30;
let myAge = Number(prompt("Enter your age:"));
if (yourAge > myAge) {
  console.log(`you're ${yourAge - myAge} years younger than me`);
} else if (yourAge === myAge) {
  console.log(`We are equals`);
} else {
  console.log(`you are ${myAge - yourAge} years older than me`);
}*/
/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.*/
/*let a = 3;
let b = 4;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);*/

//let score = Number(prompt("Input your score;"));

/*if (score >= 80 && score <= 100) {
  console.log(`Your Grade is A`);
} else if (score >= 70 && score <= 89) {
  console.log(`Your Grade is B`);
} else if (score >= 60 && score <= 69) {
  console.log(`Your Grade is C`);
} else if (score >= 50 && score <= 59) {
  console.log(`Your Grade is D`);
} else if (score >= 0 && score <= 49) {
  console.log(`Your Grade is E`);
}*/

/*let month = prompt("Which Month of the year is it?");
if (month === "September" || month === "October" || month === "November") {
  console.log("The season is Autumn");
}*/

let day = prompt(`What is the Day Today?`);

switch (day) {
  case "Monday":
    console.log(`Monday is a weekday`);
    break;
  case "Tuesday":
    console.log(`Tuesday is a weekday`);
    break;
  case "Wednesday":
    console.log(`Wednesday is a weekday`);
    break;
  case "Thursday":
    console.log(`Thursday is a weekday`);
    break;
  case "Friday":
    console.log(`Friday is a weekday`);
    break;
  case "Saturday":
    console.log(`Saturday is a weekend`);
    break;
  case "Sunday":
    console.log(`Sunday is a weekend`);
    break;
  default:
    "Am not sure if this are days of the week";
}
