// ask for the users name
var userName = prompt('Enter your name');
console.log('This is the userName var: ' + userName);

alert('Hi ' + userName + '! Nice to meet you.');

//lets start the game
var answer = prompt('Did I grow up in Seattle area?');
console.log('My Question: Did I grow up in Seattle?');
console.log('The user answered: ' + answer);

//check answer
if (answer.toLowerCase() === 'yes') {
  alert('Good Job, ' + userName + '! I did grow up in the area.');
} else {
  alert("I'm sorry " + userName + ', but I did indeed grow up in the area.');
}

//question two
answer = prompt('Have I ever visited Africa?');
console.log('My Question: Have I ever visited Africa?');
console.log('The user answered: ' + answer);

if (answer.toLowerCase() === 'no') {
  alert('Good Job, ' + userName + '! I have never visited Africa.');
} else {
  alert("I'm sorry " + userName + ", but I've never visited Africa.");
}

//question three
answer = prompt('Do I own an 80lb German Shepherd / Husky dog?');
console.log('My Question: Do I own an 80lb dog?');
console.log('The user answered: ' + answer);

if (answer.toLowerCase() === 'yes') {
  alert('Good Job, ' + userName + '! I do have a huge German Shepherd / Husky dog.');
} else {
  alert("I'm sorry " + userName + ', but I do indeed own a huge German Shepherd / Husky dog.');
}

//lets ask them to quess a number between 1 and 10
var min = 1;
var max = 10;
correctNum = Math.floor(Math.random() * (max - min)) + min; //took this from MDN

answer = prompt('Try to guess the number. It is between 1 and 10.');
console.log('The correct number is:' + correctNum);
console.log('The user guessed: ' + answer);

if (parseInt(answer) === correctNum) {
  alert('Good Job, ' + userName + '! You got it right!');
} else if (parseInt(answer) > correctNum) {
  alert('Oops! Too high.');
} else {
  // must be too low
  alert('Oops! Too low.');
}
