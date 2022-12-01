/*
//1
console.log("I'm printing to console!");

//2
let name = prompt('What is your name? ');
document.querySelector('#ex2').innerHTML = 'Hello, ' + name + '!';

//3

let num1 = parseInt(prompt("Input the 1st number:"));
let num2 = parseInt(prompt("Input the 2nd number:"));
let num3 = parseInt(prompt("Input the 3rd number:"));
let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = (num1 + num2 + num3)/3;
document.querySelector('#ex3a').innerHTML = "Sum of the numbers: " + sum;
document.querySelector('#ex3b').innerHTML = "Product of the numbers: " + product;
document.querySelector('#ex3c').innerHTML = "Average of the numbers: " + average;

//4
let Name = prompt("What is your name? ");
let draw = Math.floor(Math.random() * 4) + 1;
let room;
switch(draw){
  case 1:
    room = "Daredevil";
    break;
  case 2:
    room = "Slytherin";
    break;
  case 3:
    room = "Hufflepuff";
    break;
  case 4:
    room = "Ravenclaw";
    break;
}
document.querySelector('#ex4').innerHTML = Name + ', you are ' + room +'.';

//5
let year = parseInt(prompt("Input a year: "));
if (year % 4 === 0 && year % 100 !== 0){
  document.querySelector('#ex5').innerHTML = year + " is a leaf year";
}
else if (year % 400 === 0){
  document.querySelector('#ex5').innerHTML = year + " is a leaf year";
}
else {
  document.querySelector('#ex5').innerHTML = year + " is not a leaf year";
}

//6
let consol = confirm("Should I calculate the square root?");
if (consol){
  let num = parseInt(prompt("Input a number to calculate sqrt: "));
  if (num < 0){
    document.querySelector('#ex6').innerHTML = "The square root of a negative number is not defined";
  }
  else {
    document.querySelector('#ex6').innerHTML = "Square root of " + num + " is: " + Math.sqrt(num).toFixed(4);
  }
}
else {
  document.querySelector('#ex6').innerHTML = "The square root is not calculated.";
}

//7
let numDice = parseInt(prompt("How many dice? "));
let sumDice = 0;
for (let i = 1; i <= numDice; i++){
  sumDice += Math.floor(Math.random() * 6) + 1;
}
document.querySelector('#ex7').innerHTML = "The sum of all dice is: " + sumDice;

//8
let startYear = parseInt(prompt("Enter start year: "));
let endYear = parseInt(prompt("Enter end year: "));

for (let i=startYear;i<=endYear;i++) {
  if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
    document.querySelector('#ex8').innerHTML += "<li>"+i+"</li>";
  }
}

//9
let num = parseInt(prompt("Input a number: "));
let isPrime = true;
if (num>1){
  for (let i=2;i<=num;i++){
    if (num%i === 0){
      isPrime = false;
      break;
    }}
}
else {isPrime = false}
if (isPrime){
  document.querySelector('#ex9').innerHTML = num +" is a prime number."
}
else {
  document.querySelector('#ex9').innerHTML = num +" is not a prime number."
}
*/
//10
let dice = parseInt(prompt("Dice number: "));
let sum = parseInt(prompt("Sum of the eyes: "));
let count = 0;
for (let i = 1; i <= 100000; i++){
  var sumDice = 0;
  for (let i = 1; i <= dice; i++){
    sumDice += Math.floor(Math.random() * 6) + 1;
  }
  if (sumDice === sum){
    count ++;
  }
}
var probability = (count / 1000).toFixed(2);
document.querySelector('#ex10').innerHTML = "Probability to get sum "+sum+" with "+dice+" dice is "+probability +"%"

