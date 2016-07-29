var userName = prompt('Hey user, What\'s your name?');

alert('Welcome to my guessing game ' + userName);

var questionOne = prompt('Does Colby like to cook?');
questionOne = questionOne.toUpperCase();
console.log('this is the first value of question ' + questionOne);

if(questionOne === 'Y') {
  console.log('this is the if');
  alert('You just won the super bowl ' + userName + '...wait no, You got that right!');
}

else {
  console.log('this is the else');
  alert('You Suck!!! ' + userName + ' You got that wrong!');

}
questionTwo = prompt('Does he drive an American Car?') .toUpperCase();
console.log ('this is the second value of question ' + questionTwo);
if (questionTwo === 'Y') {
  alert('You must know me.... ' + userName);
} else {
  alert('That\'s a negative ghostwriter');
}

var questionThree = prompt('Does he prefer Tacos over Pizza?') .toUpperCase();
console.log ('this is the third value of question ' + questionThree);
if (questionThree === 'Y'){
  alert('This is getting creepy ' + userName);
} else if(questionThree === 'N') {
  alert('You should just quit now!!!');
}
var questionFour = prompt('Is he going to change careers?') .toUpperCase();
console.log ('this is the fourth value of question ' + questionFour);
if (questionThree === 'Y'){
  alert('You are so right ' + userName);
} else if(questionThree === 'N') {
  alert('You should have quit while you were ahead!!');
}
