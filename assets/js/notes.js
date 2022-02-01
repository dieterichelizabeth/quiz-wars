/*
Psuedocoding
-- objective 1: create the html for the first screen + styling (bootstrap)
Arrays needed - Hold questions array, correct points array
Done: Step 1: 
    - title: 
    - description
    - start button
    - nav w/ link to view highscores/timer placeholder
Done: Step 2: 
    - put the title, start button and description in a div/container
        - the div will be used to display 
            - questions (dynamically generated)
            - game over form (display game over/let users insert initials)
            - high score display
Done: Step 3: Link "start button" event listener to next function

-- objective 2: Display quiz questions, track if quesitons are correct/incorrect, 
Done: Step 1:
    - clear the div holding start quiz display?
    - create an array to pull questions from
Done: Step 2:
    - create function to display questions
    - targeting an h1/p?
    - button creation for answers
        - buttons need to be lableled ("1, 2, 3, 4")
            - answers to be saved in an array w/ #? 
            - can this be used to see if the question is correct?
Step 3:
    - add event listener to the question buttons
    - create conditional statement for correct/incorrect questions
            - if correct- push a "point" (+1) into an array, display "correct!"
            - if incorrect- no point added, display "incorrect!"
                - take time away from the timer
        - display the next question on button click
            - possibly use a for loop?
-- objective 3: Game over function
Step 1:
    - create function for game over display
    - if all questions answered || timer = 0 then display game over screen
Step 2:
   done - display the "game over"
   done - calculate the score
        - take the length of points array
        - multiply by two (each "point"= 2 pts)
   done - display the score to the user
    - create the form for users to input their initials
        - add event listener for submit
Step 3:
    - on submit- take users to the highscore table 
-- objective 4: get score function
Step 1:
    - create a "highscore" board
    - use local storage to store high scores for the user
    - rank initials by highest #
Step 2: 
    - allow users to "remove highscores" (clear local storage)
Step 3: 
    - have a button that links back to the start page
*/

/*
Future improvements
else if ((timeLeft > 1) && (timeLeft < 10)) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = 'Time remaining: 00:0' + timeLeft;
      timeLeft--;
    } 

*/