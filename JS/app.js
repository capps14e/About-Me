'use strict';

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

if (cleanUserAnswer === 'yes' || cleanshredAnswer === 'y') {
  alert('Correct!');
} else {
  alert('False!');
}

