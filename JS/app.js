'use strict';

// quiz

let userAnswer = prompt('Am I an animal lover? Please respond with yes or no!');

let cleanUserAnswer = userAnswer.trim().toLowerCase();

if (cleanUserAnswer === 'yes' || cleanUserAnswer === 'y') {
  alert('Correct!');
} else {
  alert('False!');
}

let militaryAnswer = prompt('Was I in military? Please respond with yes or no!');

let cleanmilitaryAnswer = militaryAnswer.trim().toLowerCase();

if (cleanmilitaryAnswer === 'yes' || cleanmilitaryAnswer === 'y') {
  alert('Correct!');
} else {
  alert('False!');
}

let PCAnswer = prompt('Have I built a Mac? Please respond with yes or no!');

let cleanPCAnswer = PCAnswer.trim().toLowerCase();

if (cleanPCAnswer === 'no' || cleanPCAnswer === 'n') {
  alert('Correct!');
} else {
  alert('False!');
}

let PowderAnswer = prompt('Was I a powdercoater? Please respond with yes or no!');

let cleanPowderAnswer = PowderAnswer.trim().toLowerCase();

if (cleanPCAnswer === 'yes' || cleanPowderAnswer === 'y') {
  alert('Correct!');
} else {
  alert('False!');
}

let shredAnswer = prompt('Do I absolutely shred on guitar? Please respond with yes or no!');

let cleanshredAnswer = shredAnswer.trim().toLowerCase();

if (cleanshredAnswer === 'yes' || cleanshredAnswer === 'y') {
  alert('Correct!');
} else {
  alert('False!');
}

// number guess game

const correctNumber = 6;
let guessAnswer = prompt('Guess a number between 1 and 10:');

let cleanguessAnswer = guessAnswer.trim().toLowerCase();

let guessCount = 0;

let isCorrect = false;

while (!isCorrect && !isNaN(cleanguessAnswer) && guessCount < 4) {
  guessCount++;

  if (cleanguessAnswer === correctNumber) {
    isCorrect = true;
  } else if (cleanguessAnswer < correctNumber) {
    alert(`Your guess was too low. Guess again. ${guessCount} of 4 guesses remaining.`);
  } else {
    alert(`Your guess was too high. Guess again. ${guessCount} of 4 guesses remaining.`);
  }

  cleanguessAnswer = prompt('Guess a number between 1 and 10:');
}

if (isCorrect) {
  alert(`Correct! You guessed the number in ${guessCount} guesses.`);
} else {
  alert(`You have exceeded the maximum number of guesses. The number was ${correctNumber}`);
}

let usercorrect = false;
let bands = [];
let guesses = 0;

while(guesses < 7){
   //ask a question
  let eighties = prompt().toLowerCase();
 
  //find the band in the array
  for(let i = 0; i < bands.length; i++){
  //input array[i which increments]
    if(eighties === bands [i]){
    //they got it right
    alert();
    guesses = 7;
    userCorrect = true;
    break;
   }
   if(guesses !== 7){
    alert();
   }
   


}//closes the while loop