(function () {
  let Question = function(question, answersArr, correctAnswer) {
    this.question = question;
    this.answersArr = answersArr;
    this.correctAnswer = correctAnswer;
    this.addedNumtoAnswers = [];
  };
 
 Question.prototype.addNumbers = function(arr) {
     for(i = 0; i <= arr.length-1; i++) {
       this.addedNumtoAnswers.push(i + '.' + ' ' + arr[i] + '\n');
     }
  } 
 
 let questionOne = new Question('What is the capital of Washington state? ', ['Seatle','Spokane', 'Tacoma', 'Olympia'], 3);
 let questionTwo = new Question('What does Funko make? ', ['Fast food', 'Pop', 'Cars', 'Spray paint'], 1);
 let questionThree = new Question('What city is most commonly referred to as “The City of Light”? ', ['Paris', 'Sanfancisco', 'Seattle', 'Mumbia'], 0);
 
 let quizLoop = true;
 let quiz = [questionOne, questionTwo, questionThree];
 let randomNum = Math.ceil((Math.random() * quiz.length)) - 1;
 
 let count = 1;
 let points = 0;
 
 while(quizLoop) {
   setArr();
 
   let userAnswer = prompt(quiz[randomNum].question +'\n\n' +'Enter a number or enter "q" to quit: \n'+ 
       newAddedNumStr + '\n' + 'points:' + points );

   if(userAnswer === 'q' || count === quiz.length) {
     if(userAnswer == quiz[randomNum].correctAnswer) {
       points += 1;
       quizLoop = false;
       alert('Total points: ' + points + '\nThanks for playing!');
     } else {
       quizLoop = false;
       alert('Total points: ' + points + '\nThanks for playing!');
     }
     emptyArr();
     randomNum = Math.ceil((Math.random() * quiz.length)) - 1;
     
   } else if (userAnswer == quiz[randomNum].correctAnswer) {
     emptyArr();
     count++;
     points += 1;
     randomNum = Math.ceil((Math.random() * quiz.length)) - 1;
   } else {
     emptyArr();
     count++;
     randomNum = Math.ceil((Math.random() * quiz.length)) - 1;
   }
 }
 
 function setArr() {
   quiz[randomNum].addNumbers(quiz[randomNum].answersArr);
   let addedNumtoArr = (quiz[randomNum].addedNumtoAnswers).toString();
   newAddedNumStr = addedNumtoArr.replace(/,/g, '');
 }
 
 function emptyArr() {
   quiz[randomNum].addedNumtoAnswers.length = 0; 
 }
})();















