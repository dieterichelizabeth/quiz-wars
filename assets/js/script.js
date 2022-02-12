// list of variables being called by I.d.
var startEl = document.getElementById('start');
var timerEl = document.getElementById('timer');
var contentEl = document.getElementById('content');
var scoreEl = document.getElementById('high-score');

// Score Collection Variable
var scoreHistory = [];

// Timer variables
var timeLeft = 59; 
var stopClock = [];
var isIncorrect = false;

// points collection
var points = [];

// questions variables: 5 questions
var questions = [
myQ1= {
  question: "What is a global variable?",
  answer: "4",
  choices: ["a variable available to multiple projects", "a variable available to a specific function", "a variable available to the internet", "a variable available throughout the length of the code"]
},
myQ2= {
  question: "Which of these are not a function for timers in javaScript?",
  answer: "3",
  choices: ["setTimeout", "setInterval", "setAttribute", "clearInterval"]
},
myQ3= {
  question: "Which of these is not a looping structure?",
  answer: "4",
  choices: ["For", "While", "Do-while", "If...else"]
},
myQ4= {
  question: "Which of these is a pop up box available in javaScript",
  answer: "1",
  choices: ["Alert", "CallerId", "Display", "Terminate"]
},
myQ5= {
  question: "What are the two basic groups of data types in javaScript?",
  answer: "3",
  choices: ["Primitive and String", "Object and Reference", "Primitive and Reference", "Object and String"]
}, 
myQ6= {
  question: "Which of these describes event bubbling?",
  answer: "1",
  choices: ["If the handler of a child is clicked, the handler of the parent will also work", 
            "If the handler of a parent is clicked, the handler of the child will also work", 
            "If the handler of a child is clicked, all handlers in the code will also work", 
            "If the handler of a parent is clicked, all handlers in the code will also work"]
}
]

qNumber = [];

// Display the questions (one at a time)
function displayQuestions() {
  qCount = questions[qNumber.length];
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
      correct.setAttribute('class', 'col-lg-8 text-center');
      correct.innerHTML = "CORRECT! NICE JOB 👍";
      document.getElementById('content').appendChild(correct);
      points.push(1);
    }
      
    // if not - no points added, and minus 10 secconds
    else {
    var incorrect = document.createElement('p');
    incorrect.setAttribute('class', 'col-lg-8 text-center');
    incorrect.innerHTML = "✨ Incorrect ✨";
    document.getElementById('content').appendChild(incorrect);
    isIncorrect = true;
    decrementTimer(isIncorrect);
    // countDown(isTrue) 
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
   if (qNumber.length < 5) {
    qNumber.push(1);
    displayQuestions();
  }
  // Else, call endgame function
  else {
    gameOver();
  }
  }
};

function decrementTimer (isIncorrect) {
  console.log(isIncorrect);
  if (isIncorrect) {
      timeLeft = timeLeft - 2;
      console.log(timeLeft);
      timerEl.textContent = 'Time remaining: ' + timeLeft;
    }
    isIncorrect = true;
}

// Start the timer
function countDown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Time remaining: ' + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft --;
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


//  Game over function
var gameOver = function() {
  // Stop the timer (if applicable)
  stopClock.push(1);
  timerEl.textContent = '';
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

  // Create a form to store initials
  var formDirections= document.createElement('p');
  formDirections.innerHTML = "Enter your initials below!";
  formDirections.setAttribute('class', 'text-center col-lg-12');
  document.getElementById('content').appendChild(formDirections);

  var userInitials = document.createElement('form');
  userInitials.setAttribute('id', 'user-input');
  document.getElementById('content').appendChild(userInitials);

  var input = document.createElement('input');
  input.setAttribute('class', 'col-lg-12');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Ex: AB');
  input.setAttribute('id', 'user-initials');
  document.getElementById('user-input').appendChild(input);

  var submitInitials = document.createElement('button');
  submitInitials.setAttribute('class', 'btn btn-primary mt-3 col-lg-12 text-center');
  submitInitials.innerHTML = "Submit";
  submitInitials.setAttribute('id', 'submit-Initials');
  document.getElementById('user-input').appendChild(submitInitials);
  
  // Send to through an input validator
  var submitInitialsEl = document.getElementById('submit-Initials');
  var pullInitialsEl = document.getElementById('user-initials')
  initialValidator(submitInitialsEl, pullInitialsEl);
}


// Initial validator
var initialValidator = function(submitInitialsEl, pullInitialsEl){
  submitInitialsEl.addEventListener('click', check);
  function check (event) {
  event.preventDefault();
  
  initials = pullInitialsEl.value.trim();
  // Check if user input something to the form field
  if(initials) {
    pullInitialsEl.value = "";
    // If yes - validate length
    if(initials.length <= 2) {
      console.log("good length");
      // Move to local storage function
      saveYoScore(initials)
    }
    // Else- alert the user to input 2 characters
    else{
      alert("Please enter your initials (do not include punctuation, 2 characters long) For Example: 'PB'")
    }
  }
  // Else- alert the user to input intials
  else{
    alert("Please enter your initials");
  }
  }
}

// Save scores to local storage
function saveYoScore(initials){
    //Save the user's highscore in an array
    var totalPoints = points.length * 2
    var scoreInfo = [];
    scoreInfo.push(totalPoints);    
    scoreInfo.push(initials);

    // Save search to local storage
    // read the string, localStorage.getItem('setUsernamesArray'),
    var scoresOfThePast = window.localStorage.getItem("Score Board");
    // then convert it to an array with JSON.parse,
    var scoreHistory = JSON.parse(scoresOfThePast);
    console.log(scoreHistory);
    if (scoreHistory === null) {
      // create a new array
      var scoreHistory = [];
      // then push to the array,
      scoreHistory.push(scoreInfo);
    }
    else{
    // then push to the array,
    scoreHistory.push(scoreInfo);
    }
    // and then store it again with localStorage.setItem('setUsernamesArray', JSON.stringify(array))
    window.localStorage.setItem("Score Board", JSON.stringify(scoreHistory));
      
  // Move to display highscore
  highScore(initials);
}

// High Scores display!
var highScore = function(initials) {
  // Clear the page
  contentEl.innerHTML = '';

  // Display 'Score board'
  var newQuestion = document.createElement('h1');
  newQuestion.setAttribute('class', 'text-center', 'col-lg-12');
  newQuestion.innerHTML = "Score Board";
  document.getElementById('content').appendChild(newQuestion);

  // Display Scoreboard Data
  var scoresOfThePast = window.localStorage.getItem("Score Board");
  var scoreData = JSON.parse(scoresOfThePast);

  for (let i = 0; i < scoreData.length; i++) {
    var scoreListing = (scoreData[i]);
    var savedUsername = scoreListing[0];
    var savedPoints = scoreListing[1];
    var scoreBoard = document.createElement('p');
    scoreBoard.innerHTML = savedPoints + " : " + savedUsername;
    scoreBoard.setAttribute('class', 'text-center col-lg-12');
    document.getElementById('content').appendChild(scoreBoard);
  }

  // Display User's points
  var totalPoints = points.length * 2
  var totalScore = document.createElement('p');
  totalScore.innerHTML = "Your score- " + initials + " Score: " + totalPoints;
  totalScore.setAttribute('class', 'text-center col-lg-12');
  document.getElementById('content').appendChild(totalScore);

  // Play again button
  var again = document.createElement('button');
  again.setAttribute('class', 'btn btn-primary text-center');
  again.innerHTML = "Play Again";
  again.setAttribute('id', 'play-again');
  document.getElementById('content').appendChild(again);
  againEl = document.getElementById('play-again');
  playAgain(againEl);

  // Clear Scores button
  scoreEl.innerHTML = "";
  timerEl.innerHTML = "";
  var clear = document.createElement('button');
  clear.setAttribute('class', 'btn btn-light text-center');
  clear.innerHTML = "Clear Highscores";
  clear.setAttribute('id', 'clear-scores');
  document.getElementById('timer').appendChild(clear);

  var clearScoresEl = document.getElementById('clear-scores');
  clearScores(clearScoresEl);
}

// Refreshes the page
function playAgain(){
  againEl.addEventListener('click', reload);
  function reload() {
    window.location.reload();
  }
}

//Clear Scores
var clearScores = function (clearScoresEl) {
  clearScoresEl.addEventListener('click', noScore);
  function noScore(){
  localStorage.removeItem('Score Board');
  }
}

// use event handler to call coutdownHandler and question Display
startEl.addEventListener('click', countDown);
startEl.addEventListener('click', displayQuestions);
scoreEl.addEventListener('click', highScore);