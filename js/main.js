  /*----- constants -----*/

  /*----- state variables -----*/
let questions;
let questionsIdx;
let score;
let playerAnswer;
let correctAnswer;
let answers;
let question;



  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/
  
  function init() {
    questions = [
      {
        question: 'Text of question 1',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1 // index of 'Answer 1'
        playerAnswer: null // this is the property you update when they
                           // click an answer when this is the current question
      },
      {
        question: 'Text of question 2',
        answers: ['Another Answer 1', 'Another Answer 2', 'Another Answer 3', 'Another Answer 4'],
        // Note: Ensure the correctAnswer index matches the answers array
        correctAnswer: 1 // index of 'Another Answer 2'
        playerAnswer: null // this is the property you update when they
                           // click an answer when this is the current question
      },
      {
        question: 'Text of question 3',
        answers: ['Another Answer 1', 'Another Answer 2','Another Answer 3', 'Another Answer 4'],
        correctAnswer: 1 // index of 'Another Answer 2'
        playerAnswer: null // this is the property you update when they
                           // click an answer when this is the current question
      },
      {
        question: 'Text of question 4',
        answers: ['Another Answer 1', 'Another Answer 2', 'Another Answer 3', 'Another Answer 4'],
        correctAnswer: 1 // index of 'Another Answer 2'
        playerAnswer: null // this is the property you update when they
                           // click an answer when this is the current question
      },
      {
        question: 'Text of question 5',
        answers: ['Another Answer 1', 'Another Answer 2', 'Another Answer 3', 'Another Answer 4'],
        correctAnswer: 1 // index of 'Another Answer 2'
        playerAnswer: null // this is the property you update when they
                           // click an answer when this is the current question
      },
    ];
}
    // TODO: Initialize other state variables, e.g.,
    curQuestionIdx = 0;
    ...
    ...
    render();  // Always call render after state has been initialized/updated
  }

  function render() {
    if (score === null) {
      renderQuestion();
      // show the [Next] button
    } else {
      // Player has answered all questions
      // so render the score
      // Hide the [Next] button
    }
  }

    function renderQuestion() {
        // Render the current question and its answers
        const question = questions[questionsIdx];
        // Update the DOM with the question text and answers
        // e.g., document.getElementById('question').innerText = question.question;
        // Loop through question.answers to display them
    }   
