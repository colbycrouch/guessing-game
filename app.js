// var userName = prompt('Hey user, What\'s your name?');
//
// alert('Welcome to my guessing game ' + userName + '. Answer question numbers 1 thru 4 with \'y\' or \'n\'');
//
// var questionOne = prompt('Q.1) Does Colby like to cook?');
// questionOne = questionOne.toUpperCase();
// console.log('this is the first value of question ' + questionOne);
//
// if(questionOne === 'Y') {
//   console.log('this is the if');
//   alert('You just won the super bowl ' + userName + '!....wait no, You got that right!');
// }
//
// else {
//   console.log('this is the else');
//   alert('You Suck!!! ' + userName + ' You got that wrong!');
//
// }
// questionTwo = prompt('Q.2) Does he drive an American Car?') .toUpperCase();
// console.log ('this is the second value of question ' + questionTwo);
// if (questionTwo === 'Y') {
//   alert('You must know me.... ' + userName);
// } else {
//   alert('That\'s a negative ghostwriter');
// }
//
// var questionThree = prompt('Q.3) Does he prefer Tacos over Pizza?') .toUpperCase();
// console.log ('this is the third value of question ' + questionThree);
// if (questionThree === 'Y'){
//   alert('This is getting creepy ' + userName);
// } else if(questionThree === 'N') {
//   alert('You should just quit now!!!');
// }
// var questionFour = prompt('Q.4) Is he going to change careers?') .toUpperCase();
// console.log ('this is the fourth value of question ' + questionFour);
// if (questionThree === 'Y'){
//   alert('You are so right ' + userName);
// } else if(questionThree === 'N') {
//   alert('You should have quit while you were ahead!!');
// }
//
// alert('Questions 5 thru 8 will require a one word or numerical answer');
//
// var questionFive = prompt('Q.5) Can you guess one of my favorite cars?') .toLowerCase();
// console.log('this is the fifth value of question ' + questionFive);
// if (questionFive !== 'camaro' || questionFive !== 'trailblazer' || questionFive !== 'corvette') {
//   alert('Hot Diggity Dog, you must be psychic ' + userName);
// }
// else {
//   alert('That\'s ok, maybe next time you will be a better mind reader!');
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
