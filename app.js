var userName = prompt('Hey user, What\'s your name?');

alert('Welcome to my guessing game ' + userName + '. Answer question numbers 1 thru 4 with \'y\' or \'n\'');
function questionOne(){
  var answerOne = prompt('Q.1) Does Colby like to cook?');
  answerOne = answerOne.toUpperCase();
  console.log('this is the first value of question ' + answerOne);
  if(answerOne === 'Y') {
    console.log('this is the if');
    alert('You just won the super bowl ' + userName + '!....wait no, You got that right!');
  }else {
    console.log('this is the else');
    alert('You Suck!!! ' + userName + ' You got that wrong!');
  }
}
questionOne();

function questionTwo() {
  answerTwo = prompt('Q.2) Does he drive an American Car?') .toUpperCase();
  console.log ('this is the second value of question ' + answerTwo);
  if (answerTwo === 'Y') {
    alert('You must know me.... ' + userName);
  } else {
    alert('That\'s a negative ghostwriter');
  }
}
questionTwo();

function questionThree() {
  var answerThree = prompt('Q.3) Does he prefer Tacos over Pizza?') .toUpperCase();
  console.log ('this is the third value of question ' + answerThree);
  if (answerThree === 'Y'){
    alert('This is getting creepy ' + userName);
  } else if(answerThree === 'N') {
    alert('You should just quit now!!!');
  }
}
questionThree();

function questionFour() {
  var answerFour = prompt('Q.4) Is he going to change careers?') .toUpperCase();
  console.log ('this is the fourth value of question ' + answerFour);
  if (answerFour === 'Y'){
    alert('You are so right ' + userName);
  } else if(answerFour === 'N') {
    alert('You should have quit while you were ahead!!');
  }
}
questionFour();
//

// alert('Questions 5 thru 8 will require a one word or numerical answer');
function questionFive(){
  var answerFive = prompt('Q.5) Can you guess one of my favorite cars?').toLowerCase();
  console.log('this is the fifth value of question ' + answerFive);
  if (answerFive === 'camaro' || answerFive === 'trailblazer' || answerFive === 'corvette') {
    return alert('Hot Diggity Dog, you must be psychic ' + userName);
  }else {
    return alert('That\'s ok, maybe next time you will be a better mind reader!');
  }
}
questionFive();

// var answerFive = prompt('Q.5) Can you guess one of my favorite cars?').toLowerCase();
// console.log('this is the fifth value of question ' + answerFive);
// if (answerFive === 'camaro' || answerFive === 'trailblazer' || answerFive === 'corvette') {
//   return alert('Hot Diggity Dog, you must be psychic ' + userName);
// }else {
//   return alert('That\'s ok, maybe next time you will be a better mind reader!');
// }


//
// var questionSix = prompt('Q.6) Guess a sport i enjoy watching...').toLowerCase();
// var sport = ['f1', 'mma', 'football', 'baseball'];
// console.log('this is the sixth value of question ' + questionSix);
// if (sport.indexOf(questionSix) >= 0) {
//   alert('Good Game, Play Again ' + userName + '?');
// } else {
//   alert('You are not right!');
// }
//
// var questionSeven = parseInt(prompt('Q.7) Can you guess my favorite number? You only have 5 chances'));
// var answer = 71;
// var guessCounter = 1;
// console.log('this is the seventh value of question' + questionSeven);
//
// while (questionSeven !== answer && guessCounter < 5) {
//   if (isNaN(questionSeven)) {
//     questionSeven = parseInt(prompt('Silly Rabbit, that was not a number'));
//     guessCounter++;
//   }
//   else if (questionSeven > answer) {
//     questionSeven = parseInt(prompt('Try, try again, that was too high'));
//     guessCounter++;
//   }
// else if (questionSeven < answer) {
//   questionSeven = parseInt(prompt('Try, try again, that was too low'));
//   guessCounter++;
// }
// }
// if (guessCounter <= 5 && questionSeven === answer)
//   alert('You must be psychic, the number was in fact 71.');
// else {
//   alert('You failed to guess my favorite number!');
// }
//
// var arr = ['pitbull', 'rottweiler', 'doberman', 'roman cane corso'];
// var questionEight = prompt('Q8.) Last question, Quick name a favorite dog breed of mine.');
// var isTrue = false;
// console.log('this is the eigth value of question' + questionEight);
//
// for (var i = 0; i < arr.length; i++) {
//   if (questionEight === arr[i]) {
//     isTrue = true;
//     break;
//   }
// }
//
// if (isTrue) {
//   alert('How do you keep doing this ' + userName);
// } else {
//   alert('You must like cats....weirdo!');
// }
