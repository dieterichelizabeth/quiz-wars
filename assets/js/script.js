// list of variables being called by I.d.
var startEl = document.getElementById('start');
var timerEl = document.getElementById('timer');
var contentEl = document.getElementById('content');

var isIncorrect = true;
var timeLeft = 30;

// points collection
var points = [];

// questions variables: 5 questions
var questions = [
myQ1= {
  question: "What is the name of the angry cat?",
  answer: "1",
  choices: ["grumpy cat", "ugly cat", "sassy cat", "mad cat"]
},
myQ2= {
  question: "Best flavor of milk tea?",
  answer: "3",
  choices: ["wintermellon", "honeydew", "taro", "mango"]
},
myQ3= {
  question: "Capital of Texas?",
  answer: "4",
  choices: ["Dallas", "Houston", "Oklahoma", "Austin"]
},
myQ4= {
  question: "Best nut?",
  answer: "1",
  choices: ["Pecan", "Pistacio", "Peanut", "Walnut"]
},
myQ5= {
  question: "Which bug is useless?",
  answer: "3",
  choices: ["Bee", "Spider", "Wasp", "Cicada"]
}
]

qNumber = [];

// Display the questions (one at a time)
function displayQuestions() {
  qCount = questions[qNumber.length];
  console.log("question 1!");
  // clear old content
  contentEl.innerHTML = '';

  // add new question
  var newQuestion = document.createElement('h1');
  newQuestion.setAttribute('class', 'text-center', 'col-lg-12');
  newQuestion.innerHTML = qCount.question;
  // append to div
  document.getElementById('content').appendChild(newQuestion);

  // add new answer list
  for (let i = 0; i < 4; i++) { 
  var answers = document.createElement('button');
  answers.setAttribute('class', 'btn btn-light mb-3 col-lg-12 text-center');
  answers.innerHTML = [i + 1] + ": " + qCount.choices[i];
  // use a variable # for id to target/select the right answer
  answers.setAttribute('id', [i + 1]);
  document.getElementById('content').appendChild(answers);
  }
  var answerEl = document.getElementById('1');
  var answer2El = document.getElementById('2');
  var answer3El = document.getElementById('3');
  var answer4El = document.getElementById('4');
  questionLog(answerEl, answer2El, answer3El, answer4El);
}

// Answer Questions
var questionLog = function(answerEl, answer2El, answer3El, answer4El) {
  answerEl.addEventListener('click', answerValidator);
  answer2El.addEventListener('click', answerValidator);
  answer3El.addEventListener('click', answerValidator);
  answer4El.addEventListener('click', answerValidator);

    // compares the selected answer to the chosen answer
    function answerValidator() {
      var input = event.target.textContent
      const key = input.split('');

      contentEl.innerHTML = '';
      // if the user answers correctly, 1 point pushed into the "points array"!
      if (key[0] == qCount.answer){
        var correct = document.createElement('p');
        correct.innerHTML = "CORRECT! NICE JOB 👍";
        document.getElementById('content').appendChild(correct);

        console.log("correct! + points");
        points.push(1);
      }
      
      // if not - no points added
      else {

        var incorrect = document.createElement('p');
        incorrect.innerHTML = "✨ Incorrect ✨";
        document.getElementById('content').appendChild(incorrect);

        // need to change time left in the interval function to -2 (secconds)
        console.log("incorrect, no points added");
      }
      
      // add the next button
        var next = document.createElement('button');
        next.setAttribute('class', 'btn btn-primary mb-3 col-lg-8 text-center');
        next.innerHTML = "next question";
        document.getElementById('content').appendChild(next);
        next.setAttribute('id', 'next');
        var nextEl = document.getElementById('next');
        nextQuestion(nextEl);
    }
}

// Next Question Function
var nextQuestion = function(nextEl) {
  // When "next" is clicked
  nextEl.addEventListener('click', bleh);
  function bleh() {
  // If there are still questions to be answered, push # into array and run displayQuestions
   if (qNumber.length < 4) {
    qNumber.push(1);
    console.log(qCount);
    console.log(qNumber);
    displayQuestions();
  }
  // Else, call endgame function
  else {
    console.log("All questions Answered! Game over");
    gameOver();
  }
  }
};



// decrement timer function
// grab element of timer and subtract to display
// Start the timer
// Timer that counts down from 60 (CHANGE BACK TO 60!!!)
function countDown() {
  
  // if (isIncorrect = true) {
  //   timeLeft = timeLeft - 5;
  // };
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1){
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Time remaining: ' + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } 
    else {
      // Once `timeLeft` gets to 0, game over
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      gameOver();
      }
  }, 1000);
}

// Game over function
var gameOver = function() {
  console.log ("game over!");
  // TO - DO  STOP THE TIMER
  timerEl.innerHTML = '';
  // Clear the page
  contentEl.innerHTML = '';

  // Display Game over 
  var newQuestion = document.createElement('h1');
  newQuestion.setAttribute('class', 'text-center', 'col-lg-12');
  newQuestion.innerHTML = "Game Over 👾";
  // append to div
  document.getElementById('content').appendChild(newQuestion);

  // Display User's points
  var totalPoints = points.length * 2
  var totalScore = document.createElement('p');
  totalScore.innerHTML = "Your score: " + totalPoints;
  totalScore.setAttribute('class', 'text-center col-lg-12');
  document.getElementById('content').appendChild(totalScore);

}

// use event handler to call coutdownHandler and question Display
startEl.addEventListener('click', countDown);
startEl.addEventListener('click', displayQuestions);
