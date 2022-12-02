/*
//1
let fiveNum = [];
for (i=0; i<5; i++) {
  fiveNum[i] = parseInt(prompt("Input number "));
}
for (i=5; i>=0;i--) {
  console.log(fiveNum[i]);
}

//2
let nameArray = [];
let numPeople = parseInt(prompt("How many participants? "));
for (i=1; i<= numPeople; i++) {
  nameArray[i-1] = prompt("What is name of participant "+i+": ");
}

for (i in nameArray) {
  document.getElementById("ex2").innerHTML += '<li>'+nameArray[i]+'</li>';
}

//3
ex dogList = [];
for (i=1;i<7;i++) {
  dogList.push(prompt("Input name of dog"+i+": "));
}
dogList.sort().reverse();
for (i=0;i<6;i++) {
  document.getElementById("ex3").innerHTML += '<li>'+dogList[i]+'</li>';
}

//4
let numList = [];
let num = parseInt(prompt("Input a number: "));
numList.push(num);
while (num !==0) {
  num = parseInt(prompt("Input a number: "));
  numList.push(num);
}
numList.sort();
numList.reverse();
console.log(numList);

//5
let user_input
let num_arr = []

while (true) {
    user_input = parseInt(prompt("Input a number"));
    if (!num_arr.includes(user_input)) {
        num_arr.push(user_input);
    }
    else {
        break;
    }
}

num_arr.sort(function(a,b){return a-b});
for (let i=0; i < num_arr.length; i++) {
  console.log(num_arr);
}

//6
function diceRoll(){
  return Math.floor(Math.random() * 6) + 1;
}
let rolled = diceRoll();
while (rolled != 6) {
  document.getElementById("ex6").innerHTML += '<li>'+rolled+'</li>';
  rolled = diceRoll();
}
document.getElementById("ex6").innerHTML += '<li>'+rolled+'</li>';

//7
function diceRoll(x){
  return Math.floor(Math.random() * x) + 1;
}
let sides = parseInt(prompt("Number of sides on a dice: "));
let rolled = diceRoll(sides);
while (rolled != sides) {
  document.getElementById("ex7").innerHTML += '<li>'+rolled+'</li>';
  rolled = diceRoll(sides);
}
document.getElementById("ex7").innerHTML += '<li>'+rolled+'</li>';

//8
function concat(str) {
  let string = "";
  for (x in str) {
    string += str[x];
  }
  return string;
}
let testStr = ["Hello", ",", "I", "am", "a", "little", "Snow"];
document.getElementById("ex8").innerHTML = concat(testStr);

//9
function even(arr) {
  let evenArr = [];
  for (x in arr) {
    if (arr[x] % 2 === 0) {
      evenArr.push(arr[x]);
    }
  }
  return evenArr;
}
let originalArr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = even(originalArr);
console.log(originalArr);
console.log(newArr);
*/
//10
const numberOfCandidates = prompt("How many candidates")
let arrayOfCandidates = []
for (let i=0; i < numberOfCandidates; i++) {
    candidateName = prompt(`Name for candidate ${i+1}`).toLowerCase();
    candidate = {
        name: candidateName,
        votes: 0,
    }
    arrayOfCandidates.push(candidate);
}

const numberOfVoters = prompt("How many voters")
for (let j=0; j < numberOfVoters; j++) {
    vote = prompt(`Voter ${j+1} - Enter the candidate name you wish to vote for`).toLowerCase();
    arrayOfCandidates.forEach(candidate => {
        if (vote == candidate.name) {
           candidate.votes += 1;
        }
    });
}

arrayOfCandidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${arrayOfCandidates[0].name} with ${arrayOfCandidates[0].votes} votes.`);
console.log(`Results:`);
for (let a=0; a < arrayOfCandidates.length; a++) {
    console.log(`${arrayOfCandidates[a].name}: ${arrayOfCandidates[a].votes} votes`);
}