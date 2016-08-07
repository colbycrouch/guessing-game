var userName = prompt('Hey user, What\'s your name?');

alert('Welcome to my guessing game ' + userName + '. Answer question numbers 1 thru 4 with \'y\' or \'n\'');
function questionOne() {
  var answerOne = prompt('Q.1) Does Colby like to cook?');
  answerOne = answerOne.toUpperCase();
  console.log('this is the first value of question ' + answerOne);
  if(answerOne === 'Y') {
    console.log('this is the if');
    alert('You just won the super bowl ' + userName + '!....wait no, You got that right!');
  } else {
    console.log('this is the else');
    alert('You Suck!!! ' + userName + ' You got that wrong!');
  }
}
questionOne();

function questionTwo() {
  answerTwo = prompt('Q.2) Does he drive an American Car?').toUpperCase();
  console.log('this is the second value of question ' + answerTwo);
  if (answerTwo === 'Y') {
    alert('You must know me.... ' + userName);
  } else {
    alert('That\'s a negative ghostwriter');
  }
}
questionTwo();

function questionThree() {
  var answerThree = prompt('Q.3) Does he prefer Tacos over Pizza?').toUpperCase();
  console.log('this is the third value of question ' + answerThree);
  if (answerThree === 'Y') {
    alert('This is getting creepy ' + userName);
  } else if (answerThree === 'N') {
    alert('You should just quit now!!!');
  }
}
questionThree();

function questionFour() {
  var answerFour = prompt('Q.4) Is he going to change careers?').toUpperCase();
  console.log('this is the fourth value of question ' + answerFour);
  if (answerFour === 'Y') {
    alert('You are so right ' + userName);
  } else if (answerFour === 'N') {
    alert('You should have quit while you were ahead!!');
  }
}
questionFour();

alert('Questions 5 thru 8 will require a one word or numerical answer');
function questionFive() {
  var answerFive = prompt('Q.5) Can you guess one of my favorite cars?').toLowerCase();
  console.log('this is the fifth value of question ' + answerFive);
  if (answerFive === 'camaro' || answerFive === 'trailblazer' || answerFive === 'corvette') {
    alert('Hot Diggity Dog, you must be psychic ' + userName);
  } else {
    alert('That\'s ok, maybe next time you will be a better mind reader!');
  }
}
questionFive();

function questionSix() {
  var answerSix = prompt('Q.6) Guess a sport i enjoy watching...').toLowerCase();
  var sport = ['f1', 'mma', 'football', 'baseball'];
  console.log('this is the sixth value of question ' + answerSix);
  if (sport.indexOf(answerSix) >= 0) {
    var playAgain = prompt('Good Game, Play Again ' + userName + '?').toLowerCase();
    if (playAgain === 'y') {
      questionSix();
    }
  } else {
    alert('You are not right!');
  }
}
questionSix();

function questionSeven(){
  var answerSeven = parseInt(prompt('Q.7) Can you guess my favorite number? You only have 5 chances'));
  var answer = (71);
  console.log('this is the answer', answer);
  var guessCounter = 1;
  console.log('this is the seventh value of question ' + answerSeven);

// Math.floor (Math.random() * 100

  while (answerSeven !== answer && guessCounter < 5) {
    if (isNaN(answerSeven)) {
      answerSeven = parseInt(prompt('Silly Rabbit, that was not a number'));
      guessCounter++;
    }
    else if (answerSeven > answer) {
      answerSeven = parseInt(prompt('Try, try again, that was too high'));
      guessCounter++;
    }
    else if (answerSeven < answer) {
      answerSeven = parseInt(prompt('Try, try again, that was too low'));
      guessCounter++;
    }
  }
  if (guessCounter <= 5 && answerSeven === answer)
    alert('You must be psychic, the number was in fact 71.');
  else {
    alert('You failed to guess my favorite number!');
  }
}
questionSeven();

function questionEight() {
  var dogs = ['pitbull', 'rottweiler', 'doberman', 'roman cane corso'];
  var answerEight = prompt('Q8.) Last question, Quick name a favorite dog breed of mine.').toLowerCase();
  var isTrue = false;
  console.log('this is the eigth value of question' + answerEight);

  for (var i = 0; i < dogs.length; i++) {
    if (answerEight === dogs[i]) {
      isTrue = true;
      break;
    }
  }

  if (isTrue) {
    alert('How do you keep doing this ' + userName);
  } else {
    alert('You must like cats....weirdo!');
  }
}
questionEight();
