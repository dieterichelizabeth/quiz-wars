// list of variables being called by I.d.
var timerEl = document.getElementById('timer');
var questionsEl = document.getElementById('quiz-question-block');
var listedQuestion = document.getElementById('question');
var listedAnswers1 = document.getElementById('answer1');
var listedAnswers = document.getElementById('answer2');
var listedAnswers = document.getElementById('answer3');
var listedAnswers = document.getElementById('answer4');

// questions variables: 5 questions
// CHANGE THE NAMES
var myQ1= {
  question: "what is 2 plus 5?",
  answer: "7",
  incorrect: ["2", "6", "7"]
}
var myQ2= {
  question: "what is 1 plus 2?",
  answer: "3",
  incorrect: ["2", "4", "9"]
}

var allQuestions = [myQ1, myQ2];
// console.log[allQuestions];

// display questions and answers
// create a function loop to display questions by changing the HTML
function questionDisplay() {
  //to-do: create the buttons for answers 

  //changes the HTML to display a question
  document.getElementById("question").innerHTML = allQuestions[1].question;
  document.getElementById("answer1").innerHTML = allQuestions[1].answer;
  document.getElementById("answer2").innerHTML = allQuestions[1].incorrect[0];
  document.getElementById("answer3").innerHTML = allQuestions[1].incorrect[1];
  document.getElementById("answer4").innerHTML = allQuestions[1].incorrect[2];
}





//Event listeners for when user clicks an answer
document.getElementById("answer1").addEventListener("click", getPoints);

//ternary operator to assess correct answer
function getPoints() {
  var answer1=
  console.log((answer1 == true) ? "correct" : "incorrect");
}

// document.getElementById("answer1").addEventListener("click", function() {
//   alert("Correct!");
// });

/* Places of improvement
- to use the ternary operator: a condition must be set which can be true or false (ex: answer == correct answer)
- need to define variables as correct/incorrect?
- need to store the answer which the user selects, then run it through a ternary operator
*/









// start the timer
// Timer that counts down from 60 (CHANGE BACK TO 60!!!)
// change the names of these (except countdownHandler)
function countdownHanlder() {
  var timeLeft = 5;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    }
    else {
      // Once `timeLeft` gets to 0, game over
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      console.log ("game over!");
      }
  }, 1000);
}

// use event handler to call coutdownHandler and question Display
start.addEventListener('click', countdownHanlder);
start.addEventListener('click', questionDisplay);











// multiple operators in a single statement and store as an object
// colors of the buttons changed

//Step 1: create html/styling page for quiz
//Step 2: create variables with questions and answers
  //Step 2.1: Create a way to display the questions/answers to HTML
//Step 3: create a button to start the timer and question display function
//Step 4: Create a way for answers to be marked as true or false


//resources: 
//https://www.w3schools.com/js/js_htmldom_html.asp
// https://www.w3schools.com/js/js_arrays.asp
//https://www.google.com/search?q=how+to+create+a+timer+in+javascript&rlz=1C5CHFA_enUS980US980&ei=IuztYf7BHKiyqtsPxdaDkAs&oq=how+to+create+a+timer+in+j&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgQIABBDOg4ILhCABBCxAxDHARCjAjoICAAQgAQQsQM6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToFCAAQkQI6BQguEIAEOgcIABCABBAKSgQIQRgASgQIRhgAUABYpyNg3yloAXACeACAAVaIAaUMkgECMjeYAQCgAQHAAQE&sclient=gws-wiz
//https://www.google.com/search?q=multiple+ternary+operators+in+a+single+statement+javascript&rlz=1C5CHFA_enUS980US980&ei=O-7tYaGDGOC4qtsP1PC3mAU&ved=0ahUKEwjhjIfDjMn1AhVgnGoFHVT4DVMQ4dUDCA4&uact=5&oq=multiple+ternary+operators+in+a+single+statement+javascript&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEM0CMgUIABDNAjIFCAAQzQI6BwgAEEcQsAM6BAghEApKBAhBGABKBAhGGABQowtYlRlg8RtoAXACeACAAV-IAeQEkgEBOJgBAKABAcgBCMABAQ&sclient=gws-wiz
//