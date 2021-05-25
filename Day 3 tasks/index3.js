"use strict";
const yearToday = new Date();
const year = yearToday.getFullYear();
console.log(year);

let myName = "Achoka";

myName.length > 7
  ? console.log(`${myName} is long`)
  : console.log(`${myName} is short`);

if (myName.length > 7) {
  console.log(`${myName} is long`);
} else {
  console.log(`${myName} is short`);
}

const userAge = 2021 - Number(prompt("When were you born?"));
console.log(userAge);
if (userAge >= 18) {
  console.log(`You are ${userAge}. You are old enough to drive`);
} else {
  console.log(
    `You are ${userAge}. You will be allowed to drive after ${
      18 - userAge
    } years`
  );
}

const now = new Date();
const years = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`today is ${years}-${month}-${date} ${hours}:${minutes}`);
