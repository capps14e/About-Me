'use strict';

let userAnswer = prompt('Am I an animal lover? Please respond with yes or no!');

let cleanUserAnswer = userAnswer.trim().toLowerCase();

if (cleanUserAnswer === 'yes' || cleanUserAnswer === 'y') {
  alert('Correct!');
} else {
  alert('False!');
}

let militaryAnswer = prompt('Was I in military?? Please respond with yes or no!');

let cleanmilitaryAnswer = militaryAnswer.trim().toLowerCase();

if (cleanmilitaryAnswer === 'yes' || cleanmilitaryAnswer === 'y') {
  alert('Correct!');
} else {
  alert('False!');
}

