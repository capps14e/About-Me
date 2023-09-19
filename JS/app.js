'use strict';
let correctAnswers = 0;

// quiz

let userAnswer = prompt('Am I an animal lover? Please respond with yes or no!');

let cleanUserAnswer = userAnswer.trim().toLowerCase();

if (cleanUserAnswer === 'yes' || cleanUserAnswer === 'y') {
  alert('Correct!');
  correctAnswers++;
} else {
  alert('False!');
}

let militaryAnswer = prompt('Was I in military? Please respond with yes or no!');

let cleanmilitaryAnswer = militaryAnswer.trim().toLowerCase();

if (cleanmilitaryAnswer === 'yes' || cleanmilitaryAnswer === 'y') {
  alert('Correct!');
  correctAnswers++;
} else {
  alert('False!');
}

let PCAnswer = prompt('Have I built a Mac? Please respond with yes or no!');

let cleanPCAnswer = PCAnswer.trim().toLowerCase();

if (cleanPCAnswer === 'no' || cleanPCAnswer === 'n') {
  alert('Correct!');
  correctAnswers++;
} else {
  alert('False!');
}

let PowderAnswer = prompt('Was I a powdercoater? Please respond with yes or no!');

let cleanPowderAnswer = PowderAnswer.trim().toLowerCase();

if (cleanPCAnswer === 'yes' || cleanPowderAnswer === 'y') {
  alert('Correct!');
  correctAnswers++;
} else {
  alert('False!');
}

let shredAnswer = prompt('Do I absolutely shred on guitar? Please respond with yes or no!');

let cleanshredAnswer = shredAnswer.trim().toLowerCase();

if (cleanshredAnswer === 'yes' || cleanshredAnswer === 'y') {
  alert('Correct!');
  correctAnswers++;
} else {
  alert('False!');
}

// number guess game

const correctNumber = 6;
let guessCount = 0;
let isCorrect = false;





while (!isCorrect && guessCount < 4) {
  let guessAnswer = prompt('Guess a number between 1 and 10:');

  let cleanguessAnswer = parseInt(guessAnswer)

  if (!isNaN(cleanguessAnswer))


    guessCount++;

  if (cleanguessAnswer === correctNumber) {
    isCorrect = true;
  } else if (cleanguessAnswer < correctNumber) {
    alert(`Your guess was too low. Guess again. ${4 - guessCount} of 4 guesses remaining.`);
  } else {
    alert(`Your guess was too high. Guess again. ${4 - guessCount} of 4 guesses remaining.`);
  }
}

if (isCorrect) {
  alert(`Correct! You guessed the number in ${guessCount} guesses.`);
  correctAnswers++;
} else {
  alert(`You have exceeded the maximum number of guesses. The number was ${correctNumber}`);
}

let userCorrect = false;
let games = ['Final Fantasy VII', 'Elden Ring', 'Monster Hunter', 'Dark Souls', 'The Witcher III', 'Warhammer: Vermintide 2', 'World of Warcraft', 'Darktide', 'Baldurs Gate III', 'Red Dead Redemption 2'];
let guesses = 0;

while (guesses < 7) {
  //ask a question
  let favorites = prompt('Guess one of my favorite games!').toLowerCase();

  //find the band in the array
  for (let i = 0; i < games.length; i++) {
    //input array[i which increments]
    if (favorites === games[i].toLowerCase()) {
      //they got it right
      alert('Correct!');
      correctAnswers++;
      guesses = 7;
      userCorrect = true;

      break;
    }
  }
  if (!userCorrect && guesses < 7) {
    alert('False!');
  }
  guesses++;
}
alert(`You got ${correctAnswers} out of 7 questions correct`);
