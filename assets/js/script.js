// list of variables being called by I.d.
var startEl = document.getElementById('start');
var timerEl = document.getElementById('timer');
var contentEl = document.getElementById('content');

// points collection
var points = [];

// questions variables: 5 questions
var myQ1= {
  question: "What is the name of the angry cat?",
  answer: "1",
  choices: ["grumpy cat", "ugly cat", "sassy cat", "mad cat"]
}
var myQ2= {
  question: "Best flavor of milk tea?",
  answer: "3",
  choices: ["wintermellon", "honeydew", "taro", "mango"]
}

// Display the questions (one at a time)
// create a function loop to display questions by changing the HTML
function displayQuestions() {
  console.log("question 1!");
  // clear old content
  contentEl.innerHTML = '';

  // add new question
  var newQuestion = document.createElement('h1');
  newQuestion.setAttribute('class', 'text-center', 'col-lg-12');
  newQuestion.innerHTML = myQ2.question;
  // append to div
  document.getElementById('content').appendChild(newQuestion);

  // add new answer list
  for (let i = 0; i < myQ1.choices.length; i++) { 
  var answers = document.createElement('button');
  answers.setAttribute('class', 'btn btn-light mb-3 col-lg-12 text-center');
  answers.innerHTML = [i + 1] + ": " + myQ2.choices[i];
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

      // if the user answers correctly, 1 point pushed into the "points array"!
      if (key[0] == myQ2.answer){

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

        console.log("incorrect, no points added");
      }
    }
}


// Start the timer
// Timer that counts down from 60 (CHANGE BACK TO 60!!!)
function countDown() {
  var timeLeft = 5;
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
// var gameOver = function() {
//   console.log ("game over!");
// }

// use event handler to call coutdownHandler and question Display
start.addEventListener('click', countDown);
start.addEventListener('click', displayQuestions);









// // multiple operators in a single statement and store as an object
// // colors of the buttons changed

// //Step 1: create html/styling page for quiz
// //Step 2: create variables with questions and answers
//   //Step 2.1: Create a way to display the questions/answers to HTML
// //Step 3: create a button to start the timer and question display function
// //Step 4: Create a way for answers to be marked as true or false


// //resources: 
// //https://www.w3schools.com/js/js_htmldom_html.asp
// // https://www.w3schools.com/js/js_arrays.asp
// //https://www.google.com/search?q=how+to+create+a+timer+in+javascript&rlz=1C5CHFA_enUS980US980&ei=IuztYf7BHKiyqtsPxdaDkAs&oq=how+to+create+a+timer+in+j&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgQIABBDOg4ILhCABBCxAxDHARCjAjoICAAQgAQQsQM6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToFCAAQkQI6BQguEIAEOgcIABCABBAKSgQIQRgASgQIRhgAUABYpyNg3yloAXACeACAAVaIAaUMkgECMjeYAQCgAQHAAQE&sclient=gws-wiz
// //https://www.google.com/search?q=multiple+ternary+operators+in+a+single+statement+javascript&rlz=1C5CHFA_enUS980US980&ei=O-7tYaGDGOC4qtsP1PC3mAU&ved=0ahUKEwjhjIfDjMn1AhVgnGoFHVT4DVMQ4dUDCA4&uact=5&oq=multiple+ternary+operators+in+a+single+statement+javascript&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEM0CMgUIABDNAjIFCAAQzQI6BwgAEEcQsAM6BAghEApKBAhBGABKBAhGGABQowtYlRlg8RtoAXACeACAAV-IAeQEkgEBOJgBAKABAcgBCMABAQ&sclient=gws-wiz
// //


// var allQuestions = [myQ1, myQ2];
// // console.log[allQuestions];

// //Event listeners for when user clicks an answer
// document.getElementById("answer1").addEventListener("click", getPoints);

// //ternary operator to assess correct answer
// function getPoints() {
//   var answer1=
//   console.log((answer1 == true) ? "correct" : "incorrect");
// }

// document.getElementById("answer1").addEventListener("click", function() {
//   alert("Correct!");
// });

/* Places of improvement
- to use the ternary operator: a condition must be set which can be true or false (ex: answer == correct answer)
- need to define variables as correct/incorrect?
- need to store the answer which the user selects, then run it through a ternary operator
*/